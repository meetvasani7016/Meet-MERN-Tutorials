const fs = require('fs');
const path = require('path');

const BASE_DIR = "d:\\Meet Tutorials\\MeetTutorials";

const LEVELS = {
  "01-HTML": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Headings", "03-Paragraphs", "04-Formatting", "05-Comments"],
    "LEVEL-02-EASY": ["06-Links", "07-Images", "08-Lists", "09-Tables"],
    "LEVEL-03-INTERMEDIATE": ["10-Forms", "11-Input-Types", "12-Audio", "13-Video", "14-Iframes"],
    "LEVEL-04-ADVANCED": ["15-Semantic-Tags", "16-SEO-Basics", "17-Accessibility"],
    "LEVEL-05-PROJECTS": ["Mini-Project-1-Recipe-Page", "Mini-Project-2-Survey-Form"]
  },
  "02-CSS": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Selectors", "03-Colors", "04-Backgrounds", "05-Borders"],
    "LEVEL-02-EASY": ["06-Margins", "07-Padding", "08-Width-And-Height", "09-Display", "10-Position"],
    "LEVEL-03-INTERMEDIATE": ["11-Flexbox", "12-Grid", "13-Responsive-Design", "14-Media-Queries"],
    "LEVEL-04-ADVANCED": ["15-Transitions", "16-Transforms", "17-Animations"],
    "LEVEL-05-PROJECTS": ["Personal-Card", "Landing-Page", "Pricing-Card", "Responsive-Portfolio-Section"]
  },
  "03-JAVASCRIPT": {
    "LEVEL-01-BEGINNER": ["01-Variables", "02-Data-Types", "03-Operators", "04-Conditions", "05-Loops", "06-Functions"],
    "LEVEL-02-EASY": ["07-Arrays", "08-Objects", "09-DOM-Selection", "10-DOM-Manipulation", "11-Events"],
    "LEVEL-03-INTERMEDIATE": ["12-ES6-Features", "13-Modules", "14-Classes", "15-Error-Handling", "16-JSON"],
    "LEVEL-04-ADVANCED": ["17-Promises", "18-Async-Await", "19-Fetch-API", "20-Web-Storage"],
    "LEVEL-05-PROJECTS": ["Counter-App", "Todo-List", "Digital-Clock", "Weather-Widget"]
  },
  "04-GIT": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Git-Init", "03-Git-Status", "04-Git-Add", "05-Git-Commit"],
    "LEVEL-02-EASY": ["06-Git-Log", "07-Git-Clone", "08-Git-Pull", "09-Git-Push"],
    "LEVEL-03-INTERMEDIATE": ["10-Branches", "11-Merge", "12-Conflict-Resolution"],
    "LEVEL-04-ADVANCED": ["13-Reset", "14-Revert", "15-Rebase-Basics"],
    "LEVEL-05-PROJECTS": ["01-First-Repository", "02-Team-Collaboration-Simulation"]
  },
  "05-GITHUB": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Create-Repository", "03-Repository-Structure", "04-README-Files"],
    "LEVEL-02-EASY": ["05-Clone-Repository", "06-Push-Code", "07-Pull-Changes"],
    "LEVEL-03-INTERMEDIATE": ["08-Forks", "09-Issues", "10-Pull-Requests"],
    "LEVEL-04-ADVANCED": ["11-GitHub-Pages", "12-Open-Source-Contributions"],
    "LEVEL-05-PROJECTS": ["01-Portfolio-Repository", "02-Open-Source-Contribution-Simulation"]
  },
  "06-BOOTSTRAP": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Installation", "03-Container", "04-Grid-System", "05-Buttons"],
    "LEVEL-02-EASY": ["06-Cards", "07-Navbar", "08-Forms", "09-Tables", "10-Utilities"],
    "LEVEL-03-INTERMEDIATE": ["11-Alerts", "12-Modal", "13-Carousel", "14-Accordion"],
    "LEVEL-04-ADVANCED": ["15-Customization", "16-Responsive-Layouts"],
    "LEVEL-05-PROJECTS": ["01-Landing-Page", "02-Portfolio"]
  },
  "07-TAILWIND": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Installation", "03-Utility-Classes", "04-Spacing", "05-Typography"],
    "LEVEL-02-EASY": ["06-Flexbox", "07-Grid", "08-Colors", "09-Sizing"],
    "LEVEL-03-INTERMEDIATE": ["10-Responsive-Design", "11-Hover-States", "12-Dark-Mode"],
    "LEVEL-04-ADVANCED": ["13-Component-Patterns", "14-Customization"],
    "LEVEL-05-PROJECTS": ["01-Pricing-Card", "02-Portfolio-Section", "03-Dashboard-UI"]
  },
  "08-REACT": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Setup-Vite", "03-JSX", "04-Components", "05-Props"],
    "LEVEL-02-EASY": ["06-State", "07-Events", "08-Conditional-Rendering", "09-Lists-And-Keys", "10-Forms"],
    "LEVEL-03-INTERMEDIATE": ["11-useEffect", "12-Fetching-Data", "13-Lifting-State-Up", "14-Context-API", "15-Custom-Hooks"],
    "LEVEL-04-ADVANCED": ["16-React-Router-DOM", "17-Performance-Basics", "18-Project-Structure", "19-Reusable-Components"],
    "LEVEL-05-PROJECTS": ["01-Todo-App", "02-Notes-App", "03-Expense-Tracker", "04-Weather-App"]
  },
  "09-NODEJS": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Install-NodeJS", "03-Node-REPL", "04-Modules", "05-File-System"],
    "LEVEL-02-EASY": ["06-Path-Module", "07-OS-Module", "08-Events", "09-NPM"],
    "LEVEL-03-INTERMEDIATE": ["10-Package-JSON", "11-Creating-Servers", "12-Streams", "13-Buffers"],
    "LEVEL-04-ADVANCED": ["14-Environment-Variables", "15-Async-Patterns", "16-Project-Structure"],
    "LEVEL-05-PROJECTS": ["01-Notes-CLI", "02-Simple-Web-Server"]
  },
  "10-EXPRESSJS": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Setup", "03-Routes", "04-Request-And-Response"],
    "LEVEL-02-EASY": ["05-Middleware", "06-Static-Files", "07-Route-Parameters", "08-Query-Parameters"],
    "LEVEL-03-INTERMEDIATE": ["09-REST-API", "10-CRUD", "11-Error-Handling", "12-Express-Router"],
    "LEVEL-04-ADVANCED": ["13-Authentication-Basics", "14-Validation", "15-Project-Structure"],
    "LEVEL-05-PROJECTS": ["01-Todo-API", "02-Notes-API"]
  },
  "11-MONGODB": {
    "LEVEL-01-BEGINNER": ["01-Introduction", "02-Installation", "03-Documents", "04-Collections"],
    "LEVEL-02-EASY": ["05-Insert", "06-Find", "07-Update", "08-Delete"],
    "LEVEL-03-INTERMEDIATE": ["09-Query-Operators", "10-Sorting", "11-Limit-And-Skip", "12-Indexes"],
    "LEVEL-04-ADVANCED": ["13-Aggregation-Basics", "14-Relationships", "15-Mongoose-Basics"],
    "LEVEL-05-PROJECTS": ["01-Student-Database", "02-Expense-Database"]
  },
  "12-MERN": {
    "LEVEL-01-BEGINNER": ["01-What-Is-MERN", "02-Project-Architecture", "03-Frontend-And-Backend-Connection"],
    "LEVEL-02-EASY": ["04-CRUD-Workflow", "05-API-Integration", "06-State-Management"],
    "LEVEL-03-INTERMEDIATE": ["07-Authentication-Flow", "08-Protected-Routes", "09-Deployment-Basics"],
    "LEVEL-04-ADVANCED": ["10-Scalable-Structure", "11-Environment-Management", "12-Production-Checklist"],
    "LEVEL-05-PROJECTS": ["01-Task-Manager", "02-Expense-Tracker", "03-Notes-App", "04-Mini-Ecommerce"]
  },
  "14-INTERVIEW-PREP": {
    "LEVEL-01-BEGINNER": ["01-HTML-Interview-Questions", "02-CSS-Interview-Questions", "03-JavaScript-Interview-Questions", "04-React-Interview-Questions"],
    "LEVEL-02-EASY": ["05-NodeJS-Interview-Questions", "06-ExpressJS-Interview-Questions", "07-MongoDB-Interview-Questions"],
    "LEVEL-03-INTERMEDIATE": ["08-MERN-Interview-Questions", "09-HR-Questions"],
    "LEVEL-04-ADVANCED": ["10-Mock-Interview"]
  },
  "15-CHEATSHEETS": {
    "LEVEL-01-BEGINNER": ["01-HTML-CheatSheet", "02-CSS-CheatSheet", "03-JavaScript-CheatSheet"],
    "LEVEL-02-EASY": ["04-Git-CheatSheet", "05-GitHub-CheatSheet", "06-Bootstrap-CheatSheet", "07-Tailwind-CheatSheet"],
    "LEVEL-03-INTERMEDIATE": ["08-React-CheatSheet", "09-NodeJS-CheatSheet", "10-ExpressJS-CheatSheet"],
    "LEVEL-04-ADVANCED": ["11-MongoDB-CheatSheet", "12-MERN-CheatSheet"]
  },
  "16-SYSTEM-DESIGN-BASICS": {
    "LEVEL-01-BEGINNER": ["01-What-Is-System-Design", "02-Client-Server", "03-Request-Response"],
    "LEVEL-02-EASY": ["04-Databases", "05-Caching", "06-Load-Balancing"],
    "LEVEL-03-INTERMEDIATE": ["07-Authentication", "08-CDN", "09-Microservices-Basics"],
    "LEVEL-04-ADVANCED": ["10-Design-A-Simple-App"]
  },
  "17-CAREER-GUIDE": {
    "LEVEL-01-BEGINNER": ["01-Frontend-Roadmap", "02-Backend-Roadmap", "03-FullStack-Roadmap"],
    "LEVEL-02-EASY": ["04-Portfolio-Guide", "05-Resume-Guide", "06-LinkedIn-Guide", "07-GitHub-Guide"],
    "LEVEL-03-INTERMEDIATE": ["08-Freelancing-Basics", "09-Internship-Preparation", "10-First-Job-Preparation"],
    "LEVEL-04-ADVANCED": ["11-Salary-Negotiation", "12-Remote-Work-Basics"]
  },
  "18-OPEN-SOURCE": {
    "LEVEL-01-BEGINNER": ["01-What-Is-Open-Source", "02-Finding-Projects", "03-Forks"],
    "LEVEL-02-EASY": ["04-Issues", "05-Pull-Requests", "06-Code-Reviews", "07-Good-First-Issue"],
    "LEVEL-03-INTERMEDIATE": ["08-Contribution-Workflow", "09-Open-Source-Portfolio"],
    "LEVEL-04-ADVANCED": ["10-First-Contribution-Project"]
  },
  "19-DSA-FOR-WEB-DEVS": {
    "LEVEL-01-BEGINNER": ["01-Big-O-Basics", "02-Arrays", "03-Strings"],
    "LEVEL-02-EASY": ["04-Objects", "05-HashMaps", "06-Stacks", "07-Queues"],
    "LEVEL-03-INTERMEDIATE": ["08-LinkedLists", "09-Recursion", "10-Sorting-Basics", "11-Searching-Basics"],
    "LEVEL-04-ADVANCED": ["12-Problem-Solving-Patterns"]
  },
  "20-DEVELOPER-MINDSET": {
    "LEVEL-01-BEGINNER": ["01-How-To-Learn", "02-How-To-Debug", "03-How-To-Read-Documentation"],
    "LEVEL-02-EASY": ["04-How-To-Ask-Good-Questions", "05-Avoid-Tutorial-Hell", "06-Building-Projects"],
    "LEVEL-03-INTERMEDIATE": ["07-Time-Management", "08-Consistency", "09-Problem-Solving"],
    "LEVEL-04-ADVANCED": ["10-Growth-Mindset"]
  }
};

const OTHER_SECTIONS = [];

const HTML_DATA = {
  "01-Introduction": {
    title: "HTML Introduction",
    line: "HTML is the language used to create the structure of a web page.",
    think: "HTML is the skeleton of a human body.\n\nWithout a skeleton, the body has no shape.\n\nWithout HTML, a website has no structure.",
    example: "<h1>Hello World</h1>",
    result: "Displays a large heading:\n\nHello World",
    remember: "HTML = Structure\nCSS = Design\nJavaScript = Behavior",
    summary: "* HTML stands for HyperText Markup Language.\n* It defines the skeleton of a webpage.\n* Every HTML document needs structural tags: `<html>`, `<head>`, and `<body>`.\n* Tags come in pairs: opening `<tag>` and closing `</tag>`.",
    diagram: `
+------------------------------------------+
|  HTML Document Skeleton                  |
|                                          |
|  <!DOCTYPE html>  <-- Tells browser format|
|  <html>           <-- Root box           |
|    <head>         <-- Brain box          |
|      <title>Text</title>                 |
|    </head>                               |
|    <body>         <-- Body (Visible)     |
|      <h1>Header</h1>                     |
|      <p>Paragraph</p>                    |
|    </body>                               |
|  </html>                                 |
+------------------------------------------+
`,
    practice: "1. Create a blank file named `my-first-page.html`.\n2. Write the standard HTML skeleton.\n3. Inside the `<body>`, write an `<h1>` tag with your name.\n4. Open this file in your browser to see your name in giant, bold letters!",
    challenge: "Add a paragraph (`<p>`) below your name containing a short sentence about why you want to learn programming. Save it and refresh your browser!",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to My First Web Page!</h1>
    <p>HTML is super easy and fun to learn!</p>
  </body>
</html>`,
    ext: "html"
  },
  "02-Headings": {
    title: "HTML Headings",
    line: "Headings (H1 to H6) are used to define titles and subtitles on a webpage.",
    think: "Headings are newspaper headlines.\n\n- The H1 tag is the main front-page headline (use only one per page).\n- The H2 and H3 tags are secondary article headers.\n- H6 is the smallest footnote.",
    example: "<h1>Main Title</h1>\n<h2>Sub-heading</h2>",
    result: "Displays bold headings of decreasing sizes.",
    remember: "Use headings to build page structure, not just to make text look big! Use CSS for sizing.",
    summary: "* Headings range from `<h1>` (largest) to `<h6>` (smallest).\n* Use only one `<h1>` per page for best SEO results.\n* Headings create visual and semantic hierarchy.",
    diagram: `
+------------------------------------------+
|  HTML Headings Hierarchy                 |
|                                          |
|  <h1>  Giant Title (Main Topic)          |
|  <h2>  Major Section Title               |
|  <h3>  Sub-section Title                 |
|  <h4>  Small details heading             |
|  <h5>  Sub-details                       |
|  <h6>  Tiny text note                    |
+------------------------------------------+
`,
    practice: "Create a file named `headings.html` and write all six headings from `<h1>` to `<h6>` inside the body.",
    challenge: "Create a mini-article layout: Use an `<h1>` for the main title, `<h2>` for a section header, and `<h3>` for a sub-detail.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Headings Example</title>
  </head>
  <body>
    <h1>Learn Web Development (H1)</h1>
    <h2>1. HTML Basics (H2)</h2>
    <h3>Headings Lesson (H3)</h3>
    <p>We are currently learning headings.</p>
  </body>
</html>`,
    ext: "html"
  },
  "03-Paragraphs": {
    title: "HTML Paragraphs",
    line: "Paragraphs (<p>) represent blocks of text and automatically add spacing above and below.",
    think: "Paragraphs are like breathing breaks for your eyes in a storybook.\n\nInstead of one giant block of endless text, paragraphs divide thoughts into clean chunks.",
    example: "<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>",
    result: "Displays two separate blocks of text with empty space in between.",
    remember: "Browsers collapse multiple spaces and enters inside a <p> tag. Use <br> to break lines.",
    summary: "* Paragraphs are created with the `<p>` tag.\n* Browsers add margins around paragraphs automatically.\n* Use `<br>` for a single line break and `<hr>` for a horizontal line rule.",
    diagram: `
+------------------------------------------+
| Browser Paragraph Rendering              |
|                                          |
|  [ Paragraph 1 (text text text) ]        |
|  =================================       |
|  ||      Blank spacing here     ||  <p>  |
|  =================================       |
|  [ Paragraph 2 (text text text) ]        |
+------------------------------------------+
`,
    practice: "Create a file named `story.html` and write three separate paragraphs about your favorite hobby.",
    challenge: "Add a line break inside your paragraph using the `<br>` tag to split a sentence into two lines without creating a new paragraph.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Paragraphs Example</title>
  </head>
  <body>
    <h1>My Daily Routine</h1>
    <p>In the morning, I wake up at 7:00 AM.<br>I eat oatmeal for breakfast.</p>
    <p>In the afternoon, I code and build websites.</p>
  </body>
</html>`,
    ext: "html"
  },
  "04-Formatting": {
    title: "HTML Formatting",
    line: "Formatting tags alter the appearance and importance of text (bold, italics, highlights).",
    think: "Bold (<strong>) is like using a thick black marker.\n\nItalic (<em>) is like speaking in an emphasized tone.\n\nMark (<mark>) is like using a yellow highlighter.",
    example: "<strong>Bold</strong>, <em>Italics</em>, and <mark>Highlight</mark>",
    result: "Displays formatted text with physical style differences.",
    remember: "Use <strong> and <em> (semantic tags) instead of <b> and <i> (visual tags) for better accessibility.",
    summary: "* Use `<strong>` to make text bold and important.\n* Use `<em>` to italicize/emphasize text.\n* Use `<mark>` to highlight text.\n* Use `<sub>` and `<sup>` for subscripts and superscripts.",
    diagram: `
+------------------------------------------+
|  Text Formatting Styles                  |
|                                          |
|  <strong>Bold Text</strong>  -> Bold     |
|  <em>Italic Text</em>      -> Slanted    |
|  <mark>Marked</mark>       -> Highlighted|
|  Normal <sub>Sub</sub>     -> Low line   |
|  Normal <sup>Sup</sup>     -> High line  |
+------------------------------------------+
`,
    practice: "Create a file named `recipe.html`. Write a paragraph about making tea using `<strong>` for ingredients and `<em>` for tools.",
    challenge: "Use `<del>` (strike-through) and `<ins>` (underline) to show a price drop from $100 to $79.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Text Formatting</title>
  </head>
  <body>
    <p>This is a <strong>critical warning</strong>: Do not press the button.</p>
    <p>Water is written as H<sub>2</sub>O, and math formulas look like E = mc<sup>2</sup>.</p>
  </body>
</html>`,
    ext: "html"
  },
  "05-Comments": {
    title: "HTML Comments",
    line: "Comments allow developers to write notes in source code that the browser ignores.",
    think: "Comments are sticky notes inside a chef's cookbook.\n\nThe customer eating the food (the website visitor) never sees them, but the kitchen staff (developers) do.",
    example: "<!-- Remember to fix this header later -->",
    result: "Displays absolutely nothing on the screen.",
    remember: "Comments are NOT secure! Anyone can see them by right-clicking and viewing page source.",
    summary: "* Comments start with `<!--` and end with `-->`.\n* They do not render on screen.\n* Excellent for documenting code sections and temporarily disabling elements.",
    diagram: `
+------------------------------------------+
|  HTML Comments flow                      |
|                                          |
|  Code: <h1>Title</h1>                    |
|        <!-- Sticky Note -->              |
|        <p>Text</p>                       |
|                                          |
|  Browser parses:                         |
|    - <h1>Title</h1>     --> Renders      |
|    - <!-- Comment -->   --> Ignores!     |
|    - <p>Text</p>        --> Renders      |
+------------------------------------------+
`,
    practice: "Create a file named `comments.html` containing a heading, a paragraph, and a developer comment describing the content.",
    challenge: "Wrap a paragraph tag in comments to make it disappear from the browser screen without deleting the code.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Comments Example</title>
  </head>
  <body>
    <h1>Welcome to My Store</h1>
    <!-- TODO: Add shopping cart icon here -->
    <p>Product list goes here...</p>
  </body>
</html>`,
    ext: "html"
  },
  "06-Links": {
    title: "HTML Links",
    line: "Links (<a>) are hyperlinks that connect webpages together.",
    think: "Links are teleportation doors.\n\nYou walk up to the door, read the sign (clickable link text), step through, and instantly arrive in a new room (href destination URL).",
    example: '<a href="https://google.com" target="_blank">Google</a>',
    result: "Renders a clickable link pointing to Google that opens in a new tab.",
    remember: "Always include the protocol (https://) for external URLs, otherwise the browser thinks it's a file on your computer!",
    summary: "* Created with the `<a>` (anchor) tag.\n* `href` attribute defines the destination address.\n* `target=\"_blank\"` opens the link in a new browser tab.",
    diagram: `
+------------------------------------------+
|  HTML Anchor Tag Anatomy                 |
|                                          |
|  <a href="url" target="_blank">Click</a>  |
|   |    |    |          |         |       |
|   |    |  Dest.      Opens      Clickable|
|   Tag  |  URL        in new     Label    |
|   Name |             tab                 |
|      Attribute                           |
+------------------------------------------+
`,
    practice: "Create a page pointing to Wikipedia using a link that opens in a new tab.",
    challenge: "Create two separate html files (`page1.html` and `page2.html`) and create links that let you jump back and forth between them.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Links Example</title>
  </head>
  <body>
    <p>Search on <a href="https://www.google.com">Google</a>.</p>
    <p>Read docs on <a href="https://developer.mozilla.org" target="_blank">MDN</a>.</p>
  </body>
</html>`,
    ext: "html"
  },
  "07-Images": {
    title: "HTML Images",
    line: "Images (<img>) display pictures on a webpage.",
    think: "The <img> tag is a picture frame.\n\n- The 'src' attribute is the string tied to the frame pointing to where the canvas painting is stored.\n- The 'alt' attribute is the description card underneath the frame for blind visitors.",
    example: '<img src="cat.jpg" alt="A cute orange cat sleeping">',
    result: "Renders the picture on the page.",
    remember: "The <img> tag is self-closing—it does not need a closing </img> tag.",
    summary: "* Embed images using the `<img>` tag.\n* `src` defines image path/URL.\n* `alt` provides descriptions for screen readers and acts as broken path backup.\n* Set sizing with `width` and `height` attributes.",
    diagram: `
+------------------------------------------+
|  HTML Image Tag Attributes               |
|                                          |
|  <img src="kitten.jpg" alt="Orange Cat">  |
|   |         |                  |         |
|  Tag    Source File       Description    |
|  Name   (Where is it?)    (For readers)  |
+------------------------------------------+
`,
    practice: "Create a page and display an image from the web using a public URL with a descriptive `alt` attribute.",
    challenge: "Place an `<img>` tag inside an `<a>` tag so that clicking the picture teleports you to another website.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Images Example</title>
  </head>
  <body>
    <h1>My Photo Gallery</h1>
    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400" alt="A cute cat looking forward" width="400" height="300">
  </body>
</html>`,
    ext: "html"
  },
  "08-Lists": {
    title: "HTML Lists",
    line: "Lists group related items. Use <ul> for bullets and <ol> for numbers.",
    think: "Lists are notebook entries.\n\n- Unordered (<ul>) is a grocery list: order doesn't matter (eggs before milk is fine).\n- Ordered (<ol>) is recipe steps: order is critical (mix before baking).",
    example: "<ul>\n  <li>Apples</li>\n  <li>Milk</li>\n</ul>",
    result: "Displays bullet points:\n* Apples\n* Milk",
    remember: "Only list items (<li>) should be placed directly inside <ul> or <ol> containers.",
    summary: "* Unordered lists (`<ul>`) render bullet points.\n* Ordered lists (`<ol>`) render numbers.\n* List elements are enclosed in `<li>` tags.\n* Lists can be nested inside one another.",
    diagram: `
+------------------------------------------+
|  Unordered List vs Ordered List          |
|                                          |
|  <ul>                     <ol>           |
|    <li>Apples</li>          <li>Step 1</li>|
|    <li>Milk</li>            <li>Step 2</li>|
|  </ul>                    </ol>          |
|                                          |
|  Visual:                  Visual:        |
|  * Apples                 1. Step 1      |
|  * Milk                   2. Step 2      |
+------------------------------------------+
`,
    practice: "Create a list of your top three favorite movies using an unordered list.",
    challenge: "Create a nested list representing folders: 'Projects' folder (bullets) -> inside it, 'HTML' and 'CSS' (numbers).",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Lists Example</title>
  </head>
  <body>
    <h2>Groceries</h2>
    <ul>
      <li>Apples</li>
      <li>Milk</li>
    </ul>
    <h2>Steps</h2>
    <ol>
      <li>Boil water.</li>
      <li>Add tea.</li>
    </ol>
  </body>
</html>`,
    ext: "html"
  },
  "09-Tables": {
    title: "HTML Tables",
    line: "Tables (<table>) display grid data in rows and columns.",
    think: "Tables are like your school class timetable.\n\n- Columns represent days.\n- Rows represent class periods.\n- Each cell represents a subject.",
    example: "<table>\n  <tr><th>Subject</th></tr>\n  <tr><td>Math</td></tr>\n</table>",
    result: "Displays a neat data grid.",
    remember: "Never use tables to layout page designs! Only use tables to display grid data.",
    summary: "* `<tr>` represents a table row.\n* `<th>` represents a table header (bold & centered).\n* `<td>` represents a standard data cell.\n* Use `colspan` and `rowspan` to merge cells.",
    diagram: `
+---------------------------------------+
|  HTML Table Anatomy                   |
|                                       |
|  +---------+---------+   <- Header Row|
|  | th cell | th cell |   (<tr><th>)   |
|  +---------+---------+                |
|  | td cell | td cell |   <- Data Row  |
|  +---------+---------+   (<tr><td>)   |
+---------------------------------------+
`,
    practice: "Create a timetable schedule with three columns: Day, Time, and Activity.",
    challenge: "Use the `colspan` attribute to create a merged heading cell that spans across all three columns of your timetable.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Tables Example</title>
    <style>table, th, td { border: 1px solid black; border-collapse: collapse; padding: 6px; }</style>
  </head>
  <body>
    <table>
      <tr><th>Item</th><th>Price</th></tr>
      <tr><td>Apple</td><td>$1.00</td></tr>
      <tr><td>Milk</td><td>$2.00</td></tr>
    </table>
  </body>
</html>`,
    ext: "html"
  },
  "10-Forms": {
    title: "HTML Forms",
    line: "Forms (<form>) collect user data and submit it to a server.",
    think: "Forms are paper application forms on a doctor's office clipboard.\n\n- The clipboard is the <form> container.\n- The text descriptions are <label>s.\n- The boxes you write inside are <input>s.\n- Handing the clipboard back is the Submit button.",
    example: '<form action="/save"><input type="text"><button type="submit">Submit</button></form>',
    result: "Displays input controls with a working submit button.",
    remember: "Always bind labels to inputs using matching 'for' and 'id' attributes for accessibility.",
    summary: "* Forms gather inputs inside the `<form>` container.\n* `action` specifies where the data goes.\n* `method` (GET/POST) controls how data is sent.",
    diagram: `
+------------------------------------------+
|  HTML Form Flow                          |
|                                          |
|  User Types -> Clicks Submit -> Sent     |
|  [ Label: Name ] [ Input field ]         |
|  [       Submit Button         ]         |
|                               |          |
|                               v          |
|                 Server API (action URL)  |
+------------------------------------------+
`,
    practice: "Create a simple login form containing username and password inputs, along with a submit button.",
    challenge: "Verify label mapping: click the text 'Password' on your page. The cursor should automatically focus inside the password input field.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Forms Example</title>
  </head>
  <body>
    <form action="/submit-form" method="POST">
      <p>
        <label for="username">Username:</label>
        <input type="text" id="username" required>
      </p>
      <button type="submit">Login</button>
    </form>
  </body>
</html>`,
    ext: "html"
  },
  "11-Input-Types": {
    title: "HTML Input Types",
    line: "Input Types define what kind of input box to render (text, password, dates, checkboxes).",
    think: "Input types are specialized slots in a vending machine.\n\n- The coin slot only accepts coins.\n- The bill slot only accepts paper notes.\n- The card slot only reads cards.",
    example: '<input type="password">\n<input type="checkbox">',
    result: "Renders a hidden password text field and a clickable checkbox.",
    remember: "Always group related radio buttons using the exact same 'name' attribute so only one can be selected.",
    summary: "* Use the `type` attribute to define input formats.\n* Common types: text, password, email, number, date, checkbox, radio.\n* Radio buttons need matching `name` tags to form a single-choice group.",
    diagram: `
+---------------------------------------+
|  HTML Input Type Renderings           |
|                                       |
|  type="text"     -> [ John Doe     ]  |
|  type="password" -> [ *******      ]  |
|  type="checkbox" -> [x] Checkbox      |
|  type="radio"    -> (o) Choice 1      |
|  type="color"    -> [ Color Box ]     |
+---------------------------------------+
`,
    practice: "Create a registration form featuring email, password, and age (number) inputs.",
    challenge: "Create a group of three radio buttons for choosing subscription tiers (Free, Pro, Premium) ensuring only one can be checked.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Input Types Example</title>
  </head>
  <body>
    <form>
      <p>Age: <input type="number" min="1"></p>
      <p>Plan: 
        <input type="radio" id="f" name="plan" value="free"> <label for="f">Free</label>
        <input type="radio" id="p" name="plan" value="pro"> <label for="p">Pro</label>
      </p>
    </form>
  </body>
</html>`,
    ext: "html"
  },
  "12-Audio": {
    title: "HTML Audio",
    line: "Audio (<audio>) is used to play sound files on a webpage.",
    think: "Audio is a cassette player mounted on a wall.\n\n- The <audio> tag is the player casing.\n- The 'controls' attribute adds the play/pause volume buttons.\n- The <source> is the cassette tape loaded inside.",
    example: '<audio src="sound.mp3" controls></audio>',
    result: "Renders a sound player bar with play, volume, and seek controls.",
    remember: "You must include the 'controls' attribute, or the player will be invisible!",
    summary: "* Embed sound using the `<audio>` tag.\n* `controls` shows play/pause buttons.\n* Use `<source>` tags to support MP3 and OGG fallback types.",
    diagram: `
+------------------------------------------+
|  HTML Audio Player Layout                |
|                                          |
|  <audio controls>                        |
|   +------------------------------------+ |
|   | >  | =====o======== | 0:12 |  (q)  | | <-- Controls UI
|   +------------------------------------+ |
|  </audio>                                |
+------------------------------------------+
`,
    practice: "Embed a music player on your page using a public MP3 URL with controls enabled.",
    challenge: "Add attributes to make the audio loop infinitely and play in a muted state automatically.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Audio Example</title>
  </head>
  <body>
    <audio controls>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    </audio>
  </body>
</html>`,
    ext: "html"
  },
  "13-Video": {
    title: "HTML Video",
    line: "Video (<video>) embeds movies and visual media clips on a webpage.",
    think: "Video is a television set.\n\n- The <video> tag is the visual screen.\n- The 'controls' attribute represents the remote control buttons.",
    example: '<video src="movie.mp4" controls width="400"></video>',
    result: "Renders a video screen player box.",
    remember: "Modern browsers block video autoplay unless the video is marked 'muted' first.",
    summary: "* Embed videos using the `<video>` tag.\n* Sizing is handled using `width` and `height` attributes.\n* Use the `poster` attribute to show a thumbnail before playing.",
    diagram: `
+------------------------------------------+
|  HTML Video Layout                       |
|                                          |
|  <video controls>                        |
|   +------------------------------------+ |
|   |                                    | |
|   |            [ VIDEO SCREEN ]        | |
|   |                                    | |
|   +------------------------------------+ |
|   | >  | =====o======== | 0:12 |  [ ]  | | <-- Controls Toolbar
|   +------------------------------------+ |
|  </video>                                |
+------------------------------------------+
`,
    practice: "Embed a video player on your page configured to be 300px wide with controls enabled.",
    challenge: "Configure your video player to start playing automatically in a muted state when the page loads, showing a preview placeholder image first.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Video Example</title>
  </head>
  <body>
    <video width="320" height="240" controls muted autoplay>
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
    </video>
  </body>
</html>`,
    ext: "html"
  },
  "14-Iframes": {
    title: "HTML Iframes",
    line: "Iframes (<iframe>) embed another webpage inside your current webpage.",
    think: "An iframe is a picture frame on your desk that is actually a portal window showing another entire room in another building.",
    example: '<iframe src="https://wikipedia.org" width="500" height="300"></iframe>',
    result: "Displays Wikipedia in a frame box inside your webpage.",
    remember: "Many large sites (like Google and Facebook) block iframes for security, rendering connection errors.",
    summary: "* Inline frames are created with the `<iframe>` tag.\n* `src` defines the embedded website link.\n* Width and height adjust the iframe dimension size.",
    diagram: `
+------------------------------------------+
|  Parent Webpage Layout                   |
|                                          |
|  Header Title                            |
|  +------------------------------------+  |
|  |  Iframe (Child Webpage)            |  |
|  |  +------------------------------+  |  |
|  |  | Nested Webpage Content       |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
|  Footer Text                             |
+------------------------------------------+
`,
    practice: "Create a page and embed a Google Map pin using an iframe.",
    challenge: "Embed Wikipedia inside your page with a border styling rule that removes its outline border.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Iframes Example</title>
  </head>
  <body>
    <iframe src="https://maps.google.com/maps?q=paris&output=embed" width="400" height="300" style="border:0;"></iframe>
  </body>
</html>`,
    ext: "html"
  },
  "15-Semantic-Tags": {
    title: "HTML Semantic Tags",
    line: "Semantic tags describe their structural meaning (<header>, <nav>, <main>, <footer>).",
    think: "Semantic tags are labeled folders in a filing cabinet.\n\nInstead of stuffing all papers into generic white envelopes (<div>), you use folders clearly marked 'Recipes' (<article>) or 'Finances' (<aside>).",
    example: "<header>\n  <nav>Links</nav>\n</header>\n<main>\n  <article>Content</article>\n</main>",
    result: "Organizes the code visually and structurally for browsers and screen readers.",
    remember: "Semantic layout helps search engine indexers (SEO) and screen readers (Accessibility) read your page.",
    summary: "* Semantic tags describe their contents.\n* Replaces generic `<div>` tag containers.\n* Key elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`.",
    diagram: `
+------------------------------------------+
|  Semantic HTML Page Layout               |
|                                          |
|  +------------------------------------+  |
|  |             <header>               |  |
|  |  +------------------------------+  |  |
|  |  |            <nav>             |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
|  |              <main>                |  |
|  |  +------------------+ +----------+ |  |
|  |  |    <article>     | | <aside>  | |  |
|  |  +------------------+ +----------+ |  |
|  +------------------------------------+  |
|  |             <footer>               |  |
|  +------------------------------------+  |
+------------------------------------------+
`,
    practice: "Build a blog homepage structure using `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>` tags.",
    challenge: "Explain inside a code comment the structural difference between `<article>` (independent item) and `<section>` (thematic grouping).",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>Semantic Page Layout</title>
  </head>
  <body>
    <header>
      <h1>Tech News</h1>
      <nav><a href="/">Home</a></nav>
    </header>
    <main>
      <article>
        <h2>HTML5</h2>
        <p>Semantic tags represent structured content.</p>
      </article>
    </main>
  </body>
</html>`,
    ext: "html"
  },
  "16-SEO-Basics": {
    title: "HTML SEO Basics",
    line: "SEO tags inside <head> help search engines index and rank your webpage.",
    think: "SEO is the sign, menu, and address registration you post on a city street to invite customers to your restaurant.",
    example: '<title>Learn HTML | MeetTutorials</title>\n<meta name="description" content="Simple tutorials.">',
    result: "Google displays your title and description in search results.",
    remember: "Keep title length under 60 characters so Google doesn't cut it off.",
    summary: "* SEO tags must be placed in the `<head>` section.\n* The `<title>` is the most critical text element for search bots.\n* The meta description provides search result summaries.",
    diagram: `
+------------------------------------------+
|  Google Search Result Card Layout        |
|                                          |
|  https://meettutorials.com               |
|  Learn MERN Stack from Scratch <-- <title>|
|  Master HTML, CSS, React...     <-- <meta|
|                                 name="   |
|                                 desc">   |
+------------------------------------------+
`,
    practice: "Create a template including viewport details, a title, and description tags for a mock bookstore.",
    challenge: "Add Open Graph tags (`og:title`, `og:image`) which control how your link displays when shared on social media.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buy Books Online | Local Bookstore</title>
    <meta name="description" content="Browse our collection of books and buy online today.">
  </head>
  <body>
    <h1>Bookstore</h1>
  </body>
</html>`,
    ext: "html"
  },
  "17-Accessibility": {
    title: "HTML Accessibility",
    line: "Accessibility (a11y) ensures your website is usable by everyone, including disabled users.",
    think: "a11y is adding a smooth ramp next to the library stairs so visitors using wheelchairs can enter easily.",
    example: '<label for="name">Name:</label>\n<input type="text" id="name">',
    result: "Screen readers read the input description out loud to visually impaired users.",
    remember: "Always define `<html lang=\"en\">` and write alt descriptions on images.",
    summary: "* Accessibility ensures usability for disabled visitors.\n* Connect form inputs to descriptive `<label>` targets.\n* Use `aria-label` to label icon buttons.",
    diagram: `
+------------------------------------------+
|  Accessibility Flow                      |
|                                          |
|  [Screen Reader Software]                |
|         ^                                |
|         | Reads                          |
|  <label for="name">Name</label>          |
|  <input id="name">                       |
|         |                                |
|         v                                |
|  [Visually Impaired User hears: "Name"]  |
+------------------------------------------+
`,
    practice: "Create a login form with Username and Email input fields properly bound to label tags for screen readers.",
    challenge: "Add an icon-only button (like 'X' for close) and configure it with an `aria-label` attribute describing its function.",
    example_code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Accessibility Example</title>
  </head>
  <body>
    <h1>Signup Form</h1>
    <form>
      <label for="usr">Username:</label>
      <input type="text" id="usr" required>
      <button aria-label="Submit registration form" type="submit">Sign Up</button>
    </form>
  </body>
</html>`,
    ext: "html"
  }
};

// Content Database for CSS
const CSS_DATA = {
  "01-Introduction": {
    title: "CSS Introduction",
    line: "CSS (Cascading Style Sheets) is the language used to design the look and layout of a webpage.",
    think: "If HTML is the wooden skeleton/bricks of a house, CSS is the wall paint, floor tiles, and wallpaper decor.",
    example: "h1 {\n  color: blue;\n  font-size: 24px;\n}",
    result: "Turns all `<h1>` headings blue and increases their text font size.",
    remember: "HTML structures content. CSS designs look. Always separate your styles from your HTML structure!",
    summary: "* CSS stands for Cascading Style Sheets.\n* Styles can be internal (in `<style>` tags) or external (in a separate `.css` file).\n* Selectors point to elements, and declarations define style properties.",
    diagram: `
  HTML (Skeleton)  +  CSS (Paint/Decor)  =  Visual Page
  <h1>Text</h1>       h1 { color: blue; }    [ Blue Header Text ]
`,
    practice: "Create an HTML file, add an `<h1>` tag, and add an internal `<style>` block in the `<head>` to color the heading darkgreen.",
    challenge: "Add a paragraph tag `<p>` and use styles inside your block to center the text alignment.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <title>CSS Intro</title>
    <style>
      h1 { color: darkgreen; }
      p { text-align: center; }
    </style>
  </head>
  <body>
    <h1>Welcome to CSS</h1>
    <p>This paragraph is styled and centered!</p>
  </body>
</html>`,
    ext: "html"
  },
  "02-Selectors": {
    title: "CSS Selectors",
    line: "Selectors point to specific HTML tags so CSS can style them.",
    think: "Selectors are like addressing labels on letters.\n\n- Element selector targets *all* buttons (e.g. `button`).\n- Class selector targets a *group* (e.g. `.btn` targets `class=\"btn\"`).\n- ID selector targets a *single unique item* (e.g. `#main` targets `id=\"main\"`).",
    example: ".blue-text {\n  color: blue;\n}",
    result: "Applies blue color to any element containing `class=\"blue-text\"`.",
    remember: "Classes (.) can be used on multiple elements. IDs (#) must be unique and used only once per page.",
    summary: "* Element selector: tag name (e.g. `p`).\n* Class selector: prefix with a dot (e.g. `.class`).\n* ID selector: prefix with a hash (e.g. `#id`).\n* Classes are reusable; IDs are unique.",
    diagram: `
  Element:  h1 { ... }     --> Targets all <h1> tags
  Class:    .btn { ... }   --> Targets class="btn" elements
  ID:       #title { ... }  --> Targets unique id="title" element
`,
    practice: "Create a page with three paragraph tags. Give two of them `class=\"highlight\"` and style that class with a yellow text color.",
    challenge: "Give one unique paragraph an `id=\"special\"` and make its text font-weight bold using an ID selector in your stylesheet.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .highlight { color: orange; }
      #special { font-weight: bold; }
    </style>
  </head>
  <body>
    <p class="highlight">Paragraph 1</p>
    <p>Paragraph 2</p>
    <p id="special" class="highlight">Paragraph 3</p>
  </body>
</html>`,
    ext: "html"
  },
  "03-Colors": {
    title: "CSS Colors",
    line: "CSS styles text and backgrounds using color names, Hex codes, RGB, or HSL values.",
    think: "Colors are paints on a palette.\n\n- Name color: simple color names like 'red' or 'blue'.\n- RGB mixer: values from 0-255 representing red, green, and blue light.\n- Hex code: code shortcut representing RGB values.",
    example: "h1 {\n  color: #ff5733;\n}",
    result: "Turns the heading text into a vibrant coral/orange shade.",
    remember: "Color handles text colors, while background-color handles behind-text background fills.",
    summary: "* Named colors: `red`, `blue`, `tomato`, etc.\n* Hex codes: `#RRGGBB` (e.g. `#ffffff` is white).\n* RGB format: `rgb(R, G, B)`.\n* Ensure color contrast ratio meets accessibility guidelines.",
    diagram: `
  HEX Code: #FF5733  --> Red, Green, Blue in Hex digits
  RGB Code: rgb(255, 87, 51) --> decimal color mixes
  HSL Code: hsl(11, 100%, 60%) --> Hue, Saturation, Lightness
`,
    practice: "Create a file and color a heading text using a Hex color code, and a paragraph using RGB code.",
    challenge: "Style a button element to have dark text color (#333) and a light grey background-color (#eee).",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: #ff5733; }
      p { color: rgb(0, 128, 128); }
    </style>
  </head>
  <body>
    <h1>Hex Color</h1>
    <p>Teal RGB Color text</p>
  </body>
</html>`,
    ext: "html"
  },
  "04-Backgrounds": {
    title: "CSS Backgrounds",
    line: "Background properties add colors, image patterns, or gradients behind elements.",
    think: "Backgrounds are like painting a room's wall a solid color, or hanging a patterned wallpaper.",
    example: "div {\n  background-color: lightblue;\n}",
    result: "Turns the background of the div block solid light blue.",
    remember: "Use background-size: cover; to make background images stretch to fit containers without distortion.",
    summary: "* `background-color` fills elements with solid color.\n* `background-image` embeds image files.\n* `background-repeat: no-repeat` stops tile repeating.\n* `background-size: cover` resizes image to fill container.",
    diagram: `
  +------------------------------------+
  | Foreground (Text, Buttons)         |
  |  --------------------------------  |
  | Background (Color, Image, Grads)   |
  +------------------------------------+
`,
    practice: "Style your body background to be lightgrey.",
    challenge: "Use a public image URL to set a background image on a div container, and set it to cover the container area.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body { background-color: #f0f0f0; }
      .box {
        width: 300px;
        height: 200px;
        background-image: url('https://picsum.photos/300/200');
        background-size: cover;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>`,
    ext: "html"
  },
  "05-Borders": {
    title: "CSS Borders",
    line: "Borders draw boundary frames around HTML elements.",
    think: "Borders are picture frames.\n\nYou can set a solid black frame, a dotted red frame, and round the frame corners using border-radius.",
    example: "div {\n  border: 2px solid black;\n  border-radius: 8px;\n}",
    result: "Renders a black boundary line with smooth rounded corners.",
    remember: "Use border-radius: 50% on a square element to make it a perfect circle!",
    summary: "* Border shorthand syntax: `width style color` (e.g. `2px solid red`).\n* Styles: `solid`, `dashed`, `dotted`.\n* `border-radius` rounds element corners.",
    diagram: `
  Square Border:      +-------------+
                      | content     |
                      +-------------+
  Rounded Border:     .-------------.
  (border-radius)    (  content     )
                      '-------------'
`,
    practice: "Create a box container with a 4px dashed blue border.",
    challenge: "Create a square image profile avatar container (100px by 100px) and use border-radius to turn it into a circle.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .circle-avatar {
        width: 100px;
        height: 100px;
        border: 3px solid darkgreen;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <img class="circle-avatar" src="https://picsum.photos/100" alt="avatar">
  </body>
</html>`,
    ext: "html"
  },
  "06-Margins": {
    title: "CSS Margins",
    line: "Margins create spacing OUTSIDE of an element's border, pushing neighbor items away.",
    think: "Margins are your personal bubble.\n\nYou push adjacent objects away to create clear empty spacing around your outside edges.",
    example: "div {\n  margin: 20px;\n}",
    result: "Pushes all surrounding boxes 20 pixels away on all sides.",
    remember: "margin: 0 auto; is a trick used to center block elements horizontally inside their parent.",
    summary: "* Margins represent external buffer space.\n* Can set individual sides: `margin-top`, `margin-right`, etc.\n* `margin: 0 auto` centers block elements with set widths.",
    diagram: `
  +-------------------------------+
  | Neighbor Element              |
  |             ^                 |
  |             | margin-top      |
  |      +--------------+         |
  |      |   Element    |         |
  |      +--------------+         |
  +-------------------------------+
`,
    practice: "Create two boxes and add a bottom margin of 30px to the first box to push the second one down.",
    challenge: "Center a box (width: 200px) in the middle of the screen using margins.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        width: 200px;
        height: 100px;
        background: tomato;
        margin: 20px auto;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>`,
    ext: "html"
  },
  "07-Padding": {
    title: "CSS Padding",
    line: "Padding creates empty spacing INSIDE an element's border, pushing content from the edge.",
    think: "Padding is bubble wrap cushioning inside a box.\n\nIt protects the items inside from scraping directly against the hard box borders.",
    example: "button {\n  padding: 10px 20px;\n}",
    result: "Adds 10px spacing top/bottom and 20px left/right inside the button's border.",
    remember: "Padding increases the clickable size of buttons and link tags, improving usability on mobile screens.",
    summary: "* Padding adds inner spacing.\n* Padding does not push neighboring elements directly; it inflates the element box itself.\n* Syntax follows top, right, bottom, left order.",
    diagram: `
  +-------------------------------+
  | Border                        |
  |    +---------------------+    |
  |    | Padding  ^          |    |
  |    |          v          |    |
  |    |       Content       |    |
  |    +---------------------+    |
  +-------------------------------+
`,
    practice: "Create a container with a background color and add 20px padding to space the text away from the colored border edges.",
    challenge: "Style a link tag to look like a button by adding padding, a background-color, and removing underline text-decoration.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .btn {
        background-color: blue;
        color: white;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <a class="btn" href="#">Click Button</a>
  </body>
</html>`,
    ext: "html"
  },
  "08-Width-And-Height": {
    title: "CSS Width and Height",
    line: "Width and height define the sizing dimensions of block elements.",
    think: "Sizing a poster frame to hang on a wall.\n\nYou can size it in exact pixels (px) or make it a percentage width of the parent wall (%).",
    example: "div {\n  width: 50%;\n  height: 200px;\n}",
    result: "Makes the container half as wide as the screen, and 200 pixels tall.",
    remember: "Always use max-width: 100% on images so they resize cleanly instead of overflowing phone screens.",
    summary: "* Width and height specify element dimensions.\n* Unit px is absolute; unit % is relative to parent container size.\n* Use `max-width` to guarantee responsive scaling.",
    diagram: `
  |<---------- width: 300px ---------->|
  +------------------------------------+ ^
  |                                    | | height:
  |            BOX CONTENT             | | 150px
  |                                    | v
  +------------------------------------+
`,
    practice: "Create a box container with a width of 300px and height of 150px with a background color.",
    challenge: "Create a responsive box with a max-width of 500px and width of 90% and observe how it shrinks on mobile screen resizes.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        width: 90%;
        max-width: 400px;
        height: 150px;
        background-color: purple;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>`,
    ext: "html"
  },
  "09-Display": {
    title: "CSS Display",
    line: "Display controls how an element behaves in the document layout flow.",
    think: "Block elements are bricks: they stack vertically. Inline elements are words in a text line: they sit side-by-side.",
    example: "span {\n  display: block;\n}",
    result: "Makes a span behave like a div, taking up the full width and breaking to a new line.",
    remember: "display: none hides an element completely. Unlike visibility: hidden, it releases its space in the layout layout.",
    summary: "* `block` takes full width and starts a new line.\n* `inline` takes only text width and stays inline.\n* `inline-block` sits inline but allows custom width/height adjustments.\n* `none` hides the element completely.",
    diagram: `
  Block (Vertical Stack):
  +---------+
  | Div 1   |
  +---------+
  | Div 2   |
  +---------+
  
  Inline (Side-by-Side):
  [Span 1] [Span 2] [Span 3]
`,
    practice: "Convert two span tags into block elements so they stack vertically.",
    challenge: "Style list items `<li>` to display inline-block so they sit side-by-side to make a horizontal menu.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      li { display: inline-block; margin-right: 15px; }
    </style>
  </head>
  <body>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </body>
</html>`,
    ext: "html"
  },
  "10-Position": {
    title: "CSS Position",
    line: "Position determines where an element sits on the webpage coordinate grid.",
    think: "Positioning is choosing coordinates.\n\n- Static: default normal flow.\n- Fixed: pins an item directly to the viewer's goggles (stays on screen during scrolling).",
    example: ".sticky-bar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}",
    result: "Pins a navbar header to the absolute top of the page screen.",
    remember: "Absolute items float relative to the nearest parent container marked position: relative.",
    summary: "* `static`: default flow.\n* `relative`: shifts from normal flow spot.\n* `absolute`: floats relative to nearest positioned parent.\n* `fixed`: pinned relative to the screen viewport window.",
    diagram: `
  Static:   Normal line flow
  Relative: Shifted slightly
  Absolute: Floating inside relative parent container
  Fixed:    Screen-pinned header bar (does not scroll)
`,
    practice: "Create a container box and absolute-position a close button in its top-right corner.",
    challenge: "Create a navigation bar header that stays fixed at the top of the screen when you scroll down a long text page.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .header {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 50px;
        background: black; color: white;
      }
      body { padding-top: 60px; height: 1000px; }
    </style>
  </head>
  <body>
    <div class="header">Navigation Bar</div>
    <p>Scroll down to see the bar stay fixed!</p>
  </body>
</html>`,
    ext: "html"
  },
  "11-Flexbox": {
    title: "CSS Flexbox",
    line: "Flexbox aligns and spaces items inside flexible rows or column structures.",
    think: "Aligning passengers sitting in a bus row.\n\nYou can tell them to sit clustered in the center, gather at the front, or spread out evenly.",
    example: ".flex-container {\n  display: flex;\n  justify-content: space-between;\n}",
    result: "Arranges all child boxes side-by-side, spacing them out evenly across the row.",
    remember: "Flexbox is designed for one-dimensional layouts (a single row OR a single column).",
    summary: "* Enable with `display: flex` on parent.\n* `flex-direction` switches between row and column.\n* `justify-content` aligns items horizontally (along main axis).\n* `align-items` aligns items vertically (along cross axis).",
    diagram: `
  display: flex (row direction)
  +---------------------------------------+
  | [ Child 1 ]  [ Child 2 ]  [ Child 3 ] |
  +---------------------------------------+
`,
    practice: "Create a flex container box with three child boxes and align them in the center horizontally.",
    challenge: "Use `justify-content: space-around` to space out three profile cards side-by-side inside a parent container.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .row {
        display: flex;
        justify-content: space-around;
        background-color: #eee;
        padding: 10px;
      }
      .item { width: 80px; height: 80px; background: orange; }
    </style>
  </head>
  <body>
    <div class="row">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>`,
    ext: "html"
  },
  "12-Grid": {
    title: "CSS Grid",
    line: "CSS Grid is a powerful two-dimensional grid layout system of columns and rows.",
    think: "Slicing a checkerboard sheet.\n\nYou cut columns and rows, and place game pieces into specific grid coordinate boxes.",
    example: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}",
    result: "Splits a container into 3 equal columns separated by 10px gap margins.",
    remember: "Grid is best for complex two-dimensional layouts (rows AND columns simultaneously).",
    summary: "* Enable with `display: grid` on parent.\n* `grid-template-columns` defines column sizes.\n* `gap` defines spacing between grid cells.\n* Items can span columns using `grid-column: span X`.",
    diagram: `
  display: grid (columns and rows)
  +------------+------------+------------+
  | Cell (0,0) | Cell (0,1) | Cell (0,2) |
  +------------+------------+------------+
  | Cell (1,0) | Cell (1,1) | Cell (1,2) |
  +------------+------------+------------+
`,
    practice: "Create a grid layout with two equal columns and a gap of 15px.",
    challenge: "Create a grid layout of four items, where the header item spans across both columns.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .header { grid-column: span 2; background: lightblue; }
      .box { background: lightgreen; height: 100px; }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="box header">Header</div>
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
    </div>
  </body>
</html>`,
    ext: "html"
  },
  "13-Responsive-Design": {
    title: "Responsive Design",
    line: "Responsive design ensures websites adapt and render beautifully across phones, tablets, and computers.",
    think: "Water flowing into containers.\n\nA responsive page flows smoothly to fit a narrow glass cylinder (mobile screen) or a wide shallow bowl (desktop monitor).",
    example: ".page {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}",
    result: "Stretches container to fit narrow screens but limits growth to 1200px on wider displays.",
    remember: "Always build mobile-first: design layouts for small screens first, then expand for desktop screens.",
    summary: "* Avoid fixed-width coordinates (like `width: 900px`).\n* Use percentages (`%`) and viewport units (`vw`, `vh`).\n* Use flexbox and grid to create flexible layout designs.",
    diagram: `
  Desktop Layout (Wide)      Mobile Layout (Narrow)
  +--------------------+     +---+
  | col 1 | col 2 |col3| =>  |c1 |
  +--------------------+     |c2 |
                             |c3 |
                             +---+
`,
    practice: "Create a page layout box that is 90% wide and has a max-width limit of 800px.",
    challenge: "Write CSS rules to ensure images inside your boxes scale dynamically and never overflow container limits.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .img-container { width: 50%; border: 2px solid black; }
      img { width: 100%; height: auto; display: block; }
    </style>
  </head>
  <body>
    <div class="img-container">
      <img src="https://picsum.photos/400" alt="responsive">
    </div>
  </body>
</html>`,
    ext: "html"
  },
  "14-Media-Queries": {
    title: "CSS Media Queries",
    line: "Media Queries apply different CSS styles depending on the screen size width.",
    think: "A smart closet system.\n\n- If screen is narrow (cold weather), dress in layers: stack columns vertically.\n- If screen is wide (hot weather), dress light: align columns side-by-side.",
    example: "@media (max-width: 600px) {\n  .menu {\n    display: none;\n  }\n}",
    result: "Hides website navigation menus on screens under 600px wide (e.g. mobile phones).",
    remember: "Media queries are the absolute foundation of modern responsive web structures.",
    summary: "* Media queries check for screen width breakpoints.\n* Syntax: `@media (max-width: Xpx) { ... }`.\n* Overrides standard CSS styles when condition criteria matches.",
    diagram: `
  Screen Width Scale
  0px -------- 600px ------------------ 1200px
     Mobile CSS   |    Desktop CSS     |
                  |                    |
            Breakpoint max-width: 600px
`,
    practice: "Write standard styles to color page backgrounds blue, and a media query to turn backgrounds green on screens under 500px wide.",
    challenge: "Create a layout row that displays side-by-side on desktop, but stacks vertically on screens under 768px.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .container { display: flex; flex-direction: row; }
      .box { flex: 1; height: 100px; background: coral; margin: 5px; }
      @media (max-width: 768px) {
        .container { flex-direction: column; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
    </div>
  </body>
</html>`,
    ext: "html"
  },
  "15-Transitions": {
    title: "CSS Transitions",
    line: "Transitions animate CSS property changes smoothly over time.",
    think: "Fading room lights using a dimmer knob slowly instead of clicking hard switches instantly on or off.",
    example: "button {\n  transition: background 0.3s ease;\n}",
    result: "Fades button color changes smoothly over 0.3 seconds when the mouse hovers over.",
    remember: "Transitions require a starting style state and a trigger selector state (like :hover).",
    summary: "* Smooths CSS changes.\n* Requires property, duration, and easing function (e.g. `transition: color 0.3s ease`).\n* Triggered by class changes or pointer actions.",
    diagram: `
  Hover Trigger:
  Normal Button === Smooth Transition (0.3s) ===> Highlight Color Button
`,
    practice: "Create a button and add a transition so that its background color fades slowly to darkred on hover.",
    challenge: "Animate a box to grow wider smoothly over 0.5s when hovered.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .btn {
        background-color: teal;
        color: white;
        padding: 10px;
        border: none;
        transition: background-color 0.4s ease;
        cursor: pointer;
      }
      .btn:hover { background-color: darkblue; }
    </style>
  </head>
  <body>
    <button class="btn">Hover Me</button>
  </body>
</html>`,
    ext: "html"
  },
  "16-Transforms": {
    title: "CSS Transforms",
    line: "Transforms modify element shape, scale dimensions, and positioning (rotate, scale, translate).",
    think: "Stretching, rotating, or sliding a cardboard box across a table without changing what is inside.",
    example: "img:hover {\n  transform: rotate(5deg) scale(1.1);\n}",
    result: "Slightly rotates and enlarges the image when hovered.",
    remember: "Transforms do not affect the layout position flow of adjacent surrounding page elements.",
    summary: "* `rotate(deg)` spins elements.\n* `scale(factor)` resizes elements.\n* `translate(x, y)` moves elements.\n* Combines multiple transforms inside one line.",
    diagram: `
  Normal Box:     +---+
                  |   |
                  +---+
  Rotated 45deg:    /\\
                  /    \\
                  \\    /
                    \\/
`,
    practice: "Create a box and write styles to rotate it by 10 degrees on hover.",
    challenge: "Create a card box that shifts upward smoothly (`translateY(-10px)`) and gains a shadow effect when hovered.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .card {
        width: 150px; height: 100px;
        background: gold;
        transition: transform 0.3s ease;
      }
      .card:hover { transform: translateY(-10px); }
    </style>
  </head>
  <body>
    <div class="card"></div>
  </body>
</html>`,
    ext: "html"
  },
  "17-Animations": {
    title: "CSS Animations",
    line: "CSS Animations run custom movements using repeating timeline rules called keyframes.",
    think: "A flipbook notebook animation.\n\nYou draw a shape at point A, point B, and point C. The browser flips pages to play continuous motion loops.",
    example: "@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}\n.heart {\n  animation: pulse 1s infinite;\n}",
    result: "Causes the element to scale larger and smaller continuously like a heartbeat.",
    remember: "Animations play automatically and loop infinitely without needing user mouse hovers.",
    summary: "* Define timelines using `@keyframes name { ... }`.\n* Map progress percentages (`0%` to `100%`) or `from` / `to` keyword targets.\n* Bind to elements using the `animation` property shorthand.",
    diagram: `
  @keyframes Timeline Loop
  0% [Left: 0px] === 50% [Left: 100px] === 100% [Left: 0px]
`,
    practice: "Write an animation that continuously shifts a box left and right.",
    challenge: "Create a loading spinner: a small circular border animation that spins infinitely 360 degrees.",
    example_code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .spinner {
        width: 50px; height: 50px;
        border: 5px solid #ccc;
        border-top: 5px solid blue;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div class="spinner"></div>
  </body>
</html>`,
    ext: "html"
  }
};

// Content Database for JAVASCRIPT
const JS_DATA = {
  "01-Variables": {
    title: "JavaScript Variables",
    line: "Variables are named containers used to store data values in memory.",
    think: "Cardboard boxes in a storage room with sticky labels on them.",
    example: "let price = 19.99;\nconst tax = 0.05;\nvar name = 'John';",
    result: "Creates a changeable price variable, a read-only tax constant, and a legacy function-scoped name variable.",
    remember: "Prefer const for all values that shouldn't change. Use let only when values must be reassigned. Avoid var!",
    summary: "* Variables are defined using const, let, or var.\n* const: block-scoped, cannot be reassigned or redeclared.\n* let: block-scoped, can be reassigned but not redeclared.\n* var: legacy, function-scoped, hoisted, can be reassigned and redeclared.\n* Hoisting: JavaScript moves declarations to the top of their scope before execution.",
    diagram: `
+-------------------------------------------------------------+
| VARIABLES SCOPE & MUTABILITY COMPARISON                     |
|                                                             |
|   const: [ Block Scope ] (Cannot Reassign, Cannot Redeclare)|
|   let:   [ Block Scope ] (Can Reassign,    Cannot Redeclare)|
|   var:   [ Func Scope ]  (Can Reassign,    Can Redeclare)   |
|                                                             |
|   Block Scope: Variable only exists inside { curly braces } |
+-------------------------------------------------------------+
`,
    practice: "1. Create a variable for your age using let.\n2. Create a constant for your birth country.\n3. Try reassigning both and print the results using console.log.",
    challenge: "Demonstrate block scope: Create a block using curly braces {}. Inside it, declare a let and a const variable. Try logging them outside the curly braces and observe the error.",
    example_code: `// 1. const - Read-only block-scoped variable
const secondsInMinute = 60;
// secondsInMinute = 70; // ERROR! Cannot reassign a constant.

// 2. let - Changeable block-scoped variable
let score = 10;
score = 20; // Reassignment is perfectly fine!
// let score = 30; // ERROR! Cannot redeclare in same scope.

// 3. var - Legacy function-scoped variable (AVOID THIS!)
var user = "Alice";
var user = "Bob"; // Redeclaring var is allowed (causes bugs!).

// 4. Block Scope Demo
{
  let blockVariable = "Invisible outside";
  var functionVariable = "Visible outside";
}
// console.log(blockVariable); // ReferenceError: blockVariable is not defined
console.log(functionVariable); // "Visible outside" (var leaks out of blocks!)

// 5. Hoisting (Declarations are processed first)
console.log(hoistedVar); // undefined (declaration hoisted, not value)
var hoistedVar = "Hello Hoisting";
`,
    ext: "js"
  },
  "02-Data-Types": {
    title: "JavaScript Data Types",
    line: "Data types define the kind of value stored in a variable (e.g. text, numbers, lists).",
    think: "Sorting recycling materials: plastic containers (strings) vs metal cans (numbers) vs switches (booleans).",
    example: "let username = 'Meet';\nlet age = 21;\nlet isInstructor = true;\nlet details = null;\nlet status = undefined;",
    result: "Defines variables of types String, Number, Boolean, Null, and Undefined.",
    remember: "Primitives are stored directly by value (immutable). Objects/Arrays are stored by reference (mutable).",
    summary: "* Primitives: String, Number, Boolean, Null, Undefined, Symbol, BigInt.\n* Reference Types: Object, Array, Function.\n* typeof: operator used to inspect the variable's type.\n* Type Conversion: can be explicit (using String(), Number()) or implicit (coercion).",
    diagram: `
+---------------------------------------------------------+
| JAVASCRIPT DATA TYPES HIERARCHY                         |
|                                                         |
|   1. PRIMITIVES (by value)    2. OBJECTS (by reference) |
|      - String ("Hello")          - Objects ({key: val}) |
|      - Number (42, 3.14)         - Arrays ([1, 2, 3])   |
|      - Boolean (true/false)      - Functions (block)    |
|      - Null (intentional empty)                         |
|      - Undefined (uninitialized)                        |
+---------------------------------------------------------+
`,
    practice: "1. Declare variables representing your favorite movie (String), rating (Number), and watched status (Boolean).\n2. Print the type of each using the `typeof` operator.",
    challenge: "Demonstrate pass-by-value vs pass-by-reference. Create a number variable and pass it to another variable, then change the second one. Next, create an array and copy its reference to another array. Modify the copy, and explain why the original array also changed.",
    example_code: `// 1. Primitive Types
let name = "Meet";       // String
let rating = 4.8;        // Number (handles integers and decimals)
let isAwesome = true;    // Boolean
let emptyValue = null;   // Null (intentional absence of value)
let notDefined;          // Undefined (declared but not assigned value)

console.log("Types:", typeof name, typeof rating, typeof isAwesome, typeof emptyValue, typeof notDefined);
// Note: typeof null returns "object" due to a historic bug in JS!

// 2. Reference Types (Objects & Arrays)
let grades = [90, 85, 95]; // Array
let student = { name: "John", age: 18 }; // Object

// Pass by Value (Primitives)
let a = 10;
let b = a; // Copy of value is made
b = 20;
console.log("a is still:", a); // 10

// Pass by Reference (Objects/Arrays)
let listA = [1, 2, 3];
let listB = listA; // Reference is shared
listB.push(4);
console.log("listA is now:", listA); // [1, 2, 3, 4] (Both changed!)
`,
    ext: "js"
  },
  "03-Operators": {
    title: "JavaScript Operators",
    line: "Operators are symbols used to perform calculations, combine variables, and compare values.",
    think: "Math calculator buttons (+, -, *, /) and balance scales that weigh options (==, ===, &&, ||).",
    example: "let sum = 10 + 5;\nlet isEqual = (10 === '10');\nlet logic = (true && false);",
    result: "Calculates sum as 15, isEqual as false, and logic as false.",
    remember: "Always use strict equality (===) instead of loose equality (==) to avoid hidden type-coercion bugs.",
    summary: "* Arithmetic: +, -, *, /, % (remainder), ** (exponent).\n* Assignment: =, +=, -=, *=, /=.\n* Comparison: === (strict equals), !== (strict not equals), >, <, >=, <=.\n* Logical: && (AND), || (OR), ! (NOT).\n* Ternary: condition ? valueIfTrue : valueIfFalse.",
    diagram: `
+---------------------------------------------------------+
| OPERATORS AT A GLANCE                                   |
|                                                         |
|   Strict Comparison: 5 === "5" -> false (checks types)  |
|   Loose Comparison:  5 == "5"  -> true  (converts type) |
|   Logical AND (&&):  Both tests must be true            |
|   Logical OR (||):   At least one test must be true     |
+---------------------------------------------------------+
`,
    practice: "1. Store the width (100) and height (50) of a box.\n2. Calculate the perimeter (2 * (width + height)) and print it.\n3. Write a comparison checking if width is strictly greater than 80.",
    challenge: "Use a ternary operator to print 'Access Granted' if an age variable is greater than or equal to 18, and 'Access Denied' otherwise.",
    example_code: `// 1. Arithmetic & Remainder (Modulo)
let price1 = 15;
let price2 = 4;
console.log("Exponent (15^4):", price1 ** price2);
console.log("Remainder of 15 / 4:", price1 % price2); // 3 (15 = 4*3 + 3)

// 2. Comparison: Double vs Triple Equals
let num = 5;
let strNum = "5";
console.log("Loose equals (==):", num == strNum);   // true (coerced types)
console.log("Strict equals (===):", num === strNum); // false (different types)

// 3. Logical Operators
let hasDriverLicense = true;
let isSober = false;
let canDrive = hasDriverLicense && isSober;
console.log("Can drive legally?", canDrive); // false
console.log("Need designated driver?", !isSober); // true

// 4. Ternary Operator (Shorthand if/else)
let score = 85;
let grade = score >= 50 ? "Pass" : "Fail";
console.log("Grade result:", grade); // "Pass"
`,
    ext: "js"
  },
  "04-Conditions": {
    title: "JavaScript Conditions",
    line: "Conditions control execution flow by running different code blocks based on truth tests.",
    think: "A railway switch board that routes a train down different tracks depending on a lever position.",
    example: "if (score >= 90) {\n  console.log('A');\n} else {\n  console.log('B');\n}",
    result: "Prints 'A' if score is 90 or more, otherwise prints 'B'.",
    remember: "Truthy values are evaluated as true. Falsy values (false, 0, '', null, undefined, NaN) evaluate to false.",
    summary: "* if statement: checks a condition and runs a block if true.\n* else if: checks alternative conditions sequentially.\n* else: fallback block if all preceding conditions are false.\n* switch: clean alternative for matching a single variable against multiple exact values.\n* Falsy values: false, 0, '' (empty string), null, undefined, NaN.",
    diagram: `
+---------------------------------------------------------+
| CONDITIONAL FLOW CHART                                  |
|                                                         |
|   [ Test condition ] --True--> [ Run IF block code ]    |
|          |                                              |
|        False                                            |
|          v                                              |
|   [ Test Else If ] --True----> [ Run ELSE IF block ]     |
|          |                                              |
|        False                                            |
|          v                                              |
|   [ Run ELSE fallback block ]                           |
+---------------------------------------------------------+
`,
    practice: "1. Create a variable for a traffic light color ('green', 'yellow', or 'red').\n2. Write an if/else if/else statement to log appropriate actions ('Go', 'Slow Down', 'Stop').",
    challenge: "Write a switch-case statement that takes a day number (1 to 7) and prints the corresponding day name (1 for Monday, etc.), with a default case for invalid day numbers.",
    example_code: `// 1. If / Else If / Else Structure
let balance = 15;
let itemCost = 20;

if (balance >= itemCost) {
  console.log("Purchase approved!");
} else if (balance > 0) {
  console.log("Insufficient funds, but balance is positive.");
} else {
  console.log("Account is empty or overdrawn.");
}

// 2. Truthy & Falsy Demo
let username = ""; // Empty string is falsy!
if (username) {
  console.log("Welcome back,", username);
} else {
  console.log("Please log in."); // This block will run
}

// 3. Switch Statement (Perfect for exact matches)
let userRole = "admin";
switch (userRole) {
  case "admin":
    console.log("Full systems access granted.");
    break; // break stops execution from leaking into the next case!
  case "editor":
    console.log("Can modify articles.");
    break;
  case "guest":
    console.log("Read-only access.");
    break;
  default:
    console.log("Unknown role registry.");
}
`,
    ext: "js"
  },
  "05-Loops": {
    title: "JavaScript Loops",
    line: "Loops execute a block of code repeatedly while a specified condition is met.",
    think: "A music player set to 'repeat' mode, looping a playlist until you manually press stop.",
    example: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    result: "Prints 0, 1, and 2 in the console logs.",
    remember: "Always ensure your loop variable updates so the test condition eventually fails, avoiding infinite loops!",
    summary: "* for: best when you know the iteration count beforehand.\n* while: best when looping until an state changes, regardless of counts.\n* do...while: guarantees the block runs at least once before testing condition.\n* break: immediately exits the entire loop block.\n* continue: skips the remaining lines of the current iteration and jumps to the next loop step.",
    diagram: `
+-------------------------------------------------------------+
| LOOP FLOW CHART                                             |
|                                                             |
|   Start -> [ Test Condition ] --True--> [ Run Code Block ]  |
|                  ^                                |         |
|                  |---------[ Update/Increment ]<--+         |
|                  |                                          |
|                False                                        |
|                  v                                          |
|                Exit                                         |
+-------------------------------------------------------------+
`,
    practice: "1. Write a for-loop that prints the numbers 10 down to 1.\n2. Write a while loop that multiplies a number by 2 repeatedly until it is greater than 100.",
    challenge: "Write a for-loop from 1 to 10. Use a condition inside it to skip printing the number 5 using `continue`, and stop the entire loop when it hits 8 using `break`.",
    example_code: `// 1. For Loop: Count-controlled loop
console.log("--- For Loop ---");
for (let count = 1; count <= 3; count++) {
  console.log("Count is:", count);
}

// 2. While Loop: Condition-controlled loop
console.log("--- While Loop ---");
let batteryLevel = 30;
while (batteryLevel > 0) {
  console.log("Battery: " + batteryLevel + "%");
  batteryLevel -= 10; // Drain battery
}

// 3. Do...While Loop (Runs at least once)
console.log("--- Do...While Loop ---");
let attempts = 0;
do {
  console.log("Trying login...");
  attempts++;
} while (attempts < 0); // Condition is false, but runs once anyway!

// 4. Break & Continue
console.log("--- Break & Continue ---");
for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    continue; // Skip number 2
  }
  if (i === 4) {
    break; // Abort loop when hitting 4
  }
  console.log("Number:", i);
}
`,
    ext: "js"
  },
  "06-Functions": {
    title: "JavaScript Functions",
    line: "Functions are reusable blocks of code designed to perform specific operations.",
    think: "A juice blender machine. You feed in ingredients (parameters), press blend (run logic), and pour out juice (return value).",
    example: "function sum(a, b) {\n  return a + b;\n}\nlet total = sum(5, 10);",
    result: "Defines a function, calls it with arguments 5 and 10, and stores the output (15).",
    remember: "A function stops executing and outputs a value when it hits the return keyword. Code below return is ignored!",
    summary: "* Declaration: named function that can be called anywhere in the file (hoisted).\n* Expression: function stored in a variable, cannot be called before definition.\n* Arrow Function: ES6 syntax shortcut, does not bind its own 'this' context.\n* Default Parameters: assigns values to inputs if they are omitted.\n* Callback Functions: functions passed as input arguments to other functions.",
    diagram: `
+---------------------------------------------------------+
| FUNCTION FLOW                                           |
|                                                         |
|   Inputs (Arguments)  =>  [ FUNCTION LOGIC ]  => Return |
|      (e.g., 5, 10)       { add values together }  (15)  |
|                                                         |
|   Note: Return outputs the value and immediately exits! |
+---------------------------------------------------------+
`,
    practice: "1. Write a function named `calculateArea` that takes width and height and returns area.\n2. Convert it into an ES6 arrow function.",
    challenge: "Write a function `processUser` that takes a name (String) and a callback function. Inside, call the callback, passing the name, and execute a custom greet message inside the callback.",
    example_code: `// 1. Function Declaration (Hoisted - can be defined below call)
let result = calculateTax(100);
console.log("Taxed Total:", result);

function calculateTax(price, taxRate = 0.1) { // taxRate has default value
  return price + (price * taxRate);
}

// 2. Function Expression (Not Hoisted - must define before calling)
const double = function(num) {
  return num * 2;
};
console.log("Double of 8:", double(8));

// 3. Arrow Function (Clean modern ES6 syntax)
const subtract = (a, b) => a - b; // Implicit return for single line!
console.log("Subtraction:", subtract(10, 4));

// 4. Callback Function (Passing functions as arguments)
function alertUser(username, formatCallback) {
  let formattedName = formatCallback(username);
  console.log("SYSTEM UPDATE: Welcome " + formattedName);
}

const uppercaseName = (name) => name.toUpperCase();
alertUser("meet", uppercaseName); // Outputs: "SYSTEM UPDATE: Welcome MEET"
`,
    ext: "js"
  },
  "07-Arrays": {
    title: "JavaScript Arrays",
    line: "Arrays are ordered list variables used to store multiple values in a single container.",
    think: "A school locker corridor. Each door has an index number label on it (0, 1, 2...) containing books.",
    example: "let list = ['Apples', 'Milk'];\nlist.push('Eggs');",
    result: "Creates a two-item array list, and appends 'Eggs' at index 2.",
    remember: "Array index numbers are zero-based! The first item is at [0] and the last is at [array.length - 1].",
    summary: "* Declaration: created using square brackets: [...].\n* Insertion/Deletion: push() (end), pop() (end), shift() (front), unshift() (front).\n* Utility methods: slice() (extracts parts), splice() (adds/removes anywhere), includes() (searches).\n* High-Order Iteration: forEach() (loop), map() (transform), filter() (filter items), reduce() (aggregate).",
    diagram: `
+---------------------------------------------------------+
| ARRAY INDEXES & METHODS                                 |
|                                                         |
|   Array:   [ "Apples", "Bananas", "Cherries" ]          |
|   Index:        0          1           2                |
|   Length:  3                                            |
|                                                         |
|   .push() adds to end.    .pop() removes from end.      |
|   .shift() removes front. .unshift() adds to front.     |
+---------------------------------------------------------+
`,
    practice: "1. Create an array containing three of your favorite hobbies.\n2. Use array index notation to print the second hobby.\n3. Add a new hobby to the end using `push()`.",
    challenge: "Given an array of numbers `[10, 20, 30, 40, 50]`, use `filter()` to get numbers greater than 25, and then use `map()` to double those filtered values. Print the final resulting array.",
    example_code: `// 1. Array Creation & Modification
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");   // Appends to the end: ["Apple", "Banana", "Cherry", "Mango"]
fruits.unshift("Kiwi"); // Inserts at the start: ["Kiwi", "Apple", "Banana", "Cherry", "Mango"]

let removedEnd = fruits.pop();     // Removes Mango
let removedStart = fruits.shift(); // Removes Kiwi
console.log("Cleaned List:", fruits); // ["Apple", "Banana", "Cherry"]

// 2. Splice (Modify array at index: splice(start, deleteCount, itemsToAdd))
fruits.splice(1, 1, "Orange", "Peach"); 
console.log("After Splice:", fruits); // ["Apple", "Orange", "Peach", "Cherry"] (Banana replaced)

// 3. Search methods
console.log("Contains Peach?", fruits.includes("Peach")); // true
console.log("Index of Orange:", fruits.indexOf("Orange")); // 1

// 4. Higher-Order Array Iteration
let prices = [10, 20, 30, 40];

// Map - Creates a new array by transforming every item
let discountedPrices = prices.map(price => price * 0.9);
console.log("Discounted:", discountedPrices); // [9, 18, 27, 36]

// Filter - Creates a new array with items matching a condition
let highPrices = prices.filter(price => price > 25);
console.log("High prices:", highPrices); // [30, 40]
`,
    ext: "js"
  },
  "08-Objects": {
    title: "JavaScript Objects",
    line: "Objects store key-value collections representing structured records.",
    think: "A filing cabinet folder. Instead of indexes, items are labeled: 'Name: Jane', 'Age: 25', 'Job: Designer'.",
    example: "let user = { name: 'Meet', age: 21 };\nconsole.log(user.name);",
    result: "Creates a user object and prints the value corresponding to the name key ('Meet').",
    remember: "Use dot notation (obj.name) normally. Use bracket notation (obj['name']) when key is a dynamic variable.",
    summary: "* Properties: key-value matches inside curly braces: { key: value }.\n* Notation: dot notation (obj.key) and bracket notation (obj[\"key\"]).\n* Methods: functions stored as object properties.\n* 'this' keyword: refers to the current parent object executing the method.\n* Iteration keys: Object.keys(), Object.values(), Object.entries() return array listings.",
    diagram: `
+-----------------------------------------------------------+
| OBJECT STRUCTURING                                        |
|                                                           |
|   Object: { name: "Jane", role: "Developer" }             |
|              |      |       |         |                   |
|             Key   Value    Key      Value                 |
|                                                           |
|   Access: user.name OR user["name"]                       |
+-----------------------------------------------------------+
`,
    practice: "1. Create an object for a smartphone with properties for `brand`, `model`, and `price`.\n2. Print the smartphone brand.\n3. Add a new property `is5G` and set it to true.",
    challenge: "Write an object representing a circle. It should have a radius property and a method named `calculateArea`. Inside the method, use `this.radius` to calculate and return the area (Math.PI * radius * radius).",
    example_code: `// 1. Object Creation
let laptop = {
  brand: "Apple",
  processor: "M2",
  ramGB: 16,
  specifications: { gpu: "8-core", screen: "Liquid Retina" } // Nested Object
};

// 2. Accessing and Modifying properties
console.log("Laptop GPU:", laptop.specifications.gpu); // Dot notation
console.log("Laptop Brand:", laptop["brand"]); // Bracket notation

laptop.storage = "512GB"; // Add new key
laptop.ramGB = 24;        // Modify existing key
delete laptop.processor;  // Delete key

// 3. Methods & "this" keyword
let user = {
  username: "Jane",
  greet: function() {
    return "Hi, I am " + this.username; // "this" refers to the user object
  }
};
console.log(user.greet()); // "Hi, I am Jane"

// 4. Object Utilities
console.log("Keys:", Object.keys(laptop));     // ["brand", "ramGB", "specifications", "storage"]
console.log("Values:", Object.values(laptop)); // Array of values
`,
    ext: "js"
  },
  "09-DOM-Selection": {
    title: "DOM Selection",
    line: "DOM Selection allows JavaScript to target and fetch HTML tags from a webpage.",
    think: "Using a laser pointer to point out specific picture frames hanging on a gallery wall.",
    example: "let title = document.getElementById('main-title');",
    result: "Selects and references the HTML tag containing id='main-title'.",
    remember: "querySelector returns only the FIRST matching element. querySelectorAll returns a list of ALL matches.",
    summary: "* DOM: Document Object Model, the browser's parsed tree map of HTML.\n* Selectors: getElementById(), getElementsByClassName(), getElementsByTagName().\n* Modern Selectors: querySelector(), querySelectorAll().\n* NodeList vs HTMLCollection: NodeList (querySelectorAll) supports loop iterations; HTMLCollection is live.",
    diagram: `
+---------------------------------------------------------+
| DOM TREE STRUCTURE                                      |
|                                                         |
|                     [ document ]                        |
|                          |                              |
|                      <html>                             |
|                     /      \\                            |
|               <head>        <body>                      |
|                            /      \\                     |
|                         <h1>       <p>                  |
|                                                         |
|   Selectors search down this tree to bind tag nodes!    |
+---------------------------------------------------------+
`,
    practice: "Create an HTML file with a heading containing `id=\"title\"` and three paragraphs containing `class=\"text\"`. Write JavaScript queries to select the heading by ID, and all paragraphs by class.",
    challenge: "Use `querySelectorAll()` to select all paragraph items. Loop through the returned collection using `forEach` and log the text content (`innerText`) of each paragraph to the console.",
    example_code: `<!DOCTYPE html>
<html>
<head>
  <title>DOM Selection Demo</title>
</head>
<body>
  <h1 id="heading">Welcome to MeetTutorials</h1>
  <p class="desc">Learn HTML, CSS, and JS.</p>
  <p class="desc">Every file teaches you visually.</p>
  
  <ul id="menu">
    <li>Home</li>
    <li>Lessons</li>
  </ul>

  <script>
    // 1. Selecting by ID (returns a single element)
    const title = document.getElementById("heading");
    console.log("Heading text:", title.innerText);

    // 2. Selecting by Class (returns a live HTMLCollection)
    const paragraphs = document.getElementsByClassName("desc");
    console.log("Number of paragraphs:", paragraphs.length);

    // 3. querySelector (Universal selector - returns first matching element)
    const firstParagraph = document.querySelector(".desc"); // Note the class dot (.)
    const menuList = document.querySelector("#menu");        // Note the ID hash (#)

    // 4. querySelectorAll (Returns a static NodeList of all matches)
    const allListItems = document.querySelectorAll("#menu li");
    console.log("List items count:", allListItems.length);
    
    // We can loop directly over querySelectorAll NodeLists!
    allListItems.forEach((item, index) => {
      console.log("Item " + index + ": " + item.innerText);
    });
  </script>
</body>
</html>`,
    ext: "html"
  },
  "10-DOM-Manipulation": {
    title: "DOM Manipulation",
    line: "DOM Manipulation updates text, styles, classes, and structures on webpage elements.",
    think: "Painting your cardboard box a new color, rewriting its label, or adding new slots to it.",
    example: "element.innerText = 'Updated';\nelement.style.color = 'blue';",
    result: "Updates the text of the selected element to 'Updated' and changes its text color to blue.",
    remember: "Use classList.add() and classList.remove() to control styles instead of writing individual element.style lines.",
    summary: "* Text manipulation: innerText (plain text), textContent (renders spacing), innerHTML (renders tags).\n* Styles: element.style.property (CSS property written in camelCase).\n* Classes: classList.add(), classList.remove(), classList.toggle(), classList.contains().\n* Nodes: createElement(), appendChild(), remove().",
    diagram: `
+---------------------------------------------------------+
| DOM MANIPULATION STAGES                                 |
|                                                         |
|  1. Select Node   ->   2. Edit Properties  -> 3. Browser|
|   document.query          el.style.color          renders|
|   Selector("h1")          = "orange"              instantly|
+---------------------------------------------------------+
`,
    practice: "Create a page with a paragraph box. Write script selectors to change its text to 'Hello Javascript', set its background color to lightblue, and add 20px padding.",
    challenge: "Create a div container with `id=\"container\"`. Write script codes to programmatically create a button element (`createElement`), set its text to 'Click Me', and append it into the container using `appendChild`.",
    example_code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight { background-color: yellow; font-weight: bold; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div id="app">
    <h1 id="title">Old Title</h1>
    <p id="info">Original descriptions go here.</p>
  </div>

  <script>
    const title = document.getElementById("title");
    const info = document.getElementById("info");
    const app = document.getElementById("app");

    // 1. Text & HTML Updates
    title.innerText = "Modern JavaScript!"; // Change plain text
    info.innerHTML = "This is <strong>strongly emphasized</strong> text."; // Renders html tags!

    // 2. Styling (camelCase properties!)
    title.style.color = "coral";
    title.style.fontSize = "36px"; // font-size becomes fontSize

    // 3. Class Manipulation (Highly Recommended for Clean Code)
    info.classList.add("highlight"); // Applies highlight styles
    // info.classList.remove("highlight");
    // info.classList.toggle("hidden"); // Hides/shows element

    // 4. Creating & Appending Elements Dynamically
    const newBox = document.createElement("div"); // Creates <div> in memory
    newBox.innerText = "I was generated by JS!";
    newBox.style.padding = "10px";
    newBox.style.border = "1px solid black";

    app.appendChild(newBox); // Inserts div into webpage hierarchy

    // 5. Deleting Elements
    // info.remove(); // Removes paragraph completely from DOM
  </script>
</body>
</html>`,
    ext: "html"
  },
  "11-Events": {
    title: "JavaScript Events",
    line: "Events are actions (like clicks or keystrokes) that trigger JavaScript logic.",
    think: "Setting up a tripwire. When a visitor triggers it (clicks button), it sounds an alarm (runs function).",
    example: "btn.addEventListener('click', (e) => {\n  console.log('Clicked');\n});",
    result: "Listens for page button clicks and logs 'Clicked' when they happen.",
    remember: "Always call e.preventDefault() in submit listeners to stop form submissions from reloading your page.",
    summary: "* Event Listener: addEventListener('eventName', callbackFunction).\n* Common Events: click, submit (form), keyup (keyboard), change (inputs).\n* Event Object (e): carries details like clicked target (e.target) or key pressed (e.key).\n* preventDefault(): halts default browser reactions (like link jumps or page refreshes).",
    diagram: `
+-------------------------------------------------------------+
| EVENT BUBBLING AND FLOW                                     |
|                                                             |
|   User Interaction -> [ Event Listener ] -> Runs Callback   |
|     (e.g., Click)        ("click")           Function Block |
|                                                             |
|   e.preventDefault() blocks browser refreshes!              |
+-------------------------------------------------------------+
`,
    practice: "Create a page with a text input box. Write a keyup listener that prints the value of the input box in the console logs on every keystroke.",
    challenge: "Create a registration form containing a single input. Add a submit event listener to the form container that intercepts submission, calls `e.preventDefault()`, and prints the input value on screen instead of reloading.",
    example_code: `<!DOCTYPE html>
<html>
<body>
  <button id="alert-btn">Click Me</button>
  <input type="text" id="name-input" placeholder="Type here...">
  
  <form id="my-form" style="margin-top:20px;">
    <input type="email" placeholder="Enter email" required>
    <button type="submit">Submit Email</button>
  </form>

  <script>
    const alertBtn = document.getElementById("alert-btn");
    const nameInput = document.getElementById("name-input");
    const myForm = document.getElementById("my-form");

    // 1. Click Event
    alertBtn.addEventListener("click", function(event) {
      console.log("Button clicked!");
      console.log("Clicked element:", event.target); // event.target points to the button!
    });

    // 2. Keyboard Event (keyup occurs when releasing a key)
    nameInput.addEventListener("keyup", (e) => {
      console.log("Key pressed:", e.key); // e.key returns the literal letter (e.g. "a")
      console.log("Input value:", nameInput.value); // current input value
    });

    // 3. Form Submit Event (Crucial for forms)
    myForm.addEventListener("submit", (e) => {
      e.preventDefault(); // STOP form from submitting and reloading page!
      console.log("Form intercept successful. No page refresh occurred.");
    });
  </script>
</body>
</html>`,
    ext: "html"
  },
  "12-ES6-Features": {
    title: "ES6 Features",
    line: "ES6 refers to modern JavaScript updates that make code cleaner and more expressive.",
    think: "Upgrading a bicycle to an electric scooter. It accomplishes the same task but is faster and requires less manual pedaling.",
    example: "const { name } = user;\nconst text = `Hi ${name}`;",
    result: "Destructures user name and uses a template literal backtick string.",
    remember: "Template literal backticks (`` ` ``) allow you to interpolate variables inside ${} without using + operators.",
    summary: "* Arrow Functions: shorthand parameter syntax.\n* Template Literals: backtick strings allowing multiline formatting and variable insertions.\n* Destructuring: unpack values from arrays or object keys easily.\n* Spread/Rest Operator (...): spreads arrays/objects or gathers arguments.\n* Optional Chaining (?.): reads deep nested properties without crash errors if parent keys are missing.",
    diagram: `
+---------------------------------------------------------+
| SPREAD & DESTRUCTURING                                  |
|                                                         |
|   Spread:  [...[1, 2], 3] => [1, 2, 3]                  |
|   Destruct: const { x } = { x: 5 } => x is now 5        |
+---------------------------------------------------------+
`,
    practice: "1. Create an object `student` with `name` and `age` keys.\n2. Use object destructuring to extract both keys into variables.\n3. Output a sentence using template literals referencing both.",
    challenge: "Demonstrate optional chaining: Create a nested object `user` that does not contain a `profile` property. Attempt to log `user.profile.bio` directly vs `user?.profile?.bio` and explain the difference.",
    example_code: `// 1. Template Literals & Arrow Functions
const user = "Meet";
const greet = (name) => \`Welcome back, \${name}!\`; // Note escaped backticks
console.log(greet(user));

// 2. Destructuring (Object and Array)
const person = { name: "Alice", age: 25, job: "Developer" };
const { name, job } = person; // Extracts keys into variables
console.log("Extracted name:", name, "and job:", job);

const rgb = [255, 0, 128];
const [red, green, blue] = rgb; // Unpacks indexes in order
console.log("Red value:", red);

// 3. Spread Operator (Clones or merges arrays/objects)
const originalList = [1, 2, 3];
const copiedList = [...originalList, 4, 5]; // Copies items and appends
console.log("Copied list:", copiedList);

const basicDetails = { brand: "Ford" };
const fullDetails = { ...basicDetails, model: "Mustang", year: 2024 };
console.log("Merged Object:", fullDetails);

// 4. Optional Chaining (?.)
const member = { id: 101, contacts: null };
// console.log(member.contacts.phone); // ERROR: Cannot read properties of null
console.log("Safe phone access:", member?.contacts?.phone); // undefined (No crash!)
`,
    ext: "js"
  },
  "13-Modules": {
    title: "JavaScript Modules",
    line: "Modules split code into separate reusable files using export and import statements.",
    think: "Organizing tools into separate labeled drawers instead of tossing everything in one big messy toolbox.",
    example: "export const pi = 3.14;\nimport { pi } from './math.js';",
    result: "Exports a constant from one module file and imports it in another module file.",
    remember: "Modules automatically run in strict mode, and you must include type='module' inside your HTML script tags.",
    summary: "* Export types: Named Exports (multiple per file) and Default Exports (one per file).\n* Import format: import { name } from './file.js' for named; import name from './file.js' for default.\n* Alias imports: use 'as' to rename imports (e.g. import { add as sum }).\n* Root imports: import * as alias from 'path'.",
    diagram: `
+---------------------------------------------------------+
| MODULE EXPORT / IMPORT                                  |
|                                                         |
|   [ file: math.js ]             [ file: app.js ]        |
|   export const double(x)... ==> import { double }...    |
|   export default Math...    ==> import Math...          |
+---------------------------------------------------------+
`,
    practice: "1. Write a code example demonstrating how to export a function named `calculateTotal`.\n2. Write the matching import statement to import it from `./calculator.js`.",
    challenge: "Explain the difference between importing a default export and importing a named export, highlighting import syntax and count limits per file.",
    example_code: `// --- file: math.js (Example module exports) ---
// // Named Export: Export individual elements (can be multiple)
// export const PI = 3.14159;
// export const multiply = (a, b) => a * b;
// 
// // Default Export: Export one core element per file
// export default function greetModule() {
//   return "Hello from Math Module!";
// }

// --- file: app.js (Example module imports) ---
// // Importing Named Exports (must match names inside curly braces)
// import { PI, multiply } from "./math.js";
//
// // Importing Named Exports with a rename alias
// import { multiply as product } from "./math.js";
//
// // Importing Default Exports (no curly braces needed, name it whatever you want)
// import defaultGreeting from "./math.js";
//
// // Importing Everything as a single namespace object
// import * as MathUtils from "./math.js";

console.log("Modules utilize 'import' and 'export' statements to structure clean dependencies.");
`,
    ext: "js"
  },
  "14-Classes": {
    title: "JavaScript Classes",
    line: "Classes are templates used to construct multiple objects with identical structures and behaviors.",
    think: "A cookie cutter template. You define the shape once, and can stamp out hundreds of cookie objects.",
    example: "class User {\n  constructor(name) { this.name = name; }\n}\nlet user1 = new User('Alice');",
    result: "Creates a User blueprint class, and instantiates an object user1 with name='Alice'.",
    remember: "Classes are blueprints, not objects. You must use the `new` keyword to stamp out an actual object.",
    summary: "* Constructor: method that runs automatically when a new class instance is created.\n* Inheritance: subclass copying parent class template using 'extends'.\n* super(): function used to call constructor functions on the parent class.\n* Static Methods: utility methods called directly on the class blueprint, not instances.",
    diagram: `
+-------------------------------------------------------------+
| CLASS INSTANTIATION                                         |
|                                                             |
|   Class Blueprint (User) === new User("John") ===> Object   |
|   { constructor(name) }                            John     |
+-------------------------------------------------------------+
`,
    practice: "1. Create a class `Car` that has a constructor setting `brand` and `speed` properties.\n2. Instantiate a car object and print its brand.",
    challenge: "Implement inheritance: Create a subclass `ElectricCar` that extends `Car` and adds a constructor property for `batteryLife`. Call `super()` inside the constructor to pass brand and speed parameters.",
    example_code: `// 1. Class Blueprint Definition
class Vehicle {
  constructor(brand, topSpeed) {
    this.brand = brand;
    this.topSpeed = topSpeed;
  }

  // Method (available to all instances)
  describe() {
    return "This is a " + this.brand + " with top speed of " + this.topSpeed + " km/h.";
  }

  // Static Method (utility function tied to class template itself)
  static compareSpeeds(v1, v2) {
    return v1.topSpeed > v2.topSpeed ? v1.brand : v2.brand;
  }
}

// 2. Class Inheritance (Subclass copying parent structure)
class Bike extends Vehicle {
  constructor(brand, topSpeed, hasGears) {
    super(brand, topSpeed); // super() calls parent vehicle constructor
    this.hasGears = hasGears; // extra property
  }

  // Method Overriding (updates parent describe method)
  describe() {
    return super.describe() + " Gears present: " + this.hasGears;
  }
}

// 3. Instantiation (Creating objects using the blueprint)
let myBike = new Bike("Trek", 45, true);
console.log(myBike.describe()); // "This is a Trek with top speed of 45 km/h. Gears present: true"

let car1 = new Vehicle("Toyota", 180);
let car2 = new Vehicle("Tesla", 240);
console.log("Faster vehicle:", Vehicle.compareSpeeds(car1, car2)); // "Tesla"
`,
    ext: "js"
  },
  "15-Error-Handling": {
    title: "Error Handling",
    line: "Error handling intercepts crash events using try...catch blocks to keep apps running.",
    think: "A safety net under a circus trapeze artist. If they slip (trigger a bug), the net catches them safely.",
    example: "try {\n  runCode();\n} catch (err) {\n  console.log(err.message);\n}",
    result: "Intercepts reference errors and prints description messages without crashing the runtime process.",
    remember: "The finally block runs no matter what—regardless of whether an error occurred or was caught.",
    summary: "* try: wraps code blocks that are prone to bugs or network exceptions.\n* catch: executes safety code blocks if try block crashes.\n* finally: block that executes unconditionally after try/catch exits.\n* throw: custom keyword used to trigger manual user exceptions (throw new Error()).",
    diagram: `
+-------------------------------------------------------------+
| ERROR HANDLING PATHWAYS                                     |
|                                                             |
|   [ Run Try block code ] --Error!--> [ Catch block runs ]   |
|            |                                    |           |
|         Success                                 |           |
|            |                                    |           |
|            v                                    v           |
|            +------------> [ Finally block runs ] <----------+
+-------------------------------------------------------------+
`,
    practice: "1. Write a try-catch block that attempts to divide a number by a variable that does not exist.\n2. Print the error message inside the catch block.",
    challenge: "Write a function `validateAge` that takes an age. If age is less than 0 or not a number, use the `throw` keyword to raise an error. Handle this function call inside a try-catch block.",
    example_code: `// 1. Try-Catch-Finally Flow
try {
  let user = "John";
  console.log("Name is:", user);
  
  // Let's trigger a ReferenceError by using an undefined variable
  let balance = salary; 
  console.log("Approved balance:", balance); // Skipped due to error above!
} catch (error) {
  // Catch block intercepts the error!
  console.error("Crash intercepted!");
  console.error("Error name:", error.name);       // "ReferenceError"
  console.error("Error message:", error.message); // "salary is not defined"
} finally {
  console.log("Maintenance check complete. This line always runs.");
}

// 2. Throwing Custom Errors
function purchaseItem(price) {
  if (price < 0) {
    throw new Error("Price cannot be negative!"); // Custom error constructor
  }
  return "Purchased successful for $" + price;
}

try {
  purchaseItem(-10); // Triggers custom error
} catch (e) {
  console.log("Rejected purchase:", e.message); // "Price cannot be negative!"
}
`,
    ext: "js"
  },
  "16-JSON": {
    title: "JavaScript JSON",
    line: "JSON (JavaScript Object Notation) is a lightweight text format used to transmit structured data.",
    think: "Flattening a built toy model into flat cardboard pieces (stringify) for shipping, and assembly (parse) on arrival.",
    example: "let jsonText = JSON.stringify(userObj);\nlet originalObj = JSON.parse(jsonText);",
    result: "Converts a JavaScript object to a text string, and then parses it back into an active object.",
    remember: "JSON keys must always be enclosed in double quotes (e.g. `{\"id\": 1}`), and no trailing commas are allowed.",
    summary: "* JSON: JavaScript Object Notation, standard API data transfer format.\n* stringify(): converts active JavaScript variables/objects into flat JSON text strings.\n* parse(): reads JSON text strings and returns fully functional JS objects.\n* JSON vs JS Object: JSON has strict double quotes on keys, and no functions allowed.",
    diagram: `
+---------------------------------------------------------+
| JSON TRANSFORMATION FLOW                                |
|                                                         |
|   JS Object:  { age: 20 }                               |
|                     |                                   |
|               JSON.stringify()                          |
|                     v                                   |
|   JSON String: '{"age": 20}'                            |
|                     |                                   |
|               JSON.parse()                              |
|                     v                                   |
|   JS Object:  { age: 20 }                               |
+---------------------------------------------------------+
`,
    practice: "1. Create an object `playlist` with a `title` and a list of `songs`.\n2. Convert it to a JSON string and print it.\n3. Parse it back into an object.",
    challenge: "Create a JSON string representing a product list: `'[{\"id\":1,\"name\":\"Box\"},{\"id\":2,\"name\":\"Bag\"}]'`. Parse the string and log the name of the second product.",
    example_code: `// 1. JavaScript Object
const databaseRecord = {
  employeeId: 409,
  name: "Bob",
  departments: ["HR", "PR"],
  activeStatus: true
};

// 2. Object => JSON String (Stringify)
const jsonString = JSON.stringify(databaseRecord);
console.log("JSON String format:", jsonString);
// Output is a flat text string: '{"employeeId":409,"name":"Bob","departments":["HR","PR"],"activeStatus":true}'
console.log("Type:", typeof jsonString); // "string"

// 3. JSON String => Object (Parse)
const parsedRecord = JSON.parse(jsonString);
console.log("Reconstructed Object Name:", parsedRecord.name); // "Bob"
console.log("Reconstructed Object Array:", parsedRecord.departments[0]); // "HR"

// 4. Strict JSON rules check
// The string below is invalid JSON because keys are not wrapped in double quotes
const invalidJSON = "{name: 'Alice'}";
try {
  JSON.parse(invalidJSON);
} catch (e) {
  console.log("Parsing failed:", e.message); // SyntaxError
}
`,
    ext: "js"
  },
  "17-Promises": {
    title: "JavaScript Promises",
    line: "A Promise is a placeholder representing a future result of an asynchronous operation.",
    think: "A food pager buzzer. You place an order, get a pager (Promise) in state pending. It buzzes (resolved) when ready.",
    example: "const delay = new Promise((resolve) => resolve('Done'));",
    result: "Constructs a resolved promise containing the value 'Done'.",
    remember: "Use .then() to handle successful resolutions. Use .catch() to intercept failure rejections.",
    summary: "* States: Pending (waiting), Fulfilled/Resolved (success), Rejected (failed).\n* resolve(): function called when async task completes successfully.\n* reject(): function called when async task encounters an error.\n* Chaining: then() returns another promise, allowing sequential async steps.\n* Promise.all(): runs multiple promises in parallel, resolving only when all complete.",
    diagram: `
+-------------------------------------------------------------+
| PROMISE STATE FLOW                                          |
|                                                             |
|                       [ Promise (Pending) ]                 |
|                            /         \\                      |
|                       Success        Failure                |
|                          v             v                    |
|                [ Resolved (.then) ]   [ Rejected (.catch) ] |
+-------------------------------------------------------------+
`,
    practice: "1. Create a promise that resolves with 'Hello World' after a 1-second delay (using setTimeout).\n2. Handle it using `.then()` to log the message.",
    challenge: "Create a promise that checks a balance. If balance is greater than 50, resolve with 'Approved', otherwise reject with 'Insufficient funds'. Run it and handle both outcomes using `.then()` and `.catch()`.",
    example_code: `// 1. Creating a Promise (resolve & reject handlers)
const fetchProductData = new Promise((resolve, reject) => {
  let successStatus = true; // Simulating outcome of network task
  
  if (successStatus) {
    resolve({ id: 101, name: "Tablet" }); // Send data as success payload
  } else {
    reject("Failed to connect to API database."); // Send error payload
  }
});

// 2. Consuming the Promise (.then, .catch, .finally)
fetchProductData
  .then((data) => {
    console.log("Success! Loaded product:", data.name);
  })
  .catch((errorMsg) => {
    console.error("Error caught:", errorMsg);
  })
  .finally(() => {
    console.log("Connection closed. (Always runs)");
  });

// 3. Running Promises in Parallel (Promise.all)
const p1 = new Promise(resolve => setTimeout(() => resolve("First API loaded"), 100));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second API loaded"), 200));

Promise.all([p1, p2])
  .then((results) => {
    console.log("All Promises completed:", results); // ["First API loaded", "Second API loaded"]
  });
`,
    ext: "js"
  },
  "18-Async-Await": {
    title: "Async Await",
    line: "Async/Await simplifies writing promise chains, making asynchronous code read like sequential lines.",
    think: "Pausing a movie. You press pause (await) to wait for the scene to load, then press play to continue.",
    example: "async function load() {\n  let data = await fetchPromise;\n}",
    result: "Pauses execution lines inside the async function block until fetchPromise completes.",
    remember: "The `await` keyword can only be used inside functions that are marked with the `async` prefix.",
    summary: "* async functions: return a Promise automatically.\n* await: pauses code lines until promise resolves, returning the payload directly.\n* Error Handling: wrapped inside try...catch structures instead of using `.catch()`.\n* Performance: use Promise.all to fetch in parallel to avoid sequential blocking bottlenecks.",
    diagram: `
+-------------------------------------------------------------+
| ASYNC AWAIT LIFECYCLE                                       |
|                                                             |
|   Line 1: let x = await fetch() ===> [ PAUSES execution ]   |
|   Line 2: console.log(x)        ===> [ Runs after success ] |
+-------------------------------------------------------------+
`,
    practice: "1. Create an async function `getUserInfo`.\n2. Inside, write an await step that resolves a promise after a 1-second timeout delay and logs the details.",
    challenge: "Write an async function that fetches user details. Wrap the await statements in a try-catch block, throw an error if user credentials are invalid, and print the caught error message.",
    example_code: `// 1. Asynchronous Delay Utility (Returns a Promise)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 2. Async Function using Await & Try/Catch
async function runSystemDiagnostics() {
  try {
    console.log("Diagnostic start...");
    await delay(1000); // Pauses code for 1 second!
    
    console.log("Server verification ongoing...");
    await delay(1000); // Pauses code for another 1 second!
    
    let resultStatus = "Healthy";
    console.log("Status check:", resultStatus);
    
  } catch (error) {
    // try/catch replaces .catch() chains!
    console.log("Diagnostic failed:", error.message);
  }
}

runSystemDiagnostics();

// 3. Sequential vs Parallel fetching
const fetchItems = () => delay(500).then(() => "Items");
const fetchPrices = () => delay(500).then(() => "Prices");

async function runParallelFetches() {
  console.log("Fetching concurrently...");
  // Promise.all runs both fetches simultaneously (takes 500ms total, not 1000ms!)
  const [items, prices] = await Promise.all([fetchItems(), fetchPrices()]);
  console.log("Fetched payloads:", items, prices);
}
runParallelFetches();
`,
    ext: "js"
  },
  "19-Fetch-API": {
    title: "Fetch API",
    line: "The Fetch API makes HTTP network requests to read or send data from web APIs.",
    think: "Ordering takeout food over the phone. You call the restaurant (URL) and wait for delivery.",
    example: "fetch(url)\n  .then(res => res.json())\n  .then(data => console.log(data));",
    result: "Sends an HTTP request to the API, parses the JSON response, and logs the returned data.",
    remember: "Fetch returns a promise. You must convert the response to JSON (`res.json()`) before reading it.",
    summary: "* Fetch defaults to GET requests.\n* For POST: configure method, headers, and body details.\n* response.ok: checks if status is 200-299 (errors like 404/500 do not reject fetch directly).\n* JSON parsing: res.json() also returns a promise.",
    diagram: `
+---------------------------------------------------------+
| HTTP FETCH CYCLE                                        |
|                                                         |
|   Client Page ===> Request (GET/POST) ===> API Server   |
|   Client Page <=== Response (JSON text) <=== API Server |
|                                                         |
|   JS parses text: res.json() => returns Object          |
+---------------------------------------------------------+
`,
    practice: "Create an HTML page. Add a button. Write script codes to fetch a random quote from a public API when the button is clicked and display it inside a paragraph tag.",
    challenge: "Write an async function named `postUserData` that uses fetch to send user details to `https://jsonplaceholder.typicode.com/posts` using the POST method. Configure headers for JSON payload format.",
    example_code: `<!DOCTYPE html>
<html>
<body>
  <h1>Fetch API Demo</h1>
  <button id="get-joke">Get Random Joke</button>
  <div id="display" style="margin-top:20px; font-size:18px;">Click button to load...</div>

  <script>
    const getJokeBtn = document.getElementById("get-joke");
    const display = document.getElementById("display");

    // 1. GET Request using Async/Await
    async function loadJoke() {
      display.innerText = "Loading forecast...";
      try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        
        // Always check response.ok! (Fetch resolves even on 404/500 errors)
        if (!response.ok) {
          throw new Error("HTTP connection failed! Status: " + response.status);
        }
        
        const data = await response.json(); // Parses string text to object
        display.innerText = data.setup + " - " + data.punchline;
      } catch (error) {
        display.innerText = "Error: " + error.message;
      }
    }

    getJokeBtn.addEventListener("click", loadJoke);

    // 2. POST Request Example (Sending data)
    async function createUserAccount() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST", // HTTP verb
          headers: {
            "Content-Type": "application/json" // Tells server format is JSON
          },
          body: JSON.stringify({
            title: "Join Meet",
            body: "MERN student details",
            userId: 1
          })
        });

        const data = await response.json();
        console.log("Server response to POST:", data); // {id: 101, title: "Join Meet", ...}
      } catch (e) {
        console.error("POST failed:", e.message);
      }
    }
    createUserAccount();
  </script>
</body>
</html>`,
    ext: "html"
  },
  "20-Web-Storage": {
    title: "Web Storage",
    line: "Web Storage stores key-value text data directly inside the user's web browser.",
    think: "Browser locker rooms: localStorage keeps items persistent; sessionStorage clears lockers on tab close.",
    example: "localStorage.setItem('theme', 'dark');\nlet theme = localStorage.getItem('theme');",
    result: "Saves a theme preference persistently in the browser memory, and retrieves it.",
    remember: "Web storage only stores strings! Use JSON.stringify() to save arrays or objects.",
    summary: "* localStorage: stores persistent data with no expiration time.\n* sessionStorage: stores session-bound data that is wiped when the browser tab closes.\n* Utility: setItem(key, value), getItem(key), removeItem(key), clear().\n* Object handling: stringify objects before saving, and parse them upon retrieval.",
    diagram: `
+---------------------------------------------------------+
| LOCAL STORAGE VS SESSION STORAGE                        |
|                                                         |
|   localStorage:   [ Browser Memory ] (Remains on reload)|
|   sessionStorage: [ Tab Memory ]     (Wiped on tab close|
+---------------------------------------------------------+
`,
    practice: "Create a page with a text input. Save the input value to localStorage on every keyup. When the page reloads, retrieve the saved value and prepopulate the input box.",
    challenge: "Write script codes to store a user object `{ name: 'Alice', score: 100 }` in localStorage, and retrieve and parse it back into an active object without triggering syntax errors.",
    example_code: `<!DOCTYPE html>
<html>
<body>
  <h1>Web Storage Demo</h1>
  <button id="dark-mode">Dark Mode</button>
  <button id="light-mode">Light Mode</button>
  
  <script>
    const darkBtn = document.getElementById("dark-mode");
    const lightBtn = document.getElementById("light-mode");

    // 1. Setting and Getting Simple Strings
    darkBtn.addEventListener("click", () => {
      localStorage.setItem("themePreference", "dark");
      applyTheme();
    });

    lightBtn.addEventListener("click", () => {
      localStorage.setItem("themePreference", "light");
      applyTheme();
    });

    function applyTheme() {
      const currentTheme = localStorage.getItem("themePreference");
      console.log("Current Theme stored:", currentTheme);
      document.body.style.backgroundColor = currentTheme === "dark" ? "#1e293b" : "#ffffff";
      document.body.style.color = currentTheme === "dark" ? "#ffffff" : "#000000";
    }

    applyTheme(); // Run on startup to load user settings!

    // 2. Saving Arrays and Objects (Must convert to JSON string!)
    const userProfile = { username: "Alice", highscore: 950 };
    
    // Save Object
    localStorage.setItem("userRecord", JSON.stringify(userProfile));

    // Retrieve Object
    const savedString = localStorage.getItem("userRecord");
    if (savedString) {
      const parsedUser = JSON.parse(savedString); // Convert back to JS Object
      console.log("Parsed User score:", parsedUser.highscore); // 950
    }

    // 3. Removing Items
    // localStorage.removeItem("themePreference"); // Deletes key
    // localStorage.clear(); // Wipes all local storage for this domain
  </script>
</body>
</html>`,
    ext: "html"
  }
};

const CSS_PROJECTS = {
  "Personal-Card": {
    readme: "# Personal Card Project\n\nA visually appealing profile badge card representing a user avatar profile.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Personal Card\n\n## In One Line\nA personal card displays user bio information in a clean, visual card element.\n\n## Think Like This\nA personal profile card is like an employee ID badge or a business card.\n\n## Example\n```css\n.card { border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }\n```\n\n## Result\nA box with rounded edges that casts a soft shadow.\n\n## Remember\nBorders and shadow elevations make cards pop off flat page backgrounds.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personal Card</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f5f5f5; margin: 0; }
    .card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.1); text-align: center; max-width: 250px; transition: transform 0.3s; }
    .card:hover { transform: translateY(-5px); }
    .avatar { width: 100px; height: 100px; border-radius: 50%; border: 3px solid teal; margin-bottom: 15px; }
    h2 { margin: 10px 0 5px; color: #333; }
    p { color: #666; font-size: 14px; margin-bottom: 20px; }
    .btn { background: teal; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; transition: background 0.3s; }
    .btn:hover { background: darkcyan; }
  </style>
</head>
<body>
  <div class="card">
    <img class="avatar" src="https://picsum.photos/100" alt="profile photo">
    <h2>Jane Doe</h2>
    <p>Front-end Developer & UI Designer. Passionate about building visual responsive websites.</p>
    <button class="btn">Connect</button>
  </div>
</body>
</html>
`,
    practice: "Add an unordered list of social media link text items at the bottom of the card styled side-by-side.",
    challenge: "Add a transition so that the image avatar border changes color when you hover over the main card container.",
    summary: "* Cards represent content boundaries.\n* Use `box-shadow` for elevation depth.\n* Hover transforms add interactive feedback loops.",
    diagram: `
  +-------------------------+
  |  Card container         |
  |    (o) Avatar Image     |
  |    Jane Doe (Header)    |
  |    Bio Description      |
  |    [ Connect Button ]   |
  +-------------------------+
`
  },
  "Landing-Page": {
    readme: "# Landing Page Project\n\nA hero layout banner section for a modern product.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Landing Page Hero\n\n## In One Line\nA landing hero section introduces a product and gets users to click an action button.\n\n## Think Like This\nA billboard next to a highway that has a big catchphrase and a website address.\n\n## Example\n```css\n.hero { display: flex; align-items: center; min-height: 100vh; }\n```\n\n## Result\nA fullscreen area centering headline texts and buttons.\n\n## Remember\nClear sizing and call-to-action buttons make landing sections successful.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Landing Hero</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background-color: #111; color: white; }
    header { display: flex; justify-content: space-between; padding: 20px 50px; align-items: center; }
    .logo { font-weight: bold; font-size: 24px; color: gold; }
    nav a { color: white; text-decoration: none; margin-left: 20px; }
    .hero { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 80vh; padding: 0 20px; }
    h1 { font-size: 48px; margin-bottom: 20px; }
    p { font-size: 18px; color: #ccc; max-width: 600px; margin-bottom: 30px; }
    .cta-btn { background: gold; color: black; padding: 15px 30px; border-radius: 8px; font-weight: bold; text-decoration: none; transition: transform 0.2s; }
    .cta-btn:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <header>
    <div class="logo">SaaSLogo</div>
    <nav>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
    </nav>
  </header>
  <main class="hero">
    <h1>Build Websites in Minutes</h1>
    <p>MeetTutorials teaches you how to code visual MERN apps from absolute scratch with real analogies.</p>
    <a class="cta-btn" href="#">Get Started Free</a>
  </main>
</body>
</html>
`,
    practice: "Add an extra secondary outline button next to 'Get Started Free' for 'Watch Tutorial'.",
    challenge: "Add a subtle linear gradient background to the body container to blend from dark grey to black.",
    summary: "* Headers align navigation logos and link rows using Flexbox.\n* Hero sections grab client attention.\n* Sizing links as block badges creates CTAs.",
    diagram: `
  +-------------------------------------+
  | SaaSLogo                Features nav|
  |                                     |
  |      Build Websites in Minutes      |
  |      Slogan details paragraph       |
  |          [ Get Started ]            |
  +-------------------------------------+
`
  },
  "Pricing-Card": {
    readme: "# Pricing Card Project\n\nA pricing selector plan tier display.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Pricing Card\n\n## In One Line\nA pricing card shows features and subscriptions users can purchase.\n\n## Think Like This\nA restaurant menu displaying prices and meal items included in the combo.\n\n## Example\n```css\n.popular { border: 2px solid gold; transform: scale(1.05); }\n```\n\n## Result\nHighlights the middle card to make it look premium.\n\n## Remember\nUsing contrasting accents directs buyers to the target plan.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pricing Plan</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f0f0; margin: 0; }
    .pricing-container { display: flex; gap: 20px; padding: 20px; }
    .plan { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; width: 200px; }
    .popular { border: 2px solid gold; transform: scale(1.05); position: relative; }
    .badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: gold; color: black; font-size: 11px; font-weight: bold; padding: 3px 10px; border-radius: 10px; }
    .price { font-size: 32px; font-weight: bold; margin: 15px 0; }
    ul { list-style: none; padding: 0; margin-bottom: 25px; }
    li { margin-bottom: 10px; color: #555; }
    .btn { background: black; color: white; border: none; width: 100%; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
    .popular .btn { background: gold; color: black; }
  </style>
</head>
<body>
  <div class="pricing-container">
    <div class="plan">
      <h3>Basic</h3>
      <div class="price">$5/mo</div>
      <ul>
        <li>1 Project</li>
        <li>10 GB Storage</li>
      </ul>
      <button class="btn">Select Basic</button>
    </div>
    <div class="plan popular">
      <div class="badge">POPULAR</div>
      <h3>Pro</h3>
      <div class="price">$15/mo</div>
      <ul>
        <li>10 Projects</li>
        <li>100 GB Storage</li>
      </ul>
      <button class="btn">Select Pro</button>
    </div>
  </div>
</body>
</html>
`,
    practice: "Add a third plan card for 'Enterprise Plan' priced at $49/mo.",
    challenge: "Add a transition effect so the cards enlarge slightly when hovered.",
    summary: "* Pricing containers group cards side-by-side using Flexbox.\n* Popular badges highlight recommendations.\n* Outline buttons separate plan levels.",
    diagram: `
  +-------------+   +=============+
  |  Basic      |   |   POPULAR   |
  |  $5/mo      |   |   Pro       |
  |  * feature  |   |   $15/mo    |
  |  [ Select ] |   |   [ Buy ]   |
  +-------------+   +=============+
`
  },
  "Responsive-Portfolio-Section": {
    readme: "# Responsive Portfolio Section Project\n\nA three-column grid photo gallery portfolio that auto-adapts to mobile screens.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Responsive Portfolio Grid\n\n## In One Line\nA responsive grid arranges showcase items that stack vertically on mobile.\n\n## Think Like This\nOrganizing photos on a wall gallery. 3 side-by-side on a wide wall, but stacked in a single row on a narrow column.\n\n## Example\n```css\n@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }\n```\n\n## Result\nGrid columns adjust dynamically from 3 to 1.\n\n## Remember\nUsing fractional units (fr) lets CSS Grid calculate column widths automatically.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Portfolio Grid</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #fafafa; margin: 0; padding: 40px 20px; }
    h1 { text-align: center; margin-bottom: 40px; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px; margin: 0 auto; }
    .card { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    img { width: 100%; height: 200px; object-fit: cover; display: block; }
    .info { padding: 15px; }
    h3 { margin: 0 0 10px; }
    @media (max-width: 768px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <h1>My Work</h1>
  <div class="grid">
    <div class="card">
      <img src="https://picsum.photos/400/300?random=1" alt="project image">
      <div class="info">
        <h3>E-Commerce Webapp</h3>
        <p>A full stack MERN online store design.</p>
      </div>
    </div>
    <div class="card">
      <img src="https://picsum.photos/400/300?random=2" alt="project image">
      <div class="info">
        <h3>Social Network</h3>
        <p>Chat app built with socket rooms.</p>
      </div>
    </div>
    <div class="card">
      <img src="https://picsum.photos/400/300?random=3" alt="project image">
      <div class="info">
        <h3>Portfolio Site</h3>
        <p>Static responsive showcase website.</p>
      </div>
    </div>
  </div>
</body>
</html>
`,
    practice: "Add a fourth project card to the grid.",
    challenge: "Add a zoom hover effect (`transform: scale(1.05)`) on the card image container with a transition.",
    summary: "* CSS Grid repeat fractional definitions create layout grids.\n* Media queries override column counts at narrow breakpoints.\n* `object-fit: cover` ensures photos fill frames cleanly.",
    diagram: `
  Desktop Grid (3 cols):  [ Card 1 ]  [ Card 2 ]  [ Card 3 ]
  Mobile List (1 col):    [ Card 1 ]
                          [ Card 2 ]
                          [ Card 3 ]
`
  }
};

const JS_PROJECTS = {
  "Counter-App": {
    readme: "# Counter App Project\n\nA simple interactive counter with increment, decrement, and reset actions.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Counter App\n\n## In One Line\nA counter application increases, decreases, and resets a number on screen.\n\n## Think Like This\nA tally counter clicker used by stadium gatekeepers to count visitors.\n\n## Example\n```javascript\nlet count = 0;\ncount++;\n```\n\n## Result\nUpdates count to 1.\n\n## Remember\nEvent listeners catch user button clicks and run updates.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Counter App</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #0f172a, #1e1b4b); color: white; margin: 0; }
    .counter-card { background: rgba(255, 255, 255, 0.05); padding: 40px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 12px 24px rgba(0,0,0,0.3); text-align: center; backdrop-filter: blur(10px); }
    h1 { margin: 0 0 20px; font-size: 28px; letter-spacing: 1px; color: #a5b4fc; }
    #value { font-size: 72px; font-weight: bold; margin: 20px 0; color: #818cf8; transition: transform 0.1s; }
    .btn-group { display: flex; gap: 15px; }
    button { background: #4f46e5; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px; transition: background 0.2s, transform 0.1s; }
    button:hover { background: #6366f1; transform: translateY(-2px); }
    button:active { transform: translateY(0); }
    button.reset { background: #334155; }
    button.reset:hover { background: #475569; }
  </style>
</head>
<body>
  <div class="counter-card">
    <h1>Tally Counter</h1>
    <div id="value">0</div>
    <div class="btn-group">
      <button id="decrease">Decrease</button>
      <button id="reset" class="reset">Reset</button>
      <button id="increase">Increase</button>
    </div>
  </div>
  <script>
    let count = 0;
    const value = document.getElementById('value');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');

    increaseBtn.addEventListener('click', () => {
      count++;
      value.innerText = count;
      value.style.transform = 'scale(1.1)';
      setTimeout(() => value.style.transform = 'scale(1)', 100);
    });

    decreaseBtn.addEventListener('click', () => {
      count--;
      value.innerText = count;
      value.style.transform = 'scale(0.9)';
      setTimeout(() => value.style.transform = 'scale(1)', 100);
    });

    resetBtn.addEventListener('click', () => {
      count = 0;
      value.innerText = count;
    });
  </script>
</body>
</html>
`,
    practice: "Add a new button that increases the counter by 5 on every click.",
    challenge: "Add a condition that turns the number color red if count is negative, green if positive, and white if zero.",
    summary: "* Variables hold the state (current number value).\n* DOM Selection grabs the screen labels and buttons.\n* Click listeners trigger calculations and update layout tags.",
    diagram: `
  +-------------------------------------+
  |           Tally Counter             |
  |                [0]                  |
  | [ Decrease ]  [ Reset ]  [ Increase]|
  +-------------------------------------+
`
  },
  "Todo-List": {
    readme: "# Todo List Project\n\nA simple task manager where you can add and remove task items.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Todo List\n\n## In One Line\nA Todo List app adds and removes list items dynamically based on inputs.\n\n## Think Like This\nA notebook checklist page. You write items on blank lines, and cross them off when completed.\n\n## Example\n```javascript\nlet li = document.createElement('li');\nli.innerText = 'New Task';\nlist.appendChild(li);\n```\n\n## Result\nAdds a new bullet task item on your webpage.\n\n## Remember\n`document.createElement` constructs new HTML tags in memory, and `appendChild` inserts them.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Todo List</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; color: white; margin: 0; }
    .todo-container { background: #1e293b; padding: 30px; border-radius: 12px; width: 350px; box-shadow: 0 10px 20px rgba(0,0,0,0.25); }
    h1 { margin: 0 0 20px; font-size: 24px; text-align: center; color: #38bdf8; }
    .input-row { display: flex; gap: 10px; margin-bottom: 20px; }
    input { flex: 1; padding: 10px; border: 1px solid #475569; border-radius: 6px; background: #0f172a; color: white; font-size: 14px; }
    input:focus { outline: none; border-color: #38bdf8; }
    button { background: #0284c7; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; transition: background 0.2s; }
    button:hover { background: #0369a1; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #334155; }
    li.completed span { text-decoration: line-through; color: #64748b; }
    .delete-btn { background: #ef4444; padding: 5px 10px; font-size: 12px; }
    .delete-btn:hover { background: #dc2626; }
    .todo-text { cursor: pointer; flex: 1; }
  </style>
</head>
<body>
  <div class="todo-container">
    <h1>My Tasks</h1>
    <div class="input-row">
      <input type="text" id="task-input" placeholder="Add a new task...">
      <button id="add-btn">Add</button>
    </div>
    <ul id="task-list"></ul>
  </div>
  <script>
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    function addTask() {
      const text = taskInput.value.trim();
      if (text === '') return;

      const li = document.createElement('li');

      const span = document.createElement('span');
      span.innerText = text;
      span.className = 'todo-text';
      span.addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      const delBtn = document.createElement('button');
      delBtn.innerText = 'Delete';
      delBtn.className = 'delete-btn';
      delBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });

      li.appendChild(span);
      li.appendChild(delBtn);
      taskList.appendChild(li);

      taskInput.value = '';
    }

    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') addTask();
    });
  </script>
</body>
</html>
`,
    practice: "Add a count display showing the total number of tasks currently in the list.",
    challenge: "Store tasks in localStorage so they remain saved when you refresh the webpage.",
    summary: "* dynamically generate HTML nodes using `document.createElement()`.\n* Remove child nodes from container lists using `removeChild()`.\n* Toggle text-decoration classes using class list methods.",
    diagram: `
  +-------------------------------------+
  |               My Tasks              |
  |  [ New Task input      ] [ Add ]    |
  |                                     |
  |  * Learn JS DOM           [Delete]  |
  |  * ~~HTML Basics~~        [Delete]  |
  +-------------------------------------+
`
  },
  "Digital-Clock": {
    readme: "# Digital Clock Project\n\nA beautiful fullscreen digital clock displaying real-time hours, minutes, and seconds.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Digital Clock\n\n## In One Line\nA digital clock reads the system time and displays it on screen every second.\n\n## Think Like This\nChecking your wrist watch every second and updating the hands on a blackboard.\n\n## Example\n```javascript\nsetInterval(() => {\n  let now = new Date();\n  console.log(now.toLocaleTimeString());\n}, 1000);\n```\n\n## Result\nPrints the time in terminal every 1 second.\n\n## Remember\n`setInterval` triggers a callback function repeatedly at set time intervals.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Clock</title>
  <style>
    body { font-family: 'Courier New', Courier, monospace; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; background-color: #0b0f19; color: #00ffcc; margin: 0; text-shadow: 0 0 10px #00ffcc; }
    .clock-container { border: 2px solid #00ffcc; padding: 30px 60px; border-radius: 12px; background: rgba(0,255,204,0.05); text-align: center; }
    #time { font-size: 64px; font-weight: bold; }
    #date { font-size: 20px; color: #8892b0; margin-top: 15px; text-shadow: none; }
    button { margin-top: 20px; background: #00ffcc; color: black; border: none; padding: 10px 20px; border-radius: 4px; font-weight: bold; cursor: pointer; text-shadow: none; box-shadow: 0 0 5px #00ffcc; }
    button:hover { background: white; box-shadow: 0 0 15px white; }
  </style>
</head>
<body>
  <div class="clock-container">
    <div id="time">00:00:00</div>
    <div id="date">Loading Date...</div>
    <button id="pause-btn">Pause Clock</button>
  </div>
  <script>
    const timeDisplay = document.getElementById('time');
    const dateDisplay = document.getElementById('date');
    const pauseBtn = document.getElementById('pause-btn');

    let isPaused = false;

    function updateClock() {
      if (isPaused) return;
      const now = new Date();
      timeDisplay.innerText = now.toLocaleTimeString();
      
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateDisplay.innerText = now.toLocaleDateString(undefined, options);
    }

    const intervalId = setInterval(updateClock, 1000);
    updateClock(); // Initial run

    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseBtn.innerText = isPaused ? 'Resume Clock' : 'Pause Clock';
      if (isPaused) {
        timeDisplay.style.color = '#8892b0';
        timeDisplay.style.textShadow = 'none';
      } else {
        timeDisplay.style.color = '#00ffcc';
        timeDisplay.style.textShadow = '0 0 10px #00ffcc';
      }
    });
  </script>
</body>
</html>
`,
    practice: "Modify options parameters to show the date in short format instead of long description format.",
    challenge: "Add a toggle button that switches the clock display mode from 12-hour AM/PM format to 24-hour format.",
    summary: "* `Date` object reads current system times.\n* `setInterval` schedules ticking routines.\n* State flags block screen prints during pause triggers.",
    diagram: `
  [ setInterval callback ] ---> triggers every 1000ms ---> [ isPaused? ]
                                                                |
                                                      +---------+---------+
                                                      | Yes               | No
                                                      v                   v
                                                 [ Do Nothing ]   [ Update DOM time ]
`
  },
  "Weather-Widget": {
    readme: "# Offline Weather Widget Project\n\nA weather application widget querying mock database records for city temperatures.\n\n## Setup Instructions\n1. Open this folder in VS Code.\n2. Launch \"Live Server\" on `index.html` to preview.\n",
    quick: "# Weather Widget\n\n## In One Line\nA weather widget simulates requesting forecasts for specific cities.\n\n## Think Like This\nAsking a local tourist booth agent (mock database) what the weather is like in Paris, rather than flying there to check.\n\n## Example\n```javascript\nlet mockDB = { 'paris': '20C' };\nconsole.log(mockDB['paris']);\n```\n\n## Result\nPrints '20C'.\n\n## Remember\nMock datasets are essential for testing code layouts when external APIs are unavailable.\n",
    source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Offline Weather Widget</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background-color: #0f172a; color: white; margin: 0; }
    .widget { background: linear-gradient(180deg, #1e293b, #0f172a); border: 1px solid rgba(255,255,255,0.1); padding: 30px; border-radius: 16px; width: 300px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h1 { font-size: 22px; margin-bottom: 20px; color: #38bdf8; }
    input { width: calc(100% - 24px); padding: 10px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: white; margin-bottom: 15px; font-size: 14px; text-align: center; }
    button { background: #38bdf8; color: black; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; transition: background 0.2s; }
    button:hover { background: #7dd3fc; }
    .weather-info { margin-top: 25px; transition: opacity 0.3s ease; }
    .temp { font-size: 48px; font-weight: bold; margin: 10px 0; color: #f59e0b; }
    .city { font-size: 20px; font-weight: 500; }
    .desc { color: #94a3b8; font-size: 14px; text-transform: capitalize; }
    .error { color: #f87171; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="widget">
    <h1>Offline Weather</h1>
    <input type="text" id="city-input" placeholder="Enter City (e.g. Paris, London)...">
    <button id="search-btn">Search Forecast</button>
    <div id="weather-display" class="weather-info" style="opacity: 0;">
      <div id="city-name" class="city">City</div>
      <div id="temp-val" class="temp">0°C</div>
      <div id="weather-desc" class="desc">Clear Sky</div>
    </div>
    <div id="error-display" class="error" style="display: none;">City not found in offline DB!</div>
  </div>
  <script>
    const mockWeatherDB = {
      "london": { temp: "15°C", desc: "light rain and mist", color: "#60a5fa" },
      "paris": { temp: "18°C", desc: "partly cloudy", color: "#34d399" },
      "new york": { temp: "22°C", desc: "sunny intervals", color: "#fbbf24" },
      "tokyo": { temp: "26°C", desc: "humid and warm", color: "#f87171" }
    };

    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const display = document.getElementById('weather-display');
    const errorDisplay = document.getElementById('error-display');

    const cityName = document.getElementById('city-name');
    const tempVal = document.getElementById('temp-val');
    const weatherDesc = document.getElementById('weather-desc');

    searchBtn.addEventListener('click', () => {
      const cityQuery = cityInput.value.toLowerCase().trim();
      
      // Hide displays first for transition
      display.style.opacity = 0;
      errorDisplay.style.display = 'none';

      setTimeout(() => {
        if (mockWeatherDB[cityQuery]) {
          const data = mockWeatherDB[cityQuery];
          cityName.innerText = cityQuery.toUpperCase();
          tempVal.innerText = data.temp;
          tempVal.style.color = data.color;
          weatherDesc.innerText = data.desc;
          
          display.style.opacity = 1;
        } else {
          errorDisplay.style.display = 'block';
        }
      }, 300);
    });
  </script>
</body>
</html>
`,
    practice: "Add a mock record for Tokyo showing 26°C with rainy characteristics.",
    challenge: "Extend the mock database to store wind speed details (e.g. 15km/h) and display them in a separate paragraph inside the widget.",
    summary: "* Weather widgets fetch state parameters from keyed dictionaries.\n* User query sanitization is handled using `.toLowerCase().trim()`.\n* Set timeout timers schedule opacity transitions.",
    diagram: `
  [ Search Button Click ]
            |
            v
  [ Sanitized Input ] === query ===> [ mockWeatherDB ]
                                            |
                                  +---------+---------+
                                  | Found             | Not Found
                                  v                   v
                        [ Update card details ]  [ Show error msg ]
`
  }
};

function generateRootFiles() {
  fs.mkdirSync(BASE_DIR, { recursive: true });
  
  const readmeContent = `# 🚀 Welcome to MeetTutorials

MeetTutorials is the world's most beginner-friendly, cloneable MERN learning repository designed to teach web development from absolute scratch. 

Instead of reading dry text, this repository is designed so you can clone the code, read the explanations, run the examples, and solve the practice challenges directly on your local computer.

## Learn:
*   ✅ **HTML** - Structure the Web
*   ✅ **CSS** - Style the Web
*   ✅ **JavaScript** - Power the Web
*   ✅ **Git & GitHub** - Version Control & Collaboration
*   ✅ **Bootstrap & Tailwind** - Modern CSS Frameworks
*   ✅ **React** - Interactive UI Components
*   ✅ **Node.js & Express.js** - Server-side APIs
*   ✅ **MongoDB** - Database storage
*   ✅ **MERN Stack** - Building Full Stack Applications

## Designed for:
*   ✓ **Students** seeking clean tutorials.
*   ✓ **Beginners** with zero coding background.
*   ✓ **Self-Taught Developers** learning to build products.
*   ✓ **Future Freelancers** looking to create a GitHub portfolio.

No prior experience required.

---

## Repository Learning Structure

Every single topic in this repository is designed with a standard layout:
1.  \`01-quick-guide.md\` - Ultra-short explanations & real-world analogies.
2.  \`02-example.html\` (or other script/style extension) - Annotated code examples.
3.  \`03-practice-task.md\` - Small tasks to build.
4.  \`04-challenge-task.md\` - Harder challenges.
5.  \`05-summary.md\` - Quick bullet takeaways.
6.  \`06-visual-guide.md\` - Visual text diagrams.

---

## Getting Started
To get started:
1.  Read [START-HERE.md](./START-HERE.md) to set up your environment.
2.  Examine [ROADMAP.md](./ROADMAP.md) to plan your learning journey.
3.  Open the \`01-HTML\` folder and start learning!
`;
  fs.writeFileSync(path.join(BASE_DIR, "README.md"), readmeContent, 'utf-8');
  
  const startHereContent = `# 🏁 Get Started Here

Welcome to your web development journey! Follow these simple steps to set up your environment and start learning.

## Step 1: Install a Code Editor
You need a program to edit files. We recommend **Visual Studio Code (VS Code)**.
*   Download it for free: [code.visualstudio.com](https://code.visualstudio.com/)

## Step 2: Clone this Repository
If you know Git, open your terminal and run:
\`\`\`bash
git clone https://github.com/your-username/MeetTutorials.git
\`\`\`
If you are an absolute beginner, simply click the green **Code** button at the top of the GitHub page and select **Download ZIP**. Extract the folder to your computer.

## Step 3: Set up Extensions in VS Code
Open VS Code, click the Extensions tab on the left sidebar (looks like four small boxes), and search for and install:
1.  **Live Server** (by Ritwick Dey) - Allows you to launch a local server and see your HTML pages update in real-time in the browser.

## Step 4: Open the Folder
In VS Code, go to **File -> Open Folder** and select the \`MeetTutorials\` folder you cloned or extracted.

## Step 5: Start with HTML
Open \`01-HTML/LEVEL-01-BEGINNER/01-Introduction/01-quick-guide.md\` and read the first lesson!
`;
  fs.writeFileSync(path.join(BASE_DIR, "START-HERE.md"), startHereContent, 'utf-8');

  const roadmapContent = `# 🗺️ MeetTutorials Learning Roadmap

Below is the complete path of your MERN stack learning journey. Move step-by-step from zero to a job-ready developer!

\`\`\`text
[01-HTML]          <-- Structuring the skeleton of a web page
   │
[02-CSS]           <-- Styling (colors, layouts, responsive screens)
   │
[03-JAVASCRIPT]    <-- Programming logic, functions, browser events
   │
[04-GIT & GITHUB]  <-- Saving versions, pushing code to cloud portfolio
   │
[06-BOOTSTRAP/07-TAILWIND] <-- Rapid styling utilities
   │
[08-REACT]         <-- Components, single page applications, state management
   │
[09-NODEJS & 10-EXPRESSJS] <-- Creating backend API servers
   │
[11-MONGODB]       <-- Storing database documents (users, posts, products)
   │
[12-MERN]          <-- Gluing Frontend and Backend together
   │
[13-PROJECTS]      <-- Full-stack production portfolios
   │
[20-DEVELOPER-MINDSET] <-- How to learn, debug, and build products
\`\`\`

## Recommended Timeline
*   **Weeks 1-2**: HTML & CSS Basics
*   **Weeks 3-5**: JavaScript & Programming Logic
*   **Week 6**: Git & GitHub portfolio setups
*   **Weeks 7-9**: React Framework
*   **Weeks 10-12**: Back-end (Node, Express, Mongo)
*   **Weeks 13+**: Building Full MERN Apps & Career Prep
`;
  fs.writeFileSync(path.join(BASE_DIR, "ROADMAP.md"), roadmapContent, 'utf-8');
}

// Wipes folder first, then writes files
function generateSection(sectionName, sectionData, projectsData) {
  const sectionRoot = path.join(BASE_DIR, sectionName);
  fs.mkdirSync(sectionRoot, { recursive: true });
  
  // Write section README
  const sectionReadme = `# ${sectionName.replace("-", " ")}
  
Welcome to the ${sectionName.split("-")[1]} curriculum!

This section is organized into 5 learning levels. Move step-by-step from beginner to project building!
`;
  fs.writeFileSync(path.join(sectionRoot, "README.md"), sectionReadme, 'utf-8');

  const levels = LEVELS[sectionName];
  for (const level of Object.keys(levels)) {
    const levelDir = path.join(sectionRoot, level);
    fs.mkdirSync(levelDir, { recursive: true });
    
    for (const topic of levels[level]) {
      const topicDir = path.join(levelDir, topic);
      
      // Wipe the folder entirely to ensure zero remnants of old file names
      if (fs.existsSync(topicDir)) {
        fs.rmSync(topicDir, { recursive: true, force: true });
      }
      fs.mkdirSync(topicDir, { recursive: true });
      
      if (level === "LEVEL-05-PROJECTS") {
        const projData = projectsData[topic];
        const ext = projData.ext || "html";
        const files = {
          "01-quick-guide.md": projData.quick,
          [`02-example.${ext}`]: projData.source,
          "03-practice-task.md": projData.practice,
          "04-challenge-task.md": `# Challenge Task: ${topic}\n\n${projData.challenge}`,
          "05-summary.md": projData.summary,
          "06-visual-guide.md": `# Visual Guide: ${topic}\n\n\`\`\`text\n${projData.diagram}\n\`\`\``
        };
        for (const [filename, filecontent] of Object.entries(files)) {
          fs.writeFileSync(path.join(topicDir, filename), filecontent, 'utf-8');
        }
        console.log(`Created project folder: ${topicDir}`);
        continue;
      }
      
      const data = sectionData[topic];
      
      const quickGuideMd = `# ${data.title}

## In One Line
${data.line}

## Think Like This
${data.think}

## Example
\`\`\`${data.ext}
${data.example}
\`\`\`

## Result
${data.result}

## Remember
${data.remember}
`;
      
      const exampleCodeFile = "02-example." + data.ext;
      const exampleContent = data.example_code;
      
      const practiceTask = `# Practice Task: ${data.title}

## Objective
Apply what you've learned in this lesson by completing a basic exercise.

## Step-by-Step Instructions
${data.practice}
`;
      
      const challengeTask = `# Challenge Task: ${data.title}

## Objective
Push your understanding further by building a slightly more complex layout.

## Challenge Instructions
${data.challenge}
`;
      
      const summary = `# Summary: ${data.title}

Here is a quick cheat sheet of what we covered in this lesson:

${data.summary}
`;
      
      const visualGuide = `# Visual Guide: ${data.title}

\`\`\`text
${data.diagram}
\`\`\`
`;
      
      const topicFiles = {
        "01-quick-guide.md": quickGuideMd,
        [exampleCodeFile]: exampleContent,
        "03-practice-task.md": practiceTask,
        "04-challenge-task.md": challengeTask,
        "05-summary.md": summary,
        "06-visual-guide.md": visualGuide
      };
      
      for (const [filename, filecontent] of Object.entries(topicFiles)) {
        fs.writeFileSync(path.join(topicDir, filename), filecontent, 'utf-8');
      }
      console.log(`Generated topic files: ${topicDir}`);
    }
  }
}


const DEV_SETUP_FILES = {
  "01-VS-Code.md": "# 🛠️ Code Editor: Visual Studio Code\n\nVisual Studio Code (VS Code) is the most popular, free, and lightweight code editor used by professional web developers worldwide.\n\n## 📥 Installation\n\n1.  **Download VS Code**: Go to [code.visualstudio.com](https://code.visualstudio.com/).\n2.  **Select your Operating System**:\n    *   **Windows**: Download the User Installer, run the `.exe`, and check the boxes for **\"Add to PATH\"** and **\"Open with Code\"**.\n    *   **macOS**: Download the `.zip` file, unzip it, and drag the Visual Studio Code application into your **Applications** folder.\n    *   **Linux**: Download the `.deb` (Debian/Ubuntu) or `.rpm` package and install it.\n\n## 🧭 Interface Overview\n\nWhen you open VS Code, you will see a clean screen split into key areas:\n\n```text\n+-----------------------------------------------------------------+\n| (O) File  Edit  Selection  View  Go  Run  Terminal  Help         |\n+---+-------------------------------------------------------------+\n|   | EXPLORER                                                    |\n| A |   > MeetTutorials                                           |\n| C |     > 01-HTML                                               |\n| T |       > LEVEL-01-BEGINNER                                   |\n| I |         > 01-Introduction                                   |\n| V |           - 01-quick-guide.md  <-- [ACTIVE EDITOR WINDOW]   |\n| I |                                                             |\n| T |                                                             |\n| Y |                                                             |\n|   |                                                             |\n+---+-------------------------------------------------------------+\n|   | TERMINAL (Ctrl+`)                                           |\n|   | ps c:\\projects\\MeetTutorials> _                             |\n+---+-------------------------------------------------------------+\n```\n\n1.  **Activity Bar (Far Left)**: Icons to switch views: Explorer (Files), Search, Source Control (Git), Run/Debug, and Extensions.\n2.  **Sidebar (Left)**: Shows your active files, folders, and settings.\n3.  **Editor Window (Center)**: Where you read and write your actual code.\n4.  **Terminal (Bottom)**: Built-in command line where you can run Git commands and Node.js. Open it with `Ctrl + `` (or `Cmd + `` on Mac).\n\n## 📁 How to Open a Project Folder\n\nTo start learning and writing code:\n1.  Launch VS Code.\n2.  Go to **File** -> **Open Folder** (on Mac: **File** -> **Open...**).\n3.  Navigate to and select the `MeetTutorials` folder on your computer.\n4.  Click **Select Folder**. You will now see all lessons in the left sidebar!\n",
  "02-Live-Server.md": "# 🌐 Live Server Extension\n\nWhen writing HTML and CSS, you want to see your changes instantly in the browser without manually refreshing the page. **Live Server** makes this possible.\n\n## 📥 How to Install\n\n1.  Open **VS Code**.\n2.  Click the **Extensions** icon on the Activity Bar (looks like four blocks, or press `Ctrl+Shift+X` / `Cmd+Shift+X`).\n3.  Search for **\"Live Server\"** (by Ritwick Dey).\n4.  Click the blue **Install** button.\n\n```text\n+---------------------------------------------+\n| EXTENSIONS                                  |\n|  [ Live Server            ]  [ Install ]    |\n|  by Ritwick Dey                             |\n+---------------------------------------------+\n```\n\n## 🚀 How to Launch Live Server\n\nOnce installed:\n1.  Open any `.html` file in your editor (for example, `01-HTML/LEVEL-01-BEGINNER/01-Introduction/02-example.html`).\n2.  Look at the **Status Bar** at the bottom-right corner of VS Code.\n3.  Click the **Go Live** button.\n4.  Alternatively, **right-click** anywhere inside the editor window of the HTML file and select **Open with Live Server**.\n\n```text\n+-------------------------------------------------------+\n|  Right-click menu:                                    |\n|   Format Document                                     |\n|   Change All Occurrences                              |\n|   [ Open with Live Server ]  <-- Click this!          |\n+-------------------------------------------------------+\n```\n\n## 🔄 Auto-Reload in Action\n\n*   Live Server will automatically launch your default web browser and open the HTML page (usually at `http://127.0.0.1:5500/`).\n*   Keep VS Code on one half of your screen and the browser on the other half.\n*   Edit a heading in VS Code and press **Save (Ctrl+S)**.\n*   Watch the browser update instantly without you clicking refresh!\n",
  "03-Chrome-DevTools.md": "# 🔍 Chrome Developer Tools (DevTools)\n\nChrome Developer Tools (DevTools) is a suite of web developer tools built directly into the Google Chrome browser. It lets you inspect, debug, and test your web pages in real-time.\n\n## 🛠️ How to Open DevTools\n\nOpen Google Chrome, navigate to any webpage, and use one of these methods:\n*   **Right-Click Inspect**: Right-click on any element on the page and select **Inspect**.\n*   **Keyboard Shortcut**: Press `F12` (or `Ctrl+Shift+I` on Windows/Linux, `Cmd+Option+I` on Mac).\n\n## 🧱 The Elements Panel\n\nThe **Elements** panel shows the HTML structure of the page on the left, and the CSS styles on the right.\n\n```text\n+-----------------------------------------------------------------+\n| ELEMENTS  CONSOLE  SOURCES  NETWORK                             |\n+-----------------------------------+-----------------------------+\n| <body>                            | Styles                      |\n|   <h1>Welcome</h1>                | h1 {                        |\n|   <p class=\"intro\">Text</p>       |   color: blue; <-- Click to |\n| </body>                           | }                  change!  |\n+-----------------------------------+-----------------------------+\n```\n\n*   **Edit HTML Live**: Double-click any text inside a tag in the Elements panel, change it, and press Enter. The webpage changes instantly (temporary until refresh).\n*   **Edit CSS Live**: Select an element, then click on the Styles tab on the right. You can check/uncheck checkboxes to toggle properties or add new styles live to see how they look!\n\n## 💬 The Console Panel\n\nThe **Console** panel is where you see JavaScript errors, warnings, and custom log messages.\n\n*   **View Log Outputs**: If you write `console.log(\"Hello from JS\")` in your script, it prints here.\n*   **Interactive JavaScript Playground**: You can type JavaScript commands directly into the console prompt (e.g., type `2 + 2` and press Enter) and see the results instantly!\n",
  "04-Git-Installation.md": "# 🐙 Git Installation & Configuration\n\nGit is the industry-standard version control system that tracks the history of your project files. It is the core tool that powers remote code sharing and collaboration.\n\n## 📥 Installation\n\n### 💻 Windows\n1.  Go to [git-scm.com](https://git-scm.com/).\n2.  Download the **Windows Installer**.\n3.  Run the setup program. Click **Next** to accept defaults.\n4.  **Important Default Options**:\n    *   Ensure **\"Git Bash Here\"** is checked.\n    *   Select **\"Use Git from the command line and also from 3rd-party software\"** (recommended).\n    *   Select **\"Checkout Windows-style, commit Unix-style line endings\"**.\n\n### 🍎 macOS\n1.  Open your Terminal application (Finder -> Applications -> Utilities -> Terminal).\n2.  Type `git --version` and press Enter.\n3.  If Git is not installed, a popup window will ask if you want to install Xcode Command Line Tools. Click **Install**.\n4.  Alternatively, install it via Homebrew: `brew install git`.\n\n### 🐧 Linux\nOpen your terminal and run the package manager command:\n*   **Debian/Ubuntu**: `sudo apt install git`\n*   **Fedora/RedHat**: `sudo dnf install git`\n\n---\n\n## 🔍 Verify Installation\n\nOpen a terminal (or Git Bash on Windows) and run:\n```bash\ngit --version\n```\nThis should print something like `git version 2.45.0` (any version starting with 2.x is perfect).\n\n---\n\n## 👤 Set Your Developer Identity\n\nGit records who makes changes to files. You must set your username and email address. Run these commands in your terminal:\n\n```bash\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"your.email@example.com\"\n```\n\nVerify your settings:\n```bash\ngit config --list\n```\n",
  "05-NodeJS-Installation.md": "# 🟢 Node.js Installation\n\nNode.js is a runtime environment that allows you to run JavaScript code outside of a web browser (like on your computer's terminal or backend servers). It comes bundled with **NPM** (Node Package Manager).\n\n## 📥 Installation\n\n1.  Go to the official website: [nodejs.org](https://nodejs.org/).\n2.  Download the **LTS (Long Term Support)** version. The LTS version is stable and recommended for most users.\n3.  Run the downloaded installer (`.msi` for Windows, `.pkg` for Mac).\n4.  Click **Next** through the installation wizard, keeping all default settings selected.\n\n```text\n+---------------------------------------------+\n| Node.js Setup                               |\n|  [x] Install core Node.js runtime           |\n|  [x] Install npm (Node Package Manager)     |\n|  [x] Add to PATH (highly recommended)       |\n+---------------------------------------------+\n```\n\n---\n\n## 🔍 Verify Installation\n\nOnce installation completes, close any open terminals, open a new terminal, and check the installed versions:\n\n```bash\n# Check Node.js version\nnode -v\n\n# Check npm (Node Package Manager) version\nnpm -v\n```\n\nIf these commands output version numbers (e.g. `v20.12.2` and `10.5.0`), congratulations! Node.js is ready to run.\n\n---\n\n## 💡 What is NPM?\nNPM (Node Package Manager) is the world's largest registry of reusable code packages. It allows you to download libraries, frameworks, and utility tools directly from your terminal using commands like `npm install`.\n",
  "06-Useful-Extensions.md": "# 🔌 Recommended VS Code Extensions\n\nExtensions add powerful new features, language support, and automation tools to VS Code, making your development workflow significantly faster and more enjoyable.\n\n## 🏆 Top Extensions for Beginners\n\nTo install these, click the **Extensions** icon in the VS Code Sidebar, search for the extension name, and click **Install**.\n\n### 1. Prettier - Code formatter (by Prettier)\n*   **What it does**: Automatically cleans up and aligns your code syntax (spacing, quotes, line wraps) whenever you save.\n*   **Why you need it**: Keeps your code looking clean and professional, and prevents syntax layout arguments.\n*   **Configuration**: To make it format on save, go to **Settings** (Ctrl+, / Cmd+,), search for `\"Format On Save\"`, and check the checkbox.\n\n### 2. Auto Rename Tag (by Jun Han)\n*   **What it does**: When you rename an HTML tag (e.g., changing `<h1>` to `<h2>`), it automatically updates the corresponding closing tag (`</h1>` to `</h2>`) instantly.\n*   **Why you need it**: Prevents mismatched tag syntax errors and saves time.\n\n### 3. GitLens - Git supercharged (by GitKraken)\n*   **What it does**: Displays unobtrusive text annotations next to the active code line, showing who committed that line, when, and with what commit message.\n*   **Why you need it**: Helps you understand file history and changes at a glance.\n\n### 4. Material Icon Theme (by Philipp Kief)\n*   **What it does**: Replaces default VS Code file/folder icons with beautiful, colorful Material Design icons matching specific file types (HTML, CSS, JS, Git).\n*   **Why you need it**: Makes your file explorer look premium and easy to scan.\n",
  "07-Keyboard-Shortcuts.md": "# ⌨️ Essential Keyboard Shortcuts\n\nLearning keyboard shortcuts will double your coding speed. Instead of clicking menus or using the mouse, use these standard VS Code keyboard shortcuts.\n\n## 💾 Core File Shortcuts\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **Save File** (Run this constantly!) | `Ctrl + S` | `Cmd + S` |\n| **Open File** | `Ctrl + O` | `Cmd + O` |\n| **Close Editor Tab** | `Ctrl + W` | `Cmd + W` |\n| **Open Settings** | `Ctrl + ,` | `Cmd + ,` |\n\n## 📝 Code Editing Shortcuts\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **Comment / Un-comment Line** | `Ctrl + /` | `Cmd + /` |\n| **Copy Line Up / Down** | `Shift + Alt + Up/Down` | `Shift + Option + Up/Down` |\n| **Move Line Up / Down** | `Alt + Up/Down` | `Option + Up/Down` |\n| **Find Text in File** | `Ctrl + F` | `Cmd + F` |\n| **Replace Text in File** | `Ctrl + H` | `Cmd + H` |\n| **Select All Occurrences** | `Ctrl + Shift + L` | `Cmd + Shift + L` |\n\n## 🖥️ Terminal & View Shortcuts\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **Open Built-in Terminal** | `Ctrl + \\` ` | `Cmd + \\` ` |\n| **Toggle Sidebar** | `Ctrl + B` | `Cmd + B` |\n| **Open Command Palette** | `Ctrl + Shift + P` | `Cmd + Shift + P` |\n| **Zoom In / Zoom Out** | `Ctrl + =` / `Ctrl + -` | `Cmd + =` / `Cmd + -` |\n"
};
const GIT_DATA = {
  "01-Introduction": {
    "title": "Git Introduction",
    "line": "Git is a version control system that tracks changes in your code files over time.",
    "think": "A video game save-point system. If you fight a boss (write code) and fail, you can load your last save point (commit) instead of starting the whole game from scratch.",
    "example": "git --version",
    "result": "Prints the installed Git version (e.g., git version 2.45.0.windows.1).",
    "remember": "Git is local to your computer. GitHub is a cloud storage website that hosts Git repositories.",
    "summary": "* Version control records history changes.\n* Git works entirely locally without needing internet.\n* Allows collaboration, experiment branching, and rollback safety.",
    "diagram": "\n+---------------------------------------------+\n| Local Files ---> [ Git History (Saves) ]    |\n|                                             |\n|  Save 1 (v1.0) --> Save 2 (v1.1) --> v1.2   |\n|  (Init Code)      (Added Header)  (Current) |\n+---------------------------------------------+\n",
    "practice": "Check if Git is installed on your computer. Open a terminal and run `git --version`. Set your developer identity with your name and email using `git config --global user.name` and `git config --global user.email`.",
    "challenge": "Print your global Git settings using `git config --list` and locate your name and email in the console output.",
    "example_code": "# Check Git version to confirm installation\ngit --version\n\n# Set up your identity (run once on your machine)\ngit config --global user.name \"John Doe\"\ngit config --global user.email \"johndoe@example.com\"\n\n# List config settings to verify they were set\ngit config --list",
    "ext": "sh"
  },
  "02-Git-Init": {
    "title": "Git Init",
    "line": "git init creates a hidden .git repository folder to start tracking a project.",
    "think": "Turning on a security surveillance camera system in a building. From that moment, every movement in that room is recorded.",
    "example": "git init",
    "result": "Prints 'Initialized empty Git repository in /path/to/project/.git/'.",
    "remember": "Only run git init ONCE per project. Running it creates the hidden .git directory.",
    "summary": "* `git init` sets up tracking folder.\n* Creates hidden `.git` folder in project root.\n* Never manually delete or edit the `.git` folder contents.",
    "diagram": "\n+---------------------------------------------+\n| Project Folder                              |\n|  ├── index.html                             |\n|  ├── style.css                              |\n|  └── [.git] (Hidden tracking database)      |\n|      <-- Created by running \"git init\"      |\n+---------------------------------------------+\n",
    "practice": "Create a new folder named `git-demo`, navigate into it in your terminal, and run `git init` to initialize tracking.",
    "challenge": "Use a command line flag to find the hidden `.git` folder (e.g., `ls -la` or `dir /a`) and check what folders are created inside it.",
    "example_code": "# Create project directory\nmkdir git-demo\ncd git-demo\n\n# Initialize a fresh local Git repository\ngit init\n\n# Inspect files (including hidden ones) to verify the .git folder exists\n# On macOS/Linux: ls -la\n# On Windows PowerShell: Get-ChildItem -Force\nls -la",
    "ext": "sh"
  },
  "03-Git-Status": {
    "title": "Git Status",
    "line": "git status inspects the state of the working directory and staging area.",
    "think": "An X-ray machine for your project folders, showing which files are new, modified, or staged for saving.",
    "example": "git status",
    "result": "Displays untracked, modified, or staged files.",
    "remember": "Run git status constantly. It is a developer's eyes.",
    "summary": "* Checks the difference between your active code files and Git's last save point.\n* Red files: untracked or modified (not staged).\n* Green files: staged and ready to commit.",
    "diagram": "\n+---------------------------------------------------+\n| WORKING DIRECTORY        STAGING AREA             |\n|                                                   |\n| [ index.html (Red) ] ---> [ index.html (Green) ]  |\n| (Modified/New)   git add  (Ready to commit)       |\n+---------------------------------------------------+\n",
    "practice": "Create a file named `index.html` in your tracking folder, run `git status`, and observe that the file is marked in red as 'untracked'.",
    "challenge": "Create a second file named `about.html`, check the status again, and verify that both files are listed under 'Untracked files'.",
    "example_code": "# Check the state of your project\ngit status\n\n# Create dummy files\necho \"<h1>Home</h1>\" > index.html\necho \"<h1>About</h1>\" > about.html\n\n# Check state again to see files highlighted in RED (untracked)\ngit status",
    "ext": "sh"
  },
  "04-Git-Add": {
    "title": "Git Add",
    "line": "git add copies file snapshots from your working directory to the staging area.",
    "think": "Placing items into a shipping box. They aren't sent (committed) yet, but they are packed and taped ready to go.",
    "example": "git add index.html",
    "result": "Moves selected files from untracked/modified to staged (green status).",
    "remember": "Staging allows you to selectively choose which code edits to include in your next commit save.",
    "summary": "* `git add <filename>` stages a specific file.\n* `git add .` stages all new and modified files in current directory.\n* Moves files into the staging zone.",
    "diagram": "\n+-------------------------------------------------+\n| Local Files  == git add ==>  Staging Area (Box) |\n| [index.html]                 [index.html]       |\n| [about.html]                 [about.html]       |\n+-------------------------------------------------+\n",
    "practice": "Add your `index.html` file to the staging area using `git add index.html` and verify it turned green using `git status`.",
    "challenge": "Stage *all* remaining untracked files in your folder using `git add .` and check the status again to confirm they are all green.",
    "example_code": "# Stage a single specific file\ngit add index.html\n\n# Check status (index.html is green, about.html is red)\ngit status\n\n# Stage all files in the current folder\ngit add .\n\n# Check status again (both files are green and ready)\ngit status",
    "ext": "sh"
  },
  "05-Git-Commit": {
    "title": "Git Commit",
    "line": "git commit saves a permanent snapshot of your staged files in history with a descriptive message.",
    "think": "Creating a game save point or snapping a historical photo. It is a locked-in version of your code you can visit forever.",
    "example": "git commit -m \"Initial commit\"",
    "result": "Saves the staged snapshot and prints commit metadata (hash, message, file changes).",
    "remember": "Write clear, action-oriented commit messages in the present tense (e.g., 'Add navigation bar', not 'Added nav bar').",
    "summary": "* Committing saves a snapshot permanently.\n* Requires a message (`-m`) describing what changed.\n* Only files in the staging area (green) are saved.",
    "diagram": "\n+-------------------------------------------------------+\n| Staging Area (Box)  == git commit ==>  Git History    |\n| [index.html, about.html]              [Commit Hash]   |\n|                                       \"Initial commit\"|\n+-------------------------------------------------------+\n",
    "practice": "Commit your staged files using `git commit -m \"Create home and about pages\"`. Run `git status` to verify your working directory is clean.",
    "challenge": "Make an edit inside `index.html` (e.g., change header text), stage the change, and commit it with a message: `git commit -am \"Update heading text\"`. Explain what the `-am` flag combination does.",
    "example_code": "# Commit staged files with a descriptive message\ngit commit -m \"Create home and about pages\"\n\n# Make a quick edit to index.html\necho \"<h1>Welcome Home</h1>\" > index.html\n\n# Check status (index.html is modified)\ngit status\n\n# Shortcut: Stage and commit modified files in one command\n# Note: This only works for tracked files (already committed in past)\ngit commit -am \"Update heading text\"",
    "ext": "sh"
  },
  "06-Git-Log": {
    "title": "Git Log",
    "line": "git log prints a chronological history of all commits saved in the repository.",
    "think": "Viewing a shipping tracking log or transaction statement showing who saved what, when, and with what code.",
    "example": "git log",
    "result": "Displays commit hashes, authors, timestamps, and commit messages.",
    "remember": "The commit hash (40 characters) is a unique ID used to reference a specific point in time.",
    "summary": "* `git log` prints full history details.\n* `git log --oneline` shows short hash and message only.\n* Press `q` to exit the log view page in terminal.",
    "diagram": "\n+---------------------------------------------+\n| COMMIT HISTORY                              |\n|  a3b1c2d (HEAD) - Update heading text       |\n|  f8e7d6c        - Create home and about pages|\n+---------------------------------------------+\n",
    "practice": "View your commit history by running `git log`. Note the author and timestamp of your saves.",
    "challenge": "Run `git log --oneline --graph --all` and explain how the visual output changes.",
    "example_code": "# Display full repository history\ngit log\n\n# Display compact history (hash + message)\ngit log --oneline\n\n# Limit log output to the last 2 commits\ngit log -n 2\n\n# Display visual tree line graphs\ngit log --oneline --graph --all",
    "ext": "sh"
  },
  "07-Git-Clone": {
    "title": "Git Clone",
    "line": "git clone downloads an existing remote repository from the cloud to your local computer.",
    "think": "Downloading a shared file from Google Drive to your laptop. You get a local copy of the folder, plus its entire save-point history.",
    "example": "git clone https://github.com/user/project.git",
    "result": "Downloads the folder and configures connection links to the remote repository.",
    "remember": "Git clone automatically configures a remote pointer named 'origin' back to the source URL.",
    "summary": "* Downloads repository files and full commit history.\n* Sets up origin remote links.\n* Creates a new directory matching the repository name.",
    "diagram": "\n+----------------------+                +----------------------+\n| GitHub (Cloud Server) | == git clone =>| Local Computer       |\n| [ Project Repo ]     |                | [ Project Copy ]     |\n+----------------------+                +----------------------+\n",
    "practice": "Choose a public GitHub repository (or use the MeetTutorials URL) and run `git clone <url>` in a new folder to download its codebase.",
    "challenge": "Navigate into the cloned folder, run `git remote -v`, and check what remote connections are configured.",
    "example_code": "# Clone a public demo repository from GitHub\ngit clone https://github.com/github/test-repo.git\n\n# Navigate into the cloned folder\ncd test-repo\n\n# Check configured remote repositories\ngit remote -v",
    "ext": "sh"
  },
  "08-Git-Pull": {
    "title": "Git Pull",
    "line": "git pull fetches updates from the remote repository and merges them into your local files.",
    "think": "Syncing your emails. You click refresh, and new messages from the cloud database download directly to your inbox.",
    "example": "git pull origin main",
    "result": "Syncs your local project workspace with cloud updates, showing fast-forward merge logs.",
    "remember": "Always pull code updates before you start writing new code to avoid team code conflicts.",
    "summary": "* Fetches remote branch changes.\n* Integrates changes into your active branch.\n* Keep local work sync-aligned.",
    "diagram": "\n+----------------------+                +----------------------+\n| GitHub Cloud (Main)  | == git pull ==>| Local Branch (Main)  |\n| Commit C (New)       |                | Commit B ---> C      |\n+----------------------+                +----------------------+\n",
    "practice": "Simulate pulling changes from origin main by running `git pull origin main`. (Note: if you have no changes, it will print 'Already up to date').",
    "challenge": "Explain the differences between running `git fetch` (downloads metadata only) vs `git pull` (downloads and merges code).",
    "example_code": "# Pull changes from the 'origin' remote repository's 'main' branch\ngit pull origin main\n\n# Fetch changes without merging them yet (safe inspection check)\ngit fetch origin",
    "ext": "sh"
  },
  "09-Git-Push": {
    "title": "Git Push",
    "line": "git push uploads your local commits to a remote repository on the cloud.",
    "think": "Posting a draft document to a team folder. Now your local saves are backup-saved in the cloud for everyone to see.",
    "example": "git push origin main",
    "result": "Uploads local commit history references and updates the cloud branch pointer.",
    "remember": "You can only push commits. Staged files or untracked changes will not be uploaded.",
    "summary": "* Uploads commits to GitHub/GitLab.\n* Requires write access permissions to the remote server.\n* Keeps the remote copy up to date.",
    "diagram": "\n+----------------------+                +----------------------+\n| Local Branch (Main)  | == git push ==>| GitHub Cloud (Main)  |\n| Commit B ---> C      |                | Commit B ---> C      |\n+----------------------+                +----------------------+\n",
    "practice": "Push your local commits to your personal remote branch using `git push origin main` (assuming remote is configured).",
    "challenge": "Set the upstream tracking branch using `git push -u origin main` and explain how this simplifies future push commands.",
    "example_code": "# Push local commits to remote origin's main branch\ngit push origin main\n\n# Push commits and set upstream default tracker (simplifies to 'git push' later)\ngit push -u origin main",
    "ext": "sh"
  },
  "10-Branches": {
    "title": "Git Branches",
    "line": "Branches create parallel sandbox timelines for adding features without affecting stable code.",
    "think": "Creating a multiverse timeline copy of your city. You build a new bridge in the copy; if it works, you merge it with the main timeline.",
    "example": "git checkout -b feature-darkmode",
    "result": "Switches active developer files to a parallel workspace.",
    "remember": "The default main branch should always contain clean, working, deployable code.",
    "summary": "* `git branch`: list local branches.\n* `git branch <name>`: create new branch.\n* `git checkout <name>`: switch active branch (or `git switch <name>`).\n* `git checkout -b <name>`: create and switch immediately.",
    "diagram": "\n+---------------------------------------------+\n| BRANCHING MODEL                             |\n|                                             |\n|  main:     A --- B --- C (Stable Prod)      |\n|                     \\                       |\n|  feature:            D --- E (Sandbox Dev)  |\n+---------------------------------------------+\n",
    "practice": "Create a branch called `feature-login` and switch to it. Verify which branch is active using `git branch`.",
    "challenge": "Delete a branch locally using `git branch -d branch-name` and explain why Git might refuse to delete a branch that hasn't been merged yet.",
    "example_code": "# List all local branches\ngit branch\n\n# Create and switch to new branch immediately\ngit checkout -b feature-login\n\n# Make changes and commit on the branch\necho \"login code\" > login.js\ngit add login.js\ngit commit -m \"Add basic login code\"\n\n# Switch back to the main branch\ngit checkout main",
    "ext": "sh"
  },
  "11-Merge": {
    "title": "Git Merge",
    "line": "git merge integrates commit history from one branch into another.",
    "think": "Pouring tributary water back into the main river channel, combining all branch changes.",
    "example": "git merge feature-login",
    "result": "Joins the branch history, creating a merge commit or performing a fast-forward step.",
    "remember": "You must checkout to the branch you want to merge into (usually main) before running git merge.",
    "summary": "* Joins branches.\n* Fast-forward: main branch moves forward directly.\n* Three-way merge: creates a new merge commit combining both branch histories.",
    "diagram": "\n+---------------------------------------------+\n| MERGE FLOW                                  |\n|                                             |\n|  main:     A --- B --------- M (Merged)     |\n|                     \\       /               |\n|  feature:            C --- D                |\n+---------------------------------------------+\n",
    "practice": "Navigate back to your `main` branch, merge the edits from your `feature-login` branch, and verify your changes.",
    "challenge": "Merge a branch without fast-forwarding, creating a merge commit explicitly using `git merge --no-ff <branch-name>`.",
    "example_code": "# Ensure you are on the receiver branch (main)\ngit checkout main\n\n# Merge the feature branch into main\ngit merge feature-login\n\n# Clean up by deleting the merged feature branch\ngit branch -d feature-login",
    "ext": "sh"
  },
  "12-Conflict-Resolution": {
    "title": "Git Conflict Resolution",
    "line": "Conflict resolution is the manual repair of overlapping file changes made by different branches.",
    "think": "Two editors updating the exact same sentence in a document at the same time. The manager (you) must choose which version to keep.",
    "example": "Open a file showing conflict markers (<<<<<<<, =======, >>>>>>>) and edit manually.",
    "result": "Cleans up the code markers and completes the merge with a commit save.",
    "remember": "Conflict markers show: Current change (your active branch) vs Incoming change (the branch being merged).",
    "summary": "* Happens when Git cannot resolve line modifications automatically.\n* Highlights problem sections with conflict markers.\n* Resolve by deleting markers, editing file, staging, and committing.",
    "diagram": "\n+-----------------------------------------------+\n| CONFLICT MARKERS IN CODE                      |\n|                                               |\n|  <<<<<<< HEAD (Current Branch)                |\n|  color: blue;                                 |\n|  =======                                      |\n|  color: red;                                  |\n|  >>>>>>> feature-styles (Incoming Branch)    |\n+-----------------------------------------------+\n",
    "practice": "Create a merge conflict. Make branch A change line 1 of a file to 'Apple', branch B change line 1 of the same file to 'Banana'. Try to merge B into A. Open the file and inspect the conflict markers.",
    "challenge": "Manually resolve the conflict by keeping both lines, remove the markers, stage the file, and commit to complete the merge.",
    "example_code": "# Simulate a conflict setup\ngit checkout -b branch-a\necho \"Original text: A\" > conflict.txt\ngit add conflict.txt\ngit commit -m \"Change to A\"\n\ngit checkout main\ngit checkout -b branch-b\necho \"Original text: B\" > conflict.txt\ngit add conflict.txt\ngit commit -m \"Change to B\"\n\n# Trigger conflict by attempting merge\ngit checkout branch-a\ngit merge branch-b\n# Console reports: CONFLICT (content): Merge conflict in conflict.txt\n\n# Open conflict.txt, delete markers, pick the correct version. Then:\ngit add conflict.txt\ngit commit -m \"Resolve merge conflict between branch-a and branch-b\"",
    "ext": "sh"
  },
  "13-Reset": {
    "title": "Git Reset",
    "line": "git reset moves branch pointers backward in time to discard or restructure commits.",
    "think": "Rewinding a cassette tape. You can rewind tape positions, choosing whether to erase recorded music (hard reset) or keep it in buffer memory (soft reset).",
    "example": "git reset --hard HEAD~1",
    "result": "Rolls back the working files and directory history to a target commit state.",
    "remember": "A --hard reset will permanently erase uncommitted work and recent commits! Use it with extreme caution.",
    "summary": "* `--soft`: rewinds commit pointer, keeps changes staged.\n* `--mixed` (default): rewinds commit pointer, keeps changes unstaged.\n* `--hard`: rewinds commit pointer, deletes all code changes.",
    "diagram": "\n+-----------------------------------------------+\n| GIT RESET MODES                               |\n|                                               |\n| [Commit A] <-- [Commit B] <-- [Commit C (HEAD)]|\n|                                               |\n|  git reset --hard A : HEAD moves to A.        |\n|                       B & C erased.           |\n+-----------------------------------------------+\n",
    "practice": "Make a commit containing a typo. Do a soft reset to the previous commit (`git reset --soft HEAD~1`) and verify that the file changes are still in your staging area.",
    "challenge": "Create a test branch, commit some placeholder changes, run a hard reset to discard them, and verify that all edits are gone from your workspace files.",
    "example_code": "# Undo last commit, keeping your files staged (safe edit)\ngit reset --soft HEAD~1\n\n# Undo last commit and unstage changes (keeps edits in working directory)\ngit reset HEAD~1\n\n# DANGER: Wipe out last commit and all active modifications\ngit reset --hard HEAD~1",
    "ext": "sh"
  },
  "14-Revert": {
    "title": "Git Revert",
    "line": "git revert creates a new commit that applies inverse edits to undo past commits safely.",
    "think": "Writing an entry in a bank ledger stating 'Returned item refund +$50' to cancel a past error transaction of -$50, keeping the bank history clean and audit-ready.",
    "example": "git revert <commit-hash>",
    "result": "Creates a new commit that undoes the targeted commit changes without rewriting history.",
    "remember": "Revert is safe for shared repositories since it does not modify the existing history tree.",
    "summary": "* Safe undo method for public repositories.\n* Applies opposite edits.\n* Creates a new history link node.",
    "diagram": "\n+---------------------------------------------+\n| REVERT WORKFLOW                             |\n|                                             |\n|  A ---> B (Buggy Commit) ---> C ---> D (Revert B)|\n|                                             |\n|  History flows forward. D cancels B changes. |\n+---------------------------------------------+\n",
    "practice": "View your log, select a recent commit hash, run `git revert <hash>`, and check the log to verify a new commit was appended.",
    "challenge": "Explain why `git revert` is preferred over `git reset` when working with team repositories on public cloud branches.",
    "example_code": "# Find the hash of the commit you want to undo\ngit log --oneline\n\n# Revert the commit changes (opens editor for commit message, or auto-saves)\ngit revert a1b2c3d --no-edit\n\n# Inspect logs to see new commit undoing the changes\ngit log --oneline",
    "ext": "sh"
  },
  "15-Rebase-Basics": {
    "title": "Git Rebase Basics",
    "line": "git rebase moves or combines a sequence of commits to a new base commit.",
    "think": "Uprooting a building extension blueprint and grafting it onto a new foundation block to keep the architectural drawing linear.",
    "example": "git rebase main",
    "result": "Re-applies feature branch commits one-by-one on top of the target branch, avoiding merge commits.",
    "remember": "Never rebase commits that have been pushed to a public remote branch! It rewrites history.",
    "summary": "* Aligns branch timeline logs.\n* Avoids merge commit clutter.\n* Rewrites branch base history points.",
    "diagram": "\n+-------------------------------------------------------+\n| REBASE TIMELINE SHIFT                                 |\n|                                                       |\n| Before:   main: A --- B --- C                         |\n|                 \\                                     |\n|                 feature: D --- E                      |\n|                                                       |\n| After:    main: A --- B --- C                         |\n|                             \\                         |\n|                             feature: D' --- E'        |\n+-------------------------------------------------------+\n",
    "practice": "Create a feature branch off main. Add a commit to main, then checkout feature branch and run `git rebase main` to update its base point.",
    "challenge": "Run an interactive rebase (`git rebase -i HEAD~2`) and explain how squashing or editing commits clean up development logs.",
    "example_code": "# Move active feature branch base to main head commit\ngit checkout feature-login\ngit rebase main\n\n# Perform interactive rebase to squash last two commits\n# (Launches terminal editor to choose actions e.g. pick/squash)\ngit rebase -i HEAD~2",
    "ext": "sh"
  }
};
const GIT_PROJECTS = {
  "01-First-Repository": {
    "ext": "sh",
    "quick": "# First Repository Project\n\n## In One Line\nInitialize a repository, stage index and style files, write a commit, and look at the history graph logs.\n\n## Think Like This\nTaking snapshots of your bedroom as you clean it up: start tracking, pick items to clean, take the photo, inspect your photo album.\n\n## Example\n```bash\ngit init\ngit add .\ngit commit -m \"First save\"\ngit log --oneline\n```\n\n## Result\nInitializes, stages, saves, and prints the save log.\n\n## Remember\nYou must stage files before they can be committed to repository memory.\n",
    "source": "# 1. Create a fresh project folder and enter it\nmkdir my-first-git-project\ncd my-first-git-project\n\n# 2. Turn on Git surveillance\ngit init\n\n# 3. Create initial website files\necho \"<!DOCTYPE html><html><body><h1>Project Zero</h1></body></html>\" > index.html\necho \"body { background: #f0f0f0; }\" > style.css\n\n# 4. Check tracking status\ngit status\n\n# 5. Stage both files\ngit add index.html style.css\n\n# 6. Verify they are green in staging\ngit status\n\n# 7. Commit changes to history\ngit commit -m \"Initial commit: Set up page structure and basic styling\"\n\n# 8. View history logs\ngit log --oneline",
    "practice": "Recreate the script steps locally. Verify your repository status after each command to build muscle memory.",
    "challenge": "Create a new text file named `notes.txt`, add it to staging, but then unstage it using `git restore --staged notes.txt` before committing.",
    "summary": "* Git init initializes local databases.\n* Staging selects files for saves.\n* Commit records snapshots permanently.",
    "diagram": "\n  [ Working Files ] === git add ===> [ Staging Area ] === git commit ===> [ Save Logs ]\n"
  },
  "02-Team-Collaboration-Simulation": {
    "ext": "sh",
    "quick": "# Team Collaboration Simulation Project\n\n## In One Line\nSimulate two developers (Alice and Bob) pushing commits to origin and merging their branches.\n\n## Think Like This\nTwo architects writing plans on a shared blueprint: they check out copies, make edits, and sync them back to the office server.\n\n## Example\n```bash\ngit checkout -b alice-dev\n# work and commit\ngit checkout main\ngit merge alice-dev\n```\n\n## Result\nSimulates merging a team branch.\n\n## Remember\nPull the latest remote code before you push your local commits.\n",
    "source": "# 1. Alice creates a branch to work on a contact form\ngit checkout -b alice-contact-form\necho \"Contact us at contact@test.com\" > contact.html\ngit add contact.html\ngit commit -m \"Add contact info page\"\n\n# 2. Bob creates a branch to work on an FAQ section\n# (Bob branches off main)\ngit checkout main\ngit checkout -b bob-faq-page\necho \"FAQ: How to use Git?\" > faq.html\ngit add faq.html\ngit commit -m \"Create FAQ guide page\"\n\n# 3. Alice merges her work into main branch\ngit checkout main\ngit merge alice-contact-form\n\n# 4. Bob merges his work into main branch\n# (This is a three-way merge because both branches diverged)\ngit merge bob-faq-page\n\n# 5. Clean up feature branches\ngit branch -d alice-contact-form\ngit branch -d bob-faq-page\n\n# 6. View the visual layout log\ngit log --oneline --graph",
    "practice": "Run this branching simulation on your machine. Inspect the final graph layout to see the merge point.",
    "challenge": "Simulate a merge conflict by making Alice and Bob edit the same line of contact.html, and manually resolve it.",
    "summary": "* Branching parallelizes code development tasks.\n* Team merges consolidate divergent branch logs.\n* Deleting branches keeps workspaces tidy.",
    "diagram": "\n  main branch:    --- Commit A --- Commit B --- Merge Commit M\n                     \\             /\n  feature branch:     --- Commit C\n"
  }
};
const GITHUB_DATA = {
  "01-Introduction": {
    "title": "GitHub Introduction",
    "line": "GitHub is a cloud platform that hosts Git repositories for collaboration and version control.",
    "think": "GitHub is cloud backup storage like Google Drive or Dropbox, but customized specifically for code developers.",
    "example": "View repository page URL on github.com",
    "result": "Shows the project codebase, commit history graph, and team updates.",
    "remember": "Git is the engine tool. GitHub is the parking lot website.",
    "summary": "* GitHub hosts git repositories.\n* Enables social coding, reviews, issues, and wiki docs.\n* Core to building an open-source profile.",
    "diagram": "\n+---------------------------------------------+\n| COLLABORATION FLOW                          |\n|                                             |\n| Local Git (PC) === git push ===> GitHub Cloud|\n| Local Git (PC) <== git pull ===  GitHub Cloud|\n+---------------------------------------------+\n",
    "practice": "Create a free developer account on github.com. Set up your user profile page.",
    "challenge": "Set up SSH key authentication on your computer to connect to GitHub securely without typing your password for every action.",
    "example_code": "# Generate an SSH key on your machine (replace with your email)\nssh-keygen -t ed25519 -C \"your.email@example.com\"\n\n# Start the ssh-agent in the background\neval \"$(ssh-agent -s)\"\n\n# Add your SSH private key to the ssh-agent\nssh-add ~/.ssh/id_ed25519\n\n# Copy the SSH public key to your clipboard to paste into GitHub Settings\ncat ~/.ssh/id_ed25519.pub",
    "ext": "sh"
  },
  "02-Create-Repository": {
    "title": "Create Repository",
    "line": "Create a new project workspace on GitHub to host your code files.",
    "think": "Registering a new blank document folder on Google Drive before typing project contents.",
    "example": "Create repository via web UI or GitHub CLI.",
    "result": "Displays a blank remote repository page with quick setup instructions.",
    "remember": "Keep repository names lowercase with hyphens (e.g. my-awesome-app).",
    "summary": "* Repositories can be Public (visible to all) or Private (invite-only).\n* Can initialize with a README, license, and .gitignore file.",
    "diagram": "\n+-------------------------------------------------+\n| GITHUB NEW REPO FORM                            |\n|  Repository Name: [ my-awesome-app ]            |\n|  Visibility: [x] Public  [ ] Private            |\n|  Initialize: [x] Add a README file              |\n|  License: [ MIT License ]                       |\n+-------------------------------------------------+\n",
    "practice": "Log in to GitHub, click 'New', name it `test-repository`, select 'Public', check 'Add a README file', and create it.",
    "challenge": "Install the GitHub CLI (`gh`) and create a repository directly from your terminal using commands.",
    "example_code": "# Authenticate with GitHub CLI\ngh auth login\n\n# Create a new public repository from command line\ngh repo create my-awesome-app --public --clone",
    "ext": "sh"
  },
  "03-Repository-Structure": {
    "title": "Repository Structure",
    "line": "The layout of remote files including .gitignore patterns and license documents.",
    "think": "Adding a 'do not enter' sign (.gitignore) to keep personal draft folders hidden, and a copyright license card on a product display.",
    "example": "Create a .gitignore containing node_modules.",
    "result": "Stops Git from staging or tracking build logs or temporary cache files.",
    "remember": "The LICENSE file specifies how others are allowed to copy, modify, and distribute your code.",
    "summary": "* `.gitignore` prevents cluttering repo history.\n* LICENSE file defines usage permissions (e.g., MIT is permissive).\n* Remote branch layout structure matching local checkout branches.",
    "diagram": "\n+-----------------------------------------------+\n| REPOSITORY ROOT                               |\n|  ├── index.html                               |\n|  ├── .gitignore (Specifies files to ignore)  |\n|  └── LICENSE    (Copyright permissions)      |\n+-----------------------------------------------+\n",
    "practice": "Create a `.gitignore` file and add the rules `node_modules/` and `.env` inside it.",
    "challenge": "Create a copy of the MIT license and write a LICENSE file to your repository.",
    "example_code": "# Create a .gitignore file\necho \"node_modules/\" > .gitignore\necho \".env\" >> .gitignore\n\n# View file list to make sure git status ignores node_modules folder\nmkdir node_modules\ntouch node_modules/library.js\ngit status # node_modules will not be listed!",
    "ext": "sh"
  },
  "04-README-Files": {
    "title": "README Files",
    "line": "README.md files explain what a project does, how to install it, and how to use it.",
    "think": "A showcase user manual or box cover art explaining what the toy is and how to play with it.",
    "example": "Create a README.md with headers, lists, code blocks, and bold text.",
    "result": "Renders a beautiful formatted description page on the repository landing page.",
    "remember": "README files are written in Markdown syntax (.md), a simple text formatting markup.",
    "summary": "* First file visitors see.\n* Include: description, installation, usage, license, badges.",
    "diagram": "\n+-----------------------------------------------+\n| RENDERED README LAYOUT                        |\n|                                               |\n|  # Project Title (Heading 1)                  |\n|  Short description explaining the product...  |\n|                                               |\n|  ## Setup (Heading 2)                         |\n|  - `npm install`                              |\n+-----------------------------------------------+\n",
    "practice": "Write a `README.md` for a mock personal website using headers, lists, and formatted code links.",
    "challenge": "Add a screenshot image and a build badge to your `README.md`.",
    "example_code": "# My Profile Project\n\nThis is my personal developer profile website.\n\n## Features\n*   Responsive modern layout.\n*   Built-in dark mode toggle.\n\n## Setup Instructions\n1.  Clone this folder.\n2.  Run Live Server.",
    "ext": "sh"
  },
  "05-Clone-Repository": {
    "title": "Clone Repository",
    "line": "Sync cloud repositories to your local computer.",
    "think": "Tethering your computer to a cloud folder. Downloading the initial copy to local storage.",
    "example": "git clone git@github.com:user/project.git",
    "result": "Creates a folder copy and sets up origin remote hooks.",
    "remember": "Using SSH keys avoids password typing on clones, pushes, and pulls.",
    "summary": "* Copies code and history.\n* Connects local git to cloud origin.",
    "diagram": "\n+-----------------------+              +-----------------------+\n| GitHub Remote Repo    | = git clone = > Local Working Copy   |\n| (origin)              |              | (.git link configured)|\n+-----------------------+              +-----------------------+\n",
    "practice": "Clone your `test-repository` from your GitHub account onto your local computer.",
    "challenge": "Compare the output folders of `git clone` using HTTPS URL vs SSH URL.",
    "example_code": "# Clone using HTTPS URL\ngit clone https://github.com/github/training-kit.git\n\n# Clone using SSH URL (requires SSH keys set up on account)\ngit clone git@github.com:github/training-kit.git",
    "ext": "sh"
  },
  "06-Push-Code": {
    "title": "Push Code",
    "line": "git push uploads your committed local code files to your GitHub cloud branch.",
    "think": "Deploying changes to a website. Publishing your updates so coworkers can see them.",
    "example": "git push origin main",
    "result": "Uploads commits and updates the tracking branch on GitHub.",
    "remember": "If your push fails, pull the latest changes first to make sure your branches are synced.",
    "summary": "* Pushes updates.\n* Updates origin pointers.",
    "diagram": "\nLocal (a -> b -> c) === git push origin main ===> Cloud (a -> b -> c)\n",
    "practice": "Add a line inside your local README file, stage it, commit it, and push it to GitHub main.",
    "challenge": "Force push changes using `git push --force` and explain the safety hazards of doing so in team projects.",
    "example_code": "# Edit a file\necho \"Update\" >> README.md\ngit commit -am \"Update README details\"\n\n# Push commits to remote origin main branch\ngit push origin main\n\n# DANGER: Force update remote (overwrites remote history with local)\n# git push --force origin main",
    "ext": "sh"
  },
  "07-Pull-Changes": {
    "title": "Pull Changes",
    "line": "git pull fetches and integrates cloud updates into your local workspace files.",
    "think": "Checking your phone messages to see what your friends sent while you were offline.",
    "example": "git pull origin main",
    "result": "Synchronizes local files with code written by teammates on GitHub.",
    "remember": "Always pull before editing code to ensure your local history is linear.",
    "summary": "* Merges remote commits.\n* Avoids code divergence.",
    "diagram": "\nCloud (a -> b -> c -> d) === git pull ===> Local (a -> b -> c ---> d)\n",
    "practice": "Make an edit to a file directly inside the GitHub web code editor, commit it on the web, then run `git pull` locally to pull the edit down.",
    "challenge": "Resolve any conflicts that arise if your local copy had edits on the same file lines.",
    "example_code": "# Pull remote main branch updates\ngit pull origin main",
    "ext": "sh"
  },
  "08-Forks": {
    "title": "Forks",
    "line": "A fork is a personal cloud copy of another developer's GitHub repository.",
    "think": "Making a photocopying run of a textbook. You own the copy (the fork) and can write inside it without altering the original author's textbook.",
    "example": "Click 'Fork' button on GitHub UI.",
    "result": "Creates a new repository link under your personal GitHub namespace dashboard.",
    "remember": "Forks allow you to safely experiment with codebases and suggest updates back to the owner.",
    "summary": "* Creates cloud clone under your name.\n* Keeps reference pointer back to original (upstream) repository.",
    "diagram": "\n+-------------------------------------------------+\n| FORK MAPPING                                    |\n|                                                 |\n|  [ Original Repo (upstream) ]                   |\n|             |                                   |\n|        Fork | (Creates copy in cloud)           |\n|             v                                   |\n|  [ Personal Repo (origin) ]                     |\n+-------------------------------------------------+\n",
    "practice": "Fork a public open-source project from GitHub.",
    "challenge": "Add a second remote pointing to the original repository as `upstream` so you can pull future updates.",
    "example_code": "# Clone your personal fork\ngit clone https://github.com/your-username/original-repo.git\ncd original-repo\n\n# Add upstream pointer back to the original source repository\ngit remote add upstream https://github.com/original-author/original-repo.git\n\n# Verify remote list\ngit remote -v",
    "ext": "sh"
  },
  "09-Issues": {
    "title": "Issues",
    "line": "Issues are tracking logs on GitHub used for bug tickets, feature proposals, and team tasks.",
    "think": "Sticky notes on a task board (Kanban) labeling chores, bugs, and improvements to complete.",
    "example": "Submit issue ticket on GitHub UI.",
    "result": "Creates a threaded discussion entry with tags, assignee slots, and milestone references.",
    "remember": "Issues can be referenced inside commit messages (e.g. 'Fix #4') to close them automatically.",
    "summary": "* Bug and ticket trackers.\n* Tagging, assigning, and roadmap milestones.",
    "diagram": "\n+---------------------------------------------+\n| GITHUB ISSUE CARD                           |\n|  Title: [ Bug: Login button alignment ]     |\n|  Assignee: @johndoe    Labels: [bug] [css]  |\n+---------------------------------------------+\n",
    "practice": "Open an issue in your `test-repository` titled `Add landing page layout` describing the visual requirements.",
    "challenge": "Create a commit message that references the issue ID (e.g. `Close #1`) and push it to confirm the issue closes automatically.",
    "example_code": "# Commit referencing issue ID #1\ngit commit -am \"Add landing page section, fixes #1\"\n\n# Push to remote main branch (closes issue #1)\ngit push origin main",
    "ext": "sh"
  },
  "10-Pull-Requests": {
    "title": "Pull Requests",
    "line": "A Pull Request (PR) is a formal proposal to merge your code changes into another repository branch.",
    "think": "Submitting a business proposal draft to your manager for review. They inspect it, leave remarks, and sign it off to merge.",
    "example": "Create a PR comparing feature branch to main.",
    "result": "Displays code diffs, triggers automated testing suites, and opens review chats.",
    "remember": "PRs are the central hub of team collaboration, code reviews, and quality control.",
    "summary": "* Compares branches or forks.\n* Code reviews allow line comments and approvals.\n* Merging applies code changes to the base branch.",
    "diagram": "\n+---------------------------------------------+\n| PULL REQUEST COMPARISON                     |\n|                                             |\n|  Compare: [ feature-login ]                 |\n|  Base:    [ main ]                          |\n|                                             |\n|  [ Diffs: +50 lines, -10 lines ]            |\n|  [ Review: Approve Merge ]                  |\n+---------------------------------------------+\n",
    "practice": "Create a branch, edit a file, push it, and open a Pull Request on GitHub.",
    "challenge": "Configure branch protection rules on GitHub to require at least one approved review before code can be merged into main.",
    "example_code": "# Push branch changes to remote origin\ngit checkout -b feature-styles\necho \"styles\" > main.css\ngit add main.css\ngit commit -m \"Add basic css style file\"\ngit push origin feature-styles\n\n# Open GitHub website, click \"Compare & pull request\" button to launch PR form",
    "ext": "sh"
  },
  "11-GitHub-Pages": {
    "title": "GitHub Pages",
    "line": "GitHub Pages is a free static website hosting service integrated directly into GitHub.",
    "think": "Deploying your site live to the internet. Putting your portfolio painting in a public gallery window.",
    "example": "Enable GitHub Pages in Repository Settings.",
    "result": "Publishes your repository's HTML/CSS files to a live public URL: https://username.github.io/repo/.",
    "remember": "GitHub Pages only hosts static sites (HTML, CSS, JS). Databases or Node backends are not supported.",
    "summary": "* Free host for static projects.\n* Serves code directly from a branch (e.g. main).",
    "diagram": "\n[ index.html (Repo) ] === GitHub Pages ===> https://user.github.io/repo/\n",
    "practice": "Create a simple `index.html` file, push it to GitHub, enable GitHub Pages in Settings -> Pages, and visit your live URL.",
    "challenge": "Add a custom style sheet and verify the layout updates on the live website.",
    "example_code": "# Ensure your main entry file is named index.html\necho \"<h1>My Online Portfolio</h1>\" > index.html\ngit add index.html\ngit commit -m \"Configure entry page for web deployment\"\ngit push origin main\n# Go to GitHub settings -> Pages -> Select 'main' branch, click Save",
    "ext": "sh"
  },
  "12-Open-Source-Contributions": {
    "title": "Open Source Contributions",
    "line": "The process of contributing bug fixes or features to public open-source projects.",
    "think": "Volunteering to help build a community garden. You read the rules, submit a seed idea, and help plant it.",
    "example": "Submit a pull request to an open source project.",
    "result": "Merges your code into a project used by thousands of developers.",
    "remember": "Always read the CONTRIBUTING.md file before submitting code modifications.",
    "summary": "* Read contributing guidelines.\n* Fork, branch, edit, and open pull requests.\n* Respect community codes of conduct.",
    "diagram": "\n[Fork upstream] -> [Create branch] -> [Commit code] -> [Open Pull Request]\n",
    "practice": "Locate a public repository, read its `README.md` and `CONTRIBUTING.md` guides.",
    "challenge": "Submit a documentation fix or spelling error fix to a public repository.",
    "example_code": "# Fork, clone, branch, edit, and push\ngit checkout -b fix-readme-spelling\n# Make edits to README.md\ngit add README.md\ngit commit -m \"Fix typographical error in README installation guide\"\ngit push origin fix-readme-spelling\n# Open PR on original repository",
    "ext": "sh"
  }
};
const GITHUB_PROJECTS = {
  "01-Portfolio-Repository": {
    "ext": "html",
    "quick": "# Portfolio Repository Project\n\n## In One Line\nBuild a clean, static portfolio page containing your resume and host it live on GitHub Pages.\n\n## Think Like This\nPutting your professional resume in a glass display case on a busy city street so any passing client can review it.\n\n## Example\n```html\n<h1>Jane Doe | Developer Portfolio</h1>\n```\n\n## Result\nDeploys a responsive portfolio website.\n\n## Remember\nGitHub Pages hosts static html, css, and js files for free.\n",
    "source": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Developer Portfolio</title>\n  <style>\n    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #e2e8f0; }\n    header { text-align: center; padding: 40px 0; border-bottom: 1px solid #1e293b; }\n    h1 { color: #38bdf8; font-size: 36px; margin: 0; }\n    .subtitle { color: #94a3b8; font-size: 18px; margin-top: 10px; }\n    section { padding: 30px 0; border-bottom: 1px solid #1e293b; }\n    h2 { color: #f1f5f9; font-size: 24px; border-left: 4px solid #38bdf8; padding-left: 10px; }\n    .project-card { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 8px; margin: 15px 0; }\n    .project-card h3 { margin-top: 0; color: #38bdf8; }\n    a { color: #38bdf8; text-decoration: none; }\n    a:hover { text-decoration: underline; }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>Jane Doe</h1>\n    <div class=\"subtitle\">Full Stack Developer | MERN Apprentice</div>\n    <p>Contact: <a href=\"mailto:jane@example.com\">jane@example.com</a> | GitHub: <a href=\"https://github.com\">@janedoe</a></p>\n  </header>\n  <main>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I am learning to build modern, highly responsive full stack web applications. Check out my learning projects below!</p>\n    </section>\n    <section id=\"projects\">\n      <h2>Projects</h2>\n      <div class=\"project-card\">\n        <h3>Recipe Page</h3>\n        <p>A simple recipe list displaying semantic HTML tag structures.</p>\n      </div>\n      <div class=\"project-card\">\n        <h3>Offline Weather Widget</h3>\n        <p>A CSS styled offline query module displaying weather details.</p>\n      </div>\n    </section>\n  </main>\n</body>\n</html>",
    "practice": "Replace the placeholder name and email details with your own personal info, and push to your main branch.",
    "challenge": "Add a profile photo section using an `<img>` tag and set up CSS border styles to make it a circular avatar.",
    "summary": "* GitHub Pages enables static host servers.\n* Portfolio pages act as live resume links.\n* Semantic templates structure professional details.",
    "diagram": "\n  [ Local code modifications ] -> [ git push origin main ] -> [ GitHub Pages redeploys live URL ]\n"
  },
  "02-Open-Source-Contribution-Simulation": {
    "ext": "sh",
    "quick": "# Open Source Contribution Simulation Project\n\n## In One Line\nSimulate the full workflow of contributing code to a public repository: fork, clone, edit, push, and submit a PR.\n\n## Think Like This\nChecking out a library book copy, writing notes in the margins, and submitting the notes back to the publisher to update the next print run.\n\n## Example\n```bash\ngit clone forks-url\ngit checkout -b fix-docs\ngit push origin fix-docs\n```\n\n## Result\nSimulates open source contributions.\n\n## Remember\nAlways sync your local fork with the upstream repository before starting new features.\n",
    "source": "# 1. Add upstream tracking link to keep in sync with core developers\ngit remote add upstream https://github.com/original-author/awesome-project.git\n\n# 2. Fetch the latest changes from the master copy\ngit fetch upstream\n\n# 3. Merge upstream changes into your local main branch\ngit checkout main\ngit merge upstream/main\n\n# 4. Create a clean feature branch off main for your bug fix\ngit checkout -b patch-documentation-error\n\n# 5. Make edits and commit the fix\necho \"Updates to configuration setup instructions\" >> documentation.md\ngit add documentation.md\ngit commit -m \"Fix typographical error in configuration setup notes\"\n\n# 6. Push the fix branch to your cloud fork repo (origin)\ngit push origin patch-documentation-error\n\n# 7. Visit GitHub and click 'Create Pull Request' to merge your patch branch into upstream/main",
    "practice": "Recreate the remote syncing commands on a test local fork repository. Inspect configured links.",
    "challenge": "Simulate merging upstream changes directly into your active feature branch using git rebase upstream/main.",
    "summary": "* Forks host cloud clone sandboxes.\n* Upstream remote tracking pulls master changes.\n* PR submissions request review merges.",
    "diagram": "\n  [ Upstream (Core) ] -- Fork --> [ Origin (Your Cloud Copy) ] -- Clone --> [ Local PC ]\n          ^                                                                    |\n          | <----------------------- Pull Request -----------------------------+\n"
  }
};


const BOOTSTRAP_DATA = {
  "01-Introduction": {
    "title": "Bootstrap Introduction",
    "line": "Bootstrap is a popular HTML, CSS, and JS framework used to build responsive, mobile-first websites quickly.",
    "think": "Using pre-built Lego bricks (buttons, navbars, grids) to build a house, rather than cutting and molding every single plastic brick yourself.",
    "example": "<button class=\"btn btn-primary\">Click Me</button>",
    "result": "Renders a beautiful blue button with rounded corners, padding, and hover effects automatically.",
    "remember": "Bootstrap saves time, but makes sites look similar. Customize it to stand out.",
    "summary": "* Pre-styled component classes.\n* Responsive grid system builtin.\n* Mobile-first approach design.",
    "diagram": "\n+-----------------------------------------------+\n| Custom CSS:  button { padding: 10px; ... }    |\n| Bootstrap:   class=\"btn btn-primary\"          |\n+-----------------------------------------------+\n",
    "practice": "Add Bootstrap classes to make a primary and secondary button.",
    "challenge": "Create a simple layout using utility borders.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <button class=\"btn btn-primary\">Primary Action</button>\n  <button class=\"btn btn-secondary\">Secondary Action</button>\n</body>\n</html>",
    "ext": "html"
  },
  "02-Installation": {
    "title": "Bootstrap Installation",
    "line": "Install Bootstrap using a CDN link in the head, or npm package manager for production.",
    "think": "Linking to a shared online library (CDN) vs downloading the books onto your computer (NPM).",
    "example": "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">",
    "result": "Imports all Bootstrap styles and components.",
    "remember": "Include both the CSS link in the <head> and the JS bundle script at the end of the <body> for interactive components.",
    "summary": "* CDN Method: Quickest, good for templates, requires internet connection.\n* NPM Method: Standard professional workflow for Webpack/Vite.",
    "diagram": "\n+-----------------------------------------------+\n| CDN:  <link href=\"http://cdn...\">             |\n| NPM:  npm install bootstrap                   |\n+-----------------------------------------------+\n",
    "practice": "Create an index.html, import Bootstrap via CDN, and add a container element.",
    "challenge": "Set up a local bootstrap project using package.json dependencies.",
    "example_code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Bootstrap Installation</title>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <h1 class=\"text-center my-5\">Bootstrap Installed!</h1>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>",
    "ext": "html"
  },
  "03-Container": {
    "title": "Bootstrap Container",
    "line": "Containers are the basic layout element required to contain, pad, and align content.",
    "think": "Margins on a notebook paper that keep you from writing too close to the left and right edges.",
    "example": "<div class=\"container\">Content</div>",
    "result": "Pads and centers the content box horizontally with responsive breakpoints.",
    "remember": "Use .container for a responsive fixed width, and .container-fluid for full width.",
    "summary": "* Containers center content automatically.\n* .container resizes at responsive breakpoints.\n* .container-fluid always stays 100% width.",
    "diagram": "\n+---------------------------------------------+\n| [Margin]   [ Container Box Content ]   [Margin] |\n|            <--- Responsive Width --->       |\n+---------------------------------------------+\n",
    "practice": "Compare a standard container with a fluid container on screen.",
    "challenge": "Use responsive container classes (e.g. .container-md) to change containment behavior on smaller viewports.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <div class=\"container bg-light p-3 my-3\">\n    <h2>Responsive Container</h2>\n    <p>Centered with margins on large screens.</p>\n  </div>\n  <div class=\"container-fluid bg-secondary text-white p-3 my-3\">\n    <h2>Fluid Container</h2>\n    <p>Spans the entire screen width.</p>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "04-Grid-System": {
    "title": "Bootstrap Grid System",
    "line": "A 12-column responsive layout engine based on Flexbox.",
    "think": "Dividing a cake into 12 equal slices. You can give one person 6 slices (half the screen), and another 3 slices (one-fourth).",
    "example": "<div class=\"row\"><div class=\"col-6\">Left</div><div class=\"col-6\">Right</div></div>",
    "result": "Creates a two-column row with equal widths.",
    "remember": "Columns must be placed inside rows, which must be placed inside containers.",
    "summary": "* Layout spans up to 12 virtual columns.\n* Class format: .col-[breakpoint]-[width] (e.g., .col-md-6).\n* Standard responsive breakpoints: sm, md, lg, xl, xxl.",
    "diagram": "\n+---------------------------------------------+\n| Row                                         |\n|  [ col-md-4 (1/3) ] [ col-md-8 (2/3) ]      |\n+---------------------------------------------+\n",
    "practice": "Build a three-column desktop grid that collapses into single stacked columns on mobile.",
    "challenge": "Offset a column using grid offset utilities.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 bg-info p-3\">Column 1 (1/3 width)</div>\n      <div class=\"col-md-4 bg-warning p-3\">Column 2 (1/3 width)</div>\n      <div class=\"col-md-4 bg-danger p-3\">Column 3 (1/3 width)</div>\n    </div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "05-Buttons": {
    "title": "Bootstrap Buttons",
    "line": "Styles for actions, links, and forms with colors, outlines, and sizes.",
    "think": "Pre-molded control buttons on a dashboard. Red for alerts, blue for primary actions, green for confirmation.",
    "example": "<button class=\"btn btn-outline-success\">Accept</button>",
    "result": "Renders a clean green outlined button that fills on hover.",
    "remember": "Always combine the base .btn class with a variant class like .btn-primary.",
    "summary": "* Primary variations: btn-primary, btn-secondary, btn-success, btn-danger.\n* Use btn-outline-* for outline variations.\n* Sizing: btn-sm, btn-lg.",
    "diagram": "\n[ btn ] + [ btn-primary ] = Beautiful Styled Button\n",
    "practice": "Add a button group containing three selection choices.",
    "challenge": "Style a button to span the full block width of its parent container.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <button class=\"btn btn-primary btn-lg\">Large Primary</button>\n  <button class=\"btn btn-outline-danger\">Outline Danger</button>\n  <div class=\"d-grid gap-2 mt-3\">\n    <button class=\"btn btn-success\" type=\"button\">Block Button</button>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "06-Cards": {
    "title": "Bootstrap Cards",
    "line": "A flexible, extensible content container with headers, footers, and images.",
    "think": "A physical recipe card or ID card grouping name, photo, and bio neatly on one sheet.",
    "example": "<div class=\"card\"><div class=\"card-body\">Hello</div></div>",
    "result": "Creates a beautiful content container with borders and drop-shadow styling.",
    "remember": "Cards fit perfectly inside Grid columns for building dashboard grids.",
    "summary": "* Elements: .card-header, .card-body, .card-footer.\n* Image overlays: .card-img-top.",
    "diagram": "\n+-----------------------+\n| Card Header           |\n+-----------------------+\n| Card Body (Text/Title)|\n+-----------------------+\n| Card Footer           |\n+-----------------------+\n",
    "practice": "Build a profile card with an image cap, title, description, and link.",
    "challenge": "Create a card group or deck of three cards aligned horizontally on desktop.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <div class=\"card\" style=\"width: 18rem;\">\n    <img src=\"https://picsum.photos/200/100\" class=\"card-img-top\" alt=\"Card cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Card Title</h5>\n      <p class=\"card-text\">Some description text goes here.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "07-Navbar": {
    "title": "Bootstrap Navbar",
    "line": "A responsive navigation header with branding, navigation links, and dropdown togglers.",
    "think": "A map directory header at the top of a webpage, directing users to different pages on any screen size.",
    "example": "<nav class=\"navbar navbar-expand-lg bg-light\">...</nav>",
    "result": "Responsive top-bar navigation that collapses into a hamburger icon on mobile.",
    "remember": "Include the Bootstrap JS bundle for the hamburger dropdown to toggle open/close on mobile.",
    "summary": "* Branding class: .navbar-brand.\n* Toggler class: .navbar-toggler.\n* Navigation wrapper: .navbar-nav.",
    "diagram": "\n+---------------------------------------------+\n| BrandName                   [Link1] [Link2] |  <-- Desktop Navbar\n+---------------------------------------------+\n",
    "practice": "Build a responsive dark-themed navbar with a home link and a search input.",
    "challenge": "Add a dropdown menu item inside your navbar list.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Features</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>",
    "ext": "html"
  },
  "08-Forms": {
    "title": "Bootstrap Forms",
    "line": "Input controls styled for labels, sizes, states, and form groups.",
    "think": "A digital clipboard questionnaire with uniform margins, focus outlines, and validation feedback.",
    "example": "<input class=\"form-control\" type=\"text\" placeholder=\"Name\">",
    "result": "Custom themed form input box with outline focus rings.",
    "remember": "Wrap labels and controls in elements with the .mb-3 class for consistent spacing.",
    "summary": "* Input class: .form-control.\n* Select class: .form-select.\n* Floating labels: .form-floating.",
    "diagram": "\n+---------------------------------------------+\n| Label text                                  |\n| [ Input text box                           ]|\n+---------------------------------------------+\n",
    "practice": "Build a form featuring a name field, password field, and dropdown selector.",
    "challenge": "Implement floating labels so text animations trigger when focus moves.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <form class=\"container p-5\">\n    <div class=\"mb-3\">\n      <label for=\"email\" class=\"form-label\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"name@example.com\">\n    </div>\n    <div class=\"mb-3\">\n      <label for=\"selectPlan\" class=\"form-label\">Select Plan</label>\n      <select class=\"form-select\" id=\"selectPlan\">\n        <option>Free Tier</option>\n        <option>Premium Tier</option>\n      </select>\n    </div>\n  </form>\n</body>\n</html>",
    "ext": "html"
  },
  "09-Tables": {
    "title": "Bootstrap Tables",
    "line": "Grid table layouts styled with colors, stripes, borders, and hover states.",
    "think": "An office ledger or spreadsheet that is structured with clean horizontal borders and highlighted rows.",
    "example": "<table class=\"table table-striped table-hover\">...</table>",
    "result": "Formatted data grid that highlights rows when hovered.",
    "remember": "Wrap your tables in .table-responsive to enable side scrolling on mobile screens.",
    "summary": "* Stripes: .table-striped.\n* Borders: .table-bordered.\n* Hover feedback: .table-hover.",
    "diagram": "\n+---------------------------------------------+\n| Column 1     Column 2     Column 3          |\n|---------------------------------------------|\n| Data Row 1 (Striped background)             |\n+---------------------------------------------+\n",
    "practice": "Build a responsive table containing a list of employees.",
    "challenge": "Use context classes (e.g. .table-success) to color individual cells.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-hover table-bordered\">\n      <thead>\n        <tr><th>#</th><th>Name</th><th>Role</th></tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-success\"><td>1</td><td>Jane Doe</td><td>Developer</td></tr>\n        <tr><td>2</td><td>John Smith</td><td>Designer</td></tr>\n      </tbody>\n    </table>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "10-Utilities": {
    "title": "Bootstrap Utilities",
    "line": "Shorthand utility classes for spacing, borders, display, colors, and shadows.",
    "think": "Quick styling labels like 'small margin', 'make text red', or 'add a shadow' that you stick onto element boxes.",
    "example": "<div class=\"m-3 p-2 bg-dark text-white shadow\">Utility Box</div>",
    "result": "Applies margin, padding, dark background, white text, and a drop shadow.",
    "remember": "Margin is m-, padding is p-. Axes: x for horizontal, y for vertical, t/b/s/e for top/bottom/start/end.",
    "summary": "* Spacing values: 0 to 5 (e.g. p-5).\n* Alignment: text-start, text-center, text-end.\n* Colors: bg-primary, text-muted.",
    "diagram": "\nm-3 (Outer Margin) -> border -> p-3 (Inner Padding)\n",
    "practice": "Use margins, padding, and rounded border utilities to style a custom notification card box.",
    "challenge": "Hide an element on mobile viewports but show it on desktops using responsive display utilities.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <div class=\"m-5 p-4 bg-light border border-primary rounded shadow-sm text-center\">\n    <p class=\"text-primary fw-bold mb-0\">Alert: Spacing and border utilities applied!</p>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "11-Alerts": {
    "title": "Bootstrap Alerts",
    "line": "Contextual feedback messages for user actions with dismissal triggers.",
    "think": "Colored sticky banners at the top of a page: yellow for warnings, red for errors, green for success updates.",
    "example": "<div class=\"alert alert-success\">Success!</div>",
    "result": "Displays a green notification banner with padding and matching text color.",
    "remember": "Add class .alert-dismissible to let the user close the alert.",
    "summary": "* Variations: alert-success, alert-warning, alert-danger, alert-info.\n* Uses transitions for fade-out effects.",
    "diagram": "\n+---------------------------------------------+\n| [i] Operation completed successfully.   [X] |  <-- alert-success\n+---------------------------------------------+\n",
    "practice": "Build a dismissible danger alert displaying a warning message.",
    "challenge": "Style links inside alerts using the .alert-link class to inherit appropriate colors.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n    <strong>Warning!</strong> Check your input data details.\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n  </div>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>",
    "ext": "html"
  },
  "12-Modal": {
    "title": "Bootstrap Modal",
    "line": "Overlay dialogues that block background page interactions until dismissed.",
    "think": "A pop-up login form box that darkens the background screen, forcing you to input or close it.",
    "example": "<div class=\"modal fade\" id=\"myModal\">...</div>",
    "result": "Creates a hidden modal wrapper that overlays the page when triggered by a button.",
    "remember": "The button trigger needs data-bs-toggle='modal' and data-bs-target='#id' attributes.",
    "summary": "* Elements: .modal-header, .modal-body, .modal-footer.\n* Toggle attributes: data-bs-toggle and data-bs-target.",
    "diagram": "\n+---------------------------------------+\n|  Page Overlay (Dark Background)       |\n|   +-------------------------------+   |\n|   | Modal Header              [X] |   |\n|   |-------------------------------|   |\n|   | Modal Body Content            |   |\n|   +-------------------------------+   |\n+---------------------------------------+\n",
    "practice": "Build a modal containing a form, triggered by a navbar button.",
    "challenge": "Use centering and scrollable modal utilities.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <!-- Trigger Button -->\n  <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmModal\">\n    Launch Confirm Modal\n  </button>\n\n  <!-- Modal Layout -->\n  <div class=\"modal fade\" id=\"confirmModal\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Confirm Action</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>\n        </div>\n        <div class=\"modal-body\"><p>Are you sure you want to delete this?</p></div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-danger\">Confirm Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>",
    "ext": "html"
  },
  "13-Carousel": {
    "title": "Bootstrap Carousel",
    "line": "A slideshow component for cycling through images or text slides.",
    "think": "A rotating billboard that automatically slides to the next advertisement slide every few seconds.",
    "example": "<div class=\"carousel slide\" data-bs-ride=\"carousel\">...</div>",
    "result": "Creates an interactive slideshow player with control arrows.",
    "remember": "Ensure images inside the slides use the class .w-100 to scale correctly across viewports.",
    "summary": "* Classes: .carousel-inner, .carousel-item, .carousel-control-prev/next.\n* Autoplay attributes: data-bs-ride=\"carousel\".",
    "diagram": "\n+---------------------------------------------+\n|  <   [ SLIDE IMAGE CONTENT (w-100) ]     >  |\n|                  o   o   o                  |\n+---------------------------------------------+\n",
    "practice": "Build a simple three-image carousel slider.",
    "challenge": "Add carousel indicators (circles at the bottom) and captions on slides.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <div id=\"demoCarousel\" class=\"carousel slide\" data-bs-ride=\"carousel\" style=\"max-width: 600px; margin: 20px auto;\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"https://picsum.photos/600/300?random=1\" class=\"d-block w-100\" alt=\"Slide 1\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://picsum.photos/600/300?random=2\" class=\"d-block w-100\" alt=\"Slide 2\">\n      </div>\n    </div>\n    <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#demoCarousel\" data-bs-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </button>\n    <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#demoCarousel\" data-bs-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </button>\n  </div>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>",
    "ext": "html"
  },
  "14-Accordion": {
    "title": "Bootstrap Accordion",
    "line": "Collapsible content panels used to organize lists of information in compact stacks.",
    "think": "An FAQ page where clicking a question folds out its corresponding answer, collapsing others to save space.",
    "example": "<div class=\"accordion\" id=\"myAccordion\">...</div>",
    "result": "Creates stacked panels that toggle open/close when headings are clicked.",
    "remember": "Set data-bs-parent attribute to ensure only one panel stays expanded at a time.",
    "summary": "* Classes: .accordion-item, .accordion-header, .accordion-collapse.\n* Animation powered by transitions.",
    "diagram": "\n+---------------------------------------------+\n| > Question 1 (Collapsed answer details)     |\n|---------------------------------------------|\n| v Question 2 (Expanded answer view)         |\n|   Here is the answer detail text...         |\n+---------------------------------------------+\n",
    "practice": "Build a three-item FAQ accordion page.",
    "challenge": "Make an accordion panel stay open independently by omitting data-bs-parent links.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"p-5\">\n  <div class=\"accordion\" id=\"faqAccordion\">\n    <div class=\"accordion-item\">\n      <h2 class=\"accordion-header\">\n        <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#item1\">\n          Question 1\n        </button>\n      </h2>\n      <div id=\"item1\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#faqAccordion\">\n        <div class=\"accordion-body\">This is the answer detail text.</div>\n      </div>\n    </div>\n  </div>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>",
    "ext": "html"
  },
  "15-Customization": {
    "title": "Bootstrap Customization",
    "line": "Overriding Bootstrap default colors and styles using custom variables or Sass imports.",
    "think": "Painting over the factory paint job of your car with a custom color scheme to fit your branding.",
    "example": "$primary: #8a2be2; @import \"bootstrap\";",
    "result": "Compiles custom Sass to override Bootstrap utility colors.",
    "remember": "You can also customize Bootstrap color variables locally in CSS using Root variables.",
    "summary": "* CSS root variable overrides.\n* Sass variables compilation workflow.",
    "diagram": "\n[ Custom CSS Variables ] ---> Override ---> [ Bootstrap Base CSS styles ]\n",
    "practice": "Override the default primary button background-color locally using CSS root variables.",
    "challenge": "Explain how package loaders compile Bootstrap Sass files during Vite assembly.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n  <style>\n    :root {\n      --bs-primary: #8a2be2;\n      --bs-primary-rgb: 138, 43, 226;\n    }\n  </style>\n</head>\n<body class=\"container p-5\">\n  <button class=\"btn btn-primary\">Custom Violet Button</button>\n</body>\n</html>",
    "ext": "html"
  },
  "16-Responsive-Layouts": {
    "title": "Responsive Layouts",
    "line": "Combines grids, flexboxes, and display helpers to adapt interface designs across screen sizes.",
    "think": "An office layout shifting desks from long rows on desktop screens to stacked individual desks on mobile phones.",
    "example": "Combining columns, margins, and visibility breakpoints in one template.",
    "result": "A fluid, responsive layout page matching any size device.",
    "remember": "Design mobile-first. Write default classes for mobile, then override with sm:, md:, lg: prefixes.",
    "summary": "* Mobile-first default grids.\n* Media-queries breakpoints mappings.",
    "diagram": "\nMobile (default)       Desktop (md:)\n+--------------+       +-----------------------------+\n| Header       |       | Header                      |\n| Section 1    |  ==>  | Section 1   | Sidebar       |\n| Sidebar      |       +-----------------------------+\n+--------------+\n",
    "practice": "Build a grid featuring a sidebar that is hidden on mobile, but visible on tablet devices and larger.",
    "challenge": "Use flex direction responsive utilities to reverse column layouts on mobile devices.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <div class=\"container my-5\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8 bg-light p-3\">Main content (full width on mobile, 8 cols on desktop)</div>\n      <div class=\"col-12 col-md-4 bg-secondary text-white p-3 d-none d-md-block\">Sidebar (hidden on mobile, 4 cols on desktop)</div>\n    </div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  }
};
const BOOTSTRAP_PROJECTS = {
  "01-Landing-Page": {
    "ext": "html",
    "quick": "# Bootstrap Landing Page\n\n## In One Line\nCreate a fully responsive product landing page incorporating a navbar, a carousel banner, a feature grid, and card panels.\n\n## Think Like This\nOrganizing a store window: set up a clear signpost (navbar), rotate the highlight displays (carousel), and organize item racks (grid cards).\n\n## Example\n```html\n<nav class=\"navbar navbar-expand-lg\">...</nav>\n<div class=\"carousel slide\">...</div>\n<div class=\"row\">...</div>\n```\n\n## Result\nRenders a professional landing page.\n\n## Remember\nAlways wrap grid columns (.col) inside rows (.row) inside container divs.\n",
    "source": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Clean Product Landing Page</title>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <!-- Header Navbar -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark sticky-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">SleekApps</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navContent\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navContent\">\n        <ul class=\"navbar-nav ms-auto\">\n          <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"#features\">Features</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Carousel Banner -->\n  <header id=\"hero\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active bg-secondary text-white text-center p-5\">\n        <h1 class=\"display-4\">Build Faster Layouts</h1>\n        <p class=\"lead\">Bootstrap elements compose fully responsive static webs.</p>\n        <button class=\"btn btn-primary btn-lg my-3\">Download Now</button>\n      </div>\n    </div>\n  </header>\n\n  <!-- Feature Grid Cards -->\n  <main id=\"features\" class=\"container my-5\">\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Responsive Design</h5>\n            <p class=\"card-text\">Adapts smoothly across screen sizes.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Prebuilt Grids</h5>\n            <p class=\"card-text\">Flex layouts precompiled inside container classes.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-4\">\n        <div class=\"card h-100\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">CSS Utilities</h5>\n            <p class=\"card-text\">Adjust margins, padding, and text alignments in HTML tags.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <footer class=\"bg-dark text-white text-center py-3\">\n    <p class=\"mb-0\">&copy; 2026 SleekApps. Built with Bootstrap.</p>\n  </footer>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>",
    "practice": "Add a new button class variant to the hero section carousel.",
    "challenge": "Add a 'Pricing' section underneath features containing a three-column card system displaying price rates.",
    "summary": "* Grid columns organize responsive content panels.\n* Navbar headers provide clean navigational routers.",
    "diagram": "\n  [ Navbar header ] -> [ Carousel slide banner ] -> [ Three-column Grid Cards ] -> [ Footer ]\n"
  },
  "02-Portfolio": {
    "ext": "html",
    "quick": "# Bootstrap Portfolio Page\n\n## In One Line\nCompose a professional profile portfolio page featuring biography text, project gallery columns, and a contact form.\n\n## Think Like This\nOrganizing a gallery gallery space: nameplate at the door, display grids showing your canvas works, and a visitors card collection drop-box.\n\n## Example\n```html\n<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"col-lg-8\">...</div>\n  </div>\n</div>\n```\n\n## Result\nBuilds a bio portfolio workspace.\n\n## Remember\nUse responsive utility displays (.d-none, .d-block) to manage which page grids render on desktop vs mobile viewports.\n",
    "source": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Bootstrap Portfolio</title>\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<body class=\"bg-light\">\n  <!-- Top Nav -->\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n    <div class=\"container\">\n      <a class=\"navbar-brand fw-bold\" href=\"#\">Jane Doe</a>\n    </div>\n  </nav>\n\n  <!-- Main Grid -->\n  <div class=\"container my-5\">\n    <div class=\"row\">\n      <!-- Bio column -->\n      <div class=\"col-md-4 mb-4\">\n        <div class=\"card p-3 shadow-sm\">\n          <h3>About Me</h3>\n          <p>I am a Junior developer learning mobile-first layouts with Bootstrap components.</p>\n        </div>\n      </div>\n      <!-- Projects list column -->\n      <div class=\"col-md-8\">\n        <h3>My Projects</h3>\n        <div class=\"row\">\n          <div class=\"col-sm-6 mb-4\">\n            <div class=\"card h-100 shadow-sm\">\n              <div class=\"card-body\">\n                <h5>Recipe Site</h5>\n                <p class=\"card-text\">Semantic tag page structure layout.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mb-4\">\n            <div class=\"card h-100 shadow-sm\">\n              <div class=\"card-body\">\n                <h5>Weather App</h5>\n                <p class=\"card-text\">Interactive weather dashboard.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>",
    "practice": "Add a footer bar using Bootstrap utilities setting dark backgrounds and centered light-colored text.",
    "challenge": "Add a contact form modal trigger button on the biography column, linking to a modal template that contains inputs.",
    "summary": "* Nested grids build modular interfaces.\n* Shadows (.shadow-sm) inject visual premium quality depth.",
    "diagram": "\n  [ Nav header ] -> [ 4-col Bio Card | 8-col Project Sub-Grid ]\n"
  }
};
const TAILWIND_DATA = {
  "01-Introduction": {
    "title": "Tailwind CSS Introduction",
    "line": "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    "think": "Instead of wearing a pre-made suit (Bootstrap component), you pick individual threads (utility classes like bg-blue-500, p-4, text-center) and weave the suit directly on your body.",
    "example": "<button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\">Button</button>",
    "result": "A beautiful primary button with hover transitions.",
    "remember": "No default component styles exist in Tailwind. You compose designs from scratch using small utility tags.",
    "summary": "* Utility-first concept.\n* No bloated custom stylesheets needed.\n* Fast component prototyping directly in HTML.",
    "diagram": "\n+-----------------------------------------------+\n| Custom CSS:   .box { background: blue; }      |\n| Tailwind:     class=\"bg-blue-500\"             |\n+-----------------------------------------------+\n",
    "practice": "Create a card with light background and medium padding using class names.",
    "challenge": "Build a simple box container with gradient background styling.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"p-8\">\n  <div class=\"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-md text-white text-center\">\n    <h2 class=\"text-2xl font-bold\">Utility-First Design</h2>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "02-Installation": {
    "title": "Tailwind CSS Installation",
    "line": "Teach both CDN (quick testing) and Vite CLI (professional build setup) approaches to run Tailwind CSS.",
    "think": "Vending machine snacks (CDN, instant but heavy) vs shopping for fresh ingredients to cook a customized light meal (Vite CLI compilation).",
    "example": "CDN link script vs npm install and configuration.",
    "result": "Prepares workspaces for responsive CSS utility compile runs.",
    "remember": "The CLI compilation scans your code and strips out unused classes, leaving a lightweight production CSS bundle.",
    "summary": "* CDN Method: Quick, simple, ideal for mock drafts.\n* Vite CLI Method: Professional workflow, prunes unused CSS class files, enables config extends.",
    "diagram": "\n+-----------------------------------------------+\n| CDN:  <script src=\"https://cdn.tailwindcss.com\">|\n| CLI:  npm install -D tailwindcss; init config |\n+-----------------------------------------------+\n",
    "practice": "Add the Tailwind play CDN script tag inside a blank HTML page and style a heading.",
    "challenge": "Set up a Node.js project, install tailwindcss, create a tailwind.config.js, and configure content file paths.",
    "example_code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Tailwind Installation Methods</title>\n  <!-- 1. Play CDN (For rapid learning & drafts) -->\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-gray-100 flex items-center justify-center h-screen\">\n  <div class=\"text-center\">\n    <h1 class=\"text-3xl font-semibold text-indigo-600\">Tailwind Loaded!</h1>\n    <!-- 2. CLI Method instructions (For professional builds)\n      a. Install: npm install -D tailwindcss postcss autoprefixer\n      b. Init config: npx tailwindcss init\n      c. Build command: npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch\n    -->\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "03-Utility-Classes": {
    "title": "Tailwind CSS Utility Classes",
    "line": "Utility classes are single-purpose classes that apply styling parameters directly to markup.",
    "think": "Using stickers with individual instructions (make bold, color yellow, add borders) instead of writing a manual recipe sheet.",
    "example": "<p class=\"text-lg font-semibold text-red-500 border border-red-500\">Error</p>",
    "result": "Renders red text with an outlined border box.",
    "remember": "Keep class names organized logically: layout first, sizing next, typography/colors last.",
    "summary": "* Atomic utility structure.\n* Visual output is managed directly inside HTML templates.\n* Avoids creating names like .card-text-inner-wrapper-v2.",
    "diagram": "\n  [ HTML tag ] -- class=\"bg-blue text-white\" --> styled box\n",
    "practice": "Build a notification banner with rounded corners, a light background, and dark text.",
    "challenge": "Combine background gradients, borders, and shadows to build a premium button UI.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-gray-50 p-8 flex justify-center\">\n  <div class=\"max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 border border-gray-200\">\n    <div class=\"font-bold text-xl mb-2 text-gray-800\">Visual Box Card</div>\n    <p class=\"text-gray-600 text-base\">Composition of single classes inside standard html code.</p>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "04-Spacing": {
    "title": "Tailwind CSS Spacing",
    "line": "Utilities to adjust margins, paddings, and flex/grid gaps in increments.",
    "think": "Adding spacing tabs on a layout ruler to keep element blocks from overlapping or sticking together.",
    "example": "<div class=\"p-4 m-2 gap-4\">...</div>",
    "result": "Applies 1rem padding, 0.5rem margin, and 1rem gap spacing.",
    "remember": "Tailwind spacing numbers represent increments of 0.25rem (e.g. p-4 is 1rem / 16px).",
    "summary": "* Padding: p-, px-, py-, pt-, pb-, pl-, pr-.\n* Margin: m-, mx-, my-, mt-, mb-, ml-, mr-.\n* Grid Gap: gap-.\n* Negative margins are supported by prefixing a dash (-m-4).",
    "diagram": "\n  +-----------------------------------+\n  | my-4  (Vertical Margin)           |\n  |  +-----------------------------+  |\n  |  | py-2 (Vertical Padding)     |  |\n  |  +-----------------------------+  |\n  +-----------------------------------+\n",
    "practice": "Build a box element featuring uneven padding (more on left/right, less on top/bottom).",
    "challenge": "Build a responsive grid of card elements utilizing the gap utility to keep items spaced.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-gray-100 p-10\">\n  <div class=\"bg-white p-8 my-6 mx-auto max-w-md rounded-xl shadow-md border border-gray-100\">\n    <h3 class=\"mb-4 text-lg font-bold\">Spacing Ruler</h3>\n    <div class=\"flex gap-2\">\n      <span class=\"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium\">Tag 1</span>\n      <span class=\"bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium\">Tag 2</span>\n    </div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "05-Typography": {
    "title": "Tailwind CSS Typography",
    "line": "Utility classes for font sizing, weight, family, line height, and text alignment.",
    "think": "Adjusting text settings in Word: choosing headline size, bolding titles, adjusting paragraph height.",
    "example": "<h1 class=\"text-3xl font-extrabold tracking-tight text-gray-900\">Title</h1>",
    "result": "Renders a bold, tightly-spaced heading.",
    "remember": "Use tracking utilities (e.g. tracking-tight) on headings for a premium, editorial design aesthetic.",
    "summary": "* Size: text-xs, text-sm, text-base, text-lg, text-xl... to text-9xl.\n* Weight: font-thin, font-light, font-normal, font-bold, font-black.\n* Line height: leading-none, leading-tight, leading-normal, leading-loose.",
    "diagram": "\n  text-3xl (size) + font-bold (weight) + leading-tight (line-height) = Styled Typography\n",
    "practice": "Build a readable article layout featuring a large H1 title, an H2 subtitle, and a paragraph with spacing.",
    "challenge": "Use responsiveness to scale text sizes automatically across screen devices.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"p-8 bg-gray-50\">\n  <article class=\"max-w-xl mx-auto\">\n    <h1 class=\"text-3xl font-extrabold text-gray-900 leading-tight mb-2\">Typography Styles</h1>\n    <p class=\"text-gray-500 text-lg mb-4\">Line height and sizing utilities adapt text layouts.</p>\n    <p class=\"text-gray-700 leading-relaxed\">This is paragraph text with relaxed line heights, improving layout reading comfort.</p>\n  </article>\n</body>\n</html>",
    "ext": "html"
  },
  "06-Flexbox": {
    "title": "Tailwind CSS Flexbox",
    "line": "Lay out elements in one-dimensional rows or columns with spacing control.",
    "think": "Arranging seats in a train car: row directions, spaces in between seats, and vertical alignment centering.",
    "example": "<div class=\"flex justify-between items-center\"><div>1</div><div>2</div></div>",
    "result": "Aligns two divs to opposite ends of a row, vertically centered.",
    "remember": "Combine class 'flex' with 'flex-col' to build vertical card stack alignments.",
    "summary": "* Flex wrapper: flex.\n* Direction: flex-row, flex-col.\n* Alignment: justify-start, justify-center, justify-between, items-center.",
    "diagram": "\n+---------------------------------------------+\n| flex justify-between                        |\n|  [ Element 1 ]               [ Element 2 ]  |\n+---------------------------------------------+\n",
    "practice": "Create a horizontal header bar with a logo on the left and login link on the right.",
    "challenge": "Build a card containing an image on the left and text on the right that collapses into column layouts on small screens.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"p-8 bg-gray-100\">\n  <div class=\"flex flex-col md:flex-row gap-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow\">\n    <div class=\"w-full md:w-1/3 bg-blue-500 h-24 rounded\"></div>\n    <div class=\"w-full md:w-2/3 flex flex-col justify-between\">\n      <h4 class=\"text-lg font-bold text-gray-800\">Flexbox Card</h4>\n      <p class=\"text-sm text-gray-600\">This layout uses flex to align elements.</p>\n    </div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "07-Grid": {
    "title": "Tailwind CSS Grid",
    "line": "Build two-dimensional responsive layouts with columns, rows, and gaps.",
    "think": "A bento box container dividing items into distinct boxes with grids and span columns.",
    "example": "<div class=\"grid grid-cols-3 gap-4\"><div class=\"col-span-2\">Main</div><div>Side</div></div>",
    "result": "Renders a 3-column layout where the main column spans 2 widths.",
    "remember": "Define column counts using class grid-cols-[1-12], then control spans using col-span-[1-12] on children.",
    "summary": "* Grid container: grid.\n* Columns: grid-cols-1, grid-cols-2... to grid-cols-12.\n* Column spanning: col-span-2, col-span-3.\n* Row layout utilities: grid-rows-, row-span-.",
    "diagram": "\n+---------------------------------------------+\n| grid-cols-3                                 |\n|  [   col-span-2 (2/3)   ] [ col-span-1 ]    |\n+---------------------------------------------+\n",
    "practice": "Build a four-column grid of dashboard widget cards.",
    "challenge": "Build a complex dashboard layout featuring a side bar spanning full heights and header/footer rows.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-gray-50 p-6\">\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto\">\n    <div class=\"md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100\">Main Grid Panel</div>\n    <div class=\"bg-indigo-600 text-white p-6 rounded-lg shadow-sm\">Sidebar Widget</div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "08-Colors": {
    "title": "Tailwind CSS Colors",
    "line": "Utilities to color text, backgrounds, borders, and SVGs using the curated palette.",
    "think": "Painting coordinates using pre-mixed designer color swatches (e.g. Slate, Emerald, Indigo) with dark-to-light numeric weights.",
    "example": "<div class=\"bg-emerald-50 border-emerald-500 text-emerald-800\">Alert</div>",
    "result": "Renders a soft green notification panel.",
    "remember": "Color weights range from 50 (lightest tint) to 950 (darkest shade), with 500 representing the pure color.",
    "summary": "* Rich built-in palettes.\n* Weight scale: 50, 100, 200... to 900, 950.\n* Applications: text-*, bg-*, border-*.",
    "diagram": "\n  bg-indigo-500 (Medium Indigo Background) + text-indigo-950 (Dark Indigo Text)\n",
    "practice": "Build a visual button element featuring an indigo background, white text, and an indigo outline border.",
    "challenge": "Create a list of tag elements colored using different color ranges matching status fields.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"p-8 bg-gray-50 flex justify-center gap-4\">\n  <button class=\"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700\">Indigo Action</button>\n  <button class=\"bg-rose-50 text-rose-700 border border-rose-200 px-4 py-2 rounded-md hover:bg-rose-100\">Rose Cancel</button>\n</body>\n</html>",
    "ext": "html"
  },
  "09-Sizing": {
    "title": "Tailwind CSS Sizing",
    "line": "Utility classes to control the width and height of element containers.",
    "think": "Stretching box boundaries: setting absolute pixel size limits, scaling width percentages, or setting height constraints.",
    "example": "<div class=\"w-1/2 md:w-full h-64\">...</div>",
    "result": "Renders a box half-screen wide on mobile and full-width on desktop, with fixed heights.",
    "remember": "Percentage widths use fractions (e.g. w-1/2, w-1/3, w-3/4). Full screens use w-screen/h-screen.",
    "summary": "* Width: w-, w-full, w-screen, w-min, w-max, w-[percentage].\n* Height: h-, h-full, h-screen, h-auto.\n* Min/Max constraints: min-w-, max-w-sm, max-h-screen.",
    "diagram": "\n  +---------------------------------------------+\n  | max-w-md (Maximum width boundary limit)     |\n  |  [ Content Box w-full ]                     |\n  +---------------------------------------------+\n",
    "practice": "Build a circular image container card constrained to w-16 and h-16.",
    "challenge": "Style a login page box that centers on screen and is constrained to max-w-md width limits.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-gray-100 flex items-center justify-center h-screen\">\n  <div class=\"w-80 h-96 bg-white rounded-2xl shadow-xl flex flex-col justify-between p-6\">\n    <div class=\"h-2/3 bg-gray-200 rounded-lg\"></div>\n    <div class=\"h-10 bg-indigo-600 rounded-md text-white text-center flex items-center justify-center font-bold\">Button</div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "10-Responsive-Design": {
    "title": "Tailwind CSS Responsive Design",
    "line": "Manage responsive layouts by prefixing utility classes with viewport breakpoints.",
    "think": "An adaptive layouts blueprint specifying: 'on mobile, hide sidebar; on tablet, show row layout; on desktop, stretch grids'.",
    "example": "<div class=\"w-full md:w-1/2 lg:w-1/3 bg-red-500 md:bg-blue-500\">...</div>",
    "result": "A box that changes width and background color at breakpoint limits.",
    "remember": "Tailwind uses a mobile-first design system. Breakpoint rules apply from that screen size UP.",
    "summary": "* Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px).\n* Target mobile viewports by omitting breakpoint prefixes.",
    "diagram": "\n  [ default: w-full ] -- md: (768px) --> [ w-1/2 ] -- lg: (1024px) --> [ w-1/3 ]\n",
    "practice": "Build a grid containing three item cards. Display 1 column on mobile, 2 on tablet, and 3 on desktop.",
    "challenge": "Style a navigation header that collapses elements and alters layout directions across screen sizes.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-gray-50 p-6\">\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4\">\n    <div class=\"bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center\">Card 1</div>\n    <div class=\"bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center\">Card 2</div>\n    <div class=\"bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center\">Card 3</div>\n    <div class=\"bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center\">Card 4</div>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "11-Hover-States": {
    "title": "Tailwind CSS Hover States",
    "line": "Trigger styles dynamically using interactive prefix states.",
    "think": "Stick instructions stating 'if cursor is hovering, paint background darker green' or 'if focused, add shadow'.",
    "example": "<button class=\"bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300\">Click</button>",
    "result": "Adds interactive transitions and rings on hover and focus.",
    "remember": "Combine hover states with transition utilities (e.g. transition duration-200) for smooth page animations.",
    "summary": "* Hover: hover:bg-dark.\n* Focus input states: focus:ring, focus:outline-none.\n* Active/Pressed states: active:scale-95.",
    "diagram": "\n  [ Button (bg-blue) ] -- Hover cursor --> [ Button (bg-blue-700) ]\n",
    "practice": "Create an interactive input field that adds a purple border outline when focused.",
    "challenge": "Create a grid of interactive project cards that scale up slightly and add shadows when hovered.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"p-8 bg-gray-100 flex justify-center gap-4\">\n  <div class=\"bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer\">\n    <h4 class=\"text-lg font-bold\">Interactive Card</h4>\n    <p class=\"text-sm text-gray-500\">Hover me to see visual transitions.</p>\n  </div>\n</body>\n</html>",
    "ext": "html"
  },
  "12-Dark-Mode": {
    "title": "Tailwind CSS Dark Mode",
    "line": "Style alternative color themes using the dark: media utility selector prefix.",
    "think": "Flipping a light switch. Elements labeled with 'dark:' instructions activate when dark mode is enabled.",
    "example": "<div class=\"bg-white dark:bg-gray-900 text-gray-900 dark:text-white\">Theme Card</div>",
    "result": "Renders dark themes on computers configured for dark mode or containing class dark.",
    "remember": "Tailwind supports both media queries (system settings) and class toggles to enable dark mode.",
    "summary": "* Prefix: dark:bg-dark-color.\n* Toggle themes by adding class=\"dark\" to root html tags.\n* Ensure color contrast stays accessible in both states.",
    "diagram": "\n  HTML (class=\"dark\") ---> activates classes prefixed with dark:\n",
    "practice": "Build a card element that displays light backgrounds and dark text by default, but reverses colors when class dark is enabled.",
    "challenge": "Build a dark mode toggle button script that changes the root page theme dynamically.",
    "example_code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n  <script>\n    tailwind.config = { darkMode: 'class' }\n    function toggleTheme() { document.documentElement.classList.toggle('dark'); }\n  </script>\n</head>\n<body class=\"bg-white dark:bg-slate-900 text-slate-800 dark:text-white min-h-screen flex flex-col items-center justify-center transition-colors duration-300\">\n  <h1 class=\"text-3xl font-extrabold mb-4\">Dark Mode Toggle</h1>\n  <button onclick=\"toggleTheme()\" class=\"bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700\">Toggle Theme</button>\n</body>\n</html>",
    "ext": "html"
  },
  "13-Component-Patterns": {
    "title": "Tailwind CSS Component Patterns",
    "line": "Compose and modularize utility classes using templates or CSS directive configurations.",
    "think": "Creating a rubber stamp tool containing a combined design (e.g. @apply btn styles) instead of drawing the button from scratch every time.",
    "example": ".btn-custom { @apply bg-indigo-500 text-white px-4 py-2 rounded; }",
    "result": "Bundles multiple utility classes into a clean, reusable CSS class name.",
    "remember": "Only use @apply when class lists become extremely long and hard to navigate in templates.",
    "summary": "* Avoid class duplication.\n* Custom component classes using @apply in base input.css files.\n* Fits perfectly when building reusable layouts.",
    "diagram": "\n  .my-button { @apply bg-blue-500 py-2 px-4 rounded text-white }\n",
    "practice": "Write a mock stylesheet block defining a custom card layout using the @apply directive.",
    "challenge": "Explain the disadvantages of overusing @apply (such as losing the speed benefits of pure utility development).",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n  <style type=\"text/tailwindcss\">\n    /* Simulating custom compiled component class */\n    @layer components {\n      .btn-pill {\n        @apply bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition;\n      }\n    }\n  </style>\n</head>\n<body class=\"p-8 bg-gray-50 flex justify-center\">\n  <button class=\"btn-pill\">Pill Action</button>\n</body>\n</html>",
    "ext": "html"
  },
  "14-Customization": {
    "title": "Tailwind CSS Customization",
    "line": "Extend and customize the default utility values inside the tailwind.config.js configuration file.",
    "think": "Tuning a car's engine parameters or adding a custom paint swatches palette to the factory dashboard options.",
    "example": "theme: { extend: { colors: { brandColor: '#7a22e8' } } }",
    "result": "Enables brand color utilities like bg-brandColor or text-brandColor.",
    "remember": "Always place custom color palettes inside the 'extend' object to keep from overwriting default color libraries.",
    "summary": "* Configuration file: tailwind.config.js.\n* Extend themes: colors, screens, fonts, spacing.\n* Plugins integration support.",
    "diagram": "\n  [ custom brandColor config ] ---> injects ---> [ Tailwind utility list: bg-brandColor ]\n",
    "practice": "Add a custom theme color configuration to a mock tailwind config block.",
    "challenge": "Configure responsive breakpoints in your configurations to match custom viewport parameters.",
    "example_code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n  <script>\n    // Custom tailwind configuration overrides\n    tailwind.config = {\n      theme: {\n        extend: {\n          colors: {\n            brand: '#4f46e5',\n            brandDark: '#3730a3'\n          }\n        }\n      }\n    }\n  </script>\n</head>\n<body class=\"bg-gray-100 flex items-center justify-center h-screen\">\n  <div class=\"bg-brand text-white p-8 rounded-lg shadow-lg text-center hover:bg-brandDark transition-colors\">\n    <h2 class=\"text-2xl font-bold\">Custom Themed Component</h2>\n  </div>\n</body>\n</html>",
    "ext": "html"
  }
};
const TAILWIND_PROJECTS = {
  "01-Pricing-Card": {
    "ext": "html",
    "quick": "# Tailwind CSS Pricing Card\n\n## In One Line\nBuild a beautiful, responsive three-tier pricing card page grid with shadows, hover transitions, and clean badge highlights.\n\n## Think Like This\nOrganizing a pricing sheet: create border-separated grids, highlight the 'best seller' package (scale, vibrant button), and display list tags.\n\n## Example\n```html\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">...</div>\n```\n\n## Result\nRenders a premium subscription card page.\n\n## Remember\nUsing font tracking (tracking-tight) and shadows (shadow-xl) makes layouts look professional.\n",
    "source": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Pricing Card Tiers</title>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-slate-900 text-slate-100 flex min-h-screen items-center justify-center p-6\">\n  <div class=\"max-w-5xl w-full\">\n    <div class=\"text-center mb-10\">\n      <h1 class=\"text-3xl md:text-4xl font-extrabold tracking-tight\">Flexible Pricing Plans</h1>\n      <p class=\"text-slate-400 mt-2\">Choose the tier that matches your scope.</p>\n    </div>\n\n    <!-- Pricing Grid -->\n    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n      <!-- Tier 1 -->\n      <div class=\"bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between shadow-md\">\n        <div>\n          <h3 class=\"text-xl font-bold\">Starter</h3>\n          <div class=\"mt-4 text-3xl font-extrabold\">$19<span class=\"text-sm font-normal text-slate-400\">/mo</span></div>\n          <p class=\"text-slate-400 mt-3 text-sm\">Perfect for beginners learning layouts.</p>\n        </div>\n        <button class=\"w-full mt-6 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-xl font-bold transition\">Get Started</button>\n      </div>\n\n      <!-- Tier 2 (Highlighted) -->\n      <div class=\"bg-slate-800 border-2 border-indigo-500 p-6 rounded-2xl flex flex-col justify-between shadow-xl relative transform md:-translate-y-2\">\n        <span class=\"absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-xs font-semibold px-3 py-1 rounded-full text-white\">POPULAR</span>\n        <div>\n          <h3 class=\"text-xl font-bold text-white\">Professional</h3>\n          <div class=\"mt-4 text-3xl font-extrabold text-white\">$49<span class=\"text-sm font-normal text-slate-400\">/mo</span></div>\n          <p class=\"text-slate-400 mt-3 text-sm\">Best for production web designs.</p>\n        </div>\n        <button class=\"w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-bold shadow-md shadow-indigo-600/30 transition\">Get Started</button>\n      </div>\n\n      <!-- Tier 3 -->\n      <div class=\"bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between shadow-md\">\n        <div>\n          <h3 class=\"text-xl font-bold\">Enterprise</h3>\n          <div class=\"mt-4 text-3xl font-extrabold\">$99<span class=\"text-sm font-normal text-slate-400\">/mo</span></div>\n          <p class=\"text-slate-400 mt-3 text-sm\">For full stack team coordination.</p>\n        </div>\n        <button class=\"w-full mt-6 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-xl font-bold transition\">Get Started</button>\n      </div>\n    </div>\n  </div>\n</body>\n</html>",
    "practice": "Add list checks of plan advantages (e.g. 'Unlimited storage') inside the cards.",
    "challenge": "Add a custom tailwind configuration defining custom font families and apply them to the headings.",
    "summary": "* Grids layout responsive cards.\n* Absolute badges highlight best plans.",
    "diagram": "\n  [ Title text ] -> [ 3-col Grid Cards (Middle Card Scaled / Highlighted) ]\n"
  },
  "02-Portfolio-Section": {
    "ext": "html",
    "quick": "# Tailwind CSS Portfolio Section\n\n## In One Line\nCompose a premium developer portfolio profile section featuring biography cards and visual skill bars.\n\n## Think Like This\nArranging a personal resume display case: bold headers, clean card grids showing skill competencies, and social badges.\n\n## Example\n```html\n<div class=\"flex flex-col md:flex-row items-center\">...</div>\n```\n\n## Result\nBuilds a visual biography card component.\n\n## Remember\nUsing slate tones (bg-slate-900) paired with indigo accents provides a modern, high-contrast dark theme.\n",
    "source": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Portfolio</title>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center p-6\">\n  <div class=\"max-w-2xl w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl\">\n    <div class=\"flex flex-col sm:flex-row items-center gap-6\">\n      <div class=\"w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-extrabold\">JD</div>\n      <div class=\"text-center sm:text-left\">\n        <h1 class=\"text-2xl font-bold text-white\">Jane Doe</h1>\n        <p class=\"text-indigo-400\">Junior Full Stack Developer</p>\n        <p class=\"text-slate-400 text-sm mt-1\">Based in Silicon Valley, building responsive MERN applications.</p>\n      </div>\n    </div>\n\n    <!-- Skills Section -->\n    <div class=\"mt-8\">\n      <h3 class=\"text-lg font-bold border-b border-slate-800 pb-2\">Skills</h3>\n      <div class=\"grid grid-cols-2 gap-4 mt-4\">\n        <div class=\"bg-slate-950 p-4 rounded-xl border border-slate-800\">\n          <div class=\"text-xs text-slate-500 font-semibold uppercase\">Frontend</div>\n          <div class=\"text-sm font-bold mt-1 text-white\">React, Tailwind CSS</div>\n        </div>\n        <div class=\"bg-slate-950 p-4 rounded-xl border border-slate-800\">\n          <div class=\"text-xs text-slate-500 font-semibold uppercase\">Backend</div>\n          <div class=\"text-sm font-bold mt-1 text-white\">Node.js, MongoDB</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>",
    "practice": "Add a list of social links pointing to your mock GitHub and LinkedIn pages.",
    "challenge": "Add a visual skill bar loader component using percentage widths and gradients.",
    "summary": "* Flex layouts organize biography cards.\n* Colors define status areas.",
    "diagram": "\n  [ Avatar Icon | Title & Bio details ] -> [ 2-col Skill Card Grids ]\n"
  },
  "03-Dashboard-UI": {
    "ext": "html",
    "quick": "# Tailwind CSS Dashboard UI\n\n## In One Line\nDesign a responsive administrative panel interface containing sidebars, stats grids, and active tables.\n\n## Think Like This\nOrganizing a control cockpit: a left panel for switches (sidebar), center dials for measurements (stats), and lists for logs (table).\n\n## Example\n```html\n<div class=\"flex h-screen\">\n  <div class=\"w-64 bg-slate-800\">Sidebar</div>\n  <div class=\"flex-1 overflow-auto\">Main Dashboard</div>\n</div>\n```\n\n## Result\nCreates a full admin control dashboard.\n\n## Remember\nUsing overflow-auto on the content wrapper keeps the sidebar fixed while content scrolls.\n",
    "source": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Admin Dashboard</title>\n  <script src=\"https://cdn.tailwindcss.com\"></script>\n</head>\n<body class=\"bg-slate-900 text-slate-100 flex h-screen overflow-hidden\">\n  <!-- Sidebar -->\n  <aside class=\"w-64 bg-slate-950 border-r border-slate-800 p-6 hidden md:flex flex-col justify-between\">\n    <div>\n      <h2 class=\"text-xl font-bold text-indigo-500 mb-8\">AdminPanel</h2>\n      <nav class=\"space-y-4\">\n        <a href=\"#\" class=\"block bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-medium\">Dashboard</a>\n        <a href=\"#\" class=\"block text-slate-400 hover:text-white px-4 py-2 text-sm\">Users</a>\n      </nav>\n    </div>\n    <div class=\"text-xs text-slate-600\">v1.0.0 Release</div>\n  </aside>\n\n  <!-- Main Workspace -->\n  <main class=\"flex-1 flex flex-col overflow-hidden\">\n    <!-- Header -->\n    <header class=\"bg-slate-950 h-16 border-b border-slate-800 flex items-center justify-between px-8\">\n      <div class=\"font-bold\">Dashboard Overview</div>\n      <div class=\"w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center font-bold\">A</div>\n    </header>\n\n    <!-- Content Area -->\n    <div class=\"flex-1 overflow-y-auto p-8 space-y-6\">\n      <!-- Stats Row -->\n      <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-4\">\n        <div class=\"bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-sm\">\n          <div class=\"text-xs text-slate-400 font-semibold\">Total Revenue</div>\n          <div class=\"text-2xl font-bold mt-2\">$24,902</div>\n        </div>\n        <div class=\"bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-sm\">\n          <div class=\"text-xs text-slate-400 font-semibold\">Active Subscriptions</div>\n          <div class=\"text-2xl font-bold mt-2\">1,249</div>\n        </div>\n        <div class=\"bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-sm\">\n          <div class=\"text-xs text-slate-400 font-semibold\">Completed Orders</div>\n          <div class=\"text-2xl font-bold mt-2\">842</div>\n        </div>\n      </div>\n    </div>\n  </main>\n</body>\n</html>",
    "practice": "Add a list table of recent transactions inside the main content area.",
    "challenge": "Add a responsive hamburger menu script to toggle sidebar visibility on mobile devices.",
    "summary": "* Dashboard designs combine flex sidebars with scrollable grids.\n* Stats highlight crucial business parameters.",
    "diagram": "\n  [ Sidebar (md:flex) | Main Content Area (flex-1 overflow-y-auto) ]\n"
  }
};
const REACT_DATA = {
  "01-Introduction": {
    "title": "React Introduction",
    "line": "React is a JavaScript library for building component-based user interfaces with responsive state tracking.",
    "think": "Painting a house. Instead of repainting the entire building (HTML reload) every time a window gets dirty, you unscrew and replace only the single window panel (Virtual DOM update).",
    "example": "const element = <h1>Hello React</h1>;",
    "result": "Renders an HTML element inside the page DOM dynamically.",
    "remember": "React works by comparing changes in a lightweight copy of the browser DOM (Virtual DOM) and updates only the differences.",
    "summary": "* Component-based architectures organize UI elements.\n* Virtual DOM renders page components highly efficiently.\n* Standardized state changes schedule updates automatically.",
    "diagram": "\n+---------------------------------------------------------+\n| VIRTUAL DOM UPDATE FLOW                                 |\n|                                                         |\n|  State Change ---> Update Virtual DOM ---> Diff Check   |\n|                                                |        |\n|  Only Modified elements updated <--- Apply diffs        |\n+---------------------------------------------------------+\n",
    "practice": "Explain the difference between libraries (React) vs frameworks (Angular/Vue).",
    "challenge": "Explain how JSX translates code strings into React.createElement objects.",
    "example_code": "// 1. Virtual DOM comparison blueprint simulation\nconst simulatedVirtualDOM = {\n  type: 'div',\n  props: { className: 'card' },\n  children: [\n    { type: 'h1', props: {}, children: 'My Component' }\n  ]\n};\n\n// 2. Pure React element creation (without JSX template parsers)\nimport React from 'react';\nfunction WelcomeHeader() {\n  return React.createElement(\n    'h1',\n    { className: 'title-header' },\n    'Welcome to React!'\n  );\n}\n\nexport default WelcomeHeader;",
    "ext": "jsx"
  },
  "02-Setup-Vite": {
    "title": "Vite React Setup",
    "line": "Vite is a fast build tool used to scaffold and run modern React applications.",
    "think": "Scaffolding a house framework: creating folders for blueprints (src), assets, and tool sets (npm) ready to develop.",
    "example": "npm create vite@latest my-app -- --template react",
    "result": "Creates a pre-configured React project directory.",
    "remember": "Vite uses native ES modules to compile code in milliseconds, making save-reloads extremely fast.",
    "summary": "* Vite scaffolds projects instantly.\n* Command flags configure templates: --template react.\n* Run scripts: npm run dev (local host) and npm run build (production packages).",
    "diagram": "\n+-------------------------------------------------+\n| VIRTUAL DEV SERVER                              |\n|  Vite scans files -> Serves ES Modules directly |\n|  No bundle compiles on save -> Millisecond reload|\n+-------------------------------------------------+\n",
    "practice": "Open your terminal, scaffold a mock Vite React app, and run it locally.",
    "challenge": "Verify file directories and explain the purpose of vite.config.js.",
    "example_code": "# 1. Scaffold a fresh React application using Vite\nnpm create vite@latest react-workspace -- --template react\n\n# 2. Enter workspace folder\ncd react-workspace\n\n# 3. Download dependencies\nnpm install\n\n# 4. Spin up local development server\nnpm run dev\n\n# 5. Build for production distribution\nnpm run build",
    "ext": "sh"
  },
  "03-JSX": {
    "title": "React JSX",
    "line": "JSX is a syntax extension that allows you to write HTML-like code inside JavaScript files.",
    "think": "Writing HTML tags directly on a JavaScript whiteboard. You can write markup plus equations in matching braces.",
    "example": "const card = <div className=\"box\">{2 + 2}</div>;",
    "result": "Renders a div displaying the calculation result 4.",
    "remember": "JSX requires camelCase attribute names (e.g. className, htmlFor) and all tags must be closed.",
    "summary": "* HTML tags inside JS scripts.\n* Wrap JS variables/expressions inside curly braces {}.\n* Return single root element container (or empty Fragment <> </>).",
    "diagram": "\n  const code = <h1>{ 2 + 2 }</h1> ---> compiles to ---> React.createElement('h1', null, 4)\n",
    "practice": "Build a JSX component that displays your name, age, and a calculated date details.",
    "challenge": "Render an image element inside JSX using class names and responsive alt descriptions.",
    "example_code": "import React from 'react';\n\nfunction JSXExample() {\n  const username = \"Jane Doe\";\n  const userRole = \"Developer\";\n  const inlineStyles = { color: 'indigo', fontWeight: 'bold' };\n\n  return (\n    // JSX must return a single root element. We use a Fragment (<>...</>) to group elements\n    <>\n      <div className=\"profile-card\">\n        <h1 style={inlineStyles}>Hello, {username}!</h1>\n        <p>Your current job role is: <strong>{userRole}</strong></p>\n        <label htmlFor=\"user-status\">Status: </label>\n        <input type=\"text\" id=\"user-status\" disabled={false} placeholder=\"Active\" />\n      </div>\n    </>\n  );\n}\n\nexport default JSXExample;",
    "ext": "jsx"
  },
  "04-Components": {
    "title": "React Components",
    "line": "Components are reusable, independent building blocks of code that return user interface elements.",
    "think": "Bricks in a Lego kit. You build a wall by clicking together individual bricks: a button component, a card component, a header component.",
    "example": "function Button() { return <button>Click</button>; }",
    "result": "Creates a reusable HTML button element template.",
    "remember": "React component function names must always begin with a Capital letter (e.g. Header, not header).",
    "summary": "* Modular structural blocks.\n* Can be nested inside one another.\n* Keep code clean, reusable, and easy to test.",
    "diagram": "\n+---------------------------------------------+\n| APP COMPONENT TREE                          |\n|                                             |\n|          [ App (Root) ]                     |\n|           /        \\                        |\n|   [ Header ]      [ Main Content ]          |\n|                     /          \\            |\n|               [ Card ]       [ Button ]     |\n+---------------------------------------------+\n",
    "practice": "Create a Footer component and nest it inside your main App layout component.",
    "challenge": "Nest a Button component multiple times inside a Card component and inspect the duplicate rendering.",
    "example_code": "import React from 'react';\n\n// 1. Child Component Blueprint\nfunction NavButton() {\n  return (\n    <button className=\"nav-btn\">Menu Item</button>\n  );\n}\n\n// 2. Parent Layout Component nesting Child blueprints\nfunction HeaderBar() {\n  return (\n    <header className=\"header-nav\">\n      <h3>BrandName</h3>\n      <nav>\n        <NavButton />\n        <NavButton />\n        <NavButton />\n      </nav>\n    </header>\n  );\n}\n\nexport default HeaderBar;",
    "ext": "jsx"
  },
  "05-Props": {
    "title": "React Props",
    "line": "Props (properties) are custom parameters passed down from parent components to child components.",
    "think": "Passing values into a function parameter list. The parent calls the child function, sending variables along.",
    "example": "<UserCard name=\"Alice\" />",
    "result": "Renders the card displaying the dynamic name 'Alice'.",
    "remember": "Props are read-only! A child component must never modify the props it receives.",
    "summary": "* Parent to child data transfer.\n* Declared as HTML attributes.\n* Destructuring simplify accessing props inside variables.",
    "diagram": "\n  Parent (data=\"Active\") -- Props --> Child (receives props.data)\n",
    "practice": "Build a Welcome component that accepts firstName and lastName props and displays them.",
    "challenge": "Set default values on component props and verify the layout output when parameters are missing.",
    "example_code": "import React from 'react';\n\n// Destructuring props parameters directly in argument lists\nfunction MemberCard({ name, role = \"Apprentice\", activeStatus }) {\n  return (\n    <div className=\"member bg-slate-100 p-4 rounded shadow\">\n      <h5>Name: {name}</h5>\n      <p>Role: {role}</p>\n      <p>Status: {activeStatus ? \"Online\" : \"Offline\"}</p>\n    </div>\n  );\n}\n\nfunction TeamList() {\n  return (\n    <section>\n      {/* Passing different prop types: string (name), boolean (activeStatus) */}\n      <MemberCard name=\"Alice\" role=\"Lead Engineer\" activeStatus={true} />\n      <MemberCard name=\"Bob\" activeStatus={false} />\n    </section>\n  );\n}\n\nexport default TeamList;",
    "ext": "jsx"
  },
  "06-State": {
    "title": "React State",
    "line": "State is a built-in object used to store component data that triggers re-renders when changed.",
    "think": "A score board in a stadium game. When someone scores, the board updates (changes state), and the crowd sees the new numbers (re-render).",
    "example": "const [count, setCount] = useState(0);",
    "result": "Initializes a state variable count to 0 and a setter function setCount.",
    "remember": "Never mutate state variables directly (e.g. count = 5)! Always use the setter function (setCount(5)) to trigger updates.",
    "summary": "* State stores dynamic data.\n* useState hook: creates state and setter.\n* State changes force component re-renders.",
    "diagram": "\n  [ User Action ] ---> call setCount() ---> [ State changes ] ---> [ React re-renders UI ]\n",
    "practice": "Build a counter component with '+' and '-' buttons that increase and decrease a tally number.",
    "challenge": "Build a text input character counter that updates the remaining character limits on screen in real-time.",
    "example_code": "import React, { useState } from 'react';\n\nfunction CounterApp() {\n  // useState hooks parameters: [variable, setter] = useState(initialValue)\n  const [count, setCount] = useState(0);\n\n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n  const reset = () => setCount(0);\n\n  return (\n    <div className=\"counter-box\">\n      <h2>Tally Count: {count}</h2>\n      <button onClick={decrement}>- Decrease</button>\n      <button onClick={reset}>Reset</button>\n      <button onClick={increment}>+ Increase</button>\n    </div>\n  );\n}\n\nexport default CounterApp;",
    "ext": "jsx"
  },
  "07-Events": {
    "title": "React Events",
    "line": "Event handling allows you to run functions in response to user interactions (clicks, inputs, submits).",
    "think": "Adding trigger sensors onto a screen. When a sensor detects a click, it fires a corresponding alarm function.",
    "example": "<button onClick={handleClick}>Click</button>",
    "result": "Fires the handleClick function when the button is clicked.",
    "remember": "Pass the function reference (onClick={handleClick}), do not invoke it immediately (onClick={handleClick()}).",
    "summary": "* Event naming uses camelCase: onClick, onChange, onSubmit.\n* SyntheticEvent wrapper adapts events across browser targets.\n* Prevent default behaviors using e.preventDefault().",
    "diagram": "\n  User Click ---> fires SyntheticEvent ---> trigger callback function\n",
    "practice": "Build an input box that logs typed characters to the console as you type.",
    "challenge": "Add a button that toggles page themes between dark and light modes, changing container background styles.",
    "example_code": "import React, { useState } from 'react';\n\nfunction FormEventHandler() {\n  const [inputVal, setInputVal] = useState(\"\");\n\n  const handleInputChange = (e) => {\n    // e.target.value accesses the value of the active HTML input tag\n    setInputVal(e.target.value);\n  };\n\n  const handleFormSubmit = (e) => {\n    e.preventDefault(); // Blocks default form page reload reload\n    alert(\"Submitted value: \" + inputVal);\n  };\n\n  return (\n    <form onSubmit={handleFormSubmit}>\n      <input type=\"text\" value={inputVal} onChange={handleInputChange} />\n      <button type=\"submit\">Submit Info</button>\n    </form>\n  );\n}\n\nexport default FormEventHandler;",
    "ext": "jsx"
  },
  "08-Conditional-Rendering": {
    "title": "React Conditional Rendering",
    "line": "Conditional rendering allows you to display different UI layouts depending on state parameters.",
    "think": "An airport boarding gate. If you have a ticket (state true), you pass; if not, you are redirect-blocked.",
    "example": "{isLoggedIn ? <Profile /> : <Login />}",
    "result": "Renders the Profile component if isLoggedIn is true, otherwise renders Login.",
    "remember": "Use the && logical operator when you want to render an element only if a condition is true (if false, it renders nothing).",
    "summary": "* Render outputs conditionally.\n* Logical && operator evaluation.\n* Ternary ? : operators switch structures.\n* Standard if/else blocks inside parent scripts.",
    "diagram": "\n                        [ Condition (isPremium?) ]\n                             /             \\\n                         True               False\n                           v                 v\n                    [ Premium UI ]     [ Standard Ads ]\n",
    "practice": "Build a component displaying a warning message only if status active is false.",
    "challenge": "Implement three-state toggles displaying loading, success, and error templates based on network statuses.",
    "example_code": "import React, { useState } from 'react';\n\nfunction StatusChecker() {\n  const [isLogged, setIsLogged] = useState(false);\n\n  return (\n    <div className=\"status-panel\">\n      {/* 1. Ternary Operator: if/else mapping */}\n      <h2>User Status: {isLogged ? \"Signed In\" : \"Signed Out\"}</h2>\n      \n      {/* 2. Logic && Operator: conditional render of notification */}\n      {isLogged && <div class=\"msg\">Welcome back, Developer!</div>}\n\n      <button onClick={() => setIsLogged(!isLogged)}>\n        {isLogged ? \"Log Out\" : \"Log In\"}\n      </button>\n    </div>\n  );\n}\n\nexport default StatusChecker;",
    "ext": "jsx"
  },
  "09-Lists-And-Keys": {
    "title": "React Lists & Keys",
    "line": "Loop through arrays to output multiple elements, identifying each with a unique key prop.",
    "think": "Labeling coat hangers in a cloakroom with ticket numbers so the attendant can grab specific items instantly.",
    "example": "items.map((item) => <li key={item.id}>{item.name}</li>)",
    "result": "Loops through the array to render list items with unique identifiers.",
    "remember": "Keys must be stable, predictable, and unique! Never use array index numbers as keys if elements can be reordered.",
    "summary": "* Loop array items using .map().\n* Unique key prop identifies list items.\n* Keys help React check diff updates efficiently.",
    "diagram": "\n  Array: [A, B, C] -- map() --> [ <li key=\"A\">A</li>, <li key=\"B\">B</li> ]\n",
    "practice": "Build a list of five favorite foods mapping from a text array.",
    "challenge": "Filter a list of objects based on a property (e.g. only active users) before mapping them to JSX elements.",
    "example_code": "import React from 'react';\n\nfunction ShoppingList() {\n  const products = [\n    { id: 101, name: \"Tablet\", price: 299 },\n    { id: 102, name: \"Mouse\", price: 29 },\n    { id: 103, name: \"Keyboard\", price: 79 }\n  ];\n\n  return (\n    <div className=\"cart\">\n      <h4>Shopping Cart</h4>\n      <ul>\n        {/* Mapping array to JSX list elements */}\n        {products.map((prod) => (\n          <li key={prod.id}>\n            {prod.name} - ${prod.price}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default ShoppingList;",
    "ext": "jsx"
  },
  "10-Forms": {
    "title": "React Forms",
    "line": "Forms manage input values by storing them in React state (Controlled Components).",
    "think": "A secretary typing notes. Every keystroke is immediately logged on the clipboard (state), keeping inputs synchronized.",
    "example": "<input value={text} onChange={(e) => setText(e.target.value)} />",
    "result": "Input box values are controlled entirely by state variables.",
    "remember": "In controlled forms, the React state is the 'single source of truth' for input box fields.",
    "summary": "* Controlled components bind input values to state.\n* onChange event handler updates state on input key strikes.\n* form onSubmit handles form submission actions.",
    "diagram": "\n  User Input text ---> onChange fires ---> setState() ---> UI update (text shown)\n",
    "practice": "Build a form with Name and Email inputs, alerting values on submission.",
    "challenge": "Build a multi-input form wrapper utilizing a single state object to track values.",
    "example_code": "import React, { useState } from 'react';\n\nfunction SignupForm() {\n  const [formData, setFormData] = useState({ name: \"\", email: \"\" });\n\n  const handleChange = (e) => {\n    // Dynamic key assignment using input tag name attributes\n    const { name, value } = e.target;\n    setFormData({\n      ...formData,\n      [name]: value\n    });\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"Form data submitted:\", formData);\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className=\"p-4\">\n      <input type=\"text\" name=\"name\" value={formData.name} onChange={handleChange} placeholder=\"Name\" />\n      <input type=\"email\" name=\"email\" value={formData.email} onChange={handleChange} placeholder=\"Email\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n\nexport default SignupForm;",
    "ext": "jsx"
  },
  "11-useEffect": {
    "title": "React useEffect",
    "line": "The useEffect hook performs side effects (data fetching, subscriptions, timer logs) in functional components.",
    "think": "An auto-start script in a smart home: 'When I walk in (mount), turn on lights. When temperature updates (dependency change), adjust AC'.",
    "example": "useEffect(() => { console.log('Mounted'); }, []);",
    "result": "Logs 'Mounted' once when the component is rendered on screen.",
    "remember": "No dependency array runs on *every* render. Empty array `[]` runs *once* on mount. Array with variables `[x]` runs on changes.",
    "summary": "* Side effects handler hook.\n* Mount phase (runs once), Update phase (runs on dependencies changes).\n* Cleanup phase: return a function to clear intervals/subscriptions on unmount.",
    "diagram": "\n  Render ---> Execute useEffect callback ---> Cleanup (before next run or unmount)\n",
    "practice": "Build a component that console logs a message every time a count state variable updates.",
    "challenge": "Set up a tick interval timer using setInterval, ensuring to clean it up with clearInterval in the return statement.",
    "example_code": "import React, { useState, useEffect } from 'react';\n\nfunction TimerTracker() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    console.log(\"Timer component mounted.\");\n    \n    // Set up a tick timer increment interval\n    const interval = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n\n    // Return cleanup function to clear active timers on component destroy\n    return () => {\n      clearInterval(interval);\n      console.log(\"Timer component unmounted. Cleared interval.\");\n    };\n  }, []); // Empty array limits execution to initial mount\n\n  return (\n    <h2>Ticking timer seconds: {seconds}</h2>\n  );\n}\n\nexport default TimerTracker;",
    "ext": "jsx"
  },
  "12-Fetching-Data": {
    "title": "Fetching Data in React",
    "line": "Connect component states to external APIs using fetch inside useEffect hooks.",
    "think": "A waiter fetching dishes from a kitchen. The table sits empty (loading state) until the waiter returns with data.",
    "example": "fetch(url).then(res => res.json()).then(data => setData(data));",
    "result": "Populates component state with remote API datasets.",
    "remember": "Always handle loading states and API error bounds to prevent blank screens when fetches fail.",
    "summary": "* Trigger fetches inside useEffect hooks.\n* Fetch outputs map to state.\n* Track loading and error variables.",
    "diagram": "\n  Mount ---> trigger fetch() ---> show Loading spinner ---> parse JSON ---> show Data\n",
    "practice": "Fetch a list of users from a public JSON API and display them in a list.",
    "challenge": "Add a text query input that refetches data for a specific user ID when a search button is clicked.",
    "example_code": "import React, { useState, useEffect } from 'react';\n\nfunction UserProfiles() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(res => {\n        if (!res.ok) throw new Error(\"Network connection error\");\n        return res.json();\n      })\n      .then(data => {\n        setUsers(data);\n        setLoading(false);\n      })\n      .catch(err => {\n        setError(err.message);\n        setLoading(false);\n      });\n  }, []);\n\n  if (loading) return <p>Loading profiles...</p>;\n  if (error) return <p class=\"error\">Error: {error}</p>;\n\n  return (\n    <ul>\n      {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}\n    </ul>\n  );\n}\n\nexport default UserProfiles;",
    "ext": "jsx"
  },
  "13-Lifting-State-Up": {
    "title": "Lifting State Up",
    "line": "Share state between components by moving it to their closest common ancestor.",
    "think": "Two siblings needing to share a toy. Instead of each claiming it, they put it in their parent's cabinet (ancestor state) to share.",
    "example": "Pass state variable and state-setting callback functions down as props.",
    "result": "Synchronizes sibling inputs and lists instantly.",
    "remember": "Lifting state up keeps components unified, making data flow predictable.",
    "summary": "* Sync sibling elements.\n* Lifting state to common parents.\n* Callbacks trigger parent state setters.",
    "diagram": "\n        [ Parent Component (holds state) ]\n             /                        \\\n     [ Input Component ]        [ Display Component ]\n      (triggers callback)        (renders updated state)\n",
    "practice": "Build a parent page containing a text input component and a text display component, showing the text synchronized.",
    "challenge": "Build a coordinate selector where clicking buttons in child A shifts display maps in child B.",
    "example_code": "import React, { useState } from 'react';\n\n// Sibling A: Input controller\nfunction TextSelector({ text, onTextChange }) {\n  return (\n    <input type=\"text\" value={text} onChange={(e) => onTextChange(e.target.value)} />\n  );\n}\n\n// Sibling B: Preview canvas\nfunction TextRenderer({ text }) {\n  return (\n    <div className=\"preview border p-4 bg-gray-50\">\n      <h3>Active Render: {text || \"(No Text)\"}</h3>\n    </div>\n  );\n}\n\n// Parent: Master container holding states\nfunction SyncedParent() {\n  const [sharedText, setSharedText] = useState(\"\");\n\n  return (\n    <div className=\"container\">\n      <TextSelector text={sharedText} onTextChange={setSharedText} />\n      <hr />\n      <TextRenderer text={sharedText} />\n    </div>\n  );\n}\n\nexport default SyncedParent;",
    "ext": "jsx"
  },
  "14-Context-API": {
    "title": "React Context API",
    "line": "The Context API shares global state parameters across components without manual prop-drilling.",
    "think": "Installing a wireless broadcast tower in the neighborhood. Any house (nested component) can tune in and receive data directly.",
    "example": "const UserContext = createContext();",
    "result": "Creates a broadcast provider to feed deep nested components.",
    "remember": "Context API is ideal for global settings like user login states, visual themes, or language preferences.",
    "summary": "* Avoids prop-drilling.\n* Context Providers broadcast values.\n* useContext hooks access context payloads directly.",
    "diagram": "\n  [ ThemeProvider (context) ] ==== broadcasts value ====> [ Deep Nested Child (useContext) ]\n",
    "practice": "Create a theme context and use it to style text components directly.",
    "challenge": "Build a global user profile context provider that logs profiles, updating deep panels.",
    "example_code": "import React, { createContext, useContext, useState } from 'react';\n\n// 1. Create Context Object\nconst ThemeContext = createContext();\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState(\"light\");\n  const toggleTheme = () => setTheme(prev => prev === \"light\" ? \"dark\" : \"light\");\n\n  return (\n    // 2. Broadcast Context values\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// 3. Child consuming broadcast data directly\nexport function ThemeToggleButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return (\n    <button onClick={toggleTheme} className={theme}>\n      Set to {theme === \"light\" ? \"Dark\" : \"Light\"}\n    </button>\n  );\n}",
    "ext": "jsx"
  },
  "15-Custom-Hooks": {
    "title": "React Custom Hooks",
    "line": "Extract component states logic into reusable custom JavaScript functions.",
    "think": "Creating a pre-wired security module. You install it in different houses; they all check alarms identical but operate independent.",
    "example": "function useToggle(init) { ... return [val, toggle]; }",
    "result": "Provides reusable custom hook blueprints for components.",
    "remember": "Custom hook function names must always begin with the word 'use' (e.g. useFetch, useToggle).",
    "summary": "* Extract stateful behaviors.\n* Share code patterns without duplication.\n* Custom functions prefixed with 'use'.",
    "diagram": "\n  Component ---> calls useToggle() ---> custom hooks manage variables ---> return state values\n",
    "practice": "Build a custom hook `useToggle` that simplifies switching boolean flags (open/close, show/hide).",
    "challenge": "Build a custom hook `useLocalStorage` that auto-saves state modifications inside local storage keys.",
    "example_code": "import { useState, useEffect } from 'react';\n\n// Custom Hook to track window size parameters\nexport function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    \n    // Cleanup event listener on unmount\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return width;\n}\n\n// Usage in component:\n// const width = useWindowWidth();\n// return <p>Window is {width}px wide</p>;",
    "ext": "jsx"
  },
  "16-React-Router-DOM": {
    "title": "React Router DOM",
    "line": "Handle page routing and navigation inside single page applications.",
    "think": "A building elevator. Clicking floor buttons (links) moves you to different rooms (views) instantly without reloading the entire skyscraper.",
    "example": "<Link to=\"/about\">About</Link>",
    "result": "Updates address path strings and swaps view components without reloading pages.",
    "remember": "Install using `npm install react-router-dom` to import the standard browser router controls.",
    "summary": "* Single page applications router framework.\n* Dynamic URL matching pathways.\n* Navigation lists: Link, NavLink, useNavigate.",
    "diagram": "\n  URL change: /about ---> matches path=\"/about\" ---> render About view component\n",
    "practice": "Set up a standard router containing Home and Contact paths.",
    "challenge": "Implement dynamic routing parameters using `:id` values and read them inside target pages using the `useParams` hook.",
    "example_code": "import React from 'react';\nimport { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction Home() { return <h2>Home Page</h2>; }\nfunction About() { return <h2>About Page</h2>; }\n\nfunction AppNavigation() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Home</Link> | <Link to=\"/about\">About</Link>\n      </nav>\n      <hr />\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nexport default AppNavigation;",
    "ext": "jsx"
  },
  "17-Performance-Basics": {
    "title": "React Performance Basics",
    "line": "Avoid redundant renders using memoization hooks and conditional locks.",
    "think": "A calculating accountant. Instead of recalculating math columns from scratch every month, they read last month's final totals from a notepad (memoization) if nothing changed.",
    "example": "const val = useMemo(() => heavyMath(x), [x]);",
    "result": "Locks in calculated values, refiring only when dependency variables change.",
    "remember": "Do not overuse memoization! Standard renders are fast; only memoize heavy calculations or deep component trees.",
    "summary": "* React.memo: stops re-renders on child components if props stay unchanged.\n* useMemo: locks in variable calculation values.\n* useCallback: locks in function references.",
    "diagram": "\n  State Change ---> Check dependencies ---> Changed? (recompute) : Read Cache (skip render)\n",
    "practice": "Build a calculation component using `useMemo` to skip re-running sorting algorithms on arrays.",
    "challenge": "Demonstrate callback reference changes in child triggers using the `useCallback` hook.",
    "example_code": "import React, { useState, useMemo } from 'react';\n\nfunction CalculationHelper() {\n  const [num, setNum] = useState(1);\n  const [text, setText] = useState(\"\");\n\n  // useMemo runs calculation ONLY when dependency variable [num] changes\n  const computedFactorial = useMemo(() => {\n    console.log(\"Running computed math calculation...\");\n    let result = 1;\n    for (let i = 1; i <= num; i++) {\n      result *= i;\n    }\n    return result;\n  }, [num]);\n\n  return (\n    <div>\n      <input type=\"number\" value={num} onChange={e => setNum(Number(e.target.value))} />\n      <p>Factorial calculation: {computedFactorial}</p>\n      \n      {/* Typing text updates text state, but does not trigger computedFactorial re-run! */}\n      <input type=\"text\" value={text} onChange={e => setText(e.target.value)} placeholder=\"Type stuff...\" />\n    </div>\n  );\n}\n\nexport default CalculationHelper;",
    "ext": "jsx"
  },
  "18-Project-Structure": {
    "title": "React Project Structure",
    "line": "Organize scaling React source files using modular and semantic folder architectures.",
    "think": "Sorting library folders: shelf for illustrations (assets), shelf for small utilities (components), and folder files for blueprints.",
    "example": "Standard folder structures.",
    "result": "Improves code discoverability and modular structure.",
    "remember": "A clean directory separation prevents components from importing code loops.",
    "summary": "* Modular structures scaling codes.\n* Folder separations prevent import loops.",
    "diagram": "\nsrc/\n├── assets/      (Images, fonts, stylesheets)\n├── components/  (Reusable UI inputs, buttons, cards)\n├── pages/       (Routing pages: Home, Dashboard)\n├── hooks/       (Custom React hooks)\n├── context/     (Global Context API providers)\n├── services/    (Network api fetch scripts)\n└── utils/       (Helper formatting scripts)\n",
    "practice": "Draw a diagram mapping the imports flow between hooks, components, and pages.",
    "challenge": "Explain how index exports files clean up import syntax lines.",
    "example_code": "/* Folder Responsibility Breakdown:\n- src/assets/     : Stores images, global CSS, and font files.\n- src/components/ : Reusable buttons, forms, input components.\n- src/pages/      : Screen views representing routing links.\n- src/hooks/      : Custom hooks (e.g. useAuth, useFetch).\n- src/context/    : Context API providers (e.g. ThemeContext).\n- src/services/   : API request functions fetching database records.\n- src/utils/      : Reusable helper scripts (e.g. formatCurrency).\n*/\nimport React from 'react';\n// Clean import references:\nimport Button from './components/Button';\nimport { useWindowWidth } from './hooks/useWindowWidth';\n\nfunction HomePage() {\n  const width = useWindowWidth();\n  return (\n    <div className=\"home-page\">\n      <h1>Welcome Page</h1>\n      <p>Size: {width}px</p>\n      <Button label=\"Click Me\" />\n    </div>\n  );\n}\n\nexport default HomePage;",
    "ext": "jsx"
  },
  "19-Reusable-Components": {
    "title": "Reusable Components",
    "line": "Build highly customizable, reusable components using flexible styling props.",
    "think": "Creating a universal light switch: works in any room, accepts colors, tags, and click commands.",
    "example": "<Button variant=\"primary\">Label</Button>",
    "result": "Renders buttons matching style variant keys.",
    "remember": "Create component structures to encapsulate layouts, keeping styles consistent.",
    "summary": "* Modular styling variants.\n* Encapsulate layout configurations.",
    "diagram": "\n  Props (variant=\"danger\") ---> Component logic ---> Returns Red-themed Button\n",
    "practice": "Build a customizable Card component that accepts header and body text slots.",
    "challenge": "Build a generic TextInput component that handles input placeholders, labels, and change events.",
    "example_code": "import React from 'react';\n\n// Reusable customizable Button component\nfunction Button({ label, onClick, variant = \"primary\", size = \"md\" }) {\n  const baseStyles = \"px-4 py-2 font-bold rounded-lg transition-colors\";\n  \n  const variants = {\n    primary: \"bg-indigo-600 hover:bg-indigo-700 text-white\",\n    secondary: \"bg-slate-200 hover:bg-slate-300 text-slate-800\",\n    danger: \"bg-red-600 hover:bg-red-700 text-white\"\n  };\n\n  const sizes = {\n    sm: \"text-xs px-2 py-1\",\n    md: \"text-sm px-4 py-2\",\n    lg: \"text-lg px-6 py-3\"\n  };\n\n  return (\n    <button \n      onClick={onClick} \n      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}\n    >\n      {label}\n    </button>\n  );\n}\n\nexport default Button;",
    "ext": "jsx"
  }
};
const REACT_PROJECTS = {
  "01-Todo-App": {
    "ext": "jsx",
    "quick": "# React Todo App\n\n## In One Line\nBuild a task manager application that stores todos in state, allows adding/removal, and saves data to localStorage.\n\n## Think Like This\nA sticky note checkboard. You write tasks, stick them on the board, check them off, and save them in a notebook so they stay there when you wake up.\n\n## Example\n```jsx\nconst [todos, setTodos] = useState([]);\n```\n\n## Result\nRenders an interactive task manager.\n\n## Remember\nAlways pass clean callback functions to mutate state arrays cleanly.\n",
    "source": "import React, { useState, useEffect } from 'react';\n\nfunction TodoApp() {\n  const [todos, setTodos] = useState(() => {\n    const saved = localStorage.getItem('react_todos');\n    return saved ? JSON.parse(saved) : [];\n  });\n  const [input, setInput] = useState(\"\");\n\n  useEffect(() => {\n    localStorage.setItem('react_todos', JSON.stringify(todos));\n  }, [todos]);\n\n  const addTodo = (e) => {\n    e.preventDefault();\n    if (!input.trim()) return;\n    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);\n    setInput(\"\");\n  };\n\n  const toggleTodo = (id) => {\n    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));\n  };\n\n  const deleteTodo = (id) => {\n    setTodos(todos.filter(t => t.id !== id));\n  };\n\n  return (\n    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>\n      <h3>Todo List</h3>\n      <form onSubmit={addTodo}>\n        <input value={input} onChange={e => setInput(e.target.value)} placeholder=\"New Task...\" />\n        <button type=\"submit\">Add</button>\n      </form>\n      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>\n        {todos.map(t => (\n          <li key={t.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>\n            <span \n              onClick={() => toggleTodo(t.id)} \n              style={{ textDecoration: t.completed ? 'line-through' : 'none', cursor: 'pointer' }}\n            >\n              {t.text}\n            </span>\n            <button onClick={() => deleteTodo(t.id)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default TodoApp;",
    "practice": "Add a button that clears all tasks from the todo list.",
    "challenge": "Add a filter category (All, Active, Completed) to select which tasks to display on screen.",
    "summary": "* State arrays track list configurations.\n* LocalStorage hook integrations persist data.",
    "diagram": "\n  [ Input task text ] -> [ Add button click ] -> [ Update array state ] -> [ Sync localStorage ]\n"
  },
  "02-Notes-App": {
    "ext": "jsx",
    "quick": "# React Notes App\n\n## In One Line\nBuild a note-taking application containing a text search query filter and a visual note card grid.\n\n## Think Like This\nOrganizing folders on a desk. You draft text notes, sort them in a grid, and use a magnifier lens to find files containing specific terms.\n\n## Example\n```jsx\nconst filteredNotes = notes.filter(n => n.text.includes(query));\n```\n\n## Result\nRenders note grid interfaces.\n\n## Remember\nUsing filter methods allows you to compute filtered lists on the fly during renders without saving duplicate lists in state.\n",
    "source": "import React, { useState } from 'react';\n\nfunction NotesApp() {\n  const [notes, setNotes] = useState([]);\n  const [noteText, setNoteText] = useState(\"\");\n  const [search, setSearch] = useState(\"\");\n\n  const addNote = () => {\n    if (!noteText.trim()) return;\n    setNotes([...notes, { id: Date.now(), text: noteText }]);\n    setNoteText(\"\");\n  };\n\n  const deleteNote = (id) => {\n    setNotes(notes.filter(n => n.id !== id));\n  };\n\n  const filteredNotes = notes.filter(n => \n    n.text.toLowerCase().includes(search.toLowerCase())\n  );\n\n  return (\n    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>\n      <h2>Notes Workspace</h2>\n      <input \n        value={search} \n        onChange={e => setSearch(e.target.value)} \n        placeholder=\"Search notes...\" \n        style={{ width: '100%', padding: '8px', marginBottom: '20px' }}\n      />\n      <textarea \n        value={noteText} \n        onChange={e => setNoteText(e.target.value)} \n        placeholder=\"Write note here...\" \n        style={{ width: '100%', height: '80px', padding: '8px' }}\n      />\n      <button onClick={addNote} style={{ marginTop: '10px' }}>Save Note</button>\n\n      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>\n        {filteredNotes.map(n => (\n          <div key={n.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '6px' }}>\n            <p>{n.text}</p>\n            <button onClick={() => deleteNote(n.id)}>Delete</button>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}\n\nexport default NotesApp;",
    "practice": "Add a title field to the notes state object and render it in bold above the note description text.",
    "challenge": "Add a character count indicator below the text area displaying the remaining allowed text size.",
    "summary": "* Text filter computations filter list maps.\n* Textarea values are controlled in React states.",
    "diagram": "\n  [ Text query input ] ---> filters notes list ---> [ Renders matching cards ]\n"
  },
  "03-Expense-Tracker": {
    "ext": "jsx",
    "quick": "# React Expense Tracker\n\n## In One Line\nCreate a budget tracker calculating total incomes, costs, and display dynamic balances.\n\n## Think Like This\nA bank cash register: you catalog cash additions (incomes) and cost subtractions (expenses), calculating sums automatically on screen.\n\n## Example\n```jsx\nconst total = transactions.reduce((acc, t) => acc + t.amount, 0);\n```\n\n## Result\nRenders budgets sheets.\n\n## Remember\nArray.reduce is the standard JavaScript method used to sum values in object arrays.\n",
    "source": "import React, { useState } from 'react';\n\nfunction ExpenseTracker() {\n  const [items, setItems] = useState([]);\n  const [text, setText] = useState(\"\");\n  const [amount, setAmount] = useState(\"\");\n\n  const addTransaction = (e) => {\n    e.preventDefault();\n    if (!text.trim() || !amount) return;\n    setItems([...items, { id: Date.now(), text, amount: parseFloat(amount) }]);\n    setText(\"\");\n    setAmount(\"\");\n  };\n\n  const balance = items.reduce((acc, item) => acc + item.amount, 0);\n  const income = items.filter(i => i.amount > 0).reduce((acc, i) => acc + i.amount, 0);\n  const expense = items.filter(i => i.amount < 0).reduce((acc, i) => acc + i.amount, 0);\n\n  return (\n    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '25px', border: '1px solid #eee' }}>\n      <h2>Budget Tracker</h2>\n      <h3>Balance: ${balance.toFixed(2)}</h3>\n      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>\n        <h4 style={{ color: 'green' }}>Income: ${income.toFixed(2)}</h4>\n        <h4 style={{ color: 'red' }}>Expense: ${Math.abs(expense).toFixed(2)}</h4>\n      </div>\n      <form onSubmit={addTransaction}>\n        <input value={text} onChange={e => setText(e.target.value)} placeholder=\"Description (e.g. Salary, Rent)\" />\n        <input type=\"number\" value={amount} onChange={e => setAmount(e.target.value)} placeholder=\"Amount (+ for income, - for cost)\" />\n        <button type=\"submit\">Submit</button>\n      </form>\n    </div>\n  );\n}\n\nexport default ExpenseTracker;",
    "practice": "Add color rules that print positive balances in green text and negative balances in red text.",
    "challenge": "Add a category filter (Food, Entertainment, Bills) using a select dropdown and filter total sums by category.",
    "summary": "* Sum totals map using Array.reduce methods.\n* Numbers are parsed to floating points before arithmetic calculations.",
    "diagram": "\n  [ Add Transaction (+100 / -50) ] -> [ Calculate sum totals ] -> [ Render Balance ]\n"
  },
  "04-Weather-App": {
    "ext": "jsx",
    "quick": "# React Weather App\n\n## In One Line\nBuild a weather widget using local mock JSON data offline-first, with optional OpenWeather API connectivity.\n\n## Think Like This\nAsking a local travel desk agent (mock JSON) for weather information, with an optional phone line (API integration) to request live weather updates.\n\n## Example\n```jsx\nconst [weather, setWeather] = useState(mockData['london']);\n```\n\n## Result\nRenders an interactive weather forecast card.\n\n## Remember\nUsing mock datasets ensures the app runs instantly offline without needing API key registrations.\n",
    "source": "import React, { useState, useEffect } from 'react';\n\n// Mock Weather Dataset (Phase A: Offline-first)\nconst MOCK_WEATHER_DB = {\n  \"london\": { temp: \"15°C\", desc: \"light rain and mist\", humidity: \"82%\" },\n  \"paris\": { temp: \"18°C\", desc: \"partly cloudy\", humidity: \"65%\" },\n  \"new york\": { temp: \"22°C\", desc: \"sunny intervals\", humidity: \"45%\" },\n  \"tokyo\": { temp: \"26°C\", desc: \"humid and warm\", humidity: \"72%\" }\n};\n\nfunction WeatherApp() {\n  const [city, setCity] = useState(\"london\");\n  const [weatherData, setWeatherData] = useState(null);\n  const [error, setError] = useState(\"\");\n\n  // Optional: Phase B OpenWeather API key configuration details\n  const API_KEY = \"\"; // Enter your OpenWeather API key here to enable live queries\n\n  const fetchWeather = (cityName) => {\n    setError(\"\");\n    const query = cityName.toLowerCase().trim();\n\n    if (!API_KEY) {\n      // Phase A: Offline mock lookup\n      if (MOCK_WEATHER_DB[query]) {\n        setWeatherData({\n          city: query.toUpperCase(),\n          temp: MOCK_WEATHER_DB[query].temp,\n          desc: MOCK_WEATHER_DB[query].desc,\n          humidity: MOCK_WEATHER_DB[query].humidity,\n          mode: \"Offline Mock Data\"\n        });\n      } else {\n        setError(\"City not found in offline DB! Try: London, Paris, New York, Tokyo.\");\n        setWeatherData(null);\n      }\n    } else {\n      // Phase B: Live API query\n      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)\n        .then(res => {\n          if (!res.ok) throw new Error(\"City not found in online database\");\n          return res.json();\n        })\n        .then(data => {\n          setWeatherData({\n            city: data.name,\n            temp: `${Math.round(data.main.temp)}°C`,\n            desc: data.weather[0].description,\n            humidity: `${data.main.humidity}%`,\n            mode: \"Live API Data\"\n          });\n        })\n        .catch(err => {\n          setError(err.message);\n          setWeatherData(null);\n        });\n    }\n  };\n\n  useEffect(() => {\n    fetchWeather(city);\n  }, []);\n\n  const handleSearch = (e) => {\n    e.preventDefault();\n    fetchWeather(city);\n  };\n\n  return (\n    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '25px', border: '1px solid #ccc', borderRadius: '12px', textAlign: 'center' }}>\n      <h3>Weather Search</h3>\n      <form onSubmit={handleSearch}>\n        <input value={city} onChange={e => setCity(e.target.value)} placeholder=\"Search City...\" />\n        <button type=\"submit\">Search</button>\n      </form>\n\n      {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}\n\n      {weatherData && (\n        <div style={{ marginTop: '25px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>\n          <h4>{weatherData.city}</h4>\n          <h2 style={{ color: '#f59e0b', fontSize: '36px', margin: '10px 0' }}>{weatherData.temp}</h2>\n          <p style={{ textTransform: 'capitalize' }}>{weatherData.desc}</p>\n          <p>Humidity: {weatherData.humidity}</p>\n          <small style={{ color: 'green' }}>Mode: {weatherData.mode}</small>\n        </div>\n      )}\n    </div>\n  );\n}\n\nexport default WeatherApp;",
    "practice": "Add a mock record for Sydney to the local dataset showing 21°C.",
    "challenge": "Add a toggle button that translates the temperature display from Celsius to Fahrenheit.",
    "summary": "* Offline-first mock data ensures reliability.\n* External API queries require fetch configurations.",
    "diagram": "\n  [ Input city name ] ---> [ API Key present? ]\n                                 |\n                       +---------+---------+\n                       | Yes               | No\n                       v                   v\n              [ Fetch live API ]    [ Query mock DB ]\n"
  }
};


const NODEJS_DATA = {
  "01-Introduction": {
    "title": "NodeJS Introduction",
    "line": "Node.js is an asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    "think": "JavaScript escaped the browser cage! Instead of just controlling buttons on a webpage, JS can now run on your operating system directly, opening files, managing system memory, and running servers.",
    "example": "console.log('Hello from local Node environment!');",
    "result": "Prints the log output directly into your computer terminal, not the browser developer tools.",
    "remember": "Node.js runs single-threaded but uses asynchronous event loops to handle thousands of concurrent requests.",
    "summary": "* Asynchronous non-blocking runtime.\n* Runs JavaScript directly on computers and servers.\n* Powered by Chrome's V8 execution engine.",
    "diagram": "\n+---------------------------------------------+\n| Browser Sandbox: JS <=> DOM / Web APIs      |\n| Node.js Runtime: JS <=> OS / Filesystem     |\n+---------------------------------------------+\n",
    "practice": "Open your terminal, write a file with console logs, and run it using the `node` command.",
    "challenge": "Explain how Node.js handles asynchronous events using its built-in Event Loop.",
    "example_code": "# Run a file locally using Node.js\nnode index.js",
    "ext": "sh"
  },
  "02-Install-NodeJS": {
    "title": "Install NodeJS",
    "line": "Install the Node.js LTS (Long Term Support) runtime to compile and run local backend JS programs.",
    "think": "Plugging a power engine into your computer's terminal, enabling command line tools to read and run JS code files.",
    "example": "node --version",
    "result": "Prints the installed version (e.g. v20.12.2).",
    "remember": "Always download the LTS version for local stability.",
    "summary": "* LTS stands for Long Term Support.\n* NPM is bundled automatically with Node.\n* PATH variable registrations allow typing 'node' commands from any terminal.",
    "diagram": "\n  [ nodejs.org ] ---> Download LTS Installer ---> Run setup wizard ---> verified on Terminal\n",
    "practice": "Run node -v to verify the installation.",
    "challenge": "Verify npm -v to ensure the package manager is registered.",
    "example_code": "# Check Node version\nnode -v\n\n# Check NPM version\nnpm -v",
    "ext": "sh"
  },
  "03-Node-REPL": {
    "title": "Node REPL",
    "line": "REPL (Read-Eval-Print-Loop) is an interactive terminal shell for running JavaScript code on the fly.",
    "think": "A calculator command line. You type JavaScript statements, it evaluates them, prints outcomes, and loops back.",
    "example": "Type 'node' in terminal to open prompt.",
    "result": "Opens an interactive JavaScript console prompt.",
    "remember": "Press Ctrl+C twice or type '.exit' to close the REPL.",
    "summary": "* Interactive JS coding shell.\n* Excellent for testing quick math, string manipulations, or Node APIs.\n* Accessible by typing 'node' with no file arguments.",
    "diagram": "\n  Read input ---> Evaluate JS ---> Print result ---> Loop back\n",
    "practice": "Open REPL, calculate some math equations, and define a function.",
    "challenge": "Access the built-in OS module from inside REPL using require.",
    "example_code": "# Start REPL\nnode\n\n# Inside REPL type:\n# 2 + 2\n# const greet = (name) => \"Hello \" + name;\n# greet(\"Developer\")\n# .exit",
    "ext": "sh"
  },
  "04-Modules": {
    "title": "NodeJS Modules",
    "line": "Modules allow you to split your codebase into separate, reusable code files.",
    "think": "A tool box where you keep separate compartments: one drawer for screwdrivers (math utils), another for wrenches (file helpers).",
    "example": "const math = require('./math');",
    "result": "Imports functional modules into active scripts.",
    "remember": "CommonJS uses require() and module.exports. ES Modules use import and export (requires type: 'module' in package.json).",
    "summary": "* CommonJS: Default Node module format.\n* ES Modules: Modern JS standard.\n* Keeps scope clean and files manageable.",
    "diagram": "\n  [ math.js (exports add) ] === require() ===> [ server.js (uses add) ]\n",
    "practice": "Create a utility module that exports a subtraction function, and require it in a main script.",
    "challenge": "Configure ES Modules imports by modifying the package.json configuration file.",
    "example_code": "// --- 1. CommonJS (Default) ---\n// utils.js\nmodule.exports.add = (a, b) => a + b;\n\n// app.js\nconst { add } = require('./utils');\nconsole.log(add(5, 10)); // 15\n\n// --- 2. ES Modules (Modern) ---\n// utils.mjs\nexport const subtract = (a, b) => a - b;\n\n// app.mjs\nimport { subtract } from './utils.mjs';\nconsole.log(subtract(10, 5)); // 5",
    "ext": "js"
  },
  "05-File-System": {
    "title": "NodeJS File System",
    "line": "The fs module provides APIs for interacting with the computer's file system (read, write, append, delete).",
    "think": "A digital office assistant. You command it: 'read this text file' or 'create a new folder and write these logs'.",
    "example": "fs.writeFileSync('log.txt', 'data');",
    "result": "Creates a file named log.txt containing the text 'data'.",
    "remember": "Synchronous functions (e.g. readFileSync) block execution until complete. Asynchronous functions use callbacks/promises to prevent blocking.",
    "summary": "* fs module manages local files.\n* Synchronous vs Asynchronous files handling.\n* Always handle errors when reading files.",
    "diagram": "\n  [ Script ] === fs.writeFile ===> [ Hard Drive File.txt ]\n",
    "practice": "Write a script that reads a text file and prints its content to the terminal.",
    "challenge": "Use fs.promises to read and write files using modern async/await patterns.",
    "example_code": "const fs = require('fs');\n\n// 1. Synchronous Write & Read (Blocks thread)\nfs.writeFileSync('test.txt', 'Hello Node.js Sync!');\nconst dataSync = fs.readFileSync('test.txt', 'utf-8');\nconsole.log(\"Sync read:\", dataSync);\n\n// 2. Asynchronous Write & Read (Non-blocking with callbacks)\nfs.writeFile('test_async.txt', 'Hello Node.js Async!', (err) => {\n  if (err) throw err;\n  fs.readFile('test_async.txt', 'utf-8', (err, data) => {\n    if (err) throw err;\n    console.log(\"Async read:\", data);\n  });\n});",
    "ext": "js"
  },
  "06-Path-Module": {
    "title": "Path Module",
    "line": "The path module provides utilities for working with file and directory paths.",
    "think": "A GPS navigation coordinator that formats paths correctly whether you are running on Windows (backslash) or Mac/Linux (forward slash).",
    "example": "path.join('src', 'components', 'button.js');",
    "result": "Returns 'src/components/button.js' (or Windows formatted equivalent).",
    "remember": "Always use path.join instead of manual string addition to prevent slash formatting errors.",
    "summary": "* OS-safe paths formatting.\n* path.join: joins segments safely.\n* path.resolve: converts to absolute path.\n* path.extname: extracts file extensions.",
    "diagram": "\n  Folder1 + Folder2 + File.js === path.join() ===> Folder1/Folder2/File.js (OS Safe)\n",
    "practice": "Write a script that extracts the extension name of a target file path.",
    "challenge": "Resolve a relative path into an absolute file system path.",
    "example_code": "const path = require('path');\n\n// 1. Join path segments safely matching host OS\nconst fullPath = path.join('workspace', 'project', 'server.js');\nconsole.log(\"Joined Path:\", fullPath);\n\n// 2. Extract file information\nconsole.log(\"Filename:\", path.basename(fullPath)); // \"server.js\"\nconsole.log(\"Extension:\", path.extname(fullPath)); // \".js\"\n\n// 3. Resolve absolute path\nconsole.log(\"Absolute path:\", path.resolve(fullPath));",
    "ext": "js"
  },
  "07-OS-Module": {
    "title": "OS Module",
    "line": "The os module provides information about the computer's operating system and hardware resources.",
    "think": "A computer hardware monitor checking CPU chips, available RAM memory slots, and platform details.",
    "example": "os.freemem();",
    "result": "Returns the amount of free system memory in bytes.",
    "remember": "Values like memory sizes are returned in bytes. Divide by 1024 to convert to KB, MB, or GB.",
    "summary": "* Inspects host server hardware details.\n* Useful for scaling servers depending on CPU cores count.\n* APIs: platform(), arch(), cpus(), totalmem(), freemem().",
    "diagram": "\n  [ OS Module Query ] ---> Reads computer specs ---> Returns RAM / CPU data\n",
    "practice": "Build a script that prints the percentage of available computer RAM memory.",
    "challenge": "Display the model details and speeds of all CPU cores on your machine.",
    "example_code": "const os = require('os');\n\n// 1. Check OS platform & CPU architecture\nconsole.log(\"Platform:\", os.platform()); // \"win32\", \"darwin\", \"linux\"\nconsole.log(\"CPU Architecture:\", os.arch()); // \"x64\", \"arm64\"\n\n// 2. RAM Memory status checks\nconst totalMemoryGB = (os.totalmem() / (1024 ** 3)).toFixed(2);\nconst freeMemoryGB = (os.freemem() / (1024 ** 3)).toFixed(2);\nconsole.log(`Memory Status: ${freeMemoryGB} GB free out of ${totalMemoryGB} GB total`);\n\n// 3. CPU Core count\nconsole.log(\"CPU Cores:\", os.cpus().length);",
    "ext": "js"
  },
  "08-Events": {
    "title": "NodeJS Events",
    "line": "Events allow you to write event-driven code by triggering and listening to custom events.",
    "think": "A door bell chime sensor system. You mount a sensor (event listener) that waits; pressing the bell (emitting event) rings the chime.",
    "example": "emitter.on('bell', () => chime());",
    "result": "Registers a listener callback for the 'bell' event key.",
    "remember": "You must instantiate the EventEmitter class before you can listen to or emit events.",
    "summary": "* Built-in event emitter framework.\n* emitter.on(): registers listeners.\n* emitter.emit(): triggers event actions.",
    "diagram": "\n  [ Event Listener (on) ] <--- listening --- [ Emitter (emit) ]\n",
    "practice": "Create a custom emitter that listens for 'alarm' and prints warning logs when fired.",
    "challenge": "Pass a structured data payload (object) through the event emitter to the listener callback.",
    "example_code": "const EventEmitter = require('events');\nconst systemTracker = new EventEmitter();\n\n// 1. Register listener for event \"userLogin\"\nsystemTracker.on('userLogin', (username) => {\n  console.log(`System Audit: ${username} logged in at ${new Date().toLocaleTimeString()}`);\n});\n\n// 2. Emit the event simulating user login action\nsystemTracker.emit('userLogin', 'JaneDoe');\nsystemTracker.emit('userLogin', 'JohnSmith');",
    "ext": "js"
  },
  "09-NPM": {
    "title": "NPM Package Manager",
    "line": "NPM is the package manager for Node.js, allowing you to install third-party libraries and tools.",
    "think": "An app store for developers. You type 'install package' and download prebuilt code modules (like Express or lodash) into your project.",
    "example": "npm install lodash",
    "result": "Downloads lodash package into node_modules and registers it in package.json.",
    "remember": "Never upload the node_modules folder to GitHub! Keep it in your .gitignore file.",
    "summary": "* NPM is the default package registry.\n* Local packages: installed in node_modules, imported in project scripts.\n* Global packages (-g): command line utility systems installed on your machine.",
    "diagram": "\n  [ Project Folder ] === npm install ===> [ downloads node_modules ] <--- ignored by git\n",
    "practice": "Install a third-party library like lodash, require it, and run a utility method.",
    "challenge": "Explain the difference between local dependencies vs global developer tool dependencies.",
    "example_code": "# Install a local dependency package\nnpm install lodash\n\n# Install a package as devDependency (only for local development)\nnpm install -D nodemon\n\n# Install a global package (CLI tool)\n# npm install -g target-package",
    "ext": "sh"
  },
  "10-Package-JSON": {
    "title": "Package JSON",
    "line": "package.json is the project manifest file storing configurations, metadata, and dependencies.",
    "think": "A blueprint catalog of a ship: it labels the name, version, author, running commands, and lists all component parts required to build it.",
    "example": "Create project manifest using 'npm init -y'.",
    "result": "Generates a default package.json file.",
    "remember": "Running 'npm install' in a folder with a package.json automatically downloads all listed dependencies.",
    "summary": "* Project manifest descriptor file.\n* Saves dependencies versions.\n* Scripts property runs terminal command shortcuts (e.g. npm start).",
    "diagram": "\n+---------------------------------------------+\n| package.json                                |\n|  ├── \"name\": \"my-app\"                       |\n|  ├── \"scripts\": { \"start\": \"node server\" }  |\n|  └── \"dependencies\": { \"express\": \"^4.19\" } |\n+---------------------------------------------+\n",
    "practice": "Create a package.json, add a custom script 'dev' that runs a file, and execute it using npm run dev.",
    "challenge": "Explain semantic versioning characters (e.g. carat ^ vs tilde ~) listed in dependencies.",
    "example_code": "{\n  \"name\": \"node-demo-project\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Demonstration manifest file\",\n  \"main\": \"server.js\",\n  \"scripts\": {\n    \"start\": \"node server.js\",\n    \"dev\": \"nodemon server.js\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.19.2\"\n  },\n  \"devDependencies\": {\n    \"nodemon\": \"^3.1.0\"\n  }\n}",
    "ext": "json"
  },
  "11-Creating-Servers": {
    "title": "Creating HTTP Servers",
    "line": "Use the built-in http module to create web servers that listen for requests and send responses.",
    "think": "An office receptionist sitting at a desk (listening port). When clients approach (request), she hands them files (response).",
    "example": "http.createServer((req, res) => res.end('Hi')).listen(3000);",
    "result": "Spins up a local server listening for connections at http://localhost:3000/.",
    "remember": "You must close the response stream using res.end() or the browser page will spin infinitely waiting for data.",
    "summary": "* http.createServer() creates server listener loop.\n* listen(port): binds server to terminal port.\n* req holds request details (headers, URL); res manages response streams.",
    "diagram": "\n  Client Request (URL) ---> Port 3000 ---> [ http.createServer handler ] ---> Server Response\n",
    "practice": "Build a server that checks the request URL and responds with custom messages for '/' and '/about' paths.",
    "challenge": "Serve an HTML file from your hard drive to visitors using the fs module inside the HTTP server.",
    "example_code": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  // Set response headers status and format\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  \n  if (req.url === '/') {\n    res.end(JSON.stringify({ message: \"Welcome to Native Node Server\" }));\n  } else if (req.url === '/status') {\n    res.end(JSON.stringify({ status: \"Online\", uptime: process.uptime() }));\n  } else {\n    res.writeHead(404, { 'Content-Type': 'text/plain' });\n    res.end(\"Page Not Found\");\n  }\n});\n\nserver.listen(3000, () => {\n  console.log(\"Server listening at http://localhost:3000/\");\n});",
    "ext": "js"
  },
  "12-Streams": {
    "title": "NodeJS Streams",
    "line": "Streams read and write data in small, continuous chunks instead of loading entire files into memory.",
    "think": "Watching a movie on Netflix (streaming buffer chunks) vs downloading the full 4GB video file onto your hard drive before playing it.",
    "example": "fs.createReadStream('large.txt').pipe(res);",
    "result": "Pipes chunks of a large file directly to the client response stream.",
    "remember": "Streams save massive amounts of RAM memory, making backends highly scalable for heavy file uploads/downloads.",
    "summary": "* Chunks data transmission.\n* Saves computer RAM limits.\n* Types: Readable, Writable, Duplex, Transform.\n* pipe() chains readable output streams into writable input slots.",
    "diagram": "\n  [ Large File ] === [ chunk ] === [ chunk ] ===> [ Output Stream ]\n",
    "practice": "Create a script that reads a text file in chunks and logs the progress.",
    "challenge": "Pipe a readable file stream directly into a new writable file copy stream.",
    "example_code": "const fs = require('fs');\n\n// 1. Create a readable stream from a file source\nconst reader = fs.createReadStream('large-file.txt', { encoding: 'utf-8', highWaterMark: 16384 }); // 16KB chunks\n\n// 2. Create a writable stream to a destination copy\nconst writer = fs.createWriteStream('copy-file.txt');\n\n// 3. Pipe the readable stream directly to the writable target\nreader.pipe(writer);\n\nwriter.on('finish', () => {\n  console.log(\"Piping complete! File copied in stream chunks.\");\n});",
    "ext": "js"
  },
  "13-Buffers": {
    "title": "NodeJS Buffers",
    "line": "Buffers represent raw binary data sequences in memory outside the V8 heap.",
    "think": "A waiting room where binary data (zeros and ones) is gathered and stored temporarily before transferring to file disks.",
    "example": "const buf = Buffer.from('Hello');",
    "result": "Allocates a memory block storing the binary code values of the characters.",
    "remember": "Node automatically handles buffer conversions when reading files or network payloads.",
    "summary": "* Holds raw binary memory blocks.\n* Key to reading images, audio files, and TCP network sockets.\n* APIs: alloc(), from(), toString(), write().",
    "diagram": "\n  ASCII Text: \"Hello\" === Buffer ===> Hex bytes: <Buffer 48 65 6c 6c 6f>\n",
    "practice": "Create a buffer containing a word, print its binary format, and parse it back to a string.",
    "challenge": "Create an empty buffer allocated to 10 bytes and write characters inside it.",
    "example_code": "// 1. Create buffer from string\nconst buf = Buffer.from('MERN Stack');\nconsole.log(\"Raw Buffer bytes:\", buf); // <Buffer 4d 45 52 4e 20 53 74 61 63 6b>\n\n// 2. Convert buffer back to text\nconsole.log(\"Buffer string:\", buf.toString()); // \"MERN Stack\"\n\n// 3. Allocate a fresh buffer block (10 bytes empty)\nconst allocBuf = Buffer.alloc(10);\nallocBuf.write('Hi');\nconsole.log(\"Allocated buffer details:\", allocBuf.toString());",
    "ext": "js"
  },
  "14-Environment-Variables": {
    "title": "Environment Variables",
    "line": "Environment variables secure credentials outside of source code configurations.",
    "think": "A locked safe. You keep API keys and passwords outside of the code. If a burglar steals your code files, they still can't open the database safe.",
    "example": "process.env.PORT || 3000",
    "result": "Reads the runtime port value from OS environments.",
    "remember": "Always add your `.env` configuration file to `.gitignore` to keep from committing secrets to GitHub.",
    "summary": "* Stores credentials safely.\n* Local variables kept in `.env` files.\n* Read at runtime using the `dotenv` library and `process.env` references.",
    "diagram": "\n  [ .env file (hidden keys) ] ---> loaded by dotenv ---> read via process.env.KEY\n",
    "practice": "Configure a dotenv script, create a .env file containing a DB_PASSWORD parameter, and console log it.",
    "challenge": "Set up default fallback parameters if an environment variable is undefined.",
    "example_code": "# .env (Save in project root folder - ignore in git)\nPORT=5000\nDATABASE_URL=\"mongodb://localhost:27017/mydb\"\n\n# app.js\nrequire('dotenv').config(); // Load variables\nconst port = process.env.PORT || 3000;\nconsole.log(\"Running server on port:\", port);\nconsole.log(\"Connecting database:\", process.env.DATABASE_URL);",
    "ext": "js"
  },
  "15-Async-Patterns": {
    "title": "Async Patterns in Node",
    "line": "Explore callback, promise, and async/await flows inside Node environments.",
    "think": "Choosing a mail delivery speed: callbacks (waiting for return post), promises (getting tracking receipts), and async/await (blocking reading lists until letters arrive).",
    "example": "const data = await fs.promises.readFile('file.txt');",
    "result": "Halts script step execution cleanly until asynchronous file operations complete.",
    "remember": "Async/await is syntactic sugar over promises. Use try/catch blocks to intercept exceptions.",
    "summary": "* Callbacks lead to nested indentation ('callback hell').\n* Promises flatten hierarchies.\n* Async/await compiles linear, readable code structures.",
    "diagram": "\n  Callbacks (Nested) ---> Promises (.then) ---> Async/Await (Linear Try/Catch)\n",
    "practice": "Convert a standard callback file-reading operation into a Promise-based structure.",
    "challenge": "Read multiple files in parallel using promise arrays and async await setups.",
    "example_code": "const fs = require('fs').promises;\n\nasync function loadConfigurations() {\n  try {\n    console.log(\"Start reading configs...\");\n    // Linear execution style for async filesystem operations\n    const data = await fs.readFile('config.txt', 'utf-8');\n    console.log(\"File loaded successfully:\", data);\n  } catch (error) {\n    console.error(\"Async reading failed:\", error.message);\n  }\n}\n\nloadConfigurations();",
    "ext": "js"
  },
  "16-Project-Structure": {
    "title": "NodeJS Project Structure",
    "line": "Organize backend servers using clean MVC (Model-View-Controller) folder architectures.",
    "think": "Sorting layout folders: file cataloging directories for database schemas (models), routing controllers (logic), and entry servers.",
    "example": "Clean backend folder layouts.",
    "result": "Improves code testability and scales large full-stack architectures.",
    "remember": "Modular structures decouple business logic from router bindings.",
    "summary": "* MVC design model.\n* Models: database schemas.\n* Controllers: endpoint logic functions.\n* Routes: URL triggers mappings.",
    "diagram": "\nsrc/\n├── config/      (Environment configurations)\n├── controllers/ (Business logic handlers)\n├── models/      (Database schemas)\n├── routes/      (URL route matches)\n└── app.js       (Application configuration)\n",
    "practice": "Build a mock directory mapping file controllers and router directories.",
    "challenge": "Explain how exporting route modules cleans up primary server entry files.",
    "example_code": "/* Backend modular separation responsibility:\n- config/      : Database and security environment files.\n- controllers/ : Express request logic handlers.\n- models/      : Database mongoose model schemas.\n- routes/      : URL path matching files.\n- app.js       : Instantiates Express, mounts middlewares.\n- server.js    : Entry script initiating port listener loop.\n*/\nconst express = require('express');\nconst app = express();\n\n// Modular router imports\nconst userRoutes = require('./routes/userRoutes');\napp.use('/api/users', userRoutes);",
    "ext": "js"
  }
};
const NODEJS_PROJECTS = {
  "01-Notes-CLI": {
    "ext": "js",
    "quick": "# NodeJS Notes CLI Project\n\n## In One Line\nBuild a command-line interface tool to create, read, list, and delete text notes stored in a local JSON file.\n\n## Think Like This\nA personal command terminal logbook: you type actions ('add', 'list') as terminal flags, and the database script edits your diary notepad.\n\n## Example\n```bash\nnode notes.js add --title=\"Buy Milk\"\n``/\n",
    "source": "const fs = require('fs');\nconst path = require('path');\n\nconst FILE_PATH = path.join(__dirname, 'notes.json');\n\n// Helper to load notes\nconst loadNotes = () => {\n  try {\n    const dataBuffer = fs.readFileSync(FILE_PATH);\n    return JSON.parse(dataBuffer.toString());\n  } catch (e) {\n    return [];\n  }\n};\n\n// Helper to save notes\nconst saveNotes = (notes) => {\n  fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));\n};\n\nconst command = process.argv[2];\nconst args = process.argv.slice(3);\n\nconst parseArgs = () => {\n  const params = {};\n  args.forEach(arg => {\n    const [key, val] = arg.replace('--', '').split('=');\n    params[key] = val;\n  });\n  return params;\n};\n\nconst params = parseArgs();\nconst notes = loadNotes();\n\nif (command === 'add') {\n  if (!params.title || !params.body) {\n    console.log(\"Error: Please provide --title and --body\");\n  } else {\n    notes.push({ title: params.title, body: params.body });\n    saveNotes(notes);\n    console.log(\"Note added successfully!\");\n  }\n} else if (command === 'list') {\n  console.log(\"--- My Notes ---\");\n  notes.forEach((note, index) => {\n    console.log(`${index + 1}. ${note.title}: ${note.body}`);\n  });\n} else if (command === 'delete') {\n  if (!params.title) {\n    console.log(\"Error: Please specify note --title to delete\");\n  } else {\n    const filtered = notes.filter(n => n.title !== params.title);\n    saveNotes(filtered);\n    console.log(\"Note deleted!\");\n  }\n} else {\n  console.log(\"Commands available: add, list, delete\");\n}",
    "practice": "Add a custom command 'read' that outputs the body of a note search-matched by its title.",
    "challenge": "Add validations to block duplicate notes titles from being saved in the database.",
    "summary": "* process.argv reads command-line argument lists.\n* JSON files act as offline databases.",
    "diagram": "\n  [ Terminal Command ] ---> parse arguments ---> [ Edit notes.json ] ---> Output results\n"
  },
  "02-Simple-Web-Server": {
    "ext": "js",
    "quick": "# NodeJS Simple Web Server Project\n\n## In One Line\nCreate a native HTTP server serving static HTML pages and API JSON payloads.\n\n## Think Like This\nA local librarian responding to queries: if you ask for a book (HTML path), she fetches the page; if you ask for status (API), she reads the log list.\n\n## Example\n```javascript\nhttp.createServer((req, res) => { ... }).listen(8000);\n```\n\n## Result\nRenders an HTTP web server locally.\n\n## Remember\nAlways set appropriate Content-Type headers so browsers know how to render responses.\n",
    "source": "const http = require('http');\nconst fs = require('fs');\nconst path = require('path');\n\nconst server = http.createServer((req, res) => {\n  if (req.url === '/') {\n    res.writeHead(200, { 'Content-Type': 'text/html' });\n    res.end('<h1>Welcome Home</h1><p>Served directly via Node.js HTTP</p>');\n  } else if (req.url === '/api/info') {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ project: \"Simple Web Server\", status: \"Active\" }));\n  } else if (req.url === '/about') {\n    res.writeHead(200, { 'Content-Type': 'text/html' });\n    res.end('<h1>About Us</h1>');\n  } else {\n    res.writeHead(404, { 'Content-Type': 'text/plain' });\n    res.end(\"404 Page Not Found\");\n  }\n});\n\nserver.listen(8000, () => {\n  console.log(\"Web server online at http://localhost:8000/\");\n});",
    "practice": "Add a route '/api/time' that returns the current server time in JSON format.",
    "challenge": "Implement dynamic template file readings where HTML pages are loaded from a 'public' directory using fs.",
    "summary": "* http.createServer loops client requests.\n* Route logic is evaluated manually using req.url conditional blocks.",
    "diagram": "\n  Request (req.url) ---> [ Conditional Router ] ---> response.end() payload\n"
  }
};
const EXPRESSJS_DATA = {
  "01-Introduction": {
    "title": "ExpressJS Introduction",
    "line": "Express is a fast, unopinionated, minimalist web framework for Node.js.",
    "think": "Imagine building a restaurant. Instead of hiring carpenters to build tables (writing native HTTP servers), you rent a pre-built dining hall with lights, doors, and kitchens installed, and you just add the food menu.",
    "example": "const app = express(); app.get('/', (req, res) => res.send('Hi'));",
    "result": "Creates a fully routed Express web server.",
    "remember": "Express sits on top of Node's HTTP modules, adding middleware layouts and clean routing APIs.",
    "summary": "* Simplifies route declarations.\n* Light abstraction layer over native HTTP.\n* Core framework for building REST APIs.",
    "diagram": "\n+---------------------------------------------+\n| Express.js framework layer                  |\n|  └── [ Middlewares ] -> [ Routes ] -> Node  |\n+---------------------------------------------+\n",
    "practice": "Scaffold an Express app, configure a GET request router, and run the server.",
    "challenge": "Describe how Express handles request matching logic compared to native HTTP modules.",
    "example_code": "import express from 'express';\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Welcome to Express!');\n});\n\napp.listen(3000, () => {\n  console.log('Express running at http://localhost:3000/');\n});",
    "ext": "js"
  },
  "02-Setup": {
    "title": "Express Setup",
    "line": "Install and configure an Express server with automatic development reloaders.",
    "think": "Installing a automatic compiler in your cockpit. Every time you change dashboard layouts (save edits), the dials refresh automatically.",
    "example": "npm install express; npm install -D nodemon",
    "result": "Scaffolds dependency workspaces for server runs.",
    "remember": "Use nodemon for local development so you don't have to restart your server after every code change.",
    "summary": "* Express installation: npm install express.\n* nodemon package watcher auto-restarts processes.\n* Set up package.json script runs.",
    "diagram": "\n  [ package.json dependencies ] ---> npm install ---> nodemon server.js starts dev loop\n",
    "practice": "Add nodemon script mappings to your package.json scripts configuration list.",
    "challenge": "Configure clean ES Modules imports in an Express template project.",
    "example_code": "# Initialize package manifest\nnpm init -y\n\n# Install dependencies\nnpm install express\nnpm install -D nodemon\n\n# Start development loop\n# (Ensure scripts.dev = \"nodemon server.js\" is in package.json)\n# npm run dev",
    "ext": "sh"
  },
  "03-Routes": {
    "title": "Express Routes",
    "line": "Routes define how endpoints respond to client requests (methods and URL paths).",
    "think": "Mailboxes labeled for specific operations: one slot for sending letters (POST), another for viewing invoices (GET).",
    "example": "app.post('/submit', (req, res) => { ... });",
    "result": "Enables HTTP endpoint listening scopes.",
    "remember": "Use correct HTTP methods: GET to read, POST to create, PUT to update, DELETE to remove.",
    "summary": "* HTTP Verbs map CRUD endpoints.\n* Dynamic paths: app.get('/items', controller).\n* Client paths match URL strings explicitly.",
    "diagram": "\n  Client Request (POST /items) ---> Express Router ---> Triggers POST logic controller\n",
    "practice": "Scaffold routes for GET, POST, and DELETE requests for a mock items collection.",
    "challenge": "Implement route handlers using custom response status codes (e.g. 201 Created).",
    "example_code": "const express = require('express');\nconst app = express();\n\napp.get('/items', (req, res) => {\n  res.status(200).send(\"Fetch all items\");\n});\n\napp.post('/items', (req, res) => {\n  res.status(201).send(\"Create new item\");\n});\n\napp.delete('/items', (req, res) => {\n  res.status(200).send(\"Delete item record\");\n});",
    "ext": "js"
  },
  "04-Request-And-Response": {
    "title": "Request & Response",
    "line": "Access client inputs inside requests and transmit server response payloads.",
    "think": "An order form. The client fills out item choices (request details), and the server delivers the food plate (response).",
    "example": "app.get('/data', (req, res) => res.json(req.headers));",
    "result": "Accesses client details and outputs JSON variables.",
    "remember": "Always call res.json() or res.send() to end request-response loops.",
    "summary": "* req parameter: URL, query, headers, body details.\n* res parameter: status, send, json, redirect methods.\n* express.json() middleware parses client body inputs.",
    "diagram": "\n  [ Client request (req.body) ] ===> [ Express handler ] ===> [ Server response (res.json) ]\n",
    "practice": "Build an endpoint that accepts a JSON body and returns it containing an 'echo' status.",
    "challenge": "Read custom headers sent by a client and write conditional responses.",
    "example_code": "const express = require('express');\nconst app = express();\n\n// Crucial middleware: parses incoming JSON bodies\napp.use(express.json());\n\napp.post('/login', (req, res) => {\n  const { username, password } = req.body; // Extract body parameters\n  \n  if (username === 'admin' && password === '1234') {\n    res.status(200).json({ success: true, token: \"session_token_xyz\" });\n  } else {\n    res.status(401).json({ success: false, error: \"Incorrect credentials\" });\n  }\n});",
    "ext": "js"
  },
  "05-Middleware": {
    "title": "Express Middleware",
    "line": "Middleware functions execute during requests, modifying request/response objects or running controls.",
    "think": "Security guards at a nightclub door. They inspect credentials, log entries, and either let you pass (next()) or reject you.",
    "example": "app.use((req, res, next) => { log(); next(); });",
    "result": "Runs middleware routines before route processing.",
    "remember": "Always call next() inside custom middlewares, or the request will hang indefinitely!",
    "summary": "* Request handlers pipeline.\n* Can modify req and res variables.\n* Call next() to pass execution to the next controller in line.",
    "diagram": "\n  Request ---> [ Middleware Logger ] -- next() --> [ Route Controller ] ---> Response\n",
    "practice": "Build a request logger middleware that console logs method and request URL parameters.",
    "challenge": "Build a simple auth middleware checking key variables inside client headers.",
    "example_code": "const express = require('express');\nconst app = express();\n\n// Custom Logger Middleware\nconst requestLogger = (req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);\n  next(); // Pass to next handler in pipeline\n};\n\napp.use(requestLogger);\n\napp.get('/dashboard', (req, res) => {\n  res.send(\"Dashboard Panel Data\");\n});",
    "ext": "js"
  },
  "06-Static-Files": {
    "title": "Express Static Files",
    "line": "Serve static assets like HTML pages, stylesheets, and images using built-in controllers.",
    "think": "Setting up a public bookshelf in the lobby. Anyone can pick up catalogs directly without needing a librarian's intervention.",
    "example": "app.use(express.static('public'));",
    "result": "Serves files inside 'public' folder directly at root domains.",
    "remember": "Static files bypass router blocks, loading assets quickly for static pages.",
    "summary": "* express.static() mounts public directories.\n* Bypasses routing controllers.\n* Excellent for serving HTML templates, image cards, and CSS styles.",
    "diagram": "\n  Request (/logo.png) ---> [ express.static ] ---> Reads public/logo.png ---> returns file\n",
    "practice": "Create a 'public' directory, add an index.html and style.css, and serve them using static middleware.",
    "challenge": "Set up absolute paths using the path module to ensure safe static file references.",
    "example_code": "const express = require('express');\nconst path = require('path');\nconst app = express();\n\n// Serve static assets from the 'public' directory safely\napp.use(express.static(path.join(__dirname, 'public')));\n\napp.listen(3000);",
    "ext": "js"
  },
  "07-Route-Parameters": {
    "title": "Route Parameters",
    "line": "Route parameters capture dynamic values passed directly in URL paths.",
    "think": "An address envelope specifying room numbers: '/rooms/:number'. The system reads the label to open a specific door.",
    "example": "app.get('/users/:id', (req, res) => { ... });",
    "result": "Accesses URL variable values inside req.params.",
    "remember": "Route variables are always parsed as strings, convert to numbers before math calculations.",
    "summary": "* Dynamic paths templates: :paramName.\n* Captured values accessible inside req.params objects.\n* Perfect for fetching individual database items.",
    "diagram": "\n  URL: /books/45 ---> matches path: /books/:id ---> req.params.id is \"45\"\n",
    "practice": "Build a route '/items/:id' and echo the ID value back to the client in JSON format.",
    "challenge": "Build a route containing multiple params (e.g. '/users/:userId/books/:bookId') and parse both.",
    "example_code": "const express = require('express');\nconst app = express();\n\nconst database = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Bob\" }\n];\n\napp.get('/users/:userId', (req, res) => {\n  // Capture route param and parse to integer\n  const idQuery = parseInt(req.params.userId);\n  const user = database.find(u => u.id === idQuery);\n\n  if (user) {\n    res.status(200).json(user);\n  } else {\n    res.status(404).json({ error: \"User record not found\" });\n  }\n});",
    "ext": "js"
  },
  "08-Query-Parameters": {
    "title": "Query Parameters",
    "line": "Query parameters extract key-value pairs passed at the end of URLs after question marks.",
    "think": "Adding sorting instructions to a request: '/items?sort=price&limit=10'. Sorting orders are read from query logs.",
    "example": "app.get('/search', (req, res) => { ... });",
    "result": "Accesses query strings inside req.query.",
    "remember": "Query parameters are optional and do not match URL routes explicitly.",
    "summary": "* Optional filter values.\n* Format: URL?key=value&key2=value2.\n* Access values inside req.query parameters.",
    "diagram": "\n  URL: /find?q=node ---> matches route: /find ---> req.query.q is \"node\"\n",
    "practice": "Build a route '/search' that accepts 'q' and 'limit' parameters, displaying them in a response.",
    "challenge": "Filter a local mock items database list based on client query sorting inputs.",
    "example_code": "const express = require('express');\nconst app = express();\n\napp.get('/search', (req, res) => {\n  // Access values from query parameters\n  const { query, limit } = req.query;\n  \n  res.status(200).json({\n    searchQuery: query || \"all\",\n    limitResults: limit || 10,\n    timestamp: Date.now()\n  });\n});",
    "ext": "js"
  },
  "09-REST-API": {
    "title": "Express REST API",
    "line": "REST APIs represent standard web API architectures using uniform resources paths and HTTP verbs.",
    "think": "A standardized vending machine interface: buttons use standard codes (REST paths) to order, drop off, edit, or remove items.",
    "example": "GET /api/users, POST /api/users, DELETE /api/users/1",
    "result": "Enables structured stateless API communications.",
    "remember": "Keep route paths plural (e.g. /api/products, not /api/getProduct).",
    "summary": "* Stateless, client-server models.\n* Paths refer to resources collections.\n* Methods determine database operations actions.",
    "diagram": "\n  Method  +  Path             =  Operation Action\n  GET        /api/products       Fetch list\n  POST       /api/products       Create item\n",
    "practice": "Map out the REST API pathways for managing a library catalogue list.",
    "challenge": "Implement appropriate HTTP status codes (200, 201, 400, 404) across all endpoint paths.",
    "example_code": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\n// RESTful routing patterns\napp.get('/api/tasks', (req, res) => { /* Read */ });\napp.post('/api/tasks', (req, res) => { /* Create */ });\napp.put('/api/tasks/:id', (req, res) => { /* Update */ });\napp.delete('/api/tasks/:id', (req, res) => { /* Delete */ });",
    "ext": "js"
  },
  "10-CRUD": {
    "title": "Express CRUD",
    "line": "Implement complete Create, Read, Update, and Delete operations on in-memory collections.",
    "think": "Managing an active shopping list: adding items, checking prices, modifying item quantities, and crossing off purchased lines.",
    "example": "DELETE route removes item indexes using array filter loops.",
    "result": "Applies transactional modifications on memory lists.",
    "remember": "In-memory data resets every time the server restarts! Database integrations solve this.",
    "summary": "* Complete data pipeline controls.\n* GET: Read, POST: Create, PUT: Update, DELETE: Remove.\n* Array operations mock database modifications.",
    "diagram": "\n  [ POST ] ---> create item ---> array.push() ---> return new array list\n",
    "practice": "Build a CRUD Express API for managing a list of users.",
    "challenge": "Implement target update checking using findIndex and object spreads.",
    "example_code": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet users = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Bob\" }\n];\n\n// 1. READ ALL\napp.get('/api/users', (req, res) => res.json(users));\n\n// 2. CREATE\napp.post('/api/users', (req, res) => {\n  const newUser = { id: Date.now(), name: req.body.name };\n  users.push(newUser);\n  res.status(201).json(newUser);\n});\n\n// 3. UPDATE\napp.put('/api/users/:id', (req, res) => {\n  const targetId = parseInt(req.params.id);\n  const index = users.findIndex(u => u.id === targetId);\n  if (index !== -1) {\n    users[index].name = req.body.name;\n    res.json(users[index]);\n  } else {\n    res.status(404).send(\"User not found\");\n  }\n});\n\n// 4. DELETE\napp.delete('/api/users/:id', (req, res) => {\n  const targetId = parseInt(req.params.id);\n  users = users.filter(u => u.id !== targetId);\n  res.json({ message: \"Deleted successfully\" });\n});",
    "ext": "js"
  },
  "11-Error-Handling": {
    "title": "Error Handling",
    "line": "Implement catch-all middleware to handle backend server errors gracefully without crashes.",
    "think": "Installing emergency fire escapes in a hotel. If a kitchen fire breaks out (crashes), guest flows exit safely (sends error messages) rather than collapsing the hotel structures.",
    "example": "app.use((err, req, res, next) => { res.status(500).send(); });",
    "result": "Catches exceptions and sends error status reports.",
    "remember": "Error handling middleware must accept exactly four arguments: (err, req, res, next).",
    "summary": "* Global error wrappers.\n* Binds exceptions without crashes.\n* Error middleware includes 4 arguments.",
    "diagram": "\n  Error in Route ---> passes to next(err) ---> [ Error Handling Middleware ] ---> return 500 error\n",
    "practice": "Build an endpoint that triggers a custom error and handle it with error middleware.",
    "challenge": "Implement custom error classes to pass variable HTTP status codes through next handlers.",
    "example_code": "const express = require('express');\nconst app = express();\n\napp.get('/bug', (req, res, next) => {\n  try {\n    throw new Error(\"Something went wrong inside the server\");\n  } catch (err) {\n    next(err); // Passes the error to the global handler\n  }\n});\n\n// Global Error Handler Middleware (MUST have 4 arguments)\napp.use((err, req, res, next) => {\n  console.error(\"Intercepted Error:\", err.message);\n  res.status(500).json({\n    success: false,\n    error: err.message || \"Internal Server Error\"\n  });\n});",
    "ext": "js"
  },
  "12-Express-Router": {
    "title": "Express Router",
    "line": "Split routes into modular, mountable route handlers for clean file architecture.",
    "think": "Dividing a dashboard cabinet into drawers: one drawer for user files, another for product inventories.",
    "example": "const router = express.Router(); router.get('/');",
    "result": "Bundles routes into mountable modular files.",
    "remember": "Mount routers using app.use('/prefix', routerFile) in your server file.",
    "summary": "* Organizes routes cleanly.\n* Router variables act as mini-apps.\n* Improves developer code maintainability.",
    "diagram": "\n  [ app.js ] -- mounts '/users' --> [ userRoutes.js (GET, POST) ]\n",
    "practice": "Split user routing paths from your server.js and link them using Express Router.",
    "challenge": "Mount multiple modular routers under different path prefixes (e.g. /api/users and /api/products).",
    "example_code": "// --- routes/userRoutes.js ---\nconst express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => res.send(\"User list\"));\nrouter.post('/', (req, res) => res.send(\"Create user\"));\n\nmodule.exports = router;\n\n// --- server.js ---\n// const express = require('express');\n// const app = express();\n// const userRouter = require('./routes/userRoutes');\n// app.use('/api/users', userRouter); // Mount router",
    "ext": "js"
  },
  "13-Authentication-Basics": {
    "title": "Express Authentication",
    "line": "Explore security layers: Sessions, Cookies, JWTs, and bcrypt password hashing.",
    "think": "Airport check-in. bcrypt is the lock box sealing luggage. JWT is the boarding pass card containing identity stamps you show at boarding gates.",
    "example": "const hashed = await bcrypt.hash(password, 10);",
    "result": "Enables secure client authentication loops.",
    "remember": "Never store plain-text passwords in databases! Always hash them using bcrypt first.",
    "summary": "* bcrypt: hashes passwords before DB saves.\n* Sessions/Cookies: stateful authentication storage on servers.\n* JWT (JSON Web Tokens): stateless token-based authentication verified on requests.",
    "diagram": "\n  Register: Password ---> [ bcrypt.hash ] ---> Hashed Database Save\n  Login:    Pass input ---> [ bcrypt.compare ] ---> JWT issued\n",
    "practice": "Write a script that hashes a password using bcrypt and compares it against input matches.",
    "challenge": "Implement a mock login route that signs a user payload using the jsonwebtoken library.",
    "example_code": "const express = require('express');\nconst bcrypt = require('bcrypt');\nconst jwt = require('jsonwebtoken');\nconst app = express();\napp.use(express.json());\n\nconst users = []; // Mock DB\nconst JWT_SECRET = \"super_secret_key\";\n\napp.post('/register', async (req, res) => {\n  const { username, password } = req.body;\n  const hashedPassword = await bcrypt.hash(password, 10); // Salt factor 10\n  users.push({ username, password: hashedPassword });\n  res.status(201).send(\"Registered successfully!\");\n});\n\napp.post('/login', async (req, res) => {\n  const { username, password } = req.body;\n  const user = users.find(u => u.username === username);\n  if (!user) return res.status(400).send(\"User not found\");\n\n  const isMatch = await bcrypt.compare(password, user.password); // Compare inputs\n  if (!isMatch) return res.status(401).send(\"Incorrect password\");\n\n  // Sign Token\n  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });\n  res.json({ token });\n});",
    "ext": "js"
  },
  "14-Validation": {
    "title": "Request Validation",
    "line": "Sanitize and validate client request payloads before database insertion.",
    "think": "A border customs checkpoint. If you bring illegal items (bad payloads) or are missing visas (missing fields), you are turned back before entry.",
    "example": "if (!req.body.email.includes('@')) return error();",
    "result": "Rejects incorrect request formats with bad-request logs.",
    "remember": "Validation avoids empty entries and SQL/NoSQL injection payloads in databases.",
    "summary": "* Sanitize client body payloads.\n* Protect database integrity.\n* Use libraries like express-validator or custom conditional checkers.",
    "diagram": "\n  Request ---> [ Payload Validator ] -- Bad? (400 Error) : OK (next() route controller)\n",
    "practice": "Build a registration form validation middleware checking that emails contain '@' and passwords are at least 6 characters long.",
    "challenge": "Configure schemas validation models using third-party library schemas (e.g. joi or express-validator).",
    "example_code": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\n// Custom validator middleware\nconst validateUser = (req, res, next) => {\n  const { username, email } = req.body;\n  if (!username || username.length < 3) {\n    return res.status(400).json({ error: \"Username must be at least 3 characters long\" });\n  }\n  if (!email || !email.includes('@')) {\n    return res.status(400).json({ error: \"Valid email is required\" });\n  }\n  next();\n};\n\napp.post('/api/users', validateUser, (req, res) => {\n  res.send(\"Payload validated. Saving to database.\");\n});",
    "ext": "js"
  },
  "15-Project-Structure": {
    "title": "Express Project Structure",
    "line": "Organize large Express projects using modular layouts separating routes, controllers, and models.",
    "think": "Sorting office cabinets: drawer for users logic, drawer for products routers, database schemas cataloged in another room.",
    "example": "Clean Express folder setups.",
    "result": "Ensures codebase scalability and clean development splits.",
    "remember": "Keep controllers focused on request logic only. Delegate database details to model files.",
    "summary": "* Modular MVC architectures.\n* Routes match URLs.\n* Controllers execute business logic.\n* Models handle database schemas.",
    "diagram": "\n  [ server.js ] ---> [ routes/ ] ---> [ controllers/ ] ---> [ models/ ]\n",
    "practice": "Draw a diagram mapping the flow of an incoming request through routes, middleware, and controllers.",
    "challenge": "scaffold a mock directories structure for a backend API containing user and item routes.",
    "example_code": "/* Production Express Layout:\n├── config/             # Database connection setups\n├── controllers/        # Request handlers\n│   └── userController.js\n├── models/             # Schema definitions\n│   └── User.js\n├── routes/             # Route configurations\n│   └── userRoutes.js\n├── middlewares/        # Custom filters\n│   └── auth.js\n├── app.js              # Mounts middlewares and app settings\n└── server.js           # Binds server port listener\n*/",
    "ext": "sh"
  }
};
const EXPRESSJS_PROJECTS = {
  "01-Todo-API": {
    "ext": "js",
    "quick": "# Express Todo API Project\n\n## In One Line\nBuild a REST API using Express that supports complete CRUD operations for managing todo lists in memory.\n\n## Think Like This\nA digital checkboard: you can look at tasks (GET), post new chores (POST), edit status (PUT), and delete cards (DELETE).\n\n## Example\n```javascript\napp.get('/api/todos', (req, res) => res.json(todos));\n```\n\n## Result\nSpins up a REST API server.\n\n## Remember\nUsing express.json() is required to read request body parameters.\n",
    "source": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet todos = [\n  { id: 1, text: \"Buy groceries\", completed: false },\n  { id: 2, text: \"Code backend\", completed: true }\n];\n\n// 1. GET ALL\napp.get('/api/todos', (req, res) => {\n  res.json(todos);\n});\n\n// 2. CREATE\napp.post('/api/todos', (req, res) => {\n  const newTodo = {\n    id: Date.now(),\n    text: req.body.text,\n    completed: false\n  };\n  todos.push(newTodo);\n  res.status(201).json(newTodo);\n});\n\n// 3. UPDATE\napp.put('/api/todos/:id', (req, res) => {\n  const idQuery = parseInt(req.params.id);\n  const todo = todos.find(t => t.id === idQuery);\n  \n  if (todo) {\n    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;\n    todo.text = req.body.text || todo.text;\n    res.json(todo);\n  } else {\n    res.status(404).json({ error: \"Todo not found\" });\n  }\n});\n\n// 4. DELETE\napp.delete('/api/todos/:id', (req, res) => {\n  const idQuery = parseInt(req.params.id);\n  todos = todos.filter(t => t.id !== idQuery);\n  res.json({ message: \"Todo item removed successfully\" });\n});\n\napp.listen(3000, () => console.log(\"Todo API online at http://localhost:3000/\"));",
    "practice": "Add an endpoint 'DELETE /api/todos' that wipes out all completed tasks in one call.",
    "challenge": "Add validations to ensure the 'text' property is present and not empty in POST requests.",
    "summary": "* REST APIs handle client payloads.\n* Express verbs map dynamic lists updates.",
    "diagram": "\n  GET    /api/todos     -> returns lists\n  POST   /api/todos     -> pushes item\n  PUT    /api/todos/:id -> updates fields\n  DELETE /api/todos/:id -> filters arrays\n"
  },
  "02-Notes-API": {
    "ext": "js",
    "quick": "# Express Notes API Project\n\n## In One Line\nBuild a notes API with modular routers, global error handling, and basic keyword query search.\n\n## Think Like This\nA library indexing cabinet: you search notes by keywords (queries), request individual files, and the librarian handles crashes without closing the library.\n\n## Example\n```javascript\nconst matches = notes.filter(n => n.title.includes(q));\n```\n\n## Result\nRenders a robust routed API workspace.\n\n## Remember\nUsing modular Express Router modules keeps server entry files lightweight and organized.\n",
    "source": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet notes = [];\n\n// Modular router simulation\nconst notesRouter = express.Router();\n\nnotesRouter.get('/', (req, res) => {\n  const { search } = req.query;\n  if (search) {\n    const filtered = notes.filter(n => n.title.toLowerCase().includes(search.toLowerCase()));\n    return res.json(filtered);\n  }\n  res.json(notes);\n});\n\nnotesRouter.post('/', (req, res) => {\n  const note = { id: Date.now(), title: req.body.title, content: req.body.content };\n  notes.push(note);\n  res.status(201).json(note);\n});\n\napp.use('/api/notes', notesRouter);\n\n// Global Error Handler Middleware\napp.use((err, req, res, next) => {\n  console.error(\"Dashboard error:\", err.stack);\n  res.status(500).json({ error: \"Something failed inside notes server!\" });\n});\n\napp.listen(3000, () => console.log(\"Notes API online at http://localhost:3000/\"));",
    "practice": "Add a route to get a single note by its ID parameter, returning 404 if not found.",
    "challenge": "Implement custom validation middleware inside notesRouter preventing saving notes with titles shorter than 4 characters.",
    "summary": "* Modular routers isolate routes.\n* Global handlers parse crashes cleanly.",
    "diagram": "\n  [ Request ] ---> [ notesRouter ] -- error? --> [ Error handler ] ---> Response\n"
  }
};
const MONGODB_DATA = {
  "01-Introduction": {
    "title": "MongoDB Introduction",
    "line": "MongoDB is a document-based NoSQL database that stores data in flexible, JSON-like documents.",
    "think": "Excel sheets vs text folders. Instead of tables with strict rows and columns (SQL), you store information inside folders containing flexible document forms (JSON) that can have different details for each page.",
    "example": "{ \"name\": \"Alice\", \"role\": \"Lead\" }",
    "result": "Represents a single database document schema.",
    "remember": "NoSQL databases allow you to save nested arrays and objects inside documents directly, avoiding complex table joins.",
    "summary": "* Document-oriented storage model.\n* Stores JSON/BSON document cards.\n* Dynamic, flexible schema layouts.",
    "diagram": "\n+---------------------------------------------+\n| SQL:      Tables  ==> Rows    ==> Columns   |\n| MongoDB:  DB      ==> Collect.==> Documents |\n+---------------------------------------------+\n",
    "practice": "Explain the architectural differences between relational (SQL) and non-relational (NoSQL) databases.",
    "challenge": "Explain how MongoDB converts JSON documents to high-speed binary BSON formats in memory.",
    "example_code": "// SQL Table Row representation:\n// ID | Name  | Role\n// 1  | Alice | Lead\n\n// MongoDB BSON Document representation:\n{\n  \"_id\": \"66762f026a7e...\",\n  \"name\": \"Alice\",\n  \"role\": \"Lead\",\n  \"skills\": [\"React\", \"Express\"], // Nested arrays allowed!\n  \"status\": { \"active\": true }     // Nested objects allowed!\n}",
    "ext": "js"
  },
  "02-Installation": {
    "title": "MongoDB Installation",
    "line": "Set up MongoDB locally on your computer, or configure a cloud cluster database using MongoDB Atlas.",
    "think": "Running your own safe inside your basement (Local installation) vs renting a secure safety deposit box in a bank vault (Atlas Cloud Setup).",
    "example": "Install MongoDB Community Edition vs Atlas cloud setup.",
    "result": "Prepares a working database server to store project data.",
    "remember": "Local setups are great for offline testing, but cloud databases (Atlas) are standard for modern production applications.",
    "summary": "* Part A: MongoDB Local Installation (mongod daemon, Compass visual client).\n* Part B: MongoDB Atlas Cloud Setup (Shared clusters, connection URI strings).\n* Binds backends to persistent storage.",
    "diagram": "\n  Local: [ PC ] <== connection ==> [ Local mongod port 27017 ]\n  Cloud: [ PC ] <== connection string ==> [ MongoDB Atlas Cloud Server ]\n",
    "practice": "Configure a free Atlas cluster, whitelist your IP address, and obtain your connection URI string.",
    "challenge": "Connect your local MongoDB shell or Compass client to your Atlas cluster.",
    "example_code": "# 1. Local Database running commands\n# Start mongod server daemon: mongod\n# Connect local client terminal: mongosh\n\n# 2. Connection URI String template (Keep password secret)\nmongodb+srv://username:password@cluster0.abcde.mongodb.net/database_name?retryWrites=true&w=majority",
    "ext": "sh"
  },
  "03-Documents": {
    "title": "MongoDB Documents",
    "line": "Documents are BSON data records that store key-value properties in MongoDB collections.",
    "think": "A profile page in a file cabinet directory. It lists fields (Name, Date, Hobbies), using nested structures.",
    "example": "const doc = { \"_id\": ObjectId(), \"name\": \"Bob\" };",
    "result": "Creates a structured database document layout.",
    "remember": "Every document requires a unique _id field which acts as the primary key locator.",
    "summary": "* BSON is Binary JSON.\n* Maximum document size limit is 16MB.\n* Maps properties dynamic keys.",
    "diagram": "\n+---------------------------------------------+\n| BSON Document                               |\n|  ├── \"_id\": ObjectId(\"66762f...\")           |\n|  ├── \"title\": \"Notes\"                       |\n|  └── \"completed\": false                     |\n+---------------------------------------------+\n",
    "practice": "Build a document template representing an inventory product card details.",
    "challenge": "Explain how MongoDB auto-generates ObjectIDs and what timestamps parameters they contain.",
    "example_code": "// Anatomy of a MongoDB Document\n{\n  \"_id\": \"603d2e92c23a7e4368c12a45\", // Auto-generated 12-byte Hex identifier\n  \"productName\": \"Laptop\",\n  \"price\": 999.99,\n  \"inStock\": true,\n  \"attributes\": {\n    \"brand\": \"Dell\",\n    \"weightKg\": 1.8\n  }\n}",
    "ext": "js"
  },
  "04-Collections": {
    "title": "MongoDB Collections",
    "line": "Collections group related MongoDB documents together, acting as tables.",
    "think": "Filing cabinet drawers. You keep customer profiles in one drawer (users collection) and invoices in another (orders collection).",
    "example": "db.createCollection('users');",
    "result": "Allocates a new collection inside your active database directory.",
    "remember": "Collections do not enforce schemas by default. You can store documents with different structures side-by-side.",
    "summary": "* Groups document records.\n* Equivalent to SQL tables.\n* Schemaless collections allow dynamic migrations.",
    "diagram": "\n  [ Database ] ---> Collection: Users [ Doc 1, Doc 2 ] | Collection: Orders [ Doc 3 ]\n",
    "practice": "Create a list of collections needed to build a school database system.",
    "challenge": "Explain the performance benefits of keeping collections separate instead of nesting all data in one giant collection.",
    "example_code": "# Inside mongosh terminal shell:\n# Show active databases\nshow dbs\n\n# Select database to use\nuse schoolDB\n\n# Create collections\ndb.createCollection(\"students\")\ndb.createCollection(\"teachers\")\n\n# Show collections in active DB\nshow collections",
    "ext": "sh"
  },
  "05-Insert": {
    "title": "MongoDB Insert",
    "line": "Insert operations save new documents into a database collection.",
    "think": "Adding a new page profile inside a client file cabinet drawer.",
    "example": "db.users.insertOne({ name: 'Bob' });",
    "result": "Saves the document and returns the unique _id code.",
    "remember": "Use insertOne for single records, and insertMany for array lists.",
    "summary": "* insertOne(): writes single document.\n* insertMany(): writes list array documents.\n* Creates collection automatically if it does not exist.",
    "diagram": "\n  [ User JSON input ] === insertOne ===> [ Collection database file ]\n",
    "practice": "Insert a new document representing a course catalog card details into a classes collection.",
    "challenge": "Perform an insertMany write saving three student profiles in one call.",
    "example_code": "// Insert single document record\ndb.students.insertOne({\n  name: \"Alice\",\n  age: 20,\n  major: \"Computer Science\"\n});\n\n// Insert multiple documents\ndb.students.insertMany([\n  { name: \"Bob\", age: 22, major: \"Math\" },\n  { name: \"Charlie\", age: 21, major: \"Physics\" }\n]);",
    "ext": "js"
  },
  "06-Find": {
    "title": "MongoDB Find",
    "line": "Find queries search and retrieve documents matching filters inside a collection.",
    "think": "A filing assistant searching drawers: 'bring me all student profiles where age is exactly 21'.",
    "example": "db.users.find({ age: 21 });",
    "result": "Returns a cursor list of all matching documents.",
    "remember": "Use findOne() to retrieve only the first matching document instead of a cursor list.",
    "summary": "* find(): returns all matching records.\n* findOne(): returns single matching document.\n* Empty filter query {} returns all documents in the collection.",
    "diagram": "\n  Collection [Age: 20, Age: 21] -- find({Age: 21}) --> [Age: 21]\n",
    "practice": "Query your students collection to find all records where the major field is 'Computer Science'.",
    "challenge": "Filter queries using projection attributes to return only name fields and exclude _id keys.",
    "example_code": "// Fetch all documents in collection\ndb.students.find({});\n\n// Find single document matching criteria\ndb.students.findOne({ name: \"Alice\" });\n\n// Find documents with projection (1 to include, 0 to exclude)\n// Returns only name and major fields, hides _id keys\ndb.students.find(\n  { age: 21 },\n  { name: 1, major: 1, _id: 0 }\n);",
    "ext": "js"
  },
  "07-Update": {
    "title": "MongoDB Update",
    "line": "Update operations modify fields inside existing documents.",
    "think": "Taking a file page out of a drawer, erasing the old phone number, and writing the new line.",
    "example": "db.users.updateOne({ name: 'Bob' }, { $set: { age: 23 } });",
    "result": "Modifies Bob's age to 23 and prints status updates metadata.",
    "remember": "Always use update operators like $set, or you will replace the ENTIRE document structure with your inputs!",
    "summary": "* updateOne(): updates first matching document.\n* updateMany(): updates all matching records.\n* $set operator modifies fields; $inc increases numeric parameters.",
    "diagram": "\n  [ Original Document ] === $set: { age: 23 } ===> [ Updated Document ]\n",
    "practice": "Increment the age parameter of all students by 1 using the $inc operator.",
    "challenge": "Use upsert configuration options to write records if target query filters miss matching files.",
    "example_code": "// Update single document field\ndb.students.updateOne(\n  { name: \"Bob\" },\n  { $set: { major: \"Engineering\" } }\n);\n\n// Increment numeric value (add 1 to age)\ndb.students.updateOne(\n  { name: \"Alice\" },\n  { $inc: { age: 1 } }\n);\n\n// Update multiple documents matching criteria\ndb.students.updateMany(\n  { age: { $gt: 20 } },\n  { $set: { status: \"Active\" } }\n);",
    "ext": "js"
  },
  "08-Delete": {
    "title": "MongoDB Delete",
    "line": "Delete operations remove documents from a collection.",
    "think": "Shredding files. You take files out of folders and delete them permanently from records.",
    "example": "db.users.deleteOne({ id: 101 });",
    "result": "Removes matching document and returns count confirmation.",
    "remember": "Delete operations are permanent! Double check your filter parameters before deleting.",
    "summary": "* deleteOne(): deletes first matching document.\n* deleteMany(): deletes all matching records.\n* Passing empty query {} inside deleteMany wipes out all files in the collection.",
    "diagram": "\n  Collection [ Bob, Alice ] === deleteOne(Alice) ===> Collection [ Bob ]\n",
    "practice": "Delete a student record by their name parameter from your database.",
    "challenge": "Wipe out all inactive student records using deleteMany.",
    "example_code": "// Delete single document matching criteria\ndb.students.deleteOne({ name: \"Charlie\" });\n\n// Delete all documents matching criteria\ndb.students.deleteMany({ age: { $lt: 18 } });\n\n// DANGER: Clear entire collection documents\n// db.students.deleteMany({});",
    "ext": "js"
  },
  "09-Query-Operators": {
    "title": "Query Operators",
    "line": "Query operators perform logical matching comparisons (greater than, less than, arrays contains).",
    "think": "Adding filter rules to a search engine: 'find games where rating is above 4 ($gt), and genre is RPG ($in)'.",
    "example": "db.items.find({ price: { $gt: 100 } });",
    "result": "Returns all documents with prices greater than 100.",
    "remember": "Logical operator fields wrap around condition objects (e.g. { age: { $lt: 20 } }).",
    "summary": "* Comparison: $gt (greater), $lt (less), $gte (gte), $lte (lte), $ne (not equal).\n* Logical: $or, $and, $in.\n* Array operations check value match lists.",
    "diagram": "\n  { price: { $gt: 50, $lt: 150 } } ---> Filters price fields between 50 and 150\n",
    "practice": "Query students where age is greater than or equal to 21.",
    "challenge": "Query students matching major ranges of either 'Math' or 'Physics' using the $or operator.",
    "example_code": "// 1. Comparison operators (age >= 21)\ndb.students.find({ age: { $gte: 21 } });\n\n// 2. Range comparisons (age between 18 and 22)\ndb.students.find({ age: { $gt: 18, $lt: 22 } });\n\n// 3. Or logical condition (major is Math OR Physics)\ndb.students.find({\n  $or: [\n    { major: \"Math\" },\n    { major: \"Physics\" }\n  ]\n});",
    "ext": "js"
  },
  "10-Sorting": {
    "title": "MongoDB Sorting",
    "line": "Sort queries order retrieved documents based on field criteria.",
    "think": "Sorting alphabetical cards index files: ordering users by age (youngest to oldest) or names (A to Z).",
    "example": "db.users.find().sort({ name: 1 });",
    "result": "Returns documents sorted alphabetically by name.",
    "remember": "Use value 1 for ascending order (A to Z, low to high) and -1 for descending order.",
    "summary": "* Sort orders database queries results.\n* 1: Ascending order sorting.\n* -1: Descending order sorting.",
    "diagram": "\n  Query Results ---> [ Sort Engine ] (1: Ascending / -1: Descending) ---> Sorted Lists\n",
    "practice": "Retrieve a list of students ordered from oldest to youngest.",
    "challenge": "Sort results by major alphabetically, then by age descending inside secondary index checks.",
    "example_code": "// Sort by age ascending (youngest first)\ndb.students.find().sort({ age: 1 });\n\n// Sort by age descending (oldest first)\ndb.students.find().sort({ age: -1 });\n\n// Sort by multiple fields (major alphabetically, then age descending)\ndb.students.find().sort({ major: 1, age: -1 });",
    "ext": "js"
  },
  "11-Limit-And-Skip": {
    "title": "Limit & Skip",
    "line": "Limit and Skip queries restrict result counts to build search pagination lists.",
    "think": "Flipping pages in an online catalog. Skip loads page numbers, and Limit controls item counts per page.",
    "example": "db.users.find().skip(10).limit(5);",
    "result": "Skips the first 10 records and returns the next 5 documents.",
    "remember": "Always sort your queries before using skip and limit to ensure consistent page layouts.",
    "summary": "* Pagination control operators.\n* limit(N): returns maximum N documents.\n* skip(M): skips first M documents.\n* Binds parameters together for search query indexes.",
    "diagram": "\n  [ Skip M items ] ===> [ Return N items limit ]\n",
    "practice": "Build a query that returns the first 3 students from the database.",
    "challenge": "Implement page 3 pagination query logic returning 5 records per page.",
    "example_code": "// Limit results to top 2 records\ndb.students.find().limit(2);\n\n// Skip first 2 records, return next 2 (Pagination Page 2)\ndb.students.find().sort({ name: 1 }).skip(2).limit(2);\n\n// Pagination Page 3 (items 5-6)\ndb.students.find().sort({ name: 1 }).skip(4).limit(2);",
    "ext": "js"
  },
  "12-Indexes": {
    "title": "MongoDB Indexes",
    "line": "Indexes optimize lookup query speeds by storing sorted maps of target fields.",
    "think": "The index section at the back of a textbook. Instead of reading all 500 pages (collection scan), you lookup keywords to find pages instantly.",
    "example": "db.users.createIndex({ email: 1 });",
    "result": "Creates a lookup index tree on the email field.",
    "remember": "Indexes speed up read queries, but slow down write/insert operations because the index tree must update on every write.",
    "summary": "* Boosts read queries speeds.\n* Avoids slow Collection Scans (COLLSCAN).\n* Creates index tree nodes.\n* Use on fields commonly queried in search queries.",
    "diagram": "\n  COLLSCAN: Reads doc 1 -> doc 2 -> doc 3... (Slow)\n  IXSCAN:   Reads Index Node Tree -> grabs document directly (Fast)\n",
    "practice": "Create an index on the age field in your students collection.",
    "challenge": "Explain how to inspect query speeds and index lookups using the explain('executionStats') method.",
    "example_code": "// Create single field index\ndb.students.createIndex({ major: 1 });\n\n// Create unique index (prevents duplicate emails)\ndb.students.createIndex({ email: 1 }, { unique: true });\n\n// Check active collection indexes\ndb.students.getIndexes();\n\n// Verify query speeds and index scans\ndb.students.find({ major: \"Math\" }).explain(\"executionStats\");",
    "ext": "js"
  },
  "13-Aggregation-Basics": {
    "title": "Aggregation Basics",
    "line": "Aggregation pipelines process, group, and calculate calculations on collections data.",
    "think": "An assembly line in a food packing plant. Raw items go in, get sorted ($match), combined into boxes ($group), and labels updated ($project).",
    "example": "db.users.aggregate([ { $group: { _id: '$major', count: { $sum: 1 } } } ]);",
    "result": "Groups students by major and outputs count sums for each group.",
    "remember": "Aggregation stages pass inputs sequentially to the next stage in the pipeline array.",
    "summary": "* Multi-stage data processing pipeline.\n* Aggregation operators: $match (filter), $group (combine), $sort, $project.\n* Ideal for generating statistics and charts.",
    "diagram": "\n  Collection ---> [ $match major ] ---> [ $group sum average ] ---> Output Reports\n",
    "practice": "Build an aggregation pipeline that groups students by age, calculating total student counts.",
    "challenge": "Calculate the average age of all students grouped by major parameters.",
    "example_code": "db.students.aggregate([\n  // Stage 1: Filter students (only those older than 19)\n  { $match: { age: { $gt: 19 } } },\n  \n  // Stage 2: Group by major, calculate student count and average age\n  { $group: {\n      _id: \"$major\",\n      studentCount: { $sum: 1 },\n      averageAge: { $avg: \"$age\" }\n  } },\n\n  // Stage 3: Sort by student count descending\n  { $sort: { studentCount: -1 } }\n]);",
    "ext": "js"
  },
  "14-Relationships": {
    "title": "MongoDB Relationships",
    "line": "Model data connections using referenced IDs or nested sub-documents.",
    "think": "Referenced vs Embedded. Embedding is building a garage connected to your house (nested object). Referencing is storing your car in a nearby commercial parking lot (saving an ID link).",
    "example": "{ user_id: ObjectId('...'), profile: { bio: 'Hi' } }",
    "result": "Enables structural schema connections.",
    "remember": "Embed data if the nested items belong only to that parent. Reference IDs if items are shared or change constantly.",
    "summary": "* Embedded Documents: nested arrays/objects, fast reads, size limit 16MB.\n* Referenced Documents: save ObjectID links, requires manual joins ($lookup or Mongoose populate).",
    "diagram": "\n  Embedded:   { name: \"John\", address: { city: \"NY\" } }\n  Referenced: { name: \"John\", address_id: ObjectId(\"abc\") }\n",
    "practice": "Build a document model representing a post containing an embedded list of comment objects.",
    "challenge": "Build a query using the $lookup aggregation stage to join referenced collections.",
    "example_code": "// 1. Embedded Relationship (Self-contained comments)\ndb.posts.insertOne({\n  title: \"React Guide\",\n  comments: [\n    { author: \"Alice\", text: \"Nice post\" },\n    { author: \"Bob\", text: \"Very helpful\" }\n  ]\n});\n\n// 2. Referenced Relationship (Separate collections)\ndb.authors.insertOne({ _id: ObjectId(\"603d2\"), name: \"John Doe\" });\ndb.articles.insertOne({\n  title: \"NodeJS Secrets\",\n  authorId: ObjectId(\"603d2\") // Link to Author document\n});",
    "ext": "js"
  },
  "15-Mongoose-Basics": {
    "title": "Mongoose Basics",
    "line": "Mongoose is an Object Data Modeling (ODM) library that adds schema validation to MongoDB in Node.",
    "think": "Adding a blueprint quality check inside your factory. It ensures all profile pages contain matching fields before saving them.",
    "example": "const User = mongoose.model('User', new Schema({ name: String }));",
    "result": "Enables schema validating connections to MongoDB database.",
    "remember": "Mongoose compiles models off schemas. Models act as active database query objects (User.find()).",
    "summary": "* Mongoose adds schema structure to NoSQL.\n* Schema: defines document keys and data types validation.\n* Model: class constructor compiled off schemas used to query collections.",
    "diagram": "\n  Schema (Structure) ---> Model (Query Constructor) ---> Document Save\n",
    "practice": "Build a Mongoose schema representing a product card containing validations.",
    "challenge": "Implement hooks middleware (e.g. pre-save password hashing) inside a Mongoose schema.",
    "example_code": "const mongoose = require('mongoose');\n\n// 1. Define Document Schema template with validations\nconst studentSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  age: { type: Number, min: 18 },\n  major: { type: String, default: \"General\" }\n});\n\n// 2. Compile Schema into a query constructor Model\nconst Student = mongoose.model('Student', studentSchema);\n\n// 3. Connect and write record\nmongoose.connect('mongodb://localhost:27017/school')\n  .then(async () => {\n    console.log(\"Connected to MongoDB\");\n    const newStudent = new Student({ name: \"Alice\", age: 20, major: \"CS\" });\n    await newStudent.save();\n    console.log(\"Saved student via Mongoose!\");\n    mongoose.disconnect();\n  });",
    "ext": "js"
  }
};
const MONGODB_PROJECTS = {
  "01-Student-Database": {
    "ext": "js",
    "quick": "# Mongoose Student Database Project\n\n## In One Line\nBuild a student registration catalog database schema using Mongoose, validating ages and majors.\n\n## Think Like This\nA registrar's office. You define entry application forms (schemas), compile them to database ledgers (models), and register student profiles.\n\n## Example\n```javascript\nconst Student = mongoose.model('Student', studentSchema);\n```\n\n## Result\nStores student records safely.\n\n## Remember\nUsing Mongoose schemas prevents saving empty or corrupt documents inside MongoDB collections.\n",
    "source": "const mongoose = require('mongoose');\n\nconst studentSchema = new mongoose.Schema({\n  name: { type: String, required: [true, 'Student name is required'] },\n  age: { type: Number, min: [16, 'Minimum age is 16'], required: true },\n  email: { type: String, required: true, unique: true },\n  enrolled: { type: Boolean, default: true }\n});\n\nconst Student = mongoose.model('Student', studentSchema);\n\nasync function runDatabaseDemo() {\n  try {\n    await mongoose.connect('mongodb://127.0.0.1:27017/school_demo');\n    console.log(\"Connected to local school database.\");\n\n    // Clear old data\n    await Student.deleteMany({});\n\n    // 1. Insert Student\n    const student1 = new Student({\n      name: \"John Doe\",\n      age: 20,\n      email: \"john@test.com\"\n    });\n    await student1.save();\n    console.log(\"Inserted John Doe!\");\n\n    // 2. Retrieve Student\n    const list = await Student.find({ enrolled: true });\n    console.log(\"Active Students list:\", list);\n\n  } catch (e) {\n    console.error(\"Database error:\", e.message);\n  } finally {\n    await mongoose.disconnect();\n  }\n}\n\nrunDatabaseDemo();",
    "practice": "Add a new field 'courses' to the studentSchema as an array of strings.",
    "challenge": "Implement custom email validation logic using regex patterns inside Mongoose schema definitions.",
    "summary": "* Schemas map validations requirements.\n* Models query collections natively in Node.",
    "diagram": "\n  [ Input JSON ] ---> validate via Schema ---> save to students collection\n"
  },
  "02-Expense-Database": {
    "ext": "js",
    "quick": "# Mongoose Expense Database Project\n\n## In One Line\nCreate a persistent financial transaction registry using Mongoose, calculating aggregate balances.\n\n## Think Like This\nAn accounting ledger database: transactions are logged, and aggregate queries calculate total spendings automatically.\n\n## Example\n```javascript\nconst Expense = mongoose.model('Expense', expenseSchema);\n```\n\n## Result\nBuilds financial collections.\n\n## Remember\nUsing schemas ensures that amounts are strictly numbers and category keys match selection templates.\n",
    "source": "const mongoose = require('mongoose');\n\nconst expenseSchema = new mongoose.Schema({\n  description: { type: String, required: true },\n  amount: { type: Number, required: true }, // Negative for cost, positive for income\n  category: { type: String, enum: ['Food', 'Bills', 'Salary', 'Leisure'], required: true },\n  date: { type: Date, default: Date.now }\n});\n\nconst Expense = mongoose.model('Expense', expenseSchema);\n\nasync function runBudgetDemo() {\n  try {\n    await mongoose.connect('mongodb://127.0.0.1:27017/budget_demo');\n    console.log(\"Connected to budget database.\");\n\n    // Clear records\n    await Expense.deleteMany({});\n\n    // Write mock records\n    await Expense.insertMany([\n      { description: \"Salary\", amount: 2000, category: \"Salary\" },\n      { description: \"Coffee\", amount: -5, category: \"Food\" },\n      { description: \"Electricity\", amount: -150, category: \"Bills\" }\n    ]);\n\n    // Aggregate balance query\n    const stats = await Expense.aggregate([\n      { $group: { _id: null, totalBalance: { $sum: \"$amount\" } } }\n    ]);\n    \n    console.log(\"Total computed balance:\", stats[0] ? stats[0].totalBalance : 0);\n\n  } catch (e) {\n    console.error(\"Budget error:\", e.message);\n  } finally {\n    await mongoose.disconnect();\n  }\n}\n\nrunBudgetDemo();",
    "practice": "Add a new enum category 'Transport' to the expenseSchema.",
    "challenge": "Build an aggregation query that calculates total spendings grouped by categories.",
    "summary": "* Aggregations perform database calculations.\n* Enum validations lock down categories inputs.",
    "diagram": "\n  [ Collection entries ] ---> aggregate $group sum -> totalBalance value\n"
  }
};
const MERN_DATA = {
  "01-What-Is-MERN": {
    "title": "What is MERN",
    "line": "MERN is a full-stack JavaScript architecture combining MongoDB, Express, React, and Node.js.",
    "think": "An entire restaurant system. MongoDB is the food warehouse (database). Node/Express is the kitchen staff preparing plates (backend API). React is the waiter showing menus to customers (frontend UI).",
    "example": "React Frontend <== HTTP JSON API ==> Express Backend <== Mongoose ==> MongoDB",
    "result": "Synchronizes user interfaces with database registers.",
    "remember": "MERN is popular because it allows you to build full-stack applications using a single language: JavaScript.",
    "summary": "* MongoDB: Persistent NoSQL storage.\n* Express.js: Router API layer.\n* React: Interactive single-page client.\n* Node.js: Local server runtime runtime.",
    "diagram": "\n  [ React UI (Client) ] === HTTP requests ===> [ Express/Node (Server) ] === query ===> [ MongoDB (Database) ]\n",
    "practice": "Describe the responsibility of each MERN component in full-stack setups.",
    "challenge": "Explain how single-page apps (SPA) load routes dynamically compared to traditional multi-page systems.",
    "example_code": "/* MERN stack structural layers responsibility:\n1. M - MongoDB : Persistent data warehouse.\n2. E - Express : Listens for routes and handles logic.\n3. R - React   : Visual dashboard interface.\n4. N - Node    : Backend server compiler engine.\n*/",
    "ext": "sh"
  },
  "02-Project-Architecture": {
    "title": "Project Architecture",
    "line": "Organize full-stack projects by separating client and server repositories or configuring monorepos.",
    "think": "An office split: one floor for client sales panels (frontend folder), another floor for security backend servers (backend folder).",
    "example": "Folders: client/ and server/ side-by-side.",
    "result": "Keeps package dependencies and build systems isolated.",
    "remember": "Always maintain separate package.json files for client (React) and server (Express) folders.",
    "summary": "* Directory separations avoid package crashes.\n* Client directory: React components built with Vite.\n* Server directory: Express/Node scripts.",
    "diagram": "\n  my-mern-app/\n  ├── client/ (Vite React app, package.json)\n  └── server/ (Node Express app, package.json)\n",
    "practice": "Scaffold a MERN workspace featuring clean client/ and server/ subdirectories.",
    "challenge": "Create a root script that launches both client and server ports concurrently using the 'concurrently' library.",
    "example_code": "# Project Root folder structure scaffold\nmkdir mern-app\ncd mern-app\n\n# 1. Create Server folder\nmkdir server\ncd server\nnpm init -y\nnpm install express mongoose dotenv\ncd ..\n\n# 2. Create Client folder\nnpm create vite@latest client -- --template react",
    "ext": "sh"
  },
  "03-Frontend-And-Backend-Connection": {
    "title": "CORS and API Connections",
    "line": "Configure Cross-Origin Resource Sharing (CORS) to connect React to Express across different ports.",
    "think": "An ID card checking desk. By default, servers block requests from other ports unless you register their credentials.",
    "example": "app.use(cors({ origin: 'http://localhost:5173' }));",
    "result": "Enables React (running on 5173) to fetch data from Express (running on 5000).",
    "remember": "Without CORS enabled on the backend, browsers will block all incoming fetch requests from your React client.",
    "summary": "* Port 5173 (React) calls Port 5000 (Express).\n* CORS blocks cross-origin requests by default.\n* Enable access using the 'cors' middleware package.",
    "diagram": "\n  React (Port 5173) === GET Request ===> CORS check (Port 5000) ---> Express processes logic\n",
    "practice": "Configure cors middleware in an Express application to permit requests from your local React port.",
    "challenge": "Configure Vite proxy settings inside vite.config.js to bypass CORS parameters locally.",
    "example_code": "// --- server/server.js ---\nconst express = require('express');\nconst cors = require('cors');\nconst app = express();\n\n// Enable requests only from React client\napp.use(cors({ origin: 'http://localhost:5173' }));\n\napp.get('/api/greet', (req, res) => {\n  res.json({ message: \"Hello React!\" });\n});\n\napp.listen(5000);",
    "ext": "js"
  },
  "04-CRUD-Workflow": {
    "title": "MERN CRUD Workflow",
    "line": "Follow a complete data cycle: React action triggers Express routes, modifying MongoDB documents.",
    "think": "Submitting a bank slip. You input details in React, send it to the Express clerk, who saves it in the MongoDB vault.",
    "example": "React fetch(POST) ===> Express app.post ===> Mongoose save() ===> MongoDB",
    "result": "Persists client inputs into active database collections.",
    "remember": "Always refresh your React component state after database modifications to update the UI on screen.",
    "summary": "* React triggers fetch action.\n* Express validates and queries database.\n* MongoDB saves document.\n* Express sends confirmation; React updates state.",
    "diagram": "\n  [React Form Submit] -> [API POST fetch] -> [Express Router] -> [Mongoose save()] -> [Success OK]\n",
    "practice": "Scaffold the code sequence needed to save and display products in MERN.",
    "challenge": "Implement loading states in React to disable button submissions during database writes.",
    "example_code": "// --- client/components/ItemForm.jsx ---\n// const saveItem = (name) => {\n//   fetch('http://localhost:5000/api/items', {\n//     method: 'POST',\n//     headers: { 'Content-Type': 'application/json' },\n//     body: JSON.stringify({ name })\n//   }).then(res => res.json()).then(newItem => setItems(prev => [...prev, newItem]));\n// };",
    "ext": "js"
  },
  "05-API-Integration": {
    "title": "MERN API Integration",
    "line": "Synchronize React component lifecycle states to Express backend APIs using useEffect.",
    "think": "Entering a hotel lobby. As soon as you step inside (mount), the front desk loads your reservation lists.",
    "example": "useEffect(() => { loadAPI(); }, []);",
    "result": "Loads database arrays into active React state buffers on startup.",
    "remember": "Always define loading status states so users see feedback indicators during fetching lag.",
    "summary": "* Fetch data inside useEffect on mount.\n* Store API response arrays in React states.\n* Map state arrays to JSX items lists.",
    "diagram": "\n  React Mounts ---> useEffect calls backend API ---> save response in state ---> render lists\n",
    "practice": "Build a React component that fetches and lists tasks from your local Express API server.",
    "challenge": "Implement fetch retry logic displaying custom offline alerts when server connections fail.",
    "example_code": "// client/src/App.jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction App() {\n  const [tasks, setTasks] = useState([]);\n\n  useEffect(() => {\n    fetch('http://localhost:5000/api/tasks')\n      .then(res => res.json())\n      .then(data => setTasks(data))\n      .catch(err => console.error(\"API Error:\", err));\n  }, []);\n\n  return (\n    <div>\n      <h2>MERN Tasks</h2>\n      <ul>{tasks.map(t => <li key={t._id}>{t.title}</li>)}</ul>\n    </div>\n  );\n}\n\nexport default App;",
    "ext": "jsx"
  },
  "06-State-Management": {
    "title": "Full-Stack State Management",
    "line": "Synchronize client interface state modifications with database transactions.",
    "think": "Syncing your phone contacts. Adding a contact saves it locally (React state) and uploads it to the server (database query).",
    "example": "setItems(prev => prev.filter(item => item._id !== deletedId));",
    "result": "Synchronizes user interfaces with database state updates.",
    "remember": "Perform optimistic UI updates only if you handle fetch rollback failures gracefully.",
    "summary": "* State is the local single source of truth.\n* Client actions trigger parallel UI updates and database writes.\n* Fetch errors must trigger state sync rollbacks.",
    "diagram": "\n  User deletes item -> React filters state (UI updates) -> API deletes document in DB\n",
    "practice": "Build a delete item callback that updates React state array hooks on success responses.",
    "challenge": "Implement optimistic UI updates where items disappear from screens *before* API calls finish.",
    "example_code": "// client/src/App.jsx\n// const handleDelete = async (id) => {\n//   // Optimistic update: filter first\n//   setTasks(prev => prev.filter(t => t._id !== id));\n//   const res = await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });\n//   if (!res.ok) {\n//      // Rollback logic if backend delete fails\n//      refetchTasks();\n//   }\n// };",
    "ext": "js"
  },
  "07-Authentication-Flow": {
    "title": "MERN Authentication Flow",
    "line": "Implement complete secure user signup, login, password hashing, and token authentication.",
    "think": "Getting a security badge at a company. You register details, security hashes details (bcrypt), prints a badge (JWT), you save it in your wallet (Cookie/LocalStorage), and show it at locked doors.",
    "example": "Pass credentials via HTTPS headers using Bearer token schemas.",
    "result": "Enables secure role-based full-stack authentication.",
    "remember": "HTTP-Only cookies are more secure than localStorage because they protect tokens from XSS script attacks.",
    "summary": "* bcrypt hashes passwords on register.\n* Express logins sign JWTs.\n* React client stores tokens inside cookies or localStorage.\n* Tokens verify identity in custom middleware.",
    "diagram": "\n  [User Input Login] ---> [React Form Submit] ---> [Express API Auth] ---> [verify bcrypt]\n                                                                                |\n  [Access Protected Routes] <--- [Cookie/Storage] <--- [JWT Issued] <-----------+\n",
    "practice": "Build a register form in React connecting to an Express bcrypt hashing route.",
    "challenge": "Implement secure HTTP-Only cookie transmissions to store token payloads safely in client browsers.",
    "example_code": "// Complete MERN auth pipeline outline\n// 1. React submits login credentials (fetch POST /api/login)\n// 2. Express receives body, finds User model: User.findOne({ username })\n// 3. Compare passwords: const isMatch = await bcrypt.compare(password, user.password)\n// 4. Sign token: const token = jwt.sign({ userId: user._id }, SECRET)\n// 5. Send back token: res.json({ token })\n// 6. React saves token in state and attaches it to subsequent headers: Authorization: \"Bearer \" + token",
    "ext": "js"
  },
  "08-Protected-Routes": {
    "title": "Protected Routes",
    "line": "Restrict access to dashboard pages on the client and API endpoints on the server.",
    "think": "A hotel elevator requiring keycards. If you try to go to the penthouse suite (dashboard page) without a card, the elevator redirects you.",
    "example": "if (!token) return <Navigate to=\"/login\" />;",
    "result": "Redirects unauthorized users to public login forms.",
    "remember": "Always validate tokens on BOTH frontend (for clean page redirects) and backend (for database security).",
    "summary": "* React client routing blocks (Navigate components).\n* Backend Express middleware validates headers: Authorization: Bearer <token>.\n* Blocks malicious API hacks.",
    "diagram": "\n  React Page Load ---> Check local token ---> present? (render page) : redirect /login\n",
    "practice": "Build a protected route wrapper in React checking token authentication states.",
    "challenge": "Build a JWT verification middleware in Express to secure database query routes.",
    "example_code": "// --- client/components/ProtectedRoute.jsx ---\nimport React from 'react';\nimport { Navigate } from 'react-router-dom';\n\nfunction ProtectedRoute({ children, isAuthenticated }) {\n  // If not authenticated, redirect to Login form\n  return isAuthenticated ? children : <Navigate to=\"/login\" />;\n}\n\n// --- server/middleware/auth.js ---\n// const jwt = require('jsonwebtoken');\n// module.exports = (req, res, next) => {\n//   const token = req.headers.authorization?.split(' ')[1];\n//   if (!token) return res.status(401).send(\"Access Denied\");\n//   try {\n//     req.user = jwt.verify(token, \"SECRET\");\n//     next();\n//   } catch(e) { res.status(400).send(\"Invalid Token\"); }\n// };",
    "ext": "jsx"
  },
  "09-Deployment-Basics": {
    "title": "Deployment Basics",
    "line": "Host static frontend pages, publish backend APIs, and configure cloud databases.",
    "think": "Launching your restaurant globally: renting public shopfronts on busy streets (Vercel), hiring central kitchens (Render), and renting secure cloud warehouses (Atlas).",
    "example": "Deploy React to Vercel/Pages, Node to Render, and MongoDB to Atlas.",
    "result": "Publishes your local application onto public internet URLs.",
    "remember": "Ensure you update backend CORS settings to whitelist your public Vercel frontend URL after deployment.",
    "summary": "* Frontend hosting: Vercel, GitHub Pages, Netlify (static assets).\n* Backend hosting: Render, Heroku (runs Node server processes).\n* Database: MongoDB Atlas cloud storage clusters.\n* Manage production env parameters.",
    "diagram": "\n  [ Vercel UI (Front) ] === api call ===> [ Render Server (Back) ] === query ===> [ Atlas Cloud (DB) ]\n",
    "practice": "List the environment variable configurations needed on your Render host dashboard to connect to Atlas.",
    "challenge": "Set up a GitHub deployment pipeline that automatically rebuilds Vercel/Render hosting targets on git push actions.",
    "example_code": "# Render environment configuration checklist:\n# 1. Add NODE_ENV = \"production\"\n# 2. Add MONGODB_URI = \"mongodb+srv://...\"\n# 3. Add PORT = 10000 (Render binds ports dynamically)\n# 4. Set Build command: npm install\n# 5. Set Start command: node server.js",
    "ext": "sh"
  },
  "10-Scalable-Structure": {
    "title": "Scalable MERN Structure",
    "line": "Organize large-scale MERN repositories using monorepo workspaces or nested sub-packages.",
    "think": "A corporate campus: separate department buildings with shared communication lines to organize scaling teams.",
    "example": "Configuring a workspace parent directory folder.",
    "result": "Improves modular code sharing and clean development boundaries.",
    "remember": "Keep dependency trees separate. A client file must never import backend packages, and vice versa.",
    "summary": "* Separates code responsibilities.\n* Client holds page components.\n* Server holds database configurations and routes.\n* Promotes code reuse and testing.",
    "diagram": "\n  mern-workspace/\n  ├── client/             # React App\n  ├── server/             # Express App\n  └── package.json        # Workspace configuration\n",
    "practice": "Configure npm workspaces inside your project root to run both client and server directories simultaneously.",
    "challenge": "Build a shared utility subfolder that exports schemas models shared by both server and client.",
    "example_code": "{\n  \"name\": \"mern-monorepo\",\n  \"version\": \"1.0.0\",\n  \"private\": true,\n  \"workspaces\": [\n    \"client\",\n    \"server\"\n  ],\n  \"scripts\": {\n    \"start-server\": \"npm run start --workspace=server\",\n    \"start-client\": \"npm run dev --workspace=client\",\n    \"dev\": \"concurrently \\\"npm run start-server\\\" \\\"npm run start-client\\\"\"\n  }\n}",
    "ext": "json"
  },
  "11-Environment-Management": {
    "title": "Environment Management",
    "line": "Configure separate variables for local development and live production environments.",
    "think": "A stunt double vs a real actor. During rehearsals (dev), you use stunt doubles (local DB). During the real show (production), you use the main actor (cloud DB).",
    "example": "const db = process.env.NODE_ENV === 'production' ? cloudDB : localDB;",
    "result": "Adapts runtime connection endpoints automatically.",
    "remember": "Always verify your environment variables list on Vercel/Render when deploying update packages.",
    "summary": "* NODE_ENV tracks runtime phases ('development' vs 'production').\n* Local dotenv configures local ports.\n* Deployment hosting dashboards configure cloud variables.",
    "diagram": "\n  [ NODE_ENV ] === \"production\" ? Connect Atlas Cloud : Connect Local MongoDB 27017\n",
    "practice": "Build a configuration helper file that exports the correct API target URL based on NODE_ENV.",
    "challenge": "Implement build scripts that compile custom configurations based on target stages.",
    "example_code": "// config/db.js\nconst mongoose = require('mongoose');\n\nconst connectDB = async () => {\n  // Select connection string based on active environment status\n  const connectionString = process.env.NODE_ENV === 'production' \n    ? process.env.MONGO_URI_PROD \n    : 'mongodb://localhost:27017/devdb';\n\n  await mongoose.connect(connectionString);\n  console.log(`Connected to ${process.env.NODE_ENV} database.`);\n};\n\nmodule.exports = connectDB;",
    "ext": "js"
  },
  "12-Production-Checklist": {
    "title": "MERN Production Checklist",
    "line": "Complete final security, optimization, and validation audits before launching your application.",
    "think": "The pre-flight inspection checklist pilots run through to check wings, fuel tanks, and dials before taking off.",
    "example": "Install safety headers (helmet), enable compression, and prune logs.",
    "result": "Prepares MERN stacks for high-traffic public access.",
    "remember": "Enable production build minifications in React to shrink bundle file sizes.",
    "summary": "* Backend security: Install 'helmet' middleware, enable rate-limiting, secure CORS parameters.\n* Performance: Enable compression, build production assets using npm run build.\n* Database: Confirm indexes are active on frequently queried search fields.",
    "diagram": "\n  [ Dev Mode ] ---> security headers check ---> bundle compressions ---> [ Production Live ]\n",
    "practice": "Install and mount the helmet middleware in your Express server configuration.",
    "challenge": "Write a rate-limiter configuration to block brute-force query attacks on your login route.",
    "example_code": "const express = require('express');\nconst helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\nconst app = express();\n\n// 1. Secure HTTP headers\napp.use(helmet());\n\n// 2. Configure rate limits (max 100 requests per 15 minutes)\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100,\n  message: \"Too many requests from this IP.\"\n});\napp.use('/api/', limiter);",
    "ext": "js"
  }
};
const MERN_PROJECTS = {
  "01-Task-Manager": {
    "ext": "jsx",
    "quick": "# MERN Task Manager Project\n\n## In One Line\nBuild a task tracker that performs full CRUD updates syncing a React interface with a MongoDB collection through an Express API.\n\n## Think Like This\nA digital Kanban board: you drag cards, update task statuses, edit titles in forms, and the cloud database records everything permanently.\n\n## Example\n```javascript\nconst res = await fetch('/api/tasks');\n```\n\n## Result\nRenders an interactive task manager.\n\n## Remember\nAlways handle loading indicators in React during async network fetches to ensure smooth user feedback loops.\n",
    "source": "// Simulated unified React code\nimport React, { useState, useEffect } from 'react';\n\nfunction TaskManager() {\n  const [tasks, setTasks] = useState([]);\n  const [title, setTitle] = useState(\"\");\n  const [loading, setLoading] = useState(true);\n\n  const API_URL = 'http://localhost:5000/api/tasks';\n\n  useEffect(() => {\n    fetch(API_URL)\n      .then(res => res.json())\n      .then(data => {\n        setTasks(data);\n        setLoading(false);\n      });\n  }, []);\n\n  const addTask = async (e) => {\n    e.preventDefault();\n    if (!title.trim()) return;\n    const res = await fetch(API_URL, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ title })\n    });\n    const newTask = await res.json();\n    setTasks([...tasks, newTask]);\n    setTitle(\"\");\n  };\n\n  const deleteTask = async (id) => {\n    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });\n    setTasks(tasks.filter(t => t._id !== id));\n  };\n\n  if (loading) return <p>Loading workspace...</p>;\n\n  return (\n    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>\n      <h2>MERN Task Board</h2>\n      <form onSubmit={addTask}>\n        <input value={title} onChange={e => setTitle(e.target.value)} placeholder=\"Add task...\" />\n        <button type=\"submit\">Submit</button>\n      </form>\n      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>\n        {tasks.map(t => (\n          <li key={t._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>\n            <span>{t.title}</span>\n            <button onClick={() => deleteTask(t._id)}>Remove</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default TaskManager;",
    "practice": "Add a status filter category toggle (Completed vs Pending) inside the tasks grid list.",
    "challenge": "Implement description parameters in both the schema model and form inputs, mapping details inside cards.",
    "summary": "* CRUD endpoints connect React forms to Atlas.\n* States are updated by appending returned database payloads.",
    "diagram": "\n  [ User Form ] ---> POST Request ---> [ Express route ] ---> [ MongoDB Write ] ---> [ State Sync ]\n"
  },
  "02-Expense-Tracker": {
    "ext": "jsx",
    "quick": "# MERN Expense Tracker Project\n\n## In One Line\nBuild a budget tracker calculating total incomes and expenses, persisting cash records in MongoDB.\n\n## Think Like This\nA persistent cash register: cash flows are logged in MongoDB collections, and React calculates total balances dynamically.\n\n## Example\n```javascript\nconst balance = transactions.reduce((acc, t) => acc + t.amount, 0);\n```\n\n## Result\nRenders full-stack financial sheets.\n\n## Remember\nNumber strings must be parsed to floating-points on submit before sending arithmetic payloads to database schemas.\n",
    "source": "// client/src/ExpenseApp.jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction ExpenseApp() {\n  const [items, setItems] = useState([]);\n  const [text, setText] = useState(\"\");\n  const [amount, setAmount] = useState(\"\");\n\n  const API_URL = 'http://localhost:5000/api/expenses';\n\n  useEffect(() => {\n    fetch(API_URL)\n      .then(res => res.json())\n      .then(data => setItems(data));\n  }, []);\n\n  const addExpense = async (e) => {\n    e.preventDefault();\n    if (!text.trim() || !amount) return;\n    const res = await fetch(API_URL, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ description: text, amount: parseFloat(amount) })\n    });\n    const newItem = await res.json();\n    setItems([...items, newItem]);\n    setText(\"\");\n    setAmount(\"\");\n  };\n\n  const balance = items.reduce((acc, i) => acc + i.amount, 0);\n\n  return (\n    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>\n      <h2>Finance Tracker</h2>\n      <h3>Total Balance: ${balance.toFixed(2)}</h3>\n      <form onSubmit={addExpense}>\n        <input value={text} onChange={e => setText(e.target.value)} placeholder=\"Description...\" />\n        <input type=\"number\" value={amount} onChange={e => setAmount(e.target.value)} placeholder=\"Amount...\" />\n        <button type=\"submit\">Submit</button>\n      </form>\n    </div>\n  );\n}\n\nexport default ExpenseApp;",
    "practice": "Add an aggregation request on backend server startup calculating total balance sum stats.",
    "challenge": "Implement custom color themes mapping red layouts for negative balances and green for incomes.",
    "summary": "* Backend Mongoose collections store values.\n* Reducers sum client parameters dynamically.",
    "diagram": "\n  [ React Income Form ] ---> POST request ---> Mongoose Schema ---> MongoDB Atlas ---> balance recompute\n"
  },
  "03-Notes-App": {
    "ext": "jsx",
    "quick": "# MERN Notes App Project\n\n## In One Line\nBuild a markdown notes compiler application mapping text inputs to MongoDB collections via Express APIs.\n\n## Think Like This\nA cloud diary. You write notes locally, they are formatted in markdown visual windows, and saved permanently in cloud archives.\n\n## Example\n```javascript\nconst res = await fetch('/api/notes', { method: 'POST' });\n```\n\n## Result\nBuilds full-stack note grids.\n\n## Remember\nUsing search filtering on database queries reduces network bandwidth by only fetching target match results.\n",
    "source": "// client/src/NotesApp.jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction NotesApp() {\n  const [notes, setNotes] = useState([]);\n  const [title, setTitle] = useState(\"\");\n  const [content, setContent] = useState(\"\");\n\n  const API_URL = 'http://localhost:5000/api/notes';\n\n  useEffect(() => {\n    fetch(API_URL)\n      .then(res => res.json())\n      .then(data => setNotes(data));\n  }, []);\n\n  const saveNote = async (e) => {\n    e.preventDefault();\n    if (!title.trim()) return;\n    const res = await fetch(API_URL, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ title, content })\n    });\n    const newNote = await res.json();\n    setNotes([...notes, newNote]);\n    setTitle(\"\");\n    setContent(\"\");\n  };\n\n  return (\n    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>\n      <h2>MERN Notes Workspace</h2>\n      <form onSubmit={saveNote}>\n        <input value={title} onChange={e => setTitle(e.target.value)} placeholder=\"Note Title...\" />\n        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder=\"Note content...\" />\n        <button type=\"submit\">Save note</button>\n      </form>\n    </div>\n  );\n}\n\nexport default NotesApp;",
    "practice": "Add a database query search input on the heading that queries the database using query search terms.",
    "challenge": "Integrate a simple third-party Markdown renderer showing note content parsed into rich HTML format.",
    "summary": "* Text areas save content strings to BSON documents.\n* Database lookups populate client boards on mount.",
    "diagram": "\n  [ Note input ] ---> save API ---> Mongoose Model ---> Mongo cluster write\n"
  },
  "04-Mini-Ecommerce": {
    "ext": "jsx",
    "quick": "# MERN Mini-Ecommerce Project\n\n## In One Line\nScaffold an educational product catalogue page supporting search filters, category maps, cart quantity changes, and price totals without payment gateways.\n\n## Think Like This\nA local grocery catalog display: you browse items, sort them by category tags, add items to a shopping cart, adjust quantities, and calculate totals.\n\n## Example\n```javascript\nconst total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);\n```\n\n## Result\nRenders an educational cart catalog.\n\n## Remember\nFocus purely on MERN state synchronization, CRUD structures, and query parameters. Avoid payment gateways.\n",
    "source": "// client/src/EcomApp.jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction EcomApp() {\n  const [products, setProducts] = useState([]);\n  const [cart, setCart] = useState([]);\n  const [search, setSearch] = useState(\"\");\n  const [category, setCategory] = useState(\"all\");\n\n  useEffect(() => {\n    // Simulating fetching products from MERN server\n    setProducts([\n      { _id: \"1\", name: \"Notebook\", price: 5, category: \"Stationery\" },\n      { _id: \"2\", name: \"Backpack\", price: 35, category: \"Accessories\" },\n      { _id: \"3\", name: \"Gel Pen\", price: 2, category: \"Stationery\" }\n    ]);\n  }, []);\n\n  const addToCart = (product) => {\n    const existing = cart.find(item => item._id === product._id);\n    if (existing) {\n      setCart(cart.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item));\n    } else {\n      setCart([...cart, { ...product, quantity: 1 }]);\n    }\n  };\n\n  const updateQty = (id, amount) => {\n    setCart(cart.map(item => {\n      if (item._id === id) {\n        const newQty = item.quantity + amount;\n        return newQty > 0 ? { ...item, quantity: newQty } : item;\n      }\n      return item;\n    }));\n  };\n\n  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);\n\n  const filteredProducts = products.filter(p => {\n    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());\n    const matchesCat = category === \"all\" || p.category === category;\n    return matchesSearch && matchesCat;\n  });\n\n  return (\n    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', display: 'flex', gap: '20px' }}>\n      {/* Product Display */}\n      <div style={{ flex: 2 }}>\n        <h2>Product Catalog</h2>\n        <input value={search} onChange={e => setSearch(e.target.value)} placeholder=\"Search...\" />\n        <select value={category} onChange={e => setCategory(e.target.value)}>\n          <option value=\"all\">All Categories</option>\n          <option value=\"Stationery\">Stationery</option>\n          <option value=\"Accessories\">Accessories</option>\n        </select>\n        <div style={{ marginTop: '20px' }}>\n          {filteredProducts.map(p => (\n            <div key={p._id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>\n              <h4>{p.name} - ${p.price}</h4>\n              <button onClick={() => addToCart(p)}>Add to Cart</button>\n            </div>\n          ))}\n        </div>\n      </div>\n\n      {/* Cart Summary */}\n      <div style={{ flex: 1, borderLeft: '1px solid #eee', paddingLeft: '20px' }}>\n        <h3>Shopping Cart</h3>\n        {cart.map(item => (\n          <div key={item._id} style={{ marginBottom: '10px' }}>\n            <h5>{item.name}</h5>\n            <p>${item.price} x {item.quantity}</p>\n            <button onClick={() => updateQty(item._id, 1)}>+</button>\n            <button onClick={() => updateQty(item._id, -1)}>-</button>\n          </div>\n        ))}\n        <h4>Total Sum: ${cartTotal}</h4>\n      </div>\n    </div>\n  );\n}\n\nexport default EcomApp;",
    "practice": "Add a button 'Remove from Cart' that completely deletes the target item from the cart state array.",
    "challenge": "Implement a database schema on the backend for products, supporting product additions and query listings.",
    "summary": "* Sizing filters sort catalogues.\n* Shopping carts manage quantities using state mapping.",
    "diagram": "\n  [ Product Cards Grid ] -- Add to Cart --> [ Cart State (Quantity Updates) ] -> [ Calculate Order Total ]\n"
  }
};
const CAPSTONE_PROJECTS = {
  "01-Portfolio-Website": {
    "quick": "# Capstone Project 1: Portfolio Website\n\n## Architecture Overview\nA React & Tailwind CSS static frontend page integrated with an Express & MongoDB backend API to capture visitor contact emails securely.\n\n## Folder Structure\n```text\nportfolio-website/\n├── client/\n│   ├── src/\n│   │   ├── components/  # Navbar, Bio, SkillBar, ContactForm\n│   │   └── App.jsx\n│   └── package.json\n└── server/\n    ├── models/      # Contact.js (Mongoose Schema)\n    ├── routes/      # api.js (POST /api/contact)\n    └── server.js    # Entry file\n```\n\n## Feature Checklist\n*   ✅ Responsive bio landing page with custom CSS transitions.\n*   ✅ Dynamic skills progress bars using animated Tailwind widths.\n*   ✅ Contact form sending details via HTTP POST to the backend.\n*   ✅ Mongoose schema validating client email formats.\n*   ✅ CORS configuration whitelisting client ports.\n\n## Step-by-Step Build Roadmap\n1.  **Phase 1**: Scaffold directories using `client/` and `server/` folders.\n2.  **Phase 2**: Build the frontend bio page in React using Tailwind CSS spacing, grids, and border utilities.\n3.  **Phase 3**: Implement the Express contact router saving logs to local MongoDB.\n4.  **Phase 4**: Connect form submissions using fetch APIs.\n5.  **Phase 5**: Deploy the database to Atlas, server to Render, and page to Vercel.\n\n## Suggested Improvements\n*   Add an admin login route to let you view submitted contact forms.\n*   Integrate Nodemailer to forward contact emails directly to your inbox.\n\n## Deployment Guide\n*   **Database**: Set up an Atlas cluster, copy the URI string, and whitelist all IPs (`0.0.0.0/0`).\n*   **Backend**: Deploy the server directory to Render, adding the MONGODB_URI environment variable.\n*   **Frontend**: Deploy the client directory to Vercel, referencing the live Render API endpoint.\n",
    "source": "// server/models/Contact.js\nconst mongoose = require('mongoose');\n\nconst contactSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true },\n  message: { type: String, required: true },\n  date: { type: Date, default: Date.now }\n});\n\nmodule.exports = mongoose.model('Contact', contactSchema);",
    "practice": "Add a new field 'subject' to the Contact mongoose schema.",
    "challenge": "Implement client-side form validations ensuring messages are at least 10 characters long.",
    "summary": "* Portfolio pages act as live resume links.\n* Contact forms write to persistent database schemas.",
    "diagram": "\n  [ React Front UI ] === POST /api/contact ===> [ Express Server ] === save() ===> [ Atlas MongoDB ]\n"
  },
  "02-Blog-System": {
    "quick": "# Capstone Project 2: Blog System\n\n## Architecture Overview\nA MERN stack blog supporting posts creation, category sorting, and comment logs.\n\n## Folder Structure\n```text\nblog-system/\n├── client/\n│   ├── src/\n│   │   ├── pages/       # Home, BlogPost, CreatePost\n│   │   └── App.jsx\n│   └── package.json\n└── server/\n    ├── models/      # Post.js (title, body, comments array)\n    ├── routes/      # postRoutes.js\n    └── server.js    # Entry file\n```\n\n## Feature Checklist\n*   ✅ Main feed listing all posts with short body previews.\n*   ✅ Dynamic blog post view displaying full text and comments.\n*   ✅ Create Post form saving custom markdown content.\n*   ✅ Comments array nested directly inside the Post document model.\n*   ✅ Tag categories sorting.\n\n## Step-by-Step Build Roadmap\n1.  **Phase 1**: Define the Mongoose Post schema with title, body, tags, and comments.\n2.  **Phase 2**: Build Express routes for GET /api/posts, GET /api/posts/:id, and POST /api/posts.\n3.  **Phase 3**: Build the React homepage fetching and displaying the posts grid.\n4.  **Phase 4**: Implement the detailed blog post page showing the nested comments list.\n5.  **Phase 5**: Connect comments submission triggers to the backend router.\n\n## Suggested Improvements\n*   Add a rich text editor inside the Create Post form.\n*   Implement simple search filters on the homepage grid.\n\n## Deployment Guide\n*   Deploy backend to Render. Link env configurations to MongoDB Atlas.\n*   Deploy React client to Vercel, pointing API queries to the live Render domain URL.\n",
    "source": "// server/models/Post.js\nconst mongoose = require('mongoose');\n\nconst postSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  body: { type: String, required: true },\n  tags: [String],\n  comments: [{\n    author: String,\n    text: String,\n    date: { type: Date, default: Date.now }\n  }],\n  date: { type: Date, default: Date.now }\n});\n\nmodule.exports = mongoose.model('Post', postSchema);",
    "practice": "Add tag arrays to the post schema mapping category filters.",
    "challenge": "Build an Express update route ($push) that appends new comment objects directly to the target post document.",
    "summary": "* Blogs map nested comments collections.\n* Dynamic routers fetch individual post IDs.",
    "diagram": "\n  [ Post Detail UI ] -- Add Comment --> [ Express PUT /api/posts/:id/comment ] -> [ $push MongoDB ]\n"
  },
  "03-Task-Manager": {
    "quick": "# Capstone Project 3: Collaborative Task Manager\n\n## Architecture Overview\nA MERN stack collaborative task tracker supporting priorities, assignments, and status toggles.\n\n## Folder Structure\n```text\ntask-manager/\n├── client/\n│   ├── src/\n│   │   ├── components/  # TaskCard, ColumnContainer, TaskForm\n│   │   └── App.jsx\n│   └── package.json\n└── server/\n    ├── models/      # Task.js (title, assignee, status, priority)\n    ├── routes/      # taskRoutes.js\n    └── server.js    # Entry file\n```\n\n## Feature Checklist\n*   ✅ Dynamic board grouping tasks into columns (Todo, In Progress, Done).\n*   ✅ Task creation form setting priorities (Low, Medium, High).\n*   ✅ Status toggle updating task state parameters on the backend.\n*   ✅ Assignee profile tags mapping team members.\n*   ✅ Delete button removing cards permanently from MongoDB.\n\n## Step-by-Step Build Roadmap\n1.  **Phase 1**: Build the Mongoose Task model with title, description, status, priority, and assignee.\n2.  **Phase 2**: Build Express CRUD endpoints for /api/tasks.\n3.  **Phase 3**: Build the React interface displaying tasks in separate priority/status columns.\n4.  **Phase 4**: Connect CRUD actions (create, status toggle, delete) using fetch API calls.\n5.  **Phase 5**: Validate CORS headers and test production deployment steps.\n\n## Suggested Improvements\n*   Add a search bar to filter tasks by title or assignee.\n*   Implement drag-and-drop animations for task column transitions.\n\n## Deployment Guide\n*   Store connection keys in .env. Setup production variables on Vercel/Render.\n*   Deploy database to Atlas cloud cluster.\n",
    "source": "// server/models/Task.js\nconst mongoose = require('mongoose');\n\nconst taskSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  assignee: { type: String, default: \"Unassigned\" },\n  status: { type: String, enum: ['Todo', 'Progress', 'Done'], default: 'Todo' },\n  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' }\n});\n\nmodule.exports = mongoose.model('Task', taskSchema);",
    "practice": "Add an assignee search input inside the React task board header.",
    "challenge": "Implement custom category tags styling priority fields inside task card layouts.",
    "summary": "* Boards manage layout pipelines using column categorizations.\n* CRUD routes update status enums inside document logs.",
    "diagram": "\n  [ Task Form ] ---> POST /api/tasks ---> Mongoose Model ---> Atlas database save\n"
  },
  "04-Expense-Tracker": {
    "quick": "# Capstone Project 4: Expense Tracker\n\n## Architecture Overview\nA MERN stack finance manager featuring expense logs, category totals, and aggregate balance calculations.\n\n## Folder Structure\n```text\nexpense-tracker/\n├── client/\n│   ├── src/\n│   │   ├── components/  # StatSummary, TransactionHistory, TransactionForm\n│   │   └── App.jsx\n│   └── package.json\n└── server/\n    ├── models/      # Transaction.js (desc, amount, category)\n    ├── routes/      # transRoutes.js\n    └── server.js    # Entry file\n```\n\n## Feature Checklist\n*   ✅ Real-time balance calculations summing incomes and expenses.\n*   ✅ Category filter sorting transactions lists.\n*   ✅ Transaction form validating numeric entries.\n*   ✅ Aggregation backend endpoints calculating category totals.\n*   ✅ Delete transaction button updating balances instantly.\n\n## Step-by-Step Build Roadmap\n1.  **Phase 1**: Configure the Transaction mongoose schema with amount, category, and date.\n2.  **Phase 2**: Build Express endpoints for /api/transactions.\n3.  **Phase 3**: Build the React homepage displaying total balance, income, and expense stats.\n4.  **Phase 4**: Connect form submissions to update backend transaction records.\n5.  **Phase 5**: Implement the delete transaction route updating client balance states.\n\n## Suggested Improvements\n*   Add visual pie charts showing expense allocations by category.\n*   Implement date range selectors to view transaction logs for specific months.\n\n## Deployment Guide\n*   Deploy Node app to Render. Configure Atlas connection strings.\n*   Deploy React app to Vercel, whitelisting Vercel domain URLs in Express CORS settings.\n",
    "source": "// server/models/Transaction.js\nconst mongoose = require('mongoose');\n\nconst transactionSchema = new mongoose.Schema({\n  description: { type: String, required: true },\n  amount: { type: Number, required: true }, // positive: income, negative: cost\n  category: { type: String, enum: ['Food', 'Bills', 'Salary', 'Entertainment'], required: true },\n  date: { type: Date, default: Date.now }\n});\n\nmodule.exports = mongoose.model('Transaction', transactionSchema);",
    "practice": "Add a new enum category 'Travel' to the transaction schema.",
    "challenge": "Implement custom color formatting displaying negative transactions in red and positive in green.",
    "summary": "* Budgets are calculated using reducers summing local arrays.\n* Persistent databases prevent data resets on server reloads.",
    "diagram": "\n  [ Form ] -> [ Express API ] -> [ Mongo DB Atlas ] -> [ Recalculate Balance ]\n"
  },
  "05-Ecommerce-Store": {
    "quick": "# Capstone Project 5: Mini-Ecommerce Store\n\n## Architecture Overview\nA MERN stack educational catalogue page supporting search filters, category maps, cart quantity changes, and price totals without live checkout systems.\n\n## Folder Structure\n```text\necommerce-store/\n├── client/\n│   ├── src/\n│   │   ├── components/  # ProductGrid, CartPanel, SearchFilter\n│   │   └── App.jsx\n│   └── package.json\n└── server/\n    ├── models/      # Product.js (name, price, image, category)\n    ├── routes/      # productRoutes.js\n    └── server.js    # Entry file\n```\n\n## Feature Checklist\n*   ✅ Responsive product catalog grid showing titles and prices.\n*   ✅ Search and category tags filter sorting items.\n*   ✅ Interactive cart panel managing item additions and quantities.\n*   ✅ Quantity adjustment buttons (+/-) recomputing cart parameters.\n*   ✅ Full price summary displaying total checkout prices.\n\n## Step-by-Step Build Roadmap\n1.  **Phase 1**: Define the Mongoose Product schema with name, price, description, and category.\n2.  **Phase 2**: Build Express endpoints for /api/products.\n3.  **Phase 3**: Scaffold the React page layout showing product grids and cart lists.\n4.  **Phase 4**: Connect product search inputs and category dropdown filters.\n5.  **Phase 5**: Implement shopping cart quantity logic and calculate total prices.\n\n## Suggested Improvements\n*   Add a local storage backup for the shopping cart state.\n*   Build a product details modal displaying description profiles.\n\n## Deployment Guide\n*   Deploy backend to Render. Configure Atlas connection details.\n*   Deploy React client to Vercel, configuring API route URLs.\n",
    "source": "// server/models/Product.js\nconst mongoose = require('mongoose');\n\nconst productSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  price: { type: Number, required: true },\n  description: { type: String },\n  category: { type: String, required: true },\n  image: { type: String, default: \"https://picsum.photos/200\" }\n});\n\nmodule.exports = mongoose.model('Product', productSchema);",
    "practice": "Add a database query search parameter on the products GET router.",
    "challenge": "Implement custom categorizations tags styling product grid item layouts.",
    "summary": "* Categories filters sort catalogs grids.\n* Interactive shopping carts calculate totals.",
    "diagram": "\n  [ Product Grid ] -- Add to Cart --> [ Cart State ] -> [ Recompute Order Total ]\n"
  }
};


const INTERVIEW_PREP_DATA = {
  "01-HTML-Interview-Questions": {
    "title": "HTML Interview Questions",
    "line": "Common junior developer interview questions focusing on semantic tags, SEO, and document structure.",
    "think": "Flashcards for HTML interview prep: quick definitions and direct, simple answers.",
    "example": "What is semantic HTML? -> Tags that describe their meaning (e.g. <article>) instead of style.",
    "result": "Prepares you for entry-level frontend technical interviews.",
    "remember": "Never say 'HTML is a programming language'—it is a markup language.",
    "summary": "* Semantic HTML improves SEO and accessibility.\n* DOCTYPE declares the document standard.\n* Alt tags are required for accessibility.",
    "diagram": "HTML Q&A -> Semantic Tags -> SEO basics -> Alt Attributes",
    "practice": "Explain the difference between <div> and <section> tags.",
    "challenge": "Explain why using multiple <h1> tags on a single page is considered bad practice.",
    "example_code": "{\n  \"HTML Q&A\": [\n    {\n      \"q\": \"What is semantic HTML?\",\n      \"a\": \"Tags that describe their meaning (e.g. <header>, <footer>) instead of their look. It helps search engines (SEO) and accessibility (screen readers).\"\n    },\n    {\n      \"q\": \"What is the alt attribute used for?\",\n      \"a\": \"It provides a text description for images, which is read by screen readers and displayed if the image fails to load.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "02-CSS-Interview-Questions": {
    "title": "CSS Interview Questions",
    "line": "Common junior interview questions focusing on Box Model, Flexbox, Grid, and specificity.",
    "think": "Flashcards for CSS layouts, specificity values, and positioning rules.",
    "example": "Explain the box model -> Margin, Border, Padding, Content.",
    "result": "Prepares you for technical layout and styling questions.",
    "remember": "ID selectors have higher specificity than class selectors.",
    "summary": "* Box Model = Content + Padding + Border + Margin.\n* Flexbox is 1-dimensional; Grid is 2-dimensional.\n* Specificity rules define which styles override others.",
    "diagram": "CSS Q&A -> Box Model -> Flexbox vs Grid -> Specificity Scores",
    "practice": "Explain the difference between block and inline display types.",
    "challenge": "Calculate the specificity score of a selector like 'body #container .item a'.",
    "example_code": "{\n  \"CSS Q&A\": [\n    {\n      \"q\": \"What is the CSS Box Model?\",\n      \"a\": \"Every element is represented as a rectangular box consisting of Content, Padding, Border, and Margin from the inside out.\"\n    },\n    {\n      \"q\": \"Explain the difference between Flexbox and Grid.\",\n      \"a\": \"Flexbox is designed for 1-dimensional layouts (rows OR columns), while Grid is designed for 2-dimensional layouts (rows AND columns).\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "03-JavaScript-Interview-Questions": {
    "title": "JavaScript Interview Questions",
    "line": "Common junior developer interview questions focusing on closures, event loops, promises, and scopes.",
    "think": "Flashcards for core JavaScript behaviors, closures, scopes, and async flows.",
    "example": "What is a closure? -> A function that remembers its outer variables even after the outer function has executed.",
    "result": "Prepares you for core JavaScript scripting questions.",
    "remember": "var is function-scoped; let and const are block-scoped.",
    "summary": "* Closures preserve scopes chain.\n* Event loop handles async executions.\n* Promises resolve async operations states.",
    "diagram": "JS Q&A -> Scopes -> Closures -> Event Loop -> Promises",
    "practice": "Explain the difference between double equals (==) and triple equals (===).",
    "challenge": "Explain how closures can be used to create private variables in JavaScript.",
    "example_code": "{\n  \"JS Q&A\": [\n    {\n      \"q\": \"What is a closure in JavaScript?\",\n      \"a\": \"A function that has access to its outer function scope even after the outer function has returned.\"\n    },\n    {\n      \"q\": \"What is the event loop?\",\n      \"a\": \"A mechanism that allows Node/browsers to execute non-blocking async operations by offloading tasks to the OS and running callbacks when ready.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "04-React-Interview-Questions": {
    "title": "React Interview Questions",
    "line": "Common junior interview questions focusing on Virtual DOM, Hooks, state vs props, and performance.",
    "think": "Flashcards for React rendering rules, state variables, props, and hooks.",
    "example": "What is Virtual DOM? -> A lightweight copy of the real DOM kept in memory, synced via diffing.",
    "result": "Prepares you for React framework interview checks.",
    "remember": "Props are read-only; State is managed within the component and can change.",
    "summary": "* Virtual DOM speeds up UI renders.\n* Hooks manage states and side effects in functional components.\n* Lifting state up shares variables between siblings.",
    "diagram": "React Q&A -> Virtual DOM -> State vs Props -> Hook Lifecycles",
    "practice": "Explain the purpose of key attributes in React lists rendering.",
    "challenge": "Explain how React schedules and batches state updates during events.",
    "example_code": "{\n  \"React Q&A\": [\n    {\n      \"q\": \"What is the Virtual DOM?\",\n      \"a\": \"A memory representation of the UI. React compares it with the real DOM and updates only the changed elements, improving performance.\"\n    },\n    {\n      \"q\": \"What is the difference between state and props?\",\n      \"a\": \"State is internal data managed by the component itself; props are external parameters passed into the component by its parent.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "05-NodeJS-Interview-Questions": {
    "title": "NodeJS Interview Questions",
    "line": "Common junior interview questions focusing on event loops, modules, file systems, and packaging.",
    "think": "Flashcards for Node.js runtimes, Event Emitter classes, and non-blocking APIs.",
    "example": "Why is Node.js single-threaded? -> It handles concurrency using async event loops rather than multiple threads.",
    "result": "Prepares you for server runtime questions.",
    "remember": "Always use path.join instead of string concatenation to join folder paths.",
    "summary": "* Single-threaded asynchronous runtime.\n* Event-driven non-blocking I/O.\n* CommonJS modules vs ES Modules formats.",
    "diagram": "Node Q&A -> Single Thread -> Event Loop -> Modules systems",
    "practice": "Explain the difference between require() and import statements.",
    "challenge": "Explain how blocking CPU-intensive calculations affect Node's single thread.",
    "example_code": "{\n  \"Node Q&A\": [\n    {\n      \"q\": \"Why is Node.js called non-blocking?\",\n      \"a\": \"Because I/O tasks are run asynchronously in the background, allowing Node to continue executing other code without waiting for files or databases to finish.\"\n    },\n    {\n      \"q\": \"What is npm?\",\n      \"a\": \"Node Package Manager, the default package repository for installing third-party JavaScript libraries.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "06-ExpressJS-Interview-Questions": {
    "title": "ExpressJS Interview Questions",
    "line": "Common junior interview questions focusing on routes, middleware structures, parameters, and controllers.",
    "think": "Flashcards for Express middleware filters, route endpoints, and CORS config.",
    "example": "What is middleware? -> A function that runs between the request entry and the final route response handler.",
    "result": "Prepares you for backend API developer questions.",
    "remember": "Middleware order matters! express.json() must run before routes that parse body fields.",
    "summary": "* Middleware parses body, handles auth, and catches errors.\n* Route parameters map resource IDs; query params map filter logs.\n* CORS controls api access from external origins.",
    "diagram": "Express Q&A -> Middleware -> Routing chains -> Request/Response params",
    "practice": "Explain the difference between req.params and req.query.",
    "challenge": "Explain how express handles uncaught exceptions inside routes using global error middlewares.",
    "example_code": "{\n  \"Express Q&A\": [\n    {\n      \"q\": \"What is middleware in Express?\",\n      \"a\": \"A function that has access to the request object, response object, and the next middleware in the cycle to perform tasks like parsing, validation, or auth.\"\n    },\n    {\n      \"q\": \"What is CORS?\",\n      \"a\": \"Cross-Origin Resource Sharing, a security mechanism that allows or blocks browser fetch requests from other domain origins.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "07-MongoDB-Interview-Questions": {
    "title": "MongoDB Interview Questions",
    "line": "Common junior interview questions focusing on SQL vs NoSQL, collections, documents, and mongoose schemas.",
    "think": "Flashcards for NoSQL document models, indexes speed, and aggregations pipelines.",
    "example": "SQL vs NoSQL? -> SQL uses fixed tables/rows; NoSQL stores flexible JSON-like documents.",
    "result": "Prepares you for database technical interview loops.",
    "remember": "Indexes speed up database read operations but slow down write operations.",
    "summary": "* Document model matches JS object variables.\n* Mongoose validates schemas before database writes.\n* Embedded documents are fast; referenced IDs avoid duplication.",
    "diagram": "Mongo Q&A -> Documents vs Tables -> Schema validation -> Indexes scans",
    "practice": "Explain when to use embedded documents vs referenced document IDs.",
    "challenge": "Explain the difference between a Collection Scan (COLLSCAN) and Index Scan (IXSCAN).",
    "example_code": "{\n  \"Mongo Q&A\": [\n    {\n      \"q\": \"What are the advantages of NoSQL over SQL?\",\n      \"a\": \"Dynamic, flexible schema models, faster reads of nested structures, and easier horizontal scaling compared to relational tables.\"\n    },\n    {\n      \"q\": \"What is Mongoose?\",\n      \"a\": \"An ODM (Object Data Modeling) library for MongoDB and Node.js that adds schema structures and validations on top of NoSQL.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "08-MERN-Interview-Questions": {
    "title": "MERN Interview Questions",
    "line": "Common junior interview questions focusing on full-stack integration, auth flows, state sync, and deployment.",
    "think": "Flashcards for full-stack request lifecycles, JWT cookie stores, and production checklist parameters.",
    "example": "How do React and Express talk? -> React sends fetch HTTP calls; Express responds with JSON packages.",
    "result": "Prepares you for complete full-stack web developer checks.",
    "remember": "Never store credentials in client-side code repositories.",
    "summary": "* Front and back communicate via JSON REST APIs.\n* JWT tokens verify client permissions on protected routes.\n* Environment parameters separate dev configurations from production hosts.",
    "diagram": "MERN Q&A -> API calls -> JWT security -> Production setups",
    "practice": "Explain how user logins are kept secure across MERN applications.",
    "challenge": "Explain how to resolve CORS errors when running a React client and Express server on different port hosts.",
    "example_code": "{\n  \"MERN Q&A\": [\n    {\n      \"q\": \"How does the MERN stack communicate?\",\n      \"a\": \"React frontend sends fetch requests with HTTP headers to the Express API server, which queries MongoDB via Mongoose and returns JSON arrays.\"\n    },\n    {\n      \"q\": \"How do you protect routes in MERN?\",\n      \"a\": \"Use a JWT token stored in an HTTP-Only Cookie. Express route middleware verifies the token signature, and React Router redirects unauthenticated views.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "09-HR-Questions": {
    "title": "HR Interview Questions",
    "line": "Common behavioral and HR questions for junior developers (using simple, structured answers).",
    "think": "Preparing responses using the STAR method (Situation, Task, Action, Result) for behavioral checkouts.",
    "example": "Tell me about a time you struggled with code. -> Explain the problem, how you researched/debugged, and what you learned.",
    "result": "Prepares you to communicate confidently with HR managers.",
    "remember": "Focus on learning capacity, teamwork, and problem-solving mindset, never badmouth former teammates.",
    "summary": "* STAR method: Situation, Task, Action, Result.\n* Behavioral questions check compatibility, conflict resolution, and growth mindsets.",
    "diagram": "HR Q&A -> Tell me about yourself -> Debugging challenges -> Collaboration resolution",
    "practice": "Draft a 1-minute pitch answering 'Tell me about yourself'.",
    "challenge": "Answer the question 'What is your greatest weakness?' focusing on how you are actively overcoming it.",
    "example_code": "{\n  \"HR Q&A\": [\n    {\n      \"q\": \"Tell me about yourself.\",\n      \"a\": \"A passionate junior full-stack developer specializing in MERN. Built several portfolio projects, love debugging complex problems, and eager to learn production scales.\"\n    },\n    {\n      \"q\": \"How do you handle debugging blocks?\",\n      \"a\": \"Break the code down, check server logs, read docs, and search threads. If blocked for over an hour, I formulate a clear question to ask teammates.\"\n    }\n  ]\n}",
    "ext": "json"
  },
  "10-Mock-Interview": {
    "title": "Mock Interview Guide",
    "line": "Step-by-step mock interview script and checklists for junior developers to practice technical communication.",
    "think": "Simulating a real technical interview loop: coding aloud, explaining logic, and asking clarifying questions.",
    "example": "Talking through a coding task: State inputs -> Outline logic -> Write code -> Test scenarios.",
    "result": "Reduces interview anxiety through systematic preparation.",
    "remember": "Never code in silence during a live technical interview! Always speak your thoughts aloud.",
    "summary": "* Talk through your algorithm before coding.\n* Ask clarifying questions before starting.\n* Test your code with edge cases.",
    "diagram": "Mock Loop -> Ask clarification -> Outline structure -> Code aloud -> Test cases",
    "practice": "Practice answering a coding challenge while recording yourself explaining your logic.",
    "challenge": "Explain how to handle a situation where an interviewer asks you a question you do not know the answer to.",
    "example_code": "{\n  \"Mock Checklist\": [\n    \"1. Read the coding prompt completely.\",\n    \"2. Ask clarifying questions (e.g. range of inputs, edge cases).\",\n    \"3. Explain your planned approach *before* writing code.\",\n    \"4. Code aloud, explaining the 'why' behind variables and loops.\",\n    \"5. Review code for bugs, dry run with test variables, and optimize.\"\n  ]\n}",
    "ext": "json"
  }
};
const CHEATSHEETS_DATA = {
  "01-HTML-CheatSheet": {
    "title": "HTML CheatSheet",
    "line": "Print-friendly, compact reference for core HTML tags, structures, and semantic layouts.",
    "think": "Look once, remember forever: core HTML markup tags and attributes.",
    "example": "<a> -> Anchor Link. Syntax: <a href='url'>Text</a>",
    "result": "Instant recall of semantic tags and basic web page markup layouts.",
    "remember": "HTML defines document structure; do not use it to style borders or colors.",
    "summary": "* Structures: html, head, body, header, footer.\n* Text: h1-h6, p, strong, em, br, hr.\n* Media: img, video, audio, iframe.\n* Data: table, tr, td, th, ul, ol, li.",
    "diagram": "HTML Reference -> Text tags -> Link anchors -> Form elements -> Semantic wrappers",
    "practice": "Build a single-screen page layout reference card using HTML structural tags.",
    "challenge": "Create a list mapping all input types available in HTML5.",
    "example_code": "{\n  \"HTML Cheatsheet\": {\n    \"Document Skeleton\": \"<!DOCTYPE html>\\n<html>\\n  <head>\\n    <title>Title</title>\\n  </head>\\n  <body>\\n    <!-- visible content -->\\n  </body>\\n</html>\",\n    \"Text Tags\": {\n      \"Heading\": \"<h1>Title</h1> (h1 to h6)\",\n      \"Paragraph\": \"<p>Text content</p>\",\n      \"Bold\": \"<strong>Bold text</strong>\",\n      \"Italic\": \"<em>Italic text</em>\",\n      \"Line Break\": \"<br>\"\n    },\n    \"Links & Images\": {\n      \"Anchor Link\": \"<a href=\\\"https://google.com\\\">Google</a>\",\n      \"Image\": \"<img src=\\\"logo.png\\\" alt=\\\"Logo\\\">\"\n    }\n  }\n}",
    "ext": "json"
  },
  "02-CSS-CheatSheet": {
    "title": "CSS CheatSheet",
    "line": "Print-friendly reference for CSS selectors, Box Model parameters, Flexbox/Grid syntax, and animations.",
    "think": "Look once, remember forever: box model properties, flex containers, and selectors hierarchy.",
    "example": "Flexbox setup: display: flex; justify-content: center; align-items: center;",
    "result": "Instant layout design reference.",
    "remember": "Margin collapses vertically but padding does not.",
    "summary": "* Box Model: width, height, margin, padding, border, box-sizing.\n* Flexbox: flex-direction, justify-content, align-items, gap.\n* Grid: grid-template-columns, grid-template-rows, grid-gap, grid-column.\n* Positioning: static, relative, absolute, fixed, sticky.",
    "diagram": "CSS Reference -> selectors -> Box model properties -> Flex properties -> Grid layouts",
    "practice": "Build a single-column layout cheatsheet outlining sizing units (px, rem, em, %).",
    "challenge": "Create a code block layout cheat sheet for centering elements using Flexbox vs grid.",
    "example_code": "{\n  \"CSS Cheatsheet\": {\n    \"Selectors\": {\n      \"Element\": \"h1 { color: red; }\",\n      \"Class\": \".btn { background: blue; }\",\n      \"ID\": \"#main { padding: 10px; }\"\n    },\n    \"Flexbox Container\": {\n      \"Syntax\": \".flex-container {\\n  display: flex;\\n  justify-content: center; /* horizontal align */\\n  align-items: center; /* vertical align */\\n  flex-direction: row; /* row or column */\\n}\"\n    },\n    \"Grid Layout\": {\n      \"Syntax\": \".grid-container {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 15px;\\n}\"\n    }\n  }\n}",
    "ext": "json"
  },
  "03-JavaScript-CheatSheet": {
    "title": "JavaScript CheatSheet",
    "line": "Print-friendly, compact reference for variables, loop syntaxes, array methods, and async/await.",
    "think": "Refinement 1 compliant: Variable keywords, loops, functional expressions, and DOM selectors. Look once, remember forever.",
    "example": "const double = x => x * 2; // Arrow Function",
    "result": "Instant script syntax memory booster.",
    "remember": "Variables defined with const cannot be reassigned (but their object values can be modified).",
    "summary": "* Variables: let, const.\n* Data Types: String, Number, Boolean, Array, Object.\n* Array Operations: map, filter, reduce, find, forEach.\n* DOM: querySelector, addEventListener.",
    "diagram": "JS Reference -> Variables -> Arrays operations -> DOM events -> Async Promises",
    "practice": "Draft a reference card detailing commonly used array loops (map, filter).",
    "challenge": "Write a concise code block showcasing how to fetch APIs using promises vs async/await.",
    "example_code": "{\n  \"JS Cheatsheet\": {\n    \"Variables\": \"let dynamic = 10; const immutable = 20;\",\n    \"Loops\": \"for (let i = 0; i < 5; i++) { console.log(i); }\",\n    \"Arrow Function\": \"const greet = (name) => 'Hello ' + name;\",\n    \"Array Helper Methods\": {\n      \"map\": \"arr.map(x => x * 2)\",\n      \"filter\": \"arr.filter(x => x > 10)\",\n      \"reduce\": \"arr.reduce((acc, x) => acc + x, 0)\"\n    },\n    \"Async/Await Fetch\": \"async function getData() {\\n  const res = await fetch('url');\\n  const data = await res.json();\\n}\"\n  }\n}",
    "ext": "json"
  },
  "04-Git-CheatSheet": {
    "title": "Git CheatSheet",
    "line": "Print-friendly, compact reference for local repository init, commits, status checks, and logs.",
    "think": "Look once, remember forever: core git workflow commands.",
    "example": "git status -> checks current file changes list.",
    "result": "Enables fast console version control checks.",
    "remember": "Always review modified files using git status before committing your codes.",
    "summary": "* Initialize: git init.\n* Add files: git add .\n* Save records: git commit -m 'message'.\n* Log history: git log --oneline.",
    "diagram": "Git Reference -> Init -> Add staging -> Commit logs -> status check",
    "practice": "Create a checklist of commands needed to initialize and push a new local repository.",
    "challenge": "List Git commands used to resolve merge conflicts and abort ongoing merges.",
    "example_code": "# Git Command Cheat Sheet\n# Initialize a local repository\ngit init\n\n# Check staging status\ngit status\n\n# Stage all files\ngit add .\n\n# Save local changes commit record\ngit commit -m \"Initial commit message\"\n\n# Check history log\ngit log --oneline",
    "ext": "sh"
  },
  "05-GitHub-CheatSheet": {
    "title": "GitHub CheatSheet",
    "line": "Print-friendly, compact reference for remote repository tracking, cloning, pulling, and push commands.",
    "think": "Look once, remember forever: remote origin bindings, pull requests, and forks logs.",
    "example": "git remote add origin <url> -> connects local folder to cloud repository.",
    "result": "Speeds up remote repository synchronizations.",
    "remember": "Run git pull before pushing code to avoid merge conflicts with team updates.",
    "summary": "* Clone remote: git clone <url>.\n* Add remote: git remote add origin <url>.\n* Upload files: git push origin main.\n* Sync updates: git pull origin main.",
    "diagram": "GitHub Reference -> Remote Origin -> Clone -> Pull sync -> Push upload",
    "practice": "Create a list of steps to clone a repository, edit files, and push changes back.",
    "challenge": "Write out commands to manage multiple remote URL branches in one workspace.",
    "example_code": "# GitHub Commands Cheat Sheet\n# Clone remote repo\ngit clone https://github.com/username/repo-name.git\n\n# Connect local repo to remote URL\ngit remote add origin https://github.com/username/repo-name.git\n\n# Rename default branch to main\ngit branch -M main\n\n# Upload local commits to GitHub cloud repo\ngit push -u origin main\n\n# Fetch and merge updates from GitHub\ngit pull origin main",
    "ext": "sh"
  },
  "06-Bootstrap-CheatSheet": {
    "title": "Bootstrap CheatSheet",
    "line": "Print-friendly reference for grid layout utilities, container widths, button variants, and component tags.",
    "think": "Look once, remember forever: Bootstrap container layouts, buttons classes, and responsive grids.",
    "example": "Grid setup: class='row' inside class='container', items class='col-md-4'.",
    "result": "Fast reference for building bootstrap responsive UI components.",
    "remember": "Rows must contain cols; columns must be children of rows.",
    "summary": "* Layout: container, container-fluid, row, col-X.\n* Buttons: btn, btn-primary, btn-outline-success.\n* Spacing: m-3, p-2, mt-auto, mx-auto.\n* Cards: card, card-body, card-title.",
    "diagram": "Bootstrap Reference -> Containers -> Grids row/cols -> button colors -> card items",
    "practice": "Create a grid layout reference cheat sheet containing offsets and column spans.",
    "challenge": "Build a mock profile card template using Bootstrap card and spacing classes.",
    "example_code": "{\n  \"Bootstrap CSS\": {\n    \"Grid Columns\": \"<div class=\\\"row\\\">\\n  <div class=\\\"col-md-8\\\">Main</div>\\n  <div class=\\\"col-md-4\\\">Sidebar</div>\\n</div>\",\n    \"Button Styles\": {\n      \"Primary\": \"class=\\\"btn btn-primary\\\"\",\n      \"Outline Success\": \"class=\\\"btn btn-outline-success\\\"\",\n      \"Large Size\": \"class=\\\"btn btn-lg\\\"\"\n    },\n    \"Spacing Utilities\": {\n      \"Margin Top 3\": \"class=\\\"mt-3\\\"\",\n      \"Padding All 2\": \"class=\\\"p-2\\\"\",\n      \"Horizontal Center\": \"class=\\\"mx-auto\\\"\"\n    }\n  }\n}",
    "ext": "json"
  },
  "07-Tailwind-CheatSheet": {
    "title": "Tailwind CSS CheatSheet",
    "line": "Print-friendly, compact utility list for padding/margin, flexbox alignments, text utilities, and grid setups.",
    "think": "Look once, remember forever: Tailwind spacing scales, alignment classes, and responsive prefixes.",
    "example": "Centering with flex: flex justify-center items-center gap-4",
    "result": "Instant tailwind utility lookup card.",
    "remember": "Tailwind spacing classes (like p-4) are scaled (4 units = 1rem = 16px).",
    "summary": "* Spacing: m-{size}, p-{size}, gap-{size}.\n* Flexbox: flex, flex-row, justify-center, items-center.\n* Text: text-sm, text-lg, font-bold, text-blue-500.\n* responsive: md:flex-row, lg:grid-cols-3.",
    "diagram": "Tailwind Reference -> padding/margin scales -> flex aligners -> responsive classes",
    "practice": "Create a cheatsheet mapping Tailwind spacing scales (p-1 to p-8) to pixel values.",
    "challenge": "Build a code template for a responsive cards grid using Tailwind grid-cols-1 md:grid-cols-3.",
    "example_code": "{\n  \"Tailwind Cheatsheet\": {\n    \"Spacing\": {\n      \"Margin\": \"m-4 (1rem), mt-2 (top), mx-auto (horizontal center)\",\n      \"Padding\": \"p-3 (0.75rem), px-4 (horizontal), py-2 (vertical)\"\n    },\n    \"Flexbox\": \"flex justify-between items-center gap-4\",\n    \"Grid System\": \"grid grid-cols-1 md:grid-cols-3 gap-6\",\n    \"Typography\": \"text-lg font-bold text-center text-gray-800\"\n  }\n}",
    "ext": "json"
  },
  "08-React-CheatSheet": {
    "title": "React CheatSheet",
    "line": "Print-friendly reference for component wrappers, hook triggers (useState, useEffect), props, and custom states.",
    "think": "Look once, remember forever: state setters, effect triggers, and JSX rules.",
    "example": "const [state, setState] = useState(initial);",
    "result": "Instant React development query helper.",
    "remember": "Never modify state variables directly! Always use setter callback functions.",
    "summary": "* Component: export default function App() { return <JSX> }.\n* State: const [count, setCount] = useState(0).\n* Effect: useEffect(() => { ... }, [dependencies]).\n* Props: function Button({ text, onClick }).",
    "diagram": "React Reference -> Component function -> useState hook -> useEffect updates -> Props calls",
    "practice": "Write a cheat sheet detailing hook templates (useState, useEffect, useContext).",
    "challenge": "Draft an annotated JSX code block for rendering lists using array map methods with keys.",
    "example_code": "{\n  \"React Hooks\": {\n    \"useState\": \"const [val, setVal] = useState(initialState);\",\n    \"useEffect\": \"useEffect(() => {\\n  // code runs on mount\\n  return () => { // cleanup on unmount };\\n}, [dependencies]);\",\n    \"useContext\": \"const value = useContext(MyContext);\"\n  },\n  \"JSX List Render\": \"<ul>\\n  {items.map(item => <li key={item.id}>{item.name}</li>)}\\n</ul>\"\n}",
    "ext": "json"
  },
  "09-NodeJS-CheatSheet": {
    "title": "NodeJS CheatSheet",
    "line": "Print-friendly, compact reference for path resolutions, file reading/writing, and OS specs checkpoints.",
    "think": "Look once, remember forever: CommonJS imports, async file systems, and paths resolvers.",
    "example": "const fs = require('fs'); fs.readFileSync('path', 'utf8');",
    "result": "Enables fast local server scripting checks.",
    "remember": "Always configure asynchronous handlers (fs.promises) inside try/catch blocks.",
    "summary": "* CommonJS: require() / module.exports.\n* Paths: path.join(__dirname, 'src', 'app.js').\n* Files: fs.readFile(), fs.writeFile(), fs.promises.\n* Streams: createReadStream(), pipe().",
    "diagram": "Node Reference -> require modules -> path joiners -> fs promises files",
    "practice": "Create a cheatsheet mapping CommonJS exports vs ES Module imports side-by-side.",
    "challenge": "Write a clean Node script showcasing how to check local server system RAM specifications.",
    "example_code": "// Node.js Core Modules Cheat Sheet\nconst path = require('path');\nconst fs = require('fs');\n\n// 1. Path Join (OS-safe)\nconst filePath = path.join(__dirname, 'data', 'log.txt');\n\n// 2. Read File (Async Promises)\nfs.promises.readFile(filePath, 'utf-8')\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n\n// 3. Write File (Sync)\nfs.writeFileSync(filePath, 'log entry data');",
    "ext": "js"
  },
  "10-ExpressJS-CheatSheet": {
    "title": "ExpressJS CheatSheet",
    "line": "Print-friendly reference for routing setup, middleware calls, request parameters, and response methods.",
    "think": "Look once, remember forever: endpoint wrappers, middleware functions, and parsing commands.",
    "example": "app.get('/api/:id', (req, res) => res.json({ id: req.params.id }));",
    "result": "Instant Express API backend lookup card.",
    "remember": "Always return res.status() values to prevent unresolved API requests.",
    "summary": "* Init: app.use(express.json()).\n* Routes: app.get(), app.post(), app.put(), app.delete().\n* Request: req.body, req.params.id, req.query.search.\n* Response: res.send(), res.json(), res.status().",
    "diagram": "Express Reference -> app endpoints -> Middleware chains -> req inputs -> res outputs",
    "practice": "Create an Express cheatsheet listing HTTP status codes commonly used in REST APIs (200, 201, 400, 401, 404, 500).",
    "challenge": "Build a route code block with validation middlewares checking body fields.",
    "example_code": "// Express.js Cheat Sheet\nconst express = require('express');\nconst app = express();\napp.use(express.json()); // Body Parser Middleware\n\n// GET Endpoint with parameters\napp.get('/api/users/:id', (req, res) => {\n  const userId = req.params.id; // path parameter\n  const searchFilter = req.query.filter; // query parameter\n  res.status(200).json({ userId, searchFilter });\n});\n\n// POST Endpoint\napp.post('/api/users', (req, res) => {\n  const { name, email } = req.body; // request body\n  res.status(201).json({ created: { name, email } });\n});\n\n// Error handling middleware\napp.use((err, req, res, next) => {\n  res.status(500).json({ error: err.message });\n});",
    "ext": "js"
  },
  "11-MongoDB-CheatSheet": {
    "title": "MongoDB CheatSheet",
    "line": "Print-friendly, compact reference for mongosh query operators, CRUD operations, index calls, and aggregation filters.",
    "think": "Look once, remember forever: mongosh query commands and mongoose schema models.",
    "example": "db.users.find({ age: { $gte: 21 } })",
    "result": "Enables fast NoSQL database query lookup checks.",
    "remember": "Always write updates wrapping $set operators to avoid replacing entire document logs.",
    "summary": "* CRUD: insertOne(), find(), updateOne(), deleteOne().\n* Operators: $gt, $lt, $in, $or, $and, $set, $inc.\n* Aggregation: $match, $group, $sort, $sum, $avg.\n* Mongoose: mongoose.Schema(), mongoose.model().",
    "diagram": "Mongo Reference -> query arrays -> filter updates -> Mongoose model setups",
    "practice": "Create a cheatsheet listing comparisons operators ($eq, $ne, $gt, $lt, $in) with example queries.",
    "challenge": "Write out an aggregation pipeline group query summing items cost fields.",
    "example_code": "// MongoDB & Mongoose Cheat Sheet\n// --- 1. MongoDB shell queries ---\n// Find users where age >= 21 sorted by name ascending\ndb.users.find({ age: { $gte: 21 } }).sort({ name: 1 });\n\n// Update Bob's status to Active\ndb.users.updateOne({ name: \"Bob\" }, { $set: { status: \"Active\" } });\n\n// --- 2. Mongoose Schema Setup ---\nconst mongoose = require('mongoose');\nconst userSchema = new mongoose.Schema({\n  username: { type: String, required: true, unique: true },\n  age: { type: Number, min: 18 }\n});\nconst User = mongoose.model('User', userSchema);",
    "ext": "js"
  },
  "12-MERN-CheatSheet": {
    "title": "MERN CheatSheet",
    "line": "Print-friendly reference for client-server CORS checks, environment variables, authentication workflows, and deployment checklists.",
    "think": "Look once, remember forever: MERN port connections, CORS mappings, and deployment checklist values.",
    "example": "app.use(cors({ origin: process.env.CLIENT_URL }));",
    "result": "Instant full-stack MERN setup and configuration helper.",
    "remember": "Always test environment variables locally in .env files before launching code onto production hosting.",
    "summary": "* Connections: React (port 5173) -> CORS check -> Express (port 5000) -> Mongoose -> Atlas.\n* Security: Helmet headers, Rate limiting, CORS origin locks.\n* Production: build bundles (npm run build), set Render start scripts.",
    "diagram": "MERN Reference -> CORS whitelists -> API fetches calls -> JWT authorization verification -> Deployment hosting",
    "practice": "Create a checklists card tracking environment variable settings for dev vs prod environments.",
    "challenge": "Build a single-file template showcasing standard CORS, JSON parser, and API router routing setups in Express.",
    "example_code": "// MERN Full-Stack Setup Cheat Sheet\n// --- server.js ---\nconst express = require('express');\nconst cors = require('cors');\nconst mongoose = require('mongoose');\nrequire('dotenv').config();\n\nconst app = express();\napp.use(express.json());\n\n// CORS whitelist setup\napp.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));\n\n// Database connection\nmongoose.connect(process.env.MONGODB_URI)\n  .then(() => console.log(\"Database connected\"))\n  .catch(err => console.error(err));\n\n// API router link\napp.use('/api/data', require('./routes/api'));\n\nconst PORT = process.env.PORT || 5000;\napp.listen(PORT);",
    "ext": "js"
  }
};
const SYSTEM_DESIGN_DATA = {
  "01-What-Is-System-Design": {
    "title": "What is System Design",
    "line": "System Design is the process of defining the architecture, components, and data interfaces of an application to satisfy business requirements.",
    "think": "Architect blueprints. Instead of just laying bricks (coding loops), system design maps out the blueprints of the whole housing complex (servers, databases, caches).",
    "example": "Planning out if an application needs a relational database (SQL) or document storage (NoSQL).",
    "result": "Allows teams to build scalable, organized, and reliable software services.",
    "remember": "System design focuses on structural layout and scaling, not syntax optimization.",
    "summary": "* Defines app architectures components.\n* Manages system scalability.\n* Focuses on scalability, reliability, and security.",
    "diagram": "Client -> API Gateway -> Servers -> Database Cluster",
    "practice": "Explain the difference between Vertical Scaling and Horizontal Scaling.",
    "challenge": "Design a high-level system layout for a personal blog site, highlighting database and server requirements.",
    "example_code": "// System Design high-level components description\nconst componentArchitecture = {\n  client: \"React SPA running in user browser\",\n  webServer: \"Express API server handling route logins\",\n  database: \"MongoDB Atlas cluster storing JSON user profiles\"\n};\nconsole.log(componentArchitecture);",
    "ext": "js"
  },
  "02-Client-Server": {
    "title": "Client-Server Architecture",
    "line": "Client-Server is a distributed structure partition where clients request resources and servers process and respond.",
    "think": "Restaurant setup. The Client is the customer ordering food (requests). The Server is the kitchen staff preparing meals (response).",
    "example": "React app running on a laptop calling Express API server endpoints.",
    "result": "Enables decoupled full-stack application development.",
    "remember": "Clients handle visual layouts; servers handle business calculations and database gates.",
    "summary": "* Clients request resources; servers respond with payloads.\n* Promotes clean segregation of concerns.\n* Allows multiple clients (web, mobile) to query the same server API.",
    "diagram": "Client (Browser/Phone) <=== HTTP Network Request ===> Server (Node/Express)",
    "practice": "Describe the responsibilities of a web client vs a web server.",
    "challenge": "Create a simple client-server connection mock showing a fetch request and route handler.",
    "example_code": "// client/server communication simulation\nconst serverMock = {\n  handleRequest: (route) => {\n    return route === '/api/data' \n      ? { status: 200, data: \"Hello Client!\" }\n      : { status: 404, error: \"Not Found\" };\n  }\n};\n\nconst clientMock = async () => {\n  const res = serverMock.handleRequest('/api/data');\n  console.log(\"Response:\", res.data); // \"Hello Client!\"\n};\nclientMock();",
    "ext": "js"
  },
  "03-Request-Response": {
    "title": "Request-Response Lifecycle",
    "line": "The Request-Response lifecycle is the protocol loop where a client query triggers server routing actions returning headers and content.",
    "think": "Mailing a letter. You write addresses (URL) and seal data (headers/body), postman transfers it (network), receiver reads it and writes replies (response).",
    "example": "Entering a URL path, browser sending HTTP GET, server resolving route and returning index.html.",
    "result": "Synchronizes user interfaces with server data structures.",
    "remember": "Every request must trigger a response status code, or the browser will spin waiting forever.",
    "summary": "* Lifecycle starts with client requests.\n* Network headers declare formats (Content-Type).\n* Response status codes (200, 404) report outcome status.",
    "diagram": "Client GET / -> network packages -> Express Router -> res.send(html) -> rendered page",
    "practice": "Explain the difference between HTTP GET, POST, PUT, and DELETE methods.",
    "challenge": "Trace the request-response journey of a login form submission, detailing headers and body data.",
    "example_code": "// Mocking HTTP Request-Response lifecycle\nconst request = {\n  method: \"POST\",\n  path: \"/api/login\",\n  body: { user: \"Alice\", pwd: \"123\" }\n};\n\nconst router = (req) => {\n  if (req.method === \"POST\" && req.path === \"/api/login\") {\n    return { statusCode: 200, body: { authenticated: true } };\n  }\n  return { statusCode: 404, body: { error: \"Route not found\" } };\n};\n\nconst response = router(request);\nconsole.log(`HTTP Status: ${response.statusCode}`, response.body);",
    "ext": "js"
  },
  "04-Databases": {
    "title": "Databases: SQL vs NoSQL",
    "line": "Databases store persistent applications data records in relational tables (SQL) or NoSQL document collections.",
    "think": "A spreadsheet ledger (SQL) vs a cabinet folder of index cards (NoSQL). SQL has columns constraints; NoSQL holds dynamic key objects.",
    "example": "PostgreSQL tables with rigid columns vs MongoDB collections storing flexible NoSQL user documents.",
    "result": "Enables secure data persistence for backend applications.",
    "remember": "Use SQL when you have highly relational, structured data. Use NoSQL for rapidly changing flexible document schemas.",
    "summary": "* SQL: Relational, strict schemas, foreign key joins.\n* NoSQL: Document-based, schemaless, nested arrays/objects.\n* Select databases based on schema structure and query design requirements.",
    "diagram": "SQL: Tables (Rows & Columns) vs NoSQL: Collections (JSON Documents)",
    "practice": "Explain the concept of database joins in SQL vs NoSQL relationships.",
    "challenge": "Design a schema structure for a product catalogue using relational tables vs NoSQL document collections.",
    "example_code": "// Database Schema differences simulation\nconst sqlUserRow = { id: 101, username: \"alice\", email: \"alice@test.com\" }; // Tabular\nconst nosqlUserDoc = { \n  _id: \"603d2\", \n  username: \"alice\", \n  contacts: [\"alice@test.com\", \"alice.dev@test.com\"], // Nested Array\n  profile: { age: 25, bio: \"Web Dev\" } // Nested Object\n};\nconsole.log(\"SQL Schema:\", sqlUserRow);\nconsole.log(\"NoSQL Schema:\", nosqlUserDoc);",
    "ext": "js"
  },
  "05-Caching": {
    "title": "Caching Basics",
    "line": "Caching is storing frequently accessed database records inside ultra-fast temporary RAM memory to speed up load times.",
    "think": "Keeping frequently used spices on the kitchen counter (caching) instead of walking to the basement pantry (database disk) every single time.",
    "example": "Using Redis database to cache API responses, resolving queries in 2ms instead of 200ms database lookups.",
    "result": "Reduces server load and boosts API response speeds.",
    "remember": "Always configure cache invalidation guidelines (expiration times) so users do not see outdated data.",
    "summary": "* Stores data in temporary high-speed RAM (e.g. Redis).\n* Reduces database queries overhead.\n* Cache hits resolve requests instantly; cache misses fetch database.",
    "diagram": "Client -> Server -> Cache RAM ? (Return Cache) : (Fetch DB -> Update Cache -> Return)",
    "practice": "Explain the difference between a cache hit and a cache miss.",
    "challenge": "Write a mock script displaying cache validation rules (fetch from local cache if younger than 5 seconds).",
    "example_code": "// Caching simulation logic\nconst database = { \"user_1\": \"Alice Profile Details\" };\nconst cache = {};\nconst cacheExpiryMs = 2000;\n\nasync function getUserData(userId) {\n  const cached = cache[userId];\n  if (cached && (Date.now() - cached.timestamp < cacheExpiryMs)) {\n    console.log(\"Cache Hit!\");\n    return cached.data;\n  }\n  \n  console.log(\"Cache Miss! Fetching from Database...\");\n  const data = database[userId];\n  cache[userId] = { data, timestamp: Date.now() };\n  return data;\n}\n\nasync function runDemo() {\n  await getUserData(\"user_1\"); // Miss\n  await getUserData(\"user_1\"); // Hit\n}\nrunDemo();",
    "ext": "js"
  },
  "06-Load-Balancing": {
    "title": "Load Balancing",
    "line": "A Load Balancer distributes incoming network traffic across multiple backend servers to prevent overload and ensure uptime.",
    "think": "A traffic coordinator at a toll station directing cars to different open lanes to prevent long backups.",
    "example": "NGINX load balancing requests across three running Express API instances.",
    "result": "Prevents server crashes by distributing query volumes.",
    "remember": "Load balancers use strategies like Round Robin (rotating server indexes sequentially) or Least Connections.",
    "summary": "* Distributes traffic to multiple servers.\n* Prevents single points of failure (high availability).\n* Round Robin: forwards traffic sequentially.",
    "diagram": "Traffic -> [ Load Balancer ] -> (Server 1 / Server 2 / Server 3)",
    "practice": "Explain the concept of Round Robin scheduling in traffic routing.",
    "challenge": "Simulate a Round Robin traffic routing script that rotates target server ports sequentially.",
    "example_code": "// Round Robin Load Balancer Simulator\nconst servers = [\"http://localhost:5001\", \"http://localhost:5002\", \"http://localhost:5003\"];\nlet currentIndex = 0;\n\nfunction routeRequest() {\n  const targetServer = servers[currentIndex];\n  currentIndex = (currentIndex + 1) % servers.length; // Rotate index\n  return targetServer;\n}\n\nconsole.log(\"Req 1 Routed to:\", routeRequest());\nconsole.log(\"Req 2 Routed to:\", routeRequest());\nconsole.log(\"Req 3 Routed to:\", routeRequest());\nconsole.log(\"Req 4 Routed to:\", routeRequest());",
    "ext": "js"
  },
  "07-Authentication": {
    "title": "Stateful vs Stateless Auth",
    "line": "Secure user sessions using server-side session databases (stateful) or self-contained signed tokens (stateless).",
    "think": "Renting a hotel room (Stateful - front desk checks reservation records) vs buying a concert ticket (Stateless - ticket contains signature seal).",
    "example": "Express-Session database records vs JWT validation tokens checked locally via cryptographic keys.",
    "result": "Enables secure full-stack authentication models.",
    "remember": "JWTs cannot be easily revoked before expiration without building blacklist databases.",
    "summary": "* Stateful: Server stores session IDs in DB; client sends ID cookie.\n* Stateless: Server signs JWT; client attaches token in headers.\n* Stateless JWTs scale better across distributed microservice servers.",
    "diagram": "Stateful: Server checks session database vs Stateless: Server verifies signature key",
    "practice": "Describe the security pros and cons of Sessions vs JSON Web Tokens.",
    "challenge": "Write a mock validator that validates a signature token using a shared secret key.",
    "example_code": "// Mock JWT Signature validation logic\nconst crypto = require('crypto');\nconst SECRET = \"secret_key\";\n\nfunction signToken(payload) {\n  const data = JSON.stringify(payload);\n  const signature = crypto.createHmac('sha256', SECRET).update(data).digest('hex');\n  return `${Buffer.from(data).toString('base64')}.${signature}`;\n}\n\nfunction verifyToken(token) {\n  const [base64Payload, signature] = token.split('.');\n  const data = Buffer.from(base64Payload, 'base64').toString('utf8');\n  const expectedSignature = crypto.createHmac('sha256', SECRET).update(data).digest('hex');\n  \n  if (signature === expectedSignature) {\n    return { valid: true, payload: JSON.parse(data) };\n  }\n  return { valid: false };\n}\n\nconst token = signToken({ userId: 101 });\nconsole.log(\"Token:\", token);\nconsole.log(\"Verified:\", verifyToken(token));",
    "ext": "js"
  },
  "08-CDN": {
    "title": "CDN Basics",
    "line": "CDNs (Content Delivery Networks) are distributed servers globally that cache static assets closer to users.",
    "think": "A chain of local convenience stores. Instead of driving to the central warehouse (original server) for milk, you buy it at the local store (CDN edge server).",
    "example": "Hosting React styling files or images on Cloudflare edge servers.",
    "result": "Drastically speeds up page load times for global users.",
    "remember": "Only use CDNs for static assets (images, css, js files), never for dynamic API database records.",
    "summary": "* CDNs cache static files closer to users geographical coordinates.\n* Reduces origin server bandwidth costs.\n* Edge servers process static responses instantly.",
    "diagram": "User -> [ Closest CDN Edge Server ] -> cached asset return",
    "practice": "Explain the difference between an origin server and an edge server.",
    "challenge": "Describe how CDNs handle cache invalidation when developers upload updated assets.",
    "example_code": "// CDN cache simulation logic\nconst edgeServers = {\n  \"us_east\": { \"logo.png\": \"East Coast Cached Logo\" },\n  \"eu_west\": { \"logo.png\": \"Europe Cached Logo\" }\n};\n\nfunction fetchAsset(userLocation, assetName) {\n  const server = edgeServers[userLocation] || edgeServers[\"us_east\"];\n  return server[assetName] || \"Fetch from Origin Server\";\n}\n\nconsole.log(\"US User:\", fetchAsset(\"us_east\", \"logo.png\"));\nconsole.log(\"EU User:\", fetchAsset(\"eu_west\", \"logo.png\"));",
    "ext": "js"
  },
  "09-Microservices-Basics": {
    "title": "Microservices Basics",
    "line": "Microservices is an architectural style dividing a monolithic app into independent, loosely coupled services.",
    "think": "A mall food court. Instead of one restaurant attempting to serve pizza, sushi, and burgers (monolith), separate dedicated kitchens serve each item.",
    "example": "Deploying user authentication, catalog search, and ordering routes as separate Node.js services.",
    "result": "Enables scaling and upgrading parts of a system independently.",
    "remember": "Microservices introduce complexity in network communications and database consistency.",
    "summary": "* Monolith: Single codebase, single deployment package.\n* Microservices: Separate codebase, databases, and deployments.\n* Services communicate via HTTP REST, gRPC, or message queues.",
    "diagram": "Client -> API Gateway -> (Auth Service / Cart Service / Product Service)",
    "practice": "Describe the pros and cons of Monolith vs Microservices architectures.",
    "challenge": "Design a high-level microservice split layout for a video streaming platform.",
    "example_code": "// Microservices service communication mock\nconst authService = { verify: (token) => token === \"user_ok\" };\nconst orderService = {\n  createOrder: (item, token) => {\n    const isAuth = authService.verify(token);\n    return isAuth \n      ? { success: true, order: `Bought ${item}` }\n      : { success: false, error: \"Unauthorized\" };\n  }\n};\nconsole.log(orderService.createOrder(\"Book\", \"user_ok\"));",
    "ext": "js"
  },
  "10-Design-A-Simple-App": {
    "title": "Design a Simple App",
    "line": "Apply basic system design principles to plan a simple, scalable web application architecture.",
    "think": "Combining client interfaces, API servers, cache databases, and persistence servers into a unified blueprint.",
    "example": "Designing a simple collaborative real-time note-sharing board app.",
    "result": "Prepares you to map full-stack application blueprints.",
    "remember": "Always start with requirements (user counts, write/read ratios) before selecting databases and load balancers.",
    "summary": "* Define functional requirements first.\n* Map data flow from frontend to database.\n* Identify potential bottlenecks (e.g. database load) and scale accordingly.",
    "diagram": "Client SPA -> API Gateway -> Load Balancer -> Server Nodes -> Redis Cache -> MongoDB",
    "practice": "Draft a high-level component blueprint list for building a simple real-time Chat application.",
    "challenge": "Write out a step-by-step checklist explaining how to handle database scaling as your app grows from 1,000 to 1,000,000 users.",
    "example_code": "// System Design specification object\nconst simpleAppSpec = {\n  name: \"Task Manager System\",\n  readWriteRatio: \"10:1 (Read intensive)\",\n  scalingStrategy: \"Horizontal scaling of Express servers with Redis caching on GET requests\",\n  database: \"Mongoose database collections whitelisted on MongoDB Atlas cloud\"\n};\nconsole.log(JSON.stringify(simpleAppSpec, null, 2));",
    "ext": "js"
  }
};
const CAREER_GUIDE_DATA = {
  "01-Frontend-Roadmap": {
    "title": "Frontend Developer Roadmap",
    "line": "Recommended learning roadmap to master frontend development, covering HTML, CSS, JavaScript, Frameworks, and Build Tools.",
    "think": "A navigational map leading from beginner visual tags to complex single-page reactive application frameworks.",
    "example": "Basic HTML -> Layout CSS -> JavaScript DOM -> React SPA -> Performance overrides.",
    "result": "Prepares a structured study schedule for frontend jobs.",
    "remember": "Do not rush into React! Master core CSS layouts and JavaScript DOM manipulation first.",
    "summary": "* Level 1: Semantic HTML & Responsive CSS (Grid/Flexbox).\n* Level 2: Modern ES6+ JavaScript & DOM APIs.\n* Level 3: Git, Package Managers (npm), and CSS frameworks (Tailwind).\n* Level 4: React frontend development, routing, and state hook configurations.",
    "diagram": "HTML -> CSS -> JS -> Git -> Tailwind -> React -> Next.js",
    "practice": "Build a checklist tracking your current frontend skill set progress.",
    "challenge": "Outline a 3-month study schedule aiming to master React and state management strategies.",
    "example_code": "{\n  \"Frontend Roadmap\": [\n    \"1. Basics: HTML5 structures & CSS3 box model sizing.\",\n    \"2. Layouts: Flexbox alignments, Grid grids layouts, and Media Queries.\",\n    \"3. JavaScript: Variables, Arrays, Objects, Promises, and DOM queries.\",\n    \"4. Tooling: Git terminal versioning, npm package initializations.\",\n    \"5. Frameworks: React components hierarchy, states hooks, API fetching.\"\n  ]\n}",
    "ext": "json"
  },
  "02-Backend-Roadmap": {
    "title": "Backend Developer Roadmap",
    "line": "Recommended learning roadmap to master backend systems, covering Node.js, databases, APIs, authentication, and deployment.",
    "think": "Navigating from writing terminal calculators to deploying secure, clustered databases and API services.",
    "example": "Node.js runtime -> HTTP servers -> Express API -> Mongoose -> Authentication -> Deployment.",
    "result": "Prepares a structured study schedule for backend jobs.",
    "remember": "Backend is about security, performance, and data integrity, not visual layouts.",
    "summary": "* Level 1: Runtime basics (Node.js modules, file systems).\n* Level 2: Routing servers, routers, and middlewares (Express).\n* Level 3: NoSQL and SQL databases configurations (MongoDB).\n* Level 4: Security (hashing, JWT tokens, validations) and hosting.",
    "diagram": "NodeJS -> Express -> MongoDB -> REST APIs -> JWT Auth -> Render/Atlas",
    "practice": "Build a checklist tracking your current backend skill set progress.",
    "challenge": "Outline a 3-month study schedule aiming to master databases, API security, and server configurations.",
    "example_code": "{\n  \"Backend Roadmap\": [\n    \"1. Server Runtime: Node.js core modules (fs, path, events).\",\n    \"2. API Layer: Express routing, middleware pipelines, and CRUD.\",\n    \"3. Database: MongoDB NoSQL structures, document query operators, Mongoose.\",\n    \"4. Security: bcrypt hashing, JWT auth tokens, CORS access controls.\",\n    \"5. Devops: Environment variables configurations, hosting servers on Render.\"\n  ]\n}",
    "ext": "json"
  },
  "03-FullStack-Roadmap": {
    "title": "FullStack Developer Roadmap",
    "line": "Recommended learning roadmap to bridge frontend and backend into MERN full-stack systems integration.",
    "think": "Bridging the gap: connecting user interface dashboards to backend routers and cloud database servers.",
    "example": "React Client + Express API + MongoDB Atlas cloud database = Full-Stack MERN app.",
    "result": "Prepares a structured study schedule for full-stack jobs.",
    "remember": "A full-stack developer is a generalist who understands both client user experience and database architecture.",
    "summary": "* Master frontend frameworks (React) and backend API routers (Express).\n* Learn to connect clients and servers via whitelisted CORS settings.\n* Master full-stack authentication, protected routes, and monorepos.",
    "diagram": "React Client <=> HTTP JSON requests <=> Express Server <=> MongoDB Atlas",
    "practice": "Build a checklist tracking your current full-stack MERN skills.",
    "challenge": "Outline a plan to build and deploy your first complete MERN application from scratch.",
    "example_code": "{\n  \"FullStack Roadmap\": [\n    \"1. Integration: Whitelisting CORS access across client/server ports.\",\n    \"2. API Consumption: Fetching database collections inside React useEffect hooks.\",\n    \"3. Authentications: Stateful cookies vs stateless signed JWT tokens.\",\n    \"4. Deployment: Deploying static client assets to Vercel and API services to Render.\"\n  ]\n}",
    "ext": "json"
  },
  "04-Portfolio-Guide": {
    "title": "Portfolio Guide",
    "line": "How to build and present web development portfolio projects that impress recruiters and land jobs.",
    "think": "A showcase museum. Instead of displaying 20 generic worksheets, you present 3 polished, fully working applications with clean READMEs.",
    "example": "Creating a portfolio page linking to a live blog system, a task tracker, and an ecommerce demo.",
    "result": "Increases your response rate when applying to developer jobs.",
    "remember": "A recruiter spends less than 30 seconds reviewing your portfolio. Make it fast, clean, and mobile-responsive.",
    "summary": "* Quality over quantity: Show 3 high-quality portfolio projects.\n* Include live URLs and GitHub repository links.\n* Write clear, professional READMEs explaining tech choices.",
    "diagram": "Portfolio UI -> Live URLs -> GitHub Repos -> Technical READMEs",
    "practice": "Write down the titles and features of the 3 projects you want to feature in your portfolio.",
    "challenge": "Draft a clean README structure for your best portfolio project, detailing architecture, installation, and deployment.",
    "example_code": "{\n  \"Portfolio Projects Guidelines\": [\n    \"1. Include a live URL deployment link (Vercel/Render).\",\n    \"2. Provide a clear 1-paragraph summary of what the app does.\",\n    \"3. List the tech stack used (e.g. React, Express, Mongoose).\",\n    \"4. Show a visual preview or diagram of the layout.\",\n    \"5. Outline installation instructions for local testing.\"\n  ]\n}",
    "ext": "json"
  },
  "05-Resume-Guide": {
    "title": "Resume Guide",
    "line": "How to structure a professional developer resume that passes applicant tracking systems (ATS) and catches recruiters' attention.",
    "think": "A structured JSON document. Your resume should be clean, parsing-friendly, and list clear technical impacts.",
    "example": "Structuring: Contact Info -> Skills List -> Projects -> Work History -> Education.",
    "result": "Prepares an ATS-optimized, high-impact resume.",
    "remember": "Never list skills on a 1-to-10 scale (e.g. 'JavaScript: 8/10')—it is subjective and looks unprofessional.",
    "summary": "* Keep it to a single page.\n* Use ATS-friendly single-column layouts.\n* Describe project impacts using action verbs (e.g. 'Optimized database reads by 40% using indexes').",
    "diagram": "Resume File -> Contact details -> Skills list -> Project impacts -> Work history",
    "practice": "Draft the 'Projects' section of your resume, detailing the tech stacks and features of your capstone projects.",
    "challenge": "Rewrite three of your resume bullet points to focus on impact and technical challenges solved rather than task lists.",
    "example_code": "{\n  \"Resume Template Structure\": {\n    \"Header\": \"Name, Phone, Email, GitHub URL, Portfolio URL\",\n    \"Technical Skills\": \"Languages, Frameworks, Databases, Tools\",\n    \"Projects\": [\n      {\n        \"name\": \"Collaborative Task Manager\",\n        \"tech\": \"MERN Stack, JWT, Tailwind\",\n        \"bullets\": [\n          \"Developed stateless JWT authentication secure cookie layers.\",\n          \"Optimized task loading speed by implementing MongoDB indexed search queries.\"\n        ]\n      }\n    ]\n  }\n}",
    "ext": "json"
  },
  "06-LinkedIn-Guide": {
    "title": "LinkedIn Guide",
    "line": "How to optimize your LinkedIn profile to attract recruiters and network with developers.",
    "think": "An organic search engine optimization (SEO) landing page. Recruiters search LinkedIn using keywords like 'React' or 'Node.js'.",
    "example": "Adding keywords to your Headline: 'Full-Stack Developer | React | Node.js | MERN'.",
    "result": "Increases profile views and recruiters inquiries.",
    "remember": "Always link your GitHub profile and portfolio website inside your LinkedIn contact section.",
    "summary": "* Write a clear, keyword-rich headline.\n* Detail your projects in the 'About' section.\n* Feature your best GitHub repositories.",
    "diagram": "Headline Keywords -> Profile Picture -> About Section Projects -> Featured Repos",
    "practice": "Draft a professional 'Headline' and 'About' bio for your LinkedIn profile.",
    "challenge": "Outline a strategy to post weekly updates sharing your coding progress to build visibility on LinkedIn.",
    "example_code": "{\n  \"LinkedIn Profile Tips\": [\n    \"1. Headline: Use specific titles and tech keywords (e.g. React, Node, Express).\",\n    \"2. About Section: Tell a brief story of your coding journey, skills, and projects.\",\n    \"3. Experience: Detail tech stacks and features of codebases you worked on.\",\n    \"4. Featured Section: Pin links to your live portfolio website and GitHub.\"\n  ]\n}",
    "ext": "json"
  },
  "07-GitHub-Guide": {
    "title": "GitHub Profile Guide",
    "line": "How to customize your GitHub profile page to showcase your code quality, activity, and professionalism.",
    "think": "Your developer dashboard. Recruiters look at your commit history, code organization, and repository setups.",
    "example": "Creating a special profile repository (username/username) to render a custom markdown bio.",
    "result": "Presents a polished, professional coding presence.",
    "remember": "Write clean, descriptive commit messages. Avoid messages like 'fixed stuff' or 'temp commit'.",
    "summary": "* Create a profile README.md.\n* Pin your 3 best project repositories.\n* Maintain clean folder structures and descriptive commit logs.",
    "diagram": "Profile README -> Pinned Repos -> Green Commits Grid -> Clean Commit Logs",
    "practice": "Build a custom profile README markdown template for your GitHub account.",
    "challenge": "Outline a commit guidelines checklist for yourself, defining naming patterns for fix and feature commits.",
    "example_code": "{\n  \"GitHub Profile Guidelines\": [\n    \"1. Create a public repository named exactly after your GitHub username.\",\n    \"2. Add a README.md file to this repository to showcase your bio and skills.\",\n    \"3. Pin repositories that have clean folder structures and clear README instructions.\",\n    \"4. Commit code regularly to showcase consistent, active development.\"\n  ]\n}",
    "ext": "json"
  },
  "08-Freelancing-Basics": {
    "title": "Freelancing Basics",
    "line": "How to find clients, scope deliverables, manage timelines, and build projects as a freelance web developer.",
    "think": "Running your own digital agency. You handle project scoping, client contracts, and technical builds.",
    "example": "Building custom landing pages or catalog sites for local businesses.",
    "result": "Enables you to earn income while building real-world software experience.",
    "remember": "Always agree on a clear scope of work before writing the first line of code to prevent scope creep.",
    "summary": "* Find clients through networking, local businesses, or freelancing portals.\n* Define clear deliverables and timeline checklists.\n* Build simple, manageable solutions before proposing complex systems.",
    "diagram": "Client Lead -> Scope deliverables -> Signed Contract -> Milestone Builds -> Launch",
    "practice": "Draft a simple 1-page project scope document for building a local restaurant's landing page.",
    "challenge": "Explain how to handle a situation where a client asks for additional features midway through a project build.",
    "example_code": "{\n  \"Freelance Project Checklist\": [\n    \"1. Client Interview: Gather functional specifications and page count requirements.\",\n    \"2. Scope Document: Write down deliverables, mockups templates, and milestones.\",\n    \"3. Contract: Define terms, deposit payments, and edit limit bounds.\",\n    \"4. Development: Build using modular templates (Bootstrap/Tailwind).\",\n    \"5. Delivery: Deploy code, run validation stats, transfer domain host.\"\n  ]\n}",
    "ext": "json"
  },
  "09-Internship-Preparation": {
    "title": "Internship Preparation",
    "line": "How to prepare for, apply to, and succeed in developer internships to jumpstart your career.",
    "think": "Bridging learning to corporate environments: building solid code, learning from senior devs, and being proactive.",
    "example": "Learning company codebases, asking structured debugging questions, and taking notes on workflows.",
    "result": "Maximizes the chance of converting internships into full-time job offers.",
    "remember": "Internships are about learning, adaptability, and reliability, not knowing everything on day one.",
    "summary": "* Prepare portfolio projects and practice technical coding interviews.\n* Focus on communication, learning speed, and reliable task delivery.\n* Ask questions only after spending time attempting to debug yourself.",
    "diagram": "Internship search -> Prep technicals -> Proactive execution -> Full-time transition",
    "practice": "Create a list of 5 companies you want to apply to for developer internships.",
    "challenge": "Describe a step-by-step strategy for onboarding onto a large, legacy corporate codebase during your first week.",
    "example_code": "{\n  \"Internship Success Tips\": [\n    \"1. Be Proactive: Take notes during meetings and document setups.\",\n    \"2. Ask Smart Questions: Explain what you tried before asking for help.\",\n    \"3. Learn Workflows: Master git branches, code reviews, and testing runs.\",\n    \"4. Deliver Reliability: Keep tasks updated and report blockers early.\"\n  ]\n}",
    "ext": "json"
  },
  "10-First-Job-Preparation": {
    "title": "First Job Preparation",
    "line": "How to prepare for your first full-time developer job, mastering company onboarding, team workflows, and tools.",
    "think": "Entering the professional league: understanding sprint schedules, code reviews, staging hosts, and production controls.",
    "example": "Participating in daily standup meetings, writing pull requests, and setting up local dev environments.",
    "result": "Prepares you to onboard successfully and deliver value in your first job.",
    "remember": "Every company has a different dev stack setup. Spend your first week mastering local environment configurations.",
    "summary": "* Onboard: set up local environments, read docs, run tests.\n* Sprints: understand ticket boards, estimation weights, standup updates.\n* Code reviews: write clean PR descriptions, respond to feedback reviews.",
    "diagram": "Company Onboard -> Local Setup -> Sprint Tickets -> Pull Requests -> Production Deploy",
    "practice": "Build a list of questions to ask your team manager on your first day of work.",
    "challenge": "Outline a pull request (PR) checklist ensuring your code changes pass tests and meet team styling conventions.",
    "example_code": "{\n  \"First Job Prep Checklist\": [\n    \"1. Master Git: Learn rebasing, staging, and merge conflict resolutions.\",\n    \"2. Team Communication: Practice clear standup updates (Done, Doing, Blocked).\",\n    \"3. Setup: Document your local machine configurations for future devs.\",\n    \"4. Quality: Learn the company's linter rules and testing commands.\"\n  ]\n}",
    "ext": "json"
  },
  "11-Salary-Negotiation": {
    "title": "Salary Negotiation Guide",
    "line": "How to negotiate compensation package parameters, handle salary questions, and navigate job offers.",
    "think": "Professional negotiation. Understanding market value ranges, avoiding early salary disclosures, and proposing compromises.",
    "example": "Proposing a salary range based on market research instead of disclosing your current pay.",
    "result": "Secures fair compensation matching your technical skills.",
    "remember": "Never accept a job offer on the spot! Always ask for 24-48 hours to review the full details.",
    "summary": "* Refinement 3 compliant: Compensation guides for junior roles.\n* Never disclose a number first; ask for the company's budget.\n* Research market ranges using site databases (Glassdoor, Levels.fyi).\n* Focus negotiations on value, skills, and industry benchmarks.",
    "diagram": "Job Offer -> Research Market -> Handle early salary questions -> Present value proposal -> Final agreement",
    "practice": "Write a script answering the question 'What are your salary expectations?' without naming a specific number.",
    "challenge": "Draft a professional email requesting a 10% increase in the initial salary offer based on your MERN full-stack skills.",
    "example_code": "{\n  \"Negotiation Rules\": [\n    \"1. Never give a specific number first. Ask: 'What is the budget range for this role?'\",\n    \"2. Research benchmarks for junior developers in your region.\",\n    \"3. Keep discussions polite and focused on the value you bring.\",\n    \"4. Get all offer components (salary, bonuses, stock) in writing.\"\n  ]\n}",
    "ext": "json"
  },
  "12-Remote-Work-Basics": {
    "title": "Remote Work Basics",
    "line": "How to work effectively in remote teams, mastering asynchronous communication, time management, and tools.",
    "think": "Digital collaboration. Writing clear messages, time blocking your calendar, and using async updates to coordinate.",
    "example": "Writing detailed Slack updates showing screenshots of bugs instead of calling meetings.",
    "result": "Enables productive, self-directed remote software work.",
    "remember": "In remote work, writing is the primary skill. Over-communication is always better than under-communication.",
    "summary": "* Refinement 3 compliant: Remote work structures.\n* Asynchronous communication: write complete details upfront, don't just say 'hello'.\n* Time management: time-blocking, work-life boundaries.\n* Remote tools: Slack/Teams, Zoom, Jira, Git.",
    "diagram": "Remote Work -> Async Communication -> Time Blocking Calendar -> Slack/Jira Updates -> Sync Checkins",
    "practice": "Write a detailed Slack message reporting a bug to a remote teammate, including steps to reproduce, logs, and screenshots.",
    "challenge": "Outline a daily time-blocked schedule balancing focused coding, meetings, and personal breaks.",
    "example_code": "{\n  \"Remote Work Best Practices\": [\n    \"1. Async Messaging: Include full context in your text. Avoid 'Hi, you free?'\",\n    \"2. Documentation: Save configurations in repository markdown files.\",\n    \"3. Work Boundaries: Have a dedicated workspace and log off on time.\",\n    \"4. Sync: Be prompt during daily standups and sprint reviews.\"\n  ]\n}",
    "ext": "json"
  }
};
const OPEN_SOURCE_DATA = {
  "01-What-Is-Open-Source": {
    "title": "What is Open Source",
    "line": "Open Source is a software release model where code is publicly accessible, allowing anyone to view, modify, and distribute it.",
    "think": "A public library. Anyone can read, copy, study, and recommend edits to the books on the shelves.",
    "example": "Linux, Node.js, Express, React, and Git are all open-source projects.",
    "result": "Enables global collaboration and software quality scaling.",
    "remember": "Open source code must have a license (e.g. MIT, GPL) defining how it can be used.",
    "summary": "* Publicly accessible codebases.\n* MIT, GPL, Apache licenses define permissions.\n* Promotes global developer collaboration.",
    "diagram": "Developer Repo -> Public Release -> Global Contributions -> Pull Requests",
    "practice": "Explain the purpose of the MIT License in open-source software.",
    "challenge": "Find three open-source repositories on GitHub and identify their software licenses.",
    "example_code": "# Check software license info of a repository (e.g. curl)\ncurl -s https://api.github.com/repos/curl/curl/license | grep name",
    "ext": "sh"
  },
  "02-Finding-Projects": {
    "title": "Finding Projects",
    "line": "How to search and select suitable open-source repositories for code contributions.",
    "think": "Browsing a volunteering directory. You look for projects matching your skill sets (React, Node) and activity levels.",
    "example": "Searching GitHub using topics like 'good-first-issue' and language filters.",
    "result": "Identifies target projects for code contributions.",
    "remember": "Start with small, active repositories before attempting to contribute to large frameworks.",
    "summary": "* Search GitHub using filters (e.g. label:good-first-issue).\n* Check repository activity (recent commits, active issues).\n* Read the CONTRIBUTING.md file completely.",
    "diagram": "GitHub Search -> Filter tags -> Read Contributing guide -> Choose project",
    "practice": "Find a repository on GitHub that has active issues labeled 'good-first-issue'.",
    "challenge": "Evaluate a repository's activity using stats like weekly commits and issue close times.",
    "example_code": "# Search GitHub API for active repositories with good-first-issue tags\ncurl -s \"https://api.github.com/search/issues?q=label:good-first-issue+state:open+language:javascript\" | grep html_url | head -n 5",
    "ext": "sh"
  },
  "03-Forks": {
    "title": "Understanding Forks",
    "line": "Forks are duplicate copies of repositories created inside your own GitHub profile, allowing safe modifications.",
    "think": "Photocopying a cookbook. You copy pages, edit recipe details on your page copy, without modifying the library's cookbook.",
    "example": "Clicking 'Fork' on GitHub to copy the Express repository to your account, then cloning it locally.",
    "result": "Allows safe, isolated development on third-party codebases.",
    "remember": "Forks remain connected to the upstream repository, allowing pull requests later.",
    "summary": "* Forks clone repos to your profile.\n* Enables changes without write access to upstream.\n* Synced using remote upstream configurations.",
    "diagram": "Upstream (Original) -> [ Fork Button ] -> Origin (Your profile clone) -> Local Clone",
    "practice": "Fork a sandbox repository on GitHub and clone it to your local workspace.",
    "challenge": "Configure your local clone to track both your origin fork and the upstream original repository.",
    "example_code": "# Add upstream original remote tracker\ngit remote add upstream https://github.com/original-author/repo.git\n\n# Verify remote branches list\ngit remote -v",
    "ext": "sh"
  },
  "04-Issues": {
    "title": "GitHub Issues",
    "line": "Issues track bug reports, feature requests, and tasks inside GitHub repositories.",
    "think": "An office ticket box. Teammates write tickets describing bugs or proposals, assigning developers to resolve them.",
    "example": "Creating an issue detailing a bug with steps to reproduce and system specs.",
    "result": "Coordinates task lists and bug tracking workflows.",
    "remember": "Always check if a similar issue already exists before opening a new one.",
    "summary": "* Issues log bugs and requests.\n* Markdown formatting improves ticket readability.\n* Issues serve as open community discussion threads.",
    "diagram": "Identify Bug -> Open Issue Ticket -> Discussion -> Assign Developer",
    "practice": "Write a mock bug report issue containing steps to reproduce and expected results.",
    "challenge": "Search a repository's closed issues to find how a specific bug was resolved in past commits.",
    "example_code": "# Fetch open issues from a repository using GitHub CLI\n# gh issue list --limit 10",
    "ext": "sh"
  },
  "05-Pull-Requests": {
    "title": "Pull Requests",
    "line": "Pull Requests (PR) propose code modifications from your branch to the original upstream repository.",
    "think": "Submitting an article edit to a newspaper editor. You submit your draft; the editor reviews and merges it.",
    "example": "Creating a PR on GitHub to merge your bug-fix branch into the main repository branch.",
    "result": "Triggers code review pipelines and branch merges.",
    "remember": "Always link the issue you solved inside your Pull Request description (e.g. 'Closes #12').",
    "summary": "* PRs propose branch merges.\n* PR descriptions outline changes, tests, and linked issues.\n* Merging is controlled by the repository maintainer.",
    "diagram": "Local Branch -> Push origin -> Create PR -> Review check -> Merged upstream",
    "practice": "Create a branch, edit a file, push changes, and open a mock Pull Request.",
    "challenge": "Explain how to handle merge conflicts that occur during a Pull Request lifecycle.",
    "example_code": "# Create a feature branch\ngit checkout -b feature/my-fix\n\n# Push feature branch to origin\ngit push origin feature/my-fix",
    "ext": "sh"
  },
  "06-Code-Reviews": {
    "title": "Code Reviews",
    "line": "Code Reviews are collaborative audits where maintainers review pull request codes for style and performance.",
    "think": "A peer essay review. A classmate checks grammar, logic, and suggests formatting updates before submission.",
    "example": "Responding to feedback comments on your GitHub Pull Request, adjusting variable structures.",
    "result": "Improves codebase quality and aligns formatting layouts.",
    "remember": "Reviews check the code, not your value! Be open to feedback and suggestions.",
    "summary": "* Peer review checks code quality.\n* Automated linters and tests enforce style rules.\n* Review loops ensure robust commits.",
    "diagram": "Create PR -> Review comments -> Apply changes -> Re-push branch -> Merged",
    "practice": "Conduct a mock code review on a classmate's code block, suggesting three improvements.",
    "challenge": "Configure a GitHub Actions workflow that runs lint checks automatically on pull request events.",
    "example_code": "# Mocking a code review suggestion review\n# 1. Look for nested callback loops (suggest async/await)\n# 2. Look for hardcoded credentials (suggest process.env)\n# 3. Look for empty catch blocks (suggest console.error)",
    "ext": "sh"
  },
  "07-Good-First-Issue": {
    "title": "Good First Issue",
    "line": "Good First Issue tags label lightweight issues ideal for first-time open-source contributors.",
    "think": "Welcome tasks. Simple tasks like fixing spelling typos, adding tests, or formatting documentation.",
    "example": "Searching label:good-first-issue to locate easy tasks like updating README installation steps.",
    "result": "Helps beginners onboarding onto open-source codebases.",
    "remember": "Do not attempt complex feature additions until you have successfully merged small fixes first.",
    "summary": "* Labels identify beginner-friendly tickets.\n* Focuses on simple fixes and code cleanups.\n* Great for getting familiar with project guidelines.",
    "diagram": "Filter Label -> Select Typo/Doc Issue -> Fork and fix -> Push first merge",
    "practice": "Locate three repositories containing open issues labeled 'good-first-issue'.",
    "challenge": "Solve an issue involving documentation cleanup or simple unit testing in a mock repository.",
    "example_code": "# Search GitHub for Javascript repos with good-first-issue labels\n# Open in browser: https://github.com/search?q=label%3A\"good-first-issue\"+language%3Ajavascript+state%3Aopen",
    "ext": "sh"
  },
  "08-Contribution-Workflow": {
    "title": "Contribution Workflow",
    "line": "The step-by-step cycle of modifying upstream repositories: Forking, Cloning, Branching, Committing, and PR submission.",
    "think": "A flight checklist. Follow the sequence strictly to avoid branch mess and build errors.",
    "example": "Fork -> Clone -> Checkout branch -> Code -> Push -> PR.",
    "result": "Ensures clean, organized open-source code submissions.",
    "remember": "Never edit code directly on your fork's main branch! Always create a feature branch first.",
    "summary": "* Fork and clone upstream to local.\n* Create feature branch (git checkout -b).\n* Commit changes, push to origin fork, and submit Pull Request.",
    "diagram": "Fork -> Clone -> Branch -> Commit -> Push -> PR -> Merge",
    "practice": "Write a step-by-step checklist of Git commands for the contribution workflow.",
    "challenge": "Configure your local environment to fetch upstream changes, syncing your fork's main branch with the original repository.",
    "example_code": "# Sync fork's main branch with upstream main\ngit checkout main\ngit fetch upstream\ngit merge upstream/main\ngit push origin main",
    "ext": "sh"
  },
  "09-Open-Source-Portfolio": {
    "title": "Open Source Portfolio",
    "line": "How to showcase your open-source contributions on your resume and portfolio pages.",
    "think": "A badge of honor. Contribution commits prove you can work on real-world team codebases.",
    "example": "Listing merged pull requests inside your resume Projects section.",
    "result": "Boosts credibility during hiring rounds.",
    "remember": "Merged contributions to popular packages hold high weight in developer interviews.",
    "summary": "* Pin open-source contributions on GitHub profiles.\n* Describe merged PR fixes inside resumes.\n* Explaining code reviews shows teamwork capacity.",
    "diagram": "Merged PR -> GitHub Pin -> Resume bullet -> Tech Interview topic",
    "practice": "Draft a resume bullet point describing a mock code contribution to a web framework.",
    "challenge": "Build a custom profile markdown widget listing links to your merged GitHub pull requests.",
    "example_code": "{\n  \"OS Portfolio Entry\": {\n    \"Project\": \"Express.js Framework\",\n    \"Merged PR\": \"Fix: Optimized route parameters parsing\",\n    \"Impact\": \"Reduced URL processing overhead by 12% across Express backend servers\"\n  }\n}",
    "ext": "json"
  },
  "10-First-Contribution-Project": {
    "title": "First Contribution Project",
    "line": "A hands-on sandbox project designed to practice complete open-source contribution workflows safely.",
    "think": "A flight simulator. You practice forking, commits, pushes, and merges on a mock upstream project.",
    "example": "Adding your name to a public list of contributors inside a mock repo README.",
    "result": "Builds confidence in Git workflows before real contributions.",
    "remember": "Ensure you follow style guidelines, formatting spaces, and commits conventions.",
    "summary": "* Mock repository for contribution practice.\n* Fork, clone, branch, commit, push, and PR.\n* Verify successful merge.",
    "diagram": "Mock Repo -> Fork -> Add contributor name -> Pull Request -> Approved merge",
    "practice": "Complete a mock pull request adding your details to a local sandbox project list.",
    "challenge": "Resolve a mock merge conflict inside your pull request workspace and finalize the branch merge.",
    "example_code": "# Clone sandboxed test repository\ngit clone https://github.com/sandbox/first-contribution.git\ncd first-contribution\n\n# Create feature branch\ngit checkout -b add-my-profile\n\n# Edit profile list ...\n# Save and commit\ngit add .\ngit commit -m \"docs: add contributor profile\"\ngit push origin add-my-profile",
    "ext": "sh"
  }
};
const DSA_DATA = {
  "01-Big-O-Basics": {
    "title": "Big O Notation Basics",
    "line": "Big O Notation measures the performance speed (Time Complexity) and memory usage (Space Complexity) of algorithms as inputs grow.",
    "think": "Shipping speed scales. O(1) is sending a text (same speed regardless of length). O(N) is counting pages (takes longer as pages count grows).",
    "example": "Reading array index is O(1); looping through an array is O(N); nested loop is O(N^2).",
    "result": "Enables code performance optimizations.",
    "remember": "Focus on how time grows, not physical millisecond speeds (which depend on hardware).",
    "summary": "* O(1): Constant time (fastest).\n* O(N): Linear time (loops).\n* O(N^2): Quadratic time (nested loops).\n* Space Complexity measures memory growth.",
    "diagram": "Input Size (X-Axis) vs Time (Y-Axis) charts",
    "practice": "Identify the time complexity of a loop that doubles an input array.",
    "challenge": "Explain: Where is this used in real web development? Answer: Evaluating the cost of nested array maps in React component loops, preventing layout lag on large grids.",
    "example_code": "// Time Complexity comparison\nfunction constantTime(arr) {\n  return arr[0]; // O(1) - Constant\n}\n\nfunction linearTime(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    console.log(arr[i]); // O(N) - Linear\n  }\n}\n\nfunction quadraticTime(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length; j++) {\n      console.log(arr[i], arr[j]); // O(N^2) - Quadratic\n    }\n  }\n}",
    "ext": "js"
  },
  "02-Arrays": {
    "title": "DSA Arrays",
    "line": "Arrays are contiguous memory blocks storing collections of items indexed from 0.",
    "think": "A row of numbered lockers. Accessing locker #3 is instant (O(1)), but inserting a new locker at the front shifts all lockers down (O(N)).",
    "example": "Inserting at front is O(N) shift; pushing to end is O(1) push.",
    "result": "Enables linear data listings operations.",
    "remember": "Array access is fast, but inserting or deleting elements in the middle/front is slow.",
    "summary": "* Contiguous memory blocks.\n* Index lookup: O(1).\n* Insert/Delete at front: O(N) (forces shift).\n* Push to end: O(1).",
    "diagram": "Array Indices [ 0: ItemA, 1: ItemB, 2: ItemC ]",
    "practice": "Write an algorithm that inserts an element at the beginning of an array manually without unshift().",
    "challenge": "Explain: Where is this used in real web development? Answer: Rendering product catalog cards feeds, maintaining cart lists, and processing inputs lists.",
    "example_code": "// Array insertion cost simulation\nconst fruits = ['Banana', 'Orange'];\n\n// O(1) Push - constant time\nfruits.push('Apple'); \n\n// O(N) Unshift - linear time (shifts Banana and Orange down)\nfruits.unshift('Mango');\nconsole.log(fruits);",
    "ext": "js"
  },
  "03-Strings": {
    "title": "DSA Strings",
    "line": "Strings are sequences of characters used to store and manipulate text data.",
    "think": "A string of alphabetical beads. Finding specific letters, reversing order, or splitting sections.",
    "example": "Reversing text using character pointers.",
    "result": "Enables robust text parsing manipulations.",
    "remember": "In JavaScript, strings are immutable. Every string modification creates a new string in memory.",
    "summary": "* Sequences of characters.\n* Immutable in JS.\n* Operations: reverse, split, search, match.",
    "diagram": "String: 'H' -> 'e' -> 'l' -> 'l' -> 'o'",
    "practice": "Write a function that checks if a string is a palindrome (reads same forward and backward).",
    "challenge": "Explain: Where is this used in real web development? Answer: Parsing user input forms, cleaning search query filters, and routing path variables parsing.",
    "example_code": "// Palindrome Checker O(N)\nfunction isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  let left = 0;\n  let right = clean.length - 1;\n  while (left < right) {\n    if (clean[left] !== clean[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\nconsole.log(\"Is 'racecar' palindrome?\", isPalindrome(\"racecar\"));",
    "ext": "js"
  },
  "04-Objects": {
    "title": "DSA Objects",
    "line": "Objects are key-value stores allowing fast property lookups in constant time.",
    "think": "A telephone directory. You lookup a name (key) to get their number (value) instantly.",
    "example": "const user = { name: 'Alice' }; user.name -> returns 'Alice' O(1).",
    "result": "Enables fast attribute indexing lookups.",
    "remember": "Object keys must be unique. Adding duplicate keys overrides the existing value.",
    "summary": "* Key-value attribute maps.\n* Instant lookup, insert, and delete: O(1).\n* Keys are unique string strings.",
    "diagram": "Object [ Key: 'id' -> Value: 101, Key: 'role' -> Value: 'dev' ]",
    "practice": "Build a count mapper object that counts the occurrence of characters in a string.",
    "challenge": "Explain: Where is this used in real web development? Answer: Storing application config states, managing user session objects, and translating API JSON payloads.",
    "example_code": "// Character Frequency Counter O(N)\nfunction charCount(str) {\n  const map = {};\n  for (let char of str.toLowerCase()) {\n    if (/[a-z]/.test(char)) {\n      map[char] = (map[char] || 0) + 1; // O(1) lookup & set\n    }\n  }\n  return map;\n}\nconsole.log(charCount(\"Hello JavaScript!\"));",
    "ext": "js"
  },
  "05-HashMaps": {
    "title": "DSA HashMaps",
    "line": "HashMaps are dictionary structures mapping keys to array indices using hashing functions.",
    "think": "Locker key allocation: a name is hashed into a locker number, where your belongings are stored.",
    "example": "Using Map classes in JS to store complex keys connections.",
    "result": "Enables fast key-value lookups with non-string keys.",
    "remember": "JavaScript Maps preserve key insertion order, whereas standard Objects do not.",
    "summary": "* Key-value map using hash functions.\n* Average lookup, insert, delete: O(1).\n* Accepts any data type as key values.",
    "diagram": "Key -> Hashing Function -> Array Index -> Value",
    "practice": "Build a mock HashMap class containing put() and get() methods.",
    "challenge": "Explain: Where is this used in real web development? Answer: Building router maps in Express, mapping user IDs to sockets in chat servers, and caching database queries.",
    "example_code": "// JS Map usage comparison\nconst userRoles = new Map();\nuserRoles.set({ id: 1 }, 'Admin'); // Object as Key\nuserRoles.set('guest', 'User');\n\nconsole.log(userRoles.get('guest')); // 'User'\nconsole.log(userRoles.size); // 2",
    "ext": "js"
  },
  "06-Stacks": {
    "title": "DSA Stacks",
    "line": "Stacks are Last-In, First-Out (LIFO) structures where additions and removals occur at the same end.",
    "think": "A stack of dinner plates. You pile plates on top (push) and remove plates from the top (pop).",
    "example": "Browser history navigation: back button pops the latest visited page.",
    "result": "Enables tracking of sequential state rollbacks.",
    "remember": "Additions and removals in a Stack are O(1) constant time operations.",
    "summary": "* Last-In, First-Out (LIFO).\n* Push O(1) adds to top.\n* Pop O(1) removes from top.\n* Peek checks top element.",
    "diagram": "Top -> PlateC -> PlateB -> PlateA -> Bottom",
    "practice": "Implement a Stack class using a JavaScript array under the hood.",
    "challenge": "Explain: Where is this used in real web development? Answer: Browser back/forward navigation histories, undo controllers in text editor panels, and call stacks inside JS engines.",
    "example_code": "// Stack LIFO implementation\nclass Stack {\n  constructor() { this.items = []; }\n  push(element) { this.items.push(element); } // O(1)\n  pop() { return this.items.pop(); } // O(1)\n  peek() { return this.items[this.items.length - 1]; }\n}\n\nconst history = new Stack();\nhistory.push(\"/home\");\nhistory.push(\"/about\");\nconsole.log(\"Back clicked:\", history.pop()); // \"/about\"",
    "ext": "js"
  },
  "07-Queues": {
    "title": "DSA Queues",
    "line": "Queues are First-In, First-Out (FIFO) structures where items are added at the rear and removed from the front.",
    "think": "A line of people at a movie ticket counter. The first person in line gets ticket service first (FIFO).",
    "example": "Print jobs processing or email delivery pipelines.",
    "result": "Enables sequential task scheduling architectures.",
    "remember": "Use queues when tasks must run in the exact order they arrive.",
    "summary": "* First-In, First-Out (FIFO).\n* Enqueue O(1) adds to rear.\n* Dequeue O(1) removes from front.\n* Prevents request starvation.",
    "diagram": "Front -> Customer1 -> Customer2 -> Customer3 -> Rear",
    "practice": "Implement a Queue class using an object pointer tracker to ensure O(1) dequeues.",
    "challenge": "Explain: Where is this used in real web development? Answer: Task queues processing log logs, async request queues in database connection pools, and email notification managers.",
    "example_code": "// Queue FIFO implementation\nclass Queue {\n  constructor() { this.items = {}; this.front = 0; this.rear = 0; }\n  enqueue(item) { this.items[this.rear] = item; this.rear++; } // O(1)\n  dequeue() {\n    if (this.front === this.rear) return null;\n    const item = this.items[this.front];\n    delete this.items[this.front];\n    this.front++;\n    return item; // O(1)\n  }\n}\n\nconst printer = new Queue();\nprinter.enqueue(\"Doc1.pdf\");\nprinter.enqueue(\"Doc2.pdf\");\nconsole.log(\"Printing:\", printer.dequeue()); // \"Doc1.pdf\"",
    "ext": "js"
  },
  "08-LinkedLists": {
    "title": "DSA LinkedLists",
    "line": "LinkedLists are linear sequences of node elements connected by pointers, avoiding contiguous memory allocations.",
    "think": "A treasure hunt map. Each clue (node) tells you the treasure location (value) and points to where the next clue is (pointer).",
    "example": "Node mapping: { value: 10, next: { value: 20, next: null } }.",
    "result": "Enables flexible, dynamic memory allocations.",
    "remember": "LinkedLists do not have indexes; looking up an item requires traversing from the head node (O(N)).",
    "summary": "* Nodes connected via next pointers.\n* Insert/Delete at head is O(1) fast.\n* Lookup access is O(N) slow (requires traversal).\n* Avoids contiguous memory constraints.",
    "diagram": "Head -> Node (Val: 10, Next) -> Node (Val: 20, Next) -> Null",
    "practice": "Write an algorithm to insert a node at the head of a LinkedList.",
    "challenge": "Explain: Where is this used in real web development? Answer: Implementing undo/redo state histories, managing component rendering updates lists, and building LRU caching tools.",
    "example_code": "// LinkedList Node creation\nclass Node {\n  constructor(value) { this.value = value; this.next = null; }\n}\n\nclass LinkedList {\n  constructor() { this.head = null; }\n  insertAtHead(val) {\n    const newNode = new Node(val);\n    newNode.next = this.head;\n    this.head = newNode; // O(1)\n  }\n}\n\nconst list = new LinkedList();\nlist.insertAtHead(20);\nlist.insertAtHead(10);\nconsole.log(list.head);",
    "ext": "js"
  },
  "09-Recursion": {
    "title": "DSA Recursion",
    "line": "Recursion is a programming technique where a function calls itself to solve smaller sub-problems.",
    "think": "Russian nesting dolls. You open a doll (function call) to find a smaller doll inside, stopping only at the base doll (base case).",
    "example": "Calculating factorials or walking nested comment threads.",
    "result": "Enables elegant parsing of nested tree structures.",
    "remember": "Always define a base case, or your function will loop infinitely and crash with a Stack Overflow error!",
    "summary": "* Functions calling themselves.\n* Requires Base Case (stop condition).\n* Requires Recursive Step (moves towards base case).\n* Uses the call stack structure.",
    "diagram": "factorial(3) -> 3 * factorial(2) -> 2 * factorial(1) -> 1 (Base case)",
    "practice": "Write a recursive function that calculates the sum of numbers from 1 to N.",
    "challenge": "Explain: Where is this used in real web development? Answer: Rendering nested comments threads in blogs, walking folders structures, and parsing tree-like DOM elements nodes.",
    "example_code": "// Recursive Factorial Calculation\nfunction factorial(n) {\n  if (n <= 1) return 1; // Base case\n  return n * factorial(n - 1); // Recursive call\n}\nconsole.log(\"Factorial of 4:\", factorial(4)); // 24",
    "ext": "js"
  },
  "10-Sorting-Basics": {
    "title": "Sorting Basics",
    "line": "Sorting is the process of arranging data in a specific order (ascending or descending).",
    "think": "Sorting playing cards in your hand. You compare cards, swap locations, and line them up from low to high.",
    "example": "Arranging prices list from cheapest to most expensive.",
    "result": "Orders raw query arrays systematically.",
    "remember": "JavaScript's default Array.prototype.sort() sorts elements alphabetically, not numerically! [10, 2].sort() is [10, 2] unless you use comparison helpers.",
    "summary": "* Organizes data lists ascending/descending.\n* O(N^2): Bubble sort, Insertion sort (slow).\n* O(N log N): Merge sort, Quick sort (fast).\n* Numeric sort in JS requires callback helpers.",
    "diagram": "[ 5, 2, 9 ] ---> Bubble Sort passes ---> [ 2, 5, 9 ]",
    "practice": "Implement a basic Bubble Sort algorithm that sorts an array of numbers.",
    "challenge": "Explain: Where is this used in real web development? Answer: Ordering ecommerce products by price, sorting blog articles by publication dates, and ranking leaderboards metrics.",
    "example_code": "// JS numeric sort helper O(N log N)\nconst prices = [23.99, 5.50, 150.00, 42.00];\n\n// Ascending Sort callback\nprices.sort((a, b) => a - b);\nconsole.log(\"Ascending Prices:\", prices);\n\n// Descending Sort callback\nprices.sort((a, b) => b - a);\nconsole.log(\"Descending Prices:\", prices);",
    "ext": "js"
  },
  "11-Searching-Basics": {
    "title": "Searching Basics",
    "line": "Searching is the process of locating a target value within a data collection.",
    "think": "Searching a list. Linear Search checks one by one. Binary Search splits a pre-sorted phonebook page-by-page (checking left/right).",
    "example": "Linear search checks every index; Binary search splits pre-sorted list in half recursively.",
    "result": "Retrieves target elements from database datasets.",
    "remember": "Binary search is O(log N) fast but requires the array to be pre-sorted before querying.",
    "summary": "* Linear Search O(N) matches items sequentially.\n* Binary Search O(log N) halves pre-sorted search pools.\n* Efficient searches prevent server lags.",
    "diagram": "Linear Scan vs Binary Search halving branches",
    "practice": "Implement a Binary Search algorithm returning the index of a target number in a sorted array.",
    "challenge": "Explain: Where is this used in real web development? Answer: Auto-complete search inputs dropdowns, database lookup queries, and user credentials checks.",
    "example_code": "// Binary Search implementation O(log N)\nfunction binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1; // Not found\n}\nconsole.log(\"Index of 30:\", binarySearch([10, 20, 30, 40], 30)); // 2",
    "ext": "js"
  },
  "12-Problem-Solving-Patterns": {
    "title": "Problem Solving Patterns",
    "line": "Problem Solving Patterns are algorithmic templates like Two Pointers or Sliding Window used to solve coding problems efficiently.",
    "think": "Blueprint tactics. Instead of double-looping brute-force (O(N^2)), you use a pointer on each end (O(N)) to save cycles.",
    "example": "Two Pointers compares items from both ends. sliding Window tracks array subsets.",
    "result": "Enables optimal coding interview solutions.",
    "remember": "Brute-force nested loops are often a red flag in coding interviews. Always think about O(N) alternatives.",
    "summary": "* Two Pointers: Left and right pointers converge, O(N).\n* Frequency Counters: Hash maps counts occurrences, O(N).\n* Sliding Window: Maintains subset ranges, O(N).\n* Avoids nested loop overheads.",
    "diagram": "PointerL -> [ 1, 2, 3, 4 ] <- PointerR",
    "practice": "Write an algorithm checking if a sorted array has two numbers summing to a target using Two Pointers.",
    "challenge": "Explain: Where is this used in real web development? Answer: Finding duplicate user contacts, tracking network data sliding windows logs, and optimizing string parsing filters.",
    "example_code": "// Two Pointers Sum Checker O(N)\nfunction hasPairWithSum(sortedArr, target) {\n  let left = 0;\n  let right = sortedArr.length - 1;\n  while (left < right) {\n    const sum = sortedArr[left] + sortedArr[right];\n    if (sum === target) return true;\n    if (sum < target) left++;\n    else right--;\n  }\n  return false;\n}\nconsole.log(hasPairWithSum([1, 2, 4, 7], 9)); // true",
    "ext": "js"
  }
};
const DEVELOPER_MINDSET_DATA = {
  "01-How-To-Learn": {
    "title": "How to Learn Programming",
    "line": "Programming is not about memorizing syntax; it is about building mental models and active problem-solving.",
    "think": "Learning to build furniture. You do not just read wood catalogs; you grab tools, cut wood, and build chairs.",
    "example": "Coding along with lessons, then building a custom project from scratch using the same concepts.",
    "result": "Accelerates learning speeds and boosts skills retention.",
    "remember": "Active practice (coding on your own) beats passive consumption (watching videos) by 10x.",
    "summary": "* Shift from passive reading to active coding.\n* Break topics into atomic components.\n* Build simple projects using newly acquired concepts.",
    "diagram": "Read/Watch -> Code along -> Break & debug -> Build solo -> Retained",
    "practice": "Commit to building one minor project independently after every technology section.",
    "challenge": "Outline your personal learning strategy, explaining how you will practice active recall and spacing.",
    "example_code": "{\n  \"Active Learning Checklist\": [\n    \"1. Never copy-paste code. Type it line by line to build muscle memory.\",\n    \"2. Explain code logic in simple terms to yourself or a peer.\",\n    \"3. Modify code examples to see what breaks and why.\",\n    \"4. Build a minor project using the new concept without reference guides.\"\n  ]\n}",
    "ext": "json"
  },
  "02-How-To-Debug": {
    "title": "How to Debug Code",
    "line": "Debugging is a systematic, scientific process of isolating variables to find the cause of a code crash.",
    "think": "An auto mechanic diagnosing engine problems: checking spark plugs, testing fuel line, checking diagnostic codes.",
    "example": "Reading stack traces, adding consoles logs, checking variables, isolating code blocks.",
    "result": "Reduces time spent blocked on programming errors.",
    "remember": "Error messages are not insults—they are maps pointing directly to the problem line! Read them carefully.",
    "summary": "* Read error messages and trace locations.\n* Isolate variables using console.log() or breakpoints debuggers.\n* Change one variable at a time when testing fixes.",
    "diagram": "Crash occurs -> Read Error -> Isolate file line -> Console/Inspect variables -> apply fix -> verify",
    "practice": "Demonstrate how to isolate a bug using console.log() in a simple script.",
    "challenge": "Write out a step-by-step checklist explaining how to resolve a 'ReferenceError: X is not defined' crash.",
    "example_code": "{\n  \"Debugging Checklist\": [\n    \"1. Read the error message name and line location.\",\n    \"2. Identify the inputs that triggered the crash.\",\n    \"3. Add console.log statements to print state values before the crash line.\",\n    \"4. Isolate the block: write a minimal script to verify if the issue persists.\",\n    \"5. Apply a fix and dry-run code with edge cases.\"\n  ]\n}",
    "ext": "json"
  },
  "03-How-To-Read-Documentation": {
    "title": "How to Read Documentation",
    "line": "Documentation is the official user manual for a library, technology, or programming language.",
    "think": "Reading a lego assembly manual. You scan parts lists, look at diagrams, and follow sequence instructions.",
    "example": "Going directly to the MDN reference site to check parameter definitions for Array.prototype.reduce().",
    "result": "Builds independence, enabling you to learn new technologies without video guides.",
    "remember": "Never rely purely on third-party tutorials. Technology documentation is the single source of truth.",
    "summary": "* Start with the 'Getting Started' or 'Installation' guides.\n* Read API reference pages to understand function parameters.\n* Use search features to locate code examples.",
    "diagram": "Docs -> Installation -> Core Guides -> API Reference -> Code examples",
    "practice": "Locate and read the official Express documentation section on route parameters.",
    "challenge": "Learn how to use a new third-party utility package (like lodash) purely by reading its GitHub README.",
    "example_code": "{\n  \"Docs Reading Strategy\": [\n    \"1. Scan: Read the quickstart code to understand core setups.\",\n    \"2. Locate: Find parameters lists to check types and inputs.\",\n    \"3. Sandbox: Open code playgrounds to run documentation examples.\",\n    \"4. Search: Look up error logs directly inside repository issues threads.\"\n  ]\n}",
    "ext": "json"
  },
  "04-How-To-Ask-Good-Questions": {
    "title": "How to Ask Good Questions",
    "line": "Asking structured, clear questions helps teammates diagnose your bugs and respect your effort.",
    "think": "Visiting a doctor. You do not just call: 'I feel sick, fix me.' You describe symptoms, timeline, and treatments tried.",
    "example": "Asking help by detailing: 1. Expected behavior, 2. Actual error trace, 3. Code snippet, 4. Fixes attempted.",
    "result": "Reduces blocking time and improves team collaborations.",
    "remember": "Provide code snippets as searchable text or links, never send screenshots of code!",
    "summary": "* Define the problem and expected behavior.\n* Include the exact stack trace error log.\n* Provide a minimal, reproducible code example.\n* Explain what you already tried to resolve it.",
    "diagram": "Problem -> Explain Expected -> Paste Error Trace -> Paste code snippet -> List attempted fixes",
    "practice": "Draft a mock help request for a database connection issue, following guidelines.",
    "challenge": "Format a code help post on Discord or stackOverflow with proper markdown syntax highlighting.",
    "example_code": "{\n  \"Help Request Template\": {\n    \"Title\": \"Error: Mongoose connection fails locally on port 27017\",\n    \"Description\": \"Attempting to connect Express server locally to MongoDB but receiving connection timeout.\",\n    \"Error Log\": \"MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017\",\n    \"Code Snippet\": \"mongoose.connect('mongodb://localhost:27017/db')\",\n    \"Attempted Fixes\": \"Verified mongod service is running locally, whitelisted port 27017.\"\n  }\n}",
    "ext": "json"
  },
  "05-Avoid-Tutorial-Hell": {
    "title": "How to Avoid Tutorial Hell",
    "line": "Tutorial Hell is the cycle of passively watching tutorials without building original projects.",
    "think": "Reading swimming manuals. You can read 100 books, but you only learn to swim by jumping in the pool.",
    "example": "Stopping a video series midway to build a simple app using the parts you just learned.",
    "result": "Builds coding independence and software design muscle.",
    "remember": "Struggling with code is where real learning happens! Easy tutorial follows build false confidence.",
    "summary": "* passive consumption builds false confidence.\n* Break away from guides to build custom code.\n* Embrace bugs—they are critical milestones in coding growth.",
    "diagram": "Tutorial Follow -> Break away -> Solo coding struggle -> debugging success -> actual growth",
    "practice": "Pick a simple project idea (like a recipe book) and start building it without any video guides.",
    "challenge": "Outline a plan to build an app where you force yourself to look up documentation instead of watching tutorials.",
    "example_code": "{\n  \"Escape Plan\": [\n    \"1. Stop watching. Open your IDE editor with a blank workspace.\",\n    \"2. Choose a project featuring CRUD operations (e.g. library registry).\",\n    \"3. Outline core elements: data models, routes, layouts.\",\n    \"4. Build block-by-block, resolving issues using MDN/Express documentation.\"\n  ]\n}",
    "ext": "json"
  },
  "06-Building-Projects": {
    "title": "How to Build Projects",
    "line": "Building projects is the single most effective way to learn programming and prove your coding skills.",
    "think": "Building a house. You map the layout, pour the foundation, raise walls, and install roof shingles.",
    "example": "Developing a personal task manager, starting from data models, then routes, then forms, then styling.",
    "result": "Produces portfolio-ready applications.",
    "remember": "Always start small! A finished basic app is better than an unfinished complex dashboard.",
    "summary": "* Break projects down into atomic milestones.\n* Build features incrementally (e.g. data models -> routes -> UI).\n* Deploy early and iterate on design feedback.",
    "diagram": "Idea -> Scope Checklist -> Backend Routes -> Frontend UI -> Deploy -> Iterate",
    "practice": "Draft a feature checklist and timeline roadmap for your next portfolio project.",
    "challenge": "Build a minimal viable product (MVP) of a notes application in under 3 hours, focusing on CRUD.",
    "example_code": "{\n  \"MVP Build Checklist\": [\n    \"1. Define database attributes (e.g. title: String, content: String).\",\n    \"2. Create Express endpoints (GET list, POST item, DELETE item).\",\n    \"3. Build simple React client listing items and submitting forms.\",\n    \"4. Deploy code to Render and whitelisted database clusters.\"\n  ]\n}",
    "ext": "json"
  },
  "07-Time-Management": {
    "title": "Time Management",
    "line": "Manage your coding study sessions using time-blocking, scheduling, and minimizing distractions.",
    "think": "Training for a marathon. You schedule dedicated, focused blocks, tracking metrics to keep consistency.",
    "example": "Using Pomodoro timers: 25 minutes of focused coding, followed by a 5-minute break.",
    "result": "Reduces burnout risk and increases daily coding progress.",
    "remember": "Two hours of focused coding with your phone muted beats 6 hours of distracted learning.",
    "summary": "* Block dedicated study slots on calendars.\n* Mute phone notifications during focused coding sessions.\n* Keep code sessions manageable to maintain long-term momentum.",
    "diagram": "Schedule -> Time-block -> focused focus pomodoro -> Rest breaks -> Consistency",
    "practice": "Create a weekly calendar calendar blocking out dedicated coding study sessions.",
    "challenge": "Implement a personal study diary tracking hours coded and topics completed.",
    "example_code": "{\n  \"Pomodoro Protocol\": [\n    \"1. Set timer to 25 minutes.\",\n    \"2. Close Slack, social tabs, and mute phone.\",\n    \"3. Focus solely on one coding task (e.g. writing Mongoose routes).\",\n    \"4. Take a 5-minute physical break when the timer runs.\"\n  ]\n}",
    "ext": "json"
  },
  "08-Consistency": {
    "title": "Power of Consistency",
    "line": "Consistency is coding regularly (even for 30 minutes a day) to build muscle memory and habits.",
    "think": "Water carving stone. A small, steady stream carves rock over time, while a sudden flood just runs off.",
    "example": "Committing to the #100DaysOfCode challenge, writing commits daily.",
    "result": "Transforms coding from a chore into a daily habit.",
    "remember": "Coding 1 hour every single day is 10x better than coding 10 hours once a week.",
    "summary": "* Habits are built through regular practice.\n* Daily small milestones compound into massive long-term growth.\n* Consistency beats talent and speed in code learning.",
    "diagram": "Daily 1-hour code -> compound learning -> habits formed -> master developer",
    "practice": "Establish a daily coding routine, defining the exact time and place you will code.",
    "challenge": "Code and make at least one commit to GitHub every day for 14 consecutive days.",
    "example_code": "{\n  \"Consistency Metrics\": {\n    \"Daily Target\": \"1 hour of coding\",\n    \"Commit Requirement\": \"Push at least one change to GitHub daily\",\n    \"Tracking\": \"Maintain green contribution grid blocks\"\n  }\n}",
    "ext": "json"
  },
  "09-Problem-Solving": {
    "title": "Problem Solving Process",
    "line": "Solve programming problems systematically: understand inputs, plan logic, write code, and optimize.",
    "think": "Solving puzzles. You do not just throw pieces together; you sort borders, group colors, and align segments.",
    "example": "Breaking a complex database search filter query into simple steps before writing routes.",
    "result": "Enables you to tackle complex technical challenges systematically.",
    "remember": "Do not write code until you fully understand the problem! Outline your logic in pseudocode first.",
    "summary": "* Read the prompt completely.\n* Identify inputs, outputs, and edge cases.\n* Plan logic using paper or pseudocode comments.\n* Code the basic solution, then refactor for performance.",
    "diagram": "Problem -> Inputs/Outputs -> Pseudocode -> Code -> Optimize",
    "practice": "Write down the pseudocode logic for an algorithm that finds the largest number in an array.",
    "challenge": "Outline a step-by-step problem-solving strategy for building a complex MERN analytics dashboard.",
    "example_code": "{\n  \"Problem Solving Steps\": [\n    \"1. Define: What are the inputs (request query params) and expected outputs (stats JSON)?\",\n    \"2. Pseudocode: Write comments detailing the Mongoose aggregation stages.\",\n    \"3. Code: Implement match, group, and sort steps block-by-block.\",\n    \"4. Test: Call the route with empty records, verify it returns 0 without crashing.\"\n  ]\n}",
    "ext": "json"
  },
  "10-Growth-Mindset": {
    "title": "Growth Mindset in Tech",
    "line": "A Growth Mindset is the belief that programming ability is built through persistence and effort, not talent.",
    "think": "Weightlifting. The muscle grows when you push against heavy resistance, not when you lift empty bars.",
    "example": "Treating a compiler error crash as a challenge to learn from, rather than a failure.",
    "result": "Prevents impostor syndrome and keeps you motivated during tough bugs.",
    "remember": "Every expert developer was once a beginner who refused to quit when their code crashed.",
    "summary": "* Talents are developed, not pre-packaged.\n* Embrace challenges and errors as learning milestones.\n* View feedback and reviews as avenues for codebase growth.",
    "diagram": "Struggle with bug -> Persistence -> Resolution -> Skills increased -> Growth",
    "practice": "Reflect on a tough programming bug you solved, writing down what you learned from it.",
    "challenge": "Explain how you will maintain a positive growth mindset when facing difficult technical interviews.",
    "example_code": "{\n  \"Growth Mindset Rules\": [\n    \"1. Reframe: 'I don't know this' becomes 'I haven't learned this yet.'\",\n    \"2. Errors: View stack traces as diagnostics guides, not failure notices.\",\n    \"3. Effort: Understand that struggling with code is where learning happens.\",\n    \"4. Feedback: Welcome code reviews as avenues to improve.\"\n  ]\n}",
    "ext": "json"
  }
};

function generateCapstones() {
  const sectionRoot = path.join(BASE_DIR, "13-CAPSTONE-PROJECTS");
  if (fs.existsSync(sectionRoot)) {
    fs.rmSync(sectionRoot, { recursive: true, force: true });
  }
  fs.mkdirSync(sectionRoot, { recursive: true });

  const readmeContent = "# 🏆 Capstone Projects\n\nWelcome to the Capstone Projects directory of MeetTutorials!\n";
  fs.writeFileSync(path.join(sectionRoot, "README.md"), readmeContent, 'utf-8');

  for (const [projName, projData] of Object.entries(CAPSTONE_PROJECTS)) {
    const projDir = path.join(sectionRoot, projName);
    fs.mkdirSync(projDir, { recursive: true });

    const files = {
      "01-quick-guide.md": projData.quick,
      [`02-example.${projData.ext || 'js'}`]: projData.source,
      "03-practice-task.md": projData.practice,
      "04-challenge-task.md": `# Challenge Task: ${projName}\n\n${projData.challenge}`,
      "05-summary.md": projData.summary,
      "06-visual-guide.md": `# Visual Guide: ${projName}\n\n\`\`\`text\n${projData.diagram}\n\`\`\``
    };

    for (const [filename, filecontent] of Object.entries(files)) {
      fs.writeFileSync(path.join(projDir, filename), filecontent, 'utf-8');
    }
    console.log("Generated Capstone Project: " + projDir);
  }
}

function generateDeveloperSetup() {
  const dir = path.join(BASE_DIR, "00-DEVELOPER-SETUP");
  fs.mkdirSync(dir, { recursive: true });
  for (const [file, content] of Object.entries(DEV_SETUP_FILES)) {
    fs.writeFileSync(path.join(dir, file), content, 'utf-8');
    console.log("Created Developer Setup: " + file);
  }
}

function createOtherPlaceholders() {
  for (const section of OTHER_SECTIONS) {
    const secDir = path.join(BASE_DIR, section);
    fs.mkdirSync(secDir, { recursive: true });
    const readmePath = path.join(secDir, "README.md");
    
    const title = section.split("-").slice(1).join(" ");
    const content = `# ${title}

Welcome to the **${title}** section of MeetTutorials!

This section is currently queued for expansion in our upcoming curriculum release.

## Coming Soon in Phase 4+
Stay tuned! Handcrafted, beginner-friendly interactive modules are being actively designed with:
*   Real-world analogies & visual diagrams.
*   Annotated code examples.
*   Interactive practice & challenge tasks.
*   Common mistakes & interview preparation questions.
`;
    fs.writeFileSync(readmePath, content, 'utf-8');
    console.log(`Created placeholder: ${readmePath}`);
  }
}

function cleanLegacyDirectories() {
  const legacyFolders = [
    "d:\\Meet Tutorials\\htmlTutorials",
    "d:\\Meet Tutorials\\cssTutorials",
    "d:\\Meet Tutorials\\javascriptTutorials"
  ];
  for (const folder of legacyFolders) {
    if (fs.existsSync(folder)) {
      try {
        fs.rmSync(folder, { recursive: true, force: true });
        console.log(`Removed legacy folder: ${folder}`);
      } catch (err) {
        console.error(`Could not remove folder ${folder}: ${err.message}`);
      }
    }
  }
}

function main() {
  console.log("Starting MeetTutorials Bootstrap via Node.js (Phase 3 JS Release)...");
  generateRootFiles();
  
  console.log("\n--- GENERATING HTML SECTION ---");
  generateSection("01-HTML", HTML_DATA, {
    "Mini-Project-1-Recipe-Page": {
      readme: `# Mini Project 1: Recipe Page\n\nAn interactive recipe page.`,
      quick: `# Recipe Page\n\nShowcases HTML tags.`,
      source: HTML_DATA["01-Introduction"].example_code,
      practice: "Modify recipe title.",
      challenge: "Add video.",
      summary: "Recipe page teaches document flow.",
      diagram: "HTML Structure"
    },
    "Mini-Project-2-Survey-Form": {
      readme: `# Mini Project 2: Survey Form\n\nAn interactive feedback form.`,
      quick: `# Survey Form\n\nTeaches inputs.`,
      source: HTML_DATA["10-Forms"].example_code,
      practice: "Add select options.",
      challenge: "Add scale.",
      summary: "Forms connect clients to backend.",
      diagram: "Form Elements"
    }
  });
  
  const GrandmaRecipe = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grandma's Secret Chocolate Chip Cookies Recipe</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 20px auto; padding: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    th { background-color: #f4f4f4; }
  </style>
</head>
<body>
  <header>
    <h1>Grandma's Kitchen</h1>
    <nav>
      <a href="#about">About</a> |
      <a href="#recipe">Recipe</a> |
      <a href="#nutrition">Nutrition</a>
    </nav>
  </header>
  <hr>
  <main>
    <section id="about">
      <h2>Grandma's Secret Chocolate Chip Cookies</h2>
      <p>These cookies are <strong>crispy on the edges</strong> and <em>chewy</em> in the center.</p>
      <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500" alt="Freshly baked chocolate chip cookies cooling on a wire rack" width="100%">
    </section>
    <section id="recipe">
      <h3>Ingredients Needed</h3>
      <ul>
        <li>1 cup unsalted butter, softened</li>
        <li>1 cup white granulated sugar</li>
        <li>1 cup packed brown sugar</li>
        <li>2 large eggs</li>
        <li>3 cups all-purpose flour</li>
        <li>2 cups semi-sweet chocolate chips</li>
      </ul>
      <h3>Step-by-Step Instructions</h3>
      <ol>
        <li>Preheat your oven to 375°F (190°C).</li>
        <li>Cream butter and sugar until smooth.</li>
        <li>Beat in the eggs, then mix in flour and chocolate chips.</li>
        <li>Drop large spoonfuls onto cookie sheets.</li>
        <li>Bake for 10 to 12 minutes.</li>
      </ol>
    </section>
  </main>
</body>
</html>`;

  const SurveyFormSource = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MeetTutorials Feedback Survey</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; }
    fieldset { border: 1px solid #ccc; border-radius: 6px; padding: 15px; margin-bottom: 15px; }
    legend { font-weight: bold; }
    label { display: block; margin-top: 10px; }
    button { padding: 10px 15px; background: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <header>
    <h1>Feedback Survey Form</h1>
    <p>Help us improve MeetTutorials by answering a few quick questions!</p>
  </header>
  <main>
    <form action="https://httpbin.org/post" method="POST">
      <fieldset>
        <legend>Personal Information</legend>
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" name="full_name" required>
        <label for="emailaddress">Email Address:</label>
        <input type="email" id="emailaddress" name="email_address" required>
      </fieldset>
      <button type="submit">Submit Feedback</button>
    </form>
  </main>
</body>
</html>`;

  fs.writeFileSync(path.join(BASE_DIR, "01-HTML", "LEVEL-05-PROJECTS", "Mini-Project-1-Recipe-Page", "02-example.html"), GrandmaRecipe, 'utf-8');
  fs.writeFileSync(path.join(BASE_DIR, "01-HTML", "LEVEL-05-PROJECTS", "Mini-Project-2-Survey-Form", "02-example.html"), SurveyFormSource, 'utf-8');

  console.log("\n--- GENERATING CSS SECTION ---");
  generateSection("02-CSS", CSS_DATA, CSS_PROJECTS);
  
  console.log("\n--- GENERATING JAVASCRIPT SECTION ---");
  generateSection("03-JAVASCRIPT", JS_DATA, JS_PROJECTS);

  console.log("\n--- GENERATING DEVELOPER SETUP ---");
  generateDeveloperSetup();

  console.log("\n--- GENERATING GIT SECTION ---");
  generateSection("04-GIT", GIT_DATA, GIT_PROJECTS);

  console.log("\n--- GENERATING GITHUB SECTION ---");
  generateSection("05-GITHUB", GITHUB_DATA, GITHUB_PROJECTS);

  console.log("\n--- GENERATING BOOTSTRAP SECTION ---");
  generateSection("06-BOOTSTRAP", BOOTSTRAP_DATA, BOOTSTRAP_PROJECTS);

  console.log("\n--- GENERATING TAILWIND SECTION ---");
  generateSection("07-TAILWIND", TAILWIND_DATA, TAILWIND_PROJECTS);

  console.log("\n--- GENERATING REACT SECTION ---");
  generateSection("08-REACT", REACT_DATA, REACT_PROJECTS);

  console.log("\n--- GENERATING NODEJS SECTION ---");
  generateSection("09-NODEJS", NODEJS_DATA, NODEJS_PROJECTS);

  console.log("\n--- GENERATING EXPRESSJS SECTION ---");
  generateSection("10-EXPRESSJS", EXPRESSJS_DATA, EXPRESSJS_PROJECTS);

  console.log("\n--- GENERATING MONGODB SECTION ---");
  generateSection("11-MONGODB", MONGODB_DATA, MONGODB_PROJECTS);

  console.log("\n--- GENERATING MERN SECTION ---");
  generateSection("12-MERN", MERN_DATA, MERN_PROJECTS);

  console.log("\n--- GENERATING CAPSTONE PROJECTS ---");
  generateCapstones();

  console.log("\n--- GENERATING INTERVIEW PREP SECTION ---");
  generateSection("14-INTERVIEW-PREP", INTERVIEW_PREP_DATA, {});

  console.log("\n--- GENERATING CHEATSHEETS SECTION ---");
  generateSection("15-CHEATSHEETS", CHEATSHEETS_DATA, {});

  console.log("\n--- GENERATING SYSTEM DESIGN SECTION ---");
  generateSection("16-SYSTEM-DESIGN-BASICS", SYSTEM_DESIGN_DATA, {});

  console.log("\n--- GENERATING CAREER GUIDE SECTION ---");
  generateSection("17-CAREER-GUIDE", CAREER_GUIDE_DATA, {});

  console.log("\n--- GENERATING OPEN SOURCE SECTION ---");
  generateSection("18-OPEN-SOURCE", OPEN_SOURCE_DATA, {});

  console.log("\n--- GENERATING DSA FOR WEB DEVS SECTION ---");
  generateSection("19-DSA-FOR-WEB-DEVS", DSA_DATA, {});

  console.log("\n--- GENERATING DEVELOPER MINDSET SECTION ---");
  generateSection("20-DEVELOPER-MINDSET", DEVELOPER_MINDSET_DATA, {});


  // Wipe out legacy 13-PROJECTS if it exists
  const legacyProjDir = path.join(BASE_DIR, "13-PROJECTS");
  if (fs.existsSync(legacyProjDir)) {
    fs.rmSync(legacyProjDir, { recursive: true, force: true });
    console.log("Removed legacy 13-PROJECTS directory.");
  }
  
  createOtherPlaceholders();
  cleanLegacyDirectories();
  console.log("\nBootstrap completed successfully!");
}

main();
