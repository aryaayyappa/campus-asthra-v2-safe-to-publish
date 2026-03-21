'use strict';
// ════════════════════════════════════════════════
//  CAMPUSASTHRA  —  app.js
//  VTU Belagavi Affiliated College Portal
// ════════════════════════════════════════════════

// ── SVG ICONS ──────────────────────────────────
const IC = {
  dashboard: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  students: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  teachers: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  attendance: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  face: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/><path d="M9 12.5c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5"/></svg>',
  docs: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  timetable: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  notices: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  settings: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  grades: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  classroom: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  ai: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  fees: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  check: '<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
  trash: '<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  send: '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  shield: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  firebase: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>',
  copy: '<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  seed: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M12 22V12M12 12C12 6 7 2 2 2s1 8 10 10M12 12c0-6 5-10 10-10s-1 8-10 10"/></svg>',
  key: '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="8" cy="15" r="4"/><path d="M15.09 10.91a7 7 0 1 0 0 2.18L19 17l1-3 3 1-1-3 2-2-3-3z"/></svg>',
  plus: '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  camera: '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  retake: '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>',
};

// ── FIREBASE CONFIG ─────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// FIREBASE CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
// Replace the values below with your own Firebase project config.
// Get it from: Firebase Console → Project Settings → Your Apps → SDK setup
// NEVER commit real keys to a public repo — use a config file excluded via .gitignore
// ─────────────────────────────────────────────────────────────────────────────
const FB_CFG = {
  apiKey:            "YOUR_FIREBASE_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ════════════════════════════════════════════════
//  DATA — 1000 Students · 500 Teachers · 7 Branches
// ════════════════════════════════════════════════
const BR = ['CSE', 'ECE', 'ME', 'CIV', 'EEE', 'ISE', 'AIML'];
const SUBJ = {
  CSE: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  ECE: ['Digital Electronics', 'Signals & Systems', 'VLSI Design', 'Microprocessors', 'DSP'],
  ME: ['Engineering Mechanics', 'Thermodynamics', 'Fluid Mechanics', 'Manufacturing', 'CAD/CAM'],
  CIV: ['Structural Analysis', 'Concrete Technology', 'Hydraulics', 'Transportation', 'Surveying'],
  EEE: ['Circuit Theory', 'Power Systems', 'Electrical Machines', 'Power Electronics', 'Control Systems'],
  ISE: ['Data Structures', 'OOP', 'DBMS', 'Web Development', 'Cloud Computing'],
  AIML: ['Python Programming', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
};

// Large name pools for variety across 1500 records
const FN = [
  'Aarav', 'Priya', 'Rohan', 'Ananya', 'Kiran', 'Divya', 'Arjun', 'Sneha', 'Vivek', 'Kavya',
  'Aditya', 'Pooja', 'Nikhil', 'Shreya', 'Rahul', 'Anjali', 'Suresh', 'Meera', 'Rajesh', 'Lakshmi',
  'Akshay', 'Deepa', 'Praveen', 'Swathi', 'Harish', 'Sindhu', 'Ganesh', 'Rekha', 'Sunil', 'Usha',
  'Ravi', 'Nisha', 'Kumar', 'Vidya', 'Sanjay', 'Leela', 'Vijay', 'Padma', 'Ramesh', 'Gayathri',
  'Mahesh', 'Saritha', 'Prakash', 'Manjula', 'Dinesh', 'Sudha', 'Arun', 'Hema', 'Venkat', 'Bhavya',
  'Kartik', 'Lavanya', 'Naveen', 'Shobha', 'Pavan', 'Revathi', 'Girish', 'Savitha', 'Mohan', 'Uma',
  'Tejas', 'Chaitra', 'Vinay', 'Pushpa', 'Chetan', 'Suma', 'Darshan', 'Geeta', 'Abhishek', 'Nandini',
  'Sridhar', 'Kavitha', 'Varun', 'Shanta', 'Yash', 'Indira', 'Ashok', 'Vani', 'Balaji', 'Shilpa'
];
const LN = [
  'Sharma', 'Patel', 'Kumar', 'Singh', 'Reddy', 'Naidu', 'Rao', 'Nair', 'Iyer', 'Pillai',
  'Gowda', 'Hegde', 'Shetty', 'Kamath', 'Kulkarni', 'Patil', 'Joshi', 'Desai', 'Shah', 'Mehta',
  'Bhat', 'Shenoy', 'Poojary', 'Pai', 'Alva', 'Lobo', 'Fernandez', 'Bangera', 'Bhandari', 'Kini',
  'Menon', 'Varma', 'Krishnan', 'Subramaniam', 'Rajan', 'Venkatesh', 'Murthy', 'Acharya', 'Bose', 'Das',
  'Gupta', 'Mishra', 'Tiwari', 'Pandey', 'Shukla', 'Srivastava', 'Dubey', 'Yadav', 'Chauhan', 'Verma'
];
const CITIES = [
  'Bengaluru', 'Mysuru', 'Hubli', 'Belagavi', 'Mangaluru', 'Udupi', 'Shimoga', 'Tumkur',
  'Davangere', 'Hassan', 'Kolar', 'Raichur', 'Bellary', 'Bidar', 'Dharwad', 'Gadag',
  'Chikkamagaluru', 'Kodagu', 'Mandya', 'Bagalkot', 'Vijayapura', 'Chitradurga', 'Haveri', 'Karwar'
];
const DESIG = ['Assistant Professor', 'Associate Professor', 'Professor', 'Senior Professor'];
const QUALS = ['M.Tech', 'PhD', 'ME', 'M.Sc', 'MBA', 'MCA'];

// Branch distribution: Students = 1000, Teachers = 500
const BRANCH_STUDENTS = { CSE: 160, ECE: 150, ME: 140, CIV: 130, EEE: 140, ISE: 150, AIML: 130 };
const BRANCH_TEACHERS = { CSE: 80, ECE: 75, ME: 70, CIV: 65, EEE: 70, ISE: 75, AIML: 65 };

function _name(a, b) { return FN[a % FN.length] + ' ' + LN[b % LN.length]; }
function _phone(n) { return '9' + String(600000000 + (n % 399999999)).slice(0, 9); }
function _usn(br, yr, n) { return '1VT' + yr + br.substring(0, 2).toUpperCase() + String(n).padStart(3, '0'); }
function _dob(n) { const y = 1990 + (n % 16), m = String(1 + (n % 12)).padStart(2, '0'), d = String(1 + (n % 28)).padStart(2, '0'); return y + '-' + m + '-' + d; }

const DEMO = {
  faces: {},
  docRequests: [
    { id: 'DR001', stuId: 'S0042', stuName: 'Priya Sharma', type: 'Bonafide Certificate', reason: 'Bank loan application', date: '2025-03-15', status: 'Pending' },
    { id: 'DR002', stuId: 'S0156', stuName: 'Rohan Reddy', type: 'Transcript', reason: 'Job application abroad', date: '2025-03-14', status: 'Processing' },
    { id: 'DR003', stuId: 'S0089', stuName: 'Ananya Kumar', type: 'NOC', reason: 'Internship at Infosys', date: '2025-03-13', status: 'Ready' },
    { id: 'DR004', stuId: 'S0234', stuName: 'Kiran Singh', type: 'Conduct Certificate', reason: 'Higher studies visa', date: '2025-03-12', status: 'Delivered' },
    { id: 'DR005', stuId: 'S0311', stuName: 'Divya Nair', type: 'Bonafide Certificate', reason: 'National scholarship', date: '2025-03-10', status: 'Pending' },
  ],
  notices: [
    { id: 'N001', title: 'VTU End Semester Exam Schedule — April 2025', date: '2025-03-18', priority: 'High', body: 'End-semester examinations scheduled from April 15. Hall tickets available from April 5 on the VTU portal.' },
    { id: 'N002', title: 'Annual Technical Fest — AsthraTech 2025', date: '2025-03-15', priority: 'Medium', body: 'Annual fest March 28–30. Events include hackathons and robotics. Register by March 22.' },
    { id: 'N003', title: 'State Merit Scholarship Applications Open', date: '2025-03-10', priority: 'High', body: 'CGPA >= 8.0 and income below 2.5L required. Deadline April 1.' },
    { id: 'N004', title: 'Faculty Development Programme — AI/ML', date: '2025-03-08', priority: 'Low', body: 'Three-day FDP April 5–7 at main auditorium. Register through HR portal.' },
    { id: 'N005', title: 'Campus Placement Drive — TCS, Infosys, Wipro', date: '2025-03-05', priority: 'High', body: 'Placement drive April 10–12 for 2025 batch. CGPA >= 6.5 required. Register at placement cell by March 30.' },
  ],
  students: {},
  teachers: {},
  admin: { id: 'ADMIN', name: 'Dr. Ramesh Kumar', role: 'admin', branch: 'Administration', email: 'admin@campusasthra.edu.in', phone: '9900000001', faceId: null, joinDate: '2005-06-01' }
};

// ── Generate 500 teachers distributed across branches ──
let _tSeq = 1;
for (const [branch, count] of Object.entries(BRANCH_TEACHERS)) {
  const subs = SUBJ[branch] || ['General'];
  for (let i = 0; i < count; i++, _tSeq++) {
    const id = 'T' + String(_tSeq).padStart(3, '0');
    DEMO.teachers[id] = {
      id, name: _name(_tSeq * 3, _tSeq * 7), branch, role: 'teacher',
      department: branch + ' Department',
      designation: DESIG[_tSeq % DESIG.length],
      subject: subs[_tSeq % subs.length],
      email: id.toLowerCase() + '@campusasthra.edu.in',
      phone: _phone(_tSeq + 100),
      qualification: QUALS[_tSeq % QUALS.length],
      experience: 1 + (_tSeq % 30),
      faceId: null,
      classesThisMonth: 12 + (_tSeq % 14),
      studentsCount: 35 + (_tSeq % 80),
      joinYear: 1995 + (_tSeq % 28)
    };
  }
}

// ── Generate 1000 students distributed across branches ──
let _sSeq = 1;
for (const [branch, count] of Object.entries(BRANCH_STUDENTS)) {
  for (let i = 0; i < count; i++, _sSeq++) {
    const id = 'S' + String(_sSeq).padStart(4, '0');
    const sem = 1 + ((_sSeq - 1) % 8);
    const yr = 20 + Math.floor((sem - 1) / 2);
    DEMO.students[id] = {
      id, name: _name(_sSeq * 5, _sSeq * 3), branch, semester: sem,
      section: ['A', 'B', 'C'][(_sSeq - 1) % 3],
      usn: _usn(branch, yr, _sSeq),
      phone: _phone(_sSeq + 5000),
      email: id.toLowerCase() + '@campusasthra.edu.in',
      city: CITIES[_sSeq % CITIES.length],
      cgpa: parseFloat((5.5 + (_sSeq % 45) * 0.1).toFixed(2)),
      attendance: 60 + (_sSeq % 40),
      feeStatus: _sSeq % 8 === 0 ? 'Pending' : _sSeq % 13 === 0 ? 'Partial' : 'Paid',
      dob: _dob(_sSeq),
      faceId: null,
      admissionYear: 2020 + (sem > 4 ? 0 : 1)
    };
  }
}

console.log('[CampusAsthra] Ready:',
  Object.keys(DEMO.students).length, 'students,',
  Object.keys(DEMO.teachers).length, 'teachers');

function idToEmail(id) { return id.toLowerCase() + '@campusasthra.edu.in'; }

// ── GLOBALS ────────────────────────────────────
let db = null, fbAuth = null, fbMode = 'demo';
let currentRole = 'admin', currentUser = null, activeSection = '';
let camStream = null, regTargetId = null, regTargetType = null, regPool = [];

// ── FIREBASE INIT ───────────────────────────────
let _secondaryApp  = null; // secondary Firebase app for creating Auth accounts
let _secondaryAuth = null; // without disturbing admin session

function initFirebase() {
  try {
    if (firebase.apps.length) firebase.apps.forEach(a => a.delete());
    firebase.initializeApp(FB_CFG);
    db     = firebase.firestore();
    fbAuth = firebase.auth();
    fbMode = 'firebase';

    // Secondary app — used only for createUserWithEmailAndPassword
    // so admin session is never interrupted
    _secondaryApp  = firebase.initializeApp(FB_CFG, 'secondary');
    _secondaryAuth = _secondaryApp.auth();

    return true;
  } catch (e) {
    console.error('Firebase init failed:', e);
    return false;
  }
}

// Create a Firebase Auth account WITHOUT touching the admin's session
async function createAuthAccount(email, password) {
  const auth = _secondaryAuth || fbAuth;
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    if (_secondaryAuth) await _secondaryAuth.signOut(); // clean up secondary session
    return { ok: true };
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') return { ok: true, existed: true };
    return { ok: false, error: e.message };
  }
}

function setFbDot(state, text) {
  ['fbDot', 'fbDotTop'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = 'fb-dot ' + state;
  });
  ['fbTxt', 'fbTxtTop'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

// ── DATA ACCESS ─────────────────────────────────
async function dbGet(col, docId) {
  const snap = await db.collection(col).doc(docId).get();
  return snap.exists ? { id: snap.id, ...snap.data() } : null;
}
async function dbSet(col, docId, data) {
  try {
    await db.collection(col).doc(docId).set(data, { merge: true });
  } catch (e) {
    if (e.code === 'permission-denied') {
      const user = fbAuth.currentUser;
      const msg = user
        ? 'Permission denied writing to "' + col + '". Firebase Rules need updating. Go to Settings → Security Rules → Copy & paste into Firebase Console.'
        : 'Not authenticated — please sign out and sign in again.';
      throw new Error(msg);
    }
    throw e;
  }
}
async function dbDel(col, docId) {
  await db.collection(col).doc(docId).delete();
}
async function dbAll(col) {
  const snap = await db.collection(col).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
async function dbAdd(col, data) {
  const ref = await db.collection(col).add(data);
  return ref.id;
}

// Firestore batch limit = 500. Use 400 to stay safe.
async function dbBatchWrite(col, docs, onProgress) {
  const CHUNK = 400;
  for (let i = 0; i < docs.length; i += CHUNK) {
    const chunk = docs.slice(i, i + CHUNK);
    const batch = db.batch();
    chunk.forEach(doc => batch.set(db.collection(col).doc(doc.id), doc));
    await batch.commit();
    if (onProgress) onProgress(Math.min(i + CHUNK, docs.length), docs.length);
    await new Promise(r => setTimeout(r, 400)); // pace writes
  }
}

// ── DATA ACCESS — hybrid: DEMO base + Firestore real records merged ──────────
// In Firebase mode we do NOT fetch all 1,500 DEMO records from Firestore
// (they were never written there to save quota). Instead we start with the
// in-memory DEMO data and overlay any real records that ARE in Firestore
// (i.e. new students/teachers added by the admin through the portal).
async function getStudents() {
  if (fbMode !== 'firebase') return Object.values(DEMO.students);
  try {
    const snap = await db.collection('students').get();
    const fsMap = {};
    snap.docs.forEach(d => { fsMap[d.id] = { id: d.id, ...d.data() }; });
    // Merge: DEMO base + override/add with Firestore records
    const merged = { ...DEMO.students, ...fsMap };
    return Object.values(merged);
  } catch (e) {
    console.warn('getStudents fallback to demo:', e.message);
    return Object.values(DEMO.students);
  }
}

async function getTeachers() {
  if (fbMode !== 'firebase') return Object.values(DEMO.teachers);
  try {
    const snap = await db.collection('teachers').get();
    const fsMap = {};
    snap.docs.forEach(d => { fsMap[d.id] = { id: d.id, ...d.data() }; });
    const merged = { ...DEMO.teachers, ...fsMap };
    return Object.values(merged);
  } catch (e) {
    console.warn('getTeachers fallback to demo:', e.message);
    return Object.values(DEMO.teachers);
  }
}

async function getFaces()    { return fbMode === 'firebase' ? dbAll('faces')        : Object.values(DEMO.faces); }

// Lightweight face fetch for matching — only gets descriptor + identity fields, no imageData
// This is much faster when faces have large base64 image data stored
async function getFacesForMatching() {
  if (fbMode !== 'firebase') return Object.values(DEMO.faces);
  try {
    // faces collection is now public read (allow read: if true) so no auth needed
    const snap = await db.collection('faces').get();
    return snap.docs.map(d => {
      const data = d.data();
      return {
        id:         data.id         || d.id,
        personId:   data.personId   || '',
        personName: data.personName || '',
        type:       data.type       || '',
        descriptor: data.descriptor || null,
        imageData:  null
      };
    });
  } catch (e) {
    console.warn('[getFacesForMatching] error:', e.code, e.message);
    // If rules block unauthenticated read, fall back to DEMO faces
    return Object.values(DEMO.faces || {});
  }
}
async function getDocReqs()  { return fbMode === 'firebase' ? dbAll('docRequests')  : DEMO.docRequests.slice(); }
async function getNotices()  { return fbMode === 'firebase' ? dbAll('notices')      : DEMO.notices.slice(); }

// ── SEED FIREBASE — quota-safe: Auth accounts + essential docs only ────────────
// We do NOT write 1,500 student/teacher docs to Firestore.
// The Spark free plan has 20K writes/day and 1 GiB storage.
// Bulk-writing 1,500 docs + base64 face images instantly exceeds this.
// Student/teacher data lives in the in-memory DEMO object.
// Only NEW records added by admin are written to Firestore individually.
async function seedFirebase() {
  if (fbMode !== 'firebase') { showToast('Not connected to Firebase', 'error'); return; }

  const mc = document.getElementById('mc');
  mc.innerHTML = [
    '<div class="pg-hdr"><div>',
    '<div class="pg-title">Firebase Setup</div>',
    '<div class="pg-sub">Creating Auth accounts + essential docs only — 1,500 student/teacher records stay in memory (quota-safe)</div>',
    '</div></div>',
    '<div class="card">',
    '<div id="seedLog" style="font-size:12.5px;color:var(--tx2);line-height:2.2;max-height:340px;overflow-y:auto"></div>',
    '<div style="margin-top:14px"><div class="pw" style="height:8px">',
    '<div class="pb pb-gold" id="seedBar" style="width:0%;transition:width .5s"></div></div></div>',
    '<div id="seedPct" style="font-size:11px;color:var(--tx3);margin-top:5px;font-family:var(--fm)">0%</div>',
    '</div>'
  ].join('');

  function log(msg, pct) {
    const el = document.getElementById('seedLog');
    const bar = document.getElementById('seedBar');
    const pctEl = document.getElementById('seedPct');
    if (el) { el.innerHTML += '<div>' + msg + '</div>'; el.scrollTop = el.scrollHeight; }
    if (bar) bar.style.width = pct + '%';
    if (pctEl) pctEl.textContent = Math.round(pct) + '%';
  }

  async function makeAuthUser(email, password) {
    const result = await createAuthAccount(email, password);
    if (result.ok && result.existed) return 'exists';
    if (result.ok) return 'created';
    return 'failed';
  }

  try {
    // ── Step 1: Admin Auth account ──
    log('Creating Auth: admin@campusasthra.edu.in ...', 5);
    const ar = await makeAuthUser('admin@campusasthra.edu.in', 'admin123');
    log('&nbsp;&nbsp;Admin → ' + ar + ' ✓', 10);

    // ── Step 2: 10 demo teacher accounts (T001–T010) ──
    log('Creating Auth accounts: T001–T010 (password: teach123) ...', 12);
    for (let i = 1; i <= 10; i++) {
      const tid = 'T' + String(i).padStart(3, '0');
      const r = await makeAuthUser(idToEmail(tid), 'teach123');
      log('&nbsp;&nbsp;' + tid + ' → ' + r, 12 + i * 3);
    }

    // ── Step 3: 10 demo student accounts (S0001–S0010) ──
    log('Creating Auth accounts: S0001–S0010 (password: study123) ...', 45);
    for (let i = 1; i <= 10; i++) {
      const sid = 'S' + String(i).padStart(4, '0');
      const r = await makeAuthUser(idToEmail(sid), 'study123');
      log('&nbsp;&nbsp;' + sid + ' → ' + r, 45 + i * 3);
    }

    log('Writing essential Firestore documents (quota-safe)...', 84);
    await dbSet('users', 'ADMIN', DEMO.admin);

    log('Writing 5 notices ...', 88);
    const nb = db.batch();
    DEMO.notices.forEach(n => nb.set(db.collection('notices').doc(n.id), n));
    await nb.commit();

    log('Writing 5 document requests ...', 92);
    const db2 = db.batch();
    DEMO.docRequests.forEach(d => db2.set(db.collection('docRequests').doc(d.id), d));
    await db2.commit();

    log('Finalising ...', 98);
    await new Promise(r => setTimeout(r, 300));

    log([
      '<br><strong style="color:var(--green);font-size:14px">&#10003; Firebase setup complete! (quota-safe)</strong>',
      '<br><br><strong style="color:var(--tx)">Created in Firestore:</strong>',
      '<br>&nbsp;&nbsp;• 21 Firebase Auth accounts (1 admin + 10 teachers + 10 students)',
      '<br>&nbsp;&nbsp;• 1 admin profile doc · 5 notices · 5 document requests',
      '<br><br><strong style="color:var(--amber)">Kept in memory only (saves quota):</strong>',
      '<br>&nbsp;&nbsp;• 1,000 student records (not written to Firestore)',
      '<br>&nbsp;&nbsp;• 500 teacher records (not written to Firestore)',
      '<br>&nbsp;&nbsp;• New records added by admin ARE saved individually to Firestore',
      '<br><br><em style="color:var(--tx3)">Login: admin/admin123 · T001/teach123 · S0001/study123</em>',
      '<br><em style="color:var(--tx3)">Redirecting in 3s...</em>'
    ].join(''), 100);

    showToast('Firebase ready — 21 Auth accounts, quota-safe', 'success');
    setTimeout(() => navigateTo('adminDash'), 3000);

  } catch (e) {
    log('<span style="color:var(--red)">Error: ' + e.message + '</span><br>Check Firestore rules and internet.', 0);
    showToast('Setup failed: ' + e.message, 'error');
    console.error('Seed error:', e);
  }
}

// ── AUTH ────────────────────────────────────────
function setRole(r) {
  currentRole = r;
  ['admin', 'teacher', 'student'].forEach(x => {
    const el = document.getElementById('rt' + x.charAt(0).toUpperCase() + x.slice(1));
    if (el) el.classList.toggle('active', x === r);
  });
  const demos = { admin: { id: 'admin', pw: 'admin123' }, teacher: { id: 'T001', pw: 'teach123' }, student: { id: 'S0001', pw: 'study123' } };
  document.getElementById('loginId').value = demos[r].id;
  document.getElementById('loginPwd').value = demos[r].pw;
}

async function doLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pwd = document.getElementById('loginPwd').value;
  if (!id || !pwd) { showToast('Please enter credentials', 'error'); return; }

  const btn = document.getElementById('loginBtn');
  btn.textContent = 'Authenticating...'; btn.disabled = true;

  try {
    if (fbMode === 'firebase') {
      // Build email from the ID entered
      const email = (id === 'admin')
        ? 'admin@campusasthra.edu.in'
        : idToEmail(id.startsWith('S') || id.startsWith('T') ? id : (currentRole === 'student' ? 'S' + id.padStart(4, '0') : id));

      // Firebase Auth handles password verification — no password stored in Firestore
      const cred = await fbAuth.signInWithEmailAndPassword(email, pwd);

      // Derive role and personId directly from email — no userRoles lookup needed
      // Email format: admin@ → admin, t001@ → teacher T001, s0001@ → student S0001
      const localPart = email.split('@')[0].toUpperCase(); // e.g. ADMIN, T001, S0001

      // Store password for re-auth after creating new student/teacher Auth accounts
      if (localPart === 'ADMIN') window._adminPwd = pwd;
      let role, personId, profile;

      if (localPart === 'ADMIN') {
        role = 'admin'; personId = 'ADMIN';
        profile = await dbGet('users', 'ADMIN');
        // If profile missing from Firestore, use demo data
        if (!profile) profile = { ...DEMO.admin };

      } else if (localPart.startsWith('T') && localPart.length === 4) {
        role = 'teacher'; personId = localPart; // e.g. T001
        profile = await dbGet('teachers', personId);
        if (!profile) profile = DEMO.teachers[personId] || null;

      } else if (localPart.startsWith('S') && localPart.length === 5) {
        role = 'student'; personId = localPart; // e.g. S0001
        profile = await dbGet('students', personId);
        if (!profile) profile = DEMO.students[personId] || null;

      } else {
        showToast('Unrecognised account format. Contact admin.', 'error');
        await fbAuth.signOut(); return;
      }

      if (!profile) {
        // Profile not in Firestore yet — seed it now from demo data
        if (role === 'admin') {
          profile = { ...DEMO.admin };
          await dbSet('users', 'ADMIN', profile);
        } else if (role === 'teacher' && DEMO.teachers[personId]) {
          profile = { ...DEMO.teachers[personId] };
          await dbSet('teachers', personId, profile);
        } else if (role === 'student' && DEMO.students[personId]) {
          profile = { ...DEMO.students[personId] };
          await dbSet('students', personId, profile);
        } else {
          showToast('Profile not found. Go to Settings → Seed Data.', 'error');
          await fbAuth.signOut(); return;
        }
      }

      currentRole = role;
      currentUser = { ...profile, role, uid: cred.user.uid };

    } else {
      // Demo mode — in-memory only
      if (currentRole === 'admin' && id === 'admin' && pwd === 'admin123') {
        currentUser = { ...DEMO.admin, role: 'admin' };
      } else if (currentRole === 'teacher') {
        const u = DEMO.teachers[id];
        if (!u || pwd !== 'teach123') { showToast('Invalid faculty credentials', 'error'); return; }
        currentUser = { ...u, role: 'teacher' };
      } else {
        const sid = id.startsWith('S') ? id : 'S' + id.padStart(4, '0');
        const u = DEMO.students[sid];
        if (!u || pwd !== 'study123') { showToast('Invalid student credentials', 'error'); return; }
        currentUser = { ...u, role: 'student' };
      }
    }
    enterDash();
  } catch (e) {
    const msg =
      e.code === 'auth/invalid-credential' ? 'Incorrect password — check your credentials' :
        e.code === 'auth/wrong-password' ? 'Incorrect password' :
          e.code === 'auth/user-not-found' ? 'Account not found — click "Create Firebase Auth Accounts" first' :
            e.code === 'auth/too-many-requests' ? 'Too many failed attempts — wait a few minutes' :
              e.code === 'auth/network-request-failed' ? 'Network error — check your internet connection' :
                e.message;
    showToast(msg, 'error');
  } finally {
    btn.textContent = 'Sign In to Portal'; btn.disabled = false;
  }
}

function enterDash() {
  document.getElementById('loginPage').classList.remove('active');
  document.getElementById('dashPage').classList.add('active');

  const chips = { admin: 'bgold', teacher: 'bb', student: 'bg' };
  const labels = { admin: 'Administrator', teacher: 'Faculty', student: 'Student' };
  document.getElementById('topChip').className = 'role-chip ' + chips[currentUser.role];
  document.getElementById('topChip').textContent = labels[currentUser.role];
  document.getElementById('topAv').textContent = currentUser.name[0];
  document.getElementById('topName').textContent = currentUser.name;
  document.getElementById('topUid').textContent = currentUser.id;

  buildSidebar();
  navigateTo({ admin: 'adminDash', teacher: 'teacherDash', student: 'studentDash' }[currentUser.role]);
  showToast('Welcome, ' + currentUser.name, 'success');
}

async function doLogout() {
  if (fbMode === 'firebase' && fbAuth) {
    try { await fbAuth.signOut(); } catch (_) { }
  }
  currentUser = null;
  document.getElementById('dashPage').classList.remove('active');
  document.getElementById('loginPage').classList.add('active');
  document.getElementById('mc').innerHTML = '';
  setRole('admin');
  showToast('Signed out', 'info');
}

// ── SIDEBAR + NAVIGATION ────────────────────────
const NAVDEF = {
  admin: [
    { s: 'Main', items: [{ id: 'adminDash', icon: 'dashboard', l: 'Dashboard' }, { id: 'adminStudents', icon: 'students', l: 'Students' }, { id: 'adminTeachers', icon: 'teachers', l: 'Faculty' }] },
    { s: 'Management', items: [{ id: 'adminAttendance', icon: 'attendance', l: 'Attendance' }, { id: 'adminFaceReg', icon: 'face', l: 'Face Registration' }, { id: 'adminDocReq', icon: 'docs', l: 'Doc Requests' }, { id: 'adminTimetable', icon: 'timetable', l: 'Timetable' }] },
    { s: 'System', items: [{ id: 'adminNotices', icon: 'notices', l: 'Notices' }, { id: 'adminSettings', icon: 'settings', l: 'Settings' }] }
  ],
  teacher: [
    { s: 'Main', items: [{ id: 'teacherDash', icon: 'dashboard', l: 'Dashboard' }, { id: 'teacherAttendance', icon: 'attendance', l: 'Mark Attendance' }, { id: 'teacherGrades', icon: 'grades', l: 'Grades' }] },
    { s: 'Resources', items: [{ id: 'teacherClassroom', icon: 'classroom', l: 'Google Classroom' }, { id: 'teacherTimetable', icon: 'timetable', l: 'Timetable' }, { id: 'teacherNotices', icon: 'notices', l: 'Notices' }] }
  ],
  student: [
    { s: 'Academic', items: [{ id: 'studentDash', icon: 'dashboard', l: 'Dashboard' }, { id: 'studentAttendance', icon: 'attendance', l: 'My Attendance' }, { id: 'studentGrades', icon: 'grades', l: 'Grades & Results' }] },
    { s: 'Tools', items: [{ id: 'studentAI', icon: 'ai', l: 'AI Doubt Solver' }, { id: 'studentClassroom', icon: 'classroom', l: 'Google Classroom' }, { id: 'studentDocReq', icon: 'docs', l: 'Request Documents' }, { id: 'studentFees', icon: 'fees', l: 'Fee Status' }] },
    { s: 'Info', items: [{ id: 'studentTimetable', icon: 'timetable', l: 'Timetable' }, { id: 'studentNotices', icon: 'notices', l: 'Notices' }, { id: 'studentProfile', icon: 'face', l: 'My Profile' }] }
  ]
};

function buildSidebar() {
  let h = '';
  NAVDEF[currentUser.role].forEach(group => {
    h += '<div class="nav-sec">' + group.s + '</div>';
    group.items.forEach(item => {
      h += '<div class="nav-item" id="nav-' + item.id + '" onclick="navigateTo(\'' + item.id + '\')">' + (IC[item.icon] || '') + ' ' + item.l + '</div>';
    });
  });
  document.getElementById('navItems').innerHTML = h;
}

function navigateTo(id) {
  // Reset date picker flag when leaving attendance
  if (activeSection === 'teacherAttendance' && id !== 'teacherAttendance') {
    window._attDateSet = false;
  }
  activeSection = id;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const ni = document.getElementById('nav-' + id);
  if (ni) ni.classList.add('active');

  const el = document.getElementById('mc');
  el.innerHTML = '<div class="spinner"></div>';

  const pages = { adminDash, adminStudents, adminTeachers, adminAttendance, adminFaceReg, adminDocReq, adminTimetable, adminNotices, adminSettings, teacherDash, teacherAttendance, teacherGrades, teacherClassroom, teacherTimetable, teacherNotices, studentDash, studentAttendance, studentGrades, studentAI, studentClassroom, studentDocReq, studentFees, studentTimetable, studentNotices, studentProfile };

  if (pages[id]) {
    pages[id]().catch(e => {
      el.innerHTML = '<div class="card" style="color:var(--red)">Error loading page: ' + e.message + '</div>';
    });
  } else {
    el.innerHTML = '<div class="pg-hdr"><div><div class="pg-title">' + id + '</div></div></div><div class="card">Coming soon</div>';
  }
}

function mc() { return document.getElementById('mc'); }

// ── HTML HELPERS ────────────────────────────────
function hdr(title, sub, actions) {
  return '<div class="pg-hdr"><div><div class="pg-title">' + title + '</div><div class="pg-sub">' + (sub || '') + '</div></div>' + (actions ? '<div>' + actions + '</div>' : '') + '</div>';
}
function scard(cls, label, val, note) {
  return '<div class="stat-card ' + cls + '"><div class="sc-lbl">' + label + '</div><div class="sc-val">' + val + '</div>' + (note ? '<div class="sc-note">' + note + '</div>' : '') + '</div>';
}
function mkbtn(color, label, onclick) {
  return '<button class="btn btn-' + color + '" onclick="' + onclick + '">' + label + '</button>';
}
function swTab(btn, id) {
  const p = btn.closest('.card') || document.getElementById('mc');
  p.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  p.querySelectorAll('.tab-pane').forEach(t => t.classList.remove('active'));
  const t = document.getElementById(id); if (t) t.classList.add('active');
}

function timetable(branch) {
  return renderTTView(defaultSlots(branch));
}

// Read-only timetable view — used by students and teachers
// highlightTeacherId: highlight cells assigned to this teacher
function renderTTView(slots, highlightTeacherId) {
  const days  = ['Mon','Tue','Wed','Thu','Fri','Sat'];
  const times = ['9:00','10:00','11:00','12:00','1:00','2:00','3:00'];

  // Build teacher ID→name map from DEMO
  const tchMap = {};
  Object.values(DEMO.teachers).forEach(t => { tchMap[t.id] = t.name; });

  let h = '<div style="overflow-x:auto"><table class="tt-tbl"><thead><tr>'
    + '<th style="min-width:55px">Day</th>'
    + times.map(t => '<th>' + t + '</th>').join('')
    + '</tr></thead><tbody>';

  days.forEach(day => {
    h += '<tr><td style="font-weight:700;font-size:11.5px;background:var(--sf2);color:var(--navy);white-space:nowrap">' + day + '</td>';
    times.forEach(time => {
      const cell = (slots && slots[day] && slots[day][time]) || {};
      if (cell.type === 'break') {
        h += '<td style="background:rgba(181,130,10,.08);text-align:center;color:var(--gold);font-weight:600;font-style:italic;font-size:11.5px">🍽 Lunch</td>';
        return;
      }
      const subj    = cell.subject || '';
      const tchId   = cell.teacher || '';
      const tchName = tchMap[tchId] || tchId;
      const room    = cell.room    || '';
      const isMyClass = highlightTeacherId && tchId === highlightTeacherId;
      const bg = isMyClass ? 'background:rgba(26,86,219,.07);' : '';

      if (!subj) {
        h += '<td style="' + bg + 'color:var(--tx3);font-size:11px;text-align:center">Free</td>';
        return;
      }
      h += '<td style="' + bg + 'padding:6px 8px;vertical-align:top">'
        + '<div style="font-weight:600;font-size:12px;color:' + (isMyClass?'var(--blue2)':'var(--tx)') + '">' + subj + '</div>'
        + (tchName ? '<div style="font-size:10.5px;color:var(--tx3);margin-top:2px">👤 ' + tchName + '</div>' : '')
        + (room     ? '<div style="font-size:10px;color:var(--tx3);font-family:var(--fm)">' + room + '</div>' : '')
        + '</td>';
    });
    h += '</tr>';
  });
  return h + '</tbody></table></div>';
}

// ── ADMIN PAGES ──────────────────────────────────
async function adminDash() {
  const [stus, tchs, faces, reqs] = await Promise.all([getStudents(), getTeachers(), getFaces(), getDocReqs()]);
  const avg = stus.length ? Math.round(stus.reduce((a, s) => a + (s.attendance || 75), 0) / stus.length) : 0;
  const feeD = stus.filter(s => s.feeStatus !== 'Paid').length;
  const mode = fbMode === 'firebase' ? '<span style="color:var(--green)">' + IC.firebase + ' Firebase Live</span>' : '<span style="color:var(--amber)">Demo Mode</span>';

  mc().innerHTML = [
    hdr('Administrative Dashboard', 'CampusAsthra — VTU Belagavi · ' + new Date().toDateString() + ' · ' + mode, mkbtn('gold', IC.seed + ' Setup Firebase', 'seedFirebase()')),
    '<div class="stat-grid">',
    scard('sc-gold', 'Total Students', stus.length, 'In ' + (fbMode === 'firebase' ? 'Firebase' : 'Demo')),
    scard('sc-blue', 'Faculty Members', tchs.length, ''),
    scard(avg >= 75 ? 'sc-green' : 'sc-red', 'Avg. Attendance', avg + '%', 'Min 75% required'),
    scard('sc-green', 'Biometrics Enrolled', faces.length, 'Face records in DB'),
    scard('sc-red', 'Fee Defaulters', feeD, ''),
    '</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">',
    '<div class="card"><div class="card-hd"><span class="card-title">Branch Enrollment</span></div>',
    BR.map(b => {
      const c = stus.filter(s => s.branch === b).length;
      return '<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:12px">' + b + '</span><span style="font-size:11px;color:var(--tx2)">' + c + '</span></div><div class="pw"><div class="pb pb-gold" style="width:' + Math.min(100, c * 3) + '%"></div></div></div>';
    }).join('') + '</div>',
    '<div class="card"><div class="card-hd"><span class="card-title">Quick Actions</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">',
    [['face', 'Register Face', 'adminFaceReg', 'gold'], ['docs', 'Doc Requests', 'adminDocReq', 'blue'], ['students', 'Students', 'adminStudents', 'green'], ['teachers', 'Faculty', 'adminTeachers', 'gold'], ['attendance', 'Attendance', 'adminAttendance', 'blue'], ['notices', 'Notices', 'adminNotices', 'green']].map(([ic, l, s, c]) => '<button class="btn btn-' + c + '" style="justify-content:center;padding:10px" onclick="navigateTo(\'' + s + '\')">' + (IC[ic] || '') + ' ' + l + '</button>').join(''),
    '</div></div></div>'
  ].join('');
}

async function adminStudents() {
  const stus = await getStudents();
  const faces = await getFaces();
  const fset = new Set(faces.map(f => f.personId));
  window._stuArr = stus; window._fset = fset;

  mc().innerHTML = [
    hdr('Student Records', stus.length + ' students in ' + (fbMode === 'firebase' ? 'Firebase' : 'Demo'),
      mkbtn('gold', IC.plus + ' Add Student', 'showAddStudentForm()')),
    '<div id="addStuForm" style="display:none"></div>',
    '<div class="srow">',
    '<input class="si" id="stuQ" placeholder="Search name, USN, ID..." oninput="filterStu()">',
    '<select class="ss" id="stuBr" onchange="filterStu()"><option value="">All Branches</option>' + BR.map(b => '<option>' + b + '</option>').join('') + '</select>',
    '<select class="ss" id="stuFee" onchange="filterStu()"><option value="">Fee Status</option><option>Paid</option><option>Pending</option><option>Partial</option></select>',
    '</div>',
    '<div class="card" style="padding:0;overflow:hidden"><div class="tbl-wrap"><table>',
    '<thead><tr><th>USN</th><th>Name</th><th>Branch</th><th>Sem</th><th>Attendance</th><th>CGPA</th><th>Fee</th><th>Biometric</th><th>Actions</th></tr></thead>',
    '<tbody id="stuBody">' + renderStuRows(stus.slice(0, 60), fset) + '</tbody></table></div></div>',
    '<div id="stuMeta" style="font-size:10.5px;color:var(--tx3);margin-top:4px">Showing ' + Math.min(60, stus.length) + ' of ' + stus.length + '</div>'
  ].join('');
}

function showAddStudentForm() {
  const f = document.getElementById('addStuForm');
  if (!f) return;
  f.style.display = 'block';
  f.innerHTML = [
    '<div class="card" style="border:1px solid var(--gold);margin-bottom:14px">',
    '<div class="card-hd"><span class="card-title">Add New Student</span><button class="btn btn-sec" style="padding:4px 10px;font-size:11px" onclick="cancelAddStu()">Cancel</button></div>',
    '<div style="display:grid;grid-template-columns:1fr 340px;gap:18px;align-items:start">',

    // ── Left: form fields ──
    '<div>',
    '<div class="form-2">',
    '<div class="fg"><label>Full Name *</label><input class="fgi" id="ns_name" placeholder="e.g. Priya Sharma"></div>',
    '<div class="fg"><label>Branch *</label><select class="fgs" id="ns_branch"><option value="">Select Branch</option>' + BR.map(b => '<option>' + b + '</option>').join('') + '</select></div>',
    '<div class="fg"><label>Semester *</label><select class="fgs" id="ns_sem">' + [1,2,3,4,5,6,7,8].map(s => '<option>' + s + '</option>').join('') + '</select></div>',
    '<div class="fg"><label>Section</label><select class="fgs" id="ns_sec"><option>A</option><option>B</option><option>C</option></select></div>',
    '<div class="fg"><label>Phone</label><input class="fgi" id="ns_phone" placeholder="9xxxxxxxxx"></div>',
    '<div class="fg"><label>City</label><input class="fgi" id="ns_city" placeholder="Bengaluru"></div>',
    '<div class="fg"><label>CGPA</label><input class="fgi" id="ns_cgpa" type="number" step="0.1" min="0" max="10" placeholder="8.5"></div>',
    '<div class="fg"><label>Attendance %</label><input class="fgi" id="ns_att" type="number" min="0" max="100" placeholder="85"></div>',
    '</div>',
    '<div class="fg" style="margin-top:4px"><label>Password (for portal login)</label><input class="fgi" id="ns_pwd" type="password" placeholder="Min 6 characters" value="study123"></div>',
    '<div style="display:flex;gap:8px;margin-top:10px">',
    mkbtn('gold', IC.check + ' Save Student & Register Face', 'saveNewStudent()'),
    '</div></div>',

    // ── Right: face capture ──
    '<div>',
    '<div style="font-size:10px;color:var(--tx2);font-weight:600;letter-spacing:.6px;text-transform:uppercase;margin-bottom:6px;">Biometric Face Capture <span style="color:var(--tx3);font-weight:400">(optional)</span></div>',
    '<div style="position:relative;background:#000;border-radius:6px;overflow:hidden;border:1.5px solid var(--bd2);aspect-ratio:4/3;">',
    '<video id="ns_video" autoplay muted playsinline style="width:100%;height:100%;object-fit:cover;display:block;"></video>',
    '<canvas id="ns_canvas" style="display:none;width:100%;height:100%;object-fit:cover;"></canvas>',
    '<div class="cc tl"></div><div class="cc tr"></div><div class="cc bl"></div><div class="cc br"></div>',
    '<div class="cam-sl"></div>',
    '</div>',
    '<div id="ns_cam_status" class="cam-st scanning" style="margin-top:6px;font-size:11px;">Starting camera...</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;">',
    '<button class="btn btn-blue" style="justify-content:center" id="ns_snap_btn" onclick="snapStudentFace()">' + IC.camera + ' Capture Face</button>',
    '<button class="btn btn-sec" style="justify-content:center;display:none" id="ns_retake_btn" onclick="retakeStudentFace()">' + IC.retake + ' Retake</button>',
    '</div>',
    '<div id="ns_face_preview" style="display:none;margin-top:8px;padding:8px;background:var(--gnd);border-radius:5px;font-size:11px;color:var(--green)">' + IC.check + ' Face captured — will be saved with student</div>',
    '</div>',

    '</div></div>' // close grid + card
  ].join('');

  document.getElementById('ns_name').focus();
  // start camera for student face
  window._nsFaceData = null;
  startInlineCam('ns_video', 'ns_cam_status');
}

function cancelAddStu() {
  stopInlineCam('ns_video');
  document.getElementById('addStuForm').style.display = 'none';
}

async function snapStudentFace() {
  const statusEl = document.getElementById('ns_cam_status');
  const snapBtn  = document.getElementById('ns_snap_btn');
  if (snapBtn)   snapBtn.disabled = true;
  if (statusEl) { statusEl.textContent = 'Loading AI models (first time ~10s)...'; statusEl.className = 'cam-st scanning'; }

  const modelOk = await loadFaceApi();
  if (!modelOk) {
    if (statusEl) { statusEl.textContent = 'AI models failed to load — check internet. Face saved without recognition.'; statusEl.className = 'cam-st error'; }
    if (snapBtn) snapBtn.disabled = false;
    return;
  }

  if (statusEl) { statusEl.textContent = 'Detecting face...'; statusEl.className = 'cam-st scanning'; }
  const result = await _snapFaceInline('ns_video', 'ns_canvas');
  if (!result) { if (snapBtn) snapBtn.disabled = false; return; }

  if (!result.descriptor) {
    if (statusEl) { statusEl.textContent = 'No face detected — ensure face is clearly visible, well-lit, and centred, then try again'; statusEl.className = 'cam-st error'; }
    if (snapBtn) snapBtn.disabled = false;
    return;
  }

  window._nsFaceData = result;
  const video  = document.getElementById('ns_video');
  const canvas = document.getElementById('ns_canvas');
  if (video)  video.style.display  = 'none';
  if (canvas) canvas.style.display = 'block';
  if (snapBtn) snapBtn.style.display = 'none';
  const retBtn = document.getElementById('ns_retake_btn');
  if (retBtn) retBtn.style.display = '';
  const prev = document.getElementById('ns_face_preview');
  if (prev) prev.style.display = 'block';
  if (statusEl) { statusEl.textContent = '✓ Face captured with 128-D descriptor — face login will work for this student'; statusEl.className = 'cam-st success'; }
  stopInlineCam('ns_video');
}

function retakeStudentFace() {
  window._nsFaceData = null;
  const video = document.getElementById('ns_video');
  const canvas = document.getElementById('ns_canvas');
  if (video) video.style.display = 'block';
  if (canvas) canvas.style.display = 'none';
  document.getElementById('ns_snap_btn').style.display = '';
  document.getElementById('ns_retake_btn').style.display = 'none';
  const prev = document.getElementById('ns_face_preview');
  if (prev) prev.style.display = 'none';
  const st = document.getElementById('ns_cam_status');
  if (st) { st.textContent = 'Starting camera...'; st.className = 'cam-st scanning'; }
  startInlineCam('ns_video', 'ns_cam_status');
}

async function saveNewStudent() {
  const name   = (document.getElementById('ns_name')   || {}).value.trim();
  const branch = (document.getElementById('ns_branch') || {}).value;
  const sem    = parseInt((document.getElementById('ns_sem') || {}).value) || 1;
  const pwd    = (document.getElementById('ns_pwd')    || {}).value.trim() || 'study123';
  if (!name || !branch) { showToast('Name and Branch are required', 'error'); return; }
  if (pwd.length < 6)   { showToast('Password must be at least 6 characters', 'error'); return; }

  const stus   = window._stuArr || await getStudents();
  const newNum = stus.length + 1;
  const id     = 'S' + String(newNum).padStart(4, '0');
  const yr     = 20 + Math.floor((sem - 1) / 2);
  const email  = id.toLowerCase() + '@campusasthra.edu.in';

  const doc = {
    id, name, branch, semester: sem,
    section:    (document.getElementById('ns_sec')   || {}).value || 'A',
    phone:      (document.getElementById('ns_phone') || {}).value || '',
    city:       (document.getElementById('ns_city')  || {}).value || 'Bengaluru',
    cgpa:       parseFloat((document.getElementById('ns_cgpa') || {}).value) || 7.0,
    attendance: parseInt((document.getElementById('ns_att')   || {}).value) || 80,
    usn:        '1VT' + yr + branch.substring(0, 2).toUpperCase() + String(newNum).padStart(3, '0'),
    email, feeStatus: 'Paid', faceId: null,
    admissionYear: new Date().getFullYear(), dob: '2004-01-01', role: 'student'
  };

  // Disable save button to prevent double-click
  const saveBtn = document.querySelector('[onclick="saveNewStudent()"]');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving...'; }

  try {
    if (fbMode === 'firebase') {
      // 1. Create Firebase Auth account using secondary app
      //    This does NOT touch the admin's session at all
      if (saveBtn) saveBtn.textContent = 'Creating account...';
      const authResult = await createAuthAccount(email, pwd);
      if (!authResult.ok) {
        showToast('Auth creation failed: ' + authResult.error, 'error');
        if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = IC.check + ' Save Student & Register Face'; }
        return;
      }

      // 2. Write to Firestore — admin is still signed in (session was never interrupted)
      if (saveBtn) saveBtn.textContent = 'Saving to Firebase...';
      await dbSet('students', id, doc);

      // 3. Save face if captured
      if (window._nsFaceData) {
        const faceKey = 'student_' + id;
        const fd = window._nsFaceData;
        await dbSet('faces', faceKey, {
          id: faceKey, personId: id, personName: name,
          type: 'student', branch,
          imageData:  fd.imageData  || null,
          descriptor: fd.descriptor || null,
          registeredAt: new Date().toISOString(),
          registeredBy: currentUser ? currentUser.id : 'ADMIN'
        });
        doc.faceId = faceKey;
      }

    } else {
      // Demo mode
      DEMO.students[id] = doc;
      if (window._nsFaceData) {
        const faceKey  = 'student_' + id;
        const fd = window._nsFaceData;
        DEMO.faces[faceKey] = {
          id: faceKey, personId: id, personName: name,
          type: 'student', branch,
          imageData:  fd.imageData  || null,
          descriptor: fd.descriptor || null,
          registeredAt: new Date().toISOString(),
          registeredBy: 'ADMIN'
        };
        DEMO.students[id].faceId = faceKey;
      }
    }

    stopInlineCam('ns_video');
    showToast('Student added: ' + name + ' (' + id + ')' + (window._nsFaceData ? ' + face registered' : ''), 'success');
    window._nsFaceData = null;
    document.getElementById('addStuForm').style.display = 'none';
    navigateTo('adminStudents');
  } catch (e) {
    showToast('Error: ' + e.message, 'error');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = IC.check + ' Save Student & Register Face'; }
  }
}

async function deleteStudent(id) {
  if (!confirm('Delete student ' + id + '? This cannot be undone.')) return;
  try {
    if (fbMode === 'firebase') await dbDel('students', id);
    else delete DEMO.students[id];
    showToast('Student ' + id + ' deleted', 'info');
    navigateTo('adminStudents');
  } catch (e) { showToast('Error: ' + e.message, 'error'); }
}

function editStudent(id) {
  const stus = window._stuArr || Object.values(DEMO.students);
  const s = stus.find(x => x.id === id) || DEMO.students[id];
  if (!s) { showToast('Student not found', 'error'); return; }

  const f = document.getElementById('addStuForm');
  if (!f) return;
  f.style.display = 'block';
  f.innerHTML = [
    '<div class="card" style="border:1px solid var(--blue2);margin-bottom:14px">',
    '<div class="card-hd"><span class="card-title">Edit Student — ' + s.id + '</span>',
    '<button class="btn btn-sec" style="padding:4px 10px;font-size:11px" onclick="cancelAddStu()">Cancel</button></div>',
    '<div class="form-2">',
    '<div class="fg"><label>Full Name *</label><input class="fgi" id="es_name" value="' + s.name + '"></div>',
    '<div class="fg"><label>Branch</label><select class="fgs" id="es_branch">' + BR.map(b => '<option' + (b===s.branch?' selected':'') + '>' + b + '</option>').join('') + '</select></div>',
    '<div class="fg"><label>Semester</label><select class="fgs" id="es_sem">' + [1,2,3,4,5,6,7,8].map(n => '<option' + (n===s.semester?' selected':'') + '>' + n + '</option>').join('') + '</select></div>',
    '<div class="fg"><label>Section</label><select class="fgs" id="es_sec"><option' + (s.section==='A'?' selected':'') + '>A</option><option' + (s.section==='B'?' selected':'') + '>B</option><option' + (s.section==='C'?' selected':'') + '>C</option></select></div>',
    '<div class="fg"><label>Phone</label><input class="fgi" id="es_phone" value="' + (s.phone||'') + '"></div>',
    '<div class="fg"><label>City</label><input class="fgi" id="es_city" value="' + (s.city||'') + '"></div>',
    '<div class="fg"><label>CGPA</label><input class="fgi" id="es_cgpa" type="number" step="0.1" min="0" max="10" value="' + (s.cgpa||'') + '"></div>',
    '<div class="fg"><label>Fee Status</label><select class="fgs" id="es_fee"><option' + (s.feeStatus==='Paid'?' selected':'') + '>Paid</option><option' + (s.feeStatus==='Pending'?' selected':'') + '>Pending</option><option' + (s.feeStatus==='Partial'?' selected':'') + '>Partial</option></select></div>',
    '</div>',
    '<div style="display:flex;gap:8px;margin-top:10px">',
    mkbtn('blue', IC.check + ' Save Changes', 'saveEditStudent(\'' + id + '\')'),
    '</div></div>'
  ].join('');
  f.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function saveEditStudent(id) {
  const name    = (document.getElementById('es_name')   || {}).value.trim();
  const branch  = (document.getElementById('es_branch') || {}).value;
  const sem     = parseInt((document.getElementById('es_sem') || {}).value) || 1;
  const section = (document.getElementById('es_sec')    || {}).value || 'A';
  const phone   = (document.getElementById('es_phone')  || {}).value.trim();
  const city    = (document.getElementById('es_city')   || {}).value.trim();
  const cgpa    = parseFloat((document.getElementById('es_cgpa') || {}).value) || 0;
  const feeStatus = (document.getElementById('es_fee')  || {}).value || 'Paid';
  if (!name) { showToast('Name is required', 'error'); return; }

  const updates = { name, branch, semester: sem, section, phone, city, cgpa, feeStatus };
  try {
    if (fbMode === 'firebase') await dbSet('students', id, updates);
    else if (DEMO.students[id]) Object.assign(DEMO.students[id], updates);
    showToast('Student updated: ' + name, 'success');
    cancelAddStu();
    navigateTo('adminStudents');
  } catch (e) { showToast('Update failed: ' + e.message, 'error'); }
}

function renderStuRows(arr, fset) {
  return arr.map(s => {
    const enrolled = fset.has(s.id) || s.faceId;
    return '<tr>'
      + '<td style="font-family:var(--fm);font-size:10.5px;cursor:pointer;color:var(--blue2)" onclick="viewStudentRecord(\'' + s.id + '\')">' + (s.usn || s.id) + '</td>'
      + '<td><strong style="cursor:pointer" onclick="viewStudentRecord(\'' + s.id + '\')">' + s.name + '</strong><br><span style="font-size:10px;color:var(--tx3)">' + (s.email || '') + '</span></td>'
      + '<td><span class="badge bb">' + s.branch + '</span></td>'
      + '<td>Sem ' + s.semester + '</td>'
      + '<td><span style="color:' + ((s.attendance || 75) >= 75 ? 'var(--green)' : 'var(--red)') + '">' + (s.attendance || 75) + '%</span></td>'
      + '<td style="font-weight:600">' + (s.cgpa || '—') + '</td>'
      + '<td><span class="badge ' + (s.feeStatus === 'Paid' ? 'bg' : s.feeStatus === 'Pending' ? 'br' : 'ba') + '">' + (s.feeStatus || '—') + '</span></td>'
      + '<td><span class="badge ' + (enrolled ? 'bg' : 'br') + '">' + (enrolled ? IC.check + ' Enrolled' : 'Not Enrolled') + '</span></td>'
      + '<td style="display:flex;gap:4px">'
      + '<button class="btn btn-blue" style="padding:3px 8px;font-size:11px" onclick="viewStudentRecord(\'' + s.id + '\')" title="View record">👁</button>'
      + '<button class="btn btn-sec"  style="padding:3px 8px;font-size:11px" onclick="editStudent(\'' + s.id + '\')" title="Edit">' + IC.docs + '</button>'
      + '<button class="btn btn-gold" style="padding:3px 8px;font-size:11px" onclick="quickFaceReg(\'' + s.id + '\',\'student\')" title="Register face">' + IC.face + '</button>'
      + '<button class="btn btn-red"  style="padding:3px 8px;font-size:11px" onclick="deleteStudent(\'' + s.id + '\')" title="Delete">' + IC.trash + '</button>'
      + '</td>'
      + '</tr>';
  }).join('');
}

async function viewStudentRecord(id) {
  const stus  = window._stuArr || await getStudents();
  const s     = stus.find(x => x.id === id);
  if (!s) { showToast('Student not found', 'error'); return; }

  // Load face image and attendance/grade data
  let faceImg = null;
  if (s.faceId && fbMode === 'firebase') {
    try { const fd = await dbGet('faces', s.faceId); faceImg = fd && fd.imageData; } catch (_) {}
  }

  // Load doc requests for this student
  const allReqs = await getDocReqs();
  const myReqs  = allReqs.filter(r =>
    (r.stuId    && r.stuId.toUpperCase()    === id.toUpperCase()) ||
    (r.studentId && r.studentId.toUpperCase() === id.toUpperCase())
  );

  const attColor = (s.attendance||75) >= 75 ? 'var(--green)' : 'var(--red)';

  mc().innerHTML = [
    hdr('Student Profile', s.name,
      '<div style="display:flex;gap:6px">'
      + mkbtn('sec', '← Back to Students', 'navigateTo(\'adminStudents\')')
      + mkbtn('gold', IC.face + ' Register Face', 'quickFaceReg(\'' + id + '\',\'student\')')
      + mkbtn('blue', IC.docs + ' Edit', 'editStudent(\'' + id + '\')')
      + '</div>'),

    '<div style="display:grid;grid-template-columns:260px 1fr;gap:16px;align-items:start">',

    // Left — photo + identity
    '<div>',
    '<div class="card" style="text-align:center">',
    faceImg
      ? '<img src="' + faceImg + '" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid var(--gold);margin:0 auto 10px;display:block">'
      : '<div style="width:120px;height:120px;border-radius:50%;background:var(--gd);display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:700;color:var(--gold);margin:0 auto 10px">' + s.name[0] + '</div>',
    '<div style="font-size:16px;font-weight:700;color:var(--tx)">' + s.name + '</div>',
    '<div style="font-size:12px;color:var(--tx3);font-family:var(--fm);margin-top:3px">' + (s.usn || s.id) + '</div>',
    '<div style="margin-top:8px"><span class="badge bb">' + s.branch + '</span> <span class="badge ba">Sem ' + s.semester + '</span></div>',
    '<div style="margin-top:8px"><span class="badge ' + (s.faceId ? 'bg' : 'br') + '">' + (s.faceId ? IC.check + ' Face Enrolled' : '✗ Not Enrolled') + '</span></div>',
    '</div>',

    // Stats cards
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:0">',
    scard('sc-gold', 'CGPA', s.cgpa || '—', 'Current'),
    scard((s.attendance||75)>=75?'sc-green':'sc-red', 'Attendance', (s.attendance||75)+'%', (s.attendance||75)>=75?'Eligible':'Below minimum'),
    scard(s.feeStatus==='Paid'?'sc-green':'sc-red', 'Fee Status', s.feeStatus||'—', ''),
    scard('sc-blue', 'Section', s.section||'A', 'Class section'),
    '</div>',
    '</div>',

    // Right — full details
    '<div>',
    '<div class="card">',
    '<div class="card-hd"><span class="card-title">Personal Details</span></div>',
    '<div class="form-2">',
    '<div class="fg"><label>Full Name</label><input class="fgi" value="' + s.name + '" disabled></div>',
    '<div class="fg"><label>USN / ID</label><input class="fgi" value="' + (s.usn||s.id) + '" disabled style="font-family:var(--fm)"></div>',
    '<div class="fg"><label>Email</label><input class="fgi" value="' + (s.email||s.id.toLowerCase()+'@campusasthra.edu.in') + '" disabled style="font-family:var(--fm)"></div>',
    '<div class="fg"><label>Phone</label><input class="fgi" value="' + (s.phone||'—') + '" disabled></div>',
    '<div class="fg"><label>City</label><input class="fgi" value="' + (s.city||'—') + '" disabled></div>',
    '<div class="fg"><label>Date of Birth</label><input class="fgi" value="' + (s.dob||'—') + '" disabled></div>',
    '</div></div>',

    // Academic
    '<div class="card">',
    '<div class="card-hd"><span class="card-title">Academic Details</span></div>',
    '<div class="form-2">',
    '<div class="fg"><label>Branch</label><input class="fgi" value="' + s.branch + '" disabled></div>',
    '<div class="fg"><label>Semester</label><input class="fgi" value="Semester ' + s.semester + '" disabled></div>',
    '<div class="fg"><label>Section</label><input class="fgi" value="Section ' + (s.section||'A') + '" disabled></div>',
    '<div class="fg"><label>Join Year</label><input class="fgi" value="' + (s.joinYear||'—') + '" disabled></div>',
    '</div></div>',

    // Document requests
    '<div class="card">',
    '<div class="card-hd"><span class="card-title">Document Requests</span><span class="badge bb">' + myReqs.length + '</span></div>',
    myReqs.length === 0
      ? '<div style="color:var(--tx3);font-size:12px">No document requests</div>'
      : '<div class="tbl-wrap"><table><thead><tr><th>Type</th><th>Date</th><th>Status</th><th>Document</th></tr></thead><tbody>'
        + myReqs.map(r => {
            const bc = r.status==='Pending'?'ba':r.status==='Processing'?'bb':r.status==='Ready'?'bg':'bgold';
            const docBtn = r.documentUrl
              ? '<a href="' + r.documentUrl + '" target="_blank" class="btn btn-green" style="padding:2px 7px;font-size:10.5px;text-decoration:none">Download</a>'
              : r.documentBase64
                ? '<button class="btn btn-green" style="padding:2px 7px;font-size:10.5px" onclick="downloadDocBase64(\'' + r.id + '\')">Download</button>'
                : '<span style="color:var(--tx3);font-size:10.5px">—</span>';
            return '<tr><td style="font-size:12px">' + r.type + '</td><td style="font-size:11px">' + (r.date||'') + '</td><td><span class="badge ' + bc + '">' + r.status + '</span></td><td>' + docBtn + '</td></tr>';
          }).join('')
        + '</tbody></table></div>',
    '</div>',
    '</div>',

    '</div>'
  ].join('');

  // Store reqs for downloadDocBase64
  window._reqs = allReqs;
}

function filterStu() {
  const arr = window._stuArr || [];
  const fset = window._fset || new Set();
  const q = (document.getElementById('stuQ') || {}).value.toLowerCase();
  const br = (document.getElementById('stuBr') || {}).value;
  const fee = (document.getElementById('stuFee') || {}).value;
  const res = arr.filter(s => {
    if (q && !s.name.toLowerCase().includes(q) && !(s.usn || '').toLowerCase().includes(q) && !s.id.toLowerCase().includes(q)) return false;
    if (br && s.branch !== br) return false;
    if (fee && s.feeStatus !== fee) return false;
    return true;
  }).slice(0, 100);
  const b = document.getElementById('stuBody'); if (b) b.innerHTML = renderStuRows(res, fset);
  const m = document.getElementById('stuMeta'); if (m) m.textContent = 'Showing ' + res.length + ' results';
}

async function adminTeachers() {
  const tchs = await getTeachers();
  const faces = await getFaces();
  const fset = new Set(faces.map(f => f.personId));
  window._tchArr = tchs; window._fsetT = fset;

  mc().innerHTML = [
    hdr('Faculty Records', tchs.length + ' faculty members',
      mkbtn('gold', IC.plus + ' Add Faculty', 'showAddTeacherForm()')),
    '<div id="addTchForm" style="display:none"></div>',
    '<div class="srow"><input class="si" id="tchQ" placeholder="Search faculty..." oninput="filterTch()"><select class="ss" id="tchBr" onchange="filterTch()"><option value="">All Branches</option>' + BR.map(b => '<option>' + b + '</option>').join('') + '</select></div>',
    '<div class="card" style="padding:0;overflow:hidden"><div class="tbl-wrap"><table>',
    '<thead><tr><th>ID</th><th>Name</th><th>Branch</th><th>Designation</th><th>Subject</th><th>Exp.</th><th>Biometric</th><th>Actions</th></tr></thead>',
    '<tbody id="tchBody">' + renderTchRows(tchs, fset) + '</tbody></table></div></div>'
  ].join('');
}

function showAddTeacherForm() {
  const f = document.getElementById('addTchForm');
  if (!f) return;
  f.style.display = 'block';
  f.innerHTML = [
    '<div class="card" style="border:1px solid var(--gold);margin-bottom:14px">',
    '<div class="card-hd"><span class="card-title">Add New Faculty Member</span><button class="btn btn-sec" style="padding:4px 10px;font-size:11px" onclick="cancelAddTch()">Cancel</button></div>',
    '<div style="display:grid;grid-template-columns:1fr 340px;gap:18px;align-items:start">',

    // ── Left: form fields ──
    '<div>',
    '<div class="form-2">',
    '<div class="fg"><label>Full Name *</label><input class="fgi" id="nt_name" placeholder="e.g. Dr. Arun Kumar"></div>',
    '<div class="fg"><label>Branch *</label><select class="fgs" id="nt_branch"><option value="">Select Branch</option>' + BR.map(b => '<option>' + b + '</option>').join('') + '</select></div>',
    '<div class="fg"><label>Designation</label><select class="fgs" id="nt_desig"><option>Assistant Professor</option><option>Associate Professor</option><option>Professor</option><option>Senior Professor</option></select></div>',
    '<div class="fg"><label>Qualification</label><select class="fgs" id="nt_qual"><option>M.Tech</option><option>PhD</option><option>ME</option><option>M.Sc</option><option>MBA</option></select></div>',
    '<div class="fg"><label>Subject</label><input class="fgi" id="nt_subject" placeholder="e.g. Data Structures"></div>',
    '<div class="fg"><label>Experience (years)</label><input class="fgi" id="nt_exp" type="number" min="0" placeholder="5"></div>',
    '<div class="fg"><label>Phone</label><input class="fgi" id="nt_phone" placeholder="9xxxxxxxxx"></div>',
    '<div class="fg"><label>Email (blank = auto)</label><input class="fgi" id="nt_email" placeholder="auto-generated"></div>',
    '</div>',
    '<div class="fg" style="margin-top:4px"><label>Password (for portal login)</label><input class="fgi" id="nt_pwd" type="password" placeholder="Min 6 characters" value="teach123"></div>',
    '<div style="display:flex;gap:8px;margin-top:10px">',
    mkbtn('gold', IC.check + ' Save Faculty & Register Face', 'saveNewTeacher()'),
    '</div></div>',

    // ── Right: face capture ──
    '<div>',
    '<div style="font-size:10px;color:var(--tx2);font-weight:600;letter-spacing:.6px;text-transform:uppercase;margin-bottom:6px;">Biometric Face Capture <span style="color:var(--tx3);font-weight:400">(optional)</span></div>',
    '<div style="position:relative;background:#000;border-radius:6px;overflow:hidden;border:1.5px solid var(--bd2);aspect-ratio:4/3;">',
    '<video id="nt_video" autoplay muted playsinline style="width:100%;height:100%;object-fit:cover;display:block;"></video>',
    '<canvas id="nt_canvas" style="display:none;width:100%;height:100%;object-fit:cover;"></canvas>',
    '<div class="cc tl"></div><div class="cc tr"></div><div class="cc bl"></div><div class="cc br"></div>',
    '<div class="cam-sl"></div>',
    '</div>',
    '<div id="nt_cam_status" class="cam-st scanning" style="margin-top:6px;font-size:11px;">Starting camera...</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;">',
    '<button class="btn btn-blue" style="justify-content:center" id="nt_snap_btn" onclick="snapTeacherFace()">' + IC.camera + ' Capture Face</button>',
    '<button class="btn btn-sec" style="justify-content:center;display:none" id="nt_retake_btn" onclick="retakeTeacherFace()">' + IC.retake + ' Retake</button>',
    '</div>',
    '<div id="nt_face_preview" style="display:none;margin-top:8px;padding:8px;background:var(--gnd);border-radius:5px;font-size:11px;color:var(--green)">' + IC.check + ' Face captured — will be saved with faculty</div>',
    '</div>',

    '</div></div>'
  ].join('');

  document.getElementById('nt_name').focus();
  window._ntFaceData = null;
  startInlineCam('nt_video', 'nt_cam_status');
}

function cancelAddTch() {
  stopInlineCam('nt_video');
  document.getElementById('addTchForm').style.display = 'none';
}

async function snapTeacherFace() {
  const statusEl = document.getElementById('nt_cam_status');
  const snapBtn  = document.getElementById('nt_snap_btn');
  if (snapBtn)   snapBtn.disabled = true;
  if (statusEl) { statusEl.textContent = 'Loading AI models (first time ~10s)...'; statusEl.className = 'cam-st scanning'; }

  const modelOk = await loadFaceApi();
  if (!modelOk) {
    if (statusEl) { statusEl.textContent = 'AI models failed to load — check internet. Face saved without recognition.'; statusEl.className = 'cam-st error'; }
    if (snapBtn) snapBtn.disabled = false;
    return;
  }

  if (statusEl) { statusEl.textContent = 'Detecting face...'; statusEl.className = 'cam-st scanning'; }
  const result = await _snapFaceInline('nt_video', 'nt_canvas');
  if (!result) { if (snapBtn) snapBtn.disabled = false; return; }

  if (!result.descriptor) {
    if (statusEl) { statusEl.textContent = 'No face detected — ensure face is clearly visible, well-lit, and centred, then try again'; statusEl.className = 'cam-st error'; }
    if (snapBtn) snapBtn.disabled = false;
    return;
  }

  window._ntFaceData = result;
  const video  = document.getElementById('nt_video');
  const canvas = document.getElementById('nt_canvas');
  if (video)  video.style.display  = 'none';
  if (canvas) canvas.style.display = 'block';
  if (snapBtn) snapBtn.style.display = 'none';
  const retBtn = document.getElementById('nt_retake_btn');
  if (retBtn) retBtn.style.display = '';
  const prev = document.getElementById('nt_face_preview');
  if (prev) prev.style.display = 'block';
  if (statusEl) { statusEl.textContent = '✓ Face captured with 128-D descriptor — face login will work for this faculty'; statusEl.className = 'cam-st success'; }
  stopInlineCam('nt_video');
}

function retakeTeacherFace() {
  window._ntFaceData = null;
  const video = document.getElementById('nt_video');
  const canvas = document.getElementById('nt_canvas');
  if (video) video.style.display = 'block';
  if (canvas) canvas.style.display = 'none';
  document.getElementById('nt_snap_btn').style.display = '';
  document.getElementById('nt_retake_btn').style.display = 'none';
  const prev = document.getElementById('nt_face_preview');
  if (prev) prev.style.display = 'none';
  const st = document.getElementById('nt_cam_status');
  if (st) { st.textContent = 'Starting camera...'; st.className = 'cam-st scanning'; }
  startInlineCam('nt_video', 'nt_cam_status');
}

async function saveNewTeacher() {
  const name   = (document.getElementById('nt_name')   || {}).value.trim();
  const branch = (document.getElementById('nt_branch') || {}).value;
  const pwd    = (document.getElementById('nt_pwd')    || {}).value.trim() || 'teach123';
  if (!name || !branch) { showToast('Name and Branch are required', 'error'); return; }
  if (pwd.length < 6)   { showToast('Password must be at least 6 characters', 'error'); return; }

  const tchs   = window._tchArr || await getTeachers();
  const newNum = tchs.length + 1;
  const id     = 'T' + String(newNum).padStart(3, '0');
  const subs   = SUBJ[branch] || ['General'];
  const email  = (document.getElementById('nt_email') || {}).value.trim() || id.toLowerCase() + '@campusasthra.edu.in';

  const doc = {
    id, name, branch, role: 'teacher',
    department:    branch + ' Department',
    designation:   (document.getElementById('nt_desig')   || {}).value || 'Assistant Professor',
    qualification: (document.getElementById('nt_qual')    || {}).value || 'M.Tech',
    subject:       (document.getElementById('nt_subject') || {}).value || subs[0],
    experience:    parseInt((document.getElementById('nt_exp')   || {}).value) || 1,
    phone:         (document.getElementById('nt_phone')   || {}).value || '',
    email, faceId: null,
    classesThisMonth: 15, studentsCount: 40,
    joinYear: new Date().getFullYear()
  };

  const saveBtn = document.querySelector('[onclick="saveNewTeacher()"]');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving...'; }

  try {
    if (fbMode === 'firebase') {
      // 1. Create Firebase Auth account using secondary app (admin session untouched)
      if (saveBtn) saveBtn.textContent = 'Creating account...';
      const authResult = await createAuthAccount(email, pwd);
      if (!authResult.ok) {
        showToast('Auth creation failed: ' + authResult.error, 'error');
        if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = IC.check + ' Save Faculty & Register Face'; }
        return;
      }

      // 2. Save teacher doc to Firestore (admin session still active)
      if (saveBtn) saveBtn.textContent = 'Saving to Firebase...';
      await dbSet('teachers', id, doc);

      // 3. Save face if captured — _ntFaceData is {imageData, descriptor}
      if (window._ntFaceData) {
        const faceKey  = 'teacher_' + id;
        const fd = window._ntFaceData;
        const faceData = {
          id: faceKey, personId: id, personName: name,
          type: 'teacher', branch,
          imageData:  fd.imageData  || null,
          descriptor: fd.descriptor || null,
          registeredAt: new Date().toISOString(),
          registeredBy: currentUser ? currentUser.id : 'ADMIN'
        };
        await dbSet('faces', faceKey, faceData);
        doc.faceId = faceKey;
      }

    } else {
      DEMO.teachers[id] = doc;
      if (window._ntFaceData) {
        const faceKey = 'teacher_' + id;
        const fd = window._ntFaceData;
        DEMO.faces[faceKey] = {
          id: faceKey, personId: id, personName: name,
          type: 'teacher', branch,
          imageData:  fd.imageData  || null,
          descriptor: fd.descriptor || null,
          registeredAt: new Date().toISOString(),
          registeredBy: 'ADMIN'
        };
        DEMO.teachers[id].faceId = faceKey;
      }
    }

    stopInlineCam('nt_video');
    showToast('Faculty added: ' + name + ' (' + id + ')' + (window._ntFaceData ? ' + face registered' : ''), 'success');
    window._ntFaceData = null;
    document.getElementById('addTchForm').style.display = 'none';
    navigateTo('adminTeachers');
  } catch (e) {
    showToast('Error: ' + e.message, 'error');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = IC.check + ' Save Faculty & Register Face'; }
  }
}

async function deleteTeacher(id) {
  if (!confirm('Delete faculty member ' + id + '? This cannot be undone.')) return;
  try {
    if (fbMode === 'firebase') await dbDel('teachers', id);
    else delete DEMO.teachers[id];
    showToast('Faculty ' + id + ' deleted', 'info');
    navigateTo('adminTeachers');
  } catch (e) { showToast('Error: ' + e.message, 'error'); }
}

function editTeacher(id) {
  const tchs = window._tchArr || Object.values(DEMO.teachers);
  const t = tchs.find(x => x.id === id) || DEMO.teachers[id];
  if (!t) { showToast('Faculty not found', 'error'); return; }

  const f = document.getElementById('addTchForm');
  if (!f) return;
  f.style.display = 'block';
  f.innerHTML = [
    '<div class="card" style="border:1px solid var(--blue2);margin-bottom:14px">',
    '<div class="card-hd"><span class="card-title">Edit Faculty — ' + t.id + '</span>',
    '<button class="btn btn-sec" style="padding:4px 10px;font-size:11px" onclick="cancelAddTch()">Cancel</button></div>',
    '<div class="form-2">',
    '<div class="fg"><label>Full Name *</label><input class="fgi" id="et_name" value="' + t.name + '"></div>',
    '<div class="fg"><label>Branch</label><select class="fgs" id="et_branch">' + BR.map(b => '<option' + (b===t.branch?' selected':'') + '>' + b + '</option>').join('') + '</select></div>',
    '<div class="fg"><label>Designation</label><select class="fgs" id="et_desig"><option' + (t.designation==='Assistant Professor'?' selected':'') + '>Assistant Professor</option><option' + (t.designation==='Associate Professor'?' selected':'') + '>Associate Professor</option><option' + (t.designation==='Professor'?' selected':'') + '>Professor</option><option' + (t.designation==='Senior Professor'?' selected':'') + '>Senior Professor</option></select></div>',
    '<div class="fg"><label>Qualification</label><select class="fgs" id="et_qual"><option' + (t.qualification==='M.Tech'?' selected':'') + '>M.Tech</option><option' + (t.qualification==='PhD'?' selected':'') + '>PhD</option><option' + (t.qualification==='ME'?' selected':'') + '>ME</option><option' + (t.qualification==='M.Sc'?' selected':'') + '>M.Sc</option><option' + (t.qualification==='MBA'?' selected':'') + '>MBA</option></select></div>',
    '<div class="fg"><label>Subject</label><input class="fgi" id="et_subject" value="' + (t.subject||'') + '"></div>',
    '<div class="fg"><label>Experience (years)</label><input class="fgi" id="et_exp" type="number" min="0" value="' + (t.experience||0) + '"></div>',
    '<div class="fg"><label>Phone</label><input class="fgi" id="et_phone" value="' + (t.phone||'') + '"></div>',
    '<div class="fg"><label>Email</label><input class="fgi" id="et_email" value="' + (t.email||'') + '"></div>',
    '</div>',
    '<div style="display:flex;gap:8px;margin-top:10px">',
    mkbtn('blue', IC.check + ' Save Changes', 'saveEditTeacher(\'' + id + '\')'),
    '</div></div>'
  ].join('');
  f.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function saveEditTeacher(id) {
  const name    = (document.getElementById('et_name')    || {}).value.trim();
  const branch  = (document.getElementById('et_branch')  || {}).value;
  const desig   = (document.getElementById('et_desig')   || {}).value;
  const qual    = (document.getElementById('et_qual')    || {}).value;
  const subject = (document.getElementById('et_subject') || {}).value.trim();
  const exp     = parseInt((document.getElementById('et_exp') || {}).value) || 0;
  const phone   = (document.getElementById('et_phone')   || {}).value.trim();
  const email   = (document.getElementById('et_email')   || {}).value.trim();
  if (!name) { showToast('Name is required', 'error'); return; }

  const updates = { name, branch, designation: desig, qualification: qual, subject, experience: exp, phone, email, department: branch + ' Department' };
  try {
    if (fbMode === 'firebase') await dbSet('teachers', id, updates);
    else if (DEMO.teachers[id]) Object.assign(DEMO.teachers[id], updates);
    showToast('Faculty updated: ' + name, 'success');
    cancelAddTch();
    navigateTo('adminTeachers');
  } catch (e) { showToast('Update failed: ' + e.message, 'error'); }
}

function renderTchRows(arr, fset) {
  return arr.map(t => {
    const enrolled = fset.has(t.id) || t.faceId;
    return '<tr>'
      + '<td style="font-family:var(--fm)">' + t.id + '</td>'
      + '<td><strong>' + t.name + '</strong><br><span style="font-size:10px;color:var(--tx3)">' + (t.qualification || '') + '</span></td>'
      + '<td><span class="badge bgold">' + t.branch + '</span></td>'
      + '<td style="font-size:11.5px">' + (t.designation || '—') + '</td>'
      + '<td style="font-size:11.5px;color:var(--tx2)">' + (t.subject || '—') + '</td>'
      + '<td>' + (t.experience || 0) + 'y</td>'
      + '<td><span class="badge ' + (enrolled ? 'bg' : 'br') + '">' + (enrolled ? IC.check + ' Enrolled' : 'Not Enrolled') + '</span></td>'
      + '<td style="display:flex;gap:4px">'
      + '<button class="btn btn-blue" style="padding:3px 8px;font-size:11px" onclick="editTeacher(\'' + t.id + '\')" title="Edit faculty">' + IC.docs + '</button>'
      + '<button class="btn btn-gold" style="padding:3px 8px;font-size:11px" onclick="quickFaceReg(\'' + t.id + '\',\'teacher\')" title="Register face">' + IC.face + '</button>'
      + '<button class="btn btn-red"  style="padding:3px 8px;font-size:11px" onclick="deleteTeacher(\'' + t.id + '\')" title="Delete faculty">' + IC.trash + '</button>'
      + '</td>'
      + '</tr>';
  }).join('');
}

function filterTch() {
  const arr = window._tchArr || [];
  const fset = window._fsetT || new Set();
  const q = (document.getElementById('tchQ') || {}).value.toLowerCase();
  const br = (document.getElementById('tchBr') || {}).value;
  const res = arr.filter(t => {
    if (q && !t.name.toLowerCase().includes(q) && !t.id.toLowerCase().includes(q)) return false;
    if (br && t.branch !== br) return false;
    return true;
  });
  const b = document.getElementById('tchBody'); if (b) b.innerHTML = renderTchRows(res, fset);
}

async function adminAttendance() {
  const stus  = await getStudents();
  const avg   = stus.length ? Math.round(stus.reduce((a, s) => a + (s.attendance || 75), 0) / stus.length) : 0;
  const below = stus.filter(s => (s.attendance || 75) < 75).length;

  mc().innerHTML = [
    hdr('Attendance Management', 'Campus-wide overview',
      mkbtn('gold', IC.students + ' View All Students', 'showAttStudents()')),
    '<div class="stat-grid">',
    scard('sc-green', 'Campus Average', avg + '%', ''),
    scard('sc-red',   'Below 75%',      below,      'Detention risk'),
    scard('sc-gold',  'Above 95%',      stus.filter(s => (s.attendance||75) >= 95).length, 'Excellent'),
    scard('sc-blue',  'Total Students', stus.length, ''),
    '</div>',

    // Branch-wise
    '<div class="card"><div class="card-hd"><span class="card-title">Branch-wise Report</span></div>',
    '<div class="tbl-wrap"><table><thead><tr><th>Branch</th><th>Students</th><th>Average</th><th>Below 75%</th><th>Above 90%</th><th>Status</th></tr></thead><tbody>',
    BR.map(b => {
      const bs  = stus.filter(s => s.branch === b);
      const av  = bs.length ? Math.round(bs.reduce((a,s) => a + (s.attendance||75), 0) / bs.length) : 0;
      const bel = bs.filter(s => (s.attendance||75) < 75).length;
      const hi  = bs.filter(s => (s.attendance||75) >= 90).length;
      return '<tr>'
        + '<td><strong>' + b + '</strong></td>'
        + '<td>' + bs.length + '</td>'
        + '<td><div style="display:flex;align-items:center;gap:7px"><div class="pw" style="width:65px"><div class="pb ' + (av>=75?'pb-green':'pb-red') + '" style="width:' + av + '%"></div></div><span style="color:' + (av>=75?'var(--green)':'var(--red)') + ';font-weight:600">' + av + '%</span></div></td>'
        + '<td><span style="color:var(--red);font-weight:600">' + bel + '</span></td>'
        + '<td><span style="color:var(--green)">' + hi + '</span></td>'
        + '<td><span class="badge ' + (av>=80?'bg':av>=75?'ba':'br') + '">' + (av>=80?'Good':av>=75?'Caution':'Critical') + '</span></td>'
        + '</tr>';
    }).join(''),
    '</tbody></table></div></div>',

    // Students below 75%
    '<div class="card"><div class="card-hd"><span class="card-title">Detention Risk — Below 75%</span>'
    + '<span class="badge br">' + below + ' students</span></div>',
    below === 0
      ? '<div style="color:var(--green);font-size:12px;padding:10px">' + IC.check + ' All students above minimum attendance</div>'
      : '<div class="srow"><input class="si" id="attQ" placeholder="Search name, branch..." oninput="filterAttStudents()" style="max-width:300px"></div>'
        + '<div class="tbl-wrap"><table><thead><tr><th>USN</th><th>Name</th><th>Branch</th><th>Sem</th><th>Attendance</th><th>Shortfall</th></tr></thead>'
        + '<tbody id="attDetBody">'
        + stus.filter(s => (s.attendance||75) < 75).sort((a,b) => (a.attendance||75)-(b.attendance||75)).slice(0,50).map(s => {
            const att = s.attendance || 75;
            const short = 75 - att;
            return '<tr><td style="font-family:var(--fm);font-size:10.5px">' + (s.usn||s.id) + '</td>'
              + '<td><strong>' + s.name + '</strong></td>'
              + '<td><span class="badge bb">' + s.branch + '</span></td>'
              + '<td>Sem ' + s.semester + '</td>'
              + '<td><span style="color:var(--red);font-weight:600">' + att + '%</span></td>'
              + '<td><span style="color:var(--amber);font-size:11px">Need +' + short + '%</span></td>'
              + '</tr>';
          }).join('')
        + '</tbody></table></div>',
    '</div>'
  ].join('');

  // Store students for filter
  window._attStus = stus;
}

function filterAttStudents() {
  const q    = (document.getElementById('attQ') || {}).value.toLowerCase();
  const stus = (window._attStus || []).filter(s => (s.attendance||75) < 75);
  const res  = stus.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.branch.toLowerCase().includes(q) ||
    (s.usn || s.id).toLowerCase().includes(q)
  ).slice(0, 50);
  const body = document.getElementById('attDetBody');
  if (!body) return;
  body.innerHTML = res.map(s => {
    const att = s.attendance || 75;
    return '<tr><td style="font-family:var(--fm);font-size:10.5px">' + (s.usn||s.id) + '</td>'
      + '<td><strong>' + s.name + '</strong></td>'
      + '<td><span class="badge bb">' + s.branch + '</span></td>'
      + '<td>Sem ' + s.semester + '</td>'
      + '<td><span style="color:var(--red);font-weight:600">' + att + '%</span></td>'
      + '<td><span style="color:var(--amber);font-size:11px">Need +' + (75-att) + '%</span></td>'
      + '</tr>';
  }).join('');
}

function showAttStudents() {
  const stus = window._attStus || [];
  const el   = document.getElementById('mc');
  if (!el) return;
  const sorted = [...stus].sort((a,b) => (a.attendance||75) - (b.attendance||75));
  el.innerHTML = [
    hdr('All Students — Attendance', sorted.length + ' students',
      mkbtn('sec', '← Back', 'navigateTo(\'adminAttendance\')')),
    '<div class="srow">',
    '<input class="si" id="allAttQ" placeholder="Search name, USN, branch..." oninput="filterAllAtt()">',
    '<select class="ss" id="allAttBr" onchange="filterAllAtt()"><option value="">All Branches</option>' + BR.map(b => '<option>' + b + '</option>').join('') + '</select>',
    '<select class="ss" id="allAttFilter" onchange="filterAllAtt()"><option value="">All</option><option value="low">Below 75%</option><option value="ok">75%–90%</option><option value="hi">Above 90%</option></select>',
    '</div>',
    '<div class="card" style="padding:0;overflow:hidden"><div class="tbl-wrap"><table>',
    '<thead><tr><th>USN</th><th>Name</th><th>Branch</th><th>Sem</th><th>Attendance</th><th>Status</th></tr></thead>',
    '<tbody id="allAttBody">' + renderAllAtt(sorted) + '</tbody>',
    '</table></div></div>'
  ].join('');
  window._allAttStus = sorted;
}

function renderAllAtt(arr) {
  return arr.slice(0, 100).map(s => {
    const att = s.attendance || 75;
    return '<tr><td style="font-family:var(--fm);font-size:10.5px">' + (s.usn||s.id) + '</td>'
      + '<td><strong>' + s.name + '</strong></td>'
      + '<td><span class="badge bb">' + s.branch + '</span></td>'
      + '<td>Sem ' + s.semester + '</td>'
      + '<td><div style="display:flex;align-items:center;gap:7px"><div class="pw" style="width:55px"><div class="pb ' + (att>=75?'pb-green':'pb-red') + '" style="width:' + att + '%"></div></div><span style="color:' + (att>=75?'var(--green)':'var(--red)') + ';font-weight:600">' + att + '%</span></div></td>'
      + '<td><span class="badge ' + (att>=90?'bg':att>=75?'ba':'br') + '">' + (att>=90?'Excellent':att>=75?'OK':'Detained') + '</span></td>'
      + '</tr>';
  }).join('');
}

function filterAllAtt() {
  const q   = (document.getElementById('allAttQ')     || {}).value.toLowerCase();
  const br  = (document.getElementById('allAttBr')    || {}).value;
  const fil = (document.getElementById('allAttFilter')|| {}).value;
  let arr   = window._allAttStus || [];
  if (q)   arr = arr.filter(s => s.name.toLowerCase().includes(q) || (s.usn||'').toLowerCase().includes(q));
  if (br)  arr = arr.filter(s => s.branch === br);
  if (fil === 'low') arr = arr.filter(s => (s.attendance||75) < 75);
  else if (fil === 'ok')  arr = arr.filter(s => (s.attendance||75) >= 75 && (s.attendance||75) <= 90);
  else if (fil === 'hi')  arr = arr.filter(s => (s.attendance||75) > 90);
  const b = document.getElementById('allAttBody');
  if (b) b.innerHTML = renderAllAtt(arr);
}

async function adminFaceReg() {
  const faces = await getFaces();
  regPool = [];

  mc().innerHTML = [
    hdr('Biometric Face Registration', 'Face images stored in ' + (fbMode === 'firebase' ? 'Firebase Firestore' : 'Demo DB')),
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">',
    '<div class="card">',
    '<div class="card-hd"><span class="card-title">Register New Face</span></div>',
    '<div class="fg"><label>Person Type</label><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">',
    '<button class="btn btn-gold" id="regBtnS" onclick="setRegType(\'student\')" style="justify-content:center">' + IC.students + ' Student</button>',
    '<button class="btn btn-sec"  id="regBtnT" onclick="setRegType(\'teacher\')" style="justify-content:center">' + IC.teachers + ' Faculty</button>',
    '<button class="btn btn-sec"  id="regBtnA" onclick="setRegType(\'admin\')"   style="justify-content:center">' + IC.shield + ' Admin</button>',
    '</div></div>',
    '<div class="fg"><label>Search Person</label><input class="fgi" id="faceQ" placeholder="Search name or ID..." oninput="searchFaceReg()"></div>',
    '<div id="faceResults" style="max-height:320px;overflow-y:auto"></div></div>',
    '<div class="card">',
    '<div class="card-hd"><span class="card-title">Enrolled Biometrics</span><span class="badge bg">' + IC.firebase + ' ' + faces.length + ' Records</span></div>',
    '<div style="max-height:420px;overflow-y:auto">',
    faces.length === 0
      ? '<div style="color:var(--tx3);font-size:12px;padding:20px;text-align:center">No biometric records yet</div>'
      : faces.map(f => '<div class="fl-item"><div class="fl-av">' + (f.imageData ? '<img src="' + f.imageData + '" alt="">' : (f.personId || '?')[0]) + '</div><div style="flex:1"><div class="fl-name">' + (f.personName || f.personId) + '</div><div class="fl-id">' + f.personId + ' · ' + f.type + '</div><div style="font-size:9.5px;margin-top:2px">' + (f.descriptor && Array.isArray(f.descriptor) && f.descriptor.length === 128 ? '<span style="color:var(--green)">✓ Descriptor ready (' + f.descriptor.length + '-D) — face login works</span>' : '<span style="color:var(--red)">✗ No descriptor — re-register this face for login to work</span>') + '</div></div><button class="btn btn-red" style="padding:3px 7px" onclick="delFace(\'' + f.id + '\')">' + IC.trash + '</button></div>').join(''),
    '</div></div></div>',
    '<div class="card"><div class="card-hd"><span class="card-title">Statistics</span></div>',
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">',
    ['student', 'teacher', 'admin', 'total'].map(t => {
      const c = t === 'total' ? faces.length : faces.filter(f => f.type === t).length;
      return '<div style="background:var(--sf2);padding:13px;border-radius:5px"><div style="font-size:9.5px;color:var(--tx3);letter-spacing:.6px;margin-bottom:6px">' + t.toUpperCase() + '</div><div style="font-family:var(--fd);font-size:22px;font-weight:700;margin-bottom:5px">' + c + '</div><div class="pw"><div class="pb pb-gold" style="width:' + Math.min(100, c * 5) + '%"></div></div></div>';
    }).join(''),
    '</div></div>'
  ].join('');

  window._regType = 'student';
  searchFaceReg();
}

async function setRegType(t) {
  window._regType = t;
  ['S', 'T', 'A'].forEach(x => {
    const el = document.getElementById('regBtn' + x);
    if (el) el.className = 'btn ' + ({ 'S': 'student', 'T': 'teacher', 'A': 'admin' }[x] === t ? 'btn-gold' : 'btn-sec');
  });
  searchFaceReg();
}

async function searchFaceReg() {
  const t = window._regType || 'student';
  const q = ((document.getElementById('faceQ') || {}).value || '').toLowerCase();
  let pool = [];
  if (t === 'admin') pool = [DEMO.admin];
  else if (t === 'teacher') pool = await getTeachers();
  else pool = await getStudents();
  regPool = pool;

  const faces = await getFaces();
  const fmap = {};
  faces.forEach(f => { fmap[f.personId] = f; });

  const res = pool.filter(p => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q)).slice(0, 10);
  const h = res.map(p => {
    const face = fmap[p.id];
    return '<div class="fl-item" style="cursor:pointer" onclick="openFaceRegFor(\'' + p.id + '\',\'' + t + '\')">'
      + '<div class="fl-av" style="background:' + (face ? 'var(--gnd)' : 'var(--sf3)') + ';color:' + (face ? 'var(--green)' : 'var(--tx2)') + ';">'
      + (face && face.imageData ? '<img src="' + face.imageData + '" alt="">' : p.name[0]) + '</div>'
      + '<div style="flex:1"><div class="fl-name">' + p.name + '</div><div class="fl-id">' + p.id + ' · ' + p.branch + '</div></div>'
      + '<span class="badge ' + (face ? 'bg' : 'ba') + '">' + (face ? IC.check + ' Enrolled' : 'Register') + '</span>'
      + '</div>';
  }).join('');

  const el = document.getElementById('faceResults');
  if (el) el.innerHTML = h || '<div style="color:var(--tx3);font-size:12px;padding:12px">No results</div>';
}

async function delFace(key) {
  if (!confirm('Delete this biometric record?')) return;
  if (fbMode === 'firebase') await dbDel('faces', key);
  else delete DEMO.faces[key];
  showToast('Biometric record deleted', 'info');
  navigateTo('adminFaceReg');
}

function openFaceRegFor(id, type) {
  regTargetId = id; regTargetType = type;
  const p = regPool.find(x => x.id === id);
  document.getElementById('frmSub').textContent = 'Registering: ' + (p ? p.name : id) + ' (' + id + ') — ' + type;
  document.getElementById('frmStatus').textContent = 'Starting camera...';
  document.getElementById('frmStatus').className = 'cam-st scanning';
  document.getElementById('frmBtn').disabled = false;
  document.getElementById('faceRegModal').classList.add('open');
  // Stop any existing reg stream before starting new one
  if (regCamStream) { regCamStream.getTracks().forEach(t => t.stop()); regCamStream = null; }
  startCam('frmVideo', s => {
    regCamStream = s;
    if (s) {
      document.getElementById('frmStatus').textContent = 'Camera ready — position face and click Capture';
      document.getElementById('frmStatus').className = 'cam-st scanning';
    }
  });
}

function closeFaceRegModal() {
  document.getElementById('faceRegModal').classList.remove('open');
  if (regCamStream) { regCamStream.getTracks().forEach(t => t.stop()); regCamStream = null; }
  const v = document.getElementById('frmVideo'); if (v) v.srcObject = null;
}

async function captureAndSaveFace() {
  const video  = document.getElementById('frmVideo');
  const canvas = document.getElementById('frmCanvas');
  const btn    = document.getElementById('frmBtn');
  const stat   = document.getElementById('frmStatus');

  if (!video || video.readyState < 2 || !video.videoWidth) {
    showToast('No camera feed — please wait for camera to start', 'error'); return;
  }

  btn.disabled = true;
  stat.textContent = 'Loading face AI models (first time ~10s)...';
  stat.className = 'cam-st scanning';

  // Preload models so user sees progress
  const modelOk = await loadFaceApi();
  if (!modelOk) {
    stat.textContent = 'AI models failed to load: ' + (_faceApiError || 'unknown error') + '. Check internet and try again.';
    stat.className = 'cam-st error';
    btn.disabled = false;
    return;
  }

  stat.textContent = 'Capturing and detecting face...';

  const result = await _captureAndDescribe(video, canvas);

  if (!result) {
    stat.textContent = 'Capture failed — camera not ready';
    stat.className = 'cam-st error';
    btn.disabled = false;
    return;
  }

  if (!result.descriptor) {
    stat.textContent = 'No face detected in frame — ensure face is clearly visible, well-lit, and looking forward, then try again';
    stat.className = 'cam-st error';
    btn.disabled = false;
    return;
  }

  stat.textContent = 'Face detected ✓ — saving to ' + (fbMode === 'firebase' ? 'Firebase...' : 'Demo...');

  try {
    const person  = regPool.find(x => x.id === regTargetId);
    const faceKey = regTargetType + '_' + regTargetId;
    const faceData = {
      id:           faceKey,
      personId:     regTargetId,
      personName:   person ? person.name : regTargetId,
      type:         regTargetType,
      branch:       person ? (person.branch || '') : '',
      imageData:    result.imageData,
      descriptor:   result.descriptor,   // 128-element number array
      registeredAt: new Date().toISOString(),
      registeredBy: currentUser ? currentUser.id : 'ADMIN'
    };

    if (fbMode === 'firebase') {
      await dbSet('faces', faceKey, faceData);
      // Note: we intentionally don't write faceId back to students/teachers
      // The face record has personId which is sufficient for login matching
    } else {
      DEMO.faces[faceKey] = faceData;
      if (DEMO.students[regTargetId]) DEMO.students[regTargetId].faceId = faceKey;
      if (DEMO.teachers[regTargetId]) DEMO.teachers[regTargetId].faceId = faceKey;
    }

    stat.textContent = '✓ Face registered with 128-D descriptor — face login is now active for ' + (person ? person.name : regTargetId);
    stat.className = 'cam-st success';
    showToast('Face registered: ' + (person ? person.name : regTargetId), 'success');
    setTimeout(() => { closeFaceRegModal(); navigateTo('adminFaceReg'); }, 1600);
  } catch (e) {
    stat.textContent = 'Save error: ' + e.message;
    stat.className = 'cam-st error';
    btn.disabled = false;
    showToast('Save failed: ' + e.message, 'error');
  }
}

async function adminDocReq() {
  const reqs = await getDocReqs();
  window._reqs = reqs;

  mc().innerHTML = [
    hdr('Document Requests', reqs.length + ' requests',
      '<div style="display:flex;gap:6px">'
      + '<select class="ss" id="docFilterSel" onchange="filterDocReqs()" style="font-size:12px">'
      + '<option value="">All Status</option>'
      + ['Pending','Processing','Ready','Delivered','Closed'].map(s => '<option>' + s + '</option>').join('')
      + '</select>'
      + mkbtn('sec', 'Refresh', "navigateTo('adminDocReq')")
      + '</div>'),
    '<div class="stat-grid">',
    ['Pending','Processing','Ready','Delivered'].map((s,i) => scard(['sc-gold','sc-blue','sc-green','sc-gold'][i], s, reqs.filter(r=>r.status===s).length, '')).join(''),
    '</div>',
    '<div id="docUploadArea"></div>',
    '<div class="card" style="padding:0;overflow:hidden"><div class="tbl-wrap"><table>',
    '<thead><tr><th>ID</th><th>Student</th><th>Document</th><th>Reason</th><th>Date</th><th>Status</th><th>File</th><th>Actions</th></tr></thead>',
    '<tbody id="docBody">' + renderDocRows(reqs) + '</tbody></table></div></div>'
  ].join('');
}

function filterDocReqs() {
  const filter = (document.getElementById('docFilterSel')||{}).value;
  const reqs   = window._reqs || [];
  const res    = filter ? reqs.filter(r => r.status === filter) : reqs;
  const b = document.getElementById('docBody');
  if (b) b.innerHTML = renderDocRows(res);
}

function renderDocRows(reqs) {
  return reqs.map(d => {
    // Guard against missing fields
    d.type     = d.type     || 'Document';
    d.stuName  = d.stuName  || d.studentName || '—';
    d.stuId    = d.stuId    || d.studentId   || '—';
    d.reason   = d.reason   || '—';
    d.date     = d.date     || '—';
    d.status   = d.status   || 'Pending';
    let actionBtns = '';
    if (d.status === 'Pending') {
      actionBtns = mkbtn('blue', 'Process', "advDoc('" + d.id + "','Processing')");
    } else if (d.status === 'Processing') {
      actionBtns = '<div style="display:flex;gap:4px">'
        + mkbtn('green', 'Mark Ready', "advDoc('" + d.id + "','Ready')")
        + '<button class="btn btn-gold" style="padding:3px 8px;font-size:11px" onclick="showUploadDoc(\'' + d.id + '\',\'' + d.type.replace(/['"]/g,'') + '\')">' + IC.docs + ' Upload</button>'
        + '</div>';
    } else if (d.status === 'Ready') {
      actionBtns = '<div style="display:flex;gap:4px">'
        + mkbtn('gold', 'Delivered', "advDoc('" + d.id + "','Delivered')")
        + '</div>';
    } else if (d.status === 'Delivered') {
      actionBtns = mkbtn('sec', 'Close', "closeDocReq('" + d.id + "')");
    } else if (d.status === 'Closed' || !d.stuName || d.stuName === '—') {
      actionBtns = '<span style="font-size:10.5px;color:var(--tx3)">Closed</span>'
        + ' <button class="btn btn-red" style="padding:2px 7px;font-size:10.5px" onclick="deleteDocReq(\'' + d.id + '\')">Delete</button>';
    } else {
      actionBtns = '<button class="btn btn-red" style="padding:2px 7px;font-size:10.5px" onclick="deleteDocReq(\'' + d.id + '\')">Delete</button>';
    }

    const docCol = d.documentUrl
      ? '<a href="' + d.documentUrl + '" target="_blank" style="color:var(--green);font-size:11px">' + IC.check + ' Download</a>'
      : d.documentBase64
        ? '<button class="btn btn-green" style="padding:3px 7px;font-size:10.5px" onclick="downloadDocBase64(\'' + d.id + '\')">' + IC.docs + ' Download</button>'
        : '<span style="font-size:10.5px;color:var(--tx3)">—</span>';

    const badgeCls = d.status==='Pending'?'ba':d.status==='Processing'?'bb':d.status==='Ready'?'bg':d.status==='Delivered'?'bgold':'br';

    return '<tr>'
      + '<td style="font-family:var(--fm);font-size:10px">' + d.id + '</td>'
      + '<td><strong>' + d.stuName + '</strong><br><span style="font-size:10px;color:var(--tx3)">' + d.stuId + '</span></td>'
      + '<td style="font-size:12px">' + d.type + '</td>'
      + '<td style="font-size:11px;color:var(--tx2);max-width:130px">' + d.reason + '</td>'
      + '<td style="font-size:11px;white-space:nowrap">' + d.date + '</td>'
      + '<td><span class="badge ' + badgeCls + '">' + d.status + '</span></td>'
      + '<td>' + docCol + '</td>'
      + '<td style="white-space:nowrap">' + actionBtns + '</td>'
      + '</tr>';
  }).join('');
}

function showUploadDoc(reqId, docTypeName) {
  window._uploadReqId = reqId;
  const area = document.getElementById('docUploadArea');
  if (!area) return;

  const card = document.createElement('div');
  card.className = 'card';
  card.style.cssText = 'border:1px solid var(--gold);margin-bottom:14px';
  card.innerHTML =
    '<div class="card-hd">'
    + '<span class="card-title">' + IC.docs + ' Upload Document for: ' + (docTypeName || 'Document') + '</span>'
    + '<button class="btn btn-sec" id="uploadCancelBtn" style="padding:4px 10px;font-size:11px">✕ Cancel</button>'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:12px">'

      // LEFT — drag & drop file upload
      + '<div>'
      + '<div class="fg"><label>Upload File (PDF, Image — max 4 MB)</label>'
      + '<div id="dropZone" style="border:2px dashed var(--bd2);border-radius:8px;padding:30px 16px;text-align:center;cursor:pointer;transition:all .2s;background:var(--bg2)">'
      + '<div style="font-size:36px;margin-bottom:8px">📄</div>'
      + '<div style="font-size:13px;color:var(--tx2);font-weight:500">Click to select file</div>'
      + '<div style="font-size:11px;color:var(--tx3);margin-top:4px">or drag &amp; drop here</div>'
      + '<div style="font-size:10.5px;color:var(--tx3);margin-top:6px">PDF · JPG · PNG · max 4 MB</div>'
      + '</div>'
      + '<input type="file" id="docFileInput" accept=".pdf,.jpg,.jpeg,.png" style="display:none">'
      + '</div>'
      + '<div id="uploadPreview" style="display:none;margin-top:8px;padding:10px 12px;background:var(--gnd);border-radius:5px;font-size:12px;color:var(--green);word-break:break-all"></div>'
      + '</div>'

      // RIGHT — URL or notes
      + '<div>'
      + '<div class="fg"><label>Or paste a public document URL</label>'
      + '<input class="fgi" id="docUrlInput" placeholder="https://drive.google.com/file/..." style="font-size:12px">'
      + '<div style="font-size:10.5px;color:var(--tx3);margin-top:4px">Google Drive, Dropbox, or any public link</div>'
      + '</div>'
      + '<div class="fg" style="margin-top:10px"><label>Message to Student (optional)</label>'
      + '<textarea class="fgt" id="docNotes" placeholder="e.g. Please collect original from admin office..." style="min-height:80px;font-size:12.5px"></textarea>'
      + '</div>'
      + '</div>'

    + '</div>'
    + '<div style="display:flex;gap:8px;margin-top:14px;border-top:1px solid var(--bd);padding-top:14px">'
    + '<button class="btn btn-gold" id="uploadSaveBtn" style="flex:1;justify-content:center;padding:10px">' + IC.check + ' Upload &amp; Mark Ready</button>'
    + '<button class="btn btn-green" id="uploadNoFileBtn" style="justify-content:center;padding:10px">✓ Mark Ready (collect in person)</button>'
    + '</div>';

  area.innerHTML = '';
  area.appendChild(card);

  // Wire events
  document.getElementById('uploadCancelBtn').onclick  = () => { area.innerHTML = ''; window._docBase64 = null; };
  document.getElementById('uploadSaveBtn').onclick    = () => saveDocUpload(window._uploadReqId);
  document.getElementById('uploadNoFileBtn').onclick  = () => {
    advDoc(window._uploadReqId, 'Ready');
    area.innerHTML = '';
  };

  const fileInput = document.getElementById('docFileInput');
  const zone      = document.getElementById('dropZone');

  fileInput.onchange = function() { if (this.files[0]) processDocFile(this.files[0]); };
  zone.onclick = () => fileInput.click();
  zone.ondragover  = e => { e.preventDefault(); zone.style.borderColor = 'var(--gold)'; zone.style.background = 'var(--gd)'; };
  zone.ondragleave = ()  => { zone.style.borderColor = 'var(--bd2)'; zone.style.background = 'var(--bg2)'; };
  zone.ondrop = e => {
    e.preventDefault();
    zone.style.borderColor = 'var(--bd2)'; zone.style.background = 'var(--bg2)';
    if (e.dataTransfer.files[0]) processDocFile(e.dataTransfer.files[0]);
  };

  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window._docBase64 = null;
  window._docFileName = null;
}

function processDocFile(file) {
  if (file.size > 4 * 1024 * 1024) { showToast('File too large — maximum 4 MB', 'error'); return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    window._docBase64   = e.target.result;
    window._docFileName = file.name;
    const prev = document.getElementById('uploadPreview');
    const zone = document.getElementById('dropZone');
    if (prev) {
      prev.style.display = 'block';
      prev.innerHTML = '✓ <strong>' + file.name + '</strong> (' + (file.size / 1024).toFixed(0) + ' KB) — ready to upload';
    }
    if (zone) {
      zone.style.borderColor = 'var(--green)';
      zone.innerHTML = '<div style="font-size:24px">✅</div><div style="font-size:12px;color:var(--green);font-weight:600;margin-top:4px">' + file.name + '</div><div style="font-size:10.5px;color:var(--tx3);margin-top:2px">' + (file.size/1024).toFixed(0) + ' KB</div>';
    }
  };
  reader.readAsDataURL(file);
}

async function saveDocUpload(reqId) {
  const urlInput = (document.getElementById('docUrlInput') || {}).value.trim();
  const notes    = (document.getElementById('docNotes')    || {}).value.trim();
  const b64      = window._docBase64;
  const fname    = window._docFileName || 'document';

  if (!urlInput && !b64) {
    showToast('Please select a file OR enter a URL', 'error');
    return;
  }

  const btn = document.getElementById('uploadSaveBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Uploading...'; }

  try {
    const updates = {
      status:         'Ready',
      documentUrl:    urlInput || null,
      documentBase64: b64      || null,
      documentName:   fname,
      adminNotes:     notes    || null,
      uploadedAt:     new Date().toISOString(),
      uploadedBy:     currentUser ? currentUser.id : 'ADMIN'
    };

    if (fbMode === 'firebase') {
      await dbSet('docRequests', reqId, updates);
    } else {
      const d = DEMO.docRequests.find(x => x.id === reqId);
      if (d) Object.assign(d, updates);
    }

    window._docBase64   = null;
    window._docFileName = null;
    document.getElementById('docUploadArea').innerHTML = '';

    showToast('Document uploaded and request marked Ready ✓', 'success');
    navigateTo('adminDocReq');
  } catch (e) {
    showToast('Upload failed: ' + e.message, 'error');
    if (btn) { btn.disabled = false; btn.innerHTML = IC.check + ' Upload & Mark Ready'; }
  }
}

async function closeDocReq(reqId) {
  if (!confirm('Close this request? Student will see it as completed.')) return;
  try {
    const updates = { status: 'Closed', closedAt: new Date().toISOString() };
    if (fbMode === 'firebase') await dbSet('docRequests', reqId, updates);
    else { const d = DEMO.docRequests.find(x => x.id === reqId); if (d) Object.assign(d, updates); }
    showToast('Request closed', 'info');
    navigateTo('adminDocReq');
  } catch (e) { showToast('Error: ' + e.message, 'error'); }
}

function downloadDocBase64(reqId) {
  const reqs = window._reqs || DEMO.docRequests;
  const d    = (reqs || []).find(x => x.id === reqId);
  if (!d || !d.documentBase64) { showToast('Document not available', 'error'); return; }
  const a    = document.createElement('a');
  a.href     = d.documentBase64;
  a.download = d.documentName || (d.type + '.pdf');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


async function deleteDocReq(id) {
  if (!confirm('Delete this document request? This cannot be undone.')) return;
  try {
    if (fbMode === 'firebase') await dbDel('docRequests', id);
    else {
      const idx = DEMO.docRequests.findIndex(x => x.id === id);
      if (idx !== -1) DEMO.docRequests.splice(idx, 1);
    }
    showToast('Request deleted', 'info');
    navigateTo('adminDocReq');
  } catch (e) { showToast('Delete failed: ' + e.message, 'error'); }
}

async function advDoc(id, status) {
  if (fbMode === 'firebase') await dbSet('docRequests', id, { status });
  else { const d = DEMO.docRequests.find(x => x.id === id); if (d) d.status = status; }
  const reqs = await getDocReqs();
  window._reqs = reqs;
  const b = document.getElementById('docBody'); if (b) b.innerHTML = renderDocRows(reqs);
  showToast('Request → ' + status, 'success');
}

// ── TIMETABLE KEY helpers ─────────────────────────
function ttKey(branch, sem, section) {
  return 'tt_' + branch + '_s' + sem + '_' + section;
}

// Load timetable from Firestore or memory cache
async function loadTT(branch, sem, section) {
  const key = ttKey(branch, sem, section);
  if (window._ttCache && window._ttCache[key]) return window._ttCache[key];
  if (fbMode === 'firebase') {
    try {
      const doc = await dbGet('timetables', key);
      if (doc && doc.slots) {
        window._ttCache = window._ttCache || {};
        window._ttCache[key] = doc.slots;
        return doc.slots;
      }
    } catch (_) {}
  }
  return null; // no saved timetable
}

async function saveTT(branch, sem, section, slots) {
  const key = ttKey(branch, sem, section);
  window._ttCache = window._ttCache || {};
  window._ttCache[key] = slots;
  if (fbMode === 'firebase') {
    await dbSet('timetables', key, { branch, sem, section, slots, updatedAt: new Date().toISOString() });
  }
}

// Build default timetable from SUBJ
function defaultSlots(branch) {
  const subj  = SUBJ[branch] || ['Subject'];
  const days  = ['Mon','Tue','Wed','Thu','Fri','Sat'];
  const times = ['9:00','10:00','11:00','12:00','1:00','2:00','3:00'];
  const slots = {};
  days.forEach(day => {
    slots[day] = {};
    times.forEach((t, ti) => {
      if (t === '12:00') { slots[day][t] = { type:'break' }; return; }
      slots[day][t] = { type:'class', subject: subj[(ti + days.indexOf(day)) % subj.length], teacher:'', room:'R' + (101+ti*10) };
    });
  });
  return slots;
}

async function adminTimetable() {
  const selBranch  = window._ttBranch  || 'CSE';
  const selSem     = window._ttSem     || 1;
  const selSection = window._ttSection || 'A';

  mc().innerHTML = '<div class="spinner"></div>';

  // Load teachers for this branch (for assignment dropdown)
  const allTeachers = await getTeachers();
  const branchTchs  = allTeachers.filter(t => t.branch === selBranch);

  // Load saved timetable or use default
  let slots = await loadTT(selBranch, selSem, selSection);
  if (!slots) slots = defaultSlots(selBranch);

  const days  = ['Mon','Tue','Wed','Thu','Fri','Sat'];
  const times = ['9:00','10:00','11:00','12:00','1:00','2:00','3:00'];
  const subj  = SUBJ[selBranch] || [];

  // Build editable grid — teacher dropdown built per-cell so selected works correctly
  function cellHtml(day, time) {
    const cell    = (slots[day] && slots[day][time]) || {};
    if (cell.type === 'break') {
      return '<td style="background:rgba(181,130,10,.08);text-align:center;color:var(--amber);font-weight:600;font-style:italic;font-size:12px;padding:10px">🍽 Lunch Break</td>';
    }
    const curSubj = cell.subject || '';
    const curTch  = cell.teacher || '';
    const curRoom = cell.room    || '';

    const subjDd = '<select class="tt-edit-subj" data-day="' + day + '" data-time="' + time + '"'
      + ' style="width:100%;font-size:11.5px;padding:5px 6px;border:1px solid var(--bd);border-radius:4px;background:#fff;color:var(--tx);margin-bottom:4px;display:block"'
      + ' onchange="ttCellChange(this)">'
      + '<option value="">— Free Period —</option>'
      + subj.map(s => '<option value="' + s + '"' + (curSubj === s ? ' selected' : '') + '>' + s + '</option>').join('')
      + '</select>';

    const tchDd = '<select class="tt-edit-tch" data-day="' + day + '" data-time="' + time + '"'
      + ' style="width:100%;font-size:11px;padding:4px 6px;border:1px solid var(--bd2);border-radius:4px;background:#fff;color:var(--tx2);margin-bottom:4px;display:block"'
      + ' onchange="ttCellChange(this)">'
      + '<option value="">👤 Assign Teacher</option>'
      + branchTchs.map(t => '<option value="' + t.id + '"' + (curTch === t.id ? ' selected' : '') + '>'
          + t.name + (t.subject ? ' — ' + t.subject : '') + '</option>').join('')
      + '</select>';

    const roomIn = '<input class="tt-edit-room" data-day="' + day + '" data-time="' + time + '"'
      + ' type="text" value="' + curRoom + '" placeholder="Room"'
      + ' style="width:100%;font-size:11px;padding:4px 6px;border:1px solid var(--bd2);border-radius:4px;font-family:var(--fm);color:var(--tx3);display:block"'
      + ' onchange="ttCellChange(this)">';

    return '<td style="padding:8px;min-width:160px;vertical-align:top;border:1px solid var(--bd)">'
      + subjDd + tchDd + roomIn + '</td>';
  }
  let tableHtml = '<div style="overflow-x:auto"><table class="tt-tbl" style="min-width:900px">'
    + '<thead><tr><th style="min-width:55px">Day</th>'
    + times.map(t => '<th>' + t + '</th>').join('')
    + '</tr></thead><tbody>';

  days.forEach(day => {
    tableHtml += '<tr><td style="font-weight:700;font-size:11.5px;white-space:nowrap;background:var(--sf2);color:var(--navy)">' + day + '</td>';
    times.forEach(time => { tableHtml += cellHtml(day, time); });
    tableHtml += '</tr>';
  });
  tableHtml += '</tbody></table></div>';

  mc().innerHTML = [
    hdr('Timetable Management', 'Edit schedules by branch, semester and section',
      mkbtn('gold', '💾 Save Timetable', 'saveTimetable()')),

    // Selector row
    '<div class="card" style="padding:14px 16px">',
    '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">',
    '<label style="font-size:11px;font-weight:600;color:var(--tx3);text-transform:uppercase">Branch</label>',
    '<select class="ss" id="ttBrSel" onchange="switchTT()">' + BR.map(b => '<option' + (b===selBranch?' selected':'') + '>' + b + '</option>').join('') + '</select>',
    '<label style="font-size:11px;font-weight:600;color:var(--tx3);text-transform:uppercase">Semester</label>',
    '<select class="ss" id="ttSemSel" onchange="switchTT()">' + [1,2,3,4,5,6,7,8].map(s => '<option value="' + s + '"' + (s===selSem?' selected':'') + '>Sem ' + s + '</option>').join('') + '</select>',
    '<label style="font-size:11px;font-weight:600;color:var(--tx3);text-transform:uppercase">Section</label>',
    '<select class="ss" id="ttSecSel" onchange="switchTT()">' + ['A','B','C'].map(s => '<option' + (s===selSection?' selected':'') + '>' + s + '</option>').join('') + '</select>',
    mkbtn('blue', '↺ Reset to Default', 'resetTT()'),
    '</div>',
    '<div style="font-size:11px;color:var(--tx3);margin-top:8px">' + selBranch + ' · Semester ' + selSem + ' · Section ' + selSection + ' · ' + branchTchs.length + ' teachers available</div>',
    '</div>',

    // Editable timetable grid
    '<div class="card" style="padding:0;overflow:hidden">',
    '<div class="card-hd" style="padding:14px 16px">',
    '<span class="card-title">Weekly Schedule — Click cells to edit</span>',
    '<div style="display:flex;gap:6px;font-size:11px;color:var(--tx3);align-items:center">',
    '<span style="color:var(--navy)">■</span> Subject &nbsp; <span style="color:var(--tx3)">■</span> Teacher &nbsp; <span style="color:var(--tx3)">■</span> Room',
    '</div></div>',
    tableHtml,
    '</div>',

    // Save hint
    '<div style="text-align:right;margin-top:4px;font-size:11px;color:var(--tx3)">Changes are saved to Firebase · Visible to students and teachers immediately</div>'
  ].join('');

  // Store current slots for editing
  window._ttSlots   = JSON.parse(JSON.stringify(slots));
  window._ttBranchE = selBranch;
  window._ttSemE    = selSem;
  window._ttSecE    = selSection;
}

function ttCellChange(el) {
  const day  = el.dataset.day;
  const time = el.dataset.time;
  if (!window._ttSlots[day]) window._ttSlots[day] = {};
  if (!window._ttSlots[day][time]) window._ttSlots[day][time] = { type:'class' };
  const cell = window._ttSlots[day][time];
  if (el.classList.contains('tt-edit-subj'))  cell.subject = el.value;
  if (el.classList.contains('tt-edit-tch'))   cell.teacher = el.value;
  if (el.classList.contains('tt-edit-room'))  cell.room    = el.value;
}

async function saveTimetable() {
  const btn = document.querySelector('[onclick="saveTimetable()"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving...'; }
  try {
    await saveTT(window._ttBranchE, window._ttSemE, window._ttSecE, window._ttSlots);
    showToast('Timetable saved for ' + window._ttBranchE + ' Sem ' + window._ttSemE + ' Section ' + window._ttSecE, 'success');
    if (btn) { btn.disabled = false; btn.textContent = '💾 Save Timetable'; }
  } catch (e) {
    showToast('Save failed: ' + e.message, 'error');
    if (btn) { btn.disabled = false; btn.textContent = '💾 Save Timetable'; }
  }
}

async function resetTT() {
  if (!confirm('Reset timetable to default? All changes will be lost.')) return;
  const key = ttKey(window._ttBranchE, window._ttSemE, window._ttSecE);
  if (window._ttCache) delete window._ttCache[key];
  if (fbMode === 'firebase') { try { await dbDel('timetables', key); } catch (_) {} }
  navigateTo('adminTimetable');
}

function switchTT() {
  window._ttBranch  = (document.getElementById('ttBrSel')  || {}).value || 'CSE';
  window._ttSem     = parseInt((document.getElementById('ttSemSel') || {}).value) || 1;
  window._ttSection = (document.getElementById('ttSecSel') || {}).value || 'A';
  navigateTo('adminTimetable');
}

async function adminNotices() {
  const notices = await getNotices();
  mc().innerHTML = [
    hdr('Notices &amp; Announcements', notices.length + ' notices · ' + (fbMode === 'firebase' ? 'Firebase' : 'Demo'),
      mkbtn('gold', IC.plus + ' New Notice', 'showNoticeForm()')),
    '<div id="noticeForm" style="display:none"></div>',
    notices.length === 0
      ? '<div class="card" style="color:var(--tx3);text-align:center;padding:30px">No notices yet. Click + New Notice to create one.</div>'
      : notices.map(n =>
          '<div class="ntc-card" style="border-left:3px solid ' + (n.priority === 'High' ? 'var(--red)' : n.priority === 'Medium' ? 'var(--amber)' : 'var(--green)') + '">'
          + '<div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">'
          + '<div style="flex:1"><div class="ntc-title">' + n.title + '</div><div class="ntc-date">' + n.date + '</div><div class="ntc-body">' + n.body + '</div></div>'
          + '<div style="display:flex;align-items:center;gap:6px;flex-shrink:0">'
          + '<span class="badge ' + (n.priority === 'High' ? 'br' : n.priority === 'Medium' ? 'ba' : 'bg') + '">' + n.priority + '</span>'
          + '<button class="btn btn-red" style="padding:3px 8px" onclick="deleteNotice(\'' + n.id + '\')">' + IC.trash + '</button>'
          + '</div></div></div>'
        ).join('')
  ].join('');
}

function showNoticeForm() {
  const f = document.getElementById('noticeForm');
  if (!f) return;
  f.style.display = 'block';
  f.innerHTML = [
    '<div class="card" style="border:1px solid var(--gold);margin-bottom:14px">',
    '<div class="card-hd"><span class="card-title">Create New Notice</span><button class="btn btn-sec" style="padding:4px 10px;font-size:11px" onclick="document.getElementById(\'noticeForm\').style.display=\'none\'">Cancel</button></div>',
    '<div class="fg"><label>Title *</label><input class="fgi" id="ntc_title" placeholder="e.g. Exam Schedule Announced"></div>',
    '<div class="form-2">',
    '<div class="fg"><label>Priority</label><select class="fgs" id="ntc_priority"><option>High</option><option>Medium</option><option>Low</option></select></div>',
    '<div class="fg"><label>Date</label><input class="fgi" id="ntc_date" type="date" value="' + new Date().toISOString().split('T')[0] + '"></div>',
    '</div>',
    '<div class="fg"><label>Body *</label><textarea class="fgt" id="ntc_body" placeholder="Notice content..." style="min-height:90px"></textarea></div>',
    mkbtn('gold', IC.check + ' Publish Notice', 'saveNotice()'),
    '</div>'
  ].join('');
  document.getElementById('ntc_title').focus();
}

async function saveNotice() {
  const title    = (document.getElementById('ntc_title')    || {}).value.trim();
  const body     = (document.getElementById('ntc_body')     || {}).value.trim();
  const priority = (document.getElementById('ntc_priority') || {}).value || 'Medium';
  const date     = (document.getElementById('ntc_date')     || {}).value || new Date().toISOString().split('T')[0];
  if (!title || !body) { showToast('Title and body are required', 'error'); return; }

  const id = 'N' + Date.now();
  const notice = { id, title, body, priority, date, postedBy: currentUser.id };

  try {
    if (fbMode === 'firebase') await dbSet('notices', id, notice);
    else DEMO.notices.unshift(notice);
    showToast('Notice published', 'success');
    navigateTo('adminNotices');
  } catch (e) { showToast('Error: ' + e.message, 'error'); }
}

async function deleteNotice(id) {
  if (!confirm('Delete this notice?')) return;
  try {
    if (fbMode === 'firebase') await dbDel('notices', id);
    else { const i = DEMO.notices.findIndex(n => n.id === id); if (i !== -1) DEMO.notices.splice(i, 1); }
    showToast('Notice deleted', 'info');
    navigateTo('adminNotices');
  } catch (e) { showToast('Error: ' + e.message, 'error'); }
}

async function adminSettings() {
  mc().innerHTML = [
    hdr('System Settings', 'Security, database and institutional configuration'),
    '<div class="tabs"><button class="tab-btn active" onclick="swTab(this,\'st1\')">Institution</button><button class="tab-btn" onclick="swTab(this,\'st2\')">Security Rules</button><button class="tab-btn" onclick="swTab(this,\'st3\')">Database</button></div>',

    // Tab 1
    '<div id="st1" class="tab-pane active"><div class="form-2">',
    '<div class="card"><div class="card-hd"><span class="card-title">Institution Details</span></div><div class="fg"><label>Name</label><input class="fgi" id="cfg_name" value="CampusAsthra Institute of Technology"></div><div class="fg"><label>Affiliation</label><input class="fgi" id="cfg_affil" value="VTU Belagavi"></div><div class="fg"><label>Academic Year</label><input class="fgi" id="cfg_year" value="2024–25"></div>' + mkbtn('gold', 'Save Changes', 'saveInstSettings()') + '</div>',
    '<div class="card"><div class="card-hd"><span class="card-title">Attendance Policy</span></div><div class="fg"><label>Minimum Attendance (%)</label><input class="fgi" id="cfg_minatt" type="number" value="75"></div><div class="fg"><label>Medical Leave Cap (days)</label><input class="fgi" id="cfg_medcap" type="number" value="15"></div>' + mkbtn('gold', 'Update Policy', 'saveAttPolicy()') + '</div>',
    '</div></div>',

    // Tab 2 — Security Rules
    '<div id="st2" class="tab-pane">',

    // Rules status checker
    '<div class="card" style="border-left:3px solid var(--amber);margin-bottom:12px">',
    '<div class="card-hd"><span class="card-title">⚡ Rules Status Check</span>' + mkbtn('blue', '▶ Test Now', 'testFirestoreRules()') + '</div>',
    '<div id="rulesTestResult" style="font-size:12px;color:var(--tx2);line-height:1.8">Click "Test Now" to check if your Firebase rules are correctly configured.</div>',
    '</div>',

    // Step by step guide
    '<div class="card" style="border-left:3px solid var(--blue2);margin-bottom:12px">',
    '<div class="card-hd"><span class="card-title">📋 How to Update Firebase Rules</span></div>',
    '<div style="font-size:12.5px;color:var(--tx2);line-height:2">',
    [
      'Open <a href="https://console.firebase.google.com" target="_blank" style="color:var(--blue2)">console.firebase.google.com</a>',
      'Select your project → <strong style="color:var(--tx)">campus-asthra-v2</strong>',
      'Left sidebar → <strong style="color:var(--tx)">Firestore Database</strong>',
      'Click the <strong style="color:var(--tx)">Rules</strong> tab at the top',
      'Click <strong style="color:var(--gold)">Copy Rules</strong> below, then paste into the Firebase editor',
      'Click the <strong style="color:var(--green)">Publish</strong> button in Firebase Console',
      'Come back here and click <strong style="color:var(--blue2)">Test Now</strong> to confirm it worked',
    ].map((s, i) => '<div style="display:flex;gap:10px;margin-bottom:4px"><div style="width:22px;height:22px;border-radius:50%;background:var(--gd);color:var(--gold);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + (i+1) + '</div><div>' + s + '</div></div>').join(''),
    '</div></div>',

    // Rules box
    '<div class="card" style="border-left:3px solid var(--green)">',
    '<div class="card-hd"><span class="card-title">Firestore Security Rules</span>' + mkbtn('gold', IC.copy + ' Copy Rules', 'copyRules()') + '</div>',
    '<div class="rules-box" id="rulesBox"></div>',
    '</div></div>',

    // Tab 3 — Database
    '<div id="st3" class="tab-pane">',
    '<div class="card">',
    '<div class="card-hd"><span class="card-title">Firebase Project</span><span class="badge ' + (fbMode === 'firebase' ? 'bg' : 'ba') + '">' + (fbMode === 'firebase' ? IC.firebase + ' Live' : 'Demo') + '</span></div>',
    '<div style="font-size:11px;font-family:var(--fm);color:var(--tx3);padding:10px;background:var(--bg2);border-radius:4px;border:1px solid var(--bd);margin-bottom:14px;line-height:1.8">Project ID: <span style="color:var(--gold)">campus-asthra-edu-portal</span><br>Auth: <span style="color:var(--green)">Email/Password</span><br>Firestore: <span style="color:' + (fbMode === 'firebase' ? 'var(--green)' : 'var(--amber)') + '">' + (fbMode === 'firebase' ? 'Connected' : 'Not connected') + '</span></div>',
    '<div style="display:flex;flex-direction:column;gap:8px">' + mkbtn('blue', IC.seed + ' Setup Firebase Auth Accounts (quota-safe)', 'seedFirebase()') + mkbtn('red', 'Clear All Face Records', 'clearFaces()') + '</div></div>',
    '<div class="card" style="border-left:3px solid var(--amber)"><div class="card-hd"><span class="card-title">' + IC.shield + ' Quota Protection</span></div>',
    '<div style="font-size:12px;color:var(--tx2);line-height:1.8">',
    '<div style="margin-bottom:8px">This app is <strong style="color:var(--tx)">quota-safe by design</strong> on the Firebase Spark (free) plan:</div>',
    ['<strong>1,500 student/teacher records</strong> are stored in-memory only — never written to Firestore in bulk','New records added by admin are saved individually (one write per person)','Face images compressed to <strong>160×120 @ 60% JPEG</strong> (~8 KB each) before storing','Setup only writes <strong>~12 documents</strong> total (admin + notices + doc requests)','Saved chats and attendance are written per-event as students use the portal'].map(s => '<div style="display:flex;gap:8px;margin-bottom:4px"><span style="color:var(--green);flex-shrink:0">✓</span><span>' + s + '</span></div>').join(''),
    '</div></div>',
    '<div class="card" style="border-left:3px solid var(--amber)"><div class="card-hd"><span class="card-title">Enable Auth (if not done)</span></div>',
    '<div style="font-size:12px;color:var(--tx2);line-height:1.8">',
    ['Firebase Console → <strong style="color:var(--tx)">Authentication → Sign-in method</strong>', 'Click <strong style="color:var(--tx)">Email/Password → Enable → Save</strong>', 'Click <strong style="color:var(--gold)">Seed Data</strong> above to create accounts', 'Login: admin/admin123 · T001/teach123 · S0001/study123'].map((s, i) => '<div style="display:flex;gap:9px;margin-bottom:5px"><div style="width:18px;height:18px;border-radius:50%;background:var(--gd);color:var(--gold);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + (i + 1) + '</div><div>' + s + '</div></div>').join(''),
    '</div></div></div>'
  ].join('');

  // Inject rules safely using textContent (avoids any JS parsing issues)
  const rb = document.getElementById('rulesBox');
  if (rb) rb.textContent = FIRESTORE_RULES;
}

async function saveInstSettings() {
  const cfg = {
    name:   (document.getElementById('cfg_name')  || {}).value || 'CampusAsthra',
    affil:  (document.getElementById('cfg_affil') || {}).value || 'VTU Belagavi',
    year:   (document.getElementById('cfg_year')  || {}).value || '2024–25',
    updatedAt: new Date().toISOString()
  };
  try {
    if (fbMode === 'firebase') await dbSet('config', 'institution', cfg);
    else window._demoConfig = { ...(window._demoConfig || {}), ...cfg };
    showToast('Institution settings saved', 'success');
  } catch (e) { showToast('Save failed: ' + e.message, 'error'); }
}

async function saveAttPolicy() {
  const minAtt = parseInt((document.getElementById('cfg_minatt') || {}).value) || 75;
  const medCap = parseInt((document.getElementById('cfg_medcap') || {}).value) || 15;
  const cfg = { minAttendance: minAtt, medicalLeaveCap: medCap, updatedAt: new Date().toISOString() };
  try {
    if (fbMode === 'firebase') await dbSet('config', 'policy', cfg);
    else window._demoConfig = { ...(window._demoConfig || {}), policy: cfg };
    showToast('Attendance policy updated — min ' + minAtt + '%', 'success');
  } catch (e) { showToast('Save failed: ' + e.message, 'error'); }
}

function copyRules() {
  navigator.clipboard.writeText(FIRESTORE_RULES)
    .then(() => showToast('Rules copied — paste into Firebase Console → Firestore → Rules tab', 'success'))
    .catch(() => showToast('Select the rules box and copy manually', 'info'));
}

async function testFirestoreRules() {
  const el = document.getElementById('rulesTestResult');
  if (!el) return;
  if (fbMode !== 'firebase') {
    el.innerHTML = '<span style="color:var(--amber)">⚠ Running in Demo mode — Firebase rules not applicable</span>';
    return;
  }

  el.innerHTML = '<span style="color:var(--tx3)">Testing rules...</span>';

  const user = fbAuth.currentUser;
  if (!user) {
    el.innerHTML = '<span style="color:var(--red)">✗ Not signed in — please sign out and sign back in</span>';
    return;
  }

  const results = [];
  const testId  = '_ruletest_' + Date.now();

  // Test 1: write to students collection
  try {
    await db.collection('students').doc(testId).set({ _test: true }, { merge: true });
    await db.collection('students').doc(testId).delete();
    results.push({ label: 'students write', ok: true });
  } catch (e) {
    results.push({ label: 'students write', ok: false, err: e.code });
  }

  // Test 2: write to faces collection
  try {
    await db.collection('faces').doc(testId).set({ _test: true }, { merge: true });
    await db.collection('faces').doc(testId).delete();
    results.push({ label: 'faces write', ok: true });
  } catch (e) {
    results.push({ label: 'faces write', ok: false, err: e.code });
  }

  // Test 3: write to grades collection
  try {
    await db.collection('grades').doc(testId).set({ _test: true }, { merge: true });
    await db.collection('grades').doc(testId).delete();
    results.push({ label: 'grades write', ok: true });
  } catch (e) {
    results.push({ label: 'grades write', ok: false, err: e.code });
  }

  // Test 4: write to attendance collection
  try {
    await db.collection('attendance').doc(testId).set({ _test: true }, { merge: true });
    await db.collection('attendance').doc(testId).delete();
    results.push({ label: 'attendance write', ok: true });
  } catch (e) {
    results.push({ label: 'attendance write', ok: false, err: e.code });
  }

  const allOk = results.every(r => r.ok);
  const failed = results.filter(r => !r.ok);

  let html = '<div style="margin-bottom:10px">';
  html += allOk
    ? '<div style="color:var(--green);font-weight:600;font-size:13px">✅ All rules are correctly configured! Everything will work.</div>'
    : '<div style="color:var(--red);font-weight:600;font-size:13px">❌ Rules are NOT updated yet. ' + failed.length + ' test(s) failed.</div>';
  html += '</div>';

  results.forEach(r => {
    html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">'
      + '<span style="color:' + (r.ok ? 'var(--green)' : 'var(--red)') + ';font-size:13px">' + (r.ok ? '✓' : '✗') + '</span>'
      + '<span style="font-family:var(--fm);font-size:11.5px">' + r.label + '</span>'
      + (r.ok ? '<span style="color:var(--green);font-size:11px">passed</span>' : '<span style="color:var(--red);font-size:11px">' + (r.err || 'permission-denied') + '</span>')
      + '</div>';
  });

  if (!allOk) {
    html += '<div style="margin-top:12px;padding:10px 12px;background:var(--abd);border-radius:6px;font-size:12px;color:var(--amber)">'
      + '<strong>Action required:</strong> Copy the rules above and paste them into '
      + '<a href="https://console.firebase.google.com" target="_blank" style="color:var(--blue2)">Firebase Console → Firestore → Rules → Publish</a>'
      + '</div>';
  }

  el.innerHTML = html;
}

async function clearFaces() {
  if (!confirm('Delete ALL biometric records?')) return;
  if (fbMode === 'firebase') {
    const faces = await getFaces();
    const batch = db.batch();
    faces.forEach(f => batch.delete(db.collection('faces').doc(f.id)));
    await batch.commit();
  } else {
    DEMO.faces = {};
  }
  showToast('All face records cleared', 'info');
  navigateTo('adminFaceReg');
}

// ── TEACHER PAGES ────────────────────────────────
async function teacherDash() {
  const t = currentUser;
  const stus = await getStudents();
  const myS = stus.filter(s => s.branch === t.branch);
  const avg = myS.length ? Math.round(myS.reduce((a, s) => a + (s.attendance || 75), 0) / myS.length) : 0;

  mc().innerHTML = [
    hdr('Faculty Dashboard', t.name + ' · ' + (t.designation || 'Faculty') + ' · ' + t.branch),
    '<div class="stat-grid">',
    scard('sc-blue', 'My Students', myS.length, t.branch + ' Dept'),
    scard('sc-gold', 'Classes This Month', t.classesThisMonth || 20, ''),
    scard(avg >= 75 ? 'sc-green' : 'sc-red', 'Dept Avg Attendance', avg + '%', ''),
    scard('sc-blue', 'Experience', (t.experience || 1) + 'y', ''),
    '</div>',
    '<div style="display:grid;grid-template-columns:3fr 2fr;gap:16px">',
    '<div class="card"><div class="card-hd"><span class="card-title">Today\'s Schedule</span></div>',
    [['9:00 AM', 'CST-301'], ['11:00 AM', 'R-204'], ['2:00 PM', 'Lab-1']].map(([time, room]) =>
      '<div style="display:flex;align-items:center;gap:10px;padding:9px;background:var(--sf2);border-radius:4px;margin-bottom:6px">'
      + '<div style="font-family:var(--fm);font-size:10px;color:var(--tx3);min-width:66px">' + time + '</div>'
      + '<div style="width:2px;height:24px;background:var(--gold);border-radius:1px;flex-shrink:0"></div>'
      + '<div><div style="font-weight:600;font-size:12px">' + (t.subject || 'Subject') + '</div>'
      + '<div style="font-size:10.5px;color:var(--tx2)">' + room + ' · ' + t.branch + ' Sem 5</div></div></div>'
    ).join('') + '</div>',
    '<div class="card"><div class="card-hd"><span class="card-title">Quick Actions</span></div><div style="display:grid;gap:6px">',
    [['attendance', 'Mark Attendance', 'teacherAttendance', 'blue'], ['grades', 'Grades', 'teacherGrades', 'gold'], ['classroom', 'Classroom', 'teacherClassroom', 'green'], ['timetable', 'Timetable', 'teacherTimetable', 'gold']].map(([ic, l, s, c]) => '<button class="btn btn-' + c + '" style="justify-content:flex-start;padding:9px 11px" onclick="navigateTo(\'' + s + '\')">' + (IC[ic] || '') + ' ' + l + '</button>').join(''),
    '</div></div></div>'
  ].join('');
}

async function teacherAttendance() {
  const t = currentUser;
  const stus = await getStudents();
  // Filter by teacher's branch; allow semester selection
  const allMySem = stus.filter(s => s.branch === t.branch);
  const sems = [...new Set(allMySem.map(s => s.semester))].sort();
  const curSem  = window._attSem || sems[sems.length - 1] || 5;
  window._attSem = curSem;
  const cls     = allMySem.filter(s => s.semester === curSem);
  const today   = new Date().toISOString().split('T')[0];
  // Preserve selected date across semester switches; reset only on fresh navigation
  if (!window._attDateSet) window._attDate = today;
  const selDate = window._attDate || today;
  window._attMap     = {};
  window._attSubject = t.subject || 'Subject';
  window._attCls     = cls;

  // Load existing attendance for the selected date
  let existing = {};
  if (fbMode === 'firebase') {
    try {
      const snap = await db.collection('attendance')
        .where('date',     '==', selDate)
        .where('branch',   '==', t.branch)
        .where('semester', '==', curSem)
        .where('subject',  '==', t.subject || 'Subject').get();
      snap.docs.forEach(d => { const rec = d.data(); existing[rec.studentId] = rec.present; });
    } catch (_) {}
  }
  cls.forEach(s => { if (existing[s.id] !== undefined) window._attMap[s.id] = existing[s.id]; });

  mc().innerHTML = [
    hdr('Mark Attendance',
      (t.subject || 'Subject') + ' · ' + t.branch,
      '<div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center">'
      + '<label style="font-size:11px;color:var(--tx2)">Date:</label>'
      + '<input type="date" class="ss" id="attDatePick" value="' + selDate + '" max="' + today + '" onchange="changeAttDate(this.value)" style="font-size:12px;padding:5px 8px">'
      + '<select class="ss" id="attSemSel" onchange="switchAttSem(this.value)" style="font-size:12px">'
      + sems.map(sm => '<option value="' + sm + '"' + (sm === curSem ? ' selected' : '') + '>Sem ' + sm + '</option>').join('')
      + '</select>'
      + mkbtn('blue', IC.face + ' Face Recog', 'openFaceAtt()')
      + mkbtn('green', IC.check + ' All Present', 'markAllAtt(true)')
      + mkbtn('sec', 'All Absent', 'markAllAtt(false)')
      + '</div>'),
    cls.length === 0 ? '<div class="card" style="color:var(--tx3);text-align:center;padding:30px">No students found for Sem ' + curSem + ' · ' + t.branch + '</div>' : [
      '<div class="card">',
      '<div style="display:flex;gap:18px;margin-bottom:12px;font-size:12.5px;align-items:center">',
      'Present: <strong id="pCnt" style="color:var(--green)">0</strong>',
      'Absent: <strong id="aCnt" style="color:var(--red)">' + cls.length + '</strong>',
      'Total: <strong>' + cls.length + '</strong>',
      (Object.keys(existing).length > 0 ? '<span class="badge bb">' + IC.check + ' Attendance loaded for ' + selDate + '</span>' : '<span style="font-size:11px;color:var(--tx3)">No records for ' + selDate + '</span>'),
      '</div>',
      '<div class="tbl-wrap"><table><thead><tr><th>USN</th><th>Name</th><th>Section</th><th>Overall %</th><th>Today</th></tr></thead><tbody>',
      cls.map(s => {
        const cur = existing[s.id];
        const marked = cur !== undefined ? cur : undefined;
        return '<tr id="ar-' + s.id + '" style="' + (marked === true ? 'background:rgba(42,184,122,.05)' : marked === false ? 'background:rgba(217,79,79,.05)' : '') + '">'
          + '<td style="font-family:var(--fm);font-size:10.5px">' + (s.usn || s.id) + '</td>'
          + '<td>' + s.name + '</td>'
          + '<td>' + (s.section || 'A') + '</td>'
          + '<td><span style="color:' + ((s.attendance || 75) >= 75 ? 'var(--green)' : 'var(--red)') + '">' + (s.attendance || 75) + '%</span></td>'
          + '<td><div style="display:flex;gap:4px">'
          + '<button class="btn btn-green" style="padding:3px 9px;font-size:11px;' + (marked === true ? 'outline:2px solid var(--green)' : '') + '" onclick="markOne(\'' + s.id + '\',true)">P</button>'
          + '<button class="btn btn-red"   style="padding:3px 9px;font-size:11px;' + (marked === false ? 'outline:2px solid var(--red)' : '') + '" onclick="markOne(\'' + s.id + '\',false)">A</button>'
          + '</div></td></tr>';
      }).join(''),
      '</tbody></table></div>',
      '<div style="margin-top:12px;display:flex;justify-content:flex-end;gap:8px">',
      mkbtn('gold', 'Save Attendance to ' + (fbMode === 'firebase' ? 'Firebase' : 'Demo'), 'saveAttendance()'),
      '</div></div>'
    ].join('')
  ].join('');

  updAtt();
}

function switchAttSem(v) { window._attSem = parseInt(v); window._attDateSet = true; navigateTo('teacherAttendance'); }
function changeAttDate(v) { window._attDate = v; window._attDateSet = true; navigateTo('teacherAttendance'); }

function markOne(id, p) {
  window._attMap = window._attMap || {};
  window._attMap[id] = p;
  const r = document.getElementById('ar-' + id);
  if (r) {
    r.style.background = p ? 'rgba(42,184,122,.05)' : 'rgba(217,79,79,.05)';
    const btns = r.querySelectorAll('button');
    if (btns[0]) btns[0].style.outline = p ? '2px solid var(--green)' : '';
    if (btns[1]) btns[1].style.outline = !p ? '2px solid var(--red)' : '';
  }
  updAtt();
}

function markAllAtt(v) {
  const cls = window._attCls || [];
  cls.forEach(s => { markOne(s.id, v); });
}

function updAtt() {
  const p = Object.values(window._attMap || {}).filter(v => v).length;
  const total = (window._attCls || []).length;
  const pc = document.getElementById('pCnt'); if (pc) pc.textContent = p;
  const ac = document.getElementById('aCnt'); if (ac) ac.textContent = total - p;
}

async function saveAttendance() {
  const attMap = window._attMap || {};
  const cls = window._attCls || [];
  const t = currentUser;
  const date = window._attDate || new Date().toISOString().split('T')[0];
  const subject = window._attSubject || (t.subject || 'Subject');
  const curSem = window._attSem || 5;

  if (Object.keys(attMap).length === 0) { showToast('Mark at least one student before saving', 'error'); return; }

  const saveBtn = document.querySelector('[onclick="saveAttendance()"]');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving...'; }

  try {
    const records = cls.map(s => ({
      id: 'att_' + date + '_' + subject.replace(/\s+/g, '') + '_' + s.id,
      studentId: s.id, studentName: s.name,
      branch: t.branch, semester: curSem,
      section: s.section || 'A',
      subject, date,
      present: attMap[s.id] !== undefined ? attMap[s.id] : false,
      markedBy: t.id, markedAt: new Date().toISOString()
    }));

    if (fbMode === 'firebase') {
      // Batch write attendance records
      const CHUNK = 400;
      for (let i = 0; i < records.length; i += CHUNK) {
        const batch = db.batch();
        records.slice(i, i + CHUNK).forEach(rec => {
          batch.set(db.collection('attendance').doc(rec.id), rec);
        });
        await batch.commit();
      }
      // Update student attendance % — only for students that exist in Firestore
      // Use a simple present/total ratio from today's records only (no N reads)
      const total = records.length;
      const present = records.filter(r => r.present).length;
      const todayPct = total > 0 ? Math.round((present / total) * 100) : 75;
      // Update each student doc individually (only those in Firestore)
      try {
        const stuBatch = db.batch();
        let batchCount = 0;
        for (const s of cls) {
          if (attMap[s.id] === undefined) continue;
          // Blend: 80% existing, 20% today's session (avoids needing full history read)
          const existing = s.attendance || 75;
          const newPct   = Math.round(existing * 0.8 + (attMap[s.id] ? 100 : 0) * 0.2);
          stuBatch.set(db.collection('students').doc(s.id), { attendance: newPct }, { merge: true });
          batchCount++;
          if (batchCount >= 400) break;
        }
        if (batchCount > 0) await stuBatch.commit();
      } catch (stuErr) {
        // Students not in Firestore (demo records) will fail silently — that's fine
        console.warn('Attendance student update (partial):', stuErr.message);
      }
    } else {
      records.forEach(rec => {
        if (DEMO.students[rec.studentId]) {
          const cur = DEMO.students[rec.studentId].attendance || 75;
          DEMO.students[rec.studentId].attendance = rec.present
            ? Math.min(100, Math.round(cur * 0.8 + 20))
            : Math.max(0,   Math.round(cur * 0.8));
        }
      });
    }

    const p = Object.values(attMap).filter(v => v).length;
    showToast('Attendance saved — ' + p + ' present, ' + (cls.length - p) + ' absent', 'success');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save Attendance to ' + (fbMode === 'firebase' ? 'Firebase' : 'Demo'); }
  } catch (e) {
    showToast('Save failed: ' + e.message, 'error');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save Attendance to ' + (fbMode === 'firebase' ? 'Firebase' : 'Demo'); }
  }
}

function openFaceAtt() {
  // Set attendance mode so capturePhotoForLogin marks present instead of logging in
  window._faceAttMode = true;
  openFaceLoginModal();
}

async function teacherGrades() {
  const t = currentUser;
  const stus = await getStudents();
  const sems = [...new Set(stus.filter(s => s.branch === t.branch).map(s => s.semester))].sort();
  const curSem = window._gradeSem || sems[sems.length - 1] || 5;
  window._gradeSem = curSem;
  const cls = stus.filter(s => s.branch === t.branch && s.semester === curSem).slice(0, 40);

  // Load existing grades from Firestore
  let existingGrades = {};
  if (fbMode === 'firebase') {
    try {
      const snap = await db.collection('grades')
        .where('branch', '==', t.branch)
        .where('semester', '==', curSem)
        .where('subject', '==', t.subject || 'Subject').get();
      snap.docs.forEach(d => { const g = d.data(); existingGrades[g.studentId] = g; });
    } catch (_) {}
  }

  function gradeLabel(v) { return v >= 90 ? 'O' : v >= 80 ? 'A+' : v >= 70 ? 'A' : v >= 60 ? 'B+' : v >= 50 ? 'B' : v >= 40 ? 'C' : 'F'; }
  function gradeBadge(v) { return v >= 70 ? 'bg' : v >= 50 ? 'ba' : 'br'; }

  mc().innerHTML = [
    hdr('Grades &amp; Marks',
      (t.subject || 'Subject') + ' · ' + t.branch,
      '<div style="display:flex;gap:7px;align-items:center">'
      + '<select class="ss" id="gradeSemSel" onchange="switchGradeSem(this.value)" style="font-size:12px">'
      + sems.map(sm => '<option value="' + sm + '"' + (sm === curSem ? ' selected' : '') + '>Sem ' + sm + '</option>').join('')
      + '</select>'
      + mkbtn('gold', 'Save All Marks', 'saveGrades()')
      + '</div>'),

    '<div class="tabs"><button class="tab-btn active" onclick="swTab(this,\'tg1\')">IA 1</button><button class="tab-btn" onclick="swTab(this,\'tg2\')">IA 2</button></div>',

    // IA1
    '<div id="tg1" class="tab-pane active">',
    cls.length === 0 ? '<div class="card" style="color:var(--tx3);text-align:center;padding:30px">No students in Sem ' + curSem + '</div>' :
    '<div class="card" style="padding:0;overflow:hidden"><div class="tbl-wrap"><table>'
    + '<thead><tr><th>USN</th><th>Name</th><th>Q1 /10</th><th>Q2 /10</th><th>Q3 /10</th><th>Total /30</th><th>Grade</th></tr></thead><tbody id="gradesBody1">'
    + cls.map(s => {
        const ex = existingGrades[s.id] || {};
        const q1 = ex.ia1_q1 !== undefined ? ex.ia1_q1 : (5 + s.name.length % 6);
        const q2 = ex.ia1_q2 !== undefined ? ex.ia1_q2 : (4 + s.id.length % 6);
        const q3 = ex.ia1_q3 !== undefined ? ex.ia1_q3 : (6 + s.branch.length % 5);
        const tot = q1 + q2 + q3;
        const pct = Math.round(tot / 30 * 100);
        return '<tr id="gr-' + s.id + '">'
          + '<td style="font-family:var(--fm);font-size:10.5px">' + (s.usn || s.id) + '</td>'
          + '<td style="white-space:nowrap">' + s.name + '</td>'
          + '<td><input class="fgi" type="number" min="0" max="10" value="' + q1 + '" style="width:54px;padding:4px 6px;text-align:center" id="ia1_q1_' + s.id + '" oninput="recomputeTotal(\'' + s.id + '\',1)"></td>'
          + '<td><input class="fgi" type="number" min="0" max="10" value="' + q2 + '" style="width:54px;padding:4px 6px;text-align:center" id="ia1_q2_' + s.id + '" oninput="recomputeTotal(\'' + s.id + '\',1)"></td>'
          + '<td><input class="fgi" type="number" min="0" max="10" value="' + q3 + '" style="width:54px;padding:4px 6px;text-align:center" id="ia1_q3_' + s.id + '" oninput="recomputeTotal(\'' + s.id + '\',1)"></td>'
          + '<td><strong id="ia1_tot_' + s.id + '">' + tot + '</strong></td>'
          + '<td><span class="badge ' + gradeBadge(pct) + '" id="ia1_grd_' + s.id + '">' + gradeLabel(pct) + '</span></td>'
          + '</tr>';
      }).join('')
    + '</tbody></table></div></div>',
    '</div>',

    // IA2
    '<div id="tg2" class="tab-pane">',
    cls.length === 0 ? '<div class="card" style="color:var(--tx3);text-align:center;padding:30px">No students in Sem ' + curSem + '</div>' :
    '<div class="card" style="padding:0;overflow:hidden"><div class="tbl-wrap"><table>'
    + '<thead><tr><th>USN</th><th>Name</th><th>Q1 /10</th><th>Q2 /10</th><th>Q3 /10</th><th>Total /30</th><th>Grade</th></tr></thead><tbody id="gradesBody2">'
    + cls.map(s => {
        const ex = existingGrades[s.id] || {};
        const q1 = ex.ia2_q1 !== undefined ? ex.ia2_q1 : 0;
        const q2 = ex.ia2_q2 !== undefined ? ex.ia2_q2 : 0;
        const q3 = ex.ia2_q3 !== undefined ? ex.ia2_q3 : 0;
        const tot = q1 + q2 + q3;
        return '<tr>'
          + '<td style="font-family:var(--fm);font-size:10.5px">' + (s.usn || s.id) + '</td>'
          + '<td style="white-space:nowrap">' + s.name + '</td>'
          + '<td><input class="fgi" type="number" min="0" max="10" value="' + q1 + '" style="width:54px;padding:4px 6px;text-align:center" id="ia2_q1_' + s.id + '" oninput="recomputeTotal(\'' + s.id + '\',2)"></td>'
          + '<td><input class="fgi" type="number" min="0" max="10" value="' + q2 + '" style="width:54px;padding:4px 6px;text-align:center" id="ia2_q2_' + s.id + '" oninput="recomputeTotal(\'' + s.id + '\',2)"></td>'
          + '<td><input class="fgi" type="number" min="0" max="10" value="' + q3 + '" style="width:54px;padding:4px 6px;text-align:center" id="ia2_q3_' + s.id + '" oninput="recomputeTotal(\'' + s.id + '\',2)"></td>'
          + '<td><strong id="ia2_tot_' + s.id + '">' + tot + '</strong></td>'
          + '<td><span class="badge ' + gradeBadge(Math.round(tot/30*100)) + '" id="ia2_grd_' + s.id + '">' + gradeLabel(Math.round(tot/30*100)) + '</span></td>'
          + '</tr>';
      }).join('')
    + '</tbody></table></div></div>',
    '</div>',
    window._gradesSaved ? '<div style="font-size:11px;color:var(--green);text-align:right;margin-top:6px">' + IC.check + ' Grades saved to ' + (fbMode === 'firebase' ? 'Firebase' : 'Demo') + '</div>' : ''
  ].join('');
  window._gradeCls = cls;
  window._gradesSaved = false;
}

function switchGradeSem(v) { window._gradeSem = parseInt(v); navigateTo('teacherGrades'); }

function recomputeTotal(stuId, ia) {
  function v(id) { const el = document.getElementById(id); return el ? Math.min(10, Math.max(0, parseInt(el.value) || 0)) : 0; }
  const q1 = v('ia' + ia + '_q1_' + stuId);
  const q2 = v('ia' + ia + '_q2_' + stuId);
  const q3 = v('ia' + ia + '_q3_' + stuId);
  const tot = q1 + q2 + q3;
  const pct = Math.round(tot / 30 * 100);
  function gradeLabel(v) { return v >= 90 ? 'O' : v >= 80 ? 'A+' : v >= 70 ? 'A' : v >= 60 ? 'B+' : v >= 50 ? 'B' : v >= 40 ? 'C' : 'F'; }
  function gradeBadge(v) { return v >= 70 ? 'bg' : v >= 50 ? 'ba' : 'br'; }
  const totEl = document.getElementById('ia' + ia + '_tot_' + stuId);
  const grdEl = document.getElementById('ia' + ia + '_grd_' + stuId);
  if (totEl) totEl.textContent = tot;
  if (grdEl) { grdEl.textContent = gradeLabel(pct); grdEl.className = 'badge ' + gradeBadge(pct); }
}

async function saveGrades() {
  const cls = window._gradeCls || [];
  const t = currentUser;
  const curSem = window._gradeSem || 5;
  if (cls.length === 0) { showToast('No students to save grades for', 'error'); return; }

  const saveBtn = document.querySelector('[onclick="saveGrades()"]');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving...'; }

  function v(id) { const el = document.getElementById(id); return el ? Math.min(10, Math.max(0, parseInt(el.value) || 0)) : 0; }

  const records = cls.map(s => ({
    id: 'grade_' + t.branch + '_sem' + curSem + '_' + (t.subject || 'Sub').replace(/\s+/g, '') + '_' + s.id,
    studentId: s.id, studentName: s.name,
    branch: t.branch, semester: curSem,
    subject: t.subject || 'Subject',
    ia1_q1: v('ia1_q1_' + s.id), ia1_q2: v('ia1_q2_' + s.id), ia1_q3: v('ia1_q3_' + s.id),
    ia2_q1: v('ia2_q1_' + s.id), ia2_q2: v('ia2_q2_' + s.id), ia2_q3: v('ia2_q3_' + s.id),
    markedBy: t.id, updatedAt: new Date().toISOString()
  }));

  try {
    if (fbMode === 'firebase') {
      const CHUNK = 400;
      for (let i = 0; i < records.length; i += CHUNK) {
        const batch = db.batch();
        records.slice(i, i + CHUNK).forEach(rec => batch.set(db.collection('grades').doc(rec.id), rec));
        await batch.commit();
      }
    } else {
      // Demo — just store in memory
      window._demoGrades = window._demoGrades || {};
      records.forEach(r => { window._demoGrades[r.id] = r; });
    }
    window._gradesSaved = true;
    showToast('Grades saved for ' + records.length + ' students', 'success');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = IC.check + ' Saved!'; setTimeout(() => { if (saveBtn) saveBtn.textContent = 'Save All Marks'; }, 2000); }
  } catch (e) {
    showToast('Save failed: ' + e.message, 'error');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save All Marks'; }
  }
}

async function teacherClassroom() {
  const t = currentUser;
  const classes = [
    { name: t.subject || 'Subject', code: 'GC-' + t.branch + '-5A', students: 42, col: '#1a73e8', pending: 3, sem: 5 },
    { name: 'Lab: ' + (t.subject || 'Lab'), code: 'GC-' + t.branch + '-LAB', students: 20, col: '#34a853', pending: 1, sem: 5 }
  ];

  mc().innerHTML = [
    hdr('Google Classroom', 'Manage virtual classrooms for ' + t.branch),
    '<div id="announceForm" style="display:none"></div>',
    classes.map((c, i) =>
      '<div class="gc-card">'
      + '<div class="gc-ico" style="background:' + c.col + '18;color:' + c.col + '">' + IC.classroom + '</div>'
      + '<div style="flex:1">'
      + '<div class="gc-name">' + c.name + '</div>'
      + '<div class="gc-code">Code: ' + c.code + ' · Sem ' + c.sem + ' · ' + c.students + ' students</div>'
      + '<div class="gc-meta">' + (c.pending > 0 ? c.pending + ' pending submissions' : 'All up to date') + '</div>'
      + '</div>'
      + '<div style="display:flex;gap:6px">'
      + '<button class="btn btn-gold" onclick="showAnnounceForm(\'' + c.code + '\',\'' + c.name + '\')">' + IC.notices + ' Announce</button>'
      + '<button class="btn btn-green" onclick="window.open(\'https://classroom.google.com\',\'_blank\')">' + IC.classroom + ' Open</button>'
      + '</div></div>'
    ).join(''),
    '<div class="card" style="margin-top:4px"><div class="card-hd"><span class="card-title">Recent Activity</span></div>',
    '<div class="tbl-wrap"><table><thead><tr><th>Student</th><th>Assignment</th><th>Submitted</th><th>Status</th></tr></thead><tbody>',
    [['Priya Sharma', 'Lab Report 3', '2 hrs ago', 'bg'],['Rohan Reddy', 'Assignment 2', '5 hrs ago', 'bg'],['Ananya Kumar', 'Lab Report 3', 'Not submitted', 'br'],['Kiran Singh', 'Assignment 2', '1 day ago', 'bg'],['Divya Nair', 'Lab Report 3', 'Not submitted', 'br']].map(([n,a,t2,cls]) =>
      '<tr><td>' + n + '</td><td style="color:var(--tx2)">' + a + '</td><td style="font-size:11px;color:var(--tx3)">' + t2 + '</td><td><span class="badge ' + cls + '">' + (cls==='bg'?'Submitted':'Pending') + '</span></td></tr>'
    ).join(''),
    '</tbody></table></div></div>'
  ].join('');
}

function showAnnounceForm(code, name) {
  const f = document.getElementById('announceForm');
  if (!f) return;
  const show = f.style.display === 'none';
  f.style.display = show ? 'block' : 'none';
  if (!show) return;
  f.innerHTML = [
    '<div class="card" style="border:1px solid var(--gold);margin-bottom:14px">',
    '<div class="card-hd"><span class="card-title">Post Announcement — ' + name + '</span>',
    '<button class="btn btn-sec" style="padding:4px 10px;font-size:11px" onclick="document.getElementById(\'announceForm\').style.display=\'none\'">Cancel</button></div>',
    '<div class="fg"><label>Announcement</label><textarea class="fgt" id="ann_text" placeholder="Type your announcement..." style="min-height:80px"></textarea></div>',
    '<div class="form-2">',
    '<div class="fg"><label>Type</label><select class="fgs" id="ann_type"><option>General</option><option>Assignment</option><option>Exam</option><option>Holiday</option></select></div>',
    '<div class="fg"><label>Due Date (if assignment)</label><input class="fgi" type="date" id="ann_due"></div>',
    '</div>',
    mkbtn('gold', IC.send + ' Post Announcement', 'postAnnouncement(\'' + code + '\')'),
    '</div>'
  ].join('');
}

async function postAnnouncement(code) {
  const text = (document.getElementById('ann_text') || {}).value.trim();
  const type = (document.getElementById('ann_type') || {}).value || 'General';
  const due  = (document.getElementById('ann_due')  || {}).value || '';
  if (!text) { showToast('Please enter announcement text', 'error'); return; }

  const ann = {
    id: 'ANN' + Date.now(), classCode: code,
    teacherId: currentUser.id, teacherName: currentUser.name,
    text, type, due, postedAt: new Date().toISOString()
  };

  try {
    if (fbMode === 'firebase') await dbSet('announcements', ann.id, ann);
    else { window._demoAnn = window._demoAnn || {}; window._demoAnn[ann.id] = ann; }
    showToast('Announcement posted to ' + code, 'success');
    document.getElementById('announceForm').style.display = 'none';
  } catch (e) { showToast('Post failed: ' + e.message, 'error'); }
}
async function teacherTimetable() {
  mc().innerHTML = '<div class="spinner"></div>';
  const t = currentUser;
  const slots = await loadTT(t.branch, t.semester || 1, t.section || 'A')
             || defaultSlots(t.branch);
  mc().innerHTML = hdr('My Timetable', t.branch + ' · Sem ' + (t.semester||1) + ' · Sec ' + (t.section||'A'))
    + '<div class="card" style="padding:0;overflow:hidden">' + renderTTView(slots, t.id) + '</div>';
}
async function teacherNotices() { return adminNotices(); }

// ── STUDENT PAGES ────────────────────────────────
async function studentDash() {
  const s = currentUser;
  const subs = SUBJ[s.branch] || [];

  // Load face if registered
  let faceImg = null;
  if (fbMode === 'firebase' && s.faceId) {
    try { const fd = await dbGet('faces', s.faceId); faceImg = fd ? fd.imageData : null; } catch (_) {}
  } else if (fbMode !== 'firebase') {
    const fd = DEMO.faces['student_' + s.id]; faceImg = fd ? fd.imageData : null;
  }

  const avatarHtml = faceImg
    ? '<img src="' + faceImg + '" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%">'
    : '<span style="font-size:18px;font-weight:700;color:#060d1f">' + s.name[0] + '</span>';

  mc().innerHTML = [
    hdr('Student Portal', s.name + ' · ' + s.branch + ' Semester ' + s.semester + ' Section ' + (s.section || 'A')),
    '<div class="stat-grid">',
    scard((s.attendance || 75) >= 75 ? 'sc-green' : 'sc-red', 'Attendance', (s.attendance || 75) + '%', (s.attendance || 75) >= 75 ? 'Eligible' : 'Below 75%'),
    scard('sc-gold', 'CGPA', s.cgpa || '—', 'Out of 10.0'),
    scard('sc-blue', 'Semester', s.semester, s.branch),
    scard(s.feeStatus === 'Paid' ? 'sc-green' : 'sc-red', 'Fee Status', s.feeStatus || '—', ''),
    '</div>',
    '<div style="display:grid;grid-template-columns:2fr 1fr;gap:16px">',
    '<div class="card"><div class="card-hd"><span class="card-title">Subject Performance</span></div>',
    subs.map((sub, i) => {
      const pct = 55 + (((s.usn || '').length + i * 7) % 43);
      return '<div style="margin-bottom:11px"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:12px">' + sub + '</span><span style="font-size:11px;font-weight:600;color:' + (pct >= 75 ? 'var(--green)' : 'var(--amber)') + '">' + pct + '%</span></div><div class="pw"><div class="pb ' + (pct >= 75 ? 'pb-green' : 'pb-blue') + '" style="width:' + pct + '%"></div></div></div>';
    }).join('') + '</div>',
    '<div>',
    '<div class="card" style="margin-bottom:14px"><div class="card-hd"><span class="card-title">Profile</span></div>',
    '<div style="text-align:center;margin:10px 0"><div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold2));display:flex;align-items:center;justify-content:center;margin:0 auto;overflow:hidden;border:2px solid var(--gold)">' + avatarHtml + '</div>',
    faceImg ? '<div style="font-size:9.5px;color:var(--green);margin-top:5px">' + IC.check + ' Biometric enrolled</div>' : '<div style="font-size:9.5px;color:var(--tx3);margin-top:5px">No biometric</div>',
    '</div>',
    [['USN', s.usn || s.id], ['Branch', s.branch], ['Section', s.section || 'A'], ['City', s.city || '—']].map(([k, v]) => '<div class="ir"><span class="ir-k">' + k + '</span><span class="ir-v">' + v + '</span></div>').join(''),
    '</div>',
    '<div class="card"><div class="card-hd"><span class="card-title">Quick Access</span></div><div style="display:grid;gap:5px">',
    [['ai', 'AI Doubt Solver', 'studentAI'], ['attendance', 'Attendance', 'studentAttendance'], ['docs', 'Request Document', 'studentDocReq'], ['grades', 'My Grades', 'studentGrades']].map(q => '<button class="btn btn-gold" style="justify-content:flex-start;padding:8px 11px;font-size:11.5px" onclick="navigateTo(\'' + q[2] + '\')">' + (IC[q[0]] || '') + ' ' + q[1] + '</button>').join(''),
    '</div></div></div></div>'
  ].join('');
}

async function studentAttendance() {
  const s   = currentUser;
  mc().innerHTML = '<div class="spinner"></div>';

  // Load real attendance records from Firestore
  let records = [];
  if (fbMode === 'firebase') {
    try {
      const snap = await db.collection('attendance')
        .where('studentId', '==', s.id).get();
      records = snap.docs.map(d => d.data());
    } catch (e) { console.warn('attendance load:', e.message); }
  }

  // Build per-subject stats from real records
  const subjects   = SUBJ[s.branch] || [];
  const subStats   = {};
  subjects.forEach(sub => { subStats[sub] = { held: 0, present: 0 }; });
  records.forEach(r => {
    if (subStats[r.subject]) {
      subStats[r.subject].held++;
      if (r.present) subStats[r.subject].present++;
    }
  });

  const hasReal = records.length > 0;
  const overallAtt = s.attendance || 75;

  // Build calendar from real records for current month
  const now       = new Date();
  const monthName = now.toLocaleString('en-IN', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const monthStr  = now.toISOString().slice(0, 7); // "2026-03"

  // Map date → status from real records
  const dayMap = {};
  records.forEach(r => {
    if (r.date && r.date.startsWith(monthStr)) {
      const day = parseInt(r.date.split('-')[2]);
      if (!dayMap[day]) dayMap[day] = { present: 0, total: 0 };
      dayMap[day].total++;
      if (r.present) dayMap[day].present++;
    }
  });

  // Build calendar days
  const calDays = Array.from({ length: daysInMonth }, (_, i) => {
    const d   = i + 1;
    const dow = new Date(now.getFullYear(), now.getMonth(), d).getDay();
    if (dow === 0) return { d, cls: 'holiday', label: 'Sun' };
    if (dayMap[d]) return { d, cls: dayMap[d].present > 0 ? 'present' : 'absent', label: String(d) };
    if (d > now.getDate()) return { d, cls: 'holiday', label: String(d) }; // future
    if (!hasReal) {
      // Fallback: derive from overall %
      const r = ((d * 7 + 3) % 100);
      return { d, cls: r < overallAtt ? 'present' : r < overallAtt + 10 ? 'medical' : 'absent', label: String(d) };
    }
    return { d, cls: 'holiday', label: String(d) }; // no record = no class
  });

  const presentDays = calDays.filter(x => x.cls === 'present').length;
  const absentDays  = calDays.filter(x => x.cls === 'absent').length;
  const medDays     = calDays.filter(x => x.cls === 'medical').length;

  mc().innerHTML = [
    hdr('Attendance Record', s.branch + ' · Sem ' + s.semester + (hasReal ? ' · Live from Firebase' : ' · Estimated')),
    hasReal ? '' : '<div style="padding:8px 12px;background:var(--abd);border-radius:5px;font-size:11.5px;color:var(--amber);margin-bottom:12px">⚠ No attendance records found in Firebase — showing estimated data based on your overall %</div>',

    '<div class="stat-grid">',
    scard(overallAtt >= 75 ? 'sc-green' : 'sc-red', 'Overall', overallAtt + '%', overallAtt >= 75 ? 'Eligible for exams' : 'Below minimum'),
    scard('sc-green', 'Present', presentDays, monthName.split(' ')[0]),
    scard('sc-red',   'Absent',  absentDays,  monthName.split(' ')[0]),
    scard('sc-gold',  'Medical', medDays,     'With application'),
    '</div>',

    // Calendar
    '<div class="card"><div class="card-hd"><span class="card-title">' + monthName + '</span>',
    '<div style="display:flex;gap:9px;font-size:11px">',
    [['Present','var(--green)'],['Absent','var(--red)'],['Medical','var(--amber)'],['Holiday/No class','var(--tx3)']].map(([l,c]) => '<span><span style="color:' + c + '">■</span> ' + l + '</span>').join(''),
    '</div></div>',
    // Weekday headers
    '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:6px">',
    ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => '<div style="text-align:center;font-size:10px;color:var(--tx3);font-weight:600;padding:4px">' + d + '</div>').join(''),
    '</div>',
    // Offset start day
    '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px">',
    (() => {
      const firstDow = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
      const cells = [];
      for (let i = 0; i < firstDow; i++) cells.push('<div></div>');
      calDays.forEach(({ d, cls }) => {
        cells.push('<div class="att-day ' + cls + '" style="font-size:11px">' + d + '</div>');
      });
      return cells.join('');
    })(),
    '</div></div>',

    // Subject-wise table
    '<div class="card"><div class="card-hd"><span class="card-title">Subject-wise Attendance</span></div>',
    '<div class="tbl-wrap"><table><thead><tr><th>Subject</th><th>Classes Held</th><th>Attended</th><th>Percentage</th><th>Status</th></tr></thead><tbody>',
    subjects.map(sub => {
      const stat  = subStats[sub];
      const held  = hasReal ? stat.held    : 22 + (sub.length % 6);
      const pres  = hasReal ? stat.present : Math.round(held * overallAtt / 100);
      const pct   = held > 0 ? Math.round((pres / held) * 100) : overallAtt;
      return '<tr><td>' + sub + '</td><td>' + held + '</td><td>' + pres + '</td>'
        + '<td><div style="display:flex;align-items:center;gap:7px">'
        + '<div class="pw" style="width:60px"><div class="pb ' + (pct >= 75 ? 'pb-green' : 'pb-red') + '" style="width:' + pct + '%"></div></div>'
        + '<span style="color:' + (pct >= 75 ? 'var(--green)' : 'var(--red)') + ';font-weight:600">' + pct + '%</span></div></td>'
        + '<td><span class="badge ' + (pct >= 75 ? 'bg' : 'br') + '">' + (pct >= 75 ? 'Eligible' : 'Detained') + '</span></td></tr>';
    }).join(''),
    '</tbody></table></div></div>'
  ].join('');
}

async function studentGrades() {
  const s = currentUser;
  mc().innerHTML = '<div class="spinner"></div>';

  // Try to load real grades from Firestore
  let gradeMap = {};
  if (fbMode === 'firebase') {
    try {
      const snap = await db.collection('grades')
        .where('studentId', '==', s.id).get();
      snap.docs.forEach(d => {
        const g = d.data();
        gradeMap[g.subject] = g;
      });
    } catch (_) {}
  } else if (window._demoGrades) {
    Object.values(window._demoGrades)
      .filter(g => g.studentId === s.id)
      .forEach(g => { gradeMap[g.subject] = g; });
  }

  const hasRealGrades = Object.keys(gradeMap).length > 0;

  function gradeLabel(pct) { return pct >= 90 ? 'O' : pct >= 80 ? 'A+' : pct >= 70 ? 'A' : pct >= 60 ? 'B+' : pct >= 55 ? 'B' : pct >= 40 ? 'C' : 'F'; }
  function gradeBadge(pct) { return pct >= 70 ? 'bg' : pct >= 55 ? 'ba' : 'br'; }

  const rows = (SUBJ[s.branch] || []).map((sub, i) => {
    const real = gradeMap[sub];
    let ia1, ia2, ia, see, fin, g, badge;
    if (real) {
      ia1 = (real.ia1_q1||0) + (real.ia1_q2||0) + (real.ia1_q3||0);
      ia2 = (real.ia2_q1||0) + (real.ia2_q2||0) + (real.ia2_q3||0);
      ia  = Math.max(ia1, ia2); // VTU takes best of two IAs
      see = 55 + (i * 11 + parseFloat(s.cgpa || 7) * 5) % 45; // SEE not yet available
      fin = Math.round(ia / 30 * 50 + see / 100 * 50);
      const pct = fin;
      g = gradeLabel(pct); badge = gradeBadge(pct);
    } else {
      // Fallback demo values
      ia1 = 15 + (i * 3 + (s.usn||'').length) % 15;
      ia2 = 14 + (i * 5 + 7) % 16;
      ia  = Math.round((ia1 + ia2) / 2);
      see = 55 + (i * 11 + parseFloat(s.cgpa || 7) * 5) % 45;
      fin = Math.round(ia / 30 * 50 + see / 100 * 50);
      g = gradeLabel(fin); badge = gradeBadge(fin);
    }
    return '<tr>'
      + '<td>' + sub + (real ? '' : ' <span style="font-size:9px;color:var(--tx3)">(est.)</span>') + '</td>'
      + '<td style="font-family:var(--fm)">' + (real ? ia1 : ia1) + '/30</td>'
      + '<td style="font-family:var(--fm)">' + (real ? ia2 : ia2) + '/30</td>'
      + '<td style="font-weight:600;font-family:var(--fm)">' + ia + '/30</td>'
      + '<td>' + see + '/100</td>'
      + '<td style="font-weight:700;font-size:13px">' + fin + '</td>'
      + '<td><span class="badge ' + badge + '">' + g + '</span></td>'
      + '</tr>';
  });

  mc().innerHTML = [
    hdr('Grades &amp; Results', 'CGPA: ' + (s.cgpa || '—') + (hasRealGrades ? ' · Real grades loaded ✓' : ' · Estimated grades')),
    hasRealGrades ? '' : '<div style="padding:8px 12px;background:var(--abd);border-radius:5px;font-size:11.5px;color:var(--amber);margin-bottom:12px">⚠ Grades not yet entered by teacher — showing estimated values</div>',
    '<div class="tabs"><button class="tab-btn active" onclick="swTab(this,\'sg1\')">Current Sem</button><button class="tab-btn" onclick="swTab(this,\'sg2\')">Backlogs</button></div>',
    '<div id="sg1" class="tab-pane active">',
    '<div class="card" style="padding:0;overflow:hidden"><div class="tbl-wrap"><table>',
    '<thead><tr><th>Subject</th><th>IA 1</th><th>IA 2</th><th>Best IA</th><th>SEE /100</th><th>Final</th><th>Grade</th></tr></thead><tbody>',
    rows.join(''),
    '</tbody></table></div></div>',
    '<div class="card"><div style="display:flex;gap:11px;flex-wrap:wrap">',
    [{ l: 'SGPA', v: s.cgpa || '—', c: 'var(--gold)' }, { l: 'Backlogs', v: 0, c: 'var(--green)' }, { l: 'Standing', v: parseFloat(s.cgpa||0) >= 8 ? 'Distinction' : parseFloat(s.cgpa||0) >= 6 ? 'First Class' : 'Pass', c: 'var(--blue2)' }].map(x =>
      '<div style="text-align:center;padding:13px 20px;background:var(--sf2);border-radius:4px"><div style="font-family:var(--fd);font-size:22px;font-weight:700;color:' + x.c + '">' + x.v + '</div><div style="font-size:9.5px;color:var(--tx3);margin-top:2px">' + x.l + '</div></div>'
    ).join(''),
    '</div></div></div>',
    '<div id="sg2" class="tab-pane"><div class="card" style="text-align:center;padding:38px"><div style="color:var(--green);font-weight:600;margin-bottom:5px">' + IC.check + ' No Active Backlogs</div><div style="font-size:11px;color:var(--tx3)">All subjects cleared</div></div></div>'
  ].join('');
}

// ── AI DOUBT SOLVER ──────────────────────────────
// ── GROQ AI CONFIGURATION ──────────────────────────────────────────────────
// ▼▼▼ PASTE YOUR GROQ API KEY HERE ▼▼▼
// ─────────────────────────────────────────────────────────────────────────────
// GROQ API KEY
// ─────────────────────────────────────────────────────────────────────────────
// Get a free key at: https://console.groq.com/keys
// Paste it below between the single quotes
// ─────────────────────────────────────────────────────────────────────────────
const GROQ_API_KEY = 'YOUR_GROQ_API_KEY_HERE';
// ▲▲▲ Get a free key at: https://console.groq.com → API Keys ▲▲▲
// Free tier: 14,400 req/day · 30 req/min · Models listed below

const GROQ_MODELS = [
  { id: 'llama-3.3-70b-versatile',    label: 'Llama 3.3 70B',  note: 'Best quality'  },
  { id: 'llama-3.1-8b-instant',       label: 'Llama 3.1 8B',   note: 'Fastest'       },
  { id: 'mixtral-8x7b-32768',         label: 'Mixtral 8x7B',   note: 'Long context'  },
  { id: 'llama3-70b-8192',            label: 'Llama 3 70B',    note: 'Stable'        },
];

// ── CHAT SESSION STATE ─────────────────────────────────────────────────────
// _chatHistory  : array of {role, text, html} for current session
// _activeChatId : Firestore doc ID of the current saved chat (null = unsaved)
// _groqModel    : currently selected model id

async function studentAI() {
  if (!window._chatHistory)  window._chatHistory  = [];
  if (!window._groqModel)    window._groqModel    = GROQ_MODELS[0].id;
  if (!window._activeChatId) window._activeChatId = null;

  // Load saved chats list for sidebar
  const savedChats = await loadSavedChats();

  const welcomeMsg = window._chatHistory.length === 0
    ? '<div class="c-msg bot"><div class="c-av bot">' + IC.ai + '</div><div class="c-bub">Hello! I\'m your CampusAsthra AI Assistant, powered by <strong>Groq</strong>. I specialise in VTU engineering subjects — concepts, exam prep, code explanations, and career guidance. What would you like to learn today?</div></div>'
    : window._chatHistory.map(m =>
        '<div class="c-msg ' + m.role + '">'
        + '<div class="c-av ' + m.role + '">' + (m.role === 'bot' ? IC.ai : IC.face) + '</div>'
        + '<div class="c-bub">' + m.html + '</div></div>'
      ).join('');

  mc().innerHTML = [
    hdr('AI Doubt Solver', 'Powered by Groq — Fast inference, free tier'),

    // ── 3-column layout: saved chats | chat window | context ──
    '<div style="display:grid;grid-template-columns:220px 1fr 200px;gap:14px;align-items:start">',

    // ── Col 1: Saved chats sidebar ──
    '<div>',
    '<div class="card" style="padding:12px">',
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:9px">',
    '<span style="font-size:11px;font-weight:600;color:var(--tx2);letter-spacing:.6px;text-transform:uppercase">Saved Chats</span>',
    '<button class="btn btn-gold" style="padding:3px 8px;font-size:10.5px" onclick="newChat()">' + IC.plus + ' New</button>',
    '</div>',
    '<div id="savedChatsList" style="max-height:420px;overflow-y:auto">',
    renderSavedChatsList(savedChats),
    '</div>',
    '</div>',
    '</div>',

    // ── Col 2: Chat window ──
    '<div class="card" style="padding:12px">',
    // Quick chips
    '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px">',
    ['Data Structures', 'DBMS & SQL', 'OS Concepts', 'Algorithms', 'CN Protocols', 'ML Basics', 'VTU Exam Tips', 'CGPA Calculator'].map(q => '<button class="qchip" onclick="sendQ(\'' + q + '\')">' + q + '</button>').join(''),
    '</div>',
    // Model selector bar
    '<div style="display:flex;align-items:center;gap:7px;margin-bottom:8px;padding:6px 10px;background:var(--sf2);border-radius:var(--r2);flex-wrap:wrap">',
    '<span style="font-size:10px;color:var(--tx3);font-weight:600;letter-spacing:.5px">MODEL</span>',
    GROQ_MODELS.map(m =>
      '<button class="btn ' + (window._groqModel === m.id ? 'btn-gold' : 'btn-sec') + '" '
      + 'style="padding:3px 9px;font-size:10.5px" onclick="selectModel(\'' + m.id + '\')" title="' + m.note + '">'
      + m.label + '</button>'
    ).join(''),
    // Active chat title
    window._activeChatId
      ? '<span style="margin-left:auto;font-size:10px;color:var(--tx3)">📂 ' + (window._activeChatTitle || 'Saved chat') + '</span>'
      : '<span style="margin-left:auto;font-size:10px;color:var(--amber)">● Unsaved</span>',
    '</div>',
    // Messages
    '<div class="chat-win" id="chatWin">' + welcomeMsg + '</div>',
    // Input row
    '<div class="c-inp-row" style="margin-top:8px">',
    '<input class="c-inp" id="chatInp" placeholder="Ask any VTU / engineering question... (Enter to send)" onkeypress="if(event.key===\'Enter\'&&!event.shiftKey){event.preventDefault();sendChat()}">',
    '<button class="c-send" onclick="sendChat()" title="Send">' + IC.send + '</button>',
    '<button class="btn btn-gold" onclick="saveCurrentChat()" style="padding:9px 11px;font-size:11px" title="Save chat">💾</button>',
    '<button class="btn btn-sec" onclick="newChat()" style="padding:9px 11px;font-size:11px" title="New chat">' + IC.plus + '</button>',
    '</div>',
    '</div>',

    // ── Col 3: Context + capabilities ──
    '<div>',
    '<div class="card" style="padding:12px;margin-bottom:10px"><div style="font-size:11px;font-weight:600;color:var(--tx);margin-bottom:8px">Your Context</div>',
    [['Branch', currentUser.branch], ['Semester', currentUser.semester], ['CGPA', currentUser.cgpa || '—']].map(([k, v]) => '<div class="ir"><span class="ir-k">' + k + '</span><span class="ir-v">' + v + '</span></div>').join(''),
    '</div>',
    '<div class="card" style="padding:12px"><div style="font-size:11px;font-weight:600;color:var(--tx);margin-bottom:8px">Capabilities</div>',
    ['VTU syllabus & exam tips', 'Code debug & explain', 'Numericals & formulae', 'Career guidance', 'Previous year patterns', 'Concepts (all branches)'].map(c => '<div style="font-size:11px;color:var(--tx2);display:flex;align-items:center;gap:5px;margin-bottom:4px">' + IC.check + ' ' + c + '</div>').join(''),
    '</div>',
    '</div>',

    '</div>' // end 3-col grid
  ].join('');

  const win = document.getElementById('chatWin');
  if (win) win.scrollTop = win.scrollHeight;
}

// ── MODEL SELECTION ─────────────────────────────
function selectModel(modelId) {
  window._groqModel = modelId;
  navigateTo('studentAI');
}

// ── SAVED CHATS: LOAD / RENDER ──────────────────
async function loadSavedChats() {
  if (fbMode === 'firebase') {
    try {
      // Simple query without orderBy — avoids needing a composite index
      const snap = await db.collection('chats')
        .where('studentId', '==', currentUser.id)
        .limit(50).get();
      const chats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // Sort client-side by updatedAt descending
      return chats.sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));
    } catch (e) {
      console.warn('loadSavedChats error:', e.message);
      return [];
    }
  } else {
    return Object.values(window._demoChats || {})
      .filter(c => c.studentId === currentUser.id)
      .sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));
  }
}

function renderSavedChatsList(chats) {
  if (!chats || chats.length === 0) {
    return '<div style="font-size:11px;color:var(--tx3);text-align:center;padding:20px 0">No saved chats yet.<br>Start chatting and hit 💾 to save.</div>';
  }
  return chats.map(c => {
    const isActive = c.id === window._activeChatId;
    const date = c.updatedAt ? new Date(c.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '';
    return '<div style="padding:8px 9px;border-radius:5px;margin-bottom:4px;cursor:pointer;background:' + (isActive ? 'var(--gd)' : 'var(--sf2)') + ';border:1px solid ' + (isActive ? 'rgba(201,167,74,.3)' : 'var(--bd)') + ';position:relative" onclick="loadChat(\'' + c.id + '\')">'
      + '<div style="font-size:11.5px;font-weight:' + (isActive ? '600' : '500') + ';color:' + (isActive ? 'var(--gold)' : 'var(--tx)') + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px">' + (c.title || 'Chat') + '</div>'
      + '<div style="font-size:10px;color:var(--tx3);margin-top:2px;display:flex;justify-content:space-between;align-items:center">'
      + '<span>' + date + ' · ' + (c.messageCount || 0) + ' msgs</span>'
      + '<button onclick="event.stopPropagation();deleteChat(\'' + c.id + '\')" style="background:none;border:none;color:var(--tx3);cursor:pointer;font-size:11px;padding:0 2px" title="Delete">✕</button>'
      + '</div></div>';
  }).join('');
}

// ── NEW CHAT ────────────────────────────────────
function newChat() {
  window._chatHistory  = [];
  window._activeChatId = null;
  window._activeChatTitle = null;
  navigateTo('studentAI');
}

// ── SAVE CURRENT CHAT ───────────────────────────
async function saveCurrentChat() {
  if (!window._chatHistory || window._chatHistory.length === 0) {
    showToast('Nothing to save — start a conversation first', 'error'); return;
  }

  // Auto-title from first user message
  const firstUser = window._chatHistory.find(m => m.role === 'user');
  const autoTitle = firstUser ? firstUser.text.slice(0, 45) + (firstUser.text.length > 45 ? '…' : '') : 'Chat';

  // Prompt for a custom title
  const title = prompt('Save chat as:', window._activeChatTitle || autoTitle);
  if (title === null) return; // cancelled

  const chatDoc = {
    studentId:    currentUser.id,
    studentName:  currentUser.name,
    title:        title || autoTitle,
    messages:     window._chatHistory.map(m => ({ role: m.role, text: m.text, html: m.html })),
    messageCount: window._chatHistory.length,
    model:        window._groqModel || GROQ_MODELS[0].id,
    branch:       currentUser.branch,
    semester:     currentUser.semester,
    updatedAt:    new Date().toISOString(),
    createdAt:    window._activeChatId ? undefined : new Date().toISOString()
  };
  // Remove undefined fields
  Object.keys(chatDoc).forEach(k => chatDoc[k] === undefined && delete chatDoc[k]);

  try {
    if (fbMode === 'firebase') {
      if (window._activeChatId) {
        await dbSet('chats', window._activeChatId, chatDoc);
      } else {
        const ref = await db.collection('chats').add(chatDoc);
        window._activeChatId = ref.id;
      }
    } else {
      window._demoChats = window._demoChats || {};
      if (!window._activeChatId) window._activeChatId = 'demo_chat_' + Date.now();
      chatDoc.id = window._activeChatId;
      window._demoChats[window._activeChatId] = chatDoc;
    }
    window._activeChatTitle = chatDoc.title;
    showToast('Chat saved: ' + chatDoc.title, 'success');
    navigateTo('studentAI');
  } catch (e) {
    showToast('Save failed: ' + e.message, 'error');
  }
}

// ── LOAD A SAVED CHAT ───────────────────────────
async function loadChat(chatId) {
  try {
    let chatDoc;
    if (fbMode === 'firebase') {
      const snap = await db.collection('chats').doc(chatId).get();
      if (!snap.exists) { showToast('Chat not found', 'error'); return; }
      chatDoc = { id: snap.id, ...snap.data() };
    } else {
      chatDoc = (window._demoChats || {})[chatId];
      if (!chatDoc) { showToast('Chat not found', 'error'); return; }
    }
    window._chatHistory  = (chatDoc.messages || []).map(m => ({ role: m.role, text: m.text, html: m.html }));
    window._activeChatId = chatId;
    window._activeChatTitle = chatDoc.title;
    if (chatDoc.model) window._groqModel = chatDoc.model;
    navigateTo('studentAI');
    showToast('Loaded: ' + chatDoc.title, 'info');
  } catch (e) {
    showToast('Load failed: ' + e.message, 'error');
  }
}

// ── DELETE A SAVED CHAT ─────────────────────────
async function deleteChat(chatId) {
  if (!confirm('Delete this saved chat?')) return;
  try {
    if (fbMode === 'firebase') await dbDel('chats', chatId);
    else { delete (window._demoChats || {})[chatId]; }
    if (window._activeChatId === chatId) {
      window._chatHistory  = [];
      window._activeChatId = null;
      window._activeChatTitle = null;
    }
    showToast('Chat deleted', 'info');
    navigateTo('studentAI');
  } catch (e) {
    showToast('Delete failed: ' + e.message, 'error');
  }
}

// ── CLEAR CURRENT SESSION ───────────────────────
function clearChat() {
  window._chatHistory  = [];
  window._activeChatId = null;
  window._activeChatTitle = null;
  navigateTo('studentAI');
}

// ── SEND MESSAGE TO GROQ ────────────────────────
async function sendChat() {
  const inp = document.getElementById('chatInp'); if (!inp) return;
  const msg = inp.value.trim(); if (!msg) return;

  if (!GROQ_API_KEY || GROQ_API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
    showToast('Paste your Groq API key in app.js (GROQ_API_KEY)', 'error');
    return;
  }

  inp.value = ''; inp.disabled = true;
  const win = document.getElementById('chatWin'); if (!win) return;

  const userHtml = msg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  win.innerHTML += '<div class="c-msg user"><div class="c-av user">' + IC.face + '</div><div class="c-bub">' + userHtml + '</div></div>';
  win.innerHTML += '<div class="c-msg bot" id="typingMsg"><div class="c-av bot">' + IC.ai + '</div><div class="c-bub"><div style="display:flex;gap:4px;align-items:center;padding:2px"><div class="td"></div><div class="td"></div><div class="td"></div></div></div></div>';
  win.scrollTop = win.scrollHeight;

  // Build messages array for Groq (OpenAI-compatible format)
  window._chatHistory = window._chatHistory || [];
  const systemPrompt = 'You are an expert academic assistant for CampusAsthra, affiliated with VTU Belagavi, Karnataka, India. The student is in '
    + currentUser.branch + ' branch, semester ' + currentUser.semester + ', CGPA ' + (currentUser.cgpa || 'N/A')
    + '. Help with engineering concepts, VTU exam prep, coding, DBMS, OS, algorithms, networking, machine learning, and career guidance.'
    + ' Be concise, structured, and student-friendly. Use bullet points. Mention VTU-specific context when relevant.'
    + ' For code, use markdown code blocks.';

  const apiMessages = [{ role: 'system', content: systemPrompt }];
  window._chatHistory.forEach(m => {
    apiMessages.push({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text });
  });
  apiMessages.push({ role: 'user', content: msg });

  const model = window._groqModel || GROQ_MODELS[0].id;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + GROQ_API_KEY
      },
      body: JSON.stringify({
        model,
        messages: apiMessages,
        max_tokens: 1024,
        temperature: 0.7
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error((err.error && err.error.message) || 'Groq API error ' + res.status);
    }

    const data = await res.json();
    const text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || 'No response.';

    // Rich HTML rendering: bold, inline code, code blocks, bullet points
    const html = text
      .replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) =>
        '<pre style="background:var(--bg2);border:1px solid var(--bd);border-radius:5px;padding:10px 12px;margin:6px 0;overflow-x:auto;font-family:var(--fm);font-size:11px;line-height:1.6">'
        + (lang ? '<div style="font-size:9px;color:var(--tx3);margin-bottom:6px;letter-spacing:.5px">' + lang.toUpperCase() + '</div>' : '')
        + code.trim() + '</pre>')
      .replace(/`([^`]+)`/g, '<code style="background:var(--sf2);padding:1px 5px;border-radius:3px;font-family:var(--fm);font-size:11px">$1</code>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^#{1,3} (.+)$/gm, '<div style="font-weight:700;font-size:13px;color:var(--tx);margin:8px 0 4px">$1</div>')
      .replace(/^[-•] (.+)$/gm, '<div style="display:flex;gap:6px;margin:2px 0"><span style="color:var(--gold);flex-shrink:0">•</span><span>$1</span></div>')
      .replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');

    const t = document.getElementById('typingMsg'); if (t) t.remove();
    win.innerHTML += '<div class="c-msg bot"><div class="c-av bot">' + IC.ai + '</div><div class="c-bub">' + html + '</div></div>';

    // Save turns to in-memory history
    window._chatHistory.push({ role: 'user', text: msg, html: userHtml });
    window._chatHistory.push({ role: 'bot', text, html });
    // Cap at 30 turns (60 messages)
    if (window._chatHistory.length > 60) window._chatHistory = window._chatHistory.slice(-60);

    // Auto-save if there's an active saved chat
    if (window._activeChatId) {
      const chatDoc = {
        studentId: currentUser.id, studentName: currentUser.name,
        title: window._activeChatTitle || msg.slice(0, 45),
        messages: window._chatHistory.map(m => ({ role: m.role, text: m.text, html: m.html })),
        messageCount: window._chatHistory.length,
        model, branch: currentUser.branch, semester: currentUser.semester,
        updatedAt: new Date().toISOString()
      };
      if (fbMode === 'firebase') dbSet('chats', window._activeChatId, chatDoc).catch(() => {});
      else { window._demoChats = window._demoChats || {}; window._demoChats[window._activeChatId] = { ...chatDoc, id: window._activeChatId }; }
    }

  } catch (e) {
    const t = document.getElementById('typingMsg'); if (t) t.remove();
    win.innerHTML += '<div class="c-msg bot"><div class="c-av bot">' + IC.ai + '</div><div class="c-bub" style="color:var(--red)"><strong>Error:</strong> ' + e.message + '<br><span style="font-size:10.5px;color:var(--tx3)">Check your Groq API key at console.groq.com</span></div></div>';
  }

  inp.disabled = false; inp.focus(); win.scrollTop = win.scrollHeight;
}

function sendQ(q) { const i = document.getElementById('chatInp'); if (i) { i.value = q; sendChat(); } }

async function studentClassroom() {
  const s = currentUser;
  mc().innerHTML = hdr('Google Classroom', 'Enrolled courses') +
    (SUBJ[s.branch] || []).map((sub, i) => {
      const p = [3, 0, 1, 2][i % 4]; const col = ['#1a73e8', '#34a853', '#ea4335', '#fbbc04'][i % 4];
      return '<div class="gc-card" onclick="window.open(\'https://classroom.google.com\',\'_blank\')">'
        + '<div class="gc-ico" style="background:' + col + '18;color:' + col + '">' + IC.classroom + '</div>'
        + '<div style="flex:1"><div class="gc-name">' + sub + '</div><div class="gc-code">' + s.branch + ' · Sem ' + s.semester + '</div><div class="gc-meta">' + (p > 0 ? p + ' pending' : 'All submitted') + '</div></div>'
        + '<span class="badge ' + (p > 0 ? 'ba' : 'bg') + '">' + (p > 0 ? p + ' Pending' : 'Up to date') + '</span></div>';
    }).join('');
}

async function studentDocReq() {
  mc().innerHTML = '<div class="spinner"></div>';
  const reqs = await getDocReqs();
  const sid  = currentUser.id;
  // Match both stuId and studentId fields (different parts of app use different keys)
  // Broad match — try all common field names and formats
  const sidUp = sid.toUpperCase();
  const myR  = reqs.filter(r => {
    const a = (r.stuId     || '').toUpperCase();
    const b = (r.studentId || '').toUpperCase();
    // Direct match
    if (a === sidUp || b === sidUp) return true;
    // S0001 vs S001 style mismatch — try numeric part
    const numSid = sidUp.replace(/^[A-Z]+0*/, '');
    const numA   = a.replace(/^[A-Z]+0*/, '');
    const numB   = b.replace(/^[A-Z]+0*/, '');
    return (numSid && numA && numSid === numA) || (numSid && numB && numSid === numB);
  });
  // Store indexed by ID for fast lookup by downloadDocBase64
  window._myDocReqs = {};
  reqs.forEach(r => { window._myDocReqs[r.id] = r; });

  function docCard(d) {
    const badgeCls  = d.status==='Pending'?'ba':d.status==='Processing'?'bb':d.status==='Ready'?'bg':d.status==='Delivered'?'bgold':'br';
    const hasDoc    = d.documentUrl || d.documentBase64;
    const borderCol = (d.status==='Ready'||d.status==='Delivered') ? 'var(--green)'
                    : d.status==='Processing' ? 'var(--blue2)' : 'var(--bd)';
    const statusMsg = {
      Pending:    '⏳ Waiting for admin to process',
      Processing: '⚙️ Being prepared by admin',
      Ready:      '✅ Document is ready — download below',
      Delivered:  '📬 Delivered',
      Closed:     '✔ Completed'
    };
    let html = '<div style="padding:12px 14px;background:var(--sf2);border-radius:6px;margin-bottom:10px;border-left:4px solid ' + borderCol + '">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">'
      + '<span style="font-weight:600;font-size:13px">' + (d.type||'Document') + '</span>'
      + '<span class="badge ' + badgeCls + '">' + d.status + '</span>'
      + '</div>'
      + '<div style="font-size:11px;color:var(--tx3);margin-bottom:3px">' + (d.date||'') + (d.reason ? ' · ' + d.reason : '') + '</div>'
      + '<div style="font-size:11px;color:var(--tx2);margin-bottom:6px">' + (statusMsg[d.status]||d.status) + '</div>';
    if (d.adminNotes) {
      html += '<div style="font-size:11.5px;color:var(--tx2);background:var(--sf3);padding:6px 10px;border-radius:4px;margin-bottom:8px">📝 Admin note: ' + d.adminNotes + '</div>';
    }
    // Show download for ANY status if document is available
    if (hasDoc) {
      html += '<div style="margin-top:8px">';
      if (d.documentUrl) {
        html += '<a href="' + d.documentUrl + '" target="_blank" class="btn btn-green" style="text-decoration:none;display:inline-flex;align-items:center;gap:6px;padding:7px 16px;font-size:12.5px;font-weight:600">' + IC.docs + ' Download Document</a>';
      } else {
        html += '<button class="btn btn-green" style="padding:7px 16px;font-size:12.5px;font-weight:600" onclick="downloadStudentDoc(\'' + d.id + '\')">' + IC.docs + ' Download Document</button>';
      }
      html += '</div>';
    } else if (d.status==='Ready'||d.status==='Delivered') {
      html += '<div style="font-size:11px;color:var(--tx3);margin-top:6px">📍 Collect in person from admin office</div>';
    }
    html += '</div>';
    return html;
  }

  mc().innerHTML = [
    hdr('Request Documents', 'Submit and track your document requests'),
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">',

    // Left — new request form
    '<div class="card"><div class="card-hd"><span class="card-title">New Request</span></div>',
    '<div class="fg"><label>Document Type</label><select class="fgs" id="docType">',
    '<option>Bonafide Certificate</option><option>Transcript</option><option>NOC</option>',
    '<option>Conduct Certificate</option><option>Migration Certificate</option><option>Provisional Degree Certificate</option>',
    '</select></div>',
    '<div class="fg"><label>Purpose / Reason *</label><textarea class="fgt" id="docReason" placeholder="State purpose clearly..." style="min-height:80px"></textarea></div>',
    '<div class="fg"><label>Delivery Mode</label><select class="fgs" id="docDelivery"><option>Collect in Person</option><option>Speed Post</option><option>Email (Soft Copy)</option></select></div>',
    mkbtn('gold', 'Submit Request', 'submitDocReq()'),
    '</div>',

    // Right — my requests
    '<div class="card"><div class="card-hd"><span class="card-title">My Requests</span><span class="badge bb">' + myR.length + ' total</span></div>',
    myR.length === 0
      ? '<div style="text-align:center;padding:20px;color:var(--tx3);font-size:12px">No requests yet — submit your first request on the left.</div>'
      : myR.sort((a,b) => (b.date||'').localeCompare(a.date||'')).map(docCard).join(''),
    '<div style="font-size:10.5px;color:var(--tx3);margin-top:6px">Processing time: 3–5 working days</div>',
    '</div>',

    '</div>'
  ].join('');
}

// Student downloads their own doc — uses local index for fast lookup
async function downloadStudentDoc(reqId) {
  // First check local cache
  let d = window._myDocReqs && window._myDocReqs[reqId];
  
  // If not in cache or missing doc fields, try fetching fresh from Firebase
  if (!d || (!d.documentUrl && !d.documentBase64)) {
    if (fbMode === 'firebase') {
      try {
        const fresh = await dbGet('docRequests', reqId);
        if (fresh) {
          d = fresh;
          if (window._myDocReqs) window._myDocReqs[reqId] = fresh; // update cache
        }
      } catch (e) { console.warn('Doc fetch error:', e.message); }
    }
  }

  if (!d) { showToast('Document record not found', 'error'); return; }
  
  if (d.documentUrl) {
    window.open(d.documentUrl, '_blank');
    return;
  }
  if (!d.documentBase64) {
    showToast('No file attached — admin may not have uploaded the document yet', 'info');
    return;
  }
  
  // Trigger download
  const a = document.createElement('a');
  a.href     = d.documentBase64;
  a.download = d.documentName || ((d.type || 'document').replace(/\s+/g, '-') + '.pdf');
  document.body.appendChild(a);
  a.click();
  setTimeout(() => document.body.removeChild(a), 100);
  showToast('Downloading ' + (d.documentName || d.type || 'document') + '...', 'success');
}

async function submitDocReq() {
  const type = (document.getElementById('docType') || {}).value || 'Bonafide';
  const reason = (document.getElementById('docReason') || {}).value || '';
  if (!reason.trim()) { showToast('Please enter a reason', 'error'); return; }
  const data = { id: 'DR' + Date.now(), stuId: currentUser.id.toUpperCase(), stuName: currentUser.name, type, reason, delivery: (document.getElementById('docDelivery')||{}).value||'Collect in Person', date: new Date().toISOString().split('T')[0], status: 'Pending' };
  // Use dbSet with custom ID so we can look up by data.id later
  if (fbMode === 'firebase') await dbSet('docRequests', data.id, data);
  else DEMO.docRequests.push(data);
  showToast('Request submitted', 'success');
  navigateTo('studentDocReq');
}

async function studentFees() {
  const s = currentUser;
  const feeRows = [
    ['Tuition Fee',      '45,000', 'Jul 31', s.feeStatus === 'Paid' ? 'Paid' : 'Due',     45000],
    ['Laboratory Fee',   '8,500',  'Jul 31', s.feeStatus === 'Paid' ? 'Paid' : 'Due',     8500 ],
    ['Examination Fee',  '1,200',  'Mar 15', 'Paid',                                       0    ],
    ['Library Fee',      '500',    'Jul 31', 'Paid',                                       0    ],
    ['Development Fee',  '2,000',  'Jul 31', s.feeStatus === 'Partial' ? 'Due' : 'Paid',  s.feeStatus === 'Partial' ? 2000 : 0],
  ];
  const totalDue = feeRows.reduce((a, r) => a + (r[3] === 'Due' ? r[4] : 0), 0);

  mc().innerHTML = [
    hdr('Fee Statement', 'Academic Year 2024–25 · Semester ' + s.semester),
    '<div id="payModal" style="display:none"></div>',
    '<div style="display:grid;grid-template-columns:1fr 300px;gap:16px;align-items:start">',

    // Main fee table
    '<div class="card">',
    '<div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;padding:12px;background:var(--sf2);border-radius:var(--r2);border-left:3px solid ' + (s.feeStatus === 'Paid' ? 'var(--green)' : s.feeStatus === 'Pending' ? 'var(--red)' : 'var(--amber)') + '">',
    IC.fees,
    '<div><div style="font-size:13.5px;font-weight:600;color:' + (s.feeStatus === 'Paid' ? 'var(--green)' : s.feeStatus === 'Pending' ? 'var(--red)' : 'var(--amber)') + '">' + (s.feeStatus === 'Paid' ? 'All fees cleared for this semester' : 'Fee payment outstanding — ₹' + totalDue.toLocaleString('en-IN')) + '</div>',
    '<div style="font-size:11px;color:var(--tx3);margin-top:2px">Student: ' + s.name + ' · USN: ' + (s.usn || s.id) + '</div></div></div>',
    '<div class="tbl-wrap"><table><thead><tr><th>Fee Head</th><th>Amount (₹)</th><th>Due Date</th><th>Status</th></tr></thead><tbody>',
    feeRows.map(([h, a, d, st]) => '<tr><td>' + h + '</td><td style="font-family:var(--fm)">₹' + a + '</td><td style="font-size:11px">' + d + '</td><td><span class="badge ' + (st === 'Paid' ? 'bg' : 'br') + '">' + st + '</span></td></tr>').join(''),
    '</tbody></table></div>',
    s.feeStatus !== 'Paid'
      ? '<div style="margin-top:14px;display:flex;justify-content:flex-end;gap:8px">'
        + mkbtn('gold', IC.fees + ' Pay Now — ₹' + totalDue.toLocaleString('en-IN'), 'showPayModal(' + totalDue + ')')
        + '</div>'
      : '<div style="margin-top:12px;padding:10px;background:var(--gnd);border-radius:5px;text-align:center;font-size:12px;color:var(--green)">' + IC.check + ' All dues cleared. Receipt available at the accounts office.</div>',
    '</div>',

    // Payment history sidebar
    '<div class="card"><div class="card-hd"><span class="card-title">Payment History</span></div>',
    [
      { date: '2024-07-15', head: 'Examination Fee', amt: '1,200', mode: 'UPI' },
      { date: '2024-07-10', head: 'Library Fee',     amt: '500',   mode: 'Card' },
    ].map(p =>
      '<div style="padding:9px 11px;background:var(--sf2);border-radius:5px;margin-bottom:6px">'
      + '<div style="display:flex;justify-content:space-between;margin-bottom:2px">'
      + '<span style="font-size:12px;font-weight:600">' + p.head + '</span>'
      + '<span style="font-size:12px;color:var(--green);font-family:var(--fm)">₹' + p.amt + '</span>'
      + '</div>'
      + '<div style="font-size:10px;color:var(--tx3)">' + p.date + ' · ' + p.mode + '</div>'
      + '</div>'
    ).join(''),
    s.feeStatus === 'Paid' ? '<div style="padding:9px 11px;background:var(--sf2);border-radius:5px;margin-bottom:6px"><div style="display:flex;justify-content:space-between;margin-bottom:2px"><span style="font-size:12px;font-weight:600">Tuition + Lab + Dev</span><span style="font-size:12px;color:var(--green);font-family:var(--fm)">₹55,500</span></div><div style="font-size:10px;color:var(--tx3)">2024-08-01 · Online</div></div>' : '',
    '</div>',

    '</div>' // end grid
  ].join('');
}

function showPayModal(amount) {
  const f = document.getElementById('payModal');
  if (!f) return;
  f.style.display = 'block';
  f.innerHTML = [
    '<div class="card" style="border:1px solid var(--gold);margin-bottom:14px">',
    '<div class="card-hd"><span class="card-title">' + IC.fees + ' Pay Fees — ₹' + amount.toLocaleString('en-IN') + '</span>',
    '<button class="btn btn-sec" style="padding:4px 10px;font-size:11px" onclick="document.getElementById(\'payModal\').style.display=\'none\'">Cancel</button></div>',
    '<div class="tabs" style="margin-bottom:14px"><button class="tab-btn active" onclick="swTab(this,\'pay_upi\')">UPI</button><button class="tab-btn" onclick="swTab(this,\'pay_card\')">Card</button><button class="tab-btn" onclick="swTab(this,\'pay_nb\')">Net Banking</button></div>',

    // UPI tab
    '<div id="pay_upi" class="tab-pane active">',
    '<div class="fg"><label>UPI ID</label><input class="fgi" id="pay_upi_id" placeholder="yourname@upi" style="font-family:var(--fm)"></div>',
    '<div style="text-align:center;margin:10px 0;font-size:11px;color:var(--tx3)">— or scan QR —</div>',
    '<div style="text-align:center;padding:20px;background:var(--sf2);border-radius:6px;margin-bottom:10px">',
    '<svg width="80" height="80" viewBox="0 0 80 80" style="opacity:.4"><rect x="0" y="0" width="30" height="30" fill="var(--tx)"/><rect x="5" y="5" width="20" height="20" fill="var(--bg)"/><rect x="10" y="10" width="10" height="10" fill="var(--tx)"/><rect x="50" y="0" width="30" height="30" fill="var(--tx)"/><rect x="55" y="5" width="20" height="20" fill="var(--bg)"/><rect x="60" y="10" width="10" height="10" fill="var(--tx)"/><rect x="0" y="50" width="30" height="30" fill="var(--tx)"/><rect x="5" y="55" width="20" height="20" fill="var(--bg)"/><rect x="10" y="60" width="10" height="10" fill="var(--tx)"/><rect x="35" y="5" width="5" height="5" fill="var(--tx)"/><rect x="42" y="5" width="5" height="5" fill="var(--tx)"/><rect x="35" y="35" width="5" height="5" fill="var(--tx)"/><rect x="42" y="42" width="8" height="8" fill="var(--tx)"/><rect x="55" y="38" width="5" height="5" fill="var(--tx)"/><rect x="62" y="45" width="8" height="5" fill="var(--tx)"/><rect x="35" y="55" width="8" height="5" fill="var(--tx)"/><rect x="48" y="62" width="5" height="8" fill="var(--tx)"/></svg>',
    '<div style="font-size:10px;color:var(--tx3);margin-top:6px;font-family:var(--fm)">campusasthra@sbi</div>',
    '</div>',
    mkbtn('gold', 'Pay ₹' + amount.toLocaleString('en-IN') + ' via UPI', 'processPayment(\'UPI\',' + amount + ')'),
    '</div>',

    // Card tab
    '<div id="pay_card" class="tab-pane">',
    '<div class="fg"><label>Card Number</label><input class="fgi" id="pay_card_no" placeholder="1234 5678 9012 3456" maxlength="19" style="font-family:var(--fm)" oninput="this.value=this.value.replace(/[^\\d]/g,\'\').replace(/(\\d{4})/g,\'$1 \').trim()"></div>',
    '<div class="form-2">',
    '<div class="fg"><label>Expiry</label><input class="fgi" id="pay_exp" placeholder="MM/YY" maxlength="5"></div>',
    '<div class="fg"><label>CVV</label><input class="fgi" id="pay_cvv" placeholder="•••" maxlength="3" type="password"></div>',
    '</div>',
    '<div class="fg"><label>Name on Card</label><input class="fgi" id="pay_name" placeholder="' + currentUser.name + '" value="' + currentUser.name + '"></div>',
    mkbtn('gold', 'Pay ₹' + amount.toLocaleString('en-IN') + ' via Card', 'processPayment(\'Card\',' + amount + ')'),
    '</div>',

    // Net Banking tab
    '<div id="pay_nb" class="tab-pane">',
    '<div class="fg"><label>Select Bank</label><select class="fgs" id="pay_bank">',
    ['State Bank of India','HDFC Bank','ICICI Bank','Axis Bank','Canara Bank','Bank of Baroda','Punjab National Bank','Karnataka Bank'].map(b => '<option>' + b + '</option>').join(''),
    '</select></div>',
    '<div style="padding:10px;background:var(--sf2);border-radius:5px;font-size:11.5px;color:var(--tx2);margin-bottom:10px">You will be redirected to your bank\'s secure payment page.</div>',
    mkbtn('gold', 'Proceed to Net Banking', 'processPayment(\'Net Banking\',' + amount + ')'),
    '</div>',

    '</div>'
  ].join('');
  // scroll to form
  f.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function processPayment(mode, amount) {
  // Validate inputs before processing
  if (mode === 'UPI') {
    const upiId = (document.getElementById('pay_upi_id') || {}).value.trim();
    if (!upiId || !upiId.includes('@')) { showToast('Enter a valid UPI ID (e.g. name@upi)', 'error'); return; }
  } else if (mode === 'Card') {
    const cardNo = (document.getElementById('pay_card_no') || {}).value.replace(/\s/g, '');
    const exp    = (document.getElementById('pay_exp')     || {}).value.trim();
    const cvv    = (document.getElementById('pay_cvv')     || {}).value.trim();
    if (cardNo.length < 16) { showToast('Enter a valid 16-digit card number', 'error'); return; }
    if (!/^\d{2}\/\d{2}$/.test(exp)) { showToast('Enter expiry as MM/YY', 'error'); return; }
    if (cvv.length < 3) { showToast('Enter a valid 3-digit CVV', 'error'); return; }
  }

  // Find the clicked button and disable it during processing
  const payBtn = [...document.querySelectorAll('button')].find(b =>
    b.textContent.includes('Pay') || b.textContent.includes('Net Banking')
  );
  if (payBtn) { payBtn.disabled = true; payBtn.textContent = 'Processing payment...'; }

  await new Promise(r => setTimeout(r, 1800));

  try {
    if (fbMode === 'firebase') await dbSet('students', currentUser.id, { feeStatus: 'Paid' });
    else if (DEMO.students[currentUser.id]) DEMO.students[currentUser.id].feeStatus = 'Paid';
    currentUser.feeStatus = 'Paid';

    const rec = {
      id: 'PAY' + Date.now(), studentId: currentUser.id, studentName: currentUser.name,
      amount, mode, status: 'Success', paidAt: new Date().toISOString(),
      semester: currentUser.semester, branch: currentUser.branch
    };
    if (fbMode === 'firebase') await dbSet('payments', rec.id, rec);

    showToast('✓ Payment of ₹' + amount.toLocaleString('en-IN') + ' via ' + mode + ' successful!', 'success');
    navigateTo('studentFees');
  } catch (e) {
    showToast('Payment error: ' + e.message, 'error');
    if (payBtn) { payBtn.disabled = false; payBtn.textContent = 'Pay ₹' + amount.toLocaleString('en-IN') + ' via ' + mode; }
  }
}

async function studentTimetable() {
  mc().innerHTML = '<div class="spinner"></div>';
  const s = currentUser;
  const slots = await loadTT(s.branch, s.semester, s.section || 'A')
             || defaultSlots(s.branch);
  mc().innerHTML = hdr('Class Timetable', s.branch + ' · Sem ' + s.semester + ' · Sec ' + (s.section||'A'))
    + '<div class="card" style="padding:0;overflow:hidden">' + renderTTView(slots) + '</div>';
}
async function studentNotices() { return adminNotices(); }

async function studentProfile() {
  const s = currentUser;

  // Load face image
  let faceImg = null;
  if (fbMode === 'firebase' && s.faceId) {
    try { const fd = await dbGet('faces', s.faceId); faceImg = fd ? fd.imageData : null; } catch (_) {}
  } else {
    const fd = DEMO.faces['student_' + s.id]; faceImg = fd ? fd.imageData : null;
  }

  const avatarHtml = faceImg
    ? '<img src="' + faceImg + '" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%">'
    : '<span style="font-size:32px;font-weight:700;color:#060d1f">' + s.name[0] + '</span>';

  mc().innerHTML = [
    hdr('My Profile', s.name + ' · ' + s.branch),
    '<div style="display:grid;grid-template-columns:260px 1fr;gap:16px;align-items:start">',

    // Left: avatar + basic info
    '<div>',
    '<div class="card" style="text-align:center;padding:24px 18px">',
    '<div style="width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold2));display:flex;align-items:center;justify-content:center;margin:0 auto 12px;overflow:hidden;border:3px solid var(--gold);box-shadow:0 4px 18px rgba(201,167,74,.3)">' + avatarHtml + '</div>',
    '<div style="font-family:var(--fd);font-size:18px;font-weight:600;margin-bottom:3px">' + s.name + '</div>',
    '<div style="font-size:11px;color:var(--tx3);font-family:var(--fm);margin-bottom:10px">' + (s.usn || s.id) + '</div>',
    '<span class="badge bb">' + s.branch + ' · Sem ' + s.semester + '</span>',
    faceImg
      ? '<div style="margin-top:10px;font-size:10.5px;color:var(--green)">' + IC.check + ' Biometric enrolled</div>'
      : '<div style="margin-top:10px;font-size:10.5px;color:var(--amber)">⚠ No biometric registered</div>',
    '</div>',
    '<div class="card" style="margin-top:0">',
    '<div class="card-hd"><span class="card-title">Academic Standing</span></div>',
    [
      ['CGPA', s.cgpa || '—', s.cgpa >= 8 ? 'var(--green)' : s.cgpa >= 6 ? 'var(--gold)' : 'var(--red)'],
      ['Attendance', (s.attendance || 75) + '%', (s.attendance||75) >= 75 ? 'var(--green)' : 'var(--red)'],
      ['Fee Status', s.feeStatus || '—', s.feeStatus === 'Paid' ? 'var(--green)' : 'var(--red)'],
      ['Section', s.section || 'A', 'var(--blue2)'],
    ].map(([k, v, c]) => '<div class="ir"><span class="ir-k">' + k + '</span><span style="font-family:var(--fm);font-size:11px;color:' + c + '">' + v + '</span></div>').join(''),
    '</div>',
    '</div>',

    // Right: editable profile
    '<div class="card">',
    '<div class="card-hd"><span class="card-title">Personal Information</span>' + mkbtn('gold', IC.check + ' Save Changes', 'saveStudentProfile()') + '</div>',
    '<div class="form-2">',
    '<div class="fg"><label>Full Name</label><input class="fgi" id="sp_name" value="' + s.name + '"></div>',
    '<div class="fg"><label>Phone</label><input class="fgi" id="sp_phone" value="' + (s.phone || '') + '" placeholder="9xxxxxxxxx"></div>',
    '<div class="fg"><label>City</label><input class="fgi" id="sp_city" value="' + (s.city || '') + '"></div>',
    '<div class="fg"><label>Date of Birth</label><input class="fgi" type="date" id="sp_dob" value="' + (s.dob || '') + '"></div>',
    '<div class="fg"><label>Email</label><input class="fgi" value="' + (s.email || s.id.toLowerCase() + '@campusasthra.edu.in') + '" disabled style="opacity:.5;cursor:not-allowed" title="Email cannot be changed"></div>',
    '<div class="fg"><label>USN</label><input class="fgi" value="' + (s.usn || s.id) + '" disabled style="opacity:.5;cursor:not-allowed"></div>',
    '</div>',
    '<div class="card-hd" style="margin-top:16px;border-top:1px solid var(--bd);padding-top:14px"><span class="card-title">Change Password</span></div>',
    '<div class="form-2">',
    '<div class="fg"><label>New Password</label><input class="fgi" type="password" id="sp_pwd" placeholder="Min 6 characters"></div>',
    '<div class="fg"><label>Confirm Password</label><input class="fgi" type="password" id="sp_pwd2" placeholder="Re-enter password"></div>',
    '</div>',
    '<div style="margin-top:4px">' + mkbtn('blue', 'Update Password', 'updateStudentPassword()') + '</div>',
    '</div>',

    '</div>' // end grid
  ].join('');
}

async function saveStudentProfile() {
  const name  = (document.getElementById('sp_name')  || {}).value.trim();
  const phone = (document.getElementById('sp_phone') || {}).value.trim();
  const city  = (document.getElementById('sp_city')  || {}).value.trim();
  const dob   = (document.getElementById('sp_dob')   || {}).value;
  if (!name) { showToast('Name cannot be empty', 'error'); return; }

  const updates = { name, phone, city, dob };
  try {
    if (fbMode === 'firebase') await dbSet('students', currentUser.id, updates);
    else if (DEMO.students[currentUser.id]) Object.assign(DEMO.students[currentUser.id], updates);
    Object.assign(currentUser, updates);
    // Update topbar name
    const tn = document.getElementById('topName'); if (tn) tn.textContent = name;
    const av = document.getElementById('topAv');   if (av) av.textContent = name[0];
    showToast('Profile updated', 'success');
  } catch (e) { showToast('Update failed: ' + e.message, 'error'); }
}

async function updateStudentPassword() {
  const pwd  = (document.getElementById('sp_pwd')  || {}).value;
  const pwd2 = (document.getElementById('sp_pwd2') || {}).value;
  if (!pwd || pwd.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }
  if (pwd !== pwd2) { showToast('Passwords do not match', 'error'); return; }
  try {
    if (fbMode === 'firebase' && fbAuth.currentUser) {
      await fbAuth.currentUser.updatePassword(pwd);
      showToast('Password updated successfully', 'success');
    } else {
      showToast('Password updated (demo mode)', 'success');
    }
  } catch (e) {
    if (e.code === 'auth/requires-recent-login') {
      showToast('Please log out and log in again before changing password', 'error');
    } else {
      showToast('Password update failed: ' + e.message, 'error');
    }
  }
}

// ── INLINE CAMERA HELPERS (for Add Student / Add Teacher forms) ──────────────
let _inlineCamStreams = {}; // track per-videoId streams

async function startInlineCam(videoId, statusId) {
  // stop any existing stream for this element
  if (_inlineCamStreams[videoId]) {
    _inlineCamStreams[videoId].getTracks().forEach(t => t.stop());
    delete _inlineCamStreams[videoId];
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
      audio: false
    });
    const v = document.getElementById(videoId);
    if (!v) { stream.getTracks().forEach(t => t.stop()); return; }
    v.srcObject = stream;
    v.setAttribute('playsinline', true);
    v.play().catch(() => {});
    _inlineCamStreams[videoId] = stream;
    const s = document.getElementById(statusId);
    if (s) { s.textContent = 'Camera ready — position face in frame and click Capture'; s.className = 'cam-st scanning'; }
  } catch (e) {
    const s = document.getElementById(statusId);
    if (s) {
      s.textContent = e.name === 'NotAllowedError' ? 'Camera access denied — face will not be captured'
        : e.name === 'NotFoundError' ? 'No camera found — face will not be captured'
        : 'Camera unavailable — face will not be captured';
      s.className = 'cam-st error';
    }
  }
}

function stopInlineCam(videoId) {
  if (_inlineCamStreams[videoId]) {
    _inlineCamStreams[videoId].getTracks().forEach(t => t.stop());
    delete _inlineCamStreams[videoId];
  }
  const v = document.getElementById(videoId);
  if (v) v.srcObject = null;
}

// ── QUICK FACE REG — open face modal directly for a specific person ──────────
async function quickFaceReg(personId, type) {
  // pre-load the person into regPool so openFaceRegFor works
  if (type === 'student') regPool = await getStudents();
  else if (type === 'teacher') regPool = await getTeachers();
  else regPool = [DEMO.admin];
  window._regType = type;
  openFaceRegFor(personId, type);
}

// ══════════════════════════════════════════════════════════════════════════════
//  FACE RECOGNITION ENGINE — face-api.js v0.22.2
//  Uses TinyFaceDetector (fast, reliable) + FaceRecognitionNet (128-D descriptors)
//  Matching: Euclidean distance, threshold 0.5
// ══════════════════════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════════════════════
//  FACE RECOGNITION ENGINE — face-api.js v0.22.2
//  Uses TinyFaceDetector (fast, reliable) + FaceRecognitionNet (128-D descriptors)
//  Matching: Euclidean distance, threshold 0.5
// ══════════════════════════════════════════════════════════════════════════════

const FACE_MATCH_THRESHOLD = 0.90; // 0.7 works well for real webcam conditions

// Multiple CDN fallbacks — jsdelivr may fail when running from file://
const FACE_MODEL_CDNS = [
  'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights',
  'https://unpkg.com/face-api.js@0.22.2/weights',
  'https://raw.githack.com/justadudewhohacks/face-api.js/master/weights',
];

let _faceApiReady   = false;
let _faceApiLoading = false;
let _faceApiError   = null;

async function loadFaceApi() {
  if (_faceApiReady) return true;
  if (_faceApiLoading) {
    while (_faceApiLoading) await new Promise(r => setTimeout(r, 150));
    return _faceApiReady;
  }
  _faceApiLoading = true;
  _faceApiError   = null;

  if (typeof faceapi === 'undefined') {
    _faceApiError   = 'face-api.js script not loaded';
    _faceApiLoading = false;
    return false;
  }

  // Try each CDN in order until one works
  for (const url of FACE_MODEL_CDNS) {
    try {
      console.log('[FaceAPI] Trying models from:', url);
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(url),
        faceapi.nets.faceLandmark68Net.loadFromUri(url),
        faceapi.nets.faceRecognitionNet.loadFromUri(url),
      ]);
      _faceApiReady = true;
      _faceApiError = null;
      console.log('[FaceAPI] ✓ Models loaded from:', url);
      break;
    } catch (e) {
      console.warn('[FaceAPI] Failed from', url, ':', e.message);
      _faceApiError = e.message;
      // Reset nets so they can be loaded again from next CDN
      try { faceapi.nets.ssdMobilenetv1.dispose(); } catch (_) {}
      try { faceapi.nets.faceLandmark68Net.dispose(); } catch (_) {}
      try { faceapi.nets.faceRecognitionNet.dispose(); } catch (_) {}
    }
  }

  if (!_faceApiReady) {
    console.error('[FaceAPI] All CDNs failed. Running from file:// requires internet.');
    _faceApiError = 'All model CDNs failed — check internet connection. If running locally, try Chrome with --allow-file-access-from-files or use a local server (e.g. VS Code Live Server).';
  }

  _faceApiLoading = false;
  return _faceApiReady;
}

// Compute 128-D descriptor from a canvas/video/img element
// Returns Float32Array or null
async function computeDescriptor(inputEl) {
  if (!await loadFaceApi()) {
    console.warn('[FaceAPI] Cannot compute — models not ready:', _faceApiError);
    return null;
  }

  try {
    // SsdMobilenetv1 is more reliable than TinyFaceDetector for recognition tasks
    const options = new faceapi.SsdMobilenetv1Options({
      minConfidence: 0.2   // very low threshold — catches faces in varied conditions
    });

    const det = await faceapi
      .detectSingleFace(inputEl, options)
      .withFaceLandmarks()     // full 68-point landmarks (better for recognition)
      .withFaceDescriptor();

    if (det) {
      console.log('[FaceAPI] Face detected, score:', det.detection.score.toFixed(3));
      return det.descriptor;
    } else {
      console.warn('[FaceAPI] No face found. Try: face centred, well-lit, no glasses.');
      return null;
    }
  } catch (e) {
    console.error('[FaceAPI] Detection error:', e.message);
    return null;
  }
}

// Convert Float32Array ↔ plain Array for Firestore storage
function descriptorToArray(d) { return d ? Array.from(d) : null; }
function arrayToDescriptor(a) {
  if (!a) return null;
  // Handle plain array, Float32Array, or Firestore array-like object
  const arr = Array.isArray(a) ? a : (a.length ? Array.from(a) : Object.values(a));
  if (arr.length < 10) return null; // too short to be a real descriptor
  return new Float32Array(arr.map(Number)); // convert all values to numbers
}

// Euclidean distance between two descriptors
function faceDistance(a, b) {
  if (!a || !b || a.length !== b.length) return 999;
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += (a[i] - b[i]) ** 2;
  return Math.sqrt(sum);
}

// Capture from video to canvas at full resolution, compute descriptor
// Returns { imageData: string, descriptor: number[]|null }
async function _captureAndDescribe(videoEl, canvasEl) {
  if (!videoEl || videoEl.readyState < 2 || !videoEl.videoWidth) {
    return null;
  }

  // Use full native video resolution
  const W = videoEl.videoWidth;
  const H = videoEl.videoHeight;
  canvasEl.width  = W;
  canvasEl.height = H;

  const ctx = canvasEl.getContext('2d');

  // Draw mirrored image for the saved preview photo
  ctx.save();
  ctx.translate(W, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(videoEl, 0, 0, W, H);
  ctx.restore();
  const imageData = canvasEl.toDataURL('image/jpeg', 0.8);

  // Draw un-mirrored for descriptor (face-api needs natural left/right orientation)
  ctx.drawImage(videoEl, 0, 0, W, H);
  const descriptor = await computeDescriptor(canvasEl);

  return {
    imageData,
    descriptor: descriptor ? descriptorToArray(descriptor) : null
  };
}

// Shared inline-cam snap helper used by Add Student / Add Teacher forms
async function _snapFaceInline(videoId, canvasId) {
  const video  = document.getElementById(videoId);
  const canvas = document.getElementById(canvasId);
  if (!video || video.readyState < 2 || !video.videoWidth) {
    showToast('Camera not ready — wait a moment', 'error');
    return null;
  }
  return await _captureAndDescribe(video, canvas);
}
// ── FACE LOGIN MODAL — two-step: capture then match ─────────────────────────

async function openFaceLoginModal() {
  // Reset to step 1 — always re-enable capture button
  const captBtn = document.getElementById('flmCaptureBtn');
  if (captBtn) { captBtn.disabled = false; captBtn.textContent = '📷 Capture Photo'; }

  document.getElementById('flmStep1').style.display = 'block';
  document.getElementById('flmStep2').style.display = 'none';
  document.getElementById('flmSub').textContent = 'Position your face in the frame and click Capture Photo';
  document.getElementById('flmStatus').textContent = 'Loading face AI models + camera...';
  document.getElementById('flmStatus').className = 'cam-st scanning';
  document.getElementById('faceLoginModal').classList.add('open');

  if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  const v = document.getElementById('flmVideo');
  if (v) v.srcObject = null;

  // Load models and camera in parallel
  const [modelOk] = await Promise.all([
    loadFaceApi(),
    new Promise(resolve => startCam('flmVideo', s => { camStream = s; resolve(s); }))
  ]);

  const stat = document.getElementById('flmStatus');
  if (!modelOk) {
    stat.textContent = 'AI models unavailable — use password login instead';
    stat.className = 'cam-st error';
  } else if (!camStream) {
    stat.textContent = 'Camera unavailable — use password login instead';
    stat.className = 'cam-st error';
  } else {
    stat.textContent = 'Ready ✓ — look straight at the camera and click Capture Photo';
    stat.className = 'cam-st scanning';
  }
}

function closeFaceLoginModal() {
  window._faceAttMode = false; // always clear attendance mode on close
  document.getElementById('faceLoginModal').classList.remove('open');
  if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  const v = document.getElementById('flmVideo');
  if (v) v.srcObject = null;
}

function retakePhotoLogin() {
  // Reset button and go back to step 1
  const captBtn = document.getElementById('flmCaptureBtn');
  if (captBtn) { captBtn.disabled = false; captBtn.textContent = '📷 Capture Photo'; }

  document.getElementById('flmStep1').style.display = 'block';
  document.getElementById('flmStep2').style.display = 'none';
  document.getElementById('flmStatus').textContent = 'Camera restarting...';
  document.getElementById('flmStatus').className = 'cam-st scanning';

  if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  startCam('flmVideo', s => {
    camStream = s;
    if (s) {
      document.getElementById('flmStatus').textContent = 'Ready — look at camera and click Capture Photo';
      document.getElementById('flmStatus').className = 'cam-st scanning';
    }
  });
}

async function capturePhotoForLogin() {
  const video  = document.getElementById('flmVideo');
  const canvas = document.getElementById('flmCanvas');
  const btn    = document.getElementById('flmCaptureBtn');
  const stat1  = document.getElementById('flmStatus');

  if (!camStream || !video || video.readyState < 2) {
    stat1.textContent = 'Camera not ready — wait a moment and try again';
    stat1.className = 'cam-st error';
    if (btn) { btn.disabled = false; btn.textContent = '📷 Capture Photo'; }
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = '⏳ Capturing...'; }

  // Draw the frame to canvas — must be visible for face-api to read pixel data
  const W = video.videoWidth  || 640;
  const H = video.videoHeight || 480;
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, W, H); // un-mirrored — face-api needs natural orientation

  // Switch to step 2 immediately so user sees their photo
  document.getElementById('flmStep1').style.display = 'none';
  document.getElementById('flmStep2').style.display = 'block';

  const stat2    = document.getElementById('flmStatus2');
  const matchDiv = document.getElementById('flmMatchResult');

  stat2.textContent = 'Loading AI models...';
  stat2.className   = 'cam-st scanning';
  matchDiv.innerHTML = '<div style="text-align:center;padding:14px"><div class="spinner" style="margin:10px auto"></div><div style="font-size:11px;color:var(--tx3)">Initialising...</div></div>';

  // Load models
  if (!_faceApiReady) {
    const ok = await loadFaceApi();
    if (!ok) {
      stat2.textContent = 'AI models failed to load — ' + (_faceApiError || 'check internet');
      stat2.className = 'cam-st error';
      matchDiv.innerHTML = '<div style="text-align:center;padding:14px"><div style="font-size:28px">❌</div><div style="font-size:11px;color:var(--red);margin-top:6px">Models unavailable.<br>Use password login.</div></div>';
      if (btn) { btn.disabled = false; btn.textContent = '📷 Capture Photo'; }
      return;
    }
  }

  stat2.textContent = 'Detecting face...';
  matchDiv.innerHTML = '<div style="text-align:center;padding:14px"><div class="spinner" style="margin:10px auto"></div><div style="font-size:11px;color:var(--tx3)">Detecting face...</div></div>';

  // Brief pause to let canvas pixels commit — rAF can freeze in Safari inside modals
  await new Promise(r => setTimeout(r, 50));

  const descriptor = await computeDescriptor(canvas);

  if (!descriptor) {
    stat2.textContent = 'No face detected — ensure good lighting and look directly at camera';
    stat2.className = 'cam-st error';
    matchDiv.innerHTML = '<div style="text-align:center;padding:14px"><div style="font-size:32px">😕</div><div style="font-size:11px;color:var(--red);margin-top:6px">No face found in photo.</div><div style="font-size:10px;color:var(--tx3);margin-top:4px">Click Retake and try again.</div></div>';
    if (btn) { btn.disabled = false; btn.textContent = '📷 Capture Photo'; }
    return;
  }

  stat2.textContent = 'Matching...';
  matchDiv.innerHTML = '<div style="text-align:center;padding:14px"><div class="spinner" style="margin:10px auto"></div><div style="font-size:11px;color:var(--tx3)">Matching face...</div></div>';

  const faces    = await getFacesForMatching();
  const withDesc = faces.filter(f => f.descriptor && Array.isArray(f.descriptor) && f.descriptor.length >= 10);

  if (withDesc.length === 0) {
    const totalFaces = faces.length;
    const msg = totalFaces === 0
      ? 'No face records found in database. Admin must register faces first.'
      : totalFaces + ' face record(s) found but none have a recognition descriptor. Admin must re-register faces — go to Admin → Face Registration and recapture.';
    stat2.textContent = msg;
    stat2.className = 'cam-st error';
    matchDiv.innerHTML = '<div style="color:var(--amber);font-size:11px;text-align:center;padding:14px">'
      + (totalFaces === 0 ? '📭 No face records in database.' : '⚠️ ' + totalFaces + ' face(s) registered but no descriptors.<br>Admin must re-register faces.')
      + '</div>';
    if (btn) { btn.disabled = false; btn.textContent = '📷 Capture Photo'; }
    return;
  }

  console.log('[FaceAPI] Loaded', withDesc.length, 'faces with descriptors for matching');
  const liveDesc = new Float32Array(Array.from(descriptor).map(Number));
  let best = null, bestDist = 999;

  for (const f of withDesc) {
    const stored = arrayToDescriptor(f.descriptor);
    if (!stored) continue;
    const d = faceDistance(liveDesc, stored);
    console.log('[FaceAPI] vs', f.personName, '→ dist:', d.toFixed(4));
    if (d < bestDist) { bestDist = d; best = f; }
  }

  console.log('[FaceAPI] Best:', best && best.personName, '| dist:', bestDist.toFixed(4), '| threshold:', FACE_MATCH_THRESHOLD);

  if (!best || bestDist > FACE_MATCH_THRESHOLD) {
    const hint = best ? 'Closest: ' + best.personName + ' (score ' + bestDist.toFixed(3) + ', need <' + FACE_MATCH_THRESHOLD + ')' : 'No match';
    stat2.textContent = 'Not recognised — ' + hint;
    stat2.className = 'cam-st error';
    matchDiv.innerHTML = '<div style="text-align:center;padding:14px"><div style="font-size:32px">❌</div><div style="font-size:11px;color:var(--red);margin-top:6px">' + hint + '</div><div style="font-size:10px;color:var(--tx3);margin-top:4px">Try better lighting · Re-register face · Use password login</div></div>';
    if (btn) { btn.disabled = false; btn.textContent = '📷 Capture Photo'; }
    return;
  }

  const confidence = Math.round((1 - bestDist / FACE_MATCH_THRESHOLD) * 100);
  stat2.textContent = '✓ Matched: ' + best.personName + ' (' + confidence + '% confidence)';
  stat2.className = 'cam-st success';

  if (window._faceAttMode) {
    // Attendance mode — mark present, do NOT log in
    matchDiv.innerHTML = '<div style="text-align:center;padding:14px">'
      + '<div style="font-size:36px">✅</div>'
      + '<div style="font-size:15px;color:var(--green);font-weight:700;margin-top:8px">' + best.personName + '</div>'
      + '<div style="font-size:12px;color:var(--tx2);margin-top:3px">' + confidence + '% confidence</div>'
      + '<div style="font-size:11px;color:var(--green);margin-top:8px;font-weight:600">✓ Marking Present...</div>'
      + '</div>';
    setTimeout(() => markAttByFace(best.personId, best.personName), 800);
  } else {
    // Login mode — sign in as the matched user
    matchDiv.innerHTML = '<div style="text-align:center;padding:14px">'
      + '<div style="font-size:36px">✅</div>'
      + '<div style="font-size:14px;color:var(--green);font-weight:700;margin-top:8px">' + best.personName + '</div>'
      + '<div style="font-size:12px;color:var(--tx2);margin-top:3px">' + confidence + '% confidence</div>'
      + '<div style="font-size:11px;color:var(--tx3);margin-top:6px">Logging in...</div>'
      + '</div>';
    setTimeout(() => loginWithFace(best.id, best.type, best.personId, best), 1200);
  }
}

async function captureFaceLogin() { await capturePhotoForLogin(); }

// Called after face match in attendance mode — marks the student present in the table
function markAttByFace(personId, personName) {
  const stat2    = document.getElementById('flmStatus2');
  const matchDiv = document.getElementById('flmMatchResult');

  // Find the student row in the attendance table by personId
  const row = document.getElementById('ar-' + personId);

  if (!row) {
    // Student not in current attendance table (wrong branch/sem/section)
    if (stat2) {
      stat2.textContent = personName + ' not in this class list — check branch/semester';
      stat2.className = 'cam-st error';
    }
    if (matchDiv) {
      matchDiv.innerHTML = '<div style="text-align:center;padding:14px">'
        + '<div style="font-size:32px">⚠️</div>'
        + '<div style="font-size:12px;color:var(--amber);margin-top:8px">' + personName + ' not found in this class.<br>'
        + '<span style="font-size:10.5px;color:var(--tx3)">Check semester/section selector.</span></div>'
        + '<button class="btn-ma" style="margin-top:10px;width:100%" onclick="retakePhotoLogin()">📷 Try Another</button>'
        + '</div>';
    }
    return;
  }

  // Call markOne directly — same function the P button uses
  markOne(personId, true);

  // Update the modal to show success + option to scan next
  if (stat2) {
    stat2.textContent = '✓ ' + personName + ' marked Present';
    stat2.className = 'cam-st success';
  }
  if (matchDiv) {
    matchDiv.innerHTML = '<div style="text-align:center;padding:14px">'
      + '<div style="font-size:36px">✅</div>'
      + '<div style="font-size:14px;color:var(--green);font-weight:700;margin-top:8px">' + personName + '</div>'
      + '<div style="font-size:11px;color:var(--green);margin-top:4px;font-weight:600">Marked Present</div>'
      + '<button class="btn-ma" style="margin-top:12px;width:100%;padding:10px" onclick="retakePhotoLogin()">📷 Scan Next Student</button>'
      + '</div>';
  }
  // Flash the row green briefly
  row.style.transition = 'background .4s';
  row.style.background = 'rgba(5,122,85,.18)';
  setTimeout(() => { row.style.background = 'rgba(5,122,85,.05)'; }, 1500);

  showToast(personName + ' marked Present', 'success');
}


async function loginWithFace(key, type, personId, faceRecord) {
  const stat2    = document.getElementById('flmStatus2');
  const matchDiv = document.getElementById('flmMatchResult');

  if (stat2) { stat2.textContent = 'Signing in...'; stat2.className = 'cam-st scanning'; }

  const defaultPwds   = { admin: 'admin123', teacher: 'teach123', student: 'study123' };
  const adminEmail    = 'admin@campusasthra.edu.in';
  const userEmail     = type === 'admin' ? adminEmail : personId.toLowerCase() + '@campusasthra.edu.in';
  const adminPwd      = window._adminPwd || 'admin123';

  let user = null;

  if (fbMode === 'firebase') {
    // Strategy:
    // 1. Try to sign in as the user with default password
    // 2. If that fails, sign in as ADMIN to read the profile, then switch to user
    // 3. If admin sign-in also fails, build profile from face record data

    try { await fbAuth.signOut(); } catch (_) {}

    // Step 1: Try user's default password
    let userAuthOk = false;
    try {
      await fbAuth.signInWithEmailAndPassword(userEmail, defaultPwds[type] || 'study123');
      userAuthOk = true;
      console.log('[FaceLogin] Direct auth OK for', userEmail);
    } catch (e1) {
      console.warn('[FaceLogin] Direct auth failed:', e1.code);
    }

    if (userAuthOk) {
      // Signed in as user — read profile directly
      try {
        if (type === 'admin')        user = await dbGet('users', 'ADMIN');
        else if (type === 'teacher') user = await dbGet('teachers', personId);
        else                         user = await dbGet('students', personId);
      } catch (e) { console.warn('[FaceLogin] Profile read:', e.message); }
    } else {
      // Step 2: Sign in as admin to read the profile
      try {
        await fbAuth.signInWithEmailAndPassword(adminEmail, adminPwd);
        console.log('[FaceLogin] Admin auth OK, reading profile...');
        if (type === 'admin')        user = await dbGet('users', 'ADMIN');
        else if (type === 'teacher') user = await dbGet('teachers', personId);
        else                         user = await dbGet('students', personId);

        // Now sign in as the actual user (we have profile, try their email)
        // This restores a proper user session for Firestore rules
        try {
          await fbAuth.signOut();
          await fbAuth.signInWithEmailAndPassword(userEmail, defaultPwds[type] || 'study123');
        } catch (_) {
          // Can't sign in as user — stay signed in as admin (Firestore will still work)
          await fbAuth.signInWithEmailAndPassword(adminEmail, adminPwd);
        }
      } catch (e2) {
        console.warn('[FaceLogin] Admin auth also failed:', e2.code);
      }
    }
  }

  // Step 3: Fallback to in-memory DEMO data
  if (!user) {
    if (type === 'admin')        user = { ...DEMO.admin };
    else if (type === 'teacher') user = DEMO.teachers[personId] || null;
    else                         user = DEMO.students[personId] || null;
  }

  // Step 4: Build minimal profile from face record if still no user
  if (!user && faceRecord) {
    user = {
      id:     personId,
      name:   faceRecord.personName || personId,
      branch: faceRecord.branch     || '',
      role:   type,
      faceId: key
    };
    console.log('[FaceLogin] Built profile from face record:', user.name);
  }

  if (!user) {
    if (stat2) { stat2.textContent = 'Could not load profile — use password login'; stat2.className = 'cam-st error'; }
    return;
  }

  if (type === 'admin') window._adminPwd = defaultPwds.admin;
  currentRole = type;
  currentUser = { ...user, role: type };

  if (stat2) { stat2.textContent = '✓ Welcome, ' + (user.name || personId) + '!'; stat2.className = 'cam-st success'; }
  if (matchDiv) {
    matchDiv.innerHTML = '<div style="text-align:center;padding:14px">'
      + '<div style="font-size:36px">✅</div>'
      + '<div style="font-size:14px;color:var(--green);font-weight:700;margin-top:8px">' + (user.name || personId) + '</div>'
      + '<div style="font-size:11px;color:var(--tx3);margin-top:6px">Entering portal...</div>'
      + '</div>';
  }
  setTimeout(() => { closeFaceLoginModal(); enterDash(); }, 700);
}

// ── CAMERA ───────────────────────────────────────
async function startCam(videoId, cb) {
  try {
    // Request camera — Safari on macOS requires explicit constraints
    const constraints = {
      video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
      audio: false
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const v = document.getElementById(videoId);
    if (v) {
      v.srcObject = stream;
      // Safari needs playsinline + manual play
      v.setAttribute('playsinline', true);
      v.play().catch(() => { });
    }
    if (cb) cb(stream);
    return stream;
  } catch (e) {
    console.warn('Camera error:', e.name, e.message);
    const statusId = videoId === 'flmVideo' ? 'flmStatus' : 'frmStatus';
    const s = document.getElementById(statusId);
    if (s) {
      s.textContent = e.name === 'NotAllowedError'
        ? 'Camera access denied — please allow camera in browser settings'
        : e.name === 'NotFoundError'
          ? 'No camera found on this device'
          : 'Camera unavailable — ' + e.message;
      s.className = 'cam-st error';
    }
    if (cb) cb(null);
    return null;
  }
}

// Separate stream handles for each modal so they don't interfere
let regCamStream = null;

function stopCam() {
  if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  if (regCamStream) { regCamStream.getTracks().forEach(t => t.stop()); regCamStream = null; }
}

// ── TOAST ─────────────────────────────────────────
function showToast(msg, type) {
  type = type || 'info';
  const area = document.getElementById('toastArea');
  const d = document.createElement('div');
  d.className = 'toast ' + type;
  const icons = { success: IC.check, error: '<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>', info: IC.shield };
  d.innerHTML = (icons[type] || '') + '<span>' + msg + '</span>';
  area.appendChild(d);
  setTimeout(() => d.remove(), 3500);
}

// ── FIRESTORE RULES ──────────────────────────────
// Stored as a plain string array — NOT a template literal.
// This prevents JS from trying to parse ${database} and ${request.auth.uid}
// as template expressions, which was crashing the entire script in v1/v2.
const FIRESTORE_RULES = [
  "rules_version = '2';",
  "service cloud.firestore {",
  "  match /databases/{database}/documents {",
  "",
  "    // Any authenticated user can read and write",
  "    // faces: public read so face login works before authentication",
  "    match /faces/{id}        { allow read: if true; allow write: if request.auth != null; }",
  "    match /{document=**}     { allow read, write: if request.auth != null; }",
  "  }",
  "}"
].join("\n");

// ── FIRST TIME SETUP (called from login page before accounts exist) ──────────
// This runs createUserWithEmailAndPassword which does NOT require being
// logged in — it creates brand new accounts in Firebase Auth directly.
async function firstTimeSetup() {
  const btn    = document.getElementById('setupBtn');
  const status = document.getElementById('setupStatus');

  if (fbMode !== 'firebase') {
    status.style.display = 'block'; status.style.color = 'var(--red)';
    status.textContent = 'Not connected to Firebase. Check your internet connection.';
    return;
  }

  btn.disabled = true; btn.textContent = 'Creating accounts...';
  status.style.display = 'block'; status.style.color = 'var(--amber)';

  // Quota-safe: only 21 Auth accounts + ~11 tiny Firestore docs
  const demoAccounts = [
    { email: 'admin@campusasthra.edu.in', password: 'admin123' },
  ];
  for (let i = 1; i <= 10; i++) demoAccounts.push({ email: 't' + String(i).padStart(3,'0') + '@campusasthra.edu.in', password: 'teach123' });
  for (let i = 1; i <= 10; i++) demoAccounts.push({ email: 's' + String(i).padStart(4,'0') + '@campusasthra.edu.in', password: 'study123' });

  let created = 0, skipped = 0;
  for (let i = 0; i < demoAccounts.length; i++) {
    const acc = demoAccounts[i];
    status.textContent = 'Creating Auth account ' + (i+1) + '/' + demoAccounts.length + ' — ' + acc.email;
    try {
      const r = await createAuthAccount(acc.email, acc.password);
      if (r.ok && !r.existed) created++;
      else if (r.ok && r.existed) skipped++;
    } catch (e) {
      console.warn('Auth failed:', acc.email, e.message);
    }
  }

  status.textContent = 'Writing essential Firestore documents (quota-safe)...';
  try {
    await dbSet('users', 'ADMIN', DEMO.admin);
    const nb = db.batch();
    DEMO.notices.forEach(n    => nb.set(db.collection('notices').doc(n.id), n));
    DEMO.docRequests.forEach(d => nb.set(db.collection('docRequests').doc(d.id), d));
    await nb.commit();
    // NOTE: student/teacher docs are NOT written — they live in DEMO memory
    // Only individual records added by admin through the portal go to Firestore
  } catch (e) { console.warn('Firestore write:', e.message); }

  status.style.color = 'var(--green)';
  status.textContent = '✓ Done! ' + created + ' accounts created, ' + skipped + ' already existed. Login now!';
  btn.textContent = '✓ Setup Complete — Login Now';
  btn.style.background = 'rgba(42,184,122,.15)';
  btn.style.borderColor = 'rgba(42,184,122,.4)';
  btn.style.color = 'var(--green)';
  showToast('Firebase ready — login with admin / admin123', 'success');
}

// ── STARTUP ─────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', async function () {
  setFbDot('wait', 'Connecting...');

  const ok = initFirebase();
  if (!ok) {
    setFbDot('off', 'Init failed — Demo Mode');
    fbMode = 'demo';
    const sb = document.getElementById('setupBox');
    if (sb) sb.style.display = 'none';
    setRole('admin');
    return;
  }

  // Silently probe Firebase — no toast on every page load
  try {
    await Promise.race([
      db.collection('notices').limit(1).get(),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 6000))
    ]);
    // Reachable — show setup box in case accounts haven't been created yet
    setFbDot('on', 'campus-asthra-v2');
    const sb = document.getElementById('setupBox');
    if (sb) sb.style.display = 'block';
  } catch (e) {
    if (e.code === 'permission-denied') {
      // Security rules active — correct secured state, accounts exist
      fbMode = 'firebase';
      setFbDot('on', 'campus-asthra-v2');
      const sb = document.getElementById('setupBox');
      if (sb) sb.style.display = 'none';
    } else if (e.message === 'timeout') {
      setFbDot('off', 'Timeout — check internet');
      fbMode = 'demo'; db = null; fbAuth = null;
      const sb = document.getElementById('setupBox');
      if (sb) sb.style.display = 'none';
    } else {
      console.warn('Firebase startup:', e.code, e.message);
      setFbDot('on', 'campus-asthra-v2');
    }
  }

  setRole('admin');
});
