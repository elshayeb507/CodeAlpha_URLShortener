const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { nanoid } = require('nanoid');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const db = new sqlite3.Database('urls.db');

db.run(`
  CREATE TABLE IF NOT EXISTS URLS(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  short_url TEXT UNIQUE NOT NULL,
  original_url TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
  `);





app.post('/api/shorten', (req, res) => {
  const { original_url } = req.body;

  if (!original_url) {
    return res.status(400).json({ error: 'Original URL is required' });
  }


  const short_url = nanoid(8);

  db.run(
    'INSERT INTO URLS (short_url, original_url) VALUES (?, ?)',
    [short_url, original_url],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create short URL' });
      }


      res.json({
        original_url: original_url,
        short_url: `http://localhost:${port}/${short_url}`,
      });
    }
  );

});






app.get('/:short_url', (req, res) => {
  const { short_url } = req.params;

  db.get(
    'SELECT original_url FROM URLS WHERE short_url = ?',
    [short_url],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to retrieve original URL' });
      }

      if (!row) {
        return res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
      }

      res.redirect(row.original_url);
    }
  );
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});







