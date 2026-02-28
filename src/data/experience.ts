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
      "As an Enterprise Applications Manager, I am a servant leader supporting development teams and a preferred technology partner to stakeholders.",
    achievements: [
      "Managed 50+ team members on various product initiatives",
      "Modernizing Insurance applications, integrations, and payment systems ",
      "Automation workflows for data conversion, automated API, & service agent workflows  ",
      "Modernized Silverlight projects to Angular ecosystems while retaining the user experience",
      "Enhanced communication and leadership capabilities"
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
      "Delivered a 93% full-time conversion rate for the 2025 cohort",
      "Consultants delivered modernization of On-Prem applications to Salesforce",
      "Consultants delivered enhancements to payment and billing systems",
      "Consultants delivered Data Engineering projects for data processing and warehousing"

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
      "Delivered Insurance solutions for all workflows for Policy Administration, Billing, and Integrations platform.",
    achievements: [
      "Delivered Rating, UI enhancements, Document processing, Time Sensitive workflows, API Handling, & Data Processing projects",
      "Applied Agile methodologies to enable collaboration, business partnership, and stakeholder alignment",
      "Modernized & converted On-Prem applications to Cloud while ensure enhanced user experience",
      "Project lead mentoring team members and collaborated with stakeholders to earn trusted technology partner"
      
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
      "Agile environment working with developers, product owners, and scrum masters",
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
