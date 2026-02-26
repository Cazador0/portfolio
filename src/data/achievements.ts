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
    organization: "Workforce Opportunity Solutions - AAA Auto Club Enterprises",
    description: "Gathered leadership and material resources for the purpose of facilating a consultancy period leading to full time positions.",
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
      "Builts servers to facilate Unity base video game design to teach students how to connect the worlds they built",
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
    id: "udemy",
    name: "Data Engineer & Science",
    issuer: "Udemy",
    credential: "Course Certification",
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
    id: "unt",
    title: "Graduated 2019",
    organization: "University of North Texas",
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
    organization: "Workforce Opportunity Solutions - AAA Auto Club Enterprises",
    description: "Gathered leadership and material resources for the purpose of facilating a consultancy period leading to full time positions.",
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
      "Builts servers to facilate Unity base video game design to teach students how to connect the worlds they built",
      "Endorsed collaboration and creativity by creating an environment for students to learn and present their ideas based on games they built"
    ],

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
