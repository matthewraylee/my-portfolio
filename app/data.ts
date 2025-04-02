// Mock data for the portfolio

export const projects = [
  {
    id: 1,
    title: "GarbEdge",
    description:
      "Intelligent waste classification system using YOLOv8 to detect recycling contaminants and improve waste management efficiency",
    date: "2025", // Added date field
    dateRange: "Jan - Mar 2025", // Added dateRange field
    tags: ["Python", "YOLOv8", "Computer Vision", "Gradio UI"],
    image: "/Projects/GarbEdge/overview.png",
    link: "https://github.com/matthewraylee/garbage_classification",
    // Additional details for expanded view
    fullDescription: `GarbEdge is an advanced waste classification system that uses computer vision and machine learning to identify and categorize different types of waste materials in real-time. The system helps reduce recycling contamination by accurately detecting items that don't belong in specific waste streams.

The project utilizes YOLOv8, a state-of-the-art object detection model, trained on a custom dataset of waste materials to achieve high accuracy in classification. The interactive Gradio UI provides an intuitive interface for users to upload images or connect to camera feeds for real-time detection.`,
    problem:
      "Recycling contamination is a major issue in waste management, with up to 25% of collected recyclables being contaminated and ultimately sent to landfills. Manual sorting is labor-intensive, expensive, and poses health risks.",
    solution:
      "Developed an automated classification system using YOLOv8 that can identify different waste categories (recyclable, compostable, landfill) and flag contaminants in real-time with high accuracy.",
    outcome:
      "Achieved 92% classification accuracy on test data, with the potential to significantly reduce contamination rates and improve recycling efficiency when implemented at collection points.",
    technologies: [
      {
        name: "Python",
        description:
          "Core programming language for model training and inference",
      },
      {
        name: "YOLOv8",
        description:
          "State-of-the-art object detection framework for waste identification",
      },
      {
        name: "Gradio",
        description:
          "User interface framework for creating interactive demo applications",
      },
    ],
    gallery: [
      {
        type: "video",
        videoId: "FBYZHzBy5O4",
        caption: "GarbEdge Demo Video",
      },
      {
        type: "image",
        url: "Projects/GarbEdge/1.jpg",
        caption: "GarbEdge Pitch",
      },
      {
        type: "image",
        url: "Projects/GarbEdge/2.jpg",
        caption: "GarbEdge Pitch",
      },
      {
        type: "image",
        url: "Projects/GarbEdge/3.jpg",
        caption: "GarbEdge Pitch",
      },
      {
        type: "image",
        url: "Projects/GarbEdge/4.jpg",
        caption: "Demo Day Winner!",
      },
    ],
    features: [
      "Real-time object detection and classification of waste materials",
      "Multi-class identification (paper, plastic, glass, metal, organic, etc.)",
      "Contamination flagging with confidence scores",
      "Interactive web interface for easy system interaction",
      "Camera and image upload support for versatile deployment options",
    ],
  },
  {
    id: 2,
    title: "EV Dashboard",
    description:
      "Machine learning model that predicts customer behavior using historical transaction data.",
    date: "2022", // Added date field
    dateRange: "Jun - Aug 2022", // Added dateRange field
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
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        caption: "Prediction Dashboard",
      },
      {
        type: "video",
        videoId: "ML8Hl4eFy3M", // Example YouTube video ID - replace with your actual video ID
        caption: "Model Training Process",
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        caption: "Model Performance Metrics",
      },
      {
        type: "image",
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
    title: "Unveiling the Masters",
    description:
      "Data-driven analysis and predictive modeling to identify insights, trends, and future champions at Augusta National Golf Club.",
    date: "2024",
    dateRange: "Oct - Nov 2024",
    tags: ["Python", "Random Forest", "Data Visualization", "Sports Analytics"],
    image: "/Projects/MastersAnalytics/cover.webp",
    link: "https://www.kaggle.com/code/matthewrlee/unveiling-the-masters-at-augusta",
    // Additional details for expanded view
    fullDescription: `The Masters Tournament, held annually at Augusta National Golf Club, is renowned for its challenging course and prestige, making it one of the most coveted titles in golf. This project seeks to unravel insights from this legendary event, leveraging historical data to explore player performances, trends, and potential predictive strategies for identifying future champions.

Using PGA Tour Data (2015–2022) and Masters-specific data, I developed a comprehensive analysis that examines what makes the Masters unique among tournaments and what separates winners from the field. Given the limitations of available data, such as restricted strokes gained metrics for pre-2021 tournaments, my approach was tailored to optimize the use of available information.`,
    problem:
      "Golf tournament outcomes are influenced by numerous factors including player skill, course conditions, and performance metrics. Identifying which factors are most predictive of success at the Masters Tournament requires sophisticated analysis of historical data.",
    solution:
      "Developed two predictive models using Random Forest regression to predict player rankings: (1) a multi-metric model using strokes gained data from 2021-2022, and (2) a simplified model using only strokes data from 2015-2022. The analysis revealed that strokes emerged as the most significant feature for predicting performance.",
    outcome:
      "Successfully predicted Scottie Scheffler as the top performer for the 2022 Masters, with the model showing an R² score of 0.43. Comparative analysis of 2021 and 2022 winners revealed that strong driving and consistent putting were key differentiators in tournament success.",
    technologies: [
      {
        name: "Python",
        description: "Core programming language for data analysis and modeling",
      },
      {
        name: "Pandas",
        description: "Data processing, cleaning, and transformation",
      },
      {
        name: "Matplotlib/Seaborn",
        description: "Data visualization and statistical graphics",
      },
      {
        name: "Scikit-learn",
        description: "Machine learning implementation for predictive modeling",
      },
      {
        name: "NumPy",
        description: "Numerical computing and array operations",
      },
      {
        name: "Jupyter Notebook",
        description: "Interactive development environment for analysis",
      },
    ],
    gallery: [
      {
        type: "image",
        url: "/Projects/MastersAnalytics/intro.png",
        caption: "Average Strokes Gained by Tournament (2021-2022)",
      },
      {
        type: "image",
        url: "/Projects/MastersAnalytics/overview.png",
        caption: "Strokes Gained Distribution Across Key Performance Areas",
      },
      {
        type: "image",
        url: "/Projects/MastersAnalytics/results_1.png",
        caption: "Performance Comparison Between 2021-2022 Masters Winners",
      },
      {
        type: "image",
        url: "/Projects/MastersAnalytics/results_2.png",
        caption: "Feature Importance Analysis for Performance Prediction",
      },
    ],
    features: [
      "Comprehensive data cleaning and preparation addressing inconsistencies in tournament data",
      "Comparative analysis of Masters Tournament with other major PGA events",
      "Statistical examination of Strokes Gained metrics distribution and significance",
      "Radar chart visualization comparing winning strategies between champions",
      "Predictive modeling using Random Forest to identify potential future winners",
      "Feature importance analysis identifying key performance indicators for success",
    ],
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    description:
      "Advanced clustering algorithm that segments customers based on behavior, demographics, and purchase history.",
    date: "2022", // Added date field
    dateRange: "Sep - Nov 2022", // Added dateRange field
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
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        caption: "Segment Distribution",
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        caption: "Behavioral Patterns",
      },
      {
        type: "video",
        videoId: "K9QYRzJJL4g", // Example YouTube video ID - replace with your actual video ID
        caption: "Segmentation Analysis Walkthrough",
      },
      {
        type: "image",
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
    date: "2024", // Added date field
    dateRange: "Jan 2023 - Present", // Added dateRange field
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
        type: "video",
        videoId: "seaWrKfkd6A", // Example YouTube video ID - replace with your actual video ID
        caption: "Forecasting Model Overview",
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        caption: "Forecast vs Actual",
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        caption: "Seasonal Components",
      },
      {
        type: "image",
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
