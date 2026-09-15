<div align="center">

# 🏥 MediGuide AI

### Your Intelligent Healthcare Companion

**AI-powered healthcare guidance with multilingual support, doctor consultations, digital prescriptions, and emergency services.**

[✨ Features](#-features) • [🚀 Quick Start](#-getting-started) • [📊 Architecture](#-architecture) • [👥 Team](#-team) • [🤝 Contributing](#-contributing)

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.9.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![Whereby](https://img.shields.io/badge/Whereby-Video-FF5A5F?style=for-the-badge)

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)

</div>

---

## 📋 Table of Contents

- [🌟 Why MediGuide AI?](#-why-mediguide-ai)
- [✨ Features](#-features)
- [🎯 Key Highlights](#-key-highlights)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📱 Screenshots](#-screenshots)
- [🌍 Language Support](#-language-support)
- [🏗️ Project Structure](#️-project-structure)
- [🔧 Configuration](#-configuration)
- [🎤 Voice Emotion Detection](#-voice-emotion-detection)
- [📊 Architecture](#-architecture)
- [🎨 UI/UX Design](#-uiux-design)
- [🧪 Testing](#-testing)
- [📦 Deployment](#-deployment)
- [🔒 Security](#-security)
- [📈 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👥 Team](#-team)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Support](#-support)

---

## 🌟 Why MediGuide AI?

Healthcare accessibility can be challenging because of geographical limitations, language barriers, long waiting times, and limited access to immediate medical guidance.

**MediGuide AI** provides a centralized digital healthcare experience through AI-powered assistance, multilingual support, doctor consultations, digital prescriptions, and emergency services.

### 🎯 The Challenge

| Challenge | Description |
|---|---|
| 🏥 Limited Access | Many people have limited access to immediate healthcare guidance. |
| 🌍 Language Barriers | Healthcare information isn't always available in regional languages. |
| ⏱️ Long Wait Times | Patients often wait for even basic consultations or information. |

### 💡 Our Solution

MediGuide AI provides:

- 🤖 AI-powered healthcare guidance
- 🌍 Support for 13 Indian languages
- 🔍 Symptom checking (text, voice, image)
- 🎤 Voice-based input and emotion analysis
- 👨‍⚕️ Doctor consultations & appointment booking
- 🎥 Real-time video consultations
- 💊 Digital prescriptions with QR verification
- 🚑 Emergency ambulance services
- 💬 Doctor-patient communication
- 💳 Online payment support

> *"Making quality healthcare more accessible to people across India, in their own language."*

---

## ✨ Features

### 🤖 AI-Powered Medical Chatbot
- Natural-language conversations with medical context
- Multilingual healthcare interaction
- Category-based medical guidance
- Emergency symptom detection

### 🔍 Advanced Symptom Checker
**Input methods:** Text · Voice · Image
**Analysis:** Urgency classification · Emotion classification · Voice-quality analysis · Medical keyword detection

### 🎥 Video Consultation System
- Real-time video consultations via Whereby
- Appointment-based secure access
- Call duration tracking & in-call chat
- Full consultation history

### 💊 Digital Prescription System
- Digital prescription creation with PDF generation
- QR-code verification
- Unique prescription IDs — format: `RX-YYYY-NNNNNN`
- Doctor authentication & digital signature

### 🚑 Emergency Ambulance System
- Location-based ambulance tracking
- Route assistance and emergency booking
- Ambulance mission dashboard with live status

### 👨‍⚕️ Doctor Dashboard
- Appointment & prescription management
- Patient communication and analytics
- Video consultation access

### 💳 Payment Support
- UPI payment support with verification
- Consultation fee and payment history tracking

### 🌍 Multilingual Support
- Real-time language switching with native scripts
- Voice input across all 13 supported languages

---

## 🎯 Key Highlights

| Feature | Description |
|---|---|
| 🌍 Multilingual | 13 Indian languages |
| 🤖 AI-Powered | AI-assisted healthcare guidance |
| 🎤 Voice Analysis | Voice feature and emotion analysis |
| 🔍 Symptom Checker | Text, voice, and image-based inputs |
| 🎥 Video Calls | Real-time doctor consultations |
| 💊 Digital Rx | Digital prescriptions with PDF and QR verification |
| 💬 Real-time Chat | Doctor-patient communication |
| 🔒 Authentication | Firebase authentication |
| 📱 Responsive | Desktop, tablet, and mobile support |
| ⚡ Fast | Vite-powered frontend |

---

## 🛠️ Tech Stack

**Frontend:** React 18.3.1 · TypeScript 5.6.3 · Vite 6.0.1 · React Router DOM 6.28.0 · CSS Modules

**Backend & Database:** Firebase (Authentication, Firestore, Cloud Functions, Hosting)

**Video & Communication:** Whereby API · WebRTC

**Documents & Verification:** jsPDF · QRCode.js

**Audio & Voice:** Web Speech API · Meyda (audio feature extraction) · File API · LocalStorage API

**Development Tools:** ESLint · Prettier · Jest · React Testing Library · TypeScript

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm or Yarn
- Git
- Firebase account
- Whereby account (for video consultations)

### 1. Clone the Repository
```bash
git clone https://github.com/MariyamSeemab/Mediguide-CMC5.git
cd Mediguide-CMC5
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
```bash
cp .env.example .env
```
Add your Firebase and Whereby credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_WHEREBY_API_KEY=your_whereby_api_key
```
> ⚠️ Never commit real API keys or private credentials to GitHub.

### 4. Start the Development Server
```bash
npm run dev
```
Open `http://localhost:5173`

### 5. Build for Production
```bash
npm run build
```
Output is generated in `dist/`.

### 6. Preview the Production Build
```bash
npm run preview
```

---

## 📱 Screenshots

Screenshots live in `docs/screenshots/`:
```
docs/
└── screenshots/
    ├── homepage.png
    ├── chatbot.png
    ├── symptom-checker.png
    ├── doctor-dashboard.png
    └── patient-dashboard.png
```

| Homepage | AI Chatbot |
|---|---|
| ![Homepage](docs/screenshots/homepage.png) | ![Chatbot](docs/screenshots/chatbot.png) |

| Symptom Checker | Doctor Dashboard |
|---|---|
| ![Symptom Checker](docs/screenshots/symptom-checker.png) | ![Doctor Dashboard](docs/screenshots/doctor-dashboard.png) |

> If a screenshot isn't yet in the repo, remove its reference until the file is added.

---

## 🌍 Language Support

| Language | Native Name | Code | Status |
|---|---|---|---|
| English | English | `en` | ✅ Complete |
| Hindi | हिंदी | `hi` | ✅ Complete |
| Tamil | தமிழ் | `ta` | ✅ Complete |
| Telugu | తెలుగు | `te` | ✅ Complete |
| Bengali | বাংলা | `bn` | ✅ Complete |
| Marathi | मराठी | `mr` | ✅ Complete |
| Gujarati | ગુજરાતી | `gu` | ✅ Complete |
| Kannada | ಕನ್ನಡ | `kn` | ✅ Complete |
| Malayalam | മലയാളം | `ml` | ✅ Complete |
| Punjabi | ਪੰਜਾਬੀ | `pa` | ✅ Complete |
| Odia | ଓଡ଼ିଆ | `or` | ✅ Complete |
| Assamese | অসমীয়া | `as` | ✅ Complete |
| Urdu | اردو | `ur` | ✅ Complete |

---

## 🏗️ Project Structure

```
Mediguide-CMC5/
│
├── public/                  # Static assets
│
├── src/
│   ├── components/
│   │   ├── BrowserNavigation.tsx
│   │   ├── DoctorPatientChat.tsx
│   │   ├── PrescriptionWriter.tsx
│   │   └── ProfilePhotoUpload.tsx
│   │
│   ├── config/
│   │   └── firebase.ts
│   │
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   ├── FirebaseAuthContext.tsx
│   │   └── LanguageContext.tsx
│   │
│   ├── pages/
│   │   ├── Homepage.tsx
│   │   ├── Chatbot.tsx
│   │   ├── SymptomChecker.tsx
│   │   ├── PatientDashboard.tsx
│   │   ├── DoctorDashboard.tsx
│   │   ├── DoctorDemoDashboard.tsx
│   │   ├── Appointments.tsx
│   │   ├── VideoConsultation.tsx
│   │   ├── PatientVideoConsultation.tsx
│   │   ├── AmbulanceDashboard.tsx
│   │   ├── VerifyPrescription.tsx
│   │   ├── Emergency.tsx
│   │   └── ...
│   │
│   ├── services/
│   │   ├── appointmentService.ts
│   │   ├── chatService.ts
│   │   ├── prescriptionService.ts
│   │   ├── pdfService.ts
│   │   ├── videoConsultationService.ts
│   │   ├── patientDataService.ts
│   │   ├── firebaseAppointmentService.ts
│   │   ├── firebaseDoctorReportService.ts
│   │   └── firebaseLabReportService.ts
│   │
│   ├── translations/
│   │   ├── en.json
│   │   ├── hi.json
│   │   ├── ta.json
│   │   └── ...
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── utils/
│   │   ├── numberLocalization.ts
│   │   └── demoData.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── Ambulance/                # Ambulance dashboard module
├── Disease detector 2/       # Disease detection module
├── docs/                     # Documentation & screenshots
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project.
2. Enable Authentication (Email/Password, Google if needed).
3. Create a Firestore database.
4. Enable Firebase Storage / Hosting if needed.
5. Add your Firebase config to `.env`.

### Whereby Setup (Video Consultations)
1. Create a Whereby account.
2. Get your API credentials from the dashboard.
3. Add them to `.env` as `VITE_WHEREBY_API_KEY`.

### Firestore Collections
```
appointments
doctorReports
labReports
```

### LocalStorage Keys
```
preferredLanguage
mediguide_users
mediguide_appointments
mediguide_appointments_{userId}
mediguide_patient_data_{userId}
mediguide_auto_reports_{userId}
mediguide_chats
mediguide_prescriptions
mediguide_video_rooms
mediguide_call_logs
```
> ⚠️ LocalStorage should not be treated as a secure store for sensitive medical information.

---

## 🎤 Voice Emotion Detection

MediGuide AI includes browser-based voice analysis designed to identify voice patterns that may indicate distress or urgency.

**How it works:** Voice Input → Microphone Permission → Audio Capture → Meyda Feature Extraction → Voice Feature Analysis → Medical Keyword Detection → Emotion Classification → Urgency Classification → Healthcare Guidance

### Audio Features Analyzed
Volume/RMS · Zero-crossing rate · Energy · Peak analysis · Variance · Dynamic range · Speech rate · Spectral flux

### Emotion Classification

| Emotion | Indicators | Urgency |
|---|---|---|
| Critical | Critical keywords + strong distress | 🔴 Critical |
| In Pain | Pain indicators + voice strain | 🟠 High |
| Distressed | Unstable voice + fast speech | 🟠 High |
| Anxious | Fast speech + anxiety indicators | 🟡 Medium |
| Weak/Tired | Low volume + fatigue indicators | 🟡 Medium |
| Calm | Stable voice characteristics | 🟢 Low |

> **Important:** Voice analysis is a supportive feature only and is not a medical diagnosis.

### Privacy
- 🎤 Microphone access requires explicit user permission
- 🔒 Audio is not stored unnecessarily
- 💻 Processing happens client-side where implemented
- 🔐 Sensitive healthcare data should always be handled securely

---

## 📊 Architecture

```
User → React UI (TypeScript + Vite)
         │
         ├── Firebase Authentication
         ├── React Context + Local State
         └── Application Services
                  │
                  ├── AI / Symptom Analysis
                  ├── Voice Analysis (Meyda)
                  ├── Whereby Video Consultation
                  ├── Firebase Firestore
                  ├── Firebase Storage
                  └── Emergency Services
```

### Appointment Flow
Patient selects a doctor and time → Appointment Service creates the record in Firestore → Doctor dashboard fetches and displays it in real time.

### Video Consultation Flow
Either party opens the appointment → app creates/joins a Whereby room scoped to that appointment → both parties connect for video, audio, and chat.

---

## 🎨 UI/UX Design

**Design principles:** User-first · Accessible · Responsive · Fast · Visually consistent

**Color palette**
```
Primary:   #00D9FF
Secondary: #4A90E2
Success:   #50C878
Warning:   #FFB84D
Error:     #FF6B6B
```

**Typography**
```
Headings: Inter / System UI
Body:     System UI
Code:     Fira Code / Consolas / Monaco
```

---

## 🧪 Testing

```bash
npm test                 # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
```

| Tool | Purpose |
|---|---|
| Jest | Unit testing |
| React Testing Library | Component testing |
| TypeScript | Type checking |
| ESLint | Code quality |
| Prettier | Code formatting |
| Cypress | End-to-end testing (planned) |

### Testing Video Consultation
1. Open the app in two browser sessions.
2. Log in as a doctor in one, a patient in the other.
3. Create or open an appointment.
4. Start the consultation from the doctor dashboard and join as the patient.
5. Test video, audio, and chat.

---

## 📦 Deployment

**Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

**Vercel** — deploy directly after configuring environment variables.

**Netlify** — deploy the generated `dist/` folder.

> Make sure all required environment variables are configured on the deployment platform before deploying.

---

## 🔒 Security

- 🔐 Firebase Authentication
- 👥 Role-based access (Patient / Doctor / Admin)
- 🛡️ Protected routes
- 🔑 Environment-based configuration
- 📄 Prescription verification via QR
- 🎥 Appointment-based video room access

**Never commit:** `.env` files, API keys, private credentials, service-account JSON files, database credentials. Use environment variables for all sensitive configuration.

---

## 📈 Roadmap

**✅ Completed**
- AI healthcare chatbot, symptom checker (text/voice/image), voice emotion & urgency detection, 13 Indian languages, doctor booking, health reports, emergency services
- Video consultations, digital prescriptions with PDF & QR verification, doctor-patient chat, appointment sync, doctor dashboard, ambulance dashboard, UPI payment support

**🚧 Planned**
- Advanced AI integration
- Payment gateway integration (Razorpay/Stripe)
- SMS/Email notifications
- Advanced analytics dashboard
- Mobile app (React Native)
- Pharmacy & health insurance integration
- Wearable device integration
- Multi-factor authentication

---

## 🤝 Contributing

Contributions are welcome!

**Ways to contribute:** report bugs · suggest features · improve documentation · add translations · improve UI/UX · add tests · improve performance

```bash
# Fork the repository, then:
git clone https://github.com/MariyamSeemab/Mediguide-CMC5.git
cd Mediguide-CMC5
git checkout -b feature/AmazingFeature

# Make your changes, then:
git add .
git commit -m "Add AmazingFeature"
git push origin feature/AmazingFeature
```
Then open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](https://github.com/MariyamSeemab/Mediguide-CMC5/blob/main/LICENSE) file for details.

---

## 👥 Team

### Project Maintainers

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/M-Mahek-03">
        <img src="https://github.com/M-Mahek-03.png?size=200" width="100" alt="Mahek Mukadam"/>
        <br /><sub><b>Mahek Mukadam</b></sub>
      </a>
      <br />GitHub
    </td>
    <td align="center">
      <a href="https://github.com/MariyamSeemab">
        <img src="https://github.com/MariyamSeemab.png?size=200" width="100" alt="Mariyam Usmani"/>
        <br /><sub><b>Mariyam Usmani</b></sub>
      </a>
      <br />GitHub
    </td>
    <td align="center">
      <a href="https://github.com/nadeem221751">
        <img src="https://github.com/nadeem221751.png?size=200" width="100" alt="Nadeem Shaikh"/>
        <br /><sub><b>Nadeem Shaikh</b></sub>
      </a>
      <br />GitHub
    </td>
    <td align="center">
      <a href="https://github.com/Electrogreek">
        <img src="https://github.com/Electrogreek.png?size=200" width="100" alt="Nehal Shaikh"/>
        <br /><sub><b>Nehal Shaikh</b></sub>
      </a>
      <br />GitHub
    </td>
  </tr>
</table>

**Together, we're building the future of accessible healthcare in India! 🇮🇳**

---

## 🙏 Acknowledgments

Special thanks to:

- 💙 Open Source Community
- 🔥 Firebase Team
- ⚛️ React Team
- ⚡ Vite Team
- 🎥 Whereby Team
- 📄 jsPDF Team
- 🎤 Meyda Audio Library
- 🏥 Healthcare professionals
- 🇮🇳 Indian developer community
- 👥 All project contributors

---

## 📞 Support

If you have questions or run into an issue:

- 🐛 [Open a GitHub Issue](https://github.com/MariyamSeemab/Mediguide-CMC5/issues)
- 💬 Start a Discussion
- 📧 Contact: `mariyamm.seemab@gmail.com`

---

<div align="center">

### 🇮🇳 Made with ❤️ for Better Healthcare Accessibility in India

**MediGuide AI** — Built with React • TypeScript • Firebase • Vite • Whereby

⭐ **If you find this project useful, consider giving it a star!** ⭐

</div>
