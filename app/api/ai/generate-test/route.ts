import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("Test generation request received")

    const { topic, difficulty, questionCount, userId } = await request.json()

    if (!topic || !difficulty || !questionCount) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    console.log(`Generating ${questionCount} ${difficulty} questions for ${topic}`)

    // Use intelligent test generation
    const testData = createIntelligentTest(topic, difficulty, questionCount)

    console.log("Test generated successfully")
    return NextResponse.json(testData)
  } catch (error: any) {
    console.error("Error generating test:", error)
    return NextResponse.json(createBasicTest("General Programming", "Medium", 5))
  }
}

function generateQuestionForTopic(topic: string, difficulty: string, index: number) {
  const questionBank = getQuestionBank()

  // Get questions for the specific topic and difficulty
  const topicQuestions = questionBank[topic] || questionBank["JavaScript Fundamentals"]
  const difficultyQuestions = topicQuestions[difficulty] || topicQuestions["Easy"]

  // Ensure we have enough questions
  if (!difficultyQuestions || difficultyQuestions.length === 0) {
    // Fallback to a basic question if no questions are available
    return {
      id: `fallback_${Date.now()}_${index}`,
      question: `Basic ${topic} question ${index + 1}: What is a fundamental concept in ${topic}?`,
      options: [
        "Correct answer - This demonstrates understanding",
        "Incorrect option A",
        "Incorrect option B",
        "Incorrect option C",
      ],
      correctAnswer: 0,
      explanation: `This is the correct answer because it shows fundamental understanding of ${topic} concepts.`,
      difficulty,
      topic,
    }
  }

  // Cycle through available questions
  const questionTemplate = difficultyQuestions[index % difficultyQuestions.length]

  return {
    id: `${topic.toLowerCase().replace(/\s+/g, "_")}_${Date.now()}_${index}`,
    question: questionTemplate.question,
    options: questionTemplate.options,
    correctAnswer: questionTemplate.correctAnswer,
    explanation: questionTemplate.explanation,
    difficulty,
    topic,
  }
}

function createIntelligentTest(topic: string, difficulty: string, questionCount: number) {
  const questions = []
  const questionBank = getQuestionBank()

  // Validate topic and difficulty
  if (!questionBank[topic]) {
    topic = "JavaScript Fundamentals" // Default topic
  }

  const topicQuestions = questionBank[topic]
  if (!topicQuestions[difficulty]) {
    difficulty = "Easy" // Default difficulty
  }

  // Generate questions
  for (let i = 0; i < questionCount; i++) {
    const question = generateQuestionForTopic(topic, difficulty, i)
    questions.push(question)
  }

  return { questions }
}

function getQuestionBank() {
  return {
    "JavaScript Fundamentals": {
      Easy: [
        {
          question: "What is JavaScript?",
          options: [
            "A markup language",
            "A programming language that runs in web browsers",
            "A database system",
            "A server framework",
          ],
          correctAnswer: 1,
          explanation: "JavaScript is a programming language primarily used for web development, running in browsers to create interactive web pages.",
        },
        {
          question: "What is a variable in JavaScript?",
          options: [
            "A function",
            "A container for storing data values",
            "A loop structure",
            "A conditional statement",
          ],
          correctAnswer: 1,
          explanation: "A variable is a named container that stores data values and can be referenced throughout the code.",
        },
      ],
      Medium: [
        {
          question: "What is closure in JavaScript?",
          options: [
            "A way to close a browser window",
            "A function that has access to variables from its outer scope",
            "A method to end a program",
            "A type of loop",
          ],
          correctAnswer: 1,
          explanation: "A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned.",
        },
      ],
      Hard: [
        {
          question: "What is the event loop in JavaScript?",
          options: [
            "A way to handle mouse clicks",
            "A mechanism that handles asynchronous operations",
            "A type of loop structure",
            "A debugging tool",
          ],
          correctAnswer: 1,
          explanation: "The event loop is a mechanism that allows JavaScript to handle asynchronous operations by continuously checking the message queue for new events.",
        },
      ],
    },
    "React.js": {
      Easy: [
        {
          question: "What is React?",
          options: [
            "A database",
            "A JavaScript library for building user interfaces",
            "A server framework",
            "A CSS framework",
          ],
          correctAnswer: 1,
          explanation: "React is a JavaScript library developed by Facebook for building user interfaces, particularly for web applications.",
        },
        {
          question: "What is JSX?",
          options: [
            "A new programming language",
            "JavaScript XML - a syntax extension for JavaScript",
            "A CSS preprocessor",
            "A database query language",
          ],
          correctAnswer: 1,
          explanation: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.",
        },
      ],
      Medium: [
        {
          question: "What is the purpose of useState hook?",
          options: [
            "To handle side effects",
            "To manage component state in functional components",
            "To create context",
            "To handle routing",
          ],
          correctAnswer: 1,
          explanation: "useState is a React hook that allows you to add state to functional components, returning the current state value and a function to update it.",
        },
      ],
      Hard: [
        {
          question: "What is the virtual DOM and why is it useful?",
          options: [
            "A backup of the real DOM",
            "A JavaScript representation of the real DOM that enables efficient updates",
            "A debugging tool",
            "A CSS framework",
          ],
          correctAnswer: 1,
          explanation: "The virtual DOM is a JavaScript representation of the real DOM that React uses to optimize updates by comparing changes and updating only what's necessary.",
        },
      ],
    },
    "Node.js": {
      Easy: [
        {
          question: "What is Node.js?",
          options: [
            "A web browser",
            "A JavaScript runtime built on Chrome's V8 engine",
            "A database",
            "A CSS framework",
          ],
          correctAnswer: 1,
          explanation: "Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server side, built on Chrome's V8 JavaScript engine.",
        },
      ],
      Medium: [
        {
          question: "What is npm?",
          options: [
            "Node Package Manager - a package manager for JavaScript",
            "A web framework",
            "A database",
            "A testing tool",
          ],
          correctAnswer: 0,
          explanation: "npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript packages.",
        },
      ],
      Hard: [
        {
          question: "What is the event-driven architecture in Node.js?",
          options: [
            "A way to handle user clicks",
            "An architecture where the flow of the program is determined by events",
            "A database design pattern",
            "A CSS methodology",
          ],
          correctAnswer: 1,
          explanation: "Event-driven architecture in Node.js means the application flow is determined by events, allowing for non-blocking, asynchronous operations.",
        },
      ],
    },
    "Python Basics": {
      Easy: [
        {
          question: "How do you print 'Hello World' in Python?",
          options: [
            "console.log('Hello World')",
            "print('Hello World')",
            "echo 'Hello World'",
            "printf('Hello World')",
          ],
          correctAnswer: 1,
          explanation: "In Python, the print() function is used to output text to the console.",
        },
      ],
      Medium: [
        {
          question: "What is a list comprehension in Python?",
          options: [
            "A way to compress files",
            "A concise way to create lists based on existing lists",
            "A debugging technique",
            "A type of loop",
          ],
          correctAnswer: 1,
          explanation: "List comprehension is a concise way to create lists in Python by applying an expression to each item in an existing iterable.",
        },
      ],
      Hard: [
        {
          question: "What is the Global Interpreter Lock (GIL) in Python?",
          options: [
            "A security feature",
            "A mechanism that prevents multiple threads from executing Python code simultaneously",
            "A debugging tool",
            "A package manager",
          ],
          correctAnswer: 1,
          explanation: "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously.",
        },
      ],
    },
    "Data Structures & Algorithms": {
      Easy: [
        {
          question: "What is an array?",
          options: [
            "A function",
            "A collection of elements stored in contiguous memory locations",
            "A loop structure",
            "A variable type",
          ],
          correctAnswer: 1,
          explanation: "An array is a data structure that stores elements of the same type in contiguous memory locations, accessible by index.",
        },
      ],
      Medium: [
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
          correctAnswer: 1,
          explanation: "Binary search has O(log n) time complexity because it eliminates half of the search space in each iteration.",
        },
      ],
      Hard: [
        {
          question: "What is a balanced binary tree?",
          options: [
            "A tree with equal left and right subtrees",
            "A tree where the height difference between left and right subtrees is at most 1",
            "A tree with all leaves at the same level",
            "A tree with an even number of nodes",
          ],
          correctAnswer: 1,
          explanation: "A balanced binary tree is one where the height difference between the left and right subtrees of any node is at most 1.",
        },
      ],
    },
    "Database Concepts": {
      Easy: [
        {
          question: "What is a database?",
          options: [
            "A programming language",
            "An organized collection of structured data",
            "A web server",
            "A file system",
          ],
          correctAnswer: 1,
          explanation: "A database is an organized collection of structured data that can be easily accessed, managed, and updated.",
        },
      ],
      Medium: [
        {
          question: "What is normalization in databases?",
          options: [
            "A way to make databases faster",
            "The process of organizing data to reduce redundancy",
            "A backup technique",
            "A security measure",
          ],
          correctAnswer: 1,
          explanation: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.",
        },
      ],
      Hard: [
        {
          question: "What is ACID in database transactions?",
          options: [
            "A database type",
            "Atomicity, Consistency, Isolation, and Durability properties",
            "A query language",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation: "ACID properties ensure reliable database transactions: Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent transactions), and Durability (permanent changes).",
        },
      ],
    },
    "System Design": {
      Easy: [
        {
          question: "What is system design?",
          options: [
            "A programming language",
            "The process of defining architecture and components of a system",
            "A database type",
            "A testing methodology",
          ],
          correctAnswer: 1,
          explanation: "System design is the process of defining the architecture, components, and interfaces of a system to meet specified requirements.",
        },
      ],
      Medium: [
        {
          question: "What is scalability in system design?",
          options: [
            "A security feature",
            "The ability of a system to handle growing amounts of work",
            "A backup system",
            "A monitoring tool",
          ],
          correctAnswer: 1,
          explanation: "Scalability is the ability of a system to handle growing amounts of work by adding resources to the system.",
        },
      ],
      Hard: [
        {
          question: "What is microservices architecture?",
          options: [
            "A single large application",
            "An architectural style that structures an application as a collection of small services",
            "A database design",
            "A testing framework",
          ],
          correctAnswer: 1,
          explanation: "Microservices architecture is an approach where an application is structured as a collection of small, independent services that communicate over well-defined APIs.",
        },
      ],
    },
    "Web Development": {
      Easy: [
        {
          question: "What is HTML?",
          options: [
            "A programming language",
            "A markup language for creating web pages",
            "A styling language",
            "A database",
          ],
          correctAnswer: 1,
          explanation: "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.",
        },
      ],
      Medium: [
        {
          question: "What is responsive web design?",
          options: [
            "A programming language",
            "An approach to make websites work on all devices and screen sizes",
            "A database type",
            "A security feature",
          ],
          correctAnswer: 1,
          explanation: "Responsive web design is an approach that makes websites adapt to different screen sizes and devices, providing optimal viewing experience.",
        },
      ],
      Hard: [
        {
          question: "What is the difference between HTTP and HTTPS?",
          options: [
            "They are the same thing",
            "HTTPS is HTTP with encryption and security",
            "HTTP is faster than HTTPS",
            "HTTPS is only for mobile devices",
          ],
          correctAnswer: 1,
          explanation: "HTTPS is HTTP with encryption and security. It uses SSL/TLS to encrypt data between the client and server, providing secure communication.",
        },
      ],
    },
    "Cloud Computing": {
      Easy: [
        {
          question: "What is cloud computing?",
          options: [
            "A programming language",
            "The delivery of computing services over the internet",
            "A database type",
            "A web framework",
          ],
          correctAnswer: 1,
          explanation: "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software—over the internet.",
        },
      ],
      Medium: [
        {
          question: "What is IaaS?",
          options: [
            "A programming language",
            "Infrastructure as a Service - virtualized computing resources over the internet",
            "A database type",
            "A security protocol",
          ],
          correctAnswer: 1,
          explanation: "IaaS (Infrastructure as a Service) provides virtualized computing resources over the internet, allowing users to rent servers, storage, and networking.",
        },
      ],
      Hard: [
        {
          question: "What is serverless computing?",
          options: [
            "Computing without servers",
            "A cloud computing model where the cloud provider manages the server infrastructure",
            "A type of database",
            "A security feature",
          ],
          correctAnswer: 1,
          explanation: "Serverless computing is a cloud computing model where the cloud provider manages the server infrastructure, and users only pay for the compute time they use.",
        },
      ],
    },
    "DevOps Basics": {
      Easy: [
        {
          question: "What is DevOps?",
          options: [
            "A programming language",
            "A set of practices combining software development and IT operations",
            "A database type",
            "A web framework",
          ],
          correctAnswer: 1,
          explanation: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery.",
        },
      ],
      Medium: [
        {
          question: "What is CI/CD?",
          options: [
            "A programming language",
            "Continuous Integration and Continuous Delivery/Deployment",
            "A database type",
            "A security protocol",
          ],
          correctAnswer: 1,
          explanation: "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment, which are practices that automate the software delivery process.",
        },
      ],
      Hard: [
        {
          question: "What is containerization?",
          options: [
            "A programming language",
            "A method of packaging and running applications in isolated environments",
            "A database type",
            "A security feature",
          ],
          correctAnswer: 1,
          explanation: "Containerization is a method of packaging and running applications in isolated environments called containers, ensuring consistency across different computing environments.",
        },
      ],
    },
    "Cybersecurity": {
      Easy: [
        {
          question: "What is cybersecurity?",
          options: [
            "A programming language",
            "The practice of protecting systems and data from digital attacks",
            "A database type",
            "A web framework",
          ],
          correctAnswer: 1,
          explanation: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, unauthorized access, and data breaches.",
        },
      ],
      Medium: [
        {
          question: "What is encryption?",
          options: [
            "A programming language",
            "The process of converting data into a secure format",
            "A database type",
            "A web framework",
          ],
          correctAnswer: 1,
          explanation: "Encryption is the process of converting data into a secure format that can only be read by authorized parties with the correct decryption key.",
        },
      ],
      Hard: [
        {
          question: "What is a zero-day vulnerability?",
          options: [
            "A security feature",
            "A security flaw that is unknown to the software vendor",
            "A type of encryption",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation: "A zero-day vulnerability is a security flaw that is unknown to the software vendor and has no patch available, making it potentially dangerous.",
        },
      ],
    },
    "Machine Learning Basics": {
      Easy: [
        {
          question: "What is machine learning?",
          options: [
            "A programming language",
            "A subset of AI that enables systems to learn from data",
            "A database type",
            "A web framework",
          ],
          correctAnswer: 1,
          explanation: "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.",
        },
      ],
      Medium: [
        {
          question: "What is supervised learning?",
          options: [
            "A programming language",
            "A type of machine learning where the model learns from labeled data",
            "A database type",
            "A security protocol",
          ],
          correctAnswer: 1,
          explanation: "Supervised learning is a type of machine learning where the model learns from labeled training data to make predictions or decisions.",
        },
      ],
      Hard: [
        {
          question: "What is deep learning?",
          options: [
            "A programming language",
            "A subset of machine learning using neural networks with multiple layers",
            "A database type",
            "A security feature",
          ],
          correctAnswer: 1,
          explanation: "Deep learning is a subset of machine learning that uses neural networks with multiple layers to learn hierarchical representations of data.",
        },
      ],
    },
  }
}

function createBasicTest(topic: string, difficulty: string, questionCount: number) {
  const questions = []

  for (let i = 0; i < questionCount; i++) {
    questions.push({
      id: `basic_${i}`,
      question: `Sample ${topic} question ${i + 1}: What is a fundamental concept in ${topic}?`,
      options: [
        "Correct answer - This demonstrates understanding",
        "Incorrect option A",
        "Incorrect option B",
        "Incorrect option C",
      ],
      correctAnswer: 0,
      explanation: `This is the correct answer because it shows fundamental understanding of ${topic} concepts.`,
      difficulty,
      topic,
    })
  }

  return { questions }
}
