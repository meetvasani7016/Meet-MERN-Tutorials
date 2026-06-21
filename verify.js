const fs = require('fs');
const path = require('path');

const BASE_DIR = "d:\\Meet Tutorials\\MeetTutorials";

const expectedFiles = [
  "01-quick-guide.md",
  "02-example.html", // Special check below allows .js or .sh or .html or .jsx
  "03-practice-task.md",
  "04-challenge-task.md",
  "05-summary.md",
  "06-visual-guide.md"
];

const forbiddenFiles = [
  "diagram.md",
  "05-common-mistakes.md",
  "06-interview-questions.md"
];

const devSetupExpected = [
  "01-VS-Code.md",
  "02-Live-Server.md",
  "03-Chrome-DevTools.md",
  "04-Git-Installation.md",
  "05-NodeJS-Installation.md",
  "06-Useful-Extensions.md",
  "07-Keyboard-Shortcuts.md"
];

const sections = {
  "01-HTML": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Headings",
    "LEVEL-01-BEGINNER/03-Paragraphs",
    "LEVEL-01-BEGINNER/04-Formatting",
    "LEVEL-01-BEGINNER/05-Comments",
    "LEVEL-02-EASY/06-Links",
    "LEVEL-02-EASY/07-Images",
    "LEVEL-02-EASY/08-Lists",
    "LEVEL-02-EASY/09-Tables",
    "LEVEL-03-INTERMEDIATE/10-Forms",
    "LEVEL-03-INTERMEDIATE/11-Input-Types",
    "LEVEL-03-INTERMEDIATE/12-Audio",
    "LEVEL-03-INTERMEDIATE/13-Video",
    "LEVEL-03-INTERMEDIATE/14-Iframes",
    "LEVEL-04-ADVANCED/15-Semantic-Tags",
    "LEVEL-04-ADVANCED/16-SEO-Basics",
    "LEVEL-04-ADVANCED/17-Accessibility"
  ],
  "02-CSS": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Selectors",
    "LEVEL-01-BEGINNER/03-Colors",
    "LEVEL-01-BEGINNER/04-Backgrounds",
    "LEVEL-01-BEGINNER/05-Borders",
    "LEVEL-02-EASY/06-Margins",
    "LEVEL-02-EASY/07-Padding",
    "LEVEL-02-EASY/08-Width-And-Height",
    "LEVEL-02-EASY/10-Position",
    "LEVEL-03-INTERMEDIATE/11-Flexbox",
    "LEVEL-03-INTERMEDIATE/12-Grid",
    "LEVEL-03-INTERMEDIATE/13-Responsive-Design",
    "LEVEL-03-INTERMEDIATE/14-Media-Queries",
    "LEVEL-04-ADVANCED/15-Transitions",
    "LEVEL-04-ADVANCED/16-Transforms",
    "LEVEL-04-ADVANCED/17-Animations"
  ],
  "03-JAVASCRIPT": [
    "LEVEL-01-BEGINNER/01-Variables",
    "LEVEL-01-BEGINNER/02-Data-Types",
    "LEVEL-01-BEGINNER/03-Operators",
    "LEVEL-01-BEGINNER/04-Conditions",
    "LEVEL-01-BEGINNER/05-Loops",
    "LEVEL-01-BEGINNER/06-Functions",
    "LEVEL-02-EASY/07-Arrays",
    "LEVEL-02-EASY/08-Objects",
    "LEVEL-02-EASY/09-DOM-Selection",
    "LEVEL-02-EASY/10-DOM-Manipulation",
    "LEVEL-02-EASY/11-Events",
    "LEVEL-03-INTERMEDIATE/12-ES6-Features",
    "LEVEL-03-INTERMEDIATE/13-Modules",
    "LEVEL-03-INTERMEDIATE/14-Classes",
    "LEVEL-03-INTERMEDIATE/15-Error-Handling",
    "LEVEL-03-INTERMEDIATE/16-JSON",
    "LEVEL-04-ADVANCED/17-Promises",
    "LEVEL-04-ADVANCED/18-Async-Await",
    "LEVEL-04-ADVANCED/19-Fetch-API",
    "LEVEL-04-ADVANCED/20-Web-Storage",
    "LEVEL-05-PROJECTS/Counter-App",
    "LEVEL-05-PROJECTS/Todo-List",
    "LEVEL-05-PROJECTS/Digital-Clock",
    "LEVEL-05-PROJECTS/Weather-Widget"
  ],
  "04-GIT": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Git-Init",
    "LEVEL-01-BEGINNER/03-Git-Status",
    "LEVEL-01-BEGINNER/04-Git-Add",
    "LEVEL-01-BEGINNER/05-Git-Commit",
    "LEVEL-02-EASY/06-Git-Log",
    "LEVEL-02-EASY/07-Git-Clone",
    "LEVEL-02-EASY/08-Git-Pull",
    "LEVEL-02-EASY/09-Git-Push",
    "LEVEL-03-INTERMEDIATE/10-Branches",
    "LEVEL-03-INTERMEDIATE/11-Merge",
    "LEVEL-03-INTERMEDIATE/12-Conflict-Resolution",
    "LEVEL-04-ADVANCED/13-Reset",
    "LEVEL-04-ADVANCED/14-Revert",
    "LEVEL-04-ADVANCED/15-Rebase-Basics",
    "LEVEL-05-PROJECTS/01-First-Repository",
    "LEVEL-05-PROJECTS/02-Team-Collaboration-Simulation"
  ],
  "05-GITHUB": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Create-Repository",
    "LEVEL-01-BEGINNER/03-Repository-Structure",
    "LEVEL-01-BEGINNER/04-README-Files",
    "LEVEL-02-EASY/05-Clone-Repository",
    "LEVEL-02-EASY/06-Push-Code",
    "LEVEL-02-EASY/07-Pull-Changes",
    "LEVEL-03-INTERMEDIATE/08-Forks",
    "LEVEL-03-INTERMEDIATE/09-Issues",
    "LEVEL-03-INTERMEDIATE/10-Pull-Requests",
    "LEVEL-04-ADVANCED/11-GitHub-Pages",
    "LEVEL-04-ADVANCED/12-Open-Source-Contributions",
    "LEVEL-05-PROJECTS/01-Portfolio-Repository",
    "LEVEL-05-PROJECTS/02-Open-Source-Contribution-Simulation"
  ],
  "06-BOOTSTRAP": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Installation",
    "LEVEL-01-BEGINNER/03-Container",
    "LEVEL-01-BEGINNER/04-Grid-System",
    "LEVEL-01-BEGINNER/05-Buttons",
    "LEVEL-02-EASY/06-Cards",
    "LEVEL-02-EASY/07-Navbar",
    "LEVEL-02-EASY/08-Forms",
    "LEVEL-02-EASY/09-Tables",
    "LEVEL-02-EASY/10-Utilities",
    "LEVEL-03-INTERMEDIATE/11-Alerts",
    "LEVEL-03-INTERMEDIATE/12-Modal",
    "LEVEL-03-INTERMEDIATE/13-Carousel",
    "LEVEL-03-INTERMEDIATE/14-Accordion",
    "LEVEL-04-ADVANCED/15-Customization",
    "LEVEL-04-ADVANCED/16-Responsive-Layouts",
    "LEVEL-05-PROJECTS/01-Landing-Page",
    "LEVEL-05-PROJECTS/02-Portfolio"
  ],
  "07-TAILWIND": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Installation",
    "LEVEL-01-BEGINNER/03-Utility-Classes",
    "LEVEL-01-BEGINNER/04-Spacing",
    "LEVEL-01-BEGINNER/05-Typography",
    "LEVEL-02-EASY/06-Flexbox",
    "LEVEL-02-EASY/07-Grid",
    "LEVEL-02-EASY/08-Colors",
    "LEVEL-02-EASY/09-Sizing",
    "LEVEL-03-INTERMEDIATE/10-Responsive-Design",
    "LEVEL-03-INTERMEDIATE/11-Hover-States",
    "LEVEL-03-INTERMEDIATE/12-Dark-Mode",
    "LEVEL-04-ADVANCED/13-Component-Patterns",
    "LEVEL-04-ADVANCED/14-Customization",
    "LEVEL-05-PROJECTS/01-Pricing-Card",
    "LEVEL-05-PROJECTS/02-Portfolio-Section",
    "LEVEL-05-PROJECTS/03-Dashboard-UI"
  ],
  "08-REACT": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Setup-Vite",
    "LEVEL-01-BEGINNER/03-JSX",
    "LEVEL-01-BEGINNER/04-Components",
    "LEVEL-01-BEGINNER/05-Props",
    "LEVEL-02-EASY/06-State",
    "LEVEL-02-EASY/07-Events",
    "LEVEL-02-EASY/08-Conditional-Rendering",
    "LEVEL-02-EASY/09-Lists-And-Keys",
    "LEVEL-02-EASY/10-Forms",
    "LEVEL-03-INTERMEDIATE/11-useEffect",
    "LEVEL-03-INTERMEDIATE/12-Fetching-Data",
    "LEVEL-03-INTERMEDIATE/13-Lifting-State-Up",
    "LEVEL-03-INTERMEDIATE/14-Context-API",
    "LEVEL-03-INTERMEDIATE/15-Custom-Hooks",
    "LEVEL-04-ADVANCED/16-React-Router-DOM",
    "LEVEL-04-ADVANCED/17-Performance-Basics",
    "LEVEL-04-ADVANCED/18-Project-Structure",
    "LEVEL-04-ADVANCED/19-Reusable-Components",
    "LEVEL-05-PROJECTS/01-Todo-App",
    "LEVEL-05-PROJECTS/02-Notes-App",
    "LEVEL-05-PROJECTS/03-Expense-Tracker",
    "LEVEL-05-PROJECTS/04-Weather-App"
  ],
  "09-NODEJS": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Install-NodeJS",
    "LEVEL-01-BEGINNER/03-Node-REPL",
    "LEVEL-01-BEGINNER/04-Modules",
    "LEVEL-01-BEGINNER/05-File-System",
    "LEVEL-02-EASY/06-Path-Module",
    "LEVEL-02-EASY/07-OS-Module",
    "LEVEL-02-EASY/08-Events",
    "LEVEL-02-EASY/09-NPM",
    "LEVEL-03-INTERMEDIATE/10-Package-JSON",
    "LEVEL-03-INTERMEDIATE/11-Creating-Servers",
    "LEVEL-03-INTERMEDIATE/12-Streams",
    "LEVEL-03-INTERMEDIATE/13-Buffers",
    "LEVEL-04-ADVANCED/14-Environment-Variables",
    "LEVEL-04-ADVANCED/15-Async-Patterns",
    "LEVEL-04-ADVANCED/16-Project-Structure",
    "LEVEL-05-PROJECTS/01-Notes-CLI",
    "LEVEL-05-PROJECTS/02-Simple-Web-Server"
  ],
  "10-EXPRESSJS": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Setup",
    "LEVEL-01-BEGINNER/03-Routes",
    "LEVEL-01-BEGINNER/04-Request-And-Response",
    "LEVEL-02-EASY/05-Middleware",
    "LEVEL-02-EASY/06-Static-Files",
    "LEVEL-02-EASY/07-Route-Parameters",
    "LEVEL-02-EASY/08-Query-Parameters",
    "LEVEL-03-INTERMEDIATE/09-REST-API",
    "LEVEL-03-INTERMEDIATE/10-CRUD",
    "LEVEL-03-INTERMEDIATE/11-Error-Handling",
    "LEVEL-03-INTERMEDIATE/12-Express-Router",
    "LEVEL-04-ADVANCED/13-Authentication-Basics",
    "LEVEL-04-ADVANCED/14-Validation",
    "LEVEL-04-ADVANCED/15-Project-Structure",
    "LEVEL-05-PROJECTS/01-Todo-API",
    "LEVEL-05-PROJECTS/02-Notes-API"
  ],
  "11-MONGODB": [
    "LEVEL-01-BEGINNER/01-Introduction",
    "LEVEL-01-BEGINNER/02-Installation",
    "LEVEL-01-BEGINNER/03-Documents",
    "LEVEL-01-BEGINNER/04-Collections",
    "LEVEL-02-EASY/05-Insert",
    "LEVEL-02-EASY/06-Find",
    "LEVEL-02-EASY/07-Update",
    "LEVEL-02-EASY/08-Delete",
    "LEVEL-03-INTERMEDIATE/09-Query-Operators",
    "LEVEL-03-INTERMEDIATE/10-Sorting",
    "LEVEL-03-INTERMEDIATE/11-Limit-And-Skip",
    "LEVEL-03-INTERMEDIATE/12-Indexes",
    "LEVEL-04-ADVANCED/13-Aggregation-Basics",
    "LEVEL-04-ADVANCED/14-Relationships",
    "LEVEL-04-ADVANCED/15-Mongoose-Basics",
    "LEVEL-05-PROJECTS/01-Student-Database",
    "LEVEL-05-PROJECTS/02-Expense-Database"
  ],
  "12-MERN": [
    "LEVEL-01-BEGINNER/01-What-Is-MERN",
    "LEVEL-01-BEGINNER/02-Project-Architecture",
    "LEVEL-01-BEGINNER/03-Frontend-And-Backend-Connection",
    "LEVEL-02-EASY/04-CRUD-Workflow",
    "LEVEL-02-EASY/05-API-Integration",
    "LEVEL-02-EASY/06-State-Management",
    "LEVEL-03-INTERMEDIATE/07-Authentication-Flow",
    "LEVEL-03-INTERMEDIATE/08-Protected-Routes",
    "LEVEL-03-INTERMEDIATE/09-Deployment-Basics",
    "LEVEL-04-ADVANCED/10-Scalable-Structure",
    "LEVEL-04-ADVANCED/11-Environment-Management",
    "LEVEL-04-ADVANCED/12-Production-Checklist",
    "LEVEL-05-PROJECTS/01-Task-Manager",
    "LEVEL-05-PROJECTS/02-Expense-Tracker",
    "LEVEL-05-PROJECTS/03-Notes-App",
    "LEVEL-05-PROJECTS/04-Mini-Ecommerce"
  ],
  "13-CAPSTONE-PROJECTS": [
    "01-Portfolio-Website",
    "02-Blog-System",
    "03-Task-Manager",
    "04-Expense-Tracker",
    "05-Ecommerce-Store"
  ],
  "14-INTERVIEW-PREP": [
    "LEVEL-01-BEGINNER/01-HTML-Interview-Questions",
    "LEVEL-01-BEGINNER/02-CSS-Interview-Questions",
    "LEVEL-01-BEGINNER/03-JavaScript-Interview-Questions",
    "LEVEL-01-BEGINNER/04-React-Interview-Questions",
    "LEVEL-02-EASY/05-NodeJS-Interview-Questions",
    "LEVEL-02-EASY/06-ExpressJS-Interview-Questions",
    "LEVEL-02-EASY/07-MongoDB-Interview-Questions",
    "LEVEL-03-INTERMEDIATE/08-MERN-Interview-Questions",
    "LEVEL-03-INTERMEDIATE/09-HR-Questions",
    "LEVEL-04-ADVANCED/10-Mock-Interview"
  ],
  "15-CHEATSHEETS": [
    "LEVEL-01-BEGINNER/01-HTML-CheatSheet",
    "LEVEL-01-BEGINNER/02-CSS-CheatSheet",
    "LEVEL-01-BEGINNER/03-JavaScript-CheatSheet",
    "LEVEL-02-EASY/04-Git-CheatSheet",
    "LEVEL-02-EASY/05-GitHub-CheatSheet",
    "LEVEL-02-EASY/06-Bootstrap-CheatSheet",
    "LEVEL-02-EASY/07-Tailwind-CheatSheet",
    "LEVEL-03-INTERMEDIATE/08-React-CheatSheet",
    "LEVEL-03-INTERMEDIATE/09-NodeJS-CheatSheet",
    "LEVEL-03-INTERMEDIATE/10-ExpressJS-CheatSheet",
    "LEVEL-04-ADVANCED/11-MongoDB-CheatSheet",
    "LEVEL-04-ADVANCED/12-MERN-CheatSheet"
  ],
  "16-SYSTEM-DESIGN-BASICS": [
    "LEVEL-01-BEGINNER/01-What-Is-System-Design",
    "LEVEL-01-BEGINNER/02-Client-Server",
    "LEVEL-01-BEGINNER/03-Request-Response",
    "LEVEL-02-EASY/04-Databases",
    "LEVEL-02-EASY/05-Caching",
    "LEVEL-02-EASY/06-Load-Balancing",
    "LEVEL-03-INTERMEDIATE/07-Authentication",
    "LEVEL-03-INTERMEDIATE/08-CDN",
    "LEVEL-03-INTERMEDIATE/09-Microservices-Basics",
    "LEVEL-04-ADVANCED/10-Design-A-Simple-App"
  ],
  "17-CAREER-GUIDE": [
    "LEVEL-01-BEGINNER/01-Frontend-Roadmap",
    "LEVEL-01-BEGINNER/02-Backend-Roadmap",
    "LEVEL-01-BEGINNER/03-FullStack-Roadmap",
    "LEVEL-02-EASY/04-Portfolio-Guide",
    "LEVEL-02-EASY/05-Resume-Guide",
    "LEVEL-02-EASY/06-LinkedIn-Guide",
    "LEVEL-02-EASY/07-GitHub-Guide",
    "LEVEL-03-INTERMEDIATE/08-Freelancing-Basics",
    "LEVEL-03-INTERMEDIATE/09-Internship-Preparation",
    "LEVEL-03-INTERMEDIATE/10-First-Job-Preparation",
    "LEVEL-04-ADVANCED/11-Salary-Negotiation",
    "LEVEL-04-ADVANCED/12-Remote-Work-Basics"
  ],
  "18-OPEN-SOURCE": [
    "LEVEL-01-BEGINNER/01-What-Is-Open-Source",
    "LEVEL-01-BEGINNER/02-Finding-Projects",
    "LEVEL-01-BEGINNER/03-Forks",
    "LEVEL-02-EASY/04-Issues",
    "LEVEL-02-EASY/05-Pull-Requests",
    "LEVEL-02-EASY/06-Code-Reviews",
    "LEVEL-02-EASY/07-Good-First-Issue",
    "LEVEL-03-INTERMEDIATE/08-Contribution-Workflow",
    "LEVEL-03-INTERMEDIATE/09-Open-Source-Portfolio",
    "LEVEL-04-ADVANCED/10-First-Contribution-Project"
  ],
  "19-DSA-FOR-WEB-DEVS": [
    "LEVEL-01-BEGINNER/01-Big-O-Basics",
    "LEVEL-01-BEGINNER/02-Arrays",
    "LEVEL-01-BEGINNER/03-Strings",
    "LEVEL-02-EASY/04-Objects",
    "LEVEL-02-EASY/05-HashMaps",
    "LEVEL-02-EASY/06-Stacks",
    "LEVEL-02-EASY/07-Queues",
    "LEVEL-03-INTERMEDIATE/08-LinkedLists",
    "LEVEL-03-INTERMEDIATE/09-Recursion",
    "LEVEL-03-INTERMEDIATE/10-Sorting-Basics",
    "LEVEL-03-INTERMEDIATE/11-Searching-Basics",
    "LEVEL-04-ADVANCED/12-Problem-Solving-Patterns"
  ],
  "20-DEVELOPER-MINDSET": [
    "LEVEL-01-BEGINNER/01-How-To-Learn",
    "LEVEL-01-BEGINNER/02-How-To-Debug",
    "LEVEL-01-BEGINNER/03-How-To-Read-Documentation",
    "LEVEL-02-EASY/04-How-To-Ask-Good-Questions",
    "LEVEL-02-EASY/05-Avoid-Tutorial-Hell",
    "LEVEL-02-EASY/06-Building-Projects",
    "LEVEL-03-INTERMEDIATE/07-Time-Management",
    "LEVEL-03-INTERMEDIATE/08-Consistency",
    "LEVEL-03-INTERMEDIATE/09-Problem-Solving",
    "LEVEL-04-ADVANCED/10-Growth-Mindset"
  ]
};

const placeholders = [];

let errors = 0;

console.log("Validating MeetTutorials Structures (All Sections up to Capstone Projects)...");

// 1. Validate Root Files
["README.md", "START-HERE.md", "ROADMAP.md"].forEach(file => {
  const filePath = path.join(BASE_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.error(`[-] Missing root file: ${file}`);
    errors++;
  } else {
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      console.error(`[-] Root file is empty: ${file}`);
      errors++;
    }
  }
});

// 2. Validate 00-DEVELOPER-SETUP files
const devSetupDir = path.join(BASE_DIR, "00-DEVELOPER-SETUP");
if (!fs.existsSync(devSetupDir)) {
  console.error("[-] Missing directory: 00-DEVELOPER-SETUP");
  errors++;
} else {
  devSetupExpected.forEach(file => {
    const filePath = path.join(devSetupDir, file);
    if (!fs.existsSync(filePath)) {
      console.error(`[-] Missing developer setup file: 00-DEVELOPER-SETUP/${file}`);
      errors++;
    } else {
      const stats = fs.statSync(filePath);
      if (stats.size === 0) {
        console.error(`[-] Developer setup file is empty: 00-DEVELOPER-SETUP/${file}`);
        errors++;
      }
    }
  });
}

// 3. Validate Topics/Projects for each section
Object.keys(sections).forEach(secName => {
  sections[secName].forEach(topic => {
    const topicDir = path.join(BASE_DIR, secName, topic);
    if (!fs.existsSync(topicDir)) {
      console.error(`[-] Missing topic folder: ${secName}/${topic}`);
      errors++;
      return;
    }
    
    // Verify expected files exist and are not empty
    expectedFiles.forEach(file => {
      if (file === "02-example.html") {
        const htmlPath = path.join(topicDir, "02-example.html");
        const jsPath = path.join(topicDir, "02-example.js");
        const shPath = path.join(topicDir, "02-example.sh");
        const jsxPath = path.join(topicDir, "02-example.jsx");
        const jsonPath = path.join(topicDir, "02-example.json");
        if (!fs.existsSync(htmlPath) && !fs.existsSync(jsPath) && !fs.existsSync(shPath) && !fs.existsSync(jsxPath) && !fs.existsSync(jsonPath)) {
          console.error(`[-] Missing example file: ${secName}/${topic}/02-example.js, .html, .sh, .jsx, or .json`);
          errors++;
        } else {
          const filePath = fs.existsSync(htmlPath) ? htmlPath : 
                           (fs.existsSync(jsPath) ? jsPath : 
                           (fs.existsSync(shPath) ? shPath : 
                           (fs.existsSync(jsxPath) ? jsxPath : jsonPath)));
          const stats = fs.statSync(filePath);
          if (stats.size === 0) {
            console.error(`[-] Example file is empty: ${secName}/${topic}/${path.basename(filePath)}`);
            errors++;
          }
        }
      } else {
        const filePath = path.join(topicDir, file);
        if (!fs.existsSync(filePath)) {
          console.error(`[-] Missing file: ${secName}/${topic}/${file}`);
          errors++;
        } else {
          const stats = fs.statSync(filePath);
          if (stats.size === 0) {
            console.error(`[-] File is empty: ${secName}/${topic}/${file}`);
            errors++;
          }
        }
      }
    });

    // Verify forbidden files are deleted
    forbiddenFiles.forEach(file => {
      const filePath = path.join(topicDir, file);
      if (fs.existsSync(filePath)) {
        console.error(`[-] Forbidden file still exists: ${secName}/${topic}/${file}`);
        errors++;
      }
    });
  });
});

// 4. Validate Placeholders
placeholders.forEach(place => {
  const readmePath = path.join(BASE_DIR, place, "README.md");
  if (!fs.existsSync(readmePath)) {
    console.error(`[-] Missing placeholder: ${place}/README.md`);
    errors++;
  } else {
    const stats = fs.statSync(readmePath);
    if (stats.size === 0) {
      console.error(`[-] Placeholder readme is empty: ${place}/README.md`);
      errors++;
    }
  }
});

if (errors === 0) {
  console.log("[+] Validation passed! All structures and files are 100% compliant.");
} else {
  console.error(`[-] Validation failed with ${errors} error(s).`);
}
process.exit(errors === 0 ? 0 : 1);
