import port from "./assets/port.png";
import disney from "./assets/disney.png";
import blog from "./assets/blog.png";

const projects = [
  {
    title: "Clone Coding Disney Website",
    objective:
      "Replicate the core functionality and design of the Disney website using React.js.",
    keyTasks: [
      "Page layout design with React.js",
      "Dynamic content via external APIs",
      "Firebase for user authentication",
      "Modular component design for integration",
      "Search functionality",
      "Single-page navigation with react-router-dom",
    ],
    outcome:
      "Successfully replicated the Disney website's design with dynamic content and secure authentication.",
    technologies: ["React.js", "Firebase", "API", "React Router", "Styled CSS"],
    githubLink: "https://github.com/Choiz0/react-cloning-disneyApp",
    deploymentLink: "https://react-disney-app-ecdd3.firebaseapp.com/",
    image: disney,
    color: "#BBACAF",
  },
  {
    title: "Personal Blog with CRUD Operations",
    objective:
      "Develop a minimalist blog platform that supports CRUD operations, using React.js and Firebase.",
    keyTasks: [
      "Blog architecture with React.js",
      "CRUD functionalities for blog posts",
      "Firebase for backend services",
      "Real-time data updates",
      "Responsive design for device compatibility",
      "Firebase authentication for security",
      "Categorization and filtering of posts",
    ],
    outcome:
      "Created a functional blog platform with categorization, personal post filtering, and secure authentication.",
    technologies: [
      "React.js",
      "Firebase",
      "CRUD Operations",
      "Firebase Authentication",
    ],
    githubLink: "https://github.com/Choiz0/simpleBlogApp",
    deploymentLink: "https://sarahblogapp.web.app/",
    image: blog,
    color: "#977F6D",
  },
  {
    title: "Portfolio Website",
    objective:
      "Create a personal portfolio website to showcase design projects and technical skills.",
    keyTasks: [
      "Large typography layout with Tailwind CSS",
      "Interactive elements with CSS animations",
      "Desktop-first design approach",
    ],
    outcome:
      "Developed a unique and interactive portfolio website, with plans for future mobile responsiveness.",
    technologies: ["React.js", "Tailwind CSS", "CSS Animations"],
    githubLink: "https://github.com/yourusername/portfolio-website",
    deploymentLink: "https://portfolio.yourdomain.com",
    image: port,
    color: "gray",
  },
];

export default projects;
