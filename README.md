Here’s your **final, updated README.md** with the correct production URL (`https://kidrove-workshop-xi.vercel.app`). Copy and paste this into your `README.md` file.

```markdown
# 🤖 AI & Robotics Summer Workshop Landing Page

A full‑stack landing page for Kidrove’s AI & Robotics workshop – built with **React**, **Express**, and **MongoDB**. Features dynamic animations, a real‑time countdown timer, a registration form with advanced validation, and a secure backend API.

## 🌐 Live Demos

- **Frontend (Vercel):** [https://kidrove-workshop-xi.vercel.app](https://kidrove-workshop-xi.vercel.app)  
- **Backend API (Render):** [https://kidrove-workshop-zv5i.onrender.com](https://kidrove-workshop-zv5i.onrender.com)  
- **GitHub Repository:** [https://github.com/Prathibha856/kidrove-workshop](https://github.com/Prathibha856/kidrove-workshop)

---

## ✨ Features

| Section | Description |
|---------|-------------|
| **Hero Section** | Dynamic rotating AI thought generator, gradient title, smooth scroll‑to‑form button |
| **Workshop Highlights** | Glass‑morphism cards (age, duration, mode, fee, start date, certificate) |
| **Countdown Timer** | Live countdown to 15 July 2026 (days, hours, minutes, seconds) |
| **About Workshop** | Split‑screen layout with animated stats and code‑snippet illustration |
| **Why Choose** | Hover‑animated cards with icons and descriptions |
| **Learning Outcomes** | Staggered grid (6 items) with emoji icons and hover effects |
| **Weekly Roadmap** | Timeline cards with animated entry, gradient background, progress bar |
| **FAQ Section** | Accordion with smooth open/close animations (5 FAQs) |
| **Registration Form** | React Hook Form + Zod validation, loading spinner, toast notifications |
| **Dark Mode Toggle** | Full site dark/light theme (persists across page) |
| **Back to Top Button** | Appears after scrolling down |
| **Responsive Design** | Works on desktop, tablet, and mobile |

---

## 🛠️ Tech Stack

| Layer       | Technologies |
|-------------|--------------|
| **Frontend** | React, Framer Motion, React Hook Form, Zod, React Hot Toast |
| **Backend**  | Node.js, Express.js, Mongoose, express‑rate‑limit, cors, dotenv |
| **Database** | MongoDB Atlas |
| **Deployment** | Vercel (frontend), Render (backend) |
| **Version Control** | Git & GitHub |

---

## 📦 Local Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository
```bash
git clone https://github.com/Prathibha856/kidrove-workshop.git
cd kidrove-workshop
```

### 2. Frontend setup
```bash
cd kidrove-workshop
npm install
npm start
```
Runs on `http://localhost:3000`

### 3. Backend setup
```bash
cd kidrove-backend
npm install
```

Create a `.env` file inside `kidrove-backend`:
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
```

Then run the backend:
```bash
npm run dev
```
Runs on `http://localhost:5000`

### 4. Test the full stack
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000/api/enquiry` (POST)

---

## 🚀 Deployment

- **Frontend (Vercel):** Connect your GitHub repo → Vercel auto‑deploys on every push.
- **Backend (Render):** Create a Web Service, set root directory to `kidrove-backend`, add environment variable `MONGODB_URI`, and deploy.

---

## 📝 Short Note (Approach & Improvements)

> **My approach** was to build a complete full‑stack application with a component‑based React frontend, an Express.js backend, and a MongoDB database. I focused on creating a visually engaging, responsive UI with dynamic elements like a rotating AI thought generator, countdown timer, and scroll‑triggered animations using **Framer Motion**. For the backend, I built a secure REST API with rate limiting, validation (React Hook Form + Zod), and integrated it with MongoDB Atlas via Mongoose. The registration form submits data to `/api/enquiry` and saves it to the cloud database.
>
> **Given more time**, I would add user authentication, email confirmations (Nodemailer), an admin dashboard to view all enrolments, unit tests with Jest, and a CI/CD pipeline with GitHub Actions. I would also implement Redis caching for high traffic and improve accessibility. This project taught me full‑stack integration, from UI polish to cloud database management.

---

## 📸 Screenshots

*(Add screenshots of your live site here – optional but recommended)*

---

## 📄 License

This project is for educational / internship submission purposes only.

---

## 👩‍💻 Author

**Prathibha**  
[GitHub](https://github.com/Prathibha856)

---

## 🙏 Acknowledgements

- Kidrove for the design inspiration
- React, Three.js, Framer Motion communities
- Vercel & Render for free hosting
