import { AcademicCard, Facility, GalleryItem, Notice, Benefit, StatItem } from '../types';

export const SCHOOL_INFO = {
  name: 'Ranthambore International Academy',
  shortName: 'RIA',
  location: 'Sawai Madhopur, Rajasthan, India',
  tagline: 'Where Learning Meets Possibility.',
  eyebrow: 'RANTHAMBORE • RAJASTHAN',
  phone: '+91 00000 00000',
  email: 'admissions@example.com',
  hours: 'Monday – Saturday · 8:00 AM – 4:00 PM',
  address: 'Ranthambore Road, Kundera Circle, Sawai Madhopur, Rajasthan 322001',
  session: 'Academic Session 2026–27',
  isDemo: true,
};

export const TRUST_STRIP_ITEMS = [
  { label: 'Holistic Education', desc: 'Intellectual, ethical and physical balance' },
  { label: 'Future Ready Skills', desc: 'Coding, critical inquiry & global fluency' },
  { label: 'Experienced Faculty', desc: '1:12 mentor ratio & continuous training' },
  { label: 'Safe & Caring Campus', desc: '24/7 security, lush green peaceful acreage' },
];

export const TRUST_STATS: StatItem[] = [
  { value: 25, suffix: '+', label: 'Years of Excellence', sublabel: 'Nurturing generations since foundation' },
  { value: 1500, suffix: '+', label: 'Students Inspired', sublabel: 'Active learners across all divisions' },
  { value: 98, suffix: '%', label: 'Parent Satisfaction', sublabel: 'Endorsed by our guardian community' },
];

export const ACADEMIC_PROGRAMS: AcademicCard[] = [
  {
    id: 'primary',
    step: '01',
    title: 'Primary School',
    subtitle: 'Grades 1 – 5',
    description: 'Building strong foundations through curiosity, creativity and joyful learning.',
    highlights: [
      'Inquiry-based foundational numeracy and literacy',
      'Experiential nature science & environmental stewardship',
      'Art, music, storytelling and expressive language',
      'Kindness, empathy and collaborative habits',
    ],
    icon: 'BookOpen',
  },
  {
    id: 'middle',
    step: '02',
    title: 'Middle School',
    subtitle: 'Grades 6 – 8',
    description: 'Developing deeper understanding, confidence and independent thinking.',
    highlights: [
      'Conceptual science and analytical mathematics',
      'Structured digital literacy & computational logic',
      'Debate, performing arts and historical perspective',
      'Leadership micro-projects and inter-house athletics',
    ],
    icon: 'Compass',
  },
  {
    id: 'senior',
    step: '03',
    title: 'Senior School',
    subtitle: 'Grades 9 – 12',
    description: 'Focused academic preparation with guidance for higher education and future careers.',
    highlights: [
      'Rigorous subject specialization across Science, Humanities & Commerce',
      'Dedicated higher education & university advisory cell',
      'Research monographs and competitive Olympiad coaching',
      'Ethical governance, symposiums and community outreach',
    ],
    icon: 'GraduationCap',
  },
  {
    id: 'beyond',
    step: '04',
    title: 'Beyond The Classroom',
    subtitle: 'Co-Curricular & Life Skills',
    description: 'Clubs, projects, sports, arts and experiences that develop well-rounded individuals.',
    highlights: [
      'Ecological conservation initiatives & Tiger reserve field-studies',
      'Orchestra, classical Indian vocal, theater and ceramic crafts',
      'Football, cricket, lawn tennis, badminton and horse riding',
      'Robotics, Model United Nations and social entrepreneurship',
    ],
    icon: 'Sparkles',
  },
];

export const WHY_CHOOSE_BENEFITS: Benefit[] = [
  {
    id: 'educators',
    pillar: '01 / FACULTY',
    title: 'Experienced Educators',
    description:
      'Passionate mentors with advanced pedagogy degrees who recognize each student’s unique pace, fostering intellectual courage rather than rote memorization.',
  },
  {
    id: 'student-centered',
    pillar: '02 / PEDAGOGY',
    title: 'Student-Centered Learning',
    description:
      'Curricula calibrated to student passions, active question-asking, and collaborative project defense that make children co-authors of their education.',
  },
  {
    id: 'tech-classrooms',
    pillar: '03 / INFRASTRUCTURE',
    title: 'Technology Enabled Classrooms',
    description:
      'Interactive smart boards, high-speed digital science simulation stations, and safe digital research repositories designed for intentional technology use.',
  },
  {
    id: 'sports-arts',
    pillar: '04 / WELL-ROUNDED',
    title: 'Sports & Creative Arts',
    description:
      'Expansive athletics pavilions, dedicated studios for visual fine arts, Indian and western music suites, and professionally coached team sports.',
  },
  {
    id: 'safe-environment',
    pillar: '05 / WELLBEING',
    title: 'Safe & Supportive Environment',
    description:
      'A secure, gated 20-acre green campus equipped with verified access protocols, infirmary with round-the-clock nursing, and dedicated pastoral counseling.',
  },
  {
    id: 'values-character',
    pillar: '06 / ETHOS',
    title: 'Strong Values & Character',
    description:
      'Rooted in integrity, respect for heritage, environmental compassion, and global citizenship, preparing graduates who stand out for their character.',
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'smart-classrooms',
    title: 'Smart Classrooms',
    tag: 'CLASSROOM',
    description: 'Ergonomic, sunlit spaces fitted with interactive audio-visual panels and modular seating.',
    features: ['Acoustic insulation', 'Ergonomic seating', 'Smart interactive displays'],
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'science-labs',
    title: 'Science Laboratories',
    tag: 'LABORATORY',
    description: 'High-spec Physics, Chemistry, and Biology laboratories equipped for hands-on experimentation.',
    features: ['Individual experiment benches', 'Safety shower & fume extraction', 'Digital sensor probes'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'digital-learning',
    title: 'Digital Learning Spaces',
    tag: 'INNOVATION',
    description: 'Dedicated computer hubs and maker spaces for coding, robotics, 3D modeling, and design thinking.',
    features: ['High-performance workstations', 'Robotics toolkits', 'Dedicated gigabit fiber'],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'library-lounge',
    title: 'Library & Reading Lounge',
    tag: 'LIBRARY',
    description: 'A quiet two-story sanctuary with over 18,000 titles, periodicals, and comfortable reading nooks.',
    features: ['Quiet study pods', 'Digital catalog system', 'Rare collection archives'],
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sports-facilities',
    title: 'Sports Facilities',
    tag: 'SPORTS',
    description: 'Olympic-dimension running track, synthetic basketball courts, cricket pitch, and swimming pool.',
    features: ['400m athletic track', 'All-weather tennis courts', 'Indoor multi-sports arena'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'creative-arts',
    title: 'Creative Arts Studio',
    tag: 'ARTS',
    description: 'Bright open studios dedicated to painting, sculpting, pottery, and Indian performing arts.',
    features: ['Pottery kilns & wheels', 'Natural northern skylight', 'Exhibition gallery wall'],
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'safe-campus',
    title: 'Safe Campus',
    tag: 'CAMPUS',
    description: 'Gated 20-acre walled estate with controlled biometric access, HD CCTV coverage, and 24/7 medical room.',
    features: ['Perimeter security 24/7', 'Full-time resident medical officer', 'GPS-enabled school fleet'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'activity-spaces',
    title: 'Activity & Collaboration Spaces',
    tag: 'COMMUNITY',
    description: 'An open-air amphitheater and modern auditorium designed for student debates, theater, and assemblies.',
    features: ['650-seat tiered auditorium', 'Open-air stone amphitheater', 'Acoustic sound design'],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'Campus Life',
    title: 'Main Academic Quadrangle',
    caption: 'Sunlit sandstone courtyards reflecting Rajasthani architectural heritage with modern open verandas.',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'gal-2',
    category: 'Learning',
    title: 'Collaborative STEM Workshop',
    caption: 'Senior students testing experimental physics models during the annual science colloquium.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'gal-3',
    category: 'Sports',
    title: 'Inter-House Athletics Meet',
    caption: 'Junior sprint finals held on the 400-meter all-weather track under evening floodlights.',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'gal-4',
    category: 'Arts',
    title: 'Visual Arts & Sculpting Studio',
    caption: 'Creative expression through local terracotta, oil painting, and heritage block print workshops.',
    imageUrl: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'gal-5',
    category: 'Celebrations',
    title: 'Annual Founders Day Performance',
    caption: 'Student choir and theatrical drama production celebrating cultural unity and ethical values.',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'gal-6',
    category: 'Activities',
    title: 'Eco-Club Nature Field Study',
    caption: 'Guided biodiversity recording along the Ranthambore buffer perimeter with conservation rangers.',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'gal-7',
    category: 'Classrooms',
    title: 'Primary Inquiry Learning Circle',
    caption: 'Foundational storytelling and guided curiosity sessions in our sun-drenched early years pavilion.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'gal-8',
    category: 'Student Life',
    title: 'Central Library Reading Lounge',
    caption: 'Students engaged in quiet reading, literature circles, and independent research monographs.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80',
  },
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Enquire',
    desc: 'Submit a simple digital enquiry or connect with our friendly admissions coordinators.',
  },
  {
    step: '02',
    title: 'Visit',
    desc: 'Tour our lush 20-acre campus, meet educators, and observe active classes in session.',
  },
  {
    step: '03',
    title: 'Apply',
    desc: 'Complete the student application form along with past academic records and documents.',
  },
  {
    step: '04',
    title: 'Meet',
    desc: 'An informal interaction with the child and parents to understand goals and learning style.',
  },
  {
    step: '05',
    title: 'Begin',
    desc: 'Receive formal admission confirmation, welcome kit, and orientation schedule.',
  },
];

export const NOTICES: Notice[] = [
  {
    id: 'notice-1',
    category: 'Admissions',
    date: 'March 15, 2026',
    title: 'Admissions Open for Academic Session 2026–27',
    excerpt:
      'Registrations are formally open for Nursery through Grade 11. Prospective families are invited to schedule personal campus walkthroughs and interact with academic coordinators.',
    fullContent:
      'Ranthambore International Academy is pleased to announce that registrations are formally open for the upcoming 2026–27 Academic Session across Primary, Middle, and Senior divisions. We maintain balanced student-to-teacher ratios (1:12) to ensure personalized academic attention. Interested parents may book an interactive campus walkthrough and submit preliminary registration papers via the online portal or by visiting the Admissions Office.',
    author: 'Admissions Directorate',
  },
  {
    id: 'notice-2',
    category: 'Campus Life',
    date: 'April 02, 2026',
    title: 'Annual Sports & Activities Week: Dates Announced',
    excerpt:
      'The inter-house sports festival featuring track events, football, badminton, and indigenous games will take place at the main sports complex from April 24 to 28.',
    fullContent:
      'The Academy will host its flagship Annual Sports & Activities Week from April 24 to April 28, 2026. Events will encompass track & field, tennis, football, cricket, chess, debate, and classical performing arts. All four academy houses—Aravali, Chambal, Vindhya, and Thar—will participate under the mentorship of senior sports directors and student house captains.',
    author: 'Department of Athletics & Co-Curriculars',
  },
  {
    id: 'notice-3',
    category: 'Community',
    date: 'May 10, 2026',
    title: 'Parent Orientation Programme & Interactive Forum',
    excerpt:
      'Join Dr. Ananya Sharma and senior heads of department for an overview of academic roadmaps, experiential learning milestones, and health protocols.',
    fullContent:
      'We invite all incoming and existing parents to the annual Parent Orientation Programme at the RIA Main Auditorium. This session provides detailed insights into our curriculum frameworks, student pastoral care systems, digital learning platforms, and parental partnership initiatives. Refreshments and faculty breakout conversations will follow the principal’s address.',
    author: 'Office of the Principal',
  },
];
