# Experiment 10 - WebSocket Chat Application

A real-time chat application built with **React (Vite)** on the frontend and **Spring Boot** on the backend, communicating over **STOMP WebSocket**.

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19, Vite, SockJS, STOMP.js  |
| Backend   | Spring Boot 4, WebSocket, STOMP   |
| Protocol  | WebSocket over SockJS             |

---

## Project Structure

```
exp10/
├── frontend/       # React + Vite app
├── backend/        # Spring Boot Maven project
└── screenshots/    # Output screenshots
```

---

## How to Run

### Backend
1. Open `backend/` in Eclipse or IntelliJ
2. Run `DemoWebsocketApplication.java`
3. Server starts on `http://localhost:8081`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
App runs on `http://localhost:5175`

---

## Output Screenshots

### Backend - Spring Boot Running
![Backend Running](https://raw.githubusercontent.com/kavisha1902/Full_stack_2_Kavisha_Sharma/master/Full-Stack-Lab-main/exp10/screenshots/backend-running.png)

### Frontend - WebSocket Chat UI
![Chat Frontend](https://raw.githubusercontent.com/kavisha1902/Full_stack_2_Kavisha_Sharma/master/Full-Stack-Lab-main/exp10/screenshots/chat-frontend.png)
