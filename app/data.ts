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
    // Additional details for expanded view
    fullDescription: `This interactive dashboard provides real-time visualization of complex business metrics, enabling stakeholders to make data-driven decisions quickly and effectively.

The dashboard integrates data from multiple sources and presents it through intuitive charts, graphs, and interactive elements that allow users to drill down into specific metrics and time periods.`,
    problem:
      "Business stakeholders needed a way to visualize complex data metrics in real-time to make informed decisions quickly.",
    solution:
      "Developed an interactive dashboard that pulls data from multiple sources and presents it through intuitive visualizations.",
    outcome:
      "Reduced decision-making time by 40% and improved data accessibility across the organization.",
    technologies: [
      {
        name: "Python",
        description: "Used for data processing and backend API",
      },
      { name: "Tableau", description: "Primary visualization tool" },
      {
        name: "React",
        description: "Frontend framework for interactive components",
      },
      { name: "SQL", description: "Database queries and data extraction" },
      { name: "AWS", description: "Cloud hosting and data storage" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Dashboard Overview",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Sales Metrics View",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "User Activity Analytics",
      },
    ],
    features: [
      "Real-time data updates",
      "Interactive filtering and sorting",
      "Customizable views for different user roles",
      "Export functionality for reports",
      "Mobile-responsive design",
    ],
  },
  {
    id: 2,
    title: "Predictive Analytics Tool",
    description:
      "Machine learning model that predicts customer behavior using historical transaction data.",
    tags: ["Python", "Scikit-learn", "SQL", "Machine Learning"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    // Additional details for expanded view
    fullDescription: `This predictive analytics tool leverages machine learning algorithms to forecast customer behavior based on historical transaction data.

The system analyzes patterns in customer purchases, website interactions, and support inquiries to predict future actions, enabling proactive business strategies.`,
    problem:
      "The company needed to anticipate customer actions to optimize marketing efforts and reduce churn.",
    solution:
      "Built a machine learning model that analyzes historical data to predict future customer behavior with high accuracy.",
    outcome:
      "Increased customer retention by 25% and improved marketing ROI by targeting high-probability conversions.",
    technologies: [
      { name: "Python", description: "Core programming language" },
      { name: "Scikit-learn", description: "Machine learning library" },
      { name: "Pandas", description: "Data manipulation and analysis" },
      { name: "SQL", description: "Database management" },
      { name: "Docker", description: "Containerization for deployment" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Prediction Dashboard",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Model Performance Metrics",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Customer Segmentation View",
      },
    ],
    features: [
      "Customer churn prediction",
      "Purchase propensity scoring",
      "Automated model retraining",
      "Segment-based recommendations",
      "Anomaly detection",
    ],
  },
  {
    id: 3,
    title: "ETL Pipeline Automation",
    description:
      "Automated data pipeline that extracts, transforms, and loads data from multiple sources into a data warehouse.",
    tags: ["Python", "Airflow", "SQL", "AWS"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    // Additional details for expanded view
    fullDescription: `This ETL pipeline automates the process of extracting data from multiple sources, transforming it according to business rules, and loading it into a centralized data warehouse.

The system handles data validation, error handling, and recovery, ensuring reliable data processing even with inconsistent source data.`,
    problem:
      "Manual data processing was time-consuming, error-prone, and couldn't scale with growing data volumes.",
    solution:
      "Developed an automated ETL pipeline with Apache Airflow to handle the entire data processing workflow.",
    outcome:
      "Reduced data processing time by 85% and eliminated manual errors, while enabling daily instead of weekly data updates.",
    technologies: [
      { name: "Python", description: "Primary programming language" },
      { name: "Apache Airflow", description: "Workflow orchestration" },
      { name: "SQL", description: "Data transformation and loading" },
      { name: "AWS Redshift", description: "Data warehouse" },
      { name: "AWS S3", description: "Data lake storage" },
      { name: "Docker", description: "Containerization" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Pipeline Architecture",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Airflow DAG View",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Monitoring Dashboard",
      },
    ],
    features: [
      "Automated scheduling and execution",
      "Real-time monitoring and alerts",
      "Data quality validation",
      "Error handling and recovery",
      "Scalable architecture",
      "Comprehensive logging",
    ],
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    description:
      "Advanced clustering algorithm that segments customers based on behavior, demographics, and purchase history.",
    tags: ["Python", "K-means", "Tableau", "Customer Analytics"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    // Additional details for expanded view
    fullDescription: `This customer segmentation project uses advanced clustering algorithms to group customers based on their behavior, demographics, and purchase history.

The analysis reveals distinct customer segments with unique characteristics, enabling targeted marketing strategies and personalized customer experiences.`,
    problem:
      "Marketing efforts were inefficient due to a one-size-fits-all approach that didn't account for customer differences.",
    solution:
      "Implemented K-means clustering to identify distinct customer segments and their unique characteristics.",
    outcome:
      "Created 5 actionable customer segments that increased marketing campaign effectiveness by 35%.",
    technologies: [
      { name: "Python", description: "Data analysis and modeling" },
      { name: "K-means", description: "Clustering algorithm" },
      { name: "Tableau", description: "Visualization and reporting" },
      { name: "Excel", description: "Data delivery for business teams" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Segment Distribution",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Behavioral Patterns",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Segment Profitability Analysis",
      },
    ],
    features: [
      "Demographic analysis",
      "Behavioral clustering",
      "Purchase pattern identification",
      "Segment profitability analysis",
      "Actionable marketing recommendations",
    ],
  },
  {
    id: 5,
    title: "Sales Forecasting Model",
    description:
      "Time series forecasting model that predicts future sales based on historical data and external factors.",
    tags: ["Python", "Prophet", "Time Series", "Forecasting"],
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
    // Additional details for expanded view
    fullDescription: `This sales forecasting model uses time series analysis to predict future sales volumes based on historical data and external factors like seasonality, promotions, and market trends.

The model provides accurate forecasts at different granularities (daily, weekly, monthly) to support inventory planning, staffing, and financial projections.`,
    problem:
      "Inaccurate sales forecasts were leading to inventory issues and inefficient resource allocation.",
    solution:
      "Developed a time series forecasting model using Facebook Prophet that accounts for seasonality and special events.",
    outcome:
      "Improved forecast accuracy by 30%, reducing stockouts by 45% and excess inventory by 20%.",
    technologies: [
      { name: "Python", description: "Core programming language" },
      { name: "Prophet", description: "Time series forecasting library" },
      { name: "Pandas", description: "Data manipulation" },
      { name: "Matplotlib", description: "Visualization" },
      { name: "Jupyter", description: "Development environment" },
    ],
    gallery: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Forecast vs Actual",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Seasonal Components",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Trend Analysis",
      },
    ],
    features: [
      "Multi-level forecasting",
      "Seasonality decomposition",
      "Anomaly detection",
      "What-if scenario modeling",
      "Confidence intervals",
    ],
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
