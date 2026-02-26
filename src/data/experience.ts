export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "aaa-manager",
    company: "AAA Auto Club Enterprises",
    role: "Enterprise Applications Manager",
    duration: "Sept 2023 - Present",
    location: "Coppell, Tx, USA",
    description:
      "As an Enterprise Applications Manager, I am a servant leader to the the development team and dedicate myself to be a preferred technology partner to our stakeholders.",
    achievements: [
      "I have managed 50+ team members on various product initiatives",
      "Built automation by creating data conversion, automated API, & service agent workflows  ",
      "Modernized Silverlight projects to Angular ecosystems while retaining the user experience",
      "Enhanced communication and leadership capabilities",
      "Helped students gain knowledge about ai and its usage in daily life "
    ],
    technologies: [
      "Leadership",
      "Resource Management",
      "Team Building & Collaboration",
      "OOP Full Stack Development",
      "Stakeholder Engagement",
      "Cloud Computing",
      "Machine Learning"

    ],
    type: "full-time"
  },

{
    id: "wos",
    company: "Workforce Opportunity Services & AAA Auto Club Enterprises",
    role: "Program Director",
    duration: "Sept 2024 - June 2025",
    location: "Coppell, TX, USA",
    description:
      "Managed, organized, designed, and directed the Workforce Opportunity Services program for early career professionals. The desired outcome was to transition consultants to a full time position within AAA Auto Club Enterprises. ",
    achievements: [
      "Converted 13 out of 14 consultants to full time positions",
      "Modernized .Net projects to Salesforce",
      "Modernized payment systems and enhanced billing systems",
      "Delievered Data Engineering projects for data processing and warehousing"

    ],
    technologies: [
      "Leadership",
      "Resource Management",
      "OOP Full Stack Development",
      "Salesforce",
      "Customized Payment Systems",
      "Automated Unit Testing",
      "Data Analytics",
      "Machine Learning"
    ],
    type: "full-time"
  },

  {
    id: "devops-engineer",
    company: "AAA Auto Club Enterprises",
    role: "DevOps Engineer",
    duration: "Oct 2020 - Sep 2023",
    location: "Coppell, TX, USA",
    description:
      "Delivered Insurance solutions for all workflows within throughout our Policy Administration, Billing, and Integrations platform.",
    achievements: [
      "Delivered projects within Rating, UI enhancements, Document processing, Time Sensitive workflows, API Handling, & Data Processing",
      "Modernized On-Prem Guidewire platform to the Cloud",
      "Applied Agile methodologies to mentor team members, enable collaboration, business partnership, and stakeholder alignment",
      "Served the product as a lead engineer and trusted technology partner"
      
    ],
    technologies: [
      "Leadership",
      "Full Stack Development",
      "Guidewire",
      "OOP Ecosystem",
      "Data Analytics",
      "Automated Unit Testing",
      "Cloud Computing"
    ],
    type: "full-time"
  },
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    role: "Software Engineer",
    duration: "June 2019 - Oct 2020",
    location: "Phoenix, AZ, USA",
    description:
      "Developed software as a Cognizant consultant working in open systems, mainframe, and cloud computing for client projects.",
    achievements: [
      "Designed and improved UI/UX for Open Systems & Guidewire",
      "Developed applications and business workflows based on stakeholder feedback",
      "Worked in an agile environment and learned business of software delivery",
      "Upgraded Guidewire ClaimsCenter from On-Prem to Cloud based ecosystems"
    ],
    technologies: [
      "Java",
      "SQL",
      "HTML & CSS",
      "API Handling",
      "UI/UX Design",
      "Testing Environments"
    ],
    type: "full-time"
  },

];
