export const profile = {
  name: 'Siddharth Tyagi',
  role: 'Flutter & Django Developer',
  tagline:
    'I ship scalable mobile and web products — real-time apps, REST backends, and polished Flutter interfaces.',
  email: 'st472422@gmail.com',
  phone: '+919810690213',
  location: 'Ghaziabad · ABES Engineering College',
  availability: 'Open to internships & freelance',
  links: {
    github: 'https://github.com/SIDDHARTH279',
    linkedin: 'https://linkedin.com/in/siddharth-tyagi8',
    resume: '/Siddharth_Tyagi_Resume.pdf',
  },
}

export const about = {
  heading: 'About',
  body: `Flutter and Django Developer with hands-on experience building scalable mobile and web applications using Flutter, Dart, Firebase, Django, and Riverpod. Skilled in developing responsive user interfaces, state management, REST API integration, and real-time applications.`,
  focus: [
    {
      title: 'Mobile craft',
      text: 'Flutter UIs, Riverpod state, local notifications, OCR helpers, and release-ready Android builds.',
    },
    {
      title: 'Backend systems',
      text: 'Django REST APIs, JWT auth, PostgreSQL, RBAC, and production deploys on Railway.',
    },
    {
      title: 'Real-time products',
      text: 'Firebase Auth, Cloud Firestore sync, and chat experiences built in iterative phases.',
    },
  ],
}

export const ticker = [
  'Flutter',
  'Dart',
  'Riverpod',
  'Firebase',
  'Django',
  'DRF',
  'FastAPI',
  'Kotlin',
  'Jetpack Compose',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Celery',
  'Railway',
  'Hive',
  'Provider',
]

export const stats = [
  { value: '12+', label: 'Public repositories' },
  { value: '5', label: 'Featured products' },
  { value: '2', label: 'Hackathon finalist runs' },
  { value: '6', label: 'Certifications' },
]

export const skills = [
  {
    label: 'Languages',
    items: ['Kotlin', 'Dart', 'Python', 'Java', 'C', 'SQL'],
  },
  {
    label: 'Mobile Development',
    items: [
      'Flutter',
      'Jetpack Compose',
      'Android Development',
      'Provider',
      'Riverpod',
      'Hive',
    ],
  },
  {
    label: 'Backend & APIs',
    items: [
      'Django',
      'Django REST Framework',
      'Firebase',
      'RESTful APIs',
      'JSON',
      'HTTP',
      'FastAPI',
    ],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman'],
  },
]

export const projects = [
  {
    title: 'MediMind',
    subtitle: 'Medicine Reminder App',
    description:
      'Full-stack medicine reminder with Flutter Android client and Django REST API — schedules, today doses, reminders, OCR, and adherence tracking.',
    highlights: [
      'JWT auth with Google Sign-In, email/password, and OTP password reset',
      'Today doses (taken / snooze), local notifications, and user-scoped data isolation',
      'Prescription OCR (ML Kit), RxNorm search, streak / adherence / calendar analytics',
      'PostgreSQL API on Railway with signed Android APK releases on GitHub',
    ],
    href: 'https://github.com/SIDDHARTH279/medimind',
    tags: ['Flutter', 'Django', 'DRF', 'PostgreSQL', 'Railway'],
    accent: '#2EC4B6',
  },
  {
    title: 'Chatter',
    subtitle: 'Real-Time Chat Application',
    description:
      'WhatsApp-inspired Flutter messenger with instant delivery, user discovery, and presence — built on Firebase Auth, Firestore streams, and feature-first clean architecture.',
    highlights: [
      'Email/password auth with AuthGate routing and Riverpod StreamProviders',
      'Real-time 1:1 chat via Firestore streams, auto-scroll, and message persistence',
      'User discovery with live name search, online status, and last-seen tracking',
      'FCM device tokens stored per user for push-ready notification wiring',
    ],
    href: 'https://github.com/SIDDHARTH279/Chatter-App',
    tags: ['Flutter', 'Firebase', 'Firestore', 'Riverpod', 'FCM'],
    accent: '#5ec4b4',
  },
  {
    title: 'HabitFlow',
    subtitle: 'Daily Habit Tracker',
    description:
      'Local-first habit tracker with glassmorphism UI, streak logic, weekly/monthly analytics, and exact-time reminders — privacy-focused with zero cloud dependency.',
    highlights: [
      'Hive persistence + Provider state; habits, streaks, and stats stay on-device',
      'Today dashboard with time-based greetings, progress bar, and swipe-to-delete',
      'Weekly fl_chart trends, color-coded calendar, and per-habit completion rates',
      'Custom icons/colors, weekday scheduling, dark/light themes, local notifications',
    ],
    href: 'https://github.com/SIDDHARTH279/HabitFlow',
    tags: ['Flutter', 'Hive', 'Provider', 'fl_chart'],
    accent: '#6ea0c4',
  },
  {
    title: 'EduMarket',
    subtitle: 'Course Marketplace & LMS API',
    description:
      'Multi-role Learning Management System API for Students, Instructors, and Admins — courses, enrollments, lessons, reviews, and payment tracking in Django REST Framework.',
    highlights: [
      'RBAC across Student / Instructor / Admin with custom Profile on Django User',
      'Course CRUD, lesson/video content, enroll + add_review custom actions',
      'Reviews, ratings, and payment/transaction models for marketplace flows',
      'django-filter search/ordering, pagination, and DRF APITestCase coverage',
    ],
    href: 'https://github.com/SIDDHARTH279/Expense-Tracker-LMS-API',
    tags: ['Django', 'DRF', 'SQLite', 'RBAC'],
    accent: '#c4a06e',
  },
  {
    title: 'NotesAPI',
    subtitle: 'Personal Notes REST Backend',
    description:
      'Django REST notes service with categorized CRUD — serializers, viewsets, and migrations structured for a clean personal knowledge / CMS-style API.',
    highlights: [
      'Notes model with category support and Django admin registration',
      'DRF serializers and URL routing for create, read, update, and delete',
      'SQLite-backed project layout ready to extend with auth or tags',
      'Practice ground for Django apps, migrations, and REST resource design',
    ],
    href: 'https://github.com/SIDDHARTH279/Personal-Notes-Api',
    tags: ['Django', 'DRF', 'SQLite'],
    accent: '#8a97a3',
  },
]

export const moreProjects = [
  {
    title: 'RentLedger',
    description:
      'Mobile-first rental OS for landlords — Flutter clients plus Django REST backend with split-rent billing, real-time chat, issue tickets, document vault, and portfolio analytics.',
    href: 'https://github.com/SIDDHARTH279/RentLedger',
    tags: ['Flutter', 'Django', 'DRF'],
  },
  {
    title: 'URL Shortener & Link Analytics API',
    description:
      'Production-minded shortener: JWT auth, Base62 codes, custom aliases, expiry, Redis cache, IP geolocation clicks, QR codes, rate limits, and Celery background jobs.',
    href: 'https://github.com/SIDDHARTH279/URL-Shortener-Link-Analytics-API',
    tags: ['Django', 'Redis', 'Celery'],
  },
  {
    title: 'Render FastAPI Project',
    description:
      'FastAPI service experiments on Render — async route handlers, OpenAPI docs, and end-to-end cloud deploy practice for Python APIs.',
    href: 'https://github.com/SIDDHARTH279/Render-FastApi-Project',
    tags: ['Python', 'FastAPI', 'Render'],
  },
  {
    title: 'DSA LeetCode',
    description:
      'Java LeetCode practice synced via LeetHub — arrays, two pointers, sorting, and interview patterns with topic-organized solutions.',
    href: 'https://github.com/SIDDHARTH279/DSA-LEETCODE',
    tags: ['Java', 'DSA'],
  },
  {
    title: 'Note App',
    description:
      'Native Kotlin note-taking app exploring Android UI patterns, activity/fragment flows, and Jetpack-era foundations.',
    href: 'https://github.com/SIDDHARTH279/Note-App',
    tags: ['Kotlin', 'Android'],
  },
]

export const education = [
  {
    title: 'B.Tech (Electrical and Computer Engineering)',
    place: 'ABES Engineering College',
    period: 'Sep 2023 – Aug 2027',
  },
  {
    title: 'Class 12th',
    place: 'MPS Public School',
    period: 'May 2023',
  },
  {
    title: 'Class 10th',
    place: 'MPS Public School',
    period: 'Sep 2021',
  },
]

export const awards = [
  {
    title: 'Finalist, Hackamania Hackathon',
    detail: 'Microsoft Azure Supported · Team The Elites',
    period: 'May 2025',
  },
  {
    title: "Finalist, Hack Genesis '25",
    detail: 'International Hackathon · CHRIST University',
    period: 'Sep 2025',
  },
]

export const certifications = [
  { name: 'Claude Code In Action', org: 'Anthropic' },
  { name: 'AI Fluency Framework & Foundations', org: 'Anthropic' },
  { name: 'Complete Python Mastery', org: 'Code With Mosh' },
  {
    name: 'Android Jetpack Compose: The Comprehensive Bootcamp',
    org: 'Udemy',
  },
  {
    name: 'The Complete Android 14 & Kotlin Development Masterclass',
    org: 'Udemy',
  },
  { name: 'Learn Java Programming: Beginner to Master', org: 'Udemy' },
]

export const contact = {
  heading: 'Let’s build something solid',
  body: 'Open to internships, freelance, and collaborative projects across Flutter, Android, and Django backends.',
}
