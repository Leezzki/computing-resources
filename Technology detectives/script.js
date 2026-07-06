// Data lives near the top so teachers can edit or extend the lessons later.
// Year 2 is now lesson-based, so a new Year 3 lesson can reuse the same activity framework.
const SCHOOL_RULES = [
  "Carry laptops with two hands.",
  "No food or drink near laptops.",
  "Only use teacher-approved websites.",
  "Ask permission before taking photos.",
  "Log out when you finish."
];

const FEEDBACK_PAUSE_MS = 1600;
const LEVEL_ADVANCE_PAUSE_MS = 2200;

const LESSON_SETS = {
  year1: {
    yearLabel: "Year 1",
    menuTitle: "Technology Detective",
    title: "Technology Detectives",
    subtitle: "Can you find the things made by people to help us?",
    definition: "Technology = something made by people to help us.",
    finalTitle: "Technology Detective",
    masterTitle: "Master Technology Detective",
    finalMessage: "Fantastic work! You discovered that technology is anything made by people to help us.",
    knowMessage: "I know technology is something made by people to help us.",
    identifyItems: [
      { name: "Pencil", icon: "✏️", isTechnology: true },
      { name: "Chair", icon: "🪑", isTechnology: true },
      { name: "Laptop", icon: "💻", isTechnology: true },
      { name: "Book", icon: "📘", isTechnology: true },
      { name: "Spoon", icon: "🥄", isTechnology: true },
      { name: "Tree", icon: "🌳", isTechnology: false },
      { name: "Rock", icon: "🪨", isTechnology: false },
      { name: "Tablet", icon: "📱", isTechnology: true },
      { name: "Door", icon: "🚪", isTechnology: true },
      { name: "Shoes", icon: "👟", isTechnology: true }
    ],
    helpItems: [
      {
        name: "Laptop",
        icon: "💻",
        correct: "helps us learn",
        choices: ["helps us learn", "helps us swim", "helps us sleep"]
      },
      {
        name: "Pencil",
        icon: "✏️",
        correct: "helps us write",
        choices: ["helps us write", "helps us cook", "helps us fly"]
      },
      {
        name: "Chair",
        icon: "🪑",
        correct: "helps us sit",
        choices: ["helps us sit", "helps us paint walls", "helps us drive"]
      }
    ],
    huntItems: [
      { name: "Laptop", icon: "💻", isTechnology: true },
      { name: "Pencil", icon: "✏️", isTechnology: true },
      { name: "Chair", icon: "🪑", isTechnology: true },
      { name: "Book", icon: "📘", isTechnology: true },
      { name: "Whiteboard", icon: "⬜", isTechnology: true },
      { name: "Scissors", icon: "✂️", isTechnology: true },
      { name: "Ruler", icon: "📏", isTechnology: true },
      { name: "Clock", icon: "🕘", isTechnology: true },
      { name: "Door", icon: "🚪", isTechnology: true },
      { name: "Plant", icon: "🪴", isTechnology: false },
      { name: "Rock", icon: "🪨", isTechnology: false },
      { name: "Banana", icon: "🍌", isTechnology: false },
      { name: "Puddle", icon: "💧", isTechnology: false },
      { name: "Leaf", icon: "🍃", isTechnology: false }
    ]
  },
  year2Lesson1: {
    lessonNumber: 1,
    yearLabel: "Year 2",
    menuTitle: "IT Explorer",
    title: "💻 IT Explorer",
    subtitle: "Technology is everywhere!",
    definition: "Information Technology helps us make, store, send or use information.",
    finalTitle: "IT Explorer",
    masterTitle: "Master IT Explorer",
    finalMessage: "You have discovered that Information Technology is everywhere, not just on a computer!",
    knowMessage: "I know Information Technology is not just computers.",
    story: [
      "Technology is everywhere!",
      "Your mission is to explore different places and discover which objects are Information Technology.",
      "Some are computers.",
      "Some are Information Technology but NOT computers.",
      "Some are not Information Technology at all.",
      "Can you correctly identify them all?"
    ],
    learningObjectives: [
      "Identify examples of Information Technology.",
      "Understand that Information Technology is not just computers.",
      "Begin to classify different forms of Information Technology."
    ],
    successCriteria: [
      "I can identify Information Technology.",
      "I can explain why something is Information Technology.",
      "I can identify examples that are computers."
    ],
    sortCategories: [
      { key: "computer", title: "🖥 Computer" },
      { key: "it", title: "💻 Information Technology" },
      { key: "not-it", title: "🚫 Not Information Technology" }
    ],
    sortItems: [
      { name: "Laptop", icon: "💻", category: "computer", explanation: "Correct! A laptop is a computer we can use to learn and make work." },
      { name: "Desktop Computer", icon: "🖥️", category: "computer", explanation: "Correct! A desktop computer helps us use information." },
      { name: "Tablet", icon: "📱", category: "computer", explanation: "Correct! A tablet is a small computer." },
      { name: "Smartphone", icon: "📱", category: "computer", explanation: "Correct! A smartphone is a computer in your hand." },
      { name: "Interactive Whiteboard", icon: "⬜", category: "it", explanation: "Correct! It shows and shares information for the class." },
      { name: "Printer", icon: "🖨️", category: "it", explanation: "Correct! A printer puts digital work onto paper." },
      { name: "Projector", icon: "📽️", category: "it", explanation: "Correct! A projector shows information on a big screen." },
      { name: "Digital Camera", icon: "📷", category: "it", explanation: "Correct! A digital camera stores photographs." },
      { name: "Traffic Lights", icon: "🚦", category: "it", explanation: "Correct! Traffic lights use computers to control traffic safely." },
      { name: "Self-service Checkout", icon: "🛒", category: "it", explanation: "Correct! It scans and uses information about shopping." },
      { name: "ATM", icon: "🏧", category: "it", explanation: "Correct! An ATM uses information to help people get money." },
      { name: "Barcode Scanner", icon: "▥", category: "it", explanation: "Correct! It reads information from a barcode." },
      { name: "Robot Vacuum", icon: "🤖", category: "it", explanation: "Correct! It uses information to move and clean." },
      { name: "Smart Watch", icon: "⌚", category: "computer", explanation: "Correct! A smart watch is a tiny computer you can wear." },
      { name: "Television", icon: "📺", category: "it", explanation: "Correct! A television shows sound and picture information." },
      { name: "Game Console", icon: "🎮", category: "computer", explanation: "Correct! A game console is a computer for games." },
      { name: "Calculator", icon: "🧮", category: "it", explanation: "Correct! A calculator uses information with numbers." },
      { name: "Remote Control", icon: "🔘", category: "it", explanation: "Correct! A remote sends information to another device." },
      { name: "Book", icon: "📘", category: "not-it", explanation: "Correct! A book has information, but it is not Information Technology." },
      { name: "Pencil", icon: "✏️", category: "not-it", explanation: "Correct! A pencil is technology, but not Information Technology." },
      { name: "Football", icon: "⚽", category: "not-it", explanation: "Correct! A football is not Information Technology." },
      { name: "Tree", icon: "🌳", category: "not-it", explanation: "Correct! A tree is natural, not Information Technology." },
      { name: "Chair", icon: "🪑", category: "not-it", explanation: "Correct! A chair helps us sit, but it is not Information Technology." },
      { name: "Backpack", icon: "🎒", category: "not-it", explanation: "Correct! A backpack carries things, but it is not Information Technology." }
    ],
    locations: [
      { key: "school", name: "School", icon: "🏫" },
      { key: "supermarket", name: "Supermarket", icon: "🏪" },
      { key: "hospital", name: "Hospital", icon: "🏥" },
      { key: "office", name: "Office", icon: "🏢" },
      { key: "library", name: "Library", icon: "📚" },
      { key: "home", name: "Home", icon: "🏠" },
      { key: "airport", name: "Airport", icon: "✈️" }
    ],
    locationItems: [
      { name: "Tablet", icon: "📱", locations: ["school", "hospital", "library", "home"], explanation: "Yes! A tablet can help people learn, read or record information." },
      { name: "Printer", icon: "🖨️", locations: ["school", "hospital", "office", "library", "home", "airport"], explanation: "Yes! A printer can be used in many places to print information." },
      { name: "Barcode Scanner", icon: "▥", locations: ["supermarket", "library", "hospital", "airport"], explanation: "Yes! A barcode scanner reads information quickly." },
      { name: "Projector", icon: "📽️", locations: ["school", "office", "library", "home"], explanation: "Yes! A projector helps people show information." },
      { name: "Digital Camera", icon: "📷", locations: ["school", "hospital", "office", "home", "airport"], explanation: "Yes! A camera stores picture information." },
      { name: "Self-service Checkout", icon: "🛒", locations: ["supermarket"], explanation: "Yes! It helps shoppers scan and pay." },
      { name: "ATM", icon: "🏧", locations: ["supermarket", "office", "airport"], explanation: "Yes! An ATM helps people get money using information." },
      { name: "Interactive Whiteboard", icon: "⬜", locations: ["school", "office"], explanation: "Yes! It helps a group see and use information." }
    ],
    purposeItems: [
      { name: "Barcode Scanner", icon: "▥", purpose: "Scan products" },
      { name: "Projector", icon: "📽️", purpose: "Show work" },
      { name: "Printer", icon: "🖨️", purpose: "Print work" },
      { name: "Tablet", icon: "📱", purpose: "Learn" },
      { name: "Traffic Lights", icon: "🚦", purpose: "Help traffic move safely" },
      { name: "ATM", icon: "🏧", purpose: "Get money" },
      { name: "Camera", icon: "📷", purpose: "Take photographs" }
    ],
    quickItems: [
      { name: "Laptop", icon: "💻", category: "computer", explanation: "A laptop is a computer." },
      { name: "Printer", icon: "🖨️", category: "it", explanation: "A printer is Information Technology, but not a computer." },
      { name: "Tree", icon: "🌳", category: "not-it", explanation: "A tree is natural, so it is not Information Technology." },
      { name: "Smart Watch", icon: "⌚", category: "computer", explanation: "A smart watch is a tiny computer." },
      { name: "Traffic Lights", icon: "🚦", category: "it", explanation: "Traffic lights use information to control traffic." },
      { name: "Football", icon: "⚽", category: "not-it", explanation: "A football is not Information Technology." },
      { name: "Game Console", icon: "🎮", category: "computer", explanation: "A game console is a computer for games." },
      { name: "ATM", icon: "🏧", category: "it", explanation: "An ATM uses information to help people get money." },
      { name: "Book", icon: "📘", category: "not-it", explanation: "A book has information, but it is not Information Technology." },
      { name: "Digital Camera", icon: "📷", category: "it", explanation: "A digital camera stores photo information." }
    ]
  },
  year2Lesson2: {
    lessonNumber: 2,
    yearLabel: "Year 2",
    menuTitle: "IT in School",
    title: "🏫 FSB IT Hunt",
    subtitle: "You are visiting FSB School to discover how IT helps us every day.",
    definition: "Information Technology helps teachers and children every day.",
    finalTitle: "FSB IT Explorer",
    masterTitle: "Master FSB IT Explorer",
    finalMessage: "You discovered how Information Technology helps our school every day!",
    knowMessage: "I know Information Technology helps us learn, communicate, create and stay organised.",
    story: [
      "You've become an official IT Explorer!",
      "Today you're visiting FSB School to discover how Information Technology helps teachers and children every day.",
      "Can you find the IT, explain what it does and discover that some technology can be used in more than one way?"
    ],
    learningObjectives: [
      "To identify the uses of Information Technology in school.",
      "To sort school IT by what it is used for.",
      "To identify that some IT can be used in more than one way."
    ],
    successCriteria: [
      "I can identify examples of IT.",
      "I can sort school IT by what it is used for.",
      "I can identify that some IT can be used in more than one way."
    ],
    activities: [
      { key: "find", type: "find", title: "Find the IT", prompt: "Click on all the Information Technology.", nextLabel: "Keep Exploring" },
      { key: "uses", type: "uses", title: "What is it used for?", prompt: "Drag each IT device into one of four boxes.", nextLabel: "Next" },
      { key: "users", type: "users", title: "Who uses this?", prompt: "Choose who uses each device.", nextLabel: "Next" },
      { key: "detective", type: "detective", title: "Technology Detective Challenge", prompt: "Answer the quick-fire questions.", nextLabel: "Next" },
      { key: "build", type: "build", title: "Build Your Classroom", prompt: "Drag IT equipment into the room.", nextLabel: "Explain My Classroom" }
    ],
    findItems: [
      { name: "Laptop", icon: "💻", isTechnology: true, explanation: "Great! A laptop helps children learn and make work." },
      { name: "Interactive Whiteboard", icon: "⬜", isTechnology: true, explanation: "Great! The interactive whiteboard helps everyone see and share work." },
      { name: "Printer", icon: "🖨️", isTechnology: true, explanation: "Great! A printer helps us print work." },
      { name: "Visualiser", icon: "🔍", isTechnology: true, explanation: "Great! The visualiser helps everyone see work." },
      { name: "Teacher iPad", icon: "📱", isTechnology: true, explanation: "Great! A teacher iPad can help teachers plan, show and record learning." },
      { name: "Classroom Camera", icon: "📸", isTechnology: true, explanation: "Great! A classroom camera helps us take and share pictures and videos." },
      { name: "Projector", icon: "📽️", isTechnology: true, explanation: "Great! A projector helps us see information on a big screen." },
      { name: "Speakers", icon: "🔊", isTechnology: true, explanation: "Great! Speakers help us hear sound and messages." },
      { name: "Clock", icon: "🕒", isTechnology: true, explanation: "Great! A digital clock shows time using information." },
      { name: "Tablet", icon: "📱", isTechnology: true, explanation: "Great! A tablet helps us learn, create and communicate." },
      { name: "Book", icon: "📘", isTechnology: false, explanation: "Good thinking! A book is not Information Technology." },
      { name: "Chair", icon: "🪑", isTechnology: false, explanation: "Good thinking! A chair is not Information Technology." },
      { name: "Plant", icon: "🪴", isTechnology: false, explanation: "Good thinking! A plant is not Information Technology." },
      { name: "Pencil", icon: "✏️", isTechnology: false, explanation: "Good thinking! A pencil is not Information Technology." },
      { name: "Bag", icon: "🎒", isTechnology: false, explanation: "Good thinking! A bag is not Information Technology." },
      { name: "Scissors", icon: "✂️", isTechnology: false, explanation: "Good thinking! Scissors are not Information Technology." },
      { name: "Glue", icon: "🧴", isTechnology: false, explanation: "Good thinking! Glue is not Information Technology." },
      { name: "Window", icon: "🪟", isTechnology: false, explanation: "Good thinking! A window is not Information Technology." }
    ],
    useCategories: [
      { key: "learn", title: "Learn" },
      { key: "communicate", title: "Communicate" },
      { key: "create", title: "Create" },
      { key: "help", title: "Help Us" }
    ],
    useItems: [
      {
        name: "Printer",
        icon: "🖨️",
        categories: ["help"],
        explanation: "Excellent! A printer helps us make paper copies."
      },
      {
        name: "Laptop",
        icon: "💻",
        categories: ["learn", "create"],
        explanation: "Excellent! A laptop can be used for learning and creating work."
      },
      {
        name: "Tablet",
        icon: "📱",
        categories: ["learn", "communicate", "create"],
        explanation: "Excellent! A tablet can also be used for learning and communicating."
      },
      {
        name: "Interactive Whiteboard",
        icon: "⬜",
        categories: ["learn", "communicate"],
        explanation: "Great! An interactive whiteboard can help us learn and communicate."
      },
      {
        name: "Speakers",
        icon: "🔊",
        categories: ["communicate"],
        explanation: "Yes! Speakers help us share sound and messages."
      },
      {
        name: "Visualiser",
        icon: "🔍",
        categories: ["learn", "communicate"],
        explanation: "Great! A visualiser helps everyone see work."
      },
      {
        name: "Classroom Camera",
        icon: "📸",
        categories: ["create", "communicate"],
        explanation: "Excellent! A classroom camera can help us create and share work."
      },
      {
        name: "Teacher iPad",
        icon: "📱",
        categories: ["learn", "communicate", "create"],
        explanation: "Excellent! A teacher iPad can help us learn, communicate and create."
      }
    ],
    userItems: [
      { name: "Printer", icon: "🖨️", correct: "Office", choices: ["Teacher", "Student", "Office", "Everyone"], explanation: "The office often uses a printer." },
      { name: "Visualiser", icon: "🔍", correct: "Teacher", choices: ["Teacher", "Student", "Office", "Everyone"], explanation: "Teachers use a visualiser to show work to the class." },
      { name: "Laptop", icon: "💻", correct: "Student", choices: ["Teacher", "Student", "Office", "Everyone"], explanation: "Students use laptops to learn and make work." },
      { name: "Interactive Whiteboard", icon: "⬜", correct: "Everyone", choices: ["Teacher", "Student", "Office", "Everyone"], explanation: "Everyone can use the interactive whiteboard during a lesson." },
      { name: "Photocopier", icon: "📠", correct: "Office", choices: ["Teacher", "Student", "Office", "Everyone"], explanation: "The office uses a photocopier for many copies." },
      { name: "School Phone", icon: "☎️", correct: "Office", choices: ["Teacher", "Student", "Office", "Everyone"], explanation: "The office uses the school phone to call people." }
    ],
    detectiveItems: [
      {
        name: "Printer",
        icon: "🖨️",
        isIT: true,
        helpAnswer: "It helps us print work",
        helpChoices: ["It helps us print work", "It helps us write", "It helps us sit"],
        explanation: "Yes! A printer is Information Technology and it helps us print work."
      },
      {
        name: "Pencil",
        icon: "✏️",
        isIT: false,
        helpAnswer: "It helps us write",
        helpChoices: ["It helps us write", "It helps us make calls", "It helps us show videos"],
        explanation: "No. A pencil is not Information Technology, but it helps us write."
      },
      {
        name: "Laptop",
        icon: "💻",
        isIT: true,
        helpAnswer: "It helps us learn",
        helpChoices: ["It helps us learn", "It helps us jump", "It helps us carry water"],
        explanation: "Yes! A laptop is Information Technology and it helps us learn."
      },
      {
        name: "Chair",
        icon: "🪑",
        isIT: false,
        helpAnswer: "It helps us sit",
        helpChoices: ["It helps us sit", "It helps us scan books", "It helps us display work"],
        explanation: "No. A chair is not Information Technology, but it helps us sit."
      },
      {
        name: "Speakers",
        icon: "🔊",
        isIT: true,
        helpAnswer: "It helps us hear sound",
        helpChoices: ["It helps us hear sound", "It helps us plant seeds", "It helps us paint walls"],
        explanation: "Yes! Speakers are Information Technology and they help us hear sound."
      },
      {
        name: "Book",
        icon: "📘",
        isIT: false,
        helpAnswer: "It helps us read",
        helpChoices: ["It helps us read", "It helps us send emails", "It helps us print paper"],
        explanation: "No. A book is not Information Technology, but it helps us read."
      }
    ],
    buildSlots: [
      "Learning Spot",
      "Sharing Spot",
      "Printing Spot",
      "Listening Spot",
      "Picture Spot",
      "Teacher Spot",
      "Display Spot"
    ],
    buildItems: [
      { name: "Laptop", icon: "💻", explanation: "A laptop helps children learn and make work." },
      { name: "Interactive Whiteboard", icon: "⬜", explanation: "An interactive whiteboard helps the class see and share ideas." },
      { name: "Printer", icon: "🖨️", explanation: "A printer gives us paper copies." },
      { name: "Visualiser", icon: "🔍", explanation: "A visualiser shows work to everyone." },
      { name: "Teacher iPad", icon: "📱", explanation: "A teacher iPad helps teachers plan, show and record learning." },
      { name: "Speakers", icon: "🔊", explanation: "Speakers help us hear sound and instructions." },
      { name: "Classroom Camera", icon: "📸", explanation: "A classroom camera helps us take and share pictures and videos." }
    ]
  },
  year2Lesson3: {
    lessonNumber: 3,
    yearLabel: "Year 2",
    menuTitle: "Future Jobs Explorer",
    title: "💼 Future Jobs Explorer",
    subtitle: "Visit different places. Find the IT. Discover how it helps people.",
    definition: "IT helps people do jobs.",
    finalTitle: "Future Jobs Explorer",
    masterTitle: "Master Future Jobs Explorer",
    finalMessage: "You found how IT helps people do important jobs.",
    knowMessage: "I can see how IT helps people at work.",
    intro: "Visit different places. Find the IT. Discover how it helps people.",
    activities: [
      { key: "place", type: "place", title: "Choose a Place", prompt: "Pick a place to visit." },
      { key: "find", type: "find", title: "Find the IT", prompt: "Click the IT." },
      { key: "help", type: "help", title: "How Does It Help?", prompt: "Choose how it helps." },
      { key: "job", type: "job", title: "Job Challenge", prompt: "Choose the best IT." }
    ],
    workplaces: [
      {
        key: "hospital",
        name: "Hospital",
        icon: "🏥",
        color: "place-hospital",
        items: [
          { name: "Patient Monitor", icon: "📈", isTechnology: true, explanation: "Great! A patient monitor shows health information." },
          { name: "X-ray Machine", icon: "🩻", isTechnology: true, explanation: "Great! An X-ray machine helps doctors see inside the body." },
          { name: "Computer", icon: "💻", isTechnology: true, explanation: "Great! A computer helps staff find and use information." },
          { name: "Printer", icon: "🖨️", isTechnology: true, explanation: "Great! A printer helps staff print information." },
          { name: "Bed", icon: "🛏️", isTechnology: false, explanation: "Not IT. Try another item." },
          { name: "Plant", icon: "🪴", isTechnology: false, explanation: "Not IT. Try another item." }
        ],
        helpItems: [
          {
            name: "X-ray Machine",
            icon: "🩻",
            choices: ["Helps doctors see inside the body", "Helps people buy food", "Helps animals sleep"],
            correct: "Helps doctors see inside the body",
            explanation: "Yes! An X-ray machine helps doctors see inside the body."
          },
          {
            name: "Patient Monitor",
            icon: "📈",
            choices: ["Shows health information", "Helps people write a book", "Makes a sandwich"],
            correct: "Shows health information",
            explanation: "Yes! A patient monitor shows health information."
          },
          {
            name: "Computer",
            icon: "💻",
            choices: ["Helps staff find information", "Helps plants grow", "Helps shoes talk"],
            correct: "Helps staff find information",
            explanation: "Yes! A computer helps staff find information."
          }
        ],
        jobItems: [
          {
            worker: "Doctor",
            icon: "👩‍⚕️",
            problem: "needs to see inside a body",
            choices: ["X-ray machine", "Bookshelf", "Basket"],
            correct: "X-ray machine",
            explanation: "Yes! The X-ray machine helps the doctor."
          },
          {
            worker: "Nurse",
            icon: "👩‍⚕️",
            problem: "needs health information",
            choices: ["Patient monitor", "Plant", "Chair"],
            correct: "Patient monitor",
            explanation: "Yes! The patient monitor helps the nurse."
          }
        ]
      },
      {
        key: "supermarket",
        name: "Supermarket",
        icon: "🛒",
        color: "place-supermarket",
        items: [
          { name: "Barcode Scanner", icon: "▥", isTechnology: true, explanation: "Great! A barcode scanner helps scan products quickly." },
          { name: "Till", icon: "🧾", isTechnology: true, explanation: "Great! A till helps staff take money and save information." },
          { name: "Self-checkout", icon: "🛒", isTechnology: true, explanation: "Great! A self-checkout helps shoppers pay by themselves." },
          { name: "Price Screen", icon: "📺", isTechnology: true, explanation: "Great! A price screen shows shopping information." },
          { name: "Basket", icon: "🧺", isTechnology: false, explanation: "Not IT. Try another item." },
          { name: "Apple", icon: "🍎", isTechnology: false, explanation: "Not IT. Try another item." }
        ],
        helpItems: [
          {
            name: "Barcode Scanner",
            icon: "▥",
            choices: ["Helps scan products quickly", "Helps put out fires", "Helps grow trees"],
            correct: "Helps scan products quickly",
            explanation: "Yes! A barcode scanner helps scan products quickly."
          },
          {
            name: "Self-checkout",
            icon: "🛒",
            choices: ["Helps people pay by themselves", "Helps people catch fish", "Helps people sleep"],
            correct: "Helps people pay by themselves",
            explanation: "Yes! Self-checkout helps people pay by themselves."
          },
          {
            name: "Price Screen",
            icon: "📺",
            choices: ["Shows price information", "Helps make soup", "Helps sweep floors"],
            correct: "Shows price information",
            explanation: "Yes! A price screen shows price information."
          }
        ],
        jobItems: [
          {
            worker: "Shop worker",
            icon: "🧑‍💼",
            problem: "needs to scan a product",
            choices: ["Barcode scanner", "Fire hose", "Suitcase"],
            correct: "Barcode scanner",
            explanation: "Yes! The barcode scanner helps the shop worker."
          },
          {
            worker: "Cashier",
            icon: "🧑‍💼",
            problem: "needs to see the price",
            choices: ["Price screen", "Tree", "Pencil"],
            correct: "Price screen",
            explanation: "Yes! The price screen helps the cashier."
          }
        ]
      },
      {
        key: "airport",
        name: "Airport",
        icon: "✈️",
        color: "place-airport",
        items: [
          { name: "Passport Scanner", icon: "🛂", isTechnology: true, explanation: "Great! A passport scanner reads travel information." },
          { name: "Flight Screen", icon: "🛫", isTechnology: true, explanation: "Great! A flight screen shows flight information." },
          { name: "Security Scanner", icon: "🧲", isTechnology: true, explanation: "Great! A security scanner helps check bags." },
          { name: "Computer", icon: "💻", isTechnology: true, explanation: "Great! A computer helps airport staff use information." },
          { name: "Suitcase", icon: "🧳", isTechnology: false, explanation: "Not IT. Try another item." },
          { name: "Chair", icon: "🪑", isTechnology: false, explanation: "Not IT. Try another item." }
        ],
        helpItems: [
          {
            name: "Flight Screen",
            icon: "🛫",
            choices: ["Shows flight information", "Prints homework", "Makes music"],
            correct: "Shows flight information",
            explanation: "Yes! A flight screen shows flight information."
          },
          {
            name: "Passport Scanner",
            icon: "🛂",
            choices: ["Checks travel information", "Helps grow flowers", "Helps cook dinner"],
            correct: "Checks travel information",
            explanation: "Yes! A passport scanner checks travel information."
          },
          {
            name: "Security Scanner",
            icon: "🧲",
            choices: ["Checks bags safely", "Helps people read books", "Helps cars fly"],
            correct: "Checks bags safely",
            explanation: "Yes! A security scanner checks bags safely."
          }
        ],
        jobItems: [
          {
            worker: "Pilot",
            icon: "🧑‍✈️",
            problem: "needs flight information",
            choices: ["Flight screen", "Tree", "Pencil"],
            correct: "Flight screen",
            explanation: "Yes! The flight screen helps the pilot."
          },
          {
            worker: "Security worker",
            icon: "🧑‍✈️",
            problem: "needs to check a bag",
            choices: ["Security scanner", "Apple", "Chair"],
            correct: "Security scanner",
            explanation: "Yes! The security scanner helps the security worker."
          }
        ]
      },
      {
        key: "library",
        name: "Library",
        icon: "📚",
        color: "place-library",
        items: [
          { name: "Self-checkout", icon: "🛒", isTechnology: true, explanation: "Great! A self-checkout helps people borrow books." },
          { name: "Computer", icon: "💻", isTechnology: true, explanation: "Great! A computer helps people search and read information." },
          { name: "Printer", icon: "🖨️", isTechnology: true, explanation: "Great! A printer helps print information." },
          { name: "Barcode Scanner", icon: "▥", isTechnology: true, explanation: "Great! A barcode scanner helps scan books quickly." },
          { name: "Bookshelf", icon: "📚", isTechnology: false, explanation: "Not IT. Try another item." },
          { name: "Table", icon: "🪑", isTechnology: false, explanation: "Not IT. Try another item." }
        ],
        helpItems: [
          {
            name: "Barcode Scanner",
            icon: "▥",
            choices: ["Helps scan books quickly", "Helps clean the floor", "Helps grow trees"],
            correct: "Helps scan books quickly",
            explanation: "Yes! A barcode scanner helps scan books quickly."
          },
          {
            name: "Self-checkout",
            icon: "🛒",
            choices: ["Helps people borrow books", "Helps people play football", "Helps people paint walls"],
            correct: "Helps people borrow books",
            explanation: "Yes! Self-checkout helps people borrow books."
          },
          {
            name: "Computer",
            icon: "💻",
            choices: ["Helps find information", "Helps cook lunch", "Helps build a wall"],
            correct: "Helps find information",
            explanation: "Yes! A computer helps people find information."
          }
        ],
        jobItems: [
          {
            worker: "Librarian",
            icon: "👩‍🏫",
            problem: "needs to scan a book",
            choices: ["Barcode scanner", "Fire hose", "Suitcase"],
            correct: "Barcode scanner",
            explanation: "Yes! The barcode scanner helps the librarian."
          },
          {
            worker: "Reader",
            icon: "👧",
            problem: "needs to find a book",
            choices: ["Computer", "Tree", "Basket"],
            correct: "Computer",
            explanation: "Yes! The computer helps the reader."
          }
        ]
      },
      {
        key: "fireStation",
        name: "Fire Station",
        icon: "🚒",
        color: "place-fire",
        items: [
          { name: "Radio", icon: "📻", isTechnology: true, explanation: "Great! A radio helps firefighters talk." },
          { name: "Computer", icon: "💻", isTechnology: true, explanation: "Great! A computer helps firefighters use information." },
          { name: "Alarm System", icon: "🚨", isTechnology: true, explanation: "Great! An alarm system helps warn people." },
          { name: "Tablet", icon: "📱", isTechnology: true, explanation: "Great! A tablet helps firefighters read and share information." },
          { name: "Hose", icon: "🧯", isTechnology: false, explanation: "Not IT. Try another item." },
          { name: "Helmet", icon: "⛑️", isTechnology: false, explanation: "Not IT. Try another item." }
        ],
        helpItems: [
          {
            name: "Radio",
            icon: "📻",
            choices: ["Helps the team talk", "Helps grow flowers", "Helps people eat lunch"],
            correct: "Helps the team talk",
            explanation: "Yes! A radio helps the team talk."
          },
          {
            name: "Alarm System",
            icon: "🚨",
            choices: ["Warns people quickly", "Cleans the floor", "Cuts paper"],
            correct: "Warns people quickly",
            explanation: "Yes! An alarm system warns people quickly."
          },
          {
            name: "Tablet",
            icon: "📱",
            choices: ["Helps read information", "Helps wash a car", "Helps kick a ball"],
            correct: "Helps read information",
            explanation: "Yes! A tablet helps read information."
          }
        ],
        jobItems: [
          {
            worker: "Firefighter",
            icon: "👩‍🚒",
            problem: "needs to talk to the team",
            choices: ["Radio", "Chair", "Apple"],
            correct: "Radio",
            explanation: "Yes! The radio helps the firefighter."
          },
          {
            worker: "Crew",
            icon: "👨‍🚒",
            problem: "needs to warn people",
            choices: ["Alarm system", "Tree", "Pencil"],
            correct: "Alarm system",
            explanation: "Yes! The alarm system helps the crew warn people."
          }
        ]
      },
      {
        key: "zoo",
        name: "Zoo",
        icon: "🐘",
        color: "place-zoo",
        items: [
          { name: "Ticket Scanner", icon: "🎟️", isTechnology: true, explanation: "Great! A ticket scanner checks tickets quickly." },
          { name: "Security Camera", icon: "📷", isTechnology: true, explanation: "Great! A security camera helps keep people safe." },
          { name: "Computer", icon: "💻", isTechnology: true, explanation: "Great! A computer helps staff use information." },
          { name: "Digital Map Screen", icon: "🗺️", isTechnology: true, explanation: "Great! A digital map screen shows zoo information." },
          { name: "Tree", icon: "🌳", isTechnology: false, explanation: "Not IT. Try another item." },
          { name: "Bench", icon: "🪑", isTechnology: false, explanation: "Not IT. Try another item." }
        ],
        helpItems: [
          {
            name: "Ticket Scanner",
            icon: "🎟️",
            choices: ["Checks tickets quickly", "Helps animals sleep", "Helps people sing"],
            correct: "Checks tickets quickly",
            explanation: "Yes! A ticket scanner checks tickets quickly."
          },
          {
            name: "Security Camera",
            icon: "📷",
            choices: ["Helps keep people safe", "Helps grow grass", "Helps make soup"],
            correct: "Helps keep people safe",
            explanation: "Yes! A security camera helps keep people safe."
          },
          {
            name: "Digital Map Screen",
            icon: "🗺️",
            choices: ["Shows zoo information", "Helps people write letters", "Helps birds fly"],
            correct: "Shows zoo information",
            explanation: "Yes! A digital map screen shows zoo information."
          }
        ],
        jobItems: [
          {
            worker: "Zoo keeper",
            icon: "🧑‍🌾",
            problem: "needs to check a ticket",
            choices: ["Ticket scanner", "Chair", "Apple"],
            correct: "Ticket scanner",
            explanation: "Yes! The ticket scanner helps the zoo keeper."
          },
          {
            worker: "Visitor",
            icon: "🧒",
            problem: "needs zoo directions",
            choices: ["Digital map screen", "Tree", "Pencil"],
            correct: "Digital map screen",
            explanation: "Yes! The digital map screen helps the visitor."
          }
        ]
      }
    ]
  },
  year2Lesson5: {
    lessonNumber: 5,
    yearLabel: "Year 2",
    menuTitle: "IT Safety Academy",
    title: "🛡️ IT Safety Academy",
    subtitle: "Can you become an FSB IT Safety Expert?",
    definition: "Keep people and tech safe.",
    finalTitle: "FSB IT Safety Expert",
    masterTitle: "Master IT Safety Expert",
    finalMessage: "You know how to stay safe and look after technology.",
    knowMessage: "I can keep people and technology safe.",
    intro: "Can you become an FSB IT Safety Expert? Complete every challenge and keep everyone safe.",
    activities: [
      { key: "spot", type: "spot", title: "Spot the Problem", prompt: "Click what is unsafe." },
      { key: "safe", type: "safe", title: "Safe or Unsafe?", prompt: "Choose SAFE or UNSAFE." },
      { key: "next", type: "next", title: "What Happens Next?", prompt: "Choose what happens next." },
      { key: "rule", type: "rule", title: "Finish the Rule", prompt: "Drag the missing word." },
      { key: "test", type: "test", title: "FSB Safety Test", prompt: "Answer 10 questions." }
    ],
    scenes: [
      {
        title: "Drink beside a laptop",
        icon: "🥤💻",
        unsafe: true,
        explanation: "Water can damage laptops."
      },
      {
        title: "One hand carry",
        icon: "🤏💻",
        unsafe: true,
        explanation: "Use two hands to carry a laptop."
      },
      {
        title: "Running with laptop",
        icon: "🏃💻",
        unsafe: true,
        explanation: "Walk carefully with a laptop."
      },
      {
        title: "Pulling cables",
        icon: "🧲🔌",
        unsafe: true,
        explanation: "Pulling cables can break equipment."
      },
      {
        title: "Photo without asking",
        icon: "📸❓",
        unsafe: true,
        explanation: "Always ask permission first."
      },
      {
        title: "Safe laptop use",
        icon: "✅💻",
        unsafe: false,
        explanation: "Yes! That is safe."
      },
      {
        title: "Eating near keyboard",
        icon: "🍪⌨️",
        unsafe: true,
        explanation: "Food can make computers dirty."
      },
      {
        title: "Cables on the floor",
        icon: "🪢⚠️",
        unsafe: true,
        explanation: "Cables should be kept tidy."
      },
      {
        title: "Shared tablet time",
        icon: "📱🤝",
        unsafe: false,
        explanation: "Yes! That is safe."
      },
      {
        title: "Approved websites",
        icon: "🌐✅",
        unsafe: false,
        explanation: "Yes! That is safe."
      }
    ],
    safetyQuestions: [
      {
        prompt: "Using two hands to carry a laptop",
        answer: "SAFE",
        explanation: "Yes! Two hands is safer."
      },
      {
        prompt: "Eating crisps over a keyboard",
        answer: "UNSAFE",
        explanation: "Food can make the keyboard dirty."
      },
      {
        prompt: "Logging out after using a computer",
        answer: "SAFE",
        explanation: "Yes! Logging out is safe."
      },
      {
        prompt: "Sharing your password",
        answer: "UNSAFE",
        explanation: "Passwords should stay secret."
      },
      {
        prompt: "Walking carefully with a laptop",
        answer: "SAFE",
        explanation: "Yes! Walk carefully."
      },
      {
        prompt: "Taking a photo after asking permission",
        answer: "SAFE",
        explanation: "Yes! Ask first."
      },
      {
        prompt: "Leaving a laptop open on the floor",
        answer: "UNSAFE",
        explanation: "Someone could trip or break it."
      },
      {
        prompt: "Using teacher-approved websites",
        answer: "SAFE",
        explanation: "Yes! Approved websites are safe."
      },
      {
        prompt: "Keeping a drink far from a laptop",
        answer: "SAFE",
        explanation: "Yes! Keep drinks away."
      },
      {
        prompt: "Pulling a cable to unplug it",
        answer: "UNSAFE",
        explanation: "Pull the plug, not the cable."
      }
    ],
    nextQuestions: [
      {
        prompt: "A drink is beside the laptop.",
        choices: ["Nothing happens.", "The drink spills onto the keyboard.", "The laptop becomes faster."],
        answer: "The drink spills onto the keyboard.",
        explanation: "Uh oh! The drink can spill."
      },
      {
        prompt: "Tom tells everyone his password.",
        choices: ["That's safe.", "Someone could use his account.", "The computer switches off."],
        answer: "Someone could use his account.",
        explanation: "A password must stay secret."
      },
      {
        prompt: "A laptop has two hands on it.",
        choices: ["It is safer.", "It disappears.", "It can swim."],
        answer: "It is safer.",
        explanation: "Yes! Two hands is safer."
      },
      {
        prompt: "A photo is taken after asking first.",
        choices: ["That is kind.", "The camera flies away.", "The screen turns green."],
        answer: "That is kind.",
        explanation: "Yes! Ask first."
      },
      {
        prompt: "A cable is pulled quickly.",
        choices: ["It may break.", "It makes cake.", "It becomes a pillow."],
        answer: "It may break.",
        explanation: "Pulling cables is not safe."
      },
      {
        prompt: "A teacher-approved website is opened.",
        choices: ["Good choice.", "The chair learns.", "The mouse sings."],
        answer: "Good choice.",
        explanation: "Yes! That is a good choice."
      },
      {
        prompt: "A laptop is left on the floor.",
        choices: ["Someone could trip.", "It becomes a hat.", "It makes rain."],
        answer: "Someone could trip.",
        explanation: "That is unsafe."
      },
      {
        prompt: "A password is kept secret.",
        choices: ["That is safe.", "The apple turns blue.", "The keyboard jumps."],
        answer: "That is safe.",
        explanation: "Yes! Keep passwords secret."
      },
      {
        prompt: "A drink is moved away from the laptop.",
        choices: ["Good idea.", "It starts a race.", "It grows legs."],
        answer: "Good idea.",
        explanation: "Yes! Drinks stay away."
      },
      {
        prompt: "A message is sent kindly.",
        choices: ["That is safe.", "The printer naps.", "The table barks."],
        answer: "That is safe.",
        explanation: "Kind messages are safe."
      }
    ],
    ruleSentences: SCHOOL_RULES.map((rule) => {
      const parts = {
        "Carry laptops with two hands.": { sentence: "Always carry a laptop with _____ hands.", choices: ["two", "one", "five"], answer: "two", explanation: "Two hands is safer." },
        "No food or drink near laptops.": { sentence: "Never eat or _____ near computers.", choices: ["drink", "dance", "sing"], answer: "drink", explanation: "Food and drink should stay away." },
        "Only use teacher-approved websites.": { sentence: "Only use _____-approved websites.", choices: ["teacher", "friend", "toy"], answer: "teacher", explanation: "Teacher-approved websites are safe." },
        "Ask permission before taking photos.": { sentence: "Always ask _____ before taking a photo.", choices: ["permission", "chocolate", "music"], answer: "permission", explanation: "Ask first." },
        "Log out when you finish.": { sentence: "Always _____ out when you finish.", choices: ["log", "colour", "jump"], answer: "log", explanation: "Logging out keeps accounts safe." }
      };
      return {
        rule,
        ...parts[rule]
      };
    }),
    testBank: [] // Filled just after the lesson data is defined.
  }
};

function shuffleArray(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildLesson5TestBank(lesson5) {
  const spot = lesson5.scenes
    .filter((scene) => scene.unsafe)
    .map((scene) => ({
      group: "spot",
      prompt: scene.title,
      choices: ["UNSAFE", "SAFE"],
      answer: "UNSAFE",
      explanation: scene.explanation
    }));

  const safe = lesson5.safetyQuestions.map((item) => ({
    group: "safe",
    prompt: item.prompt,
    choices: item.answer === "SAFE" ? ["SAFE", "UNSAFE"] : ["UNSAFE", "SAFE"],
    answer: item.answer,
    explanation: item.explanation
  }));

  const next = lesson5.nextQuestions.map((item) => ({
    group: "next",
    prompt: item.prompt,
    choices: [item.answer, ...item.choices.filter((choice) => choice !== item.answer)],
    answer: item.answer,
    explanation: item.explanation
  }));

  const rule = lesson5.ruleSentences.map((item) => ({
    group: "rule",
    prompt: item.sentence,
    choices: [item.answer, ...item.choices.filter((choice) => choice !== item.answer)],
    answer: item.answer,
    explanation: item.explanation
  }));

  return shuffleArray([
    ...shuffleArray(spot).slice(0, 3),
    ...shuffleArray(safe).slice(0, 3),
    ...shuffleArray(next).slice(0, 2),
    ...shuffleArray(rule).slice(0, 2)
  ]);
}

LESSON_SETS.year2Lesson5.testBank = buildLesson5TestBank(LESSON_SETS.year2Lesson5);

const YEAR2_LESSON_ORDER = ["year2Lesson1", "year2Lesson2", "year2Lesson3", "year2Lesson5"];

let currentLessonKey = "";
let lesson = null;
let state = getFreshState();

const app = document.querySelector("#app");
const starCounter = document.querySelector("#starCounter");
const homeButton = document.querySelector("#homeButton");

function getFreshState() {
  return {
    screen: "mission",
    stars: 0,
    identifyIndex: 0,
    helpIndex: 0,
    quickIndex: 0,
    year2ActivityIndex: 0,
    year2FindFound: new Set(),
    year2MultiUsePlacements: {},
    year2UserAnswers: {},
    year2DetectiveIndex: 0,
    year2DetectivePhase: "judge",
    year2BuildPlacements: {},
    year2BuildExplaining: false,
    year2PlaceKey: "",
    year2PlaceFound: new Set(),
    year2PlaceHelpIndex: 0,
    year2JobIndex: 0,
    year2PlaceAdvanceScheduled: false,
    year2FindAdvanceScheduled: false,
    year2HelpAdvanceScheduled: false,
    year2JobAdvanceScheduled: false,
    year2SafetySceneIndex: 0,
    year2SafetySceneFound: new Set(),
    year2SafetyQuestionIndex: 0,
    year2SafetyNextIndex: 0,
    year2SafetyRuleIndex: 0,
    year2SafetyTestIndex: 0,
    year2SafetyTestScore: 0,
    year2SafetyTestQuestions: [],
    selectedHunt: new Set(),
    sortedItems: {},
    placedLocations: {},
    matchedPurposes: {},
    selectedDragItem: null,
    earned: {
      identify: new Set(),
      help: new Set(),
      hunt: new Set(),
      sort: new Set(),
      locations: new Set(),
      purposes: new Set(),
      quick: new Set(),
      find: new Set(),
      uses: new Set(),
      users: new Set(),
      detective: new Set(),
      build: new Set(),
      place: new Set(),
      find3: new Set(),
      help3: new Set(),
      job3: new Set(),
      safetySpot: new Set(),
      safetyCheck: new Set(),
      safetyNext: new Set(),
      safetyRule: new Set(),
      safetyTest: new Set()
    }
  };
}

function getCurrentYear2Activity() {
  if (!lesson || !lesson.activities) return null;
  return lesson.activities[state.year2ActivityIndex] || null;
}

function getTotalStars() {
  if (!lesson) return 0;

  if (currentLessonKey === "year1") {
    return lesson.identifyItems.length +
      lesson.helpItems.length +
      lesson.huntItems.filter((item) => item.isTechnology).length;
  }

  if (currentLessonKey === "year2Lesson1") {
    return lesson.sortItems.length +
      lesson.locationItems.length +
      lesson.purposeItems.length +
      lesson.quickItems.length;
  }

  if (currentLessonKey === "year2Lesson2") {
    return lesson.findItems.filter((item) => item.isTechnology).length +
      lesson.useItems.length +
      lesson.userItems.length +
      lesson.detectiveItems.length +
      lesson.buildItems.length;
  }

  if (currentLessonKey === "year2Lesson3") {
    const workplace = lesson.workplaces.find((place) => place.key === state.year2PlaceKey) || lesson.workplaces[0];
    return 1 +
      workplace.items.filter((item) => item.isTechnology).length +
      workplace.helpItems.length +
      workplace.jobItems.length;
  }

  if (currentLessonKey === "year2Lesson5") {
    return lesson.scenes.filter((scene) => scene.unsafe).length +
      lesson.safetyQuestions.length +
      lesson.nextQuestions.length +
      lesson.ruleSentences.length +
      10;
  }

  return 0;
}

function render() {
  updateStars();

  if (state.screen === "mission") {
    renderMissionChoice();
    return;
  }

  if (state.screen === "year2-menu") {
    renderYear2Menu();
    return;
  }

  if (currentLessonKey === "year1") {
    renderYear1();
    return;
  }

  if (currentLessonKey === "year2Lesson1" || currentLessonKey === "year2Lesson2" || currentLessonKey === "year2Lesson3" || currentLessonKey === "year2Lesson5") {
    renderYear2();
    return;
  }

  renderMissionChoice();
}

function renderYear1() {
  if (state.screen === "welcome") {
    renderWelcome();
  } else if (state.screen === "identify") {
    renderIdentify();
  } else if (state.screen === "help") {
    renderHelp();
  } else if (state.screen === "hunt") {
    renderHunt();
  } else {
    renderFinal();
  }
}

function renderYear2() {
  if (state.screen === "welcome") {
    if (currentLessonKey === "year2Lesson3") {
      renderYear2Lesson3Welcome();
      return;
    }
    if (currentLessonKey === "year2Lesson5") {
      renderYear2Lesson5Welcome();
      return;
    }
    renderYear2Welcome();
    return;
  }

  if (state.screen === "practice") {
    renderLesson5Practice();
    return;
  }

  if (state.screen === "activity") {
    const activity = getCurrentYear2Activity();
    if (!activity) {
      renderFinal();
      return;
    }

    if (currentLessonKey === "year2Lesson1" && activity.type === "sort") {
      renderYear2Sort(activity);
    } else if (currentLessonKey === "year2Lesson1" && activity.type === "locations") {
      renderYear2Locations(activity);
    } else if (currentLessonKey === "year2Lesson1" && activity.type === "purposes") {
      renderYear2Purposes(activity);
    } else if (currentLessonKey === "year2Lesson1" && activity.type === "quick") {
      renderYear2Quick(activity);
    } else if (currentLessonKey === "year2Lesson2" && activity.type === "find") {
      renderLesson2Find(activity);
    } else if (currentLessonKey === "year2Lesson2" && activity.type === "uses") {
      renderLesson2Uses(activity);
    } else if (currentLessonKey === "year2Lesson2" && activity.type === "users") {
      renderLesson2Users(activity);
    } else if (currentLessonKey === "year2Lesson2" && activity.type === "detective") {
      renderLesson2Detective(activity);
    } else if (currentLessonKey === "year2Lesson2" && activity.type === "build") {
      renderLesson2Build(activity);
    } else if (currentLessonKey === "year2Lesson3" && activity.type === "place") {
      renderLesson3ChoosePlace(activity);
    } else if (currentLessonKey === "year2Lesson3" && activity.type === "find") {
      renderLesson3Find(activity);
    } else if (currentLessonKey === "year2Lesson3" && activity.type === "help") {
      renderLesson3Help(activity);
    } else if (currentLessonKey === "year2Lesson3" && activity.type === "job") {
      renderLesson3Job(activity);
    } else if (currentLessonKey === "year2Lesson5" && activity.type === "spot") {
      renderLesson5Spot(activity);
    } else if (currentLessonKey === "year2Lesson5" && activity.type === "safe") {
      renderLesson5Safe(activity);
    } else if (currentLessonKey === "year2Lesson5" && activity.type === "next") {
      renderLesson5Next(activity);
    } else if (currentLessonKey === "year2Lesson5" && activity.type === "rule") {
      renderLesson5Rule(activity);
    } else if (currentLessonKey === "year2Lesson5" && activity.type === "test") {
      renderLesson5Test(activity);
    } else {
      renderFinal();
    }
    return;
  }

  renderFinal();
}

function updateStars() {
  starCounter.textContent = `⭐ ${state.stars}/${getTotalStars()} Stars`;
}

function renderMissionChoice() {
  app.innerHTML = `
    <section class="screen center panel">
      <h1>Choose your mission</h1>
      <p class="subtitle">Pick a class mission to begin.</p>
      <div class="mission-grid">
        <button class="mission-button year1" type="button" data-mission="year1">🟢 Year 1<br>Technology Detective</button>
        <button class="mission-button year2" type="button" data-mission="year2">🔵 Year 2<br>IT Explorer</button>
      </div>
    </section>
  `;
}

function renderYear2Menu() {
  app.innerHTML = `
    <section class="screen center panel">
      <h1>Year 2</h1>
      <p class="subtitle">Choose a lesson.</p>
      <div class="mission-grid">
        ${YEAR2_LESSON_ORDER.map((key, index) => {
          const lessonData = LESSON_SETS[key];
          return `
            <button class="mission-button year2" type="button" data-year2-lesson="${key}">
              Lesson ${lessonData.lessonNumber || (index + 1)}<br>${lessonData.menuTitle}
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderWelcome() {
  app.innerHTML = `
    <section class="screen center panel">
      <h1>${lesson.title}</h1>
      <p class="subtitle">${lesson.subtitle}</p>
      <div class="definition">${lesson.definition}</div>
      <br>
      <button class="big-button" type="button" data-action="start-year1">Start</button>
    </section>
  `;
}

function renderYear2Welcome() {
  app.innerHTML = `
    <section class="screen panel">
      <div class="center">
        <h1>${lesson.title}</h1>
        <p class="subtitle">${lesson.story.join("<br>")}</p>
      </div>
      <div class="teacher-grid">
        <div>
          <h2>Learning Objectives</h2>
          ${lesson.learningObjectives.map((item) => `<p class="note-line">• ${item}</p>`).join("")}
        </div>
        <div>
          <h2>Success Criteria</h2>
          ${lesson.successCriteria.map((item) => `<p class="note-line">• ${item}</p>`).join("")}
        </div>
      </div>
      <div class="center">
        <button class="big-button" type="button" data-action="start-year2">Start</button>
      </div>
    </section>
  `;
}

function renderYear2Lesson3Welcome() {
  app.innerHTML = `
    <section class="screen center panel">
      <h1>${lesson.title}</h1>
      <p class="subtitle">${lesson.intro}</p>
      <div class="definition">${lesson.definition}</div>
      <br>
      <button class="big-button" type="button" data-action="start-year2">Start</button>
    </section>
  `;
}

function renderYear2Lesson5Welcome() {
  app.innerHTML = `
    <section class="screen center panel">
      <h1>${lesson.title}</h1>
      <p class="subtitle">${lesson.intro}</p>
      <div class="definition">${lesson.definition}</div>
      <br>
      <button class="big-button" type="button" data-action="start-year2">Start</button>
    </section>
  `;
}

function renderIdentify() {
  const item = lesson.identifyItems[state.identifyIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Is it technology?</h2>
        <div class="step-label">${state.identifyIndex + 1} of ${lesson.identifyItems.length}</div>
      </div>
      <p class="prompt">Was this made by people to help us?</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="button-row">
        <button class="choice-button tech" type="button" data-answer="true">Technology</button>
        <button class="choice-button not-tech" type="button" data-answer="false">Not technology</button>
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderHelp() {
  const item = lesson.helpItems[state.helpIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>How does it help?</h2>
        <div class="step-label">${state.helpIndex + 1} of ${lesson.helpItems.length}</div>
      </div>
      <p class="prompt">What does this help us do?</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="answer-list">
        ${item.choices.map((choice) => `
          <button class="answer-button" type="button" data-choice="${choice}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderHunt() {
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>Classroom technology hunt</h2>
        <div class="step-label">Find the technology</div>
      </div>
      <p class="prompt">Click the things made by people to help us.</p>
      <div class="hunt-grid">
        ${lesson.huntItems.map((item, index) => {
          const selected = state.selectedHunt.has(index) ? " selected" : "";
          return `
            <button class="item-card${selected}" type="button" data-hunt-index="${index}">
              <span class="card-icon" aria-hidden="true">${item.icon}</span>
              <span class="card-name">${item.name}</span>
            </button>
          `;
        }).join("")}
      </div>
      <button class="big-button" type="button" data-action="check-hunt">Check my answers</button>
      <div class="feedback" id="feedback">Choose all the technology you can find.</div>
    </section>
  `;
}

function renderYear2Sort(activity) {
  app.innerHTML = `
    <section class="screen panel wide-screen">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${Object.keys(state.sortedItems).length} of ${lesson.sortItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="drag-pool">
        ${lesson.sortItems.map((item, index) => renderDragCard(item, index, "sort", state.sortedItems[index])).join("")}
      </div>
      <div class="drop-grid three">
        ${lesson.sortCategories.map((category) => renderDropBox(category.title, category.key, "sort")).join("")}
      </div>
      <button class="big-button" type="button" data-action="finish-year2-activity">${activity.nextLabel || "Next"}</button>
      <div class="feedback" id="feedback">Choose an object, then choose a box.</div>
    </section>
  `;
}

function renderYear2Locations(activity) {
  app.innerHTML = `
    <section class="screen panel wide-screen">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${Object.keys(state.placedLocations).length} of ${lesson.locationItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="drag-pool">
        ${lesson.locationItems.map((item, index) => renderDragCard(item, index, "location", state.placedLocations[index])).join("")}
      </div>
      <div class="drop-grid locations">
        ${lesson.locations.map((location) => renderDropBox(`${location.icon} ${location.name}`, location.key, "location")).join("")}
      </div>
      <button class="big-button" type="button" data-action="finish-year2-activity">${activity.nextLabel || "Next"}</button>
      <div class="feedback" id="feedback">Many answers can be right.</div>
    </section>
  `;
}

function renderYear2Purposes(activity) {
  const purposes = lesson.purposeItems.map((item) => item.purpose);
  app.innerHTML = `
    <section class="screen panel wide-screen">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${Object.keys(state.matchedPurposes).length} of ${lesson.purposeItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="drag-pool">
        ${lesson.purposeItems.map((item, index) => renderDragCard(item, index, "purpose", state.matchedPurposes[index])).join("")}
      </div>
      <div class="drop-grid purposes">
        ${purposes.map((purpose) => renderDropBox(purpose, purpose, "purpose")).join("")}
      </div>
      <button class="big-button" type="button" data-action="finish-year2-activity">${activity.nextLabel || "Next"}</button>
      <div class="feedback" id="feedback">Choose a device, then choose what it helps us do.</div>
    </section>
  `;
}

function renderYear2Quick(activity) {
  const item = lesson.quickItems[state.quickIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.quickIndex + 1} of ${lesson.quickItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="answer-list">
        ${lesson.sortCategories.map((category) => `
          <button class="answer-button" type="button" data-quick="${category.key}">${category.title}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderLesson2Find(activity) {
  app.innerHTML = `
    <section class="screen panel wide-screen scene-panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2FindFound.size} of ${lesson.findItems.filter((item) => item.isTechnology).length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="classroom-scene">
        <div class="classroom-topbar">
          <span>Classroom Scene</span>
          <span>Find the IT</span>
        </div>
        <div class="hunt-grid classroom-grid">
          ${lesson.findItems.map((item, index) => {
            const selected = state.year2FindFound.has(index) ? " selected" : "";
            return `
              <button class="item-card scene-card${selected}" type="button" data-find-index="${index}">
                <span class="card-icon" aria-hidden="true">${item.icon}</span>
                <span class="card-name">${item.name}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>
      <div class="feedback" id="feedback">Click all the Information Technology.</div>
    </section>
  `;
}

function renderLesson2Uses(activity) {
  app.innerHTML = `
    <section class="screen panel wide-screen">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${Object.keys(state.year2MultiUsePlacements).length} of ${lesson.useItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="drag-pool">
        ${lesson.useItems.map((item, index) => renderDragCard(item, index, "uses", state.year2MultiUsePlacements[index])).join("")}
      </div>
      <div class="drop-grid purposes">
        ${lesson.useCategories.map((category) => renderDropBox(category.title, category.key, "uses")).join("")}
      </div>
      <button class="big-button" type="button" data-action="finish-year2-activity">${activity.nextLabel || "Next"}</button>
      <div class="feedback" id="feedback">Some answers can go in more than one box.</div>
    </section>
  `;
}

function renderLesson2Users(activity) {
  const userIndex = state.year2UserAnswers.__index ?? 0;
  const item = lesson.userItems[Math.min(userIndex, lesson.userItems.length - 1)];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${Object.keys(state.year2UserAnswers).filter((key) => key !== "__index").length} of ${lesson.userItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="answer-list">
        ${item.choices.map((choice) => `
          <button class="answer-button" type="button" data-user-choice="${choice}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose who uses this.</div>
    </section>
  `;
}

function renderLesson2Detective(activity) {
  const item = lesson.detectiveItems[state.year2DetectiveIndex];
  const phaseLabel = state.year2DetectivePhase === "judge" ? "Is it IT?" : "How does it help?";
  const choices = state.year2DetectivePhase === "judge" ? ["YES", "NO"] : item.helpChoices;
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2DetectiveIndex + 1} of ${lesson.detectiveItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="definition">${phaseLabel}</div>
      <div class="button-row">
        ${choices.map((choice, index) => `
          <button class="choice-button ${state.year2DetectivePhase === "judge" ? (choice === "YES" ? "tech" : "not-tech") : ""}" type="button" data-detective-choice="${choice}" data-choice-index="${index}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderLesson2Build(activity) {
  const buildDone = Object.keys(state.year2BuildPlacements).length;
  const explanationMode = state.year2BuildExplaining;
  const placedCount = Math.min(buildDone, lesson.buildSlots.length);
  app.innerHTML = `
    <section class="screen panel wide-screen">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${placedCount} of ${lesson.buildItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="classroom-build ${explanationMode ? "explaining" : ""}">
        <div class="build-room">
          ${lesson.buildSlots.map((slot, index) => {
            const itemIndex = state.year2BuildPlacements[index];
            const item = typeof itemIndex === "number" ? lesson.buildItems[itemIndex] : null;
            const hasItem = Boolean(item);
            const cardClass = hasItem ? " build-filled" : "";
            return `
              <button class="drop-box build-slot${cardClass}" type="button" data-drop-group="build" data-drop-key="${index}" ${explanationMode ? "disabled" : ""}>
                ${hasItem ? `
                  <span class="card-icon" aria-hidden="true">${item.icon}</span>
                  <span class="card-name">${item.name}</span>
                ` : `
                  <span>${slot}</span>
                `}
              </button>
            `;
          }).join("")}
        </div>
        ${explanationMode ? `
          <div class="build-summary">
            ${lesson.buildItems.map((item, index) => `
              <div class="summary-card ${Object.values(state.year2BuildPlacements).includes(index) ? "highlight" : ""}">
                <div class="card-icon" aria-hidden="true">${item.icon}</div>
                <div class="card-name">${item.name}</div>
                <p class="summary-text">${item.explanation}</p>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </div>
      <div class="drag-pool">
        ${lesson.buildItems.map((item, index) => renderDragCard(item, index, "build", Object.values(state.year2BuildPlacements).includes(index))).join("")}
      </div>
      <button class="big-button" type="button" data-action="finish-year2-activity">${explanationMode ? "Finish Mission" : activity.nextLabel}</button>
      <div class="feedback" id="feedback">${explanationMode ? "Your classroom is ready!" : "Drag each item into the classroom."}</div>
    </section>
  `;
}

function getLesson3Workplace() {
  return lesson.workplaces.find((place) => place.key === state.year2PlaceKey) || lesson.workplaces[0];
}

function renderLesson3ChoosePlace(activity) {
  app.innerHTML = `
    <section class="screen panel wide-screen">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">Choose 1 place</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="place-grid">
        ${lesson.workplaces.map((place) => `
          <button class="place-card ${place.color}" type="button" data-place-key="${place.key}">
            <span class="place-icon" aria-hidden="true">${place.icon}</span>
            <span class="place-name">${place.name}</span>
          </button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose a place.</div>
    </section>
  `;
}

function renderLesson3Find(activity) {
  const workplace = getLesson3Workplace();
  const total = workplace.items.filter((item) => item.isTechnology).length;

  app.innerHTML = `
    <section class="screen panel wide-screen scene-panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2PlaceFound.size} of ${total}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="classroom-scene ${workplace.color}">
        <div class="classroom-topbar">
          <span>${workplace.icon} ${workplace.name}</span>
          <span>Find the IT</span>
        </div>
        <div class="workplace-grid">
          ${workplace.items.map((item, index) => {
            const selected = state.year2PlaceFound.has(index) ? " selected" : "";
            return `
              <button class="item-card scene-card${selected}" type="button" data-place-find-index="${index}">
                <span class="card-icon" aria-hidden="true">${item.icon}</span>
                <span class="card-name">${item.name}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>
      <div class="feedback" id="feedback">Click the IT.</div>
    </section>
  `;
}

function renderLesson3Help(activity) {
  const workplace = getLesson3Workplace();
  const item = workplace.helpItems[state.year2PlaceHelpIndex];

  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2PlaceHelpIndex + 1} of ${workplace.helpItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="item-display">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.name}</div>
      </div>
      <div class="answer-list">
        ${item.choices.map((choice) => `
          <button class="answer-button" type="button" data-place-help-choice="${choice}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderLesson3Job(activity) {
  const workplace = getLesson3Workplace();
  const item = workplace.jobItems[state.year2JobIndex];

  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2JobIndex + 1} of ${workplace.jobItems.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="job-card">
        <div class="item-icon" aria-hidden="true">${item.icon}</div>
        <div class="item-name">${item.worker}</div>
        <p class="note-line">${item.problem}</p>
      </div>
      <div class="answer-list">
        ${item.choices.map((choice) => `
          <button class="answer-button" type="button" data-place-job-choice="${choice}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose the best IT.</div>
    </section>
  `;
}

function prepareLesson5Test() {
  state.year2SafetyTestQuestions = buildLesson5TestBank(LESSON_SETS.year2Lesson5);
  state.year2SafetyTestIndex = 0;
  state.year2SafetyTestScore = 0;
}

function getLesson5Question(type) {
  const items = {
    spot: LESSON_SETS.year2Lesson5.scenes,
    safe: LESSON_SETS.year2Lesson5.safetyQuestions,
    next: LESSON_SETS.year2Lesson5.nextQuestions,
    rule: LESSON_SETS.year2Lesson5.ruleSentences
  };
  return items[type];
}

function renderLesson5Spot(activity) {
  app.innerHTML = `
    <section class="screen panel wide-screen scene-panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2SafetySceneFound.size} of ${LESSON_SETS.year2Lesson5.scenes.filter((scene) => scene.unsafe).length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="spot-grid">
        ${LESSON_SETS.year2Lesson5.scenes.map((scene, index) => {
          const selected = state.year2SafetySceneFound.has(index) ? " selected" : "";
          return `
            <button class="item-card safety-card${selected}" type="button" data-safety-spot-index="${index}">
              <span class="card-icon" aria-hidden="true">${scene.icon}</span>
              <span class="card-name">${scene.title}</span>
            </button>
          `;
        }).join("")}
      </div>
      <div class="feedback" id="feedback">Click the unsafe ones.</div>
    </section>
  `;
}

function renderLesson5Safe(activity) {
  const item = LESSON_SETS.year2Lesson5.safetyQuestions[state.year2SafetyQuestionIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2SafetyQuestionIndex + 1} of ${LESSON_SETS.year2Lesson5.safetyQuestions.length}</div>
      </div>
      <p class="prompt">${item.prompt}</p>
      <div class="button-row">
        <button class="choice-button tech" type="button" data-safety-check="SAFE">SAFE</button>
        <button class="choice-button not-tech" type="button" data-safety-check="UNSAFE">UNSAFE</button>
      </div>
      <div class="feedback" id="feedback">Choose SAFE or UNSAFE.</div>
    </section>
  `;
}

function renderLesson5Next(activity) {
  const item = LESSON_SETS.year2Lesson5.nextQuestions[state.year2SafetyNextIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2SafetyNextIndex + 1} of ${LESSON_SETS.year2Lesson5.nextQuestions.length}</div>
      </div>
      <p class="prompt">${item.prompt}</p>
      <div class="answer-list">
        ${item.choices.map((choice) => `
          <button class="answer-button" type="button" data-safety-next-choice="${choice}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose one.</div>
    </section>
  `;
}

function renderLesson5Rule(activity) {
  const item = LESSON_SETS.year2Lesson5.ruleSentences[state.year2SafetyRuleIndex];
  app.innerHTML = `
    <section class="screen panel wide-screen">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2SafetyRuleIndex + 1} of ${LESSON_SETS.year2Lesson5.ruleSentences.length}</div>
      </div>
      <p class="prompt">${activity.prompt}</p>
      <div class="definition">${item.sentence}</div>
      <div class="drag-pool rule-pool">
        ${item.choices.map((choice, index) => `
          <button class="item-card drag-card" type="button" draggable="true" data-drag-group="safetyRule" data-drag-index="${index}">
            <span class="card-name">${choice}</span>
          </button>
        `).join("")}
      </div>
      <button class="drop-box rule-drop" type="button" data-drop-group="safetyRule" data-drop-key="blank">Drop here</button>
      <div class="feedback" id="feedback">Drag the missing word.</div>
    </section>
  `;
}

function renderLesson5Test(activity) {
  const item = state.year2SafetyTestQuestions[state.year2SafetyTestIndex];
  app.innerHTML = `
    <section class="screen panel">
      <div class="activity-header">
        <h2>${activity.title}</h2>
        <div class="step-label">${state.year2SafetyTestIndex + 1} of ${state.year2SafetyTestQuestions.length}</div>
      </div>
      <p class="prompt">${item.prompt}</p>
      <div class="answer-list">
        ${item.choices.map((choice) => `
          <button class="answer-button" type="button" data-safety-test-choice="${choice}">${choice}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback">Choose an answer.</div>
    </section>
  `;
}

function renderLesson5Practice() {
  app.innerHTML = `
    <section class="screen center panel">
      <h1>Nearly there!</h1>
      <p class="subtitle">Let's practise again.</p>
      <div class="definition">Keep looking after technology.</div>
      <br>
      <button class="big-button" type="button" data-action="restart-year2-lesson5">Try Again</button>
    </section>
  `;
}

function renderDragCard(item, index, group, done) {
  return `
    <button class="item-card drag-card${done ? " done" : ""}" type="button" draggable="${done ? "false" : "true"}" data-drag-group="${group}" data-drag-index="${index}" ${done ? "disabled" : ""}>
      <span class="card-icon" aria-hidden="true">${item.icon}</span>
      <span class="card-name">${item.name}</span>
    </button>
  `;
}

function renderDropBox(title, key, group) {
  return `
    <button class="drop-box" type="button" data-drop-group="${group}" data-drop-key="${key}">
      <span>${title}</span>
    </button>
  `;
}

function renderFinal() {
  const perfectScore = state.stars === getTotalStars();
  const badgeTitle = perfectScore ? `🌟 ${lesson.masterTitle} 🌟` : lesson.finalTitle;

  app.innerHTML = `
    <div class="confetti" aria-hidden="true">${makeConfetti()}</div>
    <section class="screen center panel">
      <h1>Mission Complete!</h1>
      <p class="subtitle">You are a ${lesson.finalTitle}.</p>
      <div class="final-stars">⭐ ${state.stars}/${getTotalStars()} Stars</div>
      <div class="badge ${perfectScore ? "" : "standard"}">
        <div class="badge-icon">🏅</div>
        <div class="badge-title">
          ${badgeTitle}<br>
          Mission Complete
        </div>
      </div>
      <p class="message">${lesson.finalMessage}</p>
      <p class="definition">${lesson.knowMessage}</p>
      <br>
      <button class="big-button" type="button" data-action="reset">Play Again</button>
    </section>
  `;
}

function makeConfetti() {
  const colors = ["#ffce3a", "#ff6fae", "#1f9d55", "#1877f2", "#ff8a2a"];
  let pieces = "";

  for (let i = 0; i < 42; i += 1) {
    const left = Math.floor(Math.random() * 100);
    const delay = (Math.random() * 2.2).toFixed(2);
    const color = colors[i % colors.length];
    pieces += `<span style="left:${left}%;background:${color};animation-delay:${delay}s"></span>`;
  }

  return pieces;
}

function showFeedback(text, type) {
  const feedback = document.querySelector("#feedback");
  if (!feedback) return;

  feedback.textContent = text;
  feedback.className = `feedback ${type}`;
}

function awardStar(group, key) {
  if (!state.earned[group].has(key)) {
    state.earned[group].add(key);
    state.stars += 1;
    updateStars();
  }
}

function selectMission(key) {
  if (key === "year2") {
    currentLessonKey = "";
    lesson = null;
    state = getFreshState();
    state.screen = "year2-menu";
    render();
    return;
  }

  currentLessonKey = key;
  lesson = LESSON_SETS[key];
  state = getFreshState();
  state.screen = "welcome";
  render();
}

function selectYear2Lesson(key) {
  currentLessonKey = key;
  lesson = LESSON_SETS[key];
  state = getFreshState();
  state.screen = "welcome";
  render();
}

function handleIdentify(isTechnologyChoice) {
  const item = lesson.identifyItems[state.identifyIndex];

  if (isTechnologyChoice === item.isTechnology) {
    awardStar("identify", state.identifyIndex);
    const message = item.isTechnology
      ? "Yes! It was made by people to help us."
      : "Yes! It is not made by people to help us.";
    showFeedback(message, "good");
    window.setTimeout(() => {
      state.identifyIndex += 1;
      state.screen = state.identifyIndex >= lesson.identifyItems.length ? "help" : "identify";
      render();
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Not quite. Remember, technology is made by people to help us.", "try");
  }
}

function handleHelp(choice) {
  const item = lesson.helpItems[state.helpIndex];

  if (choice === item.correct) {
    awardStar("help", state.helpIndex);
    showFeedback("Yes! That helps us.", "good");
    window.setTimeout(() => {
      state.helpIndex += 1;
      state.screen = state.helpIndex >= lesson.helpItems.length ? "hunt" : "help";
      render();
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Good try. Choose how it helps us.", "try");
  }
}

function toggleHuntItem(index) {
  if (state.selectedHunt.has(index)) {
    state.selectedHunt.delete(index);
  } else {
    state.selectedHunt.add(index);
  }

  renderHunt();
}

function checkHuntAnswers() {
  let wrongSelected = 0;
  let foundTechnology = 0;

  lesson.huntItems.forEach((item, index) => {
    if (state.selectedHunt.has(index) && item.isTechnology) {
      foundTechnology += 1;
      awardStar("hunt", index);
    }

    if (state.selectedHunt.has(index) && !item.isTechnology) {
      wrongSelected += 1;
    }
  });

  renderHunt();

  document.querySelectorAll(".item-card").forEach((card, index) => {
    const item = lesson.huntItems[index];
    if (state.selectedHunt.has(index) && !item.isTechnology) {
      card.classList.add("wrong");
    }
  });

  const totalTechnology = lesson.huntItems.filter((item) => item.isTechnology).length;

  if (wrongSelected > 0) {
    showFeedback("Some are not technology. Try again.", "try");
  } else if (foundTechnology < totalTechnology) {
    showFeedback("Good start. Find more things made by people to help us.", "try");
  } else {
    showFeedback("Great detective work!", "good");
    window.setTimeout(() => {
      state.screen = "final";
      render();
    }, LEVEL_ADVANCE_PAUSE_MS);
  }
}

function handleYear2Drop(group, index, key) {
  if (group === "sort") {
    const item = lesson.sortItems[index];
    if (item.category === key) {
      state.sortedItems[index] = key;
      awardStar("sort", index);
      renderYear2Sort(getCurrentYear2Activity());
      showFeedback(item.explanation, "good");
    } else {
      showFeedback("Good try. Look again and choose the best box.", "try");
    }
  }

  if (group === "location") {
    const item = lesson.locationItems[index];
    if (item.locations.includes(key)) {
      state.placedLocations[index] = key;
      awardStar("locations", index);
      renderYear2Locations(getCurrentYear2Activity());
      showFeedback(item.explanation, "good");
    } else {
      showFeedback("Good try. This device is usually found somewhere else.", "try");
    }
  }

  if (group === "purpose") {
    const item = lesson.purposeItems[index];
    if (item.purpose === key) {
      state.matchedPurposes[index] = key;
      awardStar("purposes", index);
      renderYear2Purposes(getCurrentYear2Activity());
      showFeedback(`Yes! ${item.name} helps us: ${item.purpose}.`, "good");
    } else {
      showFeedback("Good try. Choose what this device helps us do.", "try");
    }
  }

  if (group === "uses") {
    const item = lesson.useItems[index];
    if (item.categories.includes(key)) {
      state.year2MultiUsePlacements[index] = key;
      awardStar("uses", index);
      renderLesson2Uses(getCurrentYear2Activity());
      showFeedback(item.explanation, "good");
    } else {
      showFeedback("Good try. Think about what this device can help with.", "try");
    }
  }

  if (group === "build") {
    const slotIndex = Number(key);
    const slotTaken = Object.prototype.hasOwnProperty.call(state.year2BuildPlacements, slotIndex);
    if (slotTaken) {
      showFeedback("That spot is already full. Choose an empty place.", "try");
      return;
    }

    const alreadyPlaced = Object.values(state.year2BuildPlacements).includes(index);
    if (alreadyPlaced) {
      showFeedback("That device is already in the room.", "try");
      return;
    }

    state.year2BuildPlacements[slotIndex] = index;
    awardStar("build", index);
    renderLesson2Build(getCurrentYear2Activity());
    showFeedback(lesson.buildItems[index].explanation, "good");
  }

  if (group === "safetyRule") {
    handleLesson5RuleDrop(index, key);
  }
}

function handleQuick(category) {
  const item = lesson.quickItems[state.quickIndex];

  if (item.category === category) {
    awardStar("quick", state.quickIndex);
    showFeedback(`Correct! ${item.explanation}`, "good");
    window.setTimeout(() => {
      state.quickIndex += 1;
      state.screen = state.quickIndex >= lesson.quickItems.length ? "final" : "activity";
      render();
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback(`Not quite. ${item.explanation}`, "try");
  }
}

function handleLesson2Find(index) {
  const item = lesson.findItems[index];

  if (item.isTechnology) {
    if (!state.year2FindFound.has(index)) {
      state.year2FindFound.add(index);
      awardStar("find", index);
    }

    renderLesson2Find(getCurrentYear2Activity());
    showFeedback(item.explanation, "good");

    const totalTechnology = lesson.findItems.filter((entry) => entry.isTechnology).length;
    if (state.year2FindFound.size >= totalTechnology) {
      window.setTimeout(() => {
        advanceYear2Activity();
      }, LEVEL_ADVANCE_PAUSE_MS);
    }
  } else {
    showFeedback("Good try. That one is not Information Technology.", "try");
  }
}

function handleLesson2User(choice) {
  const index = state.year2UserAnswers.__index ?? 0;
  const item = lesson.userItems[index];

  if (choice === item.correct) {
    awardStar("users", index);
    showFeedback(item.explanation, "good");
    state.year2UserAnswers[index] = choice;
    window.setTimeout(() => {
      const nextIndex = index + 1;
      state.year2UserAnswers.__index = nextIndex;

      if (nextIndex >= lesson.userItems.length) {
        advanceYear2Activity();
        return;
      }

      renderLesson2Users(getCurrentYear2Activity());
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Good try. Think about who usually uses this device.", "try");
  }
}

function handleLesson2Detective(choice) {
  const item = lesson.detectiveItems[state.year2DetectiveIndex];

  if (state.year2DetectivePhase === "judge") {
    const expected = item.isIT ? "YES" : "NO";
    if (choice === expected) {
      state.year2DetectivePhase = "help";
      renderLesson2Detective(getCurrentYear2Activity());
      showFeedback(item.isIT ? "Yes! That is Information Technology." : "No! That is not Information Technology.", "good");
    } else {
      showFeedback("Try again. Think carefully about whether it uses information.", "try");
    }
    return;
  }

  if (choice === item.helpAnswer) {
    awardStar("detective", state.year2DetectiveIndex);
    showFeedback(item.explanation, "good");
    window.setTimeout(() => {
      state.year2DetectiveIndex += 1;
      state.year2DetectivePhase = state.year2DetectiveIndex >= lesson.detectiveItems.length ? "done" : "judge";
      if (state.year2DetectivePhase === "done") {
        advanceYear2Activity();
        return;
      }
      renderLesson2Detective(getCurrentYear2Activity());
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Good try. Choose the best way it helps.", "try");
  }
}

function handleLesson3Place(placeKey) {
  if (state.year2PlaceKey || state.year2PlaceAdvanceScheduled) return;

  const place = lesson.workplaces.find((entry) => entry.key === placeKey);
  if (!place) return;

  state.year2PlaceKey = placeKey;
  state.year2PlaceFound = new Set();
  state.year2PlaceHelpIndex = 0;
  state.year2JobIndex = 0;
  awardStar("place", placeKey);
  showFeedback(`Great choice! ${place.name}.`, "good");

  state.year2PlaceAdvanceScheduled = true;
  window.setTimeout(() => {
    advanceYear2Activity();
  }, LEVEL_ADVANCE_PAUSE_MS);
}

function handleLesson3Find(index) {
  if (state.year2FindAdvanceScheduled) return;

  const workplace = getLesson3Workplace();
  const item = workplace.items[index];
  const key = `${state.year2PlaceKey}-${index}`;

  if (!item) return;

  if (!item.isTechnology) {
    showFeedback("Not IT. Try another item.", "try");
    return;
  }

  if (!state.year2PlaceFound.has(index)) {
    state.year2PlaceFound.add(index);
    awardStar("find3", key);
  }

  renderLesson3Find(getCurrentYear2Activity());
  showFeedback(item.explanation, "good");

  const total = workplace.items.filter((entry) => entry.isTechnology).length;
  if (state.year2PlaceFound.size >= total && !state.year2FindAdvanceScheduled) {
    state.year2FindAdvanceScheduled = true;
    window.setTimeout(() => {
      state.year2PlaceHelpIndex = 0;
      advanceYear2Activity();
    }, LEVEL_ADVANCE_PAUSE_MS);
  }
}

function handleLesson3Help(choice) {
  if (state.year2HelpAdvanceScheduled) return;

  const workplace = getLesson3Workplace();
  const item = workplace.helpItems[state.year2PlaceHelpIndex];
  const key = `${state.year2PlaceKey}-${state.year2PlaceHelpIndex}`;

  if (!item) return;

  if (choice === item.correct) {
    awardStar("help3", key);
    showFeedback(item.explanation, "good");
    state.year2HelpAdvanceScheduled = true;
    window.setTimeout(() => {
      state.year2PlaceHelpIndex += 1;
      state.year2HelpAdvanceScheduled = false;
      if (state.year2PlaceHelpIndex >= workplace.helpItems.length) {
        state.year2JobIndex = 0;
        advanceYear2Activity();
        return;
      }
      renderLesson3Help(getCurrentYear2Activity());
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Try again.", "try");
  }
}

function handleLesson3Job(choice) {
  if (state.year2JobAdvanceScheduled) return;

  const workplace = getLesson3Workplace();
  const item = workplace.jobItems[state.year2JobIndex];
  const key = `${state.year2PlaceKey}-${state.year2JobIndex}`;

  if (!item) return;

  if (choice === item.correct) {
    awardStar("job3", key);
    showFeedback(item.explanation, "good");
    state.year2JobAdvanceScheduled = true;
    window.setTimeout(() => {
      state.year2JobIndex += 1;
      state.year2JobAdvanceScheduled = false;
      if (state.year2JobIndex >= workplace.jobItems.length) {
        advanceYear2Activity();
        return;
      }
      renderLesson3Job(getCurrentYear2Activity());
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Try again.", "try");
  }
}

function startLesson5Test() {
  prepareLesson5Test();
  advanceYear2Activity();
}

function handleLesson5Spot(index) {
  const scene = LESSON_SETS.year2Lesson5.scenes[index];
  if (!scene) return;

  if (scene.unsafe) {
    if (!state.year2SafetySceneFound.has(index)) {
      state.year2SafetySceneFound.add(index);
      awardStar("safetySpot", index);
    }
    renderLesson5Spot(getCurrentYear2Activity());
    showFeedback(scene.explanation, "good");

    const total = LESSON_SETS.year2Lesson5.scenes.filter((item) => item.unsafe).length;
    if (state.year2SafetySceneFound.size >= total) {
      window.setTimeout(() => {
        state.year2SafetyQuestionIndex = 0;
        advanceYear2Activity();
      }, LEVEL_ADVANCE_PAUSE_MS);
    }
  } else {
    showFeedback(scene.explanation, "good");
  }
}

function handleLesson5Safe(choice) {
  const item = LESSON_SETS.year2Lesson5.safetyQuestions[state.year2SafetyQuestionIndex];
  if (!item) return;

  if (choice === item.answer) {
    awardStar("safetyCheck", state.year2SafetyQuestionIndex);
    showFeedback(item.explanation, "good");
    window.setTimeout(() => {
      state.year2SafetyQuestionIndex += 1;
      if (state.year2SafetyQuestionIndex >= LESSON_SETS.year2Lesson5.safetyQuestions.length) {
        state.year2SafetyNextIndex = 0;
        advanceYear2Activity();
        return;
      }
      renderLesson5Safe(getCurrentYear2Activity());
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Try again.", "try");
  }
}

function handleLesson5Next(choice) {
  const item = LESSON_SETS.year2Lesson5.nextQuestions[state.year2SafetyNextIndex];
  if (!item) return;

  if (choice === item.answer) {
    awardStar("safetyNext", state.year2SafetyNextIndex);
    showFeedback(item.explanation, "good");
    window.setTimeout(() => {
      state.year2SafetyNextIndex += 1;
      if (state.year2SafetyNextIndex >= LESSON_SETS.year2Lesson5.nextQuestions.length) {
        state.year2SafetyRuleIndex = 0;
        advanceYear2Activity();
        return;
      }
      renderLesson5Next(getCurrentYear2Activity());
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Try again.", "try");
  }
}

function handleLesson5RuleDrop(index, key) {
  const item = LESSON_SETS.year2Lesson5.ruleSentences[state.year2SafetyRuleIndex];
  if (!item || key !== "blank") return;

  const choice = item.choices[index];

  if (choice === item.answer) {
    awardStar("safetyRule", `${state.year2SafetyRuleIndex}-${index}`);
    showFeedback(item.explanation, "good");
    window.setTimeout(() => {
      state.year2SafetyRuleIndex += 1;
      if (state.year2SafetyRuleIndex >= LESSON_SETS.year2Lesson5.ruleSentences.length) {
        advanceYear2Activity();
        return;
      }
      renderLesson5Rule(getCurrentYear2Activity());
    }, FEEDBACK_PAUSE_MS);
  } else {
    showFeedback("Try again.", "try");
  }
}

function handleLesson5Test(choice) {
  const item = state.year2SafetyTestQuestions[state.year2SafetyTestIndex];
  if (!item) return;

  if (choice === item.answer) {
    state.year2SafetyTestScore += 1;
    awardStar("safetyTest", state.year2SafetyTestIndex);
    showFeedback(item.explanation, "good");
  } else {
    showFeedback(item.explanation, "try");
  }

  const delay = state.year2SafetyTestIndex + 1 >= state.year2SafetyTestQuestions.length
    ? LEVEL_ADVANCE_PAUSE_MS
    : FEEDBACK_PAUSE_MS;

  window.setTimeout(() => {
    state.year2SafetyTestIndex += 1;
    if (state.year2SafetyTestIndex >= state.year2SafetyTestQuestions.length) {
      if (state.year2SafetyTestScore >= 8) {
        state.screen = "final";
      } else {
        state.screen = "practice";
      }
      render();
      return;
    }

    renderLesson5Test(getCurrentYear2Activity());
  }, delay);
}

function resetYear2Lesson5() {
  state.year2SafetySceneIndex = 0;
  state.year2SafetySceneFound = new Set();
  state.year2SafetyQuestionIndex = 0;
  state.year2SafetyNextIndex = 0;
  state.year2SafetyRuleIndex = 0;
  state.year2SafetyTestIndex = 0;
  state.year2SafetyTestScore = 0;
  state.year2SafetyTestQuestions = buildLesson5TestBank(LESSON_SETS.year2Lesson5);
  state.screen = "welcome";
  render();
}

function finishYear2Activity() {
  const activity = getCurrentYear2Activity();
  if (!activity) return;

  const counts = {
    sort: Object.keys(state.sortedItems).length,
    locations: Object.keys(state.placedLocations).length,
    purposes: Object.keys(state.matchedPurposes).length,
    quick: state.quickIndex,
    find: state.year2FindFound.size,
    uses: Object.keys(state.year2MultiUsePlacements).length,
    users: Object.keys(state.year2UserAnswers).filter((key) => key !== "__index").length,
    detective: state.year2DetectiveIndex,
    build: Object.keys(state.year2BuildPlacements).length
  };

  const totals = {
    sort: lesson.sortItems ? lesson.sortItems.length : 0,
    locations: lesson.locationItems ? lesson.locationItems.length : 0,
    purposes: lesson.purposeItems ? lesson.purposeItems.length : 0,
    quick: lesson.quickItems ? lesson.quickItems.length : 0,
    find: lesson.findItems ? lesson.findItems.filter((item) => item.isTechnology).length : 0,
    uses: lesson.useItems ? lesson.useItems.length : 0,
    users: lesson.userItems ? lesson.userItems.length : 0,
    detective: lesson.detectiveItems ? lesson.detectiveItems.length : 0,
    build: lesson.buildItems ? lesson.buildItems.length : 0
  };

  if (currentLessonKey === "year2Lesson2" && activity.type === "build" && !state.year2BuildExplaining) {
    if (counts.build < totals.build) {
      showFeedback("Place all the IT first.", "try");
      return;
    }

    state.year2BuildExplaining = true;
    renderLesson2Build(activity);
    return;
  }

  if (counts[activity.type] < totals[activity.type]) {
    showFeedback("Keep going. You can find them all!", "try");
    return;
  }

  advanceYear2Activity();
}

function advanceYear2Activity() {
  state.year2ActivityIndex += 1;
  state.year2BuildExplaining = false;

  if (state.year2ActivityIndex >= lesson.activities.length) {
    state.screen = "final";
    render();
    return;
  }

  if (currentLessonKey === "year2Lesson5") {
    const nextActivity = lesson.activities[state.year2ActivityIndex];
    if (nextActivity && nextActivity.type === "test") {
      prepareLesson5Test();
    }
  }

  state.screen = "activity";
  render();
}

function resetGame() {
  currentLessonKey = "";
  lesson = null;
  state = getFreshState();
  render();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.mission) {
    selectMission(target.dataset.mission);
  }

  if (target.dataset.year2Lesson) {
    selectYear2Lesson(target.dataset.year2Lesson);
  }

  if (target.dataset.action === "start-year1") {
    state.screen = "identify";
    render();
  }

  if (target.dataset.action === "start-year2") {
    if (currentLessonKey === "year2Lesson5") {
      state.year2ActivityIndex = 0;
      state.year2SafetySceneFound = new Set();
      state.year2SafetyQuestionIndex = 0;
      state.year2SafetyNextIndex = 0;
      state.year2SafetyRuleIndex = 0;
      state.year2SafetyTestIndex = 0;
      state.year2SafetyTestScore = 0;
    }

    state.screen = "activity";
    render();
  }

  if (target.dataset.action === "reset") {
    resetGame();
  }

  if (target.dataset.answer) {
    handleIdentify(target.dataset.answer === "true");
  }

  if (target.dataset.choice) {
    handleHelp(target.dataset.choice);
  }

  if (target.dataset.huntIndex) {
    toggleHuntItem(Number(target.dataset.huntIndex));
  }

  if (target.dataset.action === "check-hunt") {
    checkHuntAnswers();
  }

  if (target.dataset.dragIndex) {
    state.selectedDragItem = {
      group: target.dataset.dragGroup,
      index: Number(target.dataset.dragIndex)
    };
    showFeedback("Now choose a box.", "good");
  }

  if (target.dataset.dropKey && state.selectedDragItem) {
    handleYear2Drop(state.selectedDragItem.group, state.selectedDragItem.index, target.dataset.dropKey);
    state.selectedDragItem = null;
  }

  if (target.dataset.quick) {
    handleQuick(target.dataset.quick);
  }

  if (target.dataset.findIndex) {
    handleLesson2Find(Number(target.dataset.findIndex));
  }

  if (target.dataset.userChoice) {
    handleLesson2User(target.dataset.userChoice);
  }

  if (target.dataset.detectiveChoice) {
    handleLesson2Detective(target.dataset.detectiveChoice);
  }

  if (target.dataset.placeKey) {
    handleLesson3Place(target.dataset.placeKey);
  }

  if (target.dataset.placeFindIndex) {
    handleLesson3Find(Number(target.dataset.placeFindIndex));
  }

  if (target.dataset.placeHelpChoice) {
    handleLesson3Help(target.dataset.placeHelpChoice);
  }

  if (target.dataset.placeJobChoice) {
    handleLesson3Job(target.dataset.placeJobChoice);
  }

  if (target.dataset.safetySpotIndex) {
    handleLesson5Spot(Number(target.dataset.safetySpotIndex));
  }

  if (target.dataset.safetyCheck) {
    handleLesson5Safe(target.dataset.safetyCheck);
  }

  if (target.dataset.safetyNextChoice) {
    handleLesson5Next(target.dataset.safetyNextChoice);
  }

  if (target.dataset.safetyTestChoice) {
    handleLesson5Test(target.dataset.safetyTestChoice);
  }

  if (target.dataset.action === "finish-year2-activity") {
    finishYear2Activity();
  }

  if (target.dataset.action === "restart-year2-lesson5") {
    resetYear2Lesson5();
  }

});

app.addEventListener("dragstart", (event) => {
  const target = event.target.closest("[data-drag-index]");
  if (!target) return;

  event.dataTransfer.setData("text/plain", JSON.stringify({
    group: target.dataset.dragGroup,
    index: Number(target.dataset.dragIndex)
  }));
});

app.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-drop-key]")) {
    event.preventDefault();
  }
});

app.addEventListener("drop", (event) => {
  const target = event.target.closest("[data-drop-key]");
  if (!target) return;

  event.preventDefault();
  const dragData = JSON.parse(event.dataTransfer.getData("text/plain"));
  handleYear2Drop(dragData.group, dragData.index, target.dataset.dropKey);
});

homeButton.addEventListener("click", resetGame);

render();
