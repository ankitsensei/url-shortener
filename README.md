# 🔗 URL Shortener

A modern URL Shortener web application built with React, TypeScript, Node.js, and MongoDB. Users can generate short URLs instantly, copy them with a single click, and scan QR codes for quick access.

![Project Preview](./preview.png)

---

## ✨ Features

- Shorten long URLs instantly
- Generate unique short links
- QR Code generation for every shortened URL
- One-click copy to clipboard
- Toast notifications
- Responsive modern UI
- Redirect users from short URL to original URL

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios
- React Toastify
- React Icons

### Backend
- Node.js
- Express.js
- NanoID

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/url-shortener.git

cd url-shortener
```

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

## ▶️ Run Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Application will be available at:

```text
Frontend: http://localhost:5174

Backend: http://localhost:5555
```

---

## 🚀 API Endpoints

### Create Short URL

```http
POST /api/shorten
```

Request Body:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "http://localhost:5555/abc123"
}
```

---

### Redirect URL

```http
GET /:shortId
```

Redirects the user to the original URL.

---

## 📱 Screenshots
![alt text](frontend/public/UrlShortener.jpg)

---

## 👨‍💻 Author

Ankit Bhagat

Feel free to fork, improve, and contribute to the project.