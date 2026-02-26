// Projects data from Hunter's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "guidewire",
    title: "Converted On-Prem Guidewire to Cloud",
    description:
      "Proprietary Insurance ecosystem hosting application in policy administration, claims, billng, contact management, and integrations.",
    longDescription:
      "Worked on the team who migrated the existing book of business managing claims & policy lifecycles for underwriting, sales, billing, claims, and service. Building cloud base solutions leveraging AWS and internal services. This effort was successful and provided our stakeholders a clean platform for writing books of business while enhancing the user experience.",
    technologies: [
      "GOSU",
      "Java",
      "REST API",
      "PostgreSQL",
      "Apache Kafka"

    ],
    features: [
      "Migrated PolicyCenter, BillingCenter, ClaimsCenter, & Integrations serving as an InsuranceSuite",
      "Worked on the tool responsible for the ETL process from SQL Server to PostgreSQL",
      "Merged essential files files and mitigated merge conflicts",


    ],
  },
{
    id: "chatbot-local",
    title: "Local Chatbot Without APIs",
    description:
      "Developed a multi model chat bot using local LLMs.",
    longDescription:
      "Developed a chatbot for users to interact with multiple LLM using local LLMs, and delivered an alternative to paying for OpenAIs ChatGPT or Anthropics Claude to mitigate cost. The chatbot is optimized to use LLMs no larger than 30 million parameters while retaining quality of output. ",
    technologies: [
      "Llama.cpp",
      "Python",
      "Pandas",
      "JSON",
      "Vector DB"
    ],
    features: [
      "Saved policy attributes as a snapshot as a workaround",
      "Learned how to serialize and deserialize policy attributes",
      "Retained user experience while gaining the ability to save multiple slices of prior insurance data",
    ],
  },
{
    id: "chatbot",
    title: "Chatbot using APIs",
    description:
      "Developed a multi model chat bot using API calls.",
    longDescription:
      "Developed a chatbot for users to interact with multiple LLM API keys, and delivered an alternative to OpenAIs ChatGPT or Anthropics Claude. With this multi model chatbot, users can alternate between models while retaining chat history and context to deliver output driven by chain of thought processing. ",
    technologies: [
      "LangChain",
      "Python",
      "TypeScript",
      "REACT",
      "LLM"
    ],
    features: [
      "Saved policy attributes as a snapshot as a workaround",
      "Learned how to serialize and deserialize policy attributes",
      "Retained user experience while gaining the ability to save multiple slices of prior insurance data",
    ],
  },

  {
    id: "rpa",
    title: "Automated Policy Amendments",
    description:
      "Automation to orchestrate multiple amendments to automatically update policies in multiple policy administration systems.",
    longDescription:
      "UI and API automation to update policies in multiple administration systems. When a service agent is making an amendment to a policy, and that policy is also awaiting its renewal effective date, this automated workflow would cut time in half for agents making these changes. This workflow cut down the time needed for service agents by 2Xs, ensuring data integrity and accuracy across multiple systems.",
    technologies: [
      "C#",
      "JSON",
      "RPA",
      "SQL",
      "REST"
    ],
    features: [
      "Multiple UI, API, & Data structures",
      "Scheduler to run outside of business hours to triage amendment data",
      "Leveraging external APIs while using a central workflow for data integrity",

    ],
  },
  {
    id: "rpa2",
    title: "Automating National Change of Address",
    description:
      "The Postal Service sends a file with changes of customer addresses. This automated workflow used API automation to change user addresses.",
    longDescription:
      "Automated workflow leveraging two external applications to dynamically amend customer addresses when the Postal Service sends a new file. This RPA examined an internal customer engagment application to use an existing API structure that connected to Guidewire PolicyCenter. This workflow used APIs to efficiently update data without human intervention. The bot would examine the file, parse the data needed, and write directly to the customer engagement application. After, the bot would execute the existing APIs to update the data in Guidewire PolicyCenter. ",
    technologies: [
      ".Net",
      "C#",
      "Rest",
      "SQL",
      "GOSU"
    ],
    features: [
      "API & SQL automation too update customer addresses intelligently",
      "Created reporting with automated emailing displaying the changes",
      "Saved 1 hour a month for every service agent eliminating the need for manually intervention",
    ],
  },

  {
    id: "guidewire-renewal-documents",
    title: "Automated Pre-Renewal Documents",
    description:
      "Developed an algorithm to intelligently send documents to insurer before specific events during the pre-renewal workflow.",
    longDescription:
      "Within policy administration systems, there are varies documents that need to be sent to verify data before the next policy term. I worked on a project to build a centralized algorithm to be reused for every pre-renewal document event. ",
    technologies: [
      "GOSU",
      "XML/XSD",
      "Rest",
      "SQL",
      "Batch Processing"
    ],
    features: [
      "Developed batch processing for scheduled execution",
      "Built logic to create documents and enabled hyper links within Guidewire",
      "Developed my understanding of the Insurance business by understanding pre-renewal logic and required documents",
    ],
  },

{
    id: "silverlight-angular",
    title: "Modernized Policy Analysis Application",
    description:
      "Migrated an outdated and unsupported Silverlight project to Angular 18.",
    longDescription:
      "The goal of this project was to retain the look and feel of our existing Policy Analysis application, while migrating the outdated technology to a dynamic Angular project. This took stakeholder feedback and testing to ensure the user experience of the application matched expectation to mitigate training needs for agents. ",
    technologies: [
      "Silverlight",
      "Java Script",
      "Angular",
      "SQL",
      "REST"
    ],
    features: [
      "API & SQL automation too update customer addresses intelligently",
      "Created reporting with automated emailing displaying the changes",
      "Saved 1 hour a month for every service agent eliminating the need for manually intervention",
    ],
  },

{
    id: "prior-insurance",
    title: "JSON Snapshot of Prior Insurance",
    description:
      "Developed an process to parse and save policy terms into snapshots.",
    longDescription:
      "Due to constraints of the existing database table unable to save effective dated changes to the table, there was a need to develop a workaround process to store changes to the prior insurance table for policies. I created a program to serialize and deserialize policy attributes and store them as JSON blobs to increase performance while retaining all details of the policy slice. ",
    technologies: [
      "GOSU",
      "JSON",
      "SQL",
      "Serialization"
    ],
    features: [
      "Saved policy attributes as a snapshot as a workaround",
      "Learned how to serialize and deserialize policy attributes",
      "Retained user experience while gaining the ability to save multiple slices of prior insurance data",
    ],
  },
];
