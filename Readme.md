### 💬 Real-Time Chat Application (MERN Stack)

A full-stack real-time chat application built using the MERN stack with Socket.IO for instant communication.
The application supports secure authentication, real-time messaging, and online/offline user status.

--- 

### 🚀 Live Demo

Frontend (Vercel):
https://chat-app-nine-zeta-56.vercel.app/

---
### 🛠 Tech Stack
#### Frontend
React.js
Tailwind CSS
Axios
Socket.IO Client

#### Backend

Node.js
Express.js
Socket.IO
MongoDB & Mongoose
JWT Authentication
Cookie-based Authentication
CORS

#### Deployment

Vercel (Frontend)
Render (Backend)
MongoDB Atlas (Database)

---

### ✨ Features

* User Signup & Login
* JWT Authentication using HttpOnly Cookies
* Real-time One-to-One Chat
* Online / Offline User Status
* Secure Cross-Origin Communication
* Responsive UI
* Scalable Socket Architecture

### 🔐 Authentication Flow

- User logs in using email and password
- JWT token is generated on the backend
- Token is stored in HttpOnly cookies
- Protected routes are verified using middleware

### 🔄 Real-Time Communication

- Socket.IO enables real-time messaging
- One user can have multiple socket connections
- Online status is managed using socket mapping
- Status updates are broadcast to connected users

---

### Strucutre
```
chat-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── context/
│   └── pages/
```
--- 

### Key Learnings

* Secure cookie-based authentication in production
* Proper CORS handling for deployed applications
* Managing multiple socket connections per user
* Real-time application design using Socket.IO
* Debugging deployment issues (401, CORS, cookies)

### 🚧 Future Enhancements

* Group chat functionality
* Typing indicator
* Message read receipts
* Media & file sharing
* Push notifications

