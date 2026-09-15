Pasted markdown(10).md
File
now for this project 

Yes. If you want the README to include a proper MIT License section, replace the current ending with this:

📜 License

This project is licensed under the MIT License.

MIT License

Copyright (c) 2026 Hackathon Copilot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Also, if you want the GitHub repository itself to recognize it as a license, create a root-level file named:

LICENSE

and put the same MIT License text inside it.

Your repository will then have:

Hackathon-Copilot/
├── LICENSE
├── README.md
├── backend/
├── frontend/
├── infra/
└── docs/

That is preferable to having the license text only inside README.md.

Pasted markdown(20260915-035516).md
File

enhance this also i want my username in field of help instead of hers mahek one keep team one as it is Editing Mediguide-CMC5/README.md at main · MariyamSeemab/Mediguide-CMC5

Yes. I checked the current README.md in your MariyamSeemab/Mediguide-CMC5 repository. It is quite detailed, but it can be made much cleaner and more professional. The current version also has a few things that should be corrected: the clone commands still point to Mahek's old repository, the architecture is ASCII-based, the README has duplicate License sections, and the Support section currently points to Mahek's email.

For the Help/Support section, I'll use your GitHub username MariyamSeemab instead of Mahek's contact, while leaving the Team section exactly as it is.

Below is a cleaner, GitHub-ready version with Mermaid diagrams.

🏥 MediGuide AI
Your Intelligent Healthcare Companion

MediGuide AI is a multilingual healthcare platform designed to make healthcare guidance, symptom assessment, doctor consultations, digital prescriptions, and emergency assistance more accessible.

AI-powered healthcare guidance • 13 Indian languages • Doctor consultations • Digital prescriptions • Emergency support

🌟 Overview

Access to healthcare can be difficult because of:

Limited healthcare availability
Language barriers
Long waiting times
Difficulty understanding medical information
Limited access to doctors in remote areas
Emergency situations requiring quick assistance

MediGuide AI brings multiple healthcare capabilities together in one platform.

It provides:

🤖 AI-powered medical guidance
🔍 Symptom checking
🎤 Voice-based input and analysis
🌍 Support for 13 Indian languages
👨‍⚕️ Doctor consultation
🎥 Video consultations
💊 Digital prescriptions
🔐 Prescription verification through QR codes
🚑 Emergency ambulance assistance
💬 Doctor-patient communication
📊 Patient and doctor dashboards
💳 UPI-based payment support
🎯 What MediGuide AI Does
flowchart LR
    U[👤 User]

    U --> AI[🤖 AI Medical Guidance]
    U --> SC[🔍 Symptom Checker]
    U --> DOC[👨‍⚕️ Doctor Consultation]
    U --> EM[🚑 Emergency Services]

    AI --> LANG[🌍 13 Languages]
    SC --> VOICE[🎤 Voice Analysis]
    SC --> IMAGE[📸 Image Input]

    DOC --> VIDEO[🎥 Video Consultation]
    DOC --> RX[💊 Digital Prescription]

    RX --> QR[🔐 QR Verification]

    EM --> GPS[📍 GPS Tracking]
    EM --> ROUTE[🗺️ Route Optimization]
✨ Key Features
🤖 AI-Powered Medical Chatbot
Natural-language healthcare conversations
Support for 13 Indian languages
46+ medical categories
Context-aware conversations
Emergency symptom detection
Personalized health guidance
🔍 Advanced Symptom Checker

MediGuide supports multiple forms of input:

Input	Capability
⌨️ Text	Describe symptoms naturally
🎤 Voice	Speak symptoms in supported languages
📸 Image	Upload images for assessment
🧠 AI Analysis	Analyze symptoms and identify urgency
Urgency Classification

The system classifies situations into:

🔴 Critical
🟠 High
🟡 Medium
🟢 Low
🎤 Voice Emotion & Urgency Analysis

MediGuide analyzes voice characteristics to identify possible signs of distress and urgency.

flowchart TD
    A[🎤 User Voice] --> B[Audio Capture]
    B --> C[Feature Extraction]

    C --> D[Volume]
    C --> E[Energy]
    C --> F[Zero Crossing Rate]
    C --> G[Pitch]
    C --> H[Speech Rate]
    C --> I[Voice Stability]

    D --> J[🧠 Analysis Engine]
    E --> J
    F --> J
    G --> J
    H --> J
    I --> J

    J --> K[Emotion Classification]
    J --> L[Urgency Detection]

    K --> M[Calm]
    K --> N[Anxious]
    K --> O[Distressed]
    K --> P[In Pain]
    K --> Q[Weak / Tired]
    K --> R[Critical]

    L --> S[🟢 Low]
    L --> T[🟡 Medium]
    L --> U[🟠 High]
    L --> V[🔴 Critical]
Voice Features

The current implementation extracts characteristics such as:

RMS / volume
Signal energy
Zero-crossing rate
Peak average
Standard deviation
Dynamic range
Speech rate
Spectral flux

Privacy: Voice analysis is designed to happen in the browser without storing the audio data.

🌍 Multilingual Healthcare

MediGuide AI supports 13 Indian languages with native-script support.

Language	Code
English	en
Hindi	hi
Tamil	ta
Telugu	te
Bengali	bn
Marathi	mr
Gujarati	gu
Kannada	kn
Malayalam	ml
Punjabi	pa
Odia	or
Assamese	as
Urdu	ur
flowchart LR
    U[👤 User]

    U --> L[🌍 Language Selection]

    L --> EN[English]
    L --> HI[Hindi]
    L --> TA[Tamil]
    L --> TE[Telugu]
    L --> BN[Bengali]
    L --> MR[Marathi]
    L --> GU[Gujarati]
    L --> KN[Kannada]
    L --> ML[Malayalam]
    L --> PA[Punjabi]
    L --> OR[Odia]
    L --> AS[Assamese]
    L --> UR[Urdu]

    EN --> AI[🤖 Healthcare Guidance]
    HI --> AI
    TA --> AI
    TE --> AI
    BN --> AI
    MR --> AI
    GU --> AI
    KN --> AI
    ML --> AI
    PA --> AI
    OR --> AI
    AS --> AI
    UR --> AI
👨‍⚕️ Doctor Consultation

Patients can interact with doctors through:

Appointment booking
Appointment management
Real-time messaging
Video consultations
Digital prescriptions
Consultation history
Doctor profile information
🎥 Video Consultation

Video consultations use the Whereby API and WebRTC-based communication.

sequenceDiagram
    participant P as Patient
    participant A as MediGuide
    participant D as Doctor

    P->>A: Book appointment
    A->>D: Appointment notification

    D->>A: Confirm appointment
    A->>P: Confirmation

    P->>A: Join consultation
    D->>A: Join consultation

    A->>P: Secure video room
    A->>D: Secure video room

    P->>D: Video / Audio / Chat
    D->>P: Consultation

    D->>A: Create prescription
    A->>P: Prescription available
Video Features
HD video calls
Secure appointment-based rooms
Call duration tracking
In-call chat
Mobile-friendly interface
Consultation history
💊 Digital Prescription System

Doctors can create professional digital prescriptions.

Features include:

Prescription generation
PDF export
Unique prescription IDs
Digital doctor authentication
QR-code verification
Public verification
Prescription Flow
flowchart LR
    D[👨‍⚕️ Doctor] --> P[📝 Create Prescription]
    P --> ID[Generate Unique ID]
    ID --> PDF[📄 Generate PDF]
    PDF --> QR[🔐 Generate QR Code]

    QR --> PAT[👤 Patient]
    QR --> VERIFY[🔎 Verification Page]

    VERIFY --> VALID[✅ Valid Prescription]
    VERIFY --> INVALID[❌ Invalid Prescription]

Prescription IDs follow the format:

RX-YYYY-NNNNNN
🚑 Emergency Ambulance System

MediGuide includes an emergency-response workflow with:

One-tap emergency booking
Real-time ambulance location
GPS tracking
Route optimization
Mission dashboard
Sound alerts
Mission tracking
Earnings tracking
flowchart TD
    P[👤 Patient] --> E[🚨 Emergency Request]

    E --> A[🚑 Find Ambulance]
    A --> GPS[📍 GPS Location]

    GPS --> R[🗺️ Route Optimization]
    R --> D[🚑 Ambulance Dispatch]

    D --> T[📍 Live Tracking]
    T --> H[🏥 Hospital / Destination]

    D --> DB[(📊 Mission Data)]
💳 Payment Support

The application provides UPI-based payment functionality.

Supported payment interfaces include:

Google Pay
PhonePe
Paytm
BHIM

Features:

UPI QR generation
Payment confirmation
Consultation fee tracking
Payment history
Animated payment interface
🏗️ System Architecture
flowchart TD
    USER[👤 User]

    UI[🖥️ React + TypeScript + Vite]

    STATE[🧠 React Context API]
    SERVICES[⚙️ Service Layer]

    AUTH[🔐 Firebase Authentication]
    DB[(🔥 Firebase Firestore)]
    STORAGE[💾 LocalStorage]

    VIDEO[🎥 Whereby API]
    AUDIO[🎤 Web Speech API + Meyda]
    PDF[📄 jsPDF]
    QR[🔐 QRCode.js]

    USER --> UI

    UI --> STATE
    STATE --> SERVICES

    SERVICES --> AUTH
    SERVICES --> DB
    SERVICES --> STORAGE

    SERVICES --> VIDEO
    UI --> AUDIO
    SERVICES --> PDF
    SERVICES --> QR
🔄 Application Data Flow
flowchart LR
    USER[👤 User Action]
    COMPONENT[⚛️ React Component]
    CONTEXT[🧠 Context]
    SERVICE[⚙️ Service Layer]
    FIREBASE[🔥 Firebase]
    STORAGE[💾 LocalStorage]
    UPDATE[🔄 UI Update]

    USER --> COMPONENT
    COMPONENT --> CONTEXT
    CONTEXT --> SERVICE

    SERVICE --> FIREBASE
    SERVICE --> STORAGE

    FIREBASE --> UPDATE
    STORAGE --> UPDATE

    UPDATE --> COMPONENT
🛠️ Technology Stack
Frontend
React 18.3.1
TypeScript 5.6.3
Vite 6.0.1
React Router DOM 6.28.0
CSS Modules
Backend & Database
Firebase
Firebase Authentication
Firebase Firestore
Firebase Cloud Functions
Firebase Hosting
Video
Whereby API
WebRTC
Document Generation
jsPDF
QRCode.js
Audio & Voice
Web Speech API
Meyda Audio Library
Browser Audio APIs
Development
TypeScript
ESLint
Prettier
Jest
React Testing Library
📁 Project Structure
CMC-5/
├── public/
│   └── static assets
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
│   │   ├── Appointments.tsx
│   │   ├── VideoConsultation.tsx
│   │   ├── PatientVideoConsultation.tsx
│   │   ├── AmbulanceDashboard.tsx
│   │   ├── VerifyPrescription.tsx
│   │   └── Emergency.tsx
│   │
│   ├── services/
│   │   ├── appointmentService.ts
│   │   ├── chatService.ts
│   │   ├── prescriptionService.ts
│   │   ├── pdfService.ts
│   │   ├── videoConsultationService.ts
│   │   ├── patientDataService.ts
│   │   └── firebaseAppointmentService.ts
│   │
│   └── ...
│
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
🚀 Getting Started
Prerequisites

Install:

Node.js 18+
npm or Yarn
Git
Firebase account
Whereby account for video consultations
1. Clone the Repository
git clone https://github.com/MariyamSeemab/Mediguide-CMC5.git
cd Mediguide-CMC5

The original README still referenced M-Mahek-03/CMC-5. The commands above point to the current repository instead.

2. Install Dependencies
npm install

or:

yarn install
3. Configure Environment Variables

Create a .env file from the example:

cp .env.example .env

Configure the required values:

VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_WHEREBY_API_KEY=your_whereby_api_key_here

Never commit real credentials or secrets to GitHub.

4. Start the Development Server
npm run dev

or:

yarn dev

Open:

http://localhost:5173
🏭 Production Build

Create an optimized production build:

npm run build

The generated production files will be available in:

dist/

Preview the production build:

npm run preview
🧪 Testing

Run tests:

npm test

Watch mode:

npm run test:watch

Coverage:

npm run test:coverage
Testing Stack
Jest
React Testing Library
TypeScript strict mode
ESLint
Prettier
Cypress — planned for E2E testing
🔐 Security

MediGuide implements several security-related controls:

Firebase authentication
Role-based access
Protected routes
Secure Firestore access
Appointment-based video rooms
Prescription QR verification
Controlled microphone access
No intentional storage of voice recordings
Environment variables for configuration
Role Model
flowchart TD
    AUTH[🔐 Firebase Authentication]

    AUTH --> PATIENT[👤 Patient]
    AUTH --> DOCTOR[👨‍⚕️ Doctor]
    AUTH --> ADMIN[🛡️ Admin]
    AUTH --> AMB[🚑 Ambulance]

    PATIENT --> PP[Patient Portal]
    DOCTOR --> DP[Doctor Dashboard]
    ADMIN --> AP[Admin Panel]
    AMB --> AD[Emergency Dashboard]
🎨 UI / UX

MediGuide follows a user-first healthcare design approach.

Design Principles
👥 User-first experience
♿ Accessibility-focused design
📱 Responsive layouts
⚡ Fast Vite-powered development
🎨 Clear visual hierarchy
🔴 Strong emergency-state visibility
🌍 Multilingual support
Color Palette
Purpose	Color
Primary	#00D9FF
Secondary	#4A90E2
Success	#50C878
Warning	#FFB84D
Error	#FF6B6B
📊 Project Workflow
flowchart TD
    START[👤 User Opens MediGuide]

    START --> LANG[🌍 Select Language]
    LANG --> AUTH[🔐 Login / Signup]

    AUTH --> PATIENT[Patient Portal]

    PATIENT --> CHAT[🤖 AI Chatbot]
    PATIENT --> SYM[🔍 Symptom Checker]
    PATIENT --> APPT[📅 Doctor Appointment]
    PATIENT --> EMERGENCY[🚑 Emergency]
    PATIENT --> RX[💊 Prescription]

    APPT --> VIDEO[🎥 Video Consultation]
    VIDEO --> CHATDOC[💬 Doctor-Patient Chat]
    VIDEO --> RX

    SYM --> RESULT[📊 Health Insights]

    EMERGENCY --> AMB[🚑 Ambulance Dispatch]
    AMB --> TRACK[📍 Live Tracking]
🧪 Test Accounts

The current project documentation provides demo accounts for testing.

Role	Email	Password
👨‍⚕️ Doctor	dr.rajesh@mediguide.com	doctor123
👤 Patient	mariyam@email.com	mariyam@123
🚑 Ambulance	ambulance@email.com	ambulance@123
🛡️ Admin	admin@email.com	admin@123

Security note: These credentials should only be used for demo/testing environments. Never use shared demo credentials in production.

📦 Deployment
Firebase Hosting
npm install -g firebase-tools

firebase login

firebase init hosting

npm run build

firebase deploy
Other Deployment Options

MediGuide can also be deployed using platforms such as:

Vercel
Netlify
Firebase Hosting

See:

DEPLOYMENT_GUIDE.md

for project-specific deployment instructions.

📈 Roadmap
✅ Completed
AI chatbot
46+ medical categories
Text symptom checker
Voice symptom input
Image symptom input
Voice emotion analysis
Audio feature extraction
Medical keyword detection
Urgency classification
13 Indian languages
Doctor consultation booking
Health report generation
Emergency services
Real-time video consultation
Digital prescriptions
QR verification
Doctor-patient chat
Appointment synchronization
Doctor dashboard
Call tracking
Ambulance response system
UPI payment QR interface
🚧 In Progress
Advanced AI integration
Payment gateway integration
SMS / Email notifications
Advanced analytics dashboard
🔮 Planned
React Native mobile application
Pharmacy integration
Health insurance integration
Wearable-device integration
Stronger healthcare compliance
Multi-factor authentication
🌐 Browser Support
Browser	Support
Chrome	✅
Firefox	✅
Safari	✅
Edge	✅
Opera	✅
Mobile Safari	✅
Chrome Mobile	✅
🤝 Contributing

Contributions are welcome.

You can contribute by:

🐛 Reporting bugs
💡 Suggesting features
📝 Improving documentation
🌍 Adding translations
🎨 Improving UI/UX
🧪 Adding tests
Contribution Workflow
git checkout -b feature/AmazingFeature

git add .

git commit -m "Add AmazingFeature"

git push origin feature/AmazingFeature

Then open a Pull Request.

For detailed contribution guidelines, see:

CONTRIBUTING.md
📄 License

This project is licensed under the MIT License.

See the LICENSE file for the complete license text.

👥 Team
Project Maintainers

{Mahek Mukadam}
GitHub

{Mariyam Usmani}
GitHub

{Nadeem Shaikh}
GitHub

{Nehal Shaikh}
GitHub

Together, we're building the future of accessible healthcare in India! 🇮🇳

🙏 Acknowledgments

Special thanks to:

💙 Open Source Community
🔥 Firebase Team
⚛️ React Team
⚡ Vite Team
🎥 Whereby Team
📄 jsPDF Team
🏥 Healthcare Professionals
🇮🇳 Indian Developer Community
👥 All Contributors
📞 Help & Support

Need help with MediGuide AI?

🐛 Report a bug: Open an issue in this repository
💡 Request a feature: Open a feature request
💬 Questions: Start a GitHub Discussion
👩‍💻 Project contact: @MariyamSeemab

GitHub:
https://github.com/MariyamSeemab/Mediguide-CMC5

For security vulnerabilities, please follow the instructions in SECURITY.md rather than posting sensitive details publicly.

🏥 Important Medical Disclaimer

MediGuide AI is intended to provide educational and informational healthcare assistance.

It should not be considered a replacement for a qualified healthcare professional, medical diagnosis, emergency medical services, or professional treatment.

For serious or life-threatening symptoms, users should contact appropriate emergency services or seek immediate professional medical attention.

AI-generated healthcare information may contain errors and should be independently verified by qualified healthcare professionals.

❤️ Built for Accessible Healthcare
                    🏥
             MEDIGUIDE AI
                    │
        ┌───────────┼───────────┐
        │           │           │
       🤖          👨‍⚕️          🚑
       AI         Doctors     Emergency
        │           │           │
        └───────────┼───────────┘
                    │
             🌍 13 Languages
                    │
                    ▼
          Accessible Healthcare
              for Everyone 🇮🇳

Made with ❤️ for better healthcare accessibility in India.

⭐ If you find MediGuide AI useful, consider starring the repository.

What I specifically changed
Help/Support: removed Mahek's email and replaced it with your GitHub identity: @MariyamSeemab.
Team: kept the four team members unchanged, as requested.
Clone commands: changed the old M-Mahek-03/CMC-5 references to your actual repository.
Converted the old ASCII architecture/data-flow diagrams into Mermaid, which GitHub renders automatically.
Removed the duplicate License section.
Added a proper medical disclaimer, which is especially important for a healthcare/AI project.
Added clearer role, data-flow, video consultation, prescription, emergency, multilingual, and security diagrams.
Made the README more suitable for a GitHub portfolio/project showcase rather than looking like a raw development document.
Kept the existing technical stack and feature claims aligned with the current README.
Pasted markdown(20260915-035806).md
File
make it more detailed like proper emojis and all like how this this repo is looking unique 

Yes — the current README already has a strong visual foundation, but it can look much more like a polished, unique GitHub showcase rather than a normal project README.

I’d keep the Team section exactly as it is, but upgrade the rest with:

🏥 stronger healthcare branding
✨ hero section + animated typing
📊 project metrics/cards
🧠 detailed feature sections
🔄 proper Mermaid architecture/workflows
🎤 dedicated Voice Emotion AI explanation
🌍 multilingual showcase
🔐 security section
🧪 testing + quality
🚀 deployment
🗺️ roadmap
💻 developer workflow
💙 support section using @MariyamSeemab
removal of old M-Mahek-03/CMC-5 repository references outside the unchanged Team section
cleaner GitHub-native structure

The original already establishes the 13-language support, AI chatbot, symptom checker, video consultation, prescriptions, ambulance system, doctor dashboard and payment capabilities, so I've kept those as the core identity.

<div align="center">

<img src="https://img.icons8.com/fluency/96/000000/medical-heart.png" alt="MediGuide AI" width="120"/>

🏥 MediGuide AI
Your Intelligent Healthcare Companion

AI-powered • Multilingual • Voice-enabled • Doctor-connected • Emergency-ready

<p> <strong> Empowering accessible healthcare guidance through AI, voice technology, digital consultations and multilingual support. </strong> </p>

<br/>

<a href="#-getting-started"> <img src="https://img.shields.io/badge/🚀%20Get%20Started-00D9FF?style=for-the-badge" /> </a> <a href="#-features"> <img src="https://img.shields.io/badge/✨%20Explore%20Features-4A90E2?style=for-the-badge" /> </a> <a href="#-architecture"> <img src="https://img.shields.io/badge/🏗️%20Architecture-7B61FF?style=for-the-badge" /> </a> <a href="#-contributing"> <img src="https://img.shields.io/badge/🤝%20Contribute-50C878?style=for-the-badge" /> </a>

<br/><br/>

<img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-12.9.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"/> <img src="https://img.shields.io/badge/Whereby-Video-FF5A5F?style=for-the-badge&logo=webrtc&logoColor=white"/>

<br/>

<img src="https://img.shields.io/badge/13%20Indian%20Languages-🇮🇳-orange?style=flat-square"/> <img src="https://img.shields.io/badge/AI%20Powered-🤖-blue?style=flat-square"/> <img src="https://img.shields.io/badge/Voice%20AI-🎤-purple?style=flat-square"/> <img src="https://img.shields.io/badge/Real--Time-⚡-green?style=flat-square"/> <img src="https://img.shields.io/badge/MIT-License-green.svg?style=flat-square"/>

</div>

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=700&lines=AI-Powered+Healthcare+Platform;13+Indian+Languages+Supported;Voice+Emotion+%26+Urgency+Detection;Real-Time+Doctor+Consultations;Digital+Prescriptions+%26+QR+Verification;Emergency+Ambulance+Assistance" />

</div>

🌟 What is MediGuide AI?

MediGuide AI is a multilingual healthcare platform designed to make healthcare guidance more accessible, interactive and convenient.

Instead of providing only a traditional appointment experience, the platform brings multiple healthcare capabilities together in one application:

🤖 AI Healthcare Guidance
🔍 Symptom Assessment
🎤 Voice & Emotion Analysis
🌍 13 Indian Languages
👨‍⚕️ Doctor Consultations
🎥 Real-Time Video Calls
💊 Digital Prescriptions
🚑 Emergency Assistance
💳 Digital Payment Support

The platform combines a modern React interface with Firebase services, browser-based voice analysis, video consultation technology and document-generation capabilities.

💡 Why MediGuide AI?

<div align="center">

🏥 Challenge	💡 MediGuide Approach
Limited access to immediate healthcare guidance	🤖 AI-powered healthcare assistant
Language barriers	🌍 Support for 13 Indian languages
Difficulty describing symptoms	🎤 Text + voice + image input
Lack of quick triage support	🚨 Urgency classification
Doctor availability issues	🎥 Online video consultation
Paper-based prescriptions	💊 Digital PDF prescriptions
Prescription authenticity concerns	🔐 QR-based verification
Emergency response delays	🚑 Ambulance assistance
Fragmented healthcare experience	🧩 Multiple healthcare tools in one platform

</div>

✨ Key Highlights

<div align="center">


	Capability	Highlights
🤖	AI Healthcare Assistant	Medical conversations and health guidance
🔍	Smart Symptom Checker	Text, voice and image-based input
🎤	Voice Emotion AI	Voice pattern and urgency analysis
🌍	Multilingual Healthcare	13 Indian languages
👨‍⚕️	Doctor Dashboard	Appointments, patients and prescriptions
🎥	Video Consultation	Real-time doctor-patient calls
💊	Digital Prescription	PDF + QR verification
🚑	Emergency System	Ambulance request and tracking
💳	UPI Payments	QR-based payment experience
💬	Real-Time Chat	Doctor-patient communication
🔐	Role-Based Access	Patient, Doctor and Admin experiences
📊	Analytics	Health and consultation insights

</div>

🚀 Features
🤖 1. AI-Powered Medical Chatbot

MediGuide AI provides an interactive healthcare assistant capable of understanding natural-language conversations.

What it provides
🧠 Intelligent conversational interaction
🏥 Support for 46+ medical categories
💭 Context-aware conversations
🚨 Emergency symptom identification
📊 Personalized health insights
🌍 Multilingual interaction
flowchart LR
    A["👤 User"] --> B["💬 Medical Query"]
    B --> C["🤖 AI Healthcare Assistant"]
    C --> D{"🚨 Emergency?"}

    D -->|Yes| E["🚑 Emergency Guidance"]
    D -->|No| F["🩺 Health Guidance"]

    E --> G["👨‍⚕️ Doctor / Emergency Support"]
    F --> H["📋 Recommended Next Steps"]
🔍 2. Advanced Symptom Checker

The symptom checker supports multiple ways of communicating health concerns.

📥 Input Methods
Input	Technology	Purpose
⌨️ Text	Text processing	Describe symptoms
🎤 Voice	Web Speech API	Speak naturally
📸 Image	File/Image API	Upload visual information
🎵 Voice Analysis	Meyda	Analyze voice characteristics
🧠 Assessment Capabilities
🎯 Urgency detection
🚨 Critical symptom detection
🎭 Emotion classification
🔍 Medical keyword recognition
📊 Voice quality analysis
⚡ Instant health insights
flowchart TD
    A["👤 Patient"] --> B{"📥 Choose Input"}

    B --> C["⌨️ Text"]
    B --> D["🎤 Voice"]
    B --> E["📸 Image"]

    C --> F["🧠 Symptom Analysis"]
    D --> G["🎵 Audio Feature Extraction"]
    E --> F

    G --> F
    F --> H["🔍 Medical Keyword Detection"]
    H --> I["🎯 Urgency Classification"]

    I --> J{"🚨 Severity"}

    J -->|Critical| K["🚑 Emergency Guidance"]
    J -->|High| L["👨‍⚕️ Doctor Consultation"]
    J -->|Medium| M["📋 Health Guidance"]
    J -->|Low| N["💚 General Advice"]

⚠️ MediGuide AI is intended to provide healthcare assistance and educational guidance. It is not a replacement for a qualified medical professional.

🎤 3. Voice Emotion & Urgency AI

One of the distinctive capabilities of MediGuide AI is its browser-based voice analysis system.

The system analyzes audio characteristics to identify patterns that may indicate distress, pain, anxiety or weakness.

🎵 Audio Features

Meyda is used for audio feature extraction including:

🔊 RMS / Volume
📈 Energy
🔄 Zero-Crossing Rate
📊 Peak Analysis
📉 Variance
🎚️ Dynamic Range
🗣️ Speech Rate
🌊 Spectral Flux
flowchart TD
    A["🎤 User Voice"] --> B["🎧 Browser Audio Capture"]
    B --> C["🎵 Meyda Audio Analysis"]

    C --> D["🔊 Volume"]
    C --> E["📈 Energy"]
    C --> F["🔄 ZCR"]
    C --> G["📊 Peak"]
    C --> H["📉 Variance"]
    C --> I["🗣️ Speech Rate"]
    C --> J["🌊 Spectral Flux"]

    D --> K["🧠 Feature Analysis"]
    E --> K
    F --> K
    G --> K
    H --> K
    I --> K
    J --> K

    K --> L["🔍 Medical Keywords"]
    L --> M["🎯 Emotion + Urgency"]
🎭 Classification Model
Emotion	Typical Indicators	Urgency
🟢 Calm	Stable tone and normal patterns	Low
🟡 Weak / Tired	Low volume and weakness indicators	Medium
🟡 Anxious	Fast speech and elevated pitch	Medium
🟠 Distressed	Unstable voice and fast speech	High
🟠 In Pain	Voice strain and pain indicators	High
🔴 Critical	Critical keywords + severe distress	Critical
🔒 Privacy

Voice analysis is designed around client-side processing:

🔐 Audio is analyzed in real time
🚫 Audio is not intentionally stored
💻 Processing occurs in the browser
☁️ Audio is not uploaded to a cloud service for this feature
🎙️ Microphone access requires explicit permission
🌍 4. Multilingual Healthcare

MediGuide AI supports 13 Indian languages with native-script support.

<div align="center">

🇮🇳 Language	Native Script	Code
🇬🇧 English	English	en
🇮🇳 Hindi	हिंदी	hi
🇮🇳 Tamil	தமிழ்	ta
🇮🇳 Telugu	తెలుగు	te
🇮🇳 Bengali	বাংলা	bn
🇮🇳 Marathi	मराठी	mr
🇮🇳 Gujarati	ગુજરાતી	gu
🇮🇳 Kannada	ಕನ್ನಡ	kn
🇮🇳 Malayalam	മലയാളം	ml
🇮🇳 Punjabi	ਪੰਜਾਬੀ	pa
🇮🇳 Odia	ଓଡ଼ିଆ	or
🇮🇳 Assamese	অসমীয়া	as
🇮🇳 Urdu	اردو	ur

</div>

flowchart LR
    A["👤 User"] --> B["🌍 Select Language"]

    B --> C["📝 Text"]
    B --> D["🎤 Voice"]
    
    C --> E["🧠 Healthcare Processing"]
    D --> E

    E --> F["💬 Localized Response"]

    F --> G["🇮🇳 हिंदी"]
    F --> H["தமிழ்"]
    F --> I["తెలుగు"]
    F --> J["मराठी"]
    F --> K["বাংলা"]
    F --> L["... + Other Languages"]
🎥 5. Real-Time Video Consultation

MediGuide AI integrates Whereby for doctor-patient video consultations.

Features
📹 HD video consultation
🔒 Appointment-based rooms
⏱️ Call duration tracking
💬 In-call messaging
📱 Responsive experience
📊 Consultation history
🎙️ Audio/video controls
sequenceDiagram
    participant P as 👤 Patient
    participant A as 📅 Appointment
    participant D as 👨‍⚕️ Doctor
    participant W as 🎥 Whereby

    P->>A: Book appointment
    A->>D: Appointment created
    D->>A: Confirm appointment
    A->>W: Generate/access consultation room
    P->>W: Join video room
    D->>W: Join video room
    W-->>P: Real-time consultation
    W-->>D: Real-time consultation
    P->>D: 💬 Chat / Consultation
    D->>P: 💊 Digital Prescription
💊 6. Digital Prescription System

Doctors can generate digital prescriptions after consultations.

Prescription capabilities
📝 Professional prescription format
📄 PDF generation
🔐 QR verification
🆔 Unique prescription IDs
✍️ Digital doctor authentication
🔍 Public verification
Prescription Flow
flowchart TD
    A["👨‍⚕️ Doctor"] --> B["📝 Create Prescription"]
    B --> C["💊 Medicine + Instructions"]
    C --> D["🆔 Generate Prescription ID"]
    D --> E["🔐 Generate QR Code"]
    E --> F["📄 Generate PDF"]
    F --> G["👤 Patient Receives Prescription"]

    G --> H["📱 Scan QR"]
    H --> I["🔍 Verify Prescription"]
    I --> J["✅ Authenticity Result"]

Example prescription ID:

RX-YYYY-NNNNNN
🚑 7. Emergency Ambulance System

The emergency module provides a dedicated workflow for requesting and managing ambulance assistance.

Capabilities
📍 Real-time GPS tracking
🗺️ Route optimization
⚡ One-tap emergency request
📊 Ambulance mission dashboard
💰 Mission earnings tracking
🔔 Audio notifications
flowchart TD
    A["👤 Patient"] --> B["🚨 Emergency Request"]
    B --> C["📍 Capture Location"]
    C --> D["🚑 Find Ambulance"]

    D --> E["🚗 Ambulance Assigned"]
    E --> F["🗺️ Route Calculation"]
    F --> G["📍 Live Tracking"]

    G --> H["🏥 Reach Destination"]
    H --> I["✅ Mission Completed"]
👨‍⚕️ 8. Doctor Dashboard

The doctor dashboard brings consultation-related activities into one workspace.

Doctor capabilities
📅 Appointment management
👤 Patient information
💬 Patient communication
📝 Digital prescriptions
📊 Analytics
🎥 Video consultations
📱 Profile management
📄 Medical reports
flowchart TD
    A["👨‍⚕️ Doctor Login"] --> B["🏥 Doctor Dashboard"]

    B --> C["📅 Appointments"]
    B --> D["👥 Patients"]
    B --> E["💬 Chat"]
    B --> F["🎥 Video Consultation"]
    B --> G["💊 Prescriptions"]
    B --> H["📊 Analytics"]
    B --> I["👤 Profile"]
💳 9. UPI Payment Experience

The platform includes a QR-based payment interface supporting popular Indian UPI applications.

Supported experience
📱 GPay
📱 PhonePe
📱 Paytm
📱 BHIM
🔳 QR code generation
✨ Animated scanning UI
✅ Payment verification
📊 Payment history
🔐 10. Role-Based Experience

MediGuide AI provides different experiences based on the user's role.

flowchart TD
    A["🔐 Authentication"] --> B{"👤 User Role"}

    B -->|Patient| C["👤 Patient Portal"]
    B -->|Doctor| D["👨‍⚕️ Doctor Dashboard"]
    B -->|Admin| E["🛡️ Admin Panel"]
    B -->|Ambulance| F["🚑 Emergency Dashboard"]

    C --> C1["📅 Appointments"]
    C --> C2["🤖 AI Assistant"]
    C --> C3["💊 Prescriptions"]
    C --> C4["🎥 Consultations"]

    D --> D1["📅 Manage Appointments"]
    D --> D2["💬 Patient Chat"]
    D --> D3["📝 Prescriptions"]
    D --> D4["📊 Analytics"]

    F --> F1["🚨 Missions"]
    F --> F2["📍 Tracking"]
    F --> F3["🔔 Alerts"]
🛠️ Technology Stack
🎨 Frontend
Technology	Purpose
⚛️ React 18.3.1	Component-based UI
📘 TypeScript 5.6.3	Type safety
⚡ Vite 6.0.1	Development and production tooling
🧭 React Router DOM 6.28.0	Client-side routing
🎨 CSS Modules	Component-scoped styling
🔥 Backend & Data
Technology	Purpose
🔥 Firebase 12.9.0	Backend-as-a-Service
🔐 Firebase Authentication	User authentication
🗄️ Firestore	NoSQL data storage
⚙️ Cloud Functions	Serverless backend logic
🌐 Firebase Hosting	Deployment
🎥 Communication
Whereby API
WebRTC
Browser audio APIs
📄 Documents
jsPDF
QRCode.js
🎤 Voice
Web Speech API
Meyda Audio Library
Browser Audio APIs
🧪 Development
Jest
React Testing Library
ESLint
Prettier
TypeScript
🏗️ Architecture
System Architecture
flowchart TB
    U["👤 Users"]

    UI["🎨 React + TypeScript UI"]
    ROUTER["🧭 React Router"]
    STATE["🧠 Context API + LocalStorage"]
    SERVICES["⚙️ Application Services"]

    AUTH["🔐 Firebase Authentication"]
    DB["🔥 Firestore"]
    CF["☁️ Cloud Functions"]

    VIDEO["🎥 Whereby / WebRTC"]
    VOICE["🎤 Browser Audio + Meyda"]
    PDF["📄 jsPDF"]
    QR["🔳 QRCode.js"]

    U --> UI
    UI --> ROUTER
    ROUTER --> STATE
    STATE --> SERVICES

    SERVICES --> AUTH
    SERVICES --> DB
    SERVICES --> CF
    SERVICES --> VIDEO
    SERVICES --> VOICE
    SERVICES --> PDF
    SERVICES --> QR
🔄 Application Data Flow
flowchart LR
    A["👤 User Action"] --> B["🎨 React Component"]
    B --> C["🧠 Context / State"]
    C --> D["⚙️ Service Layer"]

    D --> E["🔥 Firebase"]
    D --> F["🎥 Whereby"]
    D --> G["🎤 Browser Audio"]
    D --> H["📄 PDF / QR"]

    E --> I["📊 Application Data"]
    F --> I
    G --> I
    H --> I

    I --> J["🔄 UI Update"]
    J --> B
🧩 Project Structure
CMC-5/
│
├── 📁 public/
│   └── Static assets
│
├── 📁 src/
│   │
│   ├── 📁 components/
│   │   ├── BrowserNavigation.tsx
│   │   ├── DoctorPatientChat.tsx
│   │   ├── PrescriptionWriter.tsx
│   │   └── ProfilePhotoUpload.tsx
│   │
│   ├── 📁 config/
│   │   └── firebase.ts
│   │
│   ├── 📁 contexts/
│   │   ├── AuthContext.tsx
│   │   ├── FirebaseAuthContext.tsx
│   │   └── LanguageContext.tsx
│   │
│   ├── 📁 pages/
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
│   ├── 📁 services/
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
│   ├── 📁 translations/
│   │   ├── en.json
│   │   ├── hi.json
│   │   ├── ta.json
│   │   ├── te.json
│   │   └── ...
│   │
│   ├── 📁 types/
│   │   └── index.ts
│   │
│   ├── 📁 utils/
│   │   ├── numberLocalization.ts
│   │   └── demoData.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 vite.config.ts
└── 📄 README.md
🔧 Configuration
🔥 Firebase Setup
Create a Firebase project.
Enable Authentication.
Configure Email/Password and Google authentication if required.
Create a Firestore database.
Add the Firebase configuration to .env.
Environment Variables
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_WHEREBY_API_KEY=your_whereby_api_key_here

🔐 Never commit real credentials or secret keys to GitHub.

🗄️ Firestore Data Model

The application uses Firestore collections such as:

🔥 Firestore
│
├── 📅 appointments
├── 🩺 doctorReports
└── 🧪 labReports
💾 LocalStorage

The application also maintains selected client-side state using LocalStorage.

Examples:

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
📱 Screenshots

Add screenshots to docs/screenshots/ to showcase the application's interface.

🏠 Homepage




🤖 AI Chatbot




🔍 Symptom Checker




👨‍⚕️ Doctor Dashboard




👤 Patient Dashboard




🎥 Demo

<div align="center">

🚀 MediGuide AI in Action

Video Demo: Coming Soon

Live Development Server: http://localhost:5173

</div>

🧪 Test Accounts
Role	Email	Password	Access
👨‍⚕️ Doctor	dr.rajesh@mediguide.com	doctor123	Full Doctor Dashboard
👤 Patient	mariyam@email.com	mariyam@123	Patient Portal
🚑 Ambulance	ambulance@email.com	ambulance@123	Emergency Dashboard
🛡️ Admin	admin@email.com	admin@123	Admin Panel

⚠️ These credentials are intended for development/demo purposes only. Never use demo credentials in production.

🚀 Getting Started
📋 Prerequisites

Before running MediGuide AI, install:

🟢 Node.js 18+
📦 npm or yarn
🔧 Git
🔥 Firebase account
🎥 Whereby account for video consultation functionality
1️⃣ Clone the Repository
git clone https://github.com/MariyamSeemab/Mediguide-CMC5.git
cd Mediguide-CMC5
2️⃣ Install Dependencies
npm install

Or:

yarn install
3️⃣ Configure Environment Variables
cp .env.example .env

Update .env with the required Firebase and Whereby configuration.

4️⃣ Start Development Server
npm run dev

Or:

yarn dev
5️⃣ Open the Application
http://localhost:5173
📦 Production Build

Create an optimized production build:

npm run build

Preview the production build locally:

npm run preview

The generated production files will be available in:

dist/
🧪 Testing
Run Tests
npm test
Watch Mode
npm run test:watch
Coverage
npm run test:coverage
Code Quality
npm run lint

Automatically fix lint issues:

npm run lint:fix
🧪 Testing Stack
Jest
React Testing Library
TypeScript
ESLint
Prettier
🎥 Testing Video Consultation

To test the doctor-patient video experience:

Open two browser sessions.
Login as the doctor in one.
Login as the patient in the second.
Create/confirm an appointment.
Doctor starts the consultation.
Patient joins from the appointment interface.
Test:
🎥 Video
🎙️ Audio
💬 Chat
🖥️ Screen sharing
⏱️ Call duration
🎨 UI/UX Philosophy

MediGuide AI follows a healthcare-focused design approach.

🎯 User First

Simple navigation and clear actions for patients, doctors and emergency users.

📱 Responsive

Designed to work across:

💻 Desktop
💻 Laptop
📱 Mobile
📲 Tablet
♿ Accessibility

The interface aims to provide an inclusive experience with readable content, clear navigation and accessible interactions.

⚡ Performance

Vite provides fast development feedback and optimized production builds.

🎨 Visual Identity

The interface uses a healthcare-oriented visual language:

🔵 Medical Blue      → Trust & Healthcare
🔷 Trust Blue        → Professional UI
🟢 Health Green      → Success & Positive Results
🟠 Alert Orange      → Warnings
🔴 Emergency Red     → Critical Situations
🔐 Security

MediGuide AI includes several application-level security mechanisms.

🔑 Authentication
Firebase Authentication
Secure login/signup
Protected application routes
👥 Authorization

Role-based experiences for:

👤 Patient
👨‍⚕️ Doctor
🛡️ Admin
🚑 Ambulance
🔒 Data Protection
Firebase-managed authentication
Protected application resources
Appointment-based video access
Prescription verification
Environment-based configuration
🛡️ Security Principles
User
  ↓
🔐 Authenticate
  ↓
👥 Determine Role
  ↓
🛡️ Authorize
  ↓
📦 Access Allowed Resources

For security-related issues, refer to SECURITY.md.

📊 Project Highlights

<div align="center">

<table> <tr> <td align="center">

🌍
13

Indian Languages

</td>

<td align="center">

🤖
46+

Medical Categories

</td>

<td align="center">

🎤
AI

Voice Analysis

</td>

<td align="center">

🎥
Real-Time

Video Consultation

</td> </tr> </table>

</div>

🗺️ Roadmap
✅ Version 1.0.0

🤖 AI chatbot

🔍 Symptom checker

🎤 Voice emotion detection

🎵 Audio feature extraction

🌍 13-language support

🔎 Medical keyword detection

🚨 Urgency classification

📅 Doctor appointment booking

📊 Health report generation

🚑 Emergency services

✅ Version 1.5.0

🎥 Real-time video consultations

💊 Digital prescriptions

📄 PDF generation

🔳 QR prescription verification

💬 Doctor-patient chat

📅 Appointment synchronization

👨‍⚕️ Doctor dashboard

📊 Analytics

🚑 Ambulance response system

💳 Enhanced UPI payment experience

📱 Patient video consultation

🚧 Version 2.0.0

🧠 Advanced AI model integration

💳 Payment gateway integration

📧 Email notifications

📱 SMS notifications

📊 Advanced analytics dashboard

🔮 Version 2.5.0

📱 React Native mobile application

💊 Pharmacy integration

🏦 Health insurance integration

⌚ Wearable device integration

🔐 Multi-factor authentication

🛡️ Additional healthcare compliance capabilities

🌐 Browser Support
Browser	Support
🌐 Chrome	✅ Supported
🦊 Firefox	✅ Supported
🧭 Safari	✅ Supported
🌊 Edge	✅ Supported
🎭 Opera	✅ Supported
📱 Mobile Safari	✅ Supported
📱 Chrome Mobile	✅ Supported
📁 Development Workflow
flowchart LR
    A["📥 Clone"] --> B["📦 Install"]
    B --> C["⚙️ Configure .env"]
    C --> D["🔥 Configure Firebase"]
    D --> E["🎥 Configure Whereby"]
    E --> F["🚀 npm run dev"]
    F --> G["🧪 npm test"]
    G --> H["🔍 npm run lint"]
    H --> I["🏗️ npm run build"]
    I --> J["🌐 Deploy"]
📦 Deployment
🔥 Firebase Hosting
npm install -g firebase-tools

firebase login

firebase init hosting

npm run build

firebase deploy
⚡ Vercel

MediGuide AI can also be deployed using Vercel after connecting the GitHub repository.

🌐 Netlify

The production dist folder can also be deployed through Netlify.

For detailed deployment instructions, refer to:

DEPLOYMENT_GUIDE.md
🤝 Contributing

Contributions are welcome! 💙

💡 Ways You Can Contribute
🐛 Report bugs
💡 Suggest features
📝 Improve documentation
🌍 Add language translations
🎨 Improve UI/UX
🧪 Add tests
⚡ Improve performance
🔐 Improve security
📢 Share the project
🔧 Contribution Workflow
# Fork the repository

# Create a feature branch
git checkout -b feature/AmazingFeature

# Make your changes

# Commit
git commit -m "Add AmazingFeature"

# Push
git push origin feature/AmazingFeature

# Open a Pull Request
📄 License

This project is licensed under the MIT License.

See the LICENSE file for details.

MIT License
Copyright (c) 2024 MediGuide AI Team
👥 Team

<div align="center">

Project Maintainers

<table> <tr> <td align="center"> <img src="https://github.com/M-Mahek-03.png" width="100px;" alt="Mahek Mukadam"/><br /> <sub><b>Mahek Mukadam</b></sub><br /> <a href="https://github.com/M-Mahek-03">GitHub</a> </td>

<td align="center">
  <img src="https://github.com/MariyamSeemab.png" width="100px;" alt="Mariyam Usmani"/><br />
  <sub><b>Mariyam Usmani</b></sub><br />
  <a href="https://github.com/MariyamSeemab">GitHub</a>
</td>

<td align="center">
  <img src="https://github.com/nadeem221751.png" width="100px;" alt="Nadeem Shaikh"/><br />
  <sub><b>Nadeem Shaikh</b></sub><br />
  <a href="https://github.com/nadeem221751">GitHub</a>
</td>

<td align="center">
  <img src="https://github.com/Electrogreek.png" width="100px;" alt="Nehal Shaikh"/><br />
  <sub><b>Nehal Shaikh</b></sub><br />
  <a href="https://github.com/Electrogreek">GitHub</a>
</td>

</tr> </table>

Together, we're building the future of accessible healthcare in India! 🇮🇳

</div>

🙏 Acknowledgments

Special thanks to the technologies and communities that helped make MediGuide AI possible:

💙 Open Source Community
🔥 Firebase Team
⚛️ React Team
⚡ Vite Team
🎥 Whereby Team
📄 jsPDF Team
🏥 Healthcare Professionals
🇮🇳 Indian Developer Community
👥 All Contributors
📞 Help & Support

Need help with MediGuide AI?

🐛 Report a Bug

Open an issue in the repository with:

What happened?
Steps to reproduce
Expected behavior
Actual behavior
Screenshots/logs if available
💡 Request a Feature

Have an idea that could improve MediGuide AI?

Open a feature request and describe:

💡 Proposed feature
🎯 Problem it solves
👥 Who would benefit
🔧 Suggested implementation
💬 Questions & Discussion

Start a GitHub Discussion for questions, ideas and general project discussions.

👩‍💻 Project Contact

GitHub: @MariyamSeemab

⭐ Support MediGuide AI

If you find this project useful:

⭐ Star the repository

🍴 Fork the project

🐛 Report issues

💡 Suggest improvements

🌍 Help improve multilingual healthcare accessibility

📈 Project Vision

MediGuide AI is built around one simple idea:

<div align="center">

🏥 Healthcare should be accessible, understandable and inclusive.
🌍 Any language
🤖 Any time
📱 Any device
👨‍⚕️ Connect with professionals
🚑 Get help when it matters

</div>

⚠️ Medical Disclaimer

MediGuide AI is a technology demonstration and healthcare-assistance platform.

Information generated or displayed by the application should not be treated as a medical diagnosis, prescription or substitute for professional medical advice.

For serious, emergency or life-threatening symptoms, users should contact qualified healthcare professionals or appropriate emergency services immediately.

<div align="center">

💙 Made for Better Healthcare Accessibility
🏥 MediGuide AI

AI • Healthcare • Voice • Languages • Doctors • Emergency Care

<br/>

<img src="https://img.shields.io/badge/Built%20with-❤️-red?style=for-the-badge"/> <img src="https://img.shields.io/badge/React-⚛️-61DAFB?style=for-the-badge"/> <img src="https://img.shields.io/badge/Firebase-🔥-FFCA28?style=for-the-badge"/> <img src="https://img.shields.io/badge/India-🇮🇳-orange?style=for-the-badge"/>

<br/><br/>

⭐ If you like MediGuide AI, give the repository a star!

Every star motivates us to keep building. 💙

<br/>

⬆️ Back to Top

</div>

This version is much closer to a showcase-quality GitHub README: the Mermaid diagrams will render natively on GitHub, the sections feel intentional rather than like a long feature dump, and the healthcare/AI identity is carried consistently through the emojis and visual hierarchy.

One important thing I also changed: the old README had several leftover M-Mahek-03/CMC-5 links in clone, deployment, stats, support and social sections. Those should point to the MediGuide-CMC5 repository instead; the Team section remains unchanged as you requested.

this section is not working properly fix it <td align="center">
  <img src="https://github.com/MariyamSeemab.png" width="100px;" alt="Mariyam Usmani"/><br />
  <sub><b>Mariyam Usmani</b></sub><br />
  <a href="https://github.com/MariyamSeemab">GitHub</a>
</td>

<td align="center">
  <img src="https://github.com/nadeem221751.png" width="100px;" alt="Nadeem Shaikh"/><br />
  <sub><b>Nadeem Shaikh</b></sub><br />
  <a href="https://github.com/nadeem221751">GitHub</a>
</td>

<td align="center">
  <img src="https://github.com/Electrogreek.png" width="100px;" alt="Nehal Shaikh"/><br />
  <sub><b>Nehal Shaikh</b></sub><br />
  <a href="https://github.com/Electrogreek">GitHub</a>
</td>

Yes. The issue is usually caused by GitHub avatar URLs and the HTML table formatting. The safest approach is to use GitHub's raw avatar URL format with ?size=200, and make the profile itself clickable.

Replace that entire part with this:

<table> <tr> <td align="center"> <a href="https://github.com/M-Mahek-03"> <img src="https://github.com/M-Mahek-03.png?size=200" width="100px" alt="Mahek Mukadam"/> </a> <br /> <sub><b>Mahek Mukadam</b></sub> <br /> <a href="https://github.com/M-Mahek-03">GitHub</a> </td>

<td align="center">
  <a href="https://github.com/MariyamSeemab">
    <img src="https://github.com/MariyamSeemab.png?size=200" width="100px" alt="Mariyam Usmani"/>
  </a>
  <br />
  <sub><b>Mariyam Usmani</b></sub>
  <br />
  <a href="https://github.com/MariyamSeemab">GitHub</a>
</td>

<td align="center">
  <a href="https://github.com/nadeem221751">
    <img src="https://github.com/nadeem221751.png?size=200" width="100px" alt="Nadeem Shaikh"/>
  </a>
  <br />
  <sub><b>Nadeem Shaikh</b></sub>
  <br />
  <a href="https://github.com/nadeem221751">GitHub</a>
</td>

<td align="center">
  <a href="https://github.com/Electrogreek">
    <img src="https://github.com/Electrogreek.png?size=200" width="100px" alt="Nehal Shaikh"/>
  </a>
  <br />
  <sub><b>Nehal Shaikh</b></sub>
  <br />
  <a href="https://github.com/Electrogreek">GitHub</a>
</td>

</tr> </table>

Why this version is better

The important change is:

https://github.com/MariyamSeemab.png?size=200

instead of:

https://github.com/MariyamSeemab.png

And the image itself is now clickable, so clicking the profile picture opens that person's GitHub profile.

It should render as:

👩‍💻 Mariyam Usmani
[profile picture]
GitHub

with all four team members aligned in one row.

Also, don't put this inside a Markdown ```html code block in your README. Paste the HTML directly into README.md, exactly as above, because GitHub needs to render the HTML rather than display it as code.

listen like this i want all profiles fix it asap Mahek Mukadam (image)
Mahek Mukadam
GitHub

Yes — you want all team profiles in exactly this simple format, with the name linked to GitHub, avatar image linked separately, and a GitHub link underneath.

Replace your entire Team section with this:

👥 Team
Mahek Mukadam

Mahek Mukadam

GitHub

Mariyam Usmani

Mariyam Usmani

GitHub

Nadeem Shaikh

Nadeem Shaikh

GitHub

Nehal Shaikh

Nehal Shaikh

GitHub

This avoids the problematic HTML <table> entirely and uses GitHub-native Markdown, so all four profiles should render reliably.

<div align="center">

<img src="https://img.icons8.com/fluency/96/000000/medical-heart.png" alt="MediGuide AI Logo" width="120"/>

🏥 MediGuide AI
Your Intelligent Healthcare Companion

<p align="center"> <strong>Empowering millions with AI-powered healthcare guidance in 13 Indian languages</strong> </p>

<p align="center"> <a href="#-getting-started"> <img src="https://img.shields.io/badge/Get%20Started-00D9FF?style=for-the-badge&logo=rocket&logoColor=white" alt="Get Started"/> </a> <a href="#-features"> <img src="https://img.shields.io/badge/Features-4A90E2?style=for-the-badge&logo=star&logoColor=white" alt="Features"/> </a> <a href="#-contributing"> <img src="https://img.shields.io/badge/Contribute-50C878?style=for-the-badge&logo=github&logoColor=white" alt="Contribute"/> </a> </p>

🛠️ Built With

<p align="center"> <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/> <img src="https://img.shields.io/badge/Firebase-12.9.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase"/> <img src="https://img.shields.io/badge/Whereby-Video-FF5A5F?style=for-the-badge&logo=video&logoColor=white" alt="Whereby"/> </p>

<p align="center"> <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License"/> <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"/> <img src="https://img.shields.io/badge/Maintained-Yes-blue.svg?style=flat-square" alt="Maintained"/> <img src="https://img.shields.io/badge/Made%20with-❤️-red.svg?style=flat-square" alt="Made with Love"/> </p>

<p align="center"> <a href="#-demo">🎥 View Demo</a> • <a href="#-features">✨ Features</a> • <a href="#-getting-started">🚀 Quick Start</a> • <a href="#-documentation">📖 Docs</a> • <a href="https://github.com/M-Mahek-03/CMC-5/issues">🐛 Report Bug</a> • <a href="https://github.com/M-Mahek-03/CMC-5/issues">💡 Request Feature</a> </p>

</div>

<br/>

<div align="center"> <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&lines=AI-Powered+Healthcare+Platform;13+Indian+Languages+Supported;Real-time+Video+Consultations;Voice+Emotion+Detection;Digital+Prescriptions+%26+More!" alt="Typing SVG" /> </div>

📋 Table of Contents
🌟 Why MediGuide AI?
✨ Features
🎯 Key Highlights
🛠️ Tech Stack
🚀 Getting Started
📱 Screenshots
🌍 Language Support
🏗️ Project Structure
🔧 Configuration
📊 Architecture
🎨 UI/UX Design
🧪 Testing
📦 Deployment
🤝 Contributing
📄 License
👥 Team
🙏 Acknowledgments
📞 Support
🌟 Why MediGuide AI?

<div align="center">

🎯 The Challenge We're Solving

<table> <tr> <td width="33%" align="center"> <img src="https://img.icons8.com/fluency/96/000000/hospital-3.png" width="80"/> <h4>Limited Access</h4> <p>Millions in rural India lack immediate healthcare access</p> </td> <td width="33%" align="center"> <img src="https://img.icons8.com/fluency/96/000000/language.png" width="80"/> <h4>Language Barriers</h4> <p>Healthcare information not available in regional languages</p> </td> <td width="33%" align="center"> <img src="https://img.icons8.com/fluency/96/000000/clock.png" width="80"/> <h4>Long Wait Times</h4> <p>Hours of waiting for basic medical consultation</p> </td> </tr> </table>

💡 Our Solution

<img src="https://img.icons8.com/fluency/96/000000/artificial-intelligence.png" width="100"/>

MediGuide AI is a comprehensive healthcare platform that provides:

✅ Instant AI-powered medical guidance in 13 Indian languages
✅ 24/7 availability with no appointments needed
✅ Free symptom checking accessible to everyone
✅ Real-time video consultations with doctors
✅ Voice emotion detection for better diagnosis
✅ Digital prescriptions with QR verification
✅ Emergency ambulance services
📊 Our Impact

<table align="center"> <tr> <td align="center" width="25%"> <img src="https://img.icons8.com/fluency/96/000000/user-group-man-man.png" width="60"/><br/> <h2>50,000+</h2> <p><strong>Users Served</strong></p> </td> <td align="center" width="25%"> <img src="https://img.icons8.com/fluency/96/000000/globe.png" width="60"/><br/> <h2>13</h2> <p><strong>Languages</strong></p> </td> <td align="center" width="25%"> <img src="https://img.icons8.com/fluency/96/000000/medical-book.png" width="60"/><br/> <h2>46+</h2> <p><strong>Medical Categories</strong></p> </td> <td align="center" width="25%"> <img src="https://img.icons8.com/fluency/96/000000/24-hours.png" width="60"/><br/> <h2>24/7</h2> <p><strong>Availability</strong></p> </td> </tr> </table>

<br/>

"Making quality healthcare accessible to every Indian, in their own language"

</div>

🎥 Demo

<div align="center">

See MediGuide AI in Action

<table> <tr> <td width="50%" align="center"> <img src="https://img.icons8.com/fluency/96/000000/video-call.png" width="80"/><br/> <h4>� Video Demo</h4> <p><em>Coming Soon</em></p> <a href="#"> <img src="https://img.shields.io/badge/Watch%20Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch Demo"/> </a> </td> <td width="50%" align="center"> <img src="https://img.icons8.com/fluency/96/000000/web.png" width="80"/><br/> <h4>🌐 Live Demo</h4> <p><em>Try it yourself</em></p> <a href="http://localhost:5173"> <img src="https://img.shields.io/badge/Live%20Demo-00D9FF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo"/> </a> </td> </tr> </table>

� Test Accounts

<table> <tr> <th>Role</th> <th>Email</th> <th>Password</th> <th>Access</th> </tr> <tr> <td>👨‍⚕️ <strong>Doctor</strong></td> <td><code>dr.rajesh@mediguide.com</code></td> <td><code>doctor123</code></td> <td>Full Dashboard Access</td> </tr> <tr> <td>👤 <strong>Patient</strong></td> <td><code>mariyam@email.com</code></td> <td><code>mariyam@123</code></td> <td>Patient Portal</td> </tr> <tr> <td>🚑 <strong>Ambulance</strong></td> <td><code>ambulance@email.com</code></td> <td><code>ambulance@123</code></td> <td>Emergency Dashboard</td> </tr> <tr> <td>👨‍� <strong>Admin</strong></td> <td><code>admin@email.com</code></td> <td><code>admin@123</code></td> <td>Admin Panel</td> </tr> </table>

</div>

✨ Features

<div align="center">

🎯 Core Features

</div>

🤖 AI-Powered Medical Chatbot

<img align="right" src="https://img.icons8.com/fluency/96/000000/chatbot.png" width="100"/>

🧠 Intelligent Conversations - Natural language understanding in 13 languages
🏥 46+ Medical Categories - From common cold to complex conditions
💭 Context-Aware - Remembers conversation history
🚨 Emergency Detection - Identifies critical symptoms automatically
📊 Health Insights - Personalized recommendations

<br clear="right"/>

🔍 Advanced Symptom Checker

<img align="right" src="https://img.icons8.com/fluency/96/000000/stethoscope.png" width="100"/>

Multi-Modal Input:

⌨️ Text Input - Describe symptoms in your own words
🎤 Voice Recognition - Speak in any of 13 Indian languages
📸 Image Analysis - Upload photos for visual assessment
🎵 Voice Emotion AI - Real-time emotional state detection

Advanced Analysis:

🎯 Urgency Detection - Critical, High, Medium, Low levels
🎭 Emotion Classification - Calm, Anxious, Distressed, In Pain, Weak, Critical
📊 Voice Quality Analysis - Volume, pitch, speech rate, stability
🔍 Medical Keyword Detection - Recognizes symptoms in 13 languages
⚡ Instant Results - AI-powered health insights in seconds

<br clear="right"/>

🎥 Video Consultation System

<img align="right" src="https://img.icons8.com/fluency/96/000000/video-conference.png" width="100"/>

📹 HD Video Calls - Powered by Whereby API
🔒 Secure Rooms - Appointment-based access control
⏱️ Call Duration Tracking - Real-time timer
💬 In-Call Chat - Text messaging during consultation
📱 Mobile Friendly - Works on all devices
📊 Call Logs - Complete consultation history

<br clear="right"/>

💊 Digital Prescription System

<img align="right" src="https://img.icons8.com/fluency/96/000000/prescription.png" width="100"/>

📝 Write Prescriptions - Professional medical format
📄 PDF Generation - Download and print
🔐 QR Code Verification - Scannable authentication
🆔 Unique IDs - Format: RX-YYYY-NNNNNN
✍️ Digital Signature - Doctor authentication
🔍 Public Verification - Anyone can verify authenticity

<br clear="right"/>

🚑 Emergency Ambulance System

<img align="right" src="https://img.icons8.com/fluency/96/000000/ambulance.png" width="100"/>

📍 Real-time GPS Tracking - Live ambulance location
🗺️ Route Optimization - OSRM-based routing
⚡ Instant Booking - One-tap emergency request
📊 Mission Dashboard - Complete management system
💰 Earnings Tracking - ₹500 per mission
🔔 Sound Alerts - Audio notifications

<br clear="right"/>

👨‍⚕️ Doctor Dashboard

<img align="right" src="https://img.icons8.com/fluency/96/000000/doctor-male.png" width="100"/>

📅 Appointment Management - View, confirm, reschedule
💬 Patient Chat - Real-time messaging
📝 Write Prescriptions - Digital Rx with PDF export
📊 Analytics - Patient stats and insights
🎥 Video Consultations - Integrated video calls
📱 Profile Management - Update info and photo

<br clear="right"/>

💳 Payment Integration

<img align="right" src="https://img.icons8.com/fluency/96/000000/rupee.png" width="100"/>

📱 UPI QR Codes - GPay, PhonePe, Paytm, BHIM
✨ Animated Scanning - Professional UI
✅ Payment Verification - Secure confirmation
💰 Consultation Fees - Online payment tracking
📊 Payment History - Complete transaction log

<br clear="right"/>

🌍 Multilingual Support

<img align="right" src="https://img.icons8.com/fluency/96/000000/language.png" width="100"/>

13 Indian Languages - Full native script support
🔄 Real-time Translation - Seamless language switching
🎤 Voice Input - Speech recognition in all languages
📝 Native Scripts - Devanagari, Tamil, Telugu, Bengali, etc.
🌐 Localized Content - Culturally appropriate translations

<br clear="right"/>

🎯 Key Highlights

<div align="center">

Feature	Description
🌍 Multilingual	13 Indian languages with native script support
🤖 AI-Powered	Intelligent symptom analysis and health guidance
🎤 Voice Emotion AI	Real-time emotion detection from voice patterns
🎵 Audio Analysis	Professional-grade audio feature extraction
🎥 Video Calls	Real-time video consultations with Whereby
💊 Digital Rx	PDF prescriptions with QR verification
💬 Real-time Chat	Doctor-patient messaging system
🔒 Secure	Firebase authentication and encrypted data storage
📱 Responsive	Works seamlessly on desktop, tablet, and mobile
⚡ Fast	Built with Vite for lightning-fast performance
🎨 Modern UI	Clean, intuitive interface with smooth animations
🔄 Real-time	Live updates and instant notifications
📊 Analytics	Track your health journey with detailed insights

</div>

🛠️ Tech Stack
Frontend
React 18.3.1 - Modern UI library with hooks
TypeScript 5.6.3 - Type-safe JavaScript
Vite 6.0.1 - Next-generation frontend tooling
React Router DOM 6.28.0 - Client-side routing
CSS Modules - Scoped styling
Backend & Database
Firebase 12.9.0 - Backend as a Service
Authentication - User management
Firestore - NoSQL database
Cloud Functions - Serverless backend
Hosting - Static site hosting
Video Consultation
Whereby API - Professional video calling platform
WebRTC - Real-time peer-to-peer communication
Secure Rooms - Appointment-based access control
PDF & Document Generation
jsPDF - PDF generation for prescriptions
QRCode.js - QR code generation for verification
Professional Templates - Medical-standard formatting
Development Tools
ESLint - Code linting
Prettier - Code formatting
Jest - Unit testing
TypeScript - Static type checking
APIs & Services
Web Speech API - Voice recognition in 13 languages
Meyda Audio Library - Professional audio feature extraction
Real-time Audio Analysis - Voice emotion and urgency detection
File API - Image upload and processing
LocalStorage API - Client-side data persistence
Whereby API - Video consultation integration
🚀 Getting Started
Prerequisites

Before you begin, ensure you have the following installed:

Node.js (v18 or higher)
npm or yarn
Git
Installation
Clone the repository
git clone https://github.com/M-Mahek-03/CMC-5.git
cd CMC-5
Install dependencies
npm install
# or
yarn install
Set up environment variables
cp .env.example .env

Edit .env and add your credentials:

VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_WHEREBY_API_KEY=your_whereby_api_key_here
Start the development server
npm run dev
# or
yarn dev
Open your browser
http://localhost:5173
Building for Production
npm run build
# or
yarn build

The optimized production build will be in the dist folder.

Running Tests
npm test
# or
yarn test
📱 Screenshots

<div align="center">

🏠 Homepage




💬 AI Chatbot




🔍 Symptom Checker




👨‍⚕️ Doctor Dashboard




📊 Patient Dashboard




</div>

🌍 Language Support

MediGuide AI supports 13 Indian languages with full native script support:

Language	Native Name	Code	Status
English	English	en	✅ Complete
Hindi	हिंदी	hi	✅ Complete
Tamil	தமிழ்	ta	✅ Complete
Telugu	తెలుగు	te	✅ Complete
Bengali	বাংলা	bn	✅ Complete
Marathi	मराठी	mr	✅ Complete
Gujarati	ગુજરાતી	gu	✅ Complete
Kannada	ಕನ್ನಡ	kn	✅ Complete
Malayalam	മലയാളം	ml	✅ Complete
Punjabi	ਪੰਜਾਬੀ	pa	✅ Complete
Odia	ଓଡ଼ିଆ	or	✅ Complete
Assamese	অসমীয়া	as	✅ Complete
Urdu	اردو	ur	✅ Complete
🏗️ Project Structure
CMC-5/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── BrowserNavigation.tsx
│   │   ├── DoctorPatientChat.tsx      # NEW: Real-time chat
│   │   ├── PrescriptionWriter.tsx     # NEW: Digital prescriptions
│   │   └── ProfilePhotoUpload.tsx     # NEW: Doctor profile photos
│   ├── config/           # Configuration files
│   │   └── firebase.ts   # Firebase configuration
│   ├── contexts/         # React Context providers
│   │   ├── AuthContext.tsx
│   │   ├── FirebaseAuthContext.tsx
│   │   └── LanguageContext.tsx
│   ├── pages/            # Page components
│   │   ├── Homepage.tsx
│   │   ├── Chatbot.tsx
│   │   ├── SymptomChecker.tsx
│   │   ├── PatientDashboard.tsx
│   │   ├── DoctorDashboard.tsx        # UPDATED: Full production dashboard
│   │   ├── DoctorDemoDashboard.tsx    # NEW: Demo dashboard
│   │   ├── Appointments.tsx           # UPDATED: Enhanced with video & payment
│   │   ├── VideoConsultation.tsx      # NEW: Doctor video calls
│   │   ├── PatientVideoConsultation.tsx # NEW: Patient video calls
│   │   ├── AmbulanceDashboard.tsx     # NEW: Emergency response system
│   │   ├── VerifyPrescription.tsx     # NEW: QR verification
│   │   ├── Emergency.tsx              # UPDATED: Ambulance booking
│   │   └── ...
│   ├── services/         # API and data services
│   │   ├── appointmentService.ts      # UPDATED: Bi-directional sync
│   │   ├── chatService.ts             # NEW: Real-time messaging
│   │   ├── prescriptionService.ts     # NEW: Digital prescriptions
│   │   ├── pdfService.ts              # NEW: PDF generation
│   │   ├── videoConsultationService.ts # NEW: Whereby integration
│   │   ├── patientDataService.ts
│   │   ├── firebaseAppointmentService.ts
│   │   ├── firebaseDoctorReportService.ts
│   │   └── firebaseLabReportService.ts
│   ├── translations/     # i18n translation files
│   │   ├── en.json
│   │   ├── hi.json
│   │   ├── ta.json
│   │   └── ...
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/           # Utility functions
│   │   ├── numberLocalization.ts
│   │   └── demoData.ts               # NEW: Demo data utility
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
🔧 Configuration
Firebase Setup
Create a Firebase project at Firebase Console
Enable Authentication (Email/Password and Google)
Create a Firestore database
Copy your Firebase config to .env
Whereby Setup (Video Consultations)
Sign up at Whereby
Get your API key from the dashboard
Add to .env as VITE_WHEREBY_API_KEY
Firestore Collections

The app uses the following Firestore collections:

appointments - User appointments with doctors
doctorReports - AI-generated medical reports
labReports - Uploaded lab test reports
LocalStorage Keys
preferredLanguage - User's selected language
mediguide_users - User accounts
mediguide_appointments - Centralized appointments (NEW)
mediguide_appointments_{userId} - User appointments
mediguide_patient_data_{userId} - Patient chat history
mediguide_auto_reports_{userId} - Auto-generated reports
mediguide_chats - Chat messages (NEW)
mediguide_prescriptions - Digital prescriptions (NEW)
mediguide_video_rooms - Video consultation rooms (NEW)
mediguide_call_logs - Call history (NEW)
🎤 Voice Emotion Detection Technology
Advanced AI-Powered Voice Analysis

MediGuide AI features a state-of-the-art voice emotion detection system that analyzes your voice in real-time to understand your emotional and physical state. This helps provide more accurate health assessments.

How It Works
1. Audio Feature Extraction

Using the professional-grade Meyda audio library, we extract 8 key audio features:

Volume/Amplitude (RMS) - Measures voice loudness
Zero-Crossing Rate - Detects pitch and frequency variations
Energy - Analyzes overall signal strength
Peak Analysis - Identifies voice strain or shouting
Variance - Detects voice trembling or shaking
Dynamic Range - Measures difference between loud and quiet parts
Speech Rate - Calculates words per second
Spectral Flux - Identifies stress through frequency changes
2. Medical Keyword Detection

The system recognizes critical medical terms in 13 Indian languages:

Critical Keywords: chest pain, can't breathe, bleeding heavily, heart attack, stroke
Severity Indicators: severe, intense, unbearable, extreme
Pain Keywords: pain, hurt, ache, burning, sharp, throbbing
Anxiety Indicators: worried, scared, anxious, panic, afraid
Weakness Signs: weak, tired, exhausted, dizzy, faint
3. Emotion Classification

Based on voice patterns and keywords, the AI classifies emotions:

Emotion	Indicators	Urgency Level
Critical	Life-threatening keywords + extreme vocal distress	🔴 Critical
In Pain	Severe pain + voice strain + elevated volume	🟠 High
Distressed	Unstable voice + high pitch + fast speech	🟠 High
Anxious	Fast speech + high pitch + anxiety keywords	🟡 Medium
Weak/Tired	Low volume + weakness keywords	🟡 Medium
Calm	Normal voice patterns + stable tone	🟢 Low
4. Voice Quality Analysis

The system provides detailed insights:

✅ Normal voice patterns
⚠️ Elevated voice level
⚠️ Signs of distress detected
⚠️ Voice strain detected
⚠️ Elevated pitch
⚠️ Low voice volume
⚠️ Possible fatigue
🚨 Requires immediate attention
Technical Implementation
// Real-time audio feature extraction
const audioFeatures = {
  volume: rms,                    // Root Mean Square
  energy: signalStrength,         // Overall energy
  zcr: zeroCrossingRate,         // Pitch variation
  peakAverage: top10Percent,     // Voice strain
  stdDev: voiceStability,        // Trembling detection
  dynamicRange: loudQuietDiff,   // Voice control
  speechRate: wordsPerSecond,    // Speaking speed
  spectralFlux: frequencyChange  // Stress indicator
};

// Emotion classification algorithm
if (hasCritical || (hasSevere && hasPain && isDistressed)) {
  emotion = 'Critical';
  urgency = 'critical';
} else if (hasPain && isStrainedVoice) {
  emotion = 'In Pain';
  urgency = 'high';
}
// ... more classifications
Privacy & Security
🔒 No Audio Storage: Voice data is analyzed in real-time and never stored
🔒 Client-Side Processing: All analysis happens in your browser
🔒 No Cloud Upload: Audio never leaves your device
🔒 Secure Microphone Access: Requires explicit user permission
Supported Languages

Voice emotion detection works with all 13 supported languages:

English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, Urdu
Use Cases
Emergency Detection: Automatically identifies critical situations
Pain Assessment: Measures pain levels through voice analysis
Mental Health: Detects anxiety and stress patterns
Fatigue Monitoring: Identifies weakness and exhaustion
Triage Support: Helps prioritize urgent cases
📊 Architecture
System Architecture
┌─────────────────────────────────────────────────────────┐
│                     User Interface                      │
│  (React + TypeScript + Vite + CSS Modules)              │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   State Management                      │
│        (React Context API + LocalStorage)               │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Service Layer                         │
│  (API Services + Data Services + Firebase Services)     │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Storage                          │
│     Firebase Firestore + LocalStorage + Firebase Auth   │
└─────────────────────────────────────────────────────────┘
Data Flow
User Action → Component → Context/Service → Firebase/LocalStorage
            │
            ▼
    Real-time Updates
            │
            ▼
Component Re-render
🎨 UI/UX Design
Design Philosophy
User-First: Intuitive interface designed for all age groups
Accessibility: WCAG 2.1 compliant for inclusive design
Responsive: Seamless experience across all devices
Performance: Lightning-fast load times with Vite
Color Palette
Primary:   #00D9FF (Medical Blue)
Secondary: #4A90E2 (Trust Blue)
Success:   #50C878 (Health Green)
Warning:   #FFB84D (Alert Orange)
Error:     #FF6B6B (Emergency Red)
Typography
Headings: Inter, System UI
Body: -apple-system, BlinkMacSystemFont, Segoe UI
Code: Fira Code, Consolas, Monaco
🧪 Testing
Test Coverage
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
Testing Stack
Unit Tests: Jest + React Testing Library
E2E Tests: Cypress (planned)
Type Checking: TypeScript strict mode
Linting: ESLint + Prettier
Quality Metrics
✅ 85%+ Code Coverage
✅ Zero TypeScript Errors
✅ Zero ESLint Warnings
✅ 95+ Lighthouse Score
Test Accounts

Doctor Account:

Email: dr.rajesh@mediguide.com
Password: doctor123
Dashboard: /doctor/dashboard/dr-rajesh

Patient Account:

Email: mariyam@gmail.com
Password: (set during signup)
Testing Video Consultation
Open two browsers (or one incognito)
Login as doctor in first browser
Login as patient in second browser
Doctor starts video call from dashboard
Patient joins from appointments page
Test video, audio, screen share, chat
📦 Deployment
Quick Deploy Options
🔥 Firebase Hosting (Recommended)
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
⚡ Vercel (One-Click)




🌐 Netlify (Drag & Drop)




For detailed deployment instructions, see DEPLOYMENT_GUIDE.md

🔒 Security

We take security seriously. See SECURITY.md for:

Vulnerability reporting
Security best practices
Supported versions
Contact information
Security Features
Authentication: Secure login/signup system
Role-based Access: Patient, Doctor, Admin roles
Protected Routes: Unauthorized access prevention
Data Encryption: Secure data storage
Prescription Verification: QR code validation
Video Room Security: Appointment-based access
Doctor Dashboard Security: Email-based slug authentication
📈 Roadmap
✅ Completed (v1.0.0)

AI Chatbot with 46+ medical categories

Symptom checker (text, voice, image)

Real-time voice emotion detection with AI

Professional audio feature extraction (Meyda)

Multi-language medical keyword detection

Urgency level classification

13 Indian languages support

Doctor consultation booking

Health reports generation

Emergency services integration

✅ Completed (v1.5.0) - NEW

Real-time video consultations (Whereby)

Digital prescription system with PDF

QR code verification

Doctor-patient chat system

Appointment sync (bi-directional)

Doctor dashboard with analytics

Call logs and tracking

Patient video consultation page

Ambulance emergency response system

Completed appointment status sync

Enhanced UPI payment QR codes

Professional video consultation UI

🚧 In Progress (v2.0.0)

Real AI integration (OpenAI/Google Vision)

Payment gateway (Razorpay/Stripe)

SMS/Email notifications

Advanced analytics dashboard

🔮 Planned (v2.5.0)

Mobile app (React Native)

Prescription pharmacy integration

Health insurance integration

Wearable device integration

HIPAA compliance

Multi-factor authentication

See CHANGELOG.md for version history.

📊 Project Stats

<div align="center">








</div>

🌐 Browser Support
Browser	Version	Status
Chrome	Latest	✅ Fully Supported
Firefox	Latest	✅ Fully Supported
Safari	Latest	✅ Fully Supported
Edge	Latest	✅ Fully Supported
Opera	Latest	✅ Fully Supported
Mobile Safari	iOS 12+	✅ Fully Supported
Chrome Mobile	Latest	✅ Fully Supported
💻 Development
Prerequisites
Node.js 18+
npm or yarn
Git
Firebase account
Whereby account (for video consultations)
Development Workflow
# 1. Clone and install
git clone https://github.com/M-Mahek-03/CMC-5.git
cd CMC-5
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your Firebase and Whereby credentials

# 3. Start development server
npm run dev

# 4. Run tests
npm test

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
Code Style

We use ESLint and Prettier for consistent code style:

npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
🤝 Contributing

We love contributions! 💙

Ways to Contribute
🐛 Report bugs
💡 Suggest new features
📝 Improve documentation
🌍 Add translations
🎨 Improve UI/UX
🧪 Write tests
📢 Spread the word
Quick Start
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

See CONTRIBUTING.md for detailed guidelines.

Contributors

<a href="https://github.com/M-Mahek-03/CMC-5/graphs/contributors"> <img src="https://contrib.rocks/image?repo=M-Mahek-03/CMC-5" /> </a>

Made with contrib.rocks

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

👥 Team

<div align="center">

Project Maintainers

<table> <tr> <td align="center"> <img src="https://github.com/M-Mahek-03.png" width="100px;" alt="Mahek Mukadam"/><br /> <sub><b>Mahek Mukadam</b></sub><br /> <a href="https://github.com/M-Mahek-03">GitHub</a> </td> <td align="center"> <img src="https://github.com/MariyamSeemab.png" width="100px;" alt="Mariyam Usmani"/><br /> <sub><b>Mariyam Usmani</b></sub><br /> <a href="https://github.com/MariyamSeemab">GitHub</a> </td> <td align="center"> <img src="https://github.com/nadeem221751.png" width="100px;" alt="Nadeem Shaikh"/><br /> <sub><b>Nadeem Shaikh</b></sub><br /> <a href="https://github.com/nadeem221751">GitHub</a> </td> <td align="center"> <img src="https://github.com/Electrogreek.png" width="100px;" alt="Nehal Shaikh"/><br /> <sub><b>Nehal Shaikh</b></sub><br /> <a href="https://github.com/Electrogreek">GitHub</a> </td> </tr> </table>

Together, we're building the future of accessible healthcare in India! 🇮🇳

</div>

🙏 Acknowledgments

Special thanks to:

💙 Open Source Community - For inspiration and support
🔥 Firebase Team - For the amazing backend platform
⚛️ React Team - For the powerful UI library
⚡ Vite Team - For the blazing-fast build tool
🎥 Whereby Team - For the professional video API
📄 jsPDF Team - For PDF generation capabilities
🏥 Healthcare Professionals - For medical guidance
🇮🇳 Indian Developer Community - For continuous support
👥 All Contributors - For making this project better
📞 Support

If you have any questions or need help, please:

🐛 Open an Issue
💬 Start a Discussion
📧 Contact: mnmukadam04@gmail.com

<div align="center">

🌟 Star History




💖 Support the Project

If you find MediGuide AI helpful, please consider:

⭐ Starring the repository
🍴 Forking and contributing
📢 Sharing with others
☕ Buying us a coffee (Coming soon!)

📱 Connect With Us

<div align="center">







</div>

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

MIT License - Copyright (c) 2024 MediGuide AI Team
📊 Repository Insights

<div align="center">




</div>

<div align="center">

Made with ❤️ for Better Healthcare Accessibility in India 🇮🇳

Empowering millions with AI-powered healthcare guidance

🌟 If you like this project, give it a star! It motivates us to keep improving! 🌟

© 2024 MediGuide AI Team. All Rights Reserved.

<sub>Built with React • TypeScript • Firebase • Vite • Whereby</sub>

<sub>Proudly Open Source 💚</sub>

⬆ Back to Top

</div>

Close
