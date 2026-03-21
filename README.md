# CampusAsthra — Digital Academic Management Portal

A biometric-enabled, AI-powered academic portal for VTU-affiliated engineering colleges.



---

## Setup

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/campusasthra.git
cd campusasthra
```

### 2. Add your Firebase config
Open `app.js` and fill in your Firebase project details (search for `YOUR_FIREBASE_API_KEY`):

```js
const FB_CFG = {
  apiKey:            "YOUR_FIREBASE_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

Get these values from: **Firebase Console → Project Settings → Your Apps → SDK setup**

### 3. Add your Groq API key
In `app.js`, find `GROQ_API_KEY` and paste your key from https://console.groq.com/keys

### 4. Set Firebase Security Rules
In Firebase Console → Firestore → Rules, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /faces/{id}    { allow read: if true; allow write: if request.auth != null; }
    match /{document=**} { allow read, write: if request.auth != null; }
  }
}
```

### 5. Run locally
```bash
python3 -m http.server 80
# Then open http://127.0.0.1
```

> ⚠️ Must use `http://` or `https://` — opening `index.html` directly (file://) breaks face recognition.

---

## Default Login Credentials

| Role          | ID     | Password  |
|---------------|--------|-----------|
| Administrator | admin  | admin123  |
| Faculty       | T001   | teach123  |
| Student       | S0001  | study123  |

---

## Tech Stack

- **Frontend:** Vanilla JavaScript (ES2020+), HTML5, CSS3
- **Auth & Database:** Firebase Authentication + Cloud Firestore
- **Face Recognition:** face-api.js v0.22.2 (TensorFlow.js — SsdMobilenetv1)
- **AI Chat:** Groq API (Llama 3.3 70B, Llama 3.1 8B, Mixtral 8x7B)
- **Hosting:** Netlify (static, no server needed)

---

## Files

```
campusasthra/
├── index.html      # App shell & modals
├── app.js          # All logic (~4650 lines)
├── style.css       # Theme & components (~720 lines)
├── .gitignore
└── README.md
```

---

## Features

- 🔐 Multi-role login (Admin / Faculty / Student)
- 📸 Biometric face login & face-based attendance marking
- 🧠 AI Doubt Solver (Groq API — multi-turn, saved chats)
- 📋 Student & Faculty management with face registration
- 📅 Timetable editor (branch / semester / section, teacher assignment)
- 📄 Document request workflow (Bonafide, Transcript, NOC, TC)
- 📊 VTU-format grade entry & CGPA calculation
- 💰 Fee tracking & payment history

---

## Deployment
Drop `index.html`, `app.js`, and `style.css` into Netlify → done.  
Add your Netlify domain to Firebase Console → Authentication → Authorized Domains.
