export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type PortfolioProject = {
  id: string;
  title: string;
  year: number;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  period: string;
  details?: string;
};

export type LanguageItem = { language: string; proficiency: string };

export type AchievementItem = {
  title: string;
  organization: string;
  year: number | string;
  details?: string;
};

export type AnastasiaPortfolio = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  notionProjects: string;
  experience: ExperienceItem[];
  projects: PortfolioProject[];
  skills: Record<string, SkillGroup>;
  education: EducationItem[];
  certifications: string[];
  languages: LanguageItem[];
  achievements: AchievementItem[];
  social: { platform: string; url: string; label: string }[];
};

export const anastasiaPortfolio: AnastasiaPortfolio = {
  name: 'Anastasia Yakimovska',
  title: 'Tech Entrepreneur & Software Engineer',
  tagline: 'Building user-centered solutions at the intersection of technology, education, and innovation.',
  bio: 'Aspiring tech entrepreneur with a software engineering background and startup leadership experience. Currently a final-year student at Sofia University and co-founder of KidsGo, an education-tech marketplace. Passionate about leveraging technology to solve real-world problems in Southeast Europe.',
  location: 'Sofia, Bulgaria',
  email: 'anastasiayakimovska@gmail.com',
  notionProjects: 'https://yanastasia.notion.site/Classes-Uni-67c00c65241a4336b7c15fba36d5abec',

  experience: [
    {
      id: 'globalfoundries',
      company: 'GlobalFoundries',
      role: 'Principal Technician Design Enablement, DFM',
      period: 'September 2023 – Present',
      location: 'Sofia, Bulgaria',
      highlights: [
        'Built and maintained infrastructure tools for global DFM workflows, including web-based and UNIX-based applications.',
        'Executed development and QA for DFM decks across multiple technologies, contributing to a dozen successful releases.',
        'Automated deck testing processes, improving efficiency through generation of holding and scoring cells.',
        'Completed SVRF and TCL training, enabling contributions to deck development and automation applications.',
        'Co-authored a technical paper: "Machine learning-assisted pattern optimizations for reducing Design for Manufacturability (DFM) rule check violations."',
        'Finished a 6-month internship, completed Cadence and Calibre Training for DRC and LVS',
        'Initiated and led a Python-based automation project with the FILL team to generate XML files for fill synthesis directly from PSV rules',
        'Active member of GlobalWomen Sofia and GlobalU; co-organized the GlobalWomen conference and mentored students during the Summer Practice 2025 program.',
        'Core member of Early Tenure Professionals (ETP) Bulgaria, supporting initiatives for professional development and community building.'
      ]
    },
    {
      id: 'kidsgo',
      company: 'KidsGo',
      role: 'Co-founder and CEO',
      period: 'January 2023 - Present',
      location: 'Sofia, Bulgaria',
      highlights: [
        'Developed business and financial plans; conducted market and customer research.',
        'Led investor pitches, product design, and team operations.',
        'Built strategic partnerships with universities, foundations, and NGOs.',
        'Participated in leading European accelerators: Start For Future, Beyond, SEEIP, Skills2Scale, and Plug&Pay.',
        'Represented KidsGo on a panel at The Athenian Nexus 2024 Summit.',
        'Awarded 2nd place in the Young Entrepreneurs in Science competition (2023) organized by the Technology Transfer Center at the Research Sector of Sofia University'
      ]
    },
    {
      id: 'mentormate',
      company: 'MentorMate',
      role: 'Software Developer Internship',
      period: 'February 2022 - March 2022',
      location: 'Sofia, Bulgaria',
      highlights: [
        'Completed training in Databases with SQL, Linux, Docker, JavaScript, Typescript, Vue.js'
      ]
    },
    {
      id: 'ministerstvo',
      company: 'Cafe Bar Ministerstvo',
      role: 'Social Media and Event Manager',
      period: 'January 2021 - April 2024',
      location: 'Kumanovo, Macedonia',
      highlights: [
        'Coordinated and handled reservations at a capacity of 200+ people',
        'Provided excellent service and hospitality to customers',
        'Designed and executed social media strategy, including image, video and written content for 3000+ followers on Instagram',
        'Worked closely with photographers and videographers on projects to ensure content alignment with brand'
      ]
    }
  ],

  projects: [
    {
      id: 'actingeurope',
      title: 'ActingEurope.eu: Web Platform for International Theatre Festival',
      year: 2025,
      description: 'Fully designed, developed, and deployed a multilingual web platform for the Acting Europe theatre festival, uniting theatres from Bulgaria, North Macedonia, and Serbia.',
      details: [
        'Built the system end-to-end—from UX/UI design and front-end development to back-end logic, database integration, and cloud deployment.',
        'Implemented user registration, login, and email verification, along with an admin dashboard for managing events and participants.',
        'Ensured GDPR compliance, accessibility, and responsive design.',
        'Collaborated with festival organizers to align the platform with branding and operational needs, supporting a successful event in Kyustendil in September 2025.'
      ],
      technologies: ['Vue.js', 'JavaScript', 'HTML/CSS', 'Database Design', 'Cloud Deployment', 'GDPR Compliance'],
      link: 'https://actingeurope.eu',
      featured: true
    },
    {
      id: 'kidsgo-marketplace',
      title: 'KidsGo: Marketplace for Kids Activities',
      year: 2023,
      description: 'Co-founded KidsGo, an education-tech marketplace connecting families with quality kids activities and experiences.',
      details: [
        'Led market research and customer discovery across multiple European markets.',
        'Designed and iterated on product and business model through accelerator programs.',
        'Pitched to investors and secured partnerships with educational institutions and NGOs.',
        'Built strategic relationships in the educational technology ecosystem.'
      ],
      technologies: ['Product Design', 'Market Research', 'Startup Strategy', 'Investor Pitching'],
      featured: true
    },
    {
      id: 'ai-hackathon',
      title: 'AI&I Hackathon - Education & Culture Solution',
      year: 2022,
      description: 'Participated in an AI-focused hackathon, developing a solution in education and culture.',
      details: [
        'Attended sessions on cybersecurity, ethics, design thinking, pitching, and startup funding.',
        'Collaborated with mentors to develop a comprehensive market assessment, technical structure, business plan, and roadmap.'
      ],
      technologies: ['Design Thinking', 'AI/ML', 'Business Planning', 'Pitching'],
      featured: false
    },
    {
      id: 'launchub-vc',
      title: 'LAUNCHub VC Crash Course & Research',
      year: 2025,
      description: 'Participated in LAUNCHub Ventures intensive VC program and published research on startup ecosystems.',
      details: [
        'Completed a full investment memo and presented to a simulated investment committee.',
        'Gained hands-on experience in deal analysis, term sheets, and market sizing.',
        'Published research: "Universities as Startup Hubs: Applicability of Global Models to the Balkan Ecosystem."'
      ],
      technologies: ['Venture Capital', 'Investment Analysis', 'Research', 'Market Analysis'],
      featured: false
    },
    {
      id: 'erasmus-program',
      title: 'Basis for students\' autonomy in thinking and action - Erasmus+ Programme',
      year: 2019,
      description: 'International mobility project fostering critical thinking and leadership skills.',
      details: [
        'Acquired professional experience in an international context, exchanging ideas with students from Poland, Turkey, Italy, Greece and North Macedonia.',
        'Developed critical thinking, leadership, communication and social skills.'
      ],
      technologies: ['Leadership', 'Communication', 'International Collaboration'],
      featured: false
    }
  ],

  skills: {
    softwareDevelopment: {
      label: 'Software Development',
      items: ['C++', 'PHP', 'Python', 'JavaScript', 'TypeScript', 'Vue.js', 'HTML/CSS', 'OOP', 'Data Structures', 'Algorithms', 'XML', 'TCL', 'SVRF', 'UNIX/Linux scripting', 'Software Documentation']
    },
    dataAnalysis: {
      label: 'Data Analysis',
      items: ['R', 'SQL', 'Tableau', 'Matlab', 'Data Visualization']
    },
    productManagement: {
      label: 'Product Management & Design',
      items: ['Figma', 'User Research', 'Design Thinking', 'Prototyping', 'UX Testing', 'Market Research', 'Scope Assessment']
    },
    softSkills: {
      label: 'Soft Skills',
      items: ['Technical writing', 'Documentation', 'Cross-functional collaboration', 'Mentorship', 'Leadership', 'Public speaking', 'Event organization', 'Community building']
    },
    digitalMarketing: {
      label: 'Digital Marketing',
      items: ['Creative direction', 'Brand positioning', 'Photo/video editing', 'Copywriting', 'Marketing strategies', 'Content strategy']
    }
  },

  education: [
    {
      id: 'sofia-uni',
      school: 'Sofia University "St. Kliment Ohridski"',
      degree: 'BSc, Software Engineering',
      period: 'October 2020 — Present',
      details: 'Final-year student, expected to graduate in 2025. Currently completing final exams.'
    },
    {
      id: 'brainster',
      school: 'Brainster Academy',
      degree: 'Academy for Project and Product Management',
      period: 'May 2025 — February 2026',
      details: 'Hands-on program focused on practical skills in project and product management, including agile methodologies, stakeholder communication, roadmap planning, and product lifecycle strategies.'
    },
    {
      id: 'railsgirls',
      school: 'RailsGirls',
      degree: 'Ruby on Rails Bootcamp',
      period: '2023',
      details: 'Two-day bootcamp learning the basics of web development using Ruby on Rails.'
    }
  ],

  certifications: [
    'C1 Cambridge English Level 2 Certificate in ESOL International (First)',
    'Google Data Analytics Specialization',
    'Containers K8s and Istio on IBM Cloud'
  ],

  languages: [
    { language: 'English', proficiency: 'C1' },
    { language: 'Bulgarian', proficiency: 'Fluent' },
    { language: 'Macedonian', proficiency: 'Native' },
    { language: 'Serbian', proficiency: 'Conversational' }
  ],

  achievements: [
    {
      title: '2nd Place - Young Entrepreneurs in Science Competition',
      organization: 'Technology Transfer Center at Sofia University',
      year: 2023
    },
    {
      title: 'Panel Speaker',
      organization: 'The Athenian Nexus 2024 Summit',
      year: 2024
    },
    {
      title: 'Co-organizer',
      organization: 'GlobalWomen Sofia Conference',
      year: 2024
    },
    {
      title: 'Accelerator Participant',
      organization: 'Start For Future, Beyond, SEEIP, Skills2Scale, Plug&Pay',
      year: '2023-2024'
    },
    {
      title: 'Technical Paper Co-author',
      organization: 'GlobalFoundries',
      year: 2024,
      details: '"Machine learning-assisted pattern optimizations for reducing Design for Manufacturability (DFM) rule check violations."'
    }
  ],

  social: [
    { platform: 'LinkedIn', url: '#', label: 'linkedin.com/in/anastasia-yakimovska' },
    { platform: 'GitHub', url: '#', label: 'github.com/yanastasia' },
    { platform: 'Twitter', url: '#', label: '@yanastasia' }
  ]
}
