const linkedin = "https://www.linkedin.com/in/pvarshh/";
const instagram = "https://www.instagram.com/pranav_v2704/";
const discord = "https://discord.com/invite/parney1319";
const github = "https://github.com/pvarshh/";
const leetcode = "https://leetcode.com/u/parney04/";
const find = 'mailto:pvarsh@umich.edu';
const resume = './assets/resume.pdf';
var today = new Date()

about = [
    "<br>",
    "Hey, I'm Pranav Varshney (pvarshh)",
    "<br>",
    "I'm a passionate and driven Computer Science and Statistics student at the University of Michigan, Ann Arbor.",
    "With a solid foundation in advanced computing and data analysis, I am continuously exploring innovative ways to solve",
    "real-world problems through technology.",
    "<br>",
    "My favorite sports to watch are Cricket, Football & Basketball.",
    "My favorite sports to play are Tennis, Table Tennis, & Chess.",
    "<br>",
    "My favorite TV shows are House, Rick and Morty, & Friends.",
    "My favortive movies are The Dark Knight, Marvel Phase III, & Drishyam.",
    "My favorite books are Sherlock Holmes, The Giver, & The Lorien Legacies series.",
    "<br>",
    "Hope you explore & enjoy this website! ",
    "<br>"
  ];

banner = [
    "<br>",
    '<span class = "index">' + String(today) + '</span>',
    '<span class="index">pvarshh </span>',
    "<br>",

    "<br>",
    '<span class="color2">Welcome, Hope you enjoy TermNav</span>',
    "<span class=\"color2\">For commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
    "<br>",
]


// Help Commands
help = [
    "<br>",
    '<span class="command">pvarshh</span>         About Me',
    '<span class="command">education</span>       View my education',
    '<span class="command">experiences</span>     View my experiences',
    '<span class="command">projects</span>        View my projects',
    '<span class="command">social</span>          Display social networks',
    '<span class="command">email</span>           Reach out to me via email',
    '<span class="command"> help</span>            Open the help menu',
    '<span class="command"> history</span>         View command history',
    '<span class="command"> clear</span>           Clear the terminal',
    '<span class="command"> exit</span>            Close the tab and exit', 
    "<br>",
];

// Social
social = [
    "<br>",
    "Enter the Name of Platform or Just simply click on Username ...",
    "<br>",
    "|platform Name|   |Username|",
    "<br>",
    'linkedin          <a href="' + linkedin + '" target="_blank">pvarshh' + "</a>",
    'github            <a href="' + github + '" target="_blank">pvarshh' + "</a>",
    'instagram         <a href="' + instagram + '" target="_blank">pranav_v2704' + '</a>',
    'discord           <a href="' + discord + '" target="_blank">parney1319' + '</a>',
    'leetcode          <a href="' + leetcode + '" target="_blank">parney04' + '</a>',
    'resume            <a href="' + resume + '" target="_blank">resume' + '</a>',
    "<br>"
];

education = [
    "<br>",
    '<span class="command">University of Michigan - Ann Arbor </span>',
    'Bachelors of Science: Computer Science & Statistics; Minor: Electrical Engineering',
    '<br>',
    '<span class="command">Relevant Coursework:</span>',
    '+ EECS 376: Computer Theory',
    '+ EECS 281: Algorithms',
    '+ EECS 280: Data Structures',
    '+ EECS 203: Discrete Mathematics',
    '+ EECS 201: Linux Programming & Development',
    '+ EECS 183: Elementary Programming Concepts',
    '+ STATS 306: Introduction to Statistical Computing',
    '+ STATS 250: Introduction to Statistics & Data Analysis',
    '+ MATH 215: Multivariable & Vector Calculus',
    '+ MATH 116: Calculus II',
    '+ MATH 115: Calculus I',
    '<br>',
    '<span class="command">Upcoming Coursework:</span>',
    '+ EECS 370: Introduction to Computer Organization',
    '+ EECS 484: Database Management Systems',
    '+ EECS 485: Web Systems',
    '+ STATS 425: Introduction to Probability',
    '<br>',
    '<span class="command">Activities:</span>',
    '+ Michigan Research & Discovery Scholars',
    '+ Michigan Hackers',
    '+ Michigan Poker Club',
    '+ Club Cricket',
    '<br>',
];

experience = [
    "<br>",
    '<span class="command">United Wholesale Mortgage | Software Engineer Intern</span>',
    '+ GCP Migration', 
    '+ Change Insights Datamart',
    '+ Loan Risk Calculations',
    '+ Technologies: C#, Python, SQL, GCP',
    '<br>',
    '<span class="command">OutlierAI | Software Developer Consultant</span>',
    '+ User Accessibility', 
    '+ Response Refinements',
    '+ Technologies: Python',
    '<br>',
    '<span class="command">The University of Michigan | EECS 183 Grader</span>',
    '+ Teaching Students about programming', 
    '+ Exam Structuring & Grading',
    '+ Technologies: C++',
    '<br>',
    '<span class="command">The Michigan Daily | Web Developer</span>',
    '+ Vulnerability Patching', 
    '+ Debugging & Testing',
    '+ Web Optimizations',
    '+ Technologies: JavaScript, React, SQL, AWS',
    '<br>',
    '<span class="command">Ratna Global Technologies | Software Engineer Intern</span>',
    '+ Web Systems', 
    '+ OpenAI Integration',
    '+ Technologies: React, Node, Python, SQL',
    '<br>',
    '<span class="command">The Big-DIG Research Lab | Undergraduate Researcher</span>',
    '+ Sorting Engine', 
    '+ Data Visualization & Analysis',
    '+ Technologies: Python',
    '<br>',
    '<span class="command">London Business School | Undergraduate Researcher</span>',
    '+ Natural Language Processing', 
    '+ Database Scaffolding',
    '+ Data Analysis',
    '+ Technologies: Python, SQL, Tableau',
    '<br>',
    '<span class="command">Kumon North America | Academic Tutor</span>',
    '+ Math & Reading Tutoring', 
    '+ Curriculum Development',
    '<br>',
];

projects = [
    "<br>",
    '<span class="command">TermNav</span>',
    '+ This beautiful terminal interface you are currently exploring', 
    '+ Technologies: HTML, CSS, JavaScript',
    "<br>",
    '<span class="command">GlassNav</span>',
    '+ Custom smart glasses with image, video, & audio capture capabilites', 
    '+ Integrate chatbot to interact with media and answer questions',
    '+ Technologies: C++, Python, MicroPython, MongoDB, GCP',
    '<br>',
    '<span class="command">ChessNav</span>',
    '+ Custom position evaluations for chess games', 
    '+ Integrated Leila and Stockfish API to run multiple simulations',
    '+ ~95% accuracy in position evaluation for 2024 Candidates Tournament',
    '+ Technologies: Python',
    '<br>',
    '<span class="command">SpeakNav</span>',
    '+ Text to speech service for multitasking required readings and other tasks', 
    '+ Integrated OpenAI to summarize and analyze text',
    '+ Technologies: Python, C++, OpenAI, SQL',
    '<br>',
    '<span class="command">C++ Standard Library</span>',
    '+ Wrote custom implementations of C++ data structures with more functionality and efficiency', 
    '+ Technologies: C++',
    '<br>',
    '<span class="command">SQL Imitation</span>',
    '+ Replicated SQL database with custom data structures and query languages, making a localized database system', 
    '+ Technologies: C++',
    '<br>',
];
