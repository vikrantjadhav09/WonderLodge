# 🏡 WonderLodge - Travel Booking App  

> A full-stack web application that allows users to explore, create, review, and manage travel lodge listings with image uploads, authentication, and cloud integration.  

🎯 **Live Demo:** [https://wonderlodge.onrender.com/](https://wonderlodge.onrender.com/)  


---

## 🌟 Overview  

**WonderLodge** is a dynamic **travel booking and lodge management platform** built using the **MERN stack (Node.js, Express, MongoDB, EJS)**.  
It enables users to:
- Create and upload lodge listings with photos  
- Add, edit, and delete listings  
- Review listings  
- Securely register and log in  
- Store images using **Cloudinary**  

This project was developed as a **major full-stack development project** showcasing backend integration, middleware, MVC architecture, and secure user authentication.

---

## 🚀 Tech Stack  

| Technology | Purpose |
|-------------|----------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB + Mongoose** | Database & ODM |
| **EJS** | Templating engine |
| **Passport.js** | Authentication |
| **Cloudinary + Multer** | Image upload & storage |
| **Joi** | Schema validation |
| **connect-flash & express-session** | Session & flash messages |
| **dotenv** | Environment variable management |

---

## 🏗️ Folder Structure

```bash
WonderLodge/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── public/
│   ├── css/
│   └── js/
│
├── views/
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   └── show.ejs
│   │
│   ├── users/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   │
│   └── error.ejs
│
├── .env
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── schema.js
└── README.md

```

---
## 🔐 Authentication Flow  

- User registration and login handled using **Passport.js**  
- Passwords are securely hashed with **passport-local-mongoose**  
- Session management via **connect-mongo**  

---

## ☁️ Image Uploads  

- Uses **Multer** for file upload handling  
- Stores images in **Cloudinary** under folder `WonderLodge_DEV`  
- Only allows `.png`, `.jpg`, `.jpeg` formats  

---

## 🌈 Features  

✅ User Authentication (Signup, Login, Logout)  
✅ Add / Edit / Delete Lodge Listings  
✅ Upload Images (via Cloudinary)  
✅ Post and Delete Reviews  
✅ Ownership & Authorization checks (Only owners can edit/delete)  
✅ Flash messages for success/error  
✅ MVC-based clean project structure  
✅ 404 and error handling with custom messages  

---

## 🧠 Future Enhancements  

🚧 Add advanced search & filtering for listings  
🚧 Integrate payment gateway for booking  
🚧 Add Google Maps API for location display  
🚧 Improve responsive design & UI  
🚧 Add multi-image uploads and image carousel  

---
---

## 👤 Developer  

**👨‍💻 Vikrant Jadhav**  
📧 [Vikrantj636@gmail.com](mailto:Vikrantj636@gmail.com)  
🔗 [LinkedIn: jadhav-vikrant09](https://www.linkedin.com/in/jadhav-vikrant09)  
💻 [GitHub: vikrantjadhav09](https://github.com/vikrantjadhav09)

---

## 🏁 Conclusion  

**WonderLodge** is a complete full-stack web application demonstrating real-world CRUD operations, user management, cloud storage integration, and professional project structure — ideal for portfolio and deployment.

---

## 🪶 License  
This project is open-source and available under the [MIT License](LICENSE).

