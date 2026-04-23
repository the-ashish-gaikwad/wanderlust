# 🌍 Wanderlust

A full-stack travel listing web app where users can discover, create, and manage destination listings with image uploads — inspired by platforms like Airbnb.

🔗 **Live Demo:** [wanderlust-emom.onrender.com/listings](https://wanderlust-emom.onrender.com/listings)

---

## ✨ Features

- Browse travel and stay listings from around the world
- Create, edit, and delete your own listings with photo uploads
- User authentication — register, log in, and log out securely
- Authorization — only listing owners can edit or delete their posts
- Interactive maps powered by MapTiler
- Flash messages for user feedback
- Server-side form validation with Joi
- Persistent sessions stored in MongoDB

---

## 🛠 Tech Stack

| Layer       | Technology                              |
|-------------|----------------------------------------|
| Backend     | Node.js, Express                        |
| Database    | MongoDB, Mongoose                       |
| Templating  | EJS, ejs-mate                           |
| Auth        | Passport.js (Local Strategy)            |
| File Upload | Multer, Cloudinary                      |
| Maps        | MapTiler Client                         |
| Validation  | Joi                                     |
| Styling     | CSS, Bootstrap                                  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v24+`
- MongoDB (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account
- A [MapTiler](https://www.maptiler.com/) API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/the-ashish-gaikwad/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret

   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret

   MAP_TOKEN=your_maptiler_api_key
   ```

4. **(Optional) Seed the database**
   ```bash
   node seed/index.js
   ```

5. **Start the server**
   ```bash
   npm start
   ```

   The app will be running at `http://localhost:8080`

---

## 📁 Project Structure

```
wanderlust/
├── controllers/     # Route handler logic
├── models/          # Mongoose schemas
├── routes/          # Express route definitions
├── views/           # EJS templates
├── public/          # Static assets (CSS, JS, images)
├── utils/           # Helper utilities & error handling
├── seed/            # Database seed data
├── middleware.js    # Custom middleware (auth, validation)
├── schema.js        # Joi validation schemas
├── cloudConfig.js   # Cloudinary configuration
└── app.js           # App entry point
```

---

## 📄 License

This project is licensed under the ISC License.
