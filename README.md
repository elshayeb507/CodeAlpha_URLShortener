# 🔗 URL Shortener

A simple backend project built with Node.js and Express that shortens long URLs and redirects users to the original link.

This project was built as part of the **CodeAlpha Internship Program** (Backend Development track).

## ✨ Features

- Shorten any long URL into a short, unique code
- Redirect users from the short URL to the original URL
- Simple and clean web interface
- Data persisted using SQLite

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework for building the API
- **SQLite3** — Lightweight database for storing URLs
- **nanoid** — Library used to generate unique short codes
- **HTML/CSS/JavaScript** — Frontend interface

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) installed on your machine

### Installation

1. Clone this repository
```bash
   git clone <your-repo-link>
   cd CodeAlpha_URLShortener
```

2. Install dependencies
```bash
   npm install
```

3. Run the server
```bash
   node Server.js
```

4. Open your browser and go to: http://localhost:3000


## 📡 API Endpoints

| Method | Endpoint          | Description                          |
|--------|--------------------|---------------------------------------|
| POST   | `/api/shorten`     | Accepts a long URL, returns a short URL |
| GET    | `/:short_url`      | Redirects to the original long URL     |

### Example Request
```json
POST /api/shorten
{
  "original_url": "https://www.google.com"
}
```

### Example Response
```json
{
  "original_url": "https://www.google.com",
  "short_url": "http://localhost:3000/aB3xK9pL"
}
```

## 📂 Project Structure

url-shortener/

├── public/

│   └── index.html

├── .gitignore

├── package.json

├── Server.js

└── README.md


## 👤 Author

Yasin Mohamed Mohamed Mustafa

---

*This project was completed as part of the CodeAlpha Internship Program.*