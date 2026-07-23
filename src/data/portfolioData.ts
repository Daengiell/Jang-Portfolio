import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  FeatureCardItem,
  StatItem
} from '../types';

export const PERSONAL_INFO = {
  name: 'Jhon Rey A. Ebro',
  titles: [
    'Full Stack Developer',
    'WordPress Developer',
    'Website Designer',
    'PHP Developer'
  ],
  introduction:
    'I build fast, modern, and user-friendly websites that combine clean design with efficient functionality. I specialize in WordPress development, custom PHP applications, and responsive web design that transforms ideas into reliable digital experiences.',
  aboutMe:
    'I am a passionate Full Stack Developer and Website Designer dedicated to creating modern, scalable, and user-focused digital solutions. I enjoy building responsive websites, developing custom web applications, and solving business problems through clean and maintainable code. I quickly adapt to new technologies, collaborate effectively with teams, and continuously improve my technical skills to deliver high-quality results.',
  phone: '0926 926 0758',
  phoneClean: '09269260758',
  email: 'ebrojhon.je@gmail.com',
  location: 'Quezon City, Philippines'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    iconName: 'Layout',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Responsive Web Design']
  },
  {
    title: 'Backend',
    iconName: 'Server',
    skills: ['PHP']
  },
  {
    title: 'Database',
    iconName: 'Database',
    skills: ['MySQL']
  },
  {
    title: 'CMS & Website Builders',
    iconName: 'Globe',
    skills: ['WordPress', 'Elementor', 'Astra Theme']
  },
  {
    title: 'Other Development',
    iconName: 'Code',
    skills: ['Web Development', 'Arduino Programming', 'Mobile App Development']
  },
  {
    title: 'IT Support',
    iconName: 'Wrench',
    skills: [
      'Computer Troubleshooting',
      'Network Troubleshooting',
      'Printer Sharing',
      'Computer Formatting'
    ]
  },
  {
    title: 'Productivity',
    iconName: 'Briefcase',
    skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint']
  },
  {
    title: 'Design',
    iconName: 'Palette',
    skills: ['Adobe Photoshop']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Website Designer',
    company: 'Boundless Business Services Pty Ltd',
    period: 'April 2025 – Present',
    badge: 'Current Role',
    bullets: [
      'Designed and developed responsive WordPress websites',
      'Built pages using Elementor',
      'Optimized websites for speed and SEO',
      'Implemented responsive layouts',
      'Worked closely with marketing and design teams'
    ]
  },
  {
    id: 'exp-2',
    role: 'IT Specialist – Web Developer',
    company: 'ANC+ Group of Companies',
    period: 'July 2022 – October 2024',
    bullets: [
      'Developed internal business systems',
      'Built custom PHP applications',
      'Managed MySQL databases',
      'Maintained company websites',
      'Provided IT support and troubleshooting'
    ]
  },
  {
    id: 'exp-3',
    role: 'Customer Service Representative',
    company: 'Infocom Technologies, Inc.',
    period: 'October 2020 – January 2022',
    bullets: [
      'Delivered customer support',
      'Strengthened communication and problem-solving skills'
    ]
  }
];

export const PROJECTS: Project[] = [
  // WordPress Website Projects
  {
    id: 'wp-1',
    title: 'Bimblebox Nature Refuge',
    category: 'WordPress Websites',
    subtitle: 'Conservation & Environmental Refuge Website',
    shortDescription: 'Designed and developed a responsive, accessible WordPress website for Bimblebox Nature Refuge to promote environmental conservation efforts and public education.',
    fullDescription: 'A fully custom WordPress website designed for Bimblebox Nature Refuge. Built with Elementor and enhanced with custom CSS/JavaScript to deliver an immersive narrative showcasing environmental protection, biodiversity data, and community advocacy.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://bimblebox.org',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Speed and SEO optimization for maximum web discoverability',
      'Custom Elementor layouts tailored to conservation story-telling',
      'Responsive design across mobile, tablet, and desktop viewports'
    ]
  },
  {
    id: 'wp-2',
    title: 'Boundless Business Services',
    category: 'WordPress Websites',
    subtitle: 'Corporate Business & B2B Solutions Website',
    shortDescription: 'High-converting corporate WordPress website highlighting B2B services, client consultation funnels, and streamlined branding aesthetics.',
    fullDescription: 'Modern corporate portal built for Boundless Business Services. Features customized Elementor modules, optimized landing funnels, fast asset loading, and seamless user interaction points.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://boundlessbs.com',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Sleek SaaS & B2B layout styling with high-impact call to actions',
      'Custom JavaScript micro-interactions and mobile menu animations',
      'On-page SEO setup with structured schema markup'
    ]
  },
  {
    id: 'wp-3',
    title: 'Become A Bizillionaire',
    category: 'WordPress Websites',
    subtitle: 'Entrepreneurship & Financial Education Hub',
    shortDescription: 'Dynamic WordPress website dedicated to financial literacy, coaching resources, and modern business growth courses.',
    fullDescription: 'Engaging content hub built for Become A Bizillionaire, showcasing courses, media resources, and interactive landing pages tailored for aspiring entrepreneurs.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://becomeabizillionaire.com',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'High-energy modern visual aesthetic with custom typography',
      'Optimized content structure for high conversion rates',
      'Mobile-first responsive architecture'
    ]
  },
  {
    id: 'wp-4',
    title: 'The Mermaid Connection',
    category: 'WordPress Websites',
    subtitle: 'Lifestyle & Community Brand Portal',
    shortDescription: 'Vibrant, custom-designed Australian community and e-commerce showcase featuring custom layouts and event highlights.',
    fullDescription: 'Designed and crafted for The Mermaid Connection in Australia. Combines artistic branding with fast, responsive WordPress architecture and custom styled Elementor sections.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://themermaidconnection.com.au',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Custom color theme & ocean-inspired visual branding',
      'Fast image gallery loading and smooth scrolling behavior',
      'Cross-browser optimization'
    ]
  },
  {
    id: 'wp-5',
    title: 'Wollangarra',
    category: 'WordPress Websites',
    subtitle: 'Outdoor Education & Youth Development Organization',
    shortDescription: 'Non-profit organization website designed to connect youth with outdoor education, sustainability projects, and community volunteer programs.',
    fullDescription: 'An inspiring WordPress web platform engineered for Wollangarra. Built with custom Elementor widgets, newsletter capture integration, and clean event calendars.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://wollangarra.org',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Accessible, clean typography and accessible color ratios',
      'Organized volunteer enrollment and community event pages',
      'Mobile optimization for outdoor enthusiast access'
    ]
  },
  {
    id: 'wp-6',
    title: 'SIC1893',
    category: 'WordPress Websites',
    subtitle: 'Commercial & Industrial Products Showcase',
    shortDescription: 'Clean, industrial product showcase website for SIC1893 Australia, highlighting enterprise offerings and catalog specifications.',
    fullDescription: 'Professional Australian enterprise showcase constructed with custom WordPress template styling. Streamlines product inquiry workflows and client trust building.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://sic1893.com.au',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Structured catalog layout with instant filter capabilities',
      'Responsive design tuned for industrial decision makers',
      'SEO optimized page hierarchy'
    ]
  },
  {
    id: 'wp-7',
    title: 'Lumara HQ',
    category: 'WordPress Websites',
    subtitle: 'Modern Corporate Agency Platform',
    shortDescription: 'Sleek, agency-style web platform built for Lumara HQ featuring sleek typography, grid portfolios, and fast consultation routing.',
    fullDescription: 'A high-end website designed for Lumara HQ Australia. Features modern SaaS UI sensibilities, glassmorphic card elements, and optimized performance metrics.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://lumarahq.com.au',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Premium agency visual presentation with fluid animations',
      'Sub-second page rendering and clean code structure',
      'Mobile-first grid layout'
    ]
  },
  {
    id: 'wp-8',
    title: 'Valentine Equine',
    category: 'WordPress Websites',
    subtitle: 'Equestrian Gear & Premium Apparel Website',
    shortDescription: 'Elegant product showcase and equestrian store portal engineered for Valentine Equine Australia.',
    fullDescription: 'Refined equestrian web platform created for Valentine Equine. Merges product highlights with brand storytelling and seamless mobile shopping experience.',
    techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    role: 'Website Designer & Developer',
    url: 'https://valentineequine.com.au',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'High-resolution imagery showcase with optimized lazy loading',
      'Custom Elementor design tailored to equine luxury aesthetics',
      'Fast touch navigation and mobile drawer menu'
    ]
  },

  // Custom Web Applications
  {
    id: 'app-1',
    title: 'Daily Cashiering Report (DCR)',
    category: 'Custom Web Applications',
    subtitle: 'Business Management System',
    shortDescription: 'Developed a web-based cashiering system that automated daily financial reporting and improved operational efficiency.',
    fullDescription: 'An end-to-end custom PHP cashiering management system built for daily transaction auditing, cash flow balance verification, automated summary generation, and record history tracking for enterprise accounting teams.',
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    role: 'Full Stack PHP Developer',
    isLive: false,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Automated daily balance calculations reducing human auditing error by 95%',
      'Role-based access control (RBAC) for cashiers, supervisors, and managers',
      'Exportable financial reports in structured PDF and CSV formats',
      'Real-time transaction validation and MySQL ledger recording'
    ],
    metrics: 'Automated 100% of daily cashier reporting'
  },
  {
    id: 'app-2',
    title: 'Land Transport Office (LTO) Reporting System',
    category: 'Custom Web Applications',
    subtitle: 'Government Reporting System',
    shortDescription: 'Built an internal reporting platform for managing vehicle registration and compliance reporting.',
    fullDescription: 'Custom PHP & MySQL enterprise web platform created for tracking official LTO vehicle registration logs, compliance status alerts, document verification, and government submission schedules.',
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    role: 'Full Stack PHP Developer',
    isLive: false,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Centralized compliance database for fleet registration tracking',
      'Automated expiration alert triggers for registration renewals',
      'Secure document upload and audit logging for official compliance',
      'Optimized MySQL queries for rapid search across thousands of records'
    ],
    metrics: 'Streamlined multi-fleet LTO compliance tracking'
  },
  {
    id: 'app-3',
    title: 'Online Purchasing Request Form (OPRF)',
    category: 'Custom Web Applications',
    subtitle: 'Business Workflow System',
    shortDescription: 'Developed an approval workflow application that digitized purchasing requests and streamlined internal approvals.',
    fullDescription: 'Digital procurement and request approval portal that replaced paper-based purchase forms. Features multi-level supervisor approval routing, budget check validation, purchase order generation, and real-time email notifications.',
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    role: 'Full Stack PHP Developer',
    isLive: false,
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Digitized 100% of internal purchasing forms and procurement workflows',
      'Multi-stage approval pipeline with automatic state transitions',
      'Comprehensive audit trails for tracking order history and budget approvals',
      'Responsive dashboard view for management mobile approval'
    ],
    metrics: 'Reduced approval turnaround time from days to hours'
  },
  {
    id: 'app-4',
    title: 'Vehicle Inventory Management System (VIMS)',
    category: 'Custom Web Applications',
    subtitle: 'Inventory Management System',
    shortDescription: 'Designed a web application for monitoring vehicle inventory, records, and availability using an organized dashboard.',
    fullDescription: 'Comprehensive fleet and vehicle inventory control web system. Features real-time stock availability tracking, maintenance service logs, vehicle assignment histories, and visual status dashboards.',
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    role: 'Full Stack PHP Developer',
    isLive: false,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Interactive dashboard for instant visibility into vehicle statuses',
      'Automated maintenance schedule alerts and service history logs',
      'Driver assignment logs and status updates',
      'Relational MySQL schema optimized for complex inventory analytics'
    ],
    metrics: 'Real-time visibility over enterprise vehicle fleet'
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Access Computer College',
    degree: 'Bachelor of Computer Science',
    period: '2018–2020'
  },
  {
    id: 'edu-2',
    institution: 'Asian College of Science and Technology',
    degree: 'Senior High School',
    period: '2016–2018'
  },
  {
    id: 'edu-3',
    institution: 'Flora A. Ylagan High School',
    degree: 'Junior High School',
    period: '2012–2016'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'SMART Android Mobile Apps Development for Beginners',
    issuer: 'TESDA',
    badgeText: 'Mobile App Dev'
  },
  {
    id: 'cert-2',
    title: 'Developing Designs for User Interface',
    issuer: 'TESDA',
    badgeText: 'UI / UX Design'
  }
];

export const WHY_WORK_WITH_ME: FeatureCardItem[] = [
  {
    title: 'Fast Learner',
    description: 'Quickly adapts to new technologies, frameworks, and tools to deliver cutting-edge web solutions efficiently.',
    iconName: 'Zap'
  },
  {
    title: 'Problem Solver',
    description: 'Builds scalable, maintainable, and robust systems tailored to solve core business and user challenges.',
    iconName: 'Lightbulb'
  },
  {
    title: 'Adaptable',
    description: 'Thrives in evolving work environments, seamlessly switching between WordPress, custom PHP, and modern web tech.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Team Player',
    description: 'Communicates professionally and collaborates efficiently with cross-functional marketing, design, and dev teams.',
    iconName: 'Users'
  }
];

export const STATS: StatItem[] = [
  {
    value: '8+',
    numericValue: 8,
    label: 'Live WordPress Websites',
    suffix: '+',
    iconName: 'Globe'
  },
  {
    value: '4+',
    numericValue: 4,
    label: 'Custom Business Systems',
    suffix: '+',
    iconName: 'Cpu'
  },
  {
    value: '4+',
    numericValue: 4,
    label: 'Years Professional Experience',
    suffix: '+',
    iconName: 'Briefcase'
  },
  {
    value: '12+',
    numericValue: 12,
    label: 'Completed Projects',
    suffix: '+',
    iconName: 'CheckCircle2'
  }
];
