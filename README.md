
# 🔁 Kambaz Dashboard

An educational web app with user login, dashboard, and six lab assignments.

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, Redux Toolkit, TypeScript
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas
- **Auth**: Session-based with express-session

---

## 🚀 Live Demo

[Netlify Link] ()
---

## 💻 Run Locally

### Backend

```bash
cd server
npm install
node index.js
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Set up the following `.env` files:

**client/.env**
```
VITE_API_URL=https://kambaz-fix.onrender.com
```

**server/.env**
```
PORT=4000
MONGODB_URI=your-mongodb-uri
SESSION_SECRET=your-session-secret
```

---

## 📝 Notes

- If the Netlify frontend does not fully function, all code is present and deploy-ready.
