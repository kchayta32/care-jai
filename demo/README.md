# 🌸 Care-Jai Demo — UI Prototype (Static HTML)

> **เปิดไฟล์ `index.html` ในเบราว์เซอร์เพียงครั้งเดียว → คลิกแท็บต่างๆ เพื่อ demo ทุกหน้าจอ**
> ไม่ต้องติดตั้งอะไร ไม่ต้องรัน server ไม่ต้องมี Azure API Key

## 🚀 วิธีใช้งาน

```
1. เปิดไฟล์ index.html ในเบราว์เซอร์ (Chrome / Edge แนะนำ)
2. คลิกแท็บด้านบนเพื่อสลับระหว่างหน้าจอต่างๆ
3. หน้าจอจะแสดงใน phone frame จำลอง พร้อมข้อมูลอธิบายด้านข้าง
```

> ⚠️ ต้องมีอินเทอร์เน็ตเพื่อโหลด TailwindCSS CDN และ Google Fonts

## 📱 หน้าจอทั้งหมด (8 หน้าจอ)

| # | หน้าจอ | คำอธิบาย |
|---|--------|----------|
| 1 | 🏠 **แดชบอร์ดหลัก** | หน้าแรกผู้ดูแล — แจ้งเตือน AI เมื่อตรวจพบความผิดปกติ + กราฟแนวโน้ม |
| 2 | 📊 **สัญญาณชีพ** | ข้อมูลอัตราหัวใจ, SpO2, คุณภาพการนอน |
| 3 | 💓 **สุขภาพ & อารมณ์** | วิเคราะห์เสียงพูดด้วย AI, อุปกรณ์ IoT, ข้อมูลเชิงลึกเชิงป้องกัน |
| 4 | 🧘 **กิจวัตรสุขภาพ** | Timeline กิจวัตร + คำแนะนำ AI ฤๅษีดัดตน |
| 5 | ⚠️ **แจ้งเตือนฉุกเฉิน** | Escalation flow — โทร / ส่ง AI Voice Reminder / ปิดการแจ้งเตือน |
| 6 | 🔒 **ความเป็นส่วนตัว** | ตั้งค่า PDPA, E2E Encryption, Differential Privacy |
| 7 | 🤖 **AI สำหรับผู้สูงอายุ** | Voice AI Orb + ปุ่มด่วนขนาดใหญ่สำหรับผู้สูงอายุ |
| 8 | 📱 **แอปมือถือ (Thai)** | รวม Caregiver + Senior view + AI Chat จำลอง |

## 📂 โครงสร้างไฟล์

```text
demo/
├── index.html              ← 🎯 เปิดไฟล์นี้เพื่อ demo
├── README.md               ← ไฟล์นี้
└── screens/
    ├── caregiver1.html      ← แดชบอร์ดหลัก (TH)
    ├── caregiver2.html      ← สัญญาณชีพ (TH)
    ├── health.html          ← สุขภาพ & อารมณ์ (TH)
    ├── routine.html         ← กิจวัตรสุขภาพ (TH)
    ├── escalation.html      ← แจ้งเตือนฉุกเฉิน (TH)
    ├── privacy.html         ← ความเป็นส่วนตัว (TH)
    ├── companion.html       ← AI ผู้สูงอายุ (TH)
    └── mobile-app.html      ← แอปมือถือรวม (TH)
```

## 🛠️ เทคโนโลยี

- **Frontend**: HTML, TailwindCSS CDN, Vanilla JS
- **Design System**: Material Design 3, Fluent UI principles
- **UI/UX**: ภาษาไทยทั้งหมด, Accessibility First (ปุ่มใหญ่, อ่านง่าย)

---
*Built with 💛 Group 8*
