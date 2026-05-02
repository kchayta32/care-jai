# 💖 Care-Jai (แคร์ใจ) — ระบบเพื่อนคู่ใจและผู้ช่วยดูแลผู้สูงอายุด้วย AI

**Care-Jai** คือแอปพลิเคชันผู้ช่วยด้านสุขภาพที่ออกแบบมาเพื่อเชื่อมช่องว่างระหว่าง **"ผู้สูงอายุ"** และ **"ผู้ดูแล"** โดยใช้ AI ในการตรวจจับความผิดปกติ (Anomaly Detection) และสร้างอินเทอร์เฟซที่ใช้งานง่ายเป็นพิเศษสำหรับผู้สูงอายุ เพื่อให้มั่นใจว่าผู้สูงอายุจะได้รับการดูแลอย่างปลอดภัยและลดความโดดเดี่ยวด้วยเพื่อน AI ที่เข้าใจความรู้สึก

---

## 🌟 คุณสมบัติหลัก (Key Features)

### 👵 สำหรับผู้สูงอายุ (Senior AI Companion)
- **Empathetic Voice AI**: ใช้ Azure OpenAI `gpt-4o-mini` ให้ความรู้สึกอบอุ่น สุภาพ และให้กำลังใจ
- **High Accessibility Interface**: ออกแบบมาให้ใช้งานง่าย ปุ่มขนาดใหญ่ เหมาะสำหรับผู้สูงอายุ
- **Mood Tracking**: ระบบระบุอารมณ์และความต้องการ เพื่อแจ้งให้ผู้ดูแลทราบทันที

### 🛡️ สำหรับผู้ดูแล (Caregiver Dashboard)
- **AI-Powered Anomaly Detection**: วิเคราะห์ข้อมูลจากเซนเซอร์เพื่อตรวจจับความผิดปกติ (เช่น ลืมทานยา) และแจ้งเตือนทันที
- **Health Metrics Visualization**: ติดตามแนวโน้มสุขภาพและสภาวะทางอารมณ์แบบเรียลไทม์
- **Quick Actions**: สามารถติดต่อผู้สูงอายุได้ทันทีเมื่อเกิดเหตุฉุกเฉิน

---

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: FastAPI (Python)
- **AI Model**: Azure OpenAI (`gpt-4o-mini`)
- **Privacy**: PDPA Compliance, Differential Privacy, E2E Encryption

---

## 📂 โครงสร้างโปรเจกต์

```text
Care-Jai/
├── demo/                    ← 🎯 Static HTML Demo (ไม่ต้องติดตั้งอะไร)
│   ├── index.html           ← เปิดไฟล์นี้ใน Browser เพื่อ demo
│   ├── README.md
│   └── screens/             ← หน้าจอทั้ง 8 หน้า (ภาษาไทย)
│
├── mobile-app/              ← 📱 React + FastAPI App (ต้องรัน server)
│   ├── backend/             ← Python FastAPI + Azure OpenAI
│   │   ├── main.py
│   │   ├── requirements.txt
│   │   └── .env.example
│   ├── frontend/            ← React + Vite Application
│   │   └── src/
│   ├── run_demo.bat         ← One-click Demo Launcher
│   └── README.md
│
└── README.md                ← ไฟล์นี้
```

---

## 🚀 วิธีใช้งาน

### วิธีที่ 1: Static HTML Demo (แนะนำสำหรับการนำเสนอ)

> ไม่ต้องติดตั้งอะไร ไม่ต้องรัน server ไม่ต้องมี API Key

1. เปิดไฟล์ **`demo/index.html`** ในเบราว์เซอร์ (Chrome / Edge แนะนำ)
2. คลิกแท็บด้านบนเพื่อสลับระหว่าง 8 หน้าจอ
3. ดู UI/UX ภาษาไทยครบทุกหน้า

📖 รายละเอียดเพิ่มเติม → [demo/README.md](demo/README.md)

---

### วิธีที่ 2: Full Interactive Demo (React + AI Backend)

> ต้องมี Node.js, Python, และ Azure OpenAI API Key

1. **ตั้งค่า Backend**:
   - เข้าไปที่โฟลเดอร์ `mobile-app/backend`
   - Copy ไฟล์ `.env.example` เป็น `.env`
   - ใส่ `AZURE_OPENAI_API_KEY` และ `AZURE_OPENAI_ENDPOINT` ของคุณ

2. **รันระบบ**:
   - ดับเบิลคลิกไฟล์ **`mobile-app/run_demo.bat`**
   - สคริปต์จะติดตั้ง dependencies, รัน Backend, รัน Frontend และเปิด Browser ให้โดยอัตโนมัติ

📖 รายละเอียดเพิ่มเติม → [mobile-app/README.md](mobile-app/README.md)

---

## 🎨 Design Highlights

| คุณสมบัติ | รายละเอียด |
|-----------|-----------|
| 🎨 **Warm Gold** (#d4af37) | สีหลัก สื่อถึงความอบอุ่นและการดูแล |
| 🌿 **Calming Green** (#3b6934) | สถานะสุขภาพดี / แนวโน้มที่ดีขึ้น |
| 📐 **Material Design 3** | ดีไซน์ทันสมัย พร้อม Fluent UI principles |
| ♿ **Accessibility First** | ปุ่มใหญ่ อ่านง่าย เหมาะกับผู้สูงอายุ |
| 🇹🇭 **Thai Localization** | UI/UX ภาษาไทยทั้งหมด |
| 🧘 **Thai Wellness** | ฤๅษีดัดตน (Ruesi Dat Ton) integration |

---

## 👥 ทีมพัฒนา

**Care-Jai Team — Group 8** | Stitch Hackathon 2026

---

*Built with 💛 for Thai elderly care*
