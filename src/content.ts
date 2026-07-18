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
      text: 'Flutter UIs, Riverpod/Provider state, Hive persistence, and notification-driven flows.',
    },
    {
      title: 'Backend systems',
      text: 'Django REST APIs, JWT auth, RBAC, filtering, and production-minded service design.',
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
  'Hive',
  'Provider',
]

export const stats = [
  { value: '11+', label: 'Public repositories' },
  { value: '4', label: 'Featured products' },
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
    title: 'Chatter',
    subtitle: 'Real-Time Chat Application',
    description:
      'Full-featured messaging app with real-time chat, user authentication, and message persistence.',
    highlights: [
      'Riverpod state management with async-safe provider patterns',
      'Firebase Authentication and Cloud Firestore synchronization',
      'Shipped across 7 iterative phases focused on reliability',
    ],
    href: 'https://github.com/SIDDHARTH279/Chatter-App',
    tags: ['Flutter', 'Firebase', 'Riverpod'],
    accent: '#5ec4b4',
  },
  {
    title: 'HabitFlow',
    subtitle: 'Daily Habit Tracker',
    description:
      'Cross-platform tracker with glassmorphism UI, streak logic, weekly charts, and local reminders.',
    highlights: [
      'Hive local persistence and Provider-driven state',
      'Streak calculation with repeatDays filtering',
      'fl_chart dashboards, notifications, swipe-to-delete',
    ],
    href: 'https://github.com/SIDDHARTH279/HabitFlow',
    tags: ['Flutter', 'Hive', 'Provider', 'fl_chart'],
    accent: '#6ea0c4',
  },
  {
    title: 'EduMarket',
    subtitle: 'Course Marketplace & LMS API',
    description:
      'Multi-role LMS backend for Students, Instructors, and Admins with RBAC and payment-ready schemas.',
    highlights: [
      'Django + DRF with role-based access control',
      'Relational models for profiles, courses, reviews, payments',
      'Advanced search and filtering via django-filter',
    ],
    href: 'https://github.com/SIDDHARTH279/Expense-Tracker-LMS-API',
    tags: ['Django', 'DRF', 'SQLite', 'RBAC'],
    accent: '#c4a06e',
  },
  {
    title: 'BlogAPI',
    subtitle: 'Blog / CMS REST Backend',
    description:
      'RESTful CMS API with CRUD for posts, categories, tags, and comments plus JWT-secured workflows.',
    highlights: [
      'SimpleJWT authentication and visibility rules',
      'Draft management for anonymous vs registered users',
      'Search, ordering, and pagination baked in',
    ],
    href: 'https://github.com/SIDDHARTH279',
    tags: ['Django', 'DRF', 'SimpleJWT'],
    accent: '#8a97a3',
  },
]

export const moreProjects = [
  {
    title: 'RentLedger',
    description:
      'Mobile-first rental property management for landlords — split-rent billing, chat, issue tracking, document vault, and analytics.',
    href: 'https://github.com/SIDDHARTH279/RentLedger',
    tags: ['Flutter', 'Django', 'DRF'],
  },
  {
    title: 'URL Shortener & Link Analytics API',
    description:
      'Production-ready shortener with JWT, Base62 codes, Redis caching, geolocation click tracking, QR codes, rate limits, and Celery tasks.',
    href: 'https://github.com/SIDDHARTH279/URL-Shortener-Link-Analytics-API',
    tags: ['Django', 'Redis', 'Celery'],
  },
  {
    title: 'Render FastAPI Project',
    description:
      'FastAPI service experiments deployed on Render — API design, async handlers, and cloud deployment practice.',
    href: 'https://github.com/SIDDHARTH279/Render-FastApi-Project',
    tags: ['Python', 'FastAPI'],
  },
  {
    title: 'DSA LeetCode',
    description:
      'Ongoing Java problem-solving practice — data structures, algorithms, and interview-ready patterns.',
    href: 'https://github.com/SIDDHARTH279/DSA-LEETCODE',
    tags: ['Java', 'DSA'],
  },
  {
    title: 'Note App',
    description:
      'Kotlin note-taking app exploring native Android patterns and Jetpack-era UI foundations.',
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
