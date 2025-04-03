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
    title: "EV Adoption Dashboard",
    description:
      "Interactive visualization dashboard tracking electric vehicle adoption and charging infrastructure trends in Washington State",
    date: "2024",
    dateRange: "Nov 2024 - Present",
    tags: [
      "Python",
      "Tableau",
      "SQL",
      "Data Visualization",
      "Dashboard",
      "Geospatial Analysis",
    ],
    image: "https://picsum.photos/seed/evdashboard/1200/675",
    link: "https://github.com/matthewraylee/ev-dashboard",
    // Additional details for expanded view
    fullDescription: `The EV Adoption Dashboard provides a comprehensive view of electric vehicle (EV) adoption and charging infrastructure throughout Washington State. This interactive visualization tool allows users to explore trends in EV registrations, analyze the distribution of charging stations by type and location, and understand the relationship between vehicle types and available infrastructure.

Developed using Python and SQL for data extraction and processing, with Tableau for visualization, the dashboard integrates multiple data sources to present key metrics and trends, enabling policymakers, researchers, and the public to make data-driven decisions about EV infrastructure planning and investment.`,
    problem:
      "As electric vehicle adoption accelerates, there's a critical need to understand how charging infrastructure is keeping pace. Stakeholders lack accessible tools to visualize the current state of EV adoption and charging capacity across different regions.",
    solution:
      "Developed an interactive dashboard that integrates EV registration data with charging station information, providing filterable visualizations by county, charger type, and vehicle make to identify infrastructure gaps.",
    outcome:
      "Created a comprehensive visualization tool that reveals key metrics like the 1.86 EV-to-charger ratio and highlights regional differences in EV infrastructure, helping inform future charging station deployment strategies.",
    technologies: [
      {
        name: "Python",
        description: "Used for data collection, cleaning, and preprocessing",
      },
      {
        name: "Tableau",
        description:
          "Data visualization platform for creating interactive dashboard elements",
      },
      {
        name: "SQL",
        description: "Database querying for data extraction and transformation",
      },
      {
        name: "PostgreSQL",
        description:
          "Database system for storing and managing EV registration and charger data",
      },
      {
        name: "Pandas",
        description: "Python library for data manipulation and analysis",
      },
    ],
    gallery: [
      {
        type: "image",
        url: "/Projects/EVDashboard/overview.webp",
        caption: "Dashboard Overview with Key Metrics",
      },
      {
        type: "image",
        url: "/Projects/EVDashboard/map-view.webp",
        caption: "Charger Distribution Map by County",
      },
      {
        type: "image",
        url: "/Projects/EVDashboard/ev-trends.webp",
        caption: "EV Adoption Trends Over Time (2010-2024)",
      },
      {
        type: "image",
        url: "/Projects/EVDashboard/vehicle-models.webp",
        caption: "Top EV Models in Washington State",
      },
    ],
    features: [
      "Interactive filtering by county, charger type, and vehicle make",
      "Geographic visualization of charging infrastructure density",
      "Time-series analysis of EV adoption trends since 2010",
      "Comparative metrics including EV-to-charger ratio and charger type distribution",
      "Detailed breakdown of EV registrations by vehicle model",
      "Responsive design for accessibility across devices",
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
    title: "Data Center Technician",
    company: "Redapt",
    location: "Seattle, WA",
    description:
      "Provides end-to-end technology solutions spanning from datacenter infrastructure to cloud implementations.",
    period: "Nov 2023 - Apr 2024",
    responsibilities: [
      "Configured server BIOS and RAID to run through PXE programming in Linux environment to reduce deployment time by 65%",
      "Troubleshot and tested 20 network devices through Linux environment on a weekly basis while capturing logs for QA team, achieving a success rate of 90%",
      "Collaborated effectively with QA and Assembly teams to achieve a 60% improvement in efficiency and quality control",
      "Created training documentation improving Data Center Technician transition experience, resulting in 300% increase in onboarding efficiency",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Amtrak",
    location: "Washington, DC",
    period: "Feb 2023 - May 2023",
    responsibilities: [
      "Improved cloud management process for a team of 15 by constantly updating 100+ APIs, resulting in lowered billing costs and increased efficiency",
      "Tested and ensured secure access to multiple APIs using OAuth2.0, collaborating with security and development teams, reducing access time by ~50% and enhancing overall system security",
      "Performed endpoint tests on 10 APIs weekly using Postman, recording results in MS Excel for escalation to the QA team, improving efficiency by ~60% through streamlined testing processes",
      "Contributed to daily Agile standup meetings, enhancing team communication and collaboration, which ensured consistent quality work and increased project efficiency by 25%",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Amtrak",
    location: "Washington, DC",
    period: "May 2021 - Aug 2021",
    responsibilities: [
      "Leveraged MuleSoft products to perform autoscaling and upgrades of 10 APIs weekly, improving traffic management and reducing cost",
      "Executed upgrades on 100+ APIs using BitBucket, Jenkins and MuleSoft products to maintain version control",
      "Actively participated in weekly API meetings with the DevOps team, presenting progress updates and resolving roadblocks",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "PT. Enseval Putera Megatrading",
    location: "Jakarta, Indonesia",
    description:
      "One of the largest distribution and supply of pharmaceutical products and raw materials in Indonesia.",
    period: "Aug 2019 - Sep 2019",
    responsibilities: [
      "Improved registration process through implementing user verification feature using React and C#, resulting in a 30% boost in user registration and 17% increase in overall UX satisfaction",
      "Collaborated with mentors on web development and hosting, gaining valuable hands-on experience in web development technologies",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "KlikDokter",
    location: "Jakarta, Indonesia",
    description:
      "Digital healthcare platform that offers information, telemedicine, and consulting services.",
    period: "May 2018 - Sep 2018",
    responsibilities: [
      "Designed and implemented a user-centered UX attendance tracking system using Python, HTML, CSS, and JavaScript, to collect and analyze employee attendance data for Indonesia's leading digital healthcare platform",
      "Utilized Postman for in-depth debugging of HTTP requests, significantly improving reliability and efficiency of web service integrations",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Information Systems",
    institution: "University of Washington - Foster School of Business",
    period: "2024 - 2025",
    description:
      "Focusing on business intelligence, data analytics, and cloud computing with an emphasis on technology management and enterprise solutions.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Maryland at College Park",
    period: "2020 - 2023",
    description:
      "Core curriculum in algorithms, software engineering, and data structures with specialization in computer vision and application development.",
  },
];

export const certifications = [
  // {
  //   name: "AWS Certified Data Analytics - Specialty",
  //   issuer: "Amazon Web Services",
  //   year: "2022",
  // },
  // {
  //   name: "Tableau Desktop Certified Professional",
  //   issuer: "Tableau",
  //   year: "2021",
  // },
  // {
  //   name: "Microsoft Certified: Data Analyst Associate",
  //   issuer: "Microsoft",
  //   year: "2020",
  // },
];
