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
    description: "Serve as a people leader and technology expert to build robust teams to meet stakeholder requests.",
    impact: [
      "Lead and developed over 120 sprints in an agile environment to deliver full stack solutions for the Insurance business life cycle",
      "Cloud migrations for Guidewire, open systems and mainframe applications to the cloud base ecosystems",
      "Coach & mentored 50+ team members with multiple disciplines including Guidewire, Java Apps, Salesforce, .Net suite, & Mainframe Apps",
      "Foster a culture of curiosity, operational excellence, and personal accountability"
    ],
    
  },

 {
    id: "wos",
    title: "Program Director",
    organization: "Workforce Opportunity Solutions",
    description: "Organizing senior managers and gathered leadership and material resources for the purpose of facilating a consultancy period leading to full time positions.",
    impact: [
      "13 out of 14 early career developers were onboarded to AAA Auto Club Enterprises with full time positions",
      "Consultants built projects for Salesforce CRMs, .Net financial & payment systems, and data engineering",
      "Coached and mentored consultants about Agile SDLC and collaborating with existing Dev Ops Engineers to meet product initiatives",
      "Organized and planned executive sponsored events for the consultants to network and demonstrate projects"
    ],

  },

 {
    id: "activelearning",
    title: "Administrative Director & Instructor",
    organization: "Active Learning Solutions",
    description: "Lead courses on the game theory of chess and video game design using Unity.",
    impact: [
      "Lead over 10 camps teaching over 100 students chess and video game design",
      "Taught early, middle, and late game chess theory to prepare students for chess tournaments",
      "Built servers to facilitate Unity base video game design to teach students how to connect the worlds they built",
      "Endorsed collaboration and creativity by creating an environment for students to learn and present their ideas based on games they built"
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
    description: "In today's fast past Software Development Life Cycle, and the needs to meet business needs requires dedicated leadership. Leadership through agile methodologies, accountability, collaboration, transparency, and trust. ",
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
    description: "My journey has led me to enable my leadership skills to challenge myself as a resource manager. This evolution has required patience, trust, and communication on scale. This is only the start, and I thank my family for supporting me through this transformation.  ",
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

  },

{
    id: "esports",
    title: "Pixel Sport Media",
    organization: "Esports Tournament Organization",
    description: "Through UNT Esports on campus and the surrounding local business supporting the scene, I had the please to build streaming overlays, facilitate power ranked tournaments, and partner with companies to promote tournaments. ",
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
