// Leadership and achievements data

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  
}

export const achievementsData: Achievement[] = [
  {
    id: "aaa",
    title: "Enterprise Applications Manager",
    organization: "AAA Auto Club Enterprises",
    description: "Serve as a people leader and enterprise technology strategist, building high-performing teams that deliver scalable solutions aligned to business objectives.",
    impact: [
        "Led 120+ Agile sprints delivering full-stack solutions across the Insurance lifecycle",
        "Directed cloud migrations for Guidewire, open systems, and mainframe applications into cloud-based ecosystems",
        "Mentored 50+ engineers across Guidewire, Java, Salesforce, .NET, and Mainframe disciplines",
        "Established a culture of operational excellence, accountability, and continuous learning",
        "Partnered with stakeholders to translate business requirements into technical roadmaps"
    ],
    
  },

 {
    id: "wos",
    title: "Program Director",
    organization: "Workforce Opportunity Solutions",
    description: "Led enterprise-aligned workforce development programs to build early-career technical talent pipelines.",
    impact: [
        "Delivered a 93% full-time conversion rate for the 2025 cohort, successfully placing 13 of 14 early-career developers into enterprise roles at AAA Auto Club Enterprises",
        "Oversaw consultant delivery across Salesforce CRM, .NET financial systems, and data engineering initiatives",
        "Coached consultants on Agile SDLC, DevOps collaboration, and enterprise delivery standards",
        "Designed executive-sponsored showcases enabling consultants to present production-ready solutions"
    ],

  },

 {
    id: "activelearning",
    title: "Administrative Director & Instructor",
    organization: "Active Learning Solutions",
    description: "Directed STEM-focused enrichment programs combining strategic thinking and game development.",
    impact: [
        "Led 10+ camps serving 100+ students in chess theory and Unity-based game design",
        "Taught advanced chess strategy (opening, middle, endgame) preparing students for tournament play",
        "Built server environments enabling collaborative Unity game development",
        "Fostered creativity and presentation skills through project-based learning"
    ],

  },

 {
    id: "esports",
    title: "Esports Tournament Organization",
    organization: "Pixel Sports Media",
    description: "Driving North Texas Esports on college campuses and the surrounding local business supporting tournaments for power rankings in the region.",
    impact: [
        "Built streaming overlays and broadcast assets",
        "Organized ranked tournaments and competitive brackets",
        "Partnered with local sponsors and campus organizations to drive event engagement",
        "Promoted high potential player engagement by connecting individuals with local tournaments"
    ],

  }
];

// Certifications data
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credential: string;
}

export const certificationsData: Certification[] = [
  {
    id: "dale-carnegie",
    name: "Leading Tech Teams",
    issuer: "Dale Carnegie",
    credential: "Professional Certification",
  },
  {
    id: "guidewire",
    name: "Ace Certification",
    issuer: "Guidewire",
    credential: "Product Certification",
  },
  {
    id: "guidewire-associate",
    name: "Associate Certification",
    issuer: "Guidewire",
    credential: "Product Certification",
  },
];

export interface Milestones {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export const milestonesData: Milestones[] = [

{
    id: "dale-carnegie",
    title: "Leading Tech Teams",
    organization: "Dale Carnegie",
    description: "Today's fast past Software Development Life Cycle creates a need for generative business models lead by agile leaders to meet stakeholder and team member expectations. Leadership through agile methodologies, accountability, collaboration, transparency, and trust is essential to delivery. ",
    impact: [],
  },

 {
    id: "wos-milestone",
    title: "Director of Career Development",
    organization: "Workforce Opportunity Solutions",
    description: "Organized senior leaders and resources for the purpose of facilitating a meaningful environment to foster early career development. Distributing consultants across enterprise products including Salesforce, Payment Systems, and Data Analytics.",
    impact: [],

  },

{
    id: "aaa-leadership",
    title: "Promotion to Resource Management",
    organization: "AAA Auto Club Enterprises",
    description: "Promoted to Resource Manager, expanding scope to enterprise workforce planning, capacity modeling, and cross-functional team allocation at scale.  ",
    impact: [],
  },

{
    id: "guidewire-ace-milstones",
    title: "Ace Certification",
    organization: "Insurance Guidewire",
    description: "After obtaining my Associate certification and Integration Specialist, I passed a Guidewire led proctored exam to earn my ACE Certification in Integrations. Showcasing my expertise as a Senior Software Developer. ",
    impact: [],
  },

{
    id: "unt",
    title: "Graduating from UNT",
    organization: "University of North Texas",
    description: "During my studies, I learned the essentials of Information Systems management. Through use cases between waterfall vs. agile projects, knowledge transfers from Chief Information Offices, and the history of IBM enterprise technologies, I walked away with a rich understanding of the Information Systems ecosystem.",
    impact: [],
  },

 {
    id: "activelearning-milestone",
    title: "Promotion from Instructor to Director",
    organization: "Active Learning Solutions",
    description: "While serving as an instructor for Chess game theory and video game design. This experience showed trust to work with private school stakeholders and parents to lead other instructors as a Director",
    impact: [],

  }
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration?: string;
  location: string;
  
}

export const educationData: Education[] = [
  {
    id: "unt",
    institution: "University of North Texas",
    degree: "Business Computer Information Systems",
    location: "Denton, TX, USA",
   
  }
];
