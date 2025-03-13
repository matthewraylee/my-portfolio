// Mock data for the portfolio

export const projects = [
  {
    id: 1,
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard built with Python, Tableau, and React to visualize complex business metrics.",
    tags: ["Python", "Tableau", "React", "Data Visualization"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
  {
    id: 2,
    title: "Predictive Analytics Tool",
    description:
      "Machine learning model that predicts customer behavior using historical transaction data.",
    tags: ["Python", "Scikit-learn", "SQL", "Machine Learning"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
  {
    id: 3,
    title: "ETL Pipeline Automation",
    description:
      "Automated data pipeline that extracts, transforms, and loads data from multiple sources into a data warehouse.",
    tags: ["Python", "Airflow", "SQL", "AWS"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
];

export const skills = {
  technical: [
    { name: "Python", level: "Advanced", icon: "🐍" },
    { name: "SQL", level: "Advanced", icon: "🗃️" },
    { name: "Tableau", level: "Advanced", icon: "📊" },
    { name: "React", level: "Intermediate", icon: "⚛️" },
    { name: "AWS", level: "Intermediate", icon: "☁️" },
    { name: "Machine Learning", level: "Intermediate", icon: "🤖" },
    { name: "Data Modeling", level: "Advanced", icon: "📈" },
    { name: "ETL Processes", level: "Advanced", icon: "🔄" },
  ],
  business: [
    { name: "Business Analysis", level: "Advanced", icon: "📝" },
    { name: "Project Management", level: "Intermediate", icon: "📋" },
    { name: "Stakeholder Communication", level: "Advanced", icon: "🗣️" },
    { name: "Financial Analysis", level: "Intermediate", icon: "💰" },
    { name: "Strategic Planning", level: "Intermediate", icon: "🎯" },
    { name: "Process Optimization", level: "Advanced", icon: "⚙️" },
  ],
};

export const workExperience = [
  {
    title: "Senior Data Analyst",
    company: "Tech Company Inc.",
    period: "Jan 2021 - Present",
    responsibilities: [
      "Led a team of 3 analysts in developing dashboards that increased decision-making efficiency by 30%",
      "Implemented ETL processes that reduced data processing time by 40%",
      "Collaborated with stakeholders to define KPIs and metrics for business performance",
    ],
  },
  {
    title: "Business Intelligence Analyst",
    company: "Data Solutions Co.",
    period: "Mar 2018 - Dec 2020",
    responsibilities: [
      "Designed and maintained BI solutions using Tableau and Power BI",
      "Developed SQL queries and stored procedures for data extraction",
      "Created documentation and training materials for business users",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "Analytics Startup",
    period: "Jun 2016 - Feb 2018",
    responsibilities: [
      "Performed data cleaning and preprocessing for analysis",
      "Created reports and visualizations using Python and Excel",
      "Assisted in developing predictive models for customer behavior",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Data Science",
    institution: "University of Technology",
    period: "2014 - 2016",
    description:
      "Specialized in machine learning and statistical analysis. Thesis on predictive modeling for financial markets.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description:
      "Graduated with honors. Focused on database systems and software development.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    name: "Tableau Desktop Certified Professional",
    issuer: "Tableau",
    year: "2021",
  },
  {
    name: "Microsoft Certified: Data Analyst Associate",
    issuer: "Microsoft",
    year: "2020",
  },
];
