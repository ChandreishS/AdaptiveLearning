# AdaptiveLearning

Personalized, NCERT-aligned education platform designed for government schools with limited connectivity and resources.

---

## Project Overview

AdaptiveLearning is designed to overcome challenges in rural education such as limited connectivity, low literacy, and resource constraints.  
It supports **offline-first learning**, **voice-based interaction**, and **personalized recommendations**.

---

## System Architecture

- **Student Devices**: React Native apps with local SQLite for offline-first operation.  
- **School Sync Gateway**: Optional Raspberry Pi hub for local sync.  
- **Cloud Backend**: Node.js API with PostgreSQL database and S3 for content storage.  
- **GenAI Microservice**: Provides adaptive hints, remedial explanations, and summaries.

---

## Technology Stack

### Frontend & Mobile
- React Native (cross-platform mobile apps)  
- SQLite for local storage  
- Offline caching and sync queues  
- STT/TTS for speech-based interaction  

### Backend & Cloud
- Node.js (REST/GraphQL API)  
- PostgreSQL for central data  
- AWS S3 for content storage  
- Optional Python microservices  

---

## Features

- **Curriculum Mapping**: Lessons aligned with NCERT, tagged with grade, chapter, and competencies.  
- **Personalization Engine**: Adaptive recommendations, mastery tracking, and spaced repetition.  
- **Voice-first Learning**: Local STT/TTS, simple confirmatory interactions.  
- **Offline-first Sync**: Queued updates, conflict resolution, and smart minimal sync.  
- **Teacher Tools**: Class dashboards, remedial worksheets, scheduling.  
- **Parent Engagement**: SMS/WhatsApp summaries, progress cards, and multilingual support.  

---

## Prerequisites

- **Node.js** (v14+)  
- **npm** or **yarn**  
- **PostgreSQL** (local or remote instance)  
- (Optional) MongoDB or SQLite depending on your dev setup  
- Git installed  

---

## Installation & Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/ChandreishS/AdaptiveLearning.git
   cd AdaptiveLearning
   ```

2. Install **server dependencies**:

   ```bash
   cd server
   npm install
   ```

3. Install **client dependencies**:

   ```bash
   cd ../client
   npm install
   ```

4. Create `.env` files:  

   **server/.env**
   ```text
   PORT=5000
   DATABASE_URL=postgres://user:password@localhost:5432/adaptive_learning
   JWT_SECRET=your_secret_key
   ```

   **client/.env**
   ```text
   REACT_APP_API_URL=http://localhost:5000/api
   ```

---

## Running the Application

1. Start the backend server:

   ```bash
   cd server
   npm run dev
   ```

2. Start the frontend client:

   ```bash
   cd client
   npm start
   ```

The app will be available at:  
Frontend → `http://localhost:3000`  
Backend → `http://localhost:5000`

---

## Troubleshooting

- **Database connection issues**: Check `DATABASE_URL` in `.env`  
- **Port conflicts**: Change `PORT` variable in `.env`  
- **CORS issues**: Enable frontend origin in server config  

---

## Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Added new feature"`)  
4. Push to your fork and open a Pull Request  

---

## License

MIT License  
© 2025 Chandreish S / AdaptiveLearning  

