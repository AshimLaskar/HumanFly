const MAP_WIDTH = 1294;
const MAP_HEIGHT = 600;
const NODE_WIDTH = 164;
const NODE_HEIGHT = 105;
const STAGE_SPACING = 218;
const STORE_KEY = "devpath-study-progress-v1";

const tracks = {
  frontend: {
    name: "Frontend development",
    shortName: "Frontend",
    description: "Start with the building blocks, then follow your curiosity toward real projects.",
    stages: ["GETTING STARTED", "BUILD A BASE", "MAKE IT WORK", "CONNECT THE DOTS", "GO FURTHER", "MAKE IT YOURS"],
    lessons: [
      { id: "foundations", title: "Meet the web", module: "A WELCOMING START", type: "Orientation", icon: "✳", position: [0, 220], minutes: 12, requires: [], summary: "Meet the browser, the internet, and the tiny request-and-response conversation that makes a web page appear.", goals: ["Explain the roles of a browser and a web server.", "Describe, in simple terms, how a web page reaches your screen.", "Set up a small space to experiment."], challenge: "Draw or jot down the journey from typing an address to seeing a page. What happens between those two moments?" },
      { id: "html", title: "HTML foundations", module: "01 · STRUCTURE", type: "Reading", icon: "⌘", position: [1, 220], minutes: 35, requires: ["foundations"], summary: "Give a web page meaning and structure with the elements screen readers, browsers, and search engines understand.", goals: ["Choose semantic elements to describe a page.", "Build a clear heading and content hierarchy.", "Use links and lists to connect ideas."], challenge: "Outline an about-me page using headings, a short paragraph, a list, and one useful link. Which HTML element describes each part best?" },
      { id: "css", title: "CSS foundations", module: "02 · PRESENTATION", type: "Reading", icon: "◒", position: [2, 90], minutes: 40, requires: ["html"], summary: "Turn a plain page into your own. Learn how selectors, the cascade, color, and spacing work together.", goals: ["Connect a stylesheet to an HTML document.", "Style elements with selectors and readable declarations.", "Trace which rule wins in a simple cascade."], challenge: "Give your HTML page a type scale and a small set of colors. Which values might become reusable design tokens?" },
      { id: "javascript", title: "JavaScript basics", module: "03 · BEHAVIOUR", type: "Reading", icon: "λ", position: [2, 350], minutes: 45, requires: ["html"], summary: "Bring a page to life with the building blocks of JavaScript: values, variables, functions, and decisions.", goals: ["Work with strings, numbers, arrays, and objects.", "Write a small function with clear inputs and output.", "Use a condition to make a useful decision."], challenge: "Describe a tiny function that greets someone by name. What goes in? What should come out if no name is supplied?" },
      { id: "responsive", title: "Layout & responsive design", module: "04 · LAYOUT", type: "Hands-on", icon: "▦", position: [3, 90], minutes: 40, requires: ["css"], summary: "Arrange a page for real people on real screens, using flexible layouts instead of device-specific guesswork.", goals: ["Compare normal flow, Flexbox, and Grid.", "Create a breakpoint based on when content needs it.", "Keep layouts comfortable at narrow widths."], challenge: "Sketch your page in one column and three columns. At what point does switching layouts make the content easier to scan?" },
      { id: "dom", title: "The DOM & events", module: "05 · THE BROWSER", type: "Hands-on", icon: "⌘", position: [3, 350], minutes: 45, requires: ["javascript"], summary: "Explore how JavaScript reads and updates a page, then respond when someone clicks, types, or submits.", goals: ["Find an element without fragile selectors.", "Listen for an event and respond to it.", "Update content without refreshing the page."], challenge: "Plan an accessible button that reveals a note. What changes in the page? What should the button tell a screen reader?" },
      { id: "git", title: "Git & version control", module: "06 · YOUR WORKFLOW", type: "Reading", icon: "⌥", position: [3, 220], minutes: 30, requires: ["html"], summary: "Save meaningful snapshots of your work so you can see what changed, back up your project, and work with others.", goals: ["Describe what a commit records.", "Make a small change and give its snapshot a useful message.", "Explain how a branch keeps an experiment separate."], challenge: "Imagine making a page, then fixing a broken link. Write a commit message for each change that future-you could understand." },
      { id: "async", title: "Async JavaScript", module: "07 · ASYNCHRONOUS CODE", type: "Reading", icon: "↗", position: [4, 350], minutes: 40, requires: ["dom"], summary: "Understand promises and async/await, and write calm, clear code for work that takes time.", goals: ["Describe why a task might finish later.", "Follow a promise through success and error.", "Use async/await without losing error handling."], challenge: "A page is waiting for a profile to load. What should the person using it see while they wait, and if the request doesn't work?" },
      { id: "react", title: "Your first React components", module: "08 · REUSABLE UI", type: "Hands-on", icon: "◌", position: [4, 90], minutes: 45, requires: ["responsive", "dom"], summary: "Break an interface into reusable pieces. Learn how React components, props, and JSX help a UI grow.", goals: ["Read a component and identify its reusable pieces.", "Pass information into a component with props.", "Choose a useful boundary between two components."], challenge: "Break a simple recipe card into components. Which information should be passed in as props?" },
      { id: "typescript", title: "TypeScript essentials", module: "09 · CONFIDENT CODE", type: "Reading", icon: "◇", position: [4, 220], minutes: 35, requires: ["javascript"], summary: "Give JavaScript values clear shapes so a helpful type checker can catch mismatches before you run the page.", goals: ["Give common variables and functions readable types.", "Model a small object with an interface or type.", "Use errors as clues instead of fighting them."], challenge: "Sketch a type for a book with a title, an author, and an optional cover image. Which details might you add later?" },
      { id: "fetch", title: "Working with APIs", module: "10 · DATA & APIS", type: "Hands-on", icon: "⇄", position: [5, 350], minutes: 40, requires: ["async"], summary: "Talk to a web API, turn its response into useful information, and give errors an honest, human-friendly face.", goals: ["Send a request with the Fetch API.", "Show useful loading, success, and error states.", "Keep external data separate from presentation."], challenge: "Plan three states for a page loading a list of books: before the response, after success, and after a network error." },
      { id: "hooks", title: "State & React hooks", module: "11 · INTERACTIVE UI", type: "Hands-on", icon: "◌", position: [5, 90], minutes: 40, requires: ["react"], summary: "Make components respond to people. Learn local state and the everyday rhythm of a React hook.", goals: ["Choose which component should own a piece of state.", "Update state without mutating existing values.", "Recognize when an effect is actually necessary."], challenge: "Design a two-state bookmark button. What is the smallest piece of state you need, and what should the button announce?" },
      { id: "testing", title: "Testing & confidence", module: "12 · QUALITY", type: "Reading", icon: "✓", position: [5, 220], minutes: 35, requires: ["react", "typescript"], summary: "Check what users actually experience and catch regressions with small, dependable tests.", goals: ["Explain the difference between behavior and implementation.", "Write a test that follows a real user action.", "Pick a few important edge cases."], challenge: "For a search box, list one happy path and two tricky cases worth checking. What should the person using it see?" },
      { id: "accessibility", title: "Accessibility", module: "13 · FOR EVERYONE", type: "Hands-on", icon: "◎", position: [4, 480], minutes: 35, requires: ["react"], summary: "Make the web work for more people with semantic HTML, keyboard support, readable contrast, and mindful interaction.", goals: ["Use the right native control for a task.", "Test an interaction with only the keyboard.", "Give an interface clear names and instructions."], challenge: "Audit a sign-up form with no mouse: can you see the focus, understand each field, and reach the submit button?" },
      { id: "capstone", title: "Your first real project", module: "14 · A PROJECT TO CALL YOURS", type: "Project", icon: "✳", position: [5, 480], minutes: 90, requires: ["fetch", "hooks", "testing", "accessibility"], summary: "Bring it all together in a thoughtful, useful little app of your own. Choose a problem you actually care about.", goals: ["Sketch a page and break it into components.", "Build a complete loading-to-success experience.", "Test, refine, and make the result work for everyone."], challenge: "Pick one small problem you would enjoy solving, choose a single useful user story, and outline your first three small steps." }
    ]
  },
  backend: {
    name: "Backend development",
    shortName: "Backend",
    description: "Follow a request behind the scenes, then build a small service with confidence.",
    stages: ["A FIRST REQUEST", "GET GROUNDED", "SHAPE THE DATA", "ADD BEHAVIOR", "KEEP IT SAFE", "MAKE IT SOLID"],
    lessons: [
      { id: "server-start", title: "How the web works", module: "A WELCOMING START", type: "Orientation", icon: "✳", position: [0, 266], minutes: 15, requires: [], summary: "Take a calm tour of the browser-server conversation: requests, responses, and the things between.", goals: ["Name the client, server, and the request they exchange.", "Recognize a URL's main parts.", "Explain, at a high level, how a response returns."], challenge: "Trace what happens after someone opens a page on their phone. Which parts might be on their device, and which might live on a server?" },
      { id: "node", title: "Your server runtime", module: "01 · GET READY", type: "Reading", icon: "⌘", position: [1, 266], minutes: 35, requires: ["server-start"], summary: "Set up Node.js, run your first program, and understand what a runtime does with your code.", goals: ["Explain what a server-side runtime is for.", "Run a simple program from the terminal.", "Know where application errors first appear."], challenge: "Picture a small server printing a helpful start-up message. What would you want that message to tell you?" },
      { id: "js-server", title: "JavaScript for servers", module: "02 · THE LANGUAGE", type: "Reading", icon: "λ", position: [2, 120], minutes: 40, requires: ["node"], summary: "Use functions, modules, and everyday JavaScript patterns to organize server-side work.", goals: ["Import and export a small function.", "Choose a descriptive function name and signature.", "Recognize how synchronous work differs from waiting."], challenge: "Describe a function that checks whether an email address is present. What result should it return, and what should it avoid doing?" },
      { id: "http", title: "HTTP & API design", module: "03 · THE CONTRACT", type: "Reading", icon: "⇄", position: [2, 402], minutes: 40, requires: ["node"], summary: "Give clients a predictable way to ask for information and understand what happened.", goals: ["Distinguish a few common HTTP methods.", "Choose a helpful response status.", "Design a resource-oriented route name."], challenge: "Design an API route for a list of books and another for one book. What should happen when a book cannot be found?" },
      { id: "express", title: "Routes & middleware", module: "04 · REQUEST HANDLING", type: "Hands-on", icon: "⟶", position: [3, 120], minutes: 45, requires: ["js-server", "http"], summary: "Receive requests, compose helpful middleware, and return predictable responses.", goals: ["Match a route to a request.", "Explain what middleware passes along.", "Keep handlers small and easy to read."], challenge: "Plan what a server should do before saving a new book. What would make a request valid, and how should invalid input be answered?" },
      { id: "database", title: "Data & databases", module: "05 · PERSISTENT DATA", type: "Reading", icon: "▤", position: [3, 402], minutes: 40, requires: ["http"], summary: "Give your application a dependable place to store and retrieve structured information.", goals: ["Identify a useful table or collection.", "Choose a clear, stable identifier.", "Describe why data validation matters before saving."], challenge: "Sketch a collection of books. What information does each need, and how might you avoid saving an empty title?" },
      { id: "async-server", title: "Async & error handling", module: "06 · RESILIENT REQUESTS", type: "Hands-on", icon: "↗", position: [4, 266], minutes: 40, requires: ["express", "database"], summary: "Handle slower work without blocking your server, and make failures clear instead of mysterious.", goals: ["Use async/await around I/O.", "Recognize a failed operation and handle it.", "Avoid leaking confusing internal details in an error."], challenge: "A database becomes unavailable. What should your server log to help you, and what simple message should it give the person waiting?" },
      { id: "auth", title: "Identity & authentication", module: "07 · IDENTITY", type: "Reading", icon: "◈", position: [4, 120], minutes: 40, requires: ["express"], summary: "Learn the basic building blocks of proving who someone is and checking what they are allowed to do.", goals: ["Distinguish authentication from authorization.", "Explain why passwords aren't stored as readable text.", "Identify one sensitive action that needs an access check."], challenge: "Imagine a private profile page. What is different about proving that someone has an account and deciding whether they can view a particular profile?" },
      { id: "validation", title: "Validation & safe input", module: "08 · DEFENSIVE DESIGN", type: "Hands-on", icon: "✓", position: [5, 120], minutes: 35, requires: ["auth", "database"], summary: "Treat input with care: validate it at the boundary, return actionable errors, and avoid unsafe assumptions.", goals: ["Check inputs against what an action needs.", "Return errors that help a client correct a request.", "Name a couple of values your server must never trust."], challenge: "A user submits a new task. List what a request must include, what lengths are reasonable, and what the server should reject." },
      { id: "testing-api", title: "API testing", module: "09 · BUILD CONFIDENCE", type: "Reading", icon: "⌖", position: [5, 266], minutes: 35, requires: ["validation"], summary: "Make sure real requests and responses behave sensibly, including when something goes wrong.", goals: ["Test a route's status and useful response fields.", "Include one invalid-input test.", "Protect behavior without relying on implementation details."], challenge: "For a task-creation endpoint, describe a useful success check, one validation check, and one server-error check." },
      { id: "deploy", title: "Ship your service", module: "10 · BEYOND YOUR COMPUTER", type: "Project", icon: "↗", position: [4, 402], minutes: 40, requires: ["async-server", "testing-api"], summary: "Get a small backend ready for real use with configuration, clear logs, and a thoughtful deploy plan.", goals: ["Separate machine-specific settings from source.", "Name a few useful health checks.", "Plan a small, reversible release."], challenge: "What would a future-you want to know when a deployed service stopped working? List three practical things to log or check." },
      { id: "capstone-api", title: "Build a small API", module: "11 · A PROJECT TO CALL YOURS", type: "Project", icon: "✳", position: [5, 498], minutes: 90, requires: ["deploy"], summary: "Turn an idea into a working service with clearly named routes, safe data, honest errors, and tests.", goals: ["Write down one useful API use case.", "Implement a happy path and one helpful failure.", "Explain how you would run and test the service."], challenge: "Choose an everyday problem and sketch three routes that could help solve it. What data would each request need?" }
    ]
  },
  python: {
    name: "Python programming",
    shortName: "Python",
    description: "Start with a few gentle experiments, then follow the path toward a useful script.",
    stages: ["FIRST STEPS", "GOOD HABITS", "WORK WITH DATA", "TAKE IT FURTHER", "REAL-WORLD TOOLS", "YOUR FIRST PROJECT"],
    lessons: [
      { id: "python-start", title: "A first look at Python", module: "A WELCOMING START", type: "Orientation", icon: "✳", position: [0, 266], minutes: 12, requires: [], summary: "Meet Python, run a few lines of code, and make the computer respond to your instructions.", goals: ["Run a small Python program.", "See how a print statement displays information.", "Feel comfortable changing one line and trying again."], challenge: "Write down a sentence you would like your computer to say. What would a print statement need to do?" },
      { id: "python-basics", title: "Variables & everyday values", module: "01 · THE BUILDING BLOCKS", type: "Reading", icon: "⌘", position: [1, 266], minutes: 35, requires: ["python-start"], summary: "Give information a useful name and work with strings, numbers, Booleans, and simple conversions.", goals: ["Choose clear names for values.", "Use strings and numbers in a small expression.", "Notice when data needs to be converted."], challenge: "Sketch a program that introduces someone by name and shows how many books they have read. What values need a name?" },
      { id: "python-logic", title: "Decisions & loops", module: "02 · MAKE IT THINK", type: "Hands-on", icon: "↻", position: [2, 120], minutes: 35, requires: ["python-basics"], summary: "Teach a program to make a decision and repeat useful work with clear, readable logic.", goals: ["Choose an if statement for a decision.", "Repeat work with a for loop.", "Avoid adding a loop when it doesn't help."], challenge: "Imagine showing only tasks that are still open. What should your program check about each task before it shows it?" },
      { id: "python-functions", title: "Functions that help", module: "03 · REUSABLE IDEAS", type: "Reading", icon: "ƒ", position: [2, 402], minutes: 35, requires: ["python-basics"], summary: "Group a small piece of work into a function you can name, reuse, and understand later.", goals: ["Write a function with a clear name.", "Pass information in with a parameter.", "Return a useful answer instead of hiding one."], challenge: "Design a function that greets a person. What should it accept, and should it print a greeting or return one?" },
      { id: "python-collections", title: "Lists & dictionaries", module: "04 · ORGANIZE INFORMATION", type: "Hands-on", icon: "▤", position: [3, 120], minutes: 40, requires: ["python-functions"], summary: "Keep related information together with Python's most useful everyday collection types.", goals: ["Choose between a list and a dictionary.", "Read or update one item safely.", "Loop through a short collection."], challenge: "Model three favorite books. What should live in a list? How would you name one book's title and author?" },
      { id: "python-files", title: "Files & useful data", module: "05 · BEYOND MEMORY", type: "Hands-on", icon: "▱", position: [3, 402], minutes: 40, requires: ["python-collections"], summary: "Read a file, save useful results, and learn how different shapes of data travel through a program.", goals: ["Work with a plain-text file.", "Use a context manager for file access.", "Choose a readable format for a small dataset."], challenge: "Plan a tiny reading-list file. How would a new row be written, and what should happen when the file is missing?" },
      { id: "python-errors", title: "Errors & debugging", module: "06 · LEARN FROM SURPRISES", type: "Reading", icon: "⌕", position: [4, 266], minutes: 35, requires: ["python-functions", "python-collections"], summary: "Read error messages as clues, trace an unexpected result, and catch only the problems you know how to address.", goals: ["Find the useful part of a traceback.", "Use a small experiment to narrow down a bug.", "Distinguish a fix from a swallowed error."], challenge: "A program tries to read a number but receives a word. What question would you ask first, and what should a helpful response look like?" },
      { id: "python-modules", title: "Modules & packages", module: "07 · ORGANIZE A PROJECT", type: "Reading", icon: "▦", position: [4, 120], minutes: 30, requires: ["python-functions"], summary: "Keep a project tidy by separating related functions and reusing packages with intention.", goals: ["Split a larger idea into a small module.", "Import a useful tool without shadowing its name.", "Recognize when a new dependency is worthwhile."], challenge: "Sketch a folder for a little recipe organizer. Which ideas belong together, and what would you call the files?" },
      { id: "python-requests", title: "APIs & web data", module: "08 · CONNECT TO THE WORLD", type: "Hands-on", icon: "⇄", position: [5, 350], minutes: 40, requires: ["python-files", "python-errors"], summary: "Connect a script to an external source and account for slow responses, missing data, and failure.", goals: ["Describe what a web API returns.", "Plan what to do if a request is unsuccessful.", "Keep credentials out of saved code."], challenge: "Imagine fetching today's weather. What should the script do when the response is slow or a city can't be found?" },
      { id: "python-tests", title: "Testing small ideas", module: "09 · CHECK YOUR WORK", type: "Reading", icon: "✓", position: [5, 220], minutes: 35, requires: ["python-modules", "python-errors"], summary: "Write small checks that help you understand what your functions promise and catch changes that surprise you.", goals: ["Identify a useful input/output example.", "Name an edge case worth checking.", "Test a function's behavior without duplicating it."], challenge: "For a function that averages a list of numbers, what normal case and empty-list case would be helpful to think through?" },
      { id: "python-automation", title: "Automation & clean habits", module: "10 · BUILD A ROUTINE", type: "Hands-on", icon: "↗", position: [4, 402], minutes: 35, requires: ["python-tests", "python-requests"], summary: "Turn a repeated task into a reliable script with small steps, clear output, and a safe way to handle mistakes.", goals: ["Choose one routine that is safe to automate.", "Make progress visible while the script runs.", "Plan for errors without damaging useful data."], challenge: "What repetitive task would you happily hand to a tiny script? How could you test it on sample data first?" },
      { id: "python-capstone", title: "A script that helps you", module: "11 · A PROJECT TO CALL YOURS", type: "Project", icon: "✳", position: [5, 480], minutes: 75, requires: ["python-automation"], summary: "Use Python's everyday tools to make a small, useful helper for your own life or work.", goals: ["Pick a clear, manageable problem.", "Build one useful feature before adding extras.", "Test it, explain it, and notice what you'd improve next."], challenge: "Choose a small task you already repeat. Who is the script for, what will it need, and what counts as finished?" }
    ]
  }
};

const stageNames = ["FIRST STEPS", "THE BUILDING BLOCKS", "MAKE CONNECTIONS", "BUILD CONFIDENCE", "GO FURTHER", "YOUR PROJECT"];

function defaultState() {
  return {
    track: "frontend",
    completed: {
      frontend: ["foundations", "html", "javascript"],
      backend: ["server-start"],
      python: ["python-start"]
    },
    journals: {},
    practiced: {}
  };
}

function loadState() {
  const initial = defaultState();
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (!saved) return initial;
    const parsed = JSON.parse(saved);
    const allowedTracks = Object.keys(tracks);
    const state = {
      track: allowedTracks.includes(parsed.track) ? parsed.track : initial.track,
      completed: { ...initial.completed },
      journals: parsed.journals && typeof parsed.journals === "object" ? parsed.journals : {},
      practiced: parsed.practiced && typeof parsed.practiced === "object" ? parsed.practiced : {}
    };
    for (const trackId of allowedTracks) {
      if (!Array.isArray(parsed.completed?.[trackId])) continue;
      const validIds = new Set(tracks[trackId].lessons.map(lesson => lesson.id));
      state.completed[trackId] = parsed.completed[trackId].filter(id => validIds.has(id));
    }
    return state;
  } catch (error) {
    console.error("Could not read saved Devpath progress.", error);
    return initial;
  }
}

const state = loadState();
let selectedNodeId = null;
let activeFilter = "all";
let searchQuery = "";
let toastTimer;

const elements = {
  mapCanvas: document.querySelector("#map-canvas"),
  mapConnections: document.querySelector("#map-connections"),
  mapNodes: document.querySelector("#map-nodes"),
  mapStages: document.querySelector("#map-stages"),
  mapScroll: document.querySelector("#map-scroll"),
  trackSelect: document.querySelector("#track-select"),
  trackDescription: document.querySelector("#track-description"),
  topicSearch: document.querySelector("#topic-search"),
  topicFilter: document.querySelector("#topic-filter"),
  topicCount: document.querySelector("#topic-count"),
  lessonDetails: document.querySelector("#lesson-details"),
  progressFill: document.querySelector("#progress-fill"),
  progressFraction: document.querySelector("#progress-fraction"),
  progressSummary: document.querySelector("#progress-summary"),
  progressPercent: document.querySelector("#progress-percent"),
  conceptCount: document.querySelector("#concept-count"),
  nextConcept: document.querySelector("#next-concept"),
  navProgress: document.querySelector("#nav-progress"),
  jumpToNext: document.querySelector("#jump-to-next"),
  focusLesson: document.querySelector("#focus-lesson"),
  practiceSession: document.querySelector("#practice-session"),
  dialog: document.querySelector("#practice-dialog"),
  practiceForm: document.querySelector("#practice-form"),
  practiceTitle: document.querySelector("#practice-title"),
  practiceContext: document.querySelector("#practice-context"),
  practiceChallenge: document.querySelector("#practice-challenge"),
  practiceNote: document.querySelector("#practice-note"),
  closePractice: document.querySelector("#close-practice"),
  cancelPractice: document.querySelector("#cancel-practice"),
  toast: document.querySelector("#toast"),
  mapFrame: document.querySelector(".map-frame"),
  todayDate: document.querySelector("#today-date")
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function currentTrack() {
  return tracks[state.track];
}

function completedIds() {
  return new Set(state.completed[state.track]);
}

function availableIds() {
  const done = completedIds();
  return new Set(currentTrack().lessons.filter(lesson =>
    !done.has(lesson.id) && lesson.requires.every(id => done.has(id))
  ).map(lesson => lesson.id));
}

function nextLesson() {
  const done = completedIds();
  const ready = availableIds();
  return currentTrack().lessons.find(lesson => ready.has(lesson.id)) ||
    [...currentTrack().lessons].reverse().find(lesson => done.has(lesson.id)) ||
    currentTrack().lessons[0];
}

function lessonStatus(lesson) {
  if (completedIds().has(lesson.id)) return "completed";
  if (availableIds().has(lesson.id)) return "available";
  return "locked";
}

function syncSelectedLesson() {
  const lesson = currentTrack().lessons.find(item => item.id === selectedNodeId);
  if (!lesson || (lessonStatus(lesson) === "locked" && selectedNodeId == null)) {
    selectedNodeId = nextLesson().id;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    document.querySelector(".saved-indicator").innerHTML = '<span class="saved-dot"></span>Saved locally';
  } catch (error) {
    console.error("Could not save Devpath progress.", error);
    document.querySelector(".saved-indicator").textContent = "Could not save";
    showToast("Progress couldn’t be saved on this device.");
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2600);
}

function markerPosition(lesson) {
  const [stage, top] = lesson.position;
  return { left: stage * STAGE_SPACING + 16, top };
}

function renderStages() {
  const names = state.track === "frontend" ? stageNames :
    state.track === "backend" ? ["FIRST REQUEST", "GET GROUNDED", "SHAPE THE DATA", "ADD BEHAVIOR", "KEEP IT SAFE", "MAKE IT SOLID"] :
      ["FIRST STEPS", "GOOD HABITS", "WORK WITH DATA", "TAKE IT FURTHER", "REAL-WORLD TOOLS", "YOUR PROJECT"];
  elements.mapStages.innerHTML = names.map((stage, index) =>
    `<div class="stage-label"><span>0${index + 1}</span> ${escapeHTML(stage)}</div>`
  ).join("");
}

function renderConnections() {
  const done = completedIds();
  const available = availableIds();
  const pathMarkup = [];
  for (const lesson of currentTrack().lessons) {
    const { left, top } = markerPosition(lesson);
    for (const prerequisiteId of lesson.requires) {
      const prerequisite = currentTrack().lessons.find(item => item.id === prerequisiteId);
      if (!prerequisite) continue;
      const start = markerPosition(prerequisite);
      const x1 = start.left + NODE_WIDTH;
      const y1 = start.top + NODE_HEIGHT / 2;
      const x2 = left;
      const y2 = top + NODE_HEIGHT / 2;
      const bend = Math.max(26, Math.abs(x2 - x1) * .46);
      const edgeDone = done.has(prerequisiteId) && (done.has(lesson.id) || available.has(lesson.id));
      const edgeActive = (available.has(prerequisiteId) && available.has(lesson.id)) ||
        (done.has(prerequisiteId) && available.has(lesson.id));
      const classes = edgeDone ? "connection-done" : edgeActive ? "connection-active" : "";
      pathMarkup.push(`<path class="${classes}" d="M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}" />`);
    }
  }
  elements.mapConnections.setAttribute("viewBox", `0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`);
  elements.mapConnections.innerHTML = pathMarkup.join("");
}

function renderNodes() {
  const lessons = currentTrack().lessons;
  elements.mapNodes.className = "map-nodes";
  const visible = lessons.filter(lesson => {
    const status = lessonStatus(lesson);
    const matchesSearch = !searchQuery ||
      `${lesson.title} ${lesson.module} ${lesson.summary}`.toLowerCase().includes(searchQuery);
    const matchesFilter = activeFilter === "all" ||
      (activeFilter === "available" && status === "available") ||
      (activeFilter === "completed" && status === "completed");
    return matchesSearch && matchesFilter;
  });
  if (!visible.length) {
    elements.mapNodes.innerHTML = `<div class="node-empty"><span class="node-empty-mark" aria-hidden="true">✳</span><strong>Nothing on this path just yet.</strong><span>Try a different search or show all topics to see what’s here.</span></div>`;
  } else {
    elements.mapNodes.innerHTML = lessons.map((lesson, index) => {
      const status = lessonStatus(lesson);
      const matchesSearch = !searchQuery ||
        `${lesson.title} ${lesson.module} ${lesson.summary}`.toLowerCase().includes(searchQuery);
      const matchesFilter = activeFilter === "all" ||
        (activeFilter === "available" && status === "available") ||
        (activeFilter === "completed" && status === "completed");
      const point = markerPosition(lesson);
      const classes = ["map-node", `is-${status}`];
      if (lesson.id === selectedNodeId) classes.push("is-selected");
      if (!matchesSearch || !matchesFilter) classes.push("is-filtered");
      const stateLabel = status === "completed" ? "Completed" :
        status === "available" ? "Ready to learn" : "Complete its earlier topics to unlock";
      return `<button type="button" class="${classes.join(" ")}" data-node-id="${escapeHTML(lesson.id)}" style="left:${point.left}px;top:${point.top}px" tabindex="${matchesSearch && matchesFilter ? "0" : "-1"}" aria-label="${escapeHTML(lesson.title)}, ${stateLabel}" aria-pressed="${lesson.id === selectedNodeId}" title="${escapeHTML(lesson.title)} · ${stateLabel}">
        <span class="map-node-top"><span class="node-topic">${escapeHTML(lesson.module)}</span><span class="node-status" aria-hidden="true">${status === "completed" ? "✓" : ""}</span></span>
        <span class="node-name">${escapeHTML(lesson.title)}</span>
        <span class="node-meta"><span class="node-type"><span class="node-icon" aria-hidden="true">${escapeHTML(lesson.icon)}</span>${escapeHTML(lesson.type)}</span><span class="node-time">◷ ${lesson.minutes} min</span></span>
      </button>`;
    }).join("");
  }
  elements.topicCount.innerHTML = `${lessons.length} topics <span aria-hidden="true">·</span> ${lessons.filter(item => item.type === "Project").length} project`;
  elements.mapConnections.classList.toggle("map-edges-dimmed", searchQuery.length > 0 || activeFilter !== "all");
}

function renderProgress() {
  const lessons = currentTrack().lessons;
  const completed = completedIds().size;
  const percent = Math.round(completed / lessons.length * 100);
  elements.progressFill.style.width = `${percent}%`;
  elements.progressFraction.textContent = `${String(completed).padStart(2, "0")} / ${String(lessons.length).padStart(2, "0")}`;
  elements.conceptCount.innerHTML = `${String(completed).padStart(2, "0")}<span> / ${lessons.length}</span>`;
  elements.progressPercent.textContent = `${percent}%`;
  elements.navProgress.textContent = String(completed).padStart(2, "0");
  elements.progressSummary.textContent = percent >= 100 ? "Look how far you’ve come." :
    percent >= 60 ? "Your progress is adding up." :
      percent >= 30 ? "You’ve built a lovely rhythm." :
        "You’ve found your footing.";
  const next = nextLesson();
  elements.nextConcept.textContent = completed === lessons.length ? "Path complete — lovely work" : next.title;
}

function renderLessonDetails() {
  const lesson = currentTrack().lessons.find(item => item.id === selectedNodeId) || nextLesson();
  selectedNodeId = lesson.id;
  const status = lessonStatus(lesson);
  const statusLabel = status === "completed" ? "Already completed" :
    status === "available" ? "Ready when you are" : "Waiting on earlier topics";
  const requirements = status === "locked"
    ? lesson.requires.filter(id => !completedIds().has(id)).map(id => currentTrack().lessons.find(item => item.id === id)?.title).filter(Boolean)
    : [];
  const goals = lesson.goals.map(goal => `<li>${escapeHTML(goal)}</li>`).join("");
  const lockedNote = requirements.length
    ? `<p class="lesson-locked-note">A few steps to take first: ${requirements.map(escapeHTML).join(", ")}.</p>`
    : "";
  const primaryAction = status === "completed"
    ? `<p class="lesson-ready-note">A lovely idea to revisit any time. You can mark it open again if you want to explore it further.</p><button class="button-secondary" id="toggle-completion" type="button">Mark as still learning</button>`
    : status === "available"
      ? `<button class="button-primary" id="toggle-completion" type="button">Mark this topic complete <span aria-hidden="true">→</span></button>`
      : `<button class="button-primary" type="button" disabled>Keep following your path</button>${lockedNote}`;
  elements.lessonDetails.innerHTML = `
    <div class="lesson-module">${escapeHTML(lesson.module)}</div>
    <h2 class="lesson-title">${escapeHTML(lesson.title)}</h2>
    <p class="lesson-intro">${escapeHTML(lesson.summary)}</p>
    <div class="lesson-meta"><span>${escapeHTML(lesson.icon)}&nbsp; ${escapeHTML(lesson.type)}</span><span>◷&nbsp; ${lesson.minutes} min</span><span class="lesson-status-pill${status === "completed" ? " is-done-pill" : ""}">${statusLabel}</span></div>
    <h3 class="lesson-subheading">WHAT YOU’LL GET TO EXPLORE</h3>
    <ul class="lesson-goals">${goals}</ul>
    <div class="challenge-box"><div class="challenge-label"><span aria-hidden="true">✳</span> A THOUGHT TO TAKE WITH YOU</div><p class="challenge-copy">${escapeHTML(lesson.challenge)}</p></div>
    <div class="lesson-actions"><button class="button-secondary" id="open-practice" type="button">${state.practiced[state.track]?.[lesson.id] ? "Revisit your practice" : "Make a note or practice"} <span aria-hidden="true">↗</span></button>${primaryAction}</div>`;
  elements.lessonDetails.querySelector("#open-practice").addEventListener("click", () => openPractice(lesson));
  const completionButton = elements.lessonDetails.querySelector("#toggle-completion");
  if (completionButton) {
    completionButton.addEventListener("click", () => {
      const completed = new Set(state.completed[state.track]);
      if (completed.has(lesson.id)) {
        const laterLessons = currentTrack().lessons.filter(item => item.requires.includes(lesson.id) && completed.has(item.id));
        if (laterLessons.length) {
          showToast(`You’ve already completed ${laterLessons.map(item => item.title).join(" and ")}. Keep this step complete to preserve your roadmap.`);
          return;
        }
        completed.delete(lesson.id);
        showToast("Topic marked as still learning. Take it at your pace.");
      } else {
        completed.add(lesson.id);
        showToast("A lovely little step forward. Your progress is saved.");
      }
      state.completed[state.track] = currentTrack().lessons.filter(item => completed.has(item.id)).map(item => item.id);
      saveState();
      const selectedStatus = lessonStatus(lesson);
      if (selectedStatus === "completed") {
        const followUp = nextLesson();
        if (followUp.id !== lesson.id) selectedNodeId = followUp.id;
      } else {
        selectedNodeId = lesson.id;
      }
      render();
    });
  }
}

function render() {
  syncSelectedLesson();
  const track = currentTrack();
  document.title = `Devpath — ${track.shortName} learning roadmap`;
  elements.trackSelect.value = state.track;
  elements.trackDescription.textContent = track.description;
  elements.todayDate.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(new Date()).toUpperCase();
  document.querySelectorAll(".track-link").forEach(button => {
    const selected = button.dataset.track === state.track;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderStages();
  renderConnections();
  renderNodes();
  renderProgress();
  renderLessonDetails();
}

function selectLesson(id, options = {}) {
  const lesson = currentTrack().lessons.find(item => item.id === id);
  if (!lesson) return;
  selectedNodeId = id;
  render();
  if (options.scrollMap) {
    document.querySelector("#roadmap").scrollIntoView({ behavior: "smooth", block: "start" });
    const point = markerPosition(lesson);
    elements.mapScroll.scrollTo({ left: Math.max(0, point.left - 80), behavior: "smooth" });
  }
  if (lessonStatus(lesson) === "locked") {
    showToast("This topic opens up as you finish the steps leading to it.");
  }
}

function openPractice(lesson) {
  elements.practiceTitle.textContent = `Try what you’ve learned.`;
  elements.practiceContext.textContent = `${lesson.title} · ${lesson.minutes} min · Save a thought, a question, or a tiny experiment.`;
  elements.practiceChallenge.textContent = lesson.challenge;
  elements.practiceNote.value = state.journals[state.track]?.[lesson.id] || "";
  elements.practiceForm.dataset.lessonId = lesson.id;
  elements.practiceForm.dataset.trackId = state.track;
  if (typeof elements.dialog.showModal === "function") {
    elements.dialog.showModal();
    elements.practiceNote.focus();
  } else {
    showToast("Practice notes need a browser that supports the study dialog.");
  }
}

document.querySelector("#map-nodes").addEventListener("click", event => {
  const button = event.target.closest("[data-node-id]");
  if (button) selectLesson(button.dataset.nodeId);
});

document.querySelectorAll(".track-link").forEach(button => {
  button.addEventListener("click", () => {
    state.track = button.dataset.track;
    selectedNodeId = null;
    searchQuery = "";
    activeFilter = "all";
    elements.topicSearch.value = "";
    elements.topicFilter.value = "all";
    elements.mapScroll.scrollTo({ left: 0 });
    saveState();
    render();
  });
});

elements.trackSelect.addEventListener("change", event => {
  const button = document.querySelector(`.track-link[data-track="${CSS.escape(event.target.value)}"]`);
  button?.click();
});

elements.topicSearch.addEventListener("input", event => {
  searchQuery = event.target.value.trim().toLowerCase();
  renderNodes();
});

elements.topicFilter.addEventListener("change", event => {
  activeFilter = event.target.value;
  renderNodes();
});

elements.jumpToNext.addEventListener("click", () => {
  selectLesson(nextLesson().id, { scrollMap: true });
  elements.lessonDetails.scrollIntoView({ behavior: "smooth", block: "center" });
});

elements.focusLesson.addEventListener("click", () => {
  selectLesson(nextLesson().id, { scrollMap: true });
  elements.lessonDetails.scrollIntoView({ behavior: "smooth", block: "center" });
  elements.mapFrame.classList.add("is-highlighted");
  setTimeout(() => elements.mapFrame.classList.remove("is-highlighted"), 1300);
});

elements.practiceSession.addEventListener("click", () => openPractice(
  currentTrack().lessons.find(item => item.id === selectedNodeId) || nextLesson()
));

elements.closePractice.addEventListener("click", () => elements.dialog.close());
elements.cancelPractice.addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("click", event => {
  if (event.target === elements.dialog) elements.dialog.close();
});

elements.practiceForm.addEventListener("submit", event => {
  event.preventDefault();
  const trackId = elements.practiceForm.dataset.trackId;
  const lessonId = elements.practiceForm.dataset.lessonId;
  const track = tracks[trackId];
  const lesson = track?.lessons.find(item => item.id === lessonId);
  if (!track || !lesson) {
    showToast("This note couldn’t be saved because its lesson is no longer available.");
    return;
  }
  const note = elements.practiceNote.value.trim();
  state.journals[trackId] = state.journals[trackId] || {};
  state.journals[trackId][lessonId] = note;
  state.practiced[trackId] = state.practiced[trackId] || {};
  state.practiced[trackId][lessonId] = true;
  saveState();
  elements.dialog.close();
  if (note) {
    showToast("Your note is tucked away here for next time.");
  } else {
    showToast("A little practice counts, too. You can come back any time.");
  }
  if (trackId === state.track) renderLessonDetails();
});

document.querySelectorAll("[data-nav]").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll("[data-nav]").forEach(nav => {
      const active = nav === link;
      nav.classList.toggle("is-active", active);
      if (active) nav.setAttribute("aria-current", "page");
      else nav.removeAttribute("aria-current");
    });
  });
});

render();
