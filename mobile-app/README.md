# 🌸 Care-Jai (แคร์ใจ) — ระบบดูแลผู้สูงอายุอัจฉริยะ

**Care-Jai** คือแอปพลิเคชันผู้ช่วยด้านสุขภาพที่ออกแบบมาเพื่อเชื่อมช่องว่างระหว่าง "ผู้สูงอายุ" และ "ผู้ดูแล" โดยใช้ AI ในการตรวจจับความผิดปกติ (Anomaly Detection) และเป็นเพื่อนคุยที่เข้าใจความรู้สึกของผู้สูงอายุ

## 🚀 คุณสมบัติหลัก (Key Features)

### 👵 สำหรับผู้สูงอายุ (Senior AI Companion)
- **Empathetic Voice AI**: ใช้ Azure OpenAI `gpt-4o-mini` ให้ความรู้สึกอบอุ่น สุภาพ และให้กำลังใจ
- **High Accessibility Interface**: ออกแบบมาให้ใช้งานง่าย ปุ่มขนาดใหญ่ เหมาะสำหรับผู้สูงอายุ
- **Mood Tracking**: ระบบระบุอารมณ์และความต้องการ เพื่อแจ้งให้ผู้ดูแลทราบทันที

### 🛡️ สำหรับผู้ดูแล (Caregiver Dashboard)
- **AI-Powered Anomaly Detection**: วิเคราะห์ข้อมูลจากเซนเซอร์เพื่อตรวจจับความผิดปกติ (เช่น ลืมทานยา) และแจ้งเตือนทันที
- **Health Metrics Visualization**: ติดตามแนวโน้มสุขภาพและสภาวะทางอารมณ์แบบเรียลไทม์
- **Quick Actions**: สามารถติดต่อผู้สูงอายุได้ทันทีเมื่อเกิดเหตุฉุกเฉิน

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: FastAPI (Python)
- **AI Model**: Azure OpenAI (`gpt-4o-mini`)

## ⚙️ วิธีการติดตั้งและรัน Demo (Quick Start)

เพื่อให้สามารถเริ่มต้นใช้งานได้ทันที เราได้เตรียมสคริปต์อัตโนมัติไว้ให้แล้ว:

1. **ตั้งค่า Backend**:
   - เข้าไปที่โฟลเดอร์ `backend`
   - Copy ไฟล์ `.env.example` เป็น `.env` 
   - ใส่ `AZURE_OPENAI_API_KEY` และ `AZURE_OPENAI_ENDPOINT` ของคุณ
2. **รันระบบ**:
   - ดับเบิลคลิกไฟล์ `run_demo.bat` ในโฟลเดอร์หลัก
   - สคริปต์จะติดตั้ง dependencies, รัน Backend, รัน Frontend และเปิด Browser ให้โดยอัตโนมัติ

## 📂 โครงสร้างโปรเจกต์
```text
mobile-app/
├── backend/             # Python FastAPI Server
│   ├── main.py          # AI Logic & API Endpoints
│   └── requirements.txt  # Library dependencies
├── frontend/            # React Application
│   └── src/             # UI Components & Logic
└── run_demo.bat         # One-click Demo Launcher
```

---
*Built with 💛 Group 8*
