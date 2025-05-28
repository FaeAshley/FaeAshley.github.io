import chatbot1 from '../assets/chatbot/chatbot1.PNG';
import chatbot2 from '../assets/chatbot/chatbot2.PNG';
import chatbot3 from '../assets/chatbot/chatbot3.PNG';
import chatbot4 from '../assets/chatbot/chatbot4.PNG';
import chatbot5 from '../assets/chatbot/chatbot5.PNG';
import chatbot6 from '../assets/chatbot/chatbot6.PNG';
import chatbot7 from '../assets/chatbot/chatbot9.png';
import chatbot8 from '../assets/chatbot/chatbot8.PNG';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
};

const petImages = importAll(require.context('../assets/petplatform', false, /\.(png|jpe?g|svg)$/));
const mpImages = importAll(require.context('../assets/matchplay', false, /\.(png|jpe?g|svg)$/));
const itImages = importAll(require.context('../assets/inTouch', false, /\.(png|jpe?g|svg)$/));
const mbImages = importAll(require.context('../assets/moodboardify', false, /\.(png|jpe?g|svg)$/));
const ttImages = importAll(require.context('../assets/timetracker', false, /\.(png|jpe?g|svg)$/));

export const projects = [
  {
    id: 1,
    title: "FaeGPT",
    summary: "AI Portfolio Chatbot that answers recruiter-style questions about my skills, experience, and projects.",
    description: `FaeGPT is a custom-built AI chatbot powered by OpenAI. It was designed to answer recruiter-style questions about my skills, projects, and the way I work, but it does much more than deliver facts. It listens, responds with care, and reflects the thoughtfulness I try to bring to every part of my craft.
    Built using LlamaIndex and vector search, it pulls from my resume, project summaries, and personal writing to generate real-time answers that feel conversational and honest. Every response carries a little piece of my voice and values, helping visitors not just learn about my work, but experience how I think.
    Whether you're curious about what drives me as a developer, how a certain project came to life, or what it's like to collaborate with me, FaeGPT is there to answer — with context, clarity, and a quiet sense of admiration for the work I’ve done.`,
    keyFeatures: [
      {
        title: "Conversational Intelligence",
        features: [
          "Responds like a personal assistant who’s in awe of my work",
          "Answers recruiter-style questions about your skills, experience, and projects",
          "Elevates your accomplishments with warmth, depth, and admiration"
        ]
      }
    ],
    images: [
        {
           src: chatbot1,
           alt: 'FaeGPT chat interface',
           caption: "FaeGPT responding to a question about what makes Fae different"
        },
        {
           src: chatbot2,
           alt: 'FaeGPT chat interface',
           caption: "FaeGPT responding to a question about Fae's projects"
        },
        {
            src: chatbot3,
            alt: "FaeGPT greeting and loading message",
            caption: "Initial greeting screen showing FaeGPT’s personality and tone and notice that the server is being pinged and started."
        },
        {
            src: chatbot4,
            alt: "FaeGPT React UI",
            caption: "FaeGPT React UI and handling of waking server"
        },
        {
            src: chatbot5,
            alt: "FaeGPT React UI",
            caption: "FaeGPT React UI and handling of server fetch/response and error catching"
        },
        {
            src: chatbot6,
            alt: "FaeGPT React UI",
            caption: "FaeGPT chat bot React UI"
        },
        {
            src: chatbot7,
            alt: "FaeGPT knowledge base",
            caption: "FaeGPT knowledge base structure and how FaeGPT gets to know Fae"
        },
        {
            src: chatbot8,
            alt: "FaeGPT Personality and query",
            caption: "FaeGPT snippet of personality and backend querying"
        },
    ],
    stack: [
    {
      type: "AI & LLM Integration & API Integration",
      tools: ["OpenAI", "LlamaIndex"]
    },
    {
      type: "Frontend",
      tools: ["React", "Tailwind", "JavaScript/JSX", "React Router"]
    },
    {
      type: "Backend",
      tools: ["Python", "Flask", "Markdown Docs"]
    },
    {
      type: "Hosting & Deployment",
      tools: ["Render", "GitHub Pages"]
    },
  ],
    liveLink: "https://faeashley.github.io/",
    repoLink: "https://github.com/faeAshley/faegpt"
  },
  {
    id: 2,
    title: "Pet Care Platform",
    summary: "Web app that connects pet owners with pet care providers",
    description:
      `The pet care platform  is a full-stack web platform designed to connect pet owners with trusted pet care providers. Built with a focus on security, ease of use, and 
      thoughtful UX, the platform offers tailored experiences for both owners and providers. It empowers users to manage bookings, availability, communication, and memberships—all in one place.`,
    keyFeatures: [{
      title:"🐾 For Pet Owners:",
      features: [
        "Search & Discovery: Find providers based on availability, location, services, and membership tiers.",
        "Booking System: Schedule services with selected providers and manage upcoming/past bookings.",
        "Contact Info Visibility Controls: Choose who can view your contact info (e.g., only current or past booking contacts).",
        "Memberships: Tiered owner memberships with unique benefits such as discounts or premium support."
      ]
    },
    {
      title:"🐶 For Pet Care Providers:",
      features: [
        "Profile Management: Customize bios, experience, availability, and service offerings.",
        "Rates & Weekend Pricing: Flexible pricing models including weekend-specific rates.",
        "Background Checks & Documents: Upload and verify credentials for trust and transparency.",
        "Provider Memberships: Multiple provider membership tiers with associated perks and visibility boosts."
      ]
    },
    {
      title: "💬 Platform-Wide Tools:",
      features: [
        "Messaging System: Real-time or persistent messaging with clients (planned).",
        "Admin Dashboard: Manage users, providers, complaints, finances, and approvals.",
        "Support System: In-platform ticketing for issues and support requests.",
        "Emergency Contacts: Pet owners can add emergency contact info for added safety.",
        "Billing & Payments: Centralized management of payment methods, history, and provider earnings."
      ]
    }
    ],
    stack: [
      {
        type: "Backend & Database",
        tools: ["Python", "Flask", "SQLAlchemy", "PostgreSQL"]
      },
      {
        type: "Frontend",
        tools: ["HTML", "CSS", "JavaScript", "React (planned)", "Tailwind CSS"]
      },
      {
        type: "Authentication & Authorization",
        tools: ["Flask-Login", "Flask-WTF", "Werkzeug"]
      },
      {
        type: "Admin Tools",
        tools: ["Custom Admin Dashboard", "Flask Blueprints"]
      },
      {
        type: "Payment & Membership Logic",
        tools: ["Custom Billing System", "Tiered Membership Logic"]
      },
      {
        type: "Dev Tools",
        tools: ["PyCharm", "VS Code", "Git", "GitHub"]
      },
      {
        type: "APIs & Integration (Planned/Future)",
        tools: ["OpenAI API", "Chat Messaging System", "Background Check APIs"]
      },
      {
        type: "Hosting & Deployment (Planned/Future)",
        tools: ["Render", "Fly.io", "Railway"]
      }
    ],
    images: [
      {
        src: petImages["pp1.PNG"],
        alt: 'Pet Platform Index Page',
        caption: "Pet Platform Index Page"
      },
      {
        src: petImages["pp2.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp3.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp4.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp5.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp6.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp7.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp8.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp9.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp10.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp11.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp12.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp13.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp14.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp15.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp16.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp17.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp18.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp19.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: petImages["pp20.PNG"],
        alt: '',
        caption: ""
      },
    ],
    liveLink: "",
    repoLink: ""
  },
  {
    id: 3,
    title: "Matchplay Viewer - Pinball Tournament Viewer App",
    summary: "A lightweight, front-end web application that dynamically displays real-time pinball tournament data from MatchPlay.Events, offering users an intuitive interface to monitor active rounds, match details, player standings, and more.",
    description:
      `a real-time web application built to enhance the experience of tracking ongoing pinball tournaments hosted on MatchPlay.Events. Designed with players and spectators in mind, it fetches and 
      displays live tournament data—including current rounds, individual matches, player placements, and game metadata—using intuitive layouts and real-time updates. Each match displays the game 
      being played, player names in order, elapsed time, completion status, and tags such as “NEW” or “FINISHED.” The app also surfaces standings and allows users to track tournament progress at a 
      glance, helping players stay informed without refreshing or navigating away.`,
    images: [
      {
        src: "matchplayViewer1",
        alt: '',
        caption: ""
      },
      {
        src: mpImages["mp1.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: mpImages["mp2.PNG"],
        alt: '',
        caption: ""
      },
    ],
    stack: [
      {
        type: "Backend",
        tools: ["Python", "Flask"]
      },
      {
        type: "Web Scraping / Automation",
        tools: ["Playwright", "BeautifulSoup", "AsyncIO"]
      },
      {
        type: "Frontend",
        tools: ["HTML", "CSS", "JavaScript"]
      },
      {
        type: "Deployment / Hosting",
        tools: ["GitHub Pages", "Render (optional for API)"]
      },
      {
        type: "Dev Tools",
        tools: ["VS Code", "Git", "GitHub"]
      },
    ],
    liveLink: "https://faeashley.github.io/matchplayViewer/",
    repoLink: "https://github.com/FaeAshley/matchplayViewer"
  },
  {
    id: 4,
    title: "inTouch Web App & Chrome Extension",
    summary: "inTouch is a networking tracker and personalized job board powered by a Chrome extension that extracts LinkedIn data, helping me organize contacts, monitor job opportunities, and track my warm-up progress with each connection.",
    description: `inTouch is a custom-built ecosystem for managing your job search and networking strategy more intelligently. At its core, it includes a personalized job board interface 
    and a contact tracker with dynamic fields like status (e.g., warming up, connected, close) and job relevance. The real power comes from a custom-built Chrome extension that extracts key 
    data—messages, names, and profile details—from LinkedIn, then syncs it with your in-browser app using chrome.storage.local. 
    
    The extension can also open LinkedIn profile tabs, wait with 
    built-in delays, and enrich missing data (e.g., job titles or companies) through DOM parsing. On the front end, your tool offers sortable tables, editable fields, and conditional formatting 
    (e.g., color gradients based on connection warmth). All contact data is timestamped and selectively updated using a lastUpdated logic to prevent overwriting newer information. The app is 
    designed for job seekers who want to maintain intentional outreach without losing track of warm leads.`,
    images: [
      {
        src: itImages["it1.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it2.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it3.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it4.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it5.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it6.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it7.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it8.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it9.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it10.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it11.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it12.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it13.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it14.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it15PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it16.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it17.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it18.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: itImages["it19.PNG"],
        alt: '',
        caption: ""
      },
      
    ],
    stack: [
      {
        type: "Frontend",
        tools: ["React", "Tailwind CSS", "JavaScript", "HTML"]
      },
      {
        type: "Extension Development",
        tools: ["Chrome Extensions API", "Manifest V3", "chrome.storage.local", "DOM Parsing"]
      },
      {
        type: "Data Handling / Sync",
        tools: ["JSON", "lastUpdated Timestamp Logic", "Conditional Syncing"]
      },
      {
        type: "Automation & Enrichment",
        tools: ["setTimeout Delays", "Window Management", "Custom Parsing Scripts"]
      },
      {
        type: "Dev Tools",
        tools: ["VS Code", "Git", "GitHub"]
      }
    ],
    liveLink: "https://faeashley.github.io/inTouch/",
    repoLink: "https://github.com/FaeAshley/inTouch"
  },
  {
    id: 6,
    title: "MoodBoardify",
    summary: "MoodBoardify is an interactive web app that lets users drag, drop, edit, and save custom mood boards using text and images, powered entirely by the browser with dynamic styling and local persistence.",
    description: `MoodBoardify is a front-end web application designed to give users a canvas for creative expression. It enables users to build personalized mood boards by adding editable 
    text blocks or images—either via URL or file upload—and freely arranging them through drag-and-drop. Each element is fully interactive, with options to reposition, edit, or delete directly 
    on the canvas. Boards can be saved using localStorage and reloaded later, preserving all styles and positions. The UI includes modal popups for text/image input, hover effects, and 
    real-time feedback for drag actions. MoodBoardify is a lightweight but feature-rich creative tool that blends DOM manipulation, visual customization, and a playful interface, all with 
    zero backend requirements.`,
    images: [
      {
        src: mbImages["mb1.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: mbImages["mb2.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: mbImages["mb3.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: mbImages["mb4.PNG"],
        alt: '',
        caption: ""
      },
    ],
    stack: [
      {
        type: "Frontend",
        tools: ["HTML", "CSS", "JavaScript"]
      },
      {
        type: "Interactivity & UX",
        tools: ["Drag-and-Drop API", "Event Listeners", "Dynamic DOM Manipulation"]
      },
      {
        type: "Persistence",
        tools: ["localStorage"]
      },
      {
        type: "UI Design",
        tools: ["CSS Flexbox", "Custom Modal Popups", "Responsive Layout"]
      },
      {
        type: "Dev Tools",
        tools: ["VS Code", "Git", "GitHub"]
      }
    ],
    liveLink: "https://faeashley.github.io/moodBoardify/",
    repoLink: "https://github.com/FaeAshley/moodBoardify"
  },
  {
    id: 7,
    title: "TimeTracker",
    summary: "TimeTracker is a browser-based weekly timecard app that allows users to log, categorize, and calculate work hours across days with persistent localStorage support and an intuitive, editable interface.",
    description: `TimeTracker is a lightweight, fully client-side application designed for weekly time tracking without the need for accounts or servers. Users can log multiple time entries 
    per day and categorize them as “Work,” “Lunch,” or “Break,” while the app calculates daily and weekly totals in real time. Each week is navigable via “Previous” and “Next” buttons, and a
    ll data is stored using localStorage, organized by week start date. The interface dynamically generates input fields and dropdowns for each day, allowing for flexible and personalized 
    scheduling. With no backend requirements, it’s ideal for freelancers, small teams, or individuals who want to keep time tracking simple yet effective.`,
    images: [
      {
        src: ttImages["tt1.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt2.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt3.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt4.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt5.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt6.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt7.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt8.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt9.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt10.PNG"],
        alt: '',
        caption: ""
      },
      {
        src: ttImages["tt11.PNG"],
        alt: '',
        caption: ""
      },
    ],
    stack: [
      {
        type: "Frontend",
        tools: ["HTML", "CSS", "JavaScript"]
      },
      {
        type: "UI/UX Design",
        tools: ["DOM Manipulation", "Dynamic Form Generation", "Responsive Styling"]
      },
      {
        type: "Persistence",
        tools: ["localStorage"]
      },
      {
        type: "Time Management Logic",
        tools: ["Custom Date Calculations", "Weekly Offsets", "Duration Math"]
      },
      {
        type: "Dev Tools",
        tools: ["VS Code", "Git", "GitHub"]
      }
    ],
    liveLink: "https://faeashley.github.io/timeTracker/",
    repoLink: "https://github.com/FaeAshley/timeTracker"
  }
  // {
  //   id: 5,
  //   title: "Personal Portfolio",
  //   summary: "",
  //   description: ``,
  //   images: [
  //     {
  //       src: "",
  //       alt: "",
  //       caption: ""
  //     }
  //   ],
  //   stack: [
  //     {
  //       type: "",
  //       tools: [""]
  //     }
  //   ],
  //   liveLink: "",
  //   repoLink: ""
  // },

]