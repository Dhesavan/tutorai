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
        {
          question: "What is a linked list?",
          options: [
            "A type of array",
            "A linear data structure where elements are stored in nodes connected by pointers",
            "A sorting algorithm",
            "A search algorithm",
          ],
          correctAnswer: 1,
          explanation: "A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.",
        },
        {
          question: "What is the time complexity of accessing an element in an array by index?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
          correctAnswer: 0,
          explanation: "Accessing an element in an array by index is O(1) because the memory address can be calculated directly.",
        },
        {
          question: "What is a stack?",
          options: [
            "A type of array",
            "A LIFO (Last In First Out) data structure",
            "A sorting algorithm",
            "A search algorithm",
          ],
          correctAnswer: 1,
          explanation: "A stack is a LIFO data structure where elements are added and removed from the same end.",
        },
        {
          question: "What is a queue?",
          options: [
            "A type of array",
            "A FIFO (First In First Out) data structure",
            "A sorting algorithm",
            "A search algorithm",
          ],
          correctAnswer: 1,
          explanation: "A queue is a FIFO data structure where elements are added at one end and removed from the other end.",
        }
      ],
      Medium: [
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
          correctAnswer: 1,
          explanation: "Binary search has O(log n) time complexity because it eliminates half of the search space in each iteration.",
        },
        {
          question: "What is a binary tree?",
          options: [
            "A type of array",
            "A tree data structure where each node has at most two children",
            "A sorting algorithm",
            "A search algorithm",
          ],
          correctAnswer: 1,
          explanation: "A binary tree is a tree data structure where each node has at most two children, referred to as left child and right child.",
        },
        {
          question: "What is the time complexity of quicksort in the average case?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correctAnswer: 1,
          explanation: "Quicksort has an average time complexity of O(n log n), though its worst-case complexity is O(n²).",
        },
        {
          question: "What is a hash table?",
          options: [
            "A type of array",
            "A data structure that maps keys to values using a hash function",
            "A sorting algorithm",
            "A search algorithm",
          ],
          correctAnswer: 1,
          explanation: "A hash table is a data structure that uses a hash function to map keys to values, providing O(1) average time complexity for lookups.",
        },
        {
          question: "What is the difference between BFS and DFS?",
          options: [
            "BFS uses a queue, DFS uses a stack",
            "BFS is faster than DFS",
            "DFS is more memory efficient than BFS",
            "There is no difference",
          ],
          correctAnswer: 0,
          explanation: "BFS (Breadth-First Search) uses a queue to explore all nodes at the current depth before moving deeper, while DFS (Depth-First Search) uses a stack to explore as far as possible along each branch.",
        }
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
        {
          question: "What is dynamic programming?",
          options: [
            "A type of array",
            "A method for solving complex problems by breaking them into simpler subproblems",
            "A sorting algorithm",
            "A search algorithm",
          ],
          correctAnswer: 1,
          explanation: "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and storing their solutions to avoid redundant calculations.",
        },
        {
          question: "What is the time complexity of Dijkstra's algorithm?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correctAnswer: 1,
          explanation: "Dijkstra's algorithm has a time complexity of O((V + E) log V) where V is the number of vertices and E is the number of edges, which simplifies to O(n log n) in dense graphs.",
        },
        {
          question: "What is a red-black tree?",
          options: [
            "A type of array",
            "A self-balancing binary search tree with color-coded nodes",
            "A sorting algorithm",
            "A search algorithm",
          ],
          correctAnswer: 1,
          explanation: "A red-black tree is a self-balancing binary search tree where each node has an extra bit for color, used to maintain balance during insertions and deletions.",
        },
        {
          question: "What is the difference between a min heap and a max heap?",
          options: [
            "In a min heap, parent nodes are smaller than children; in a max heap, parent nodes are larger",
            "Min heaps are faster than max heaps",
            "Max heaps use more memory than min heaps",
            "There is no difference",
          ],
          correctAnswer: 0,
          explanation: "In a min heap, each parent node is smaller than its children, while in a max heap, each parent node is larger than its children.",
        }
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
        {
          question: "What is SQL?",
          options: [
            "A programming language",
            "Structured Query Language used to manage relational databases",
            "A web framework",
            "A file format",
          ],
          correctAnswer: 1,
          explanation: "SQL (Structured Query Language) is a standard language used to manage and manipulate relational databases.",
        },
        {
          question: "What is a primary key?",
          options: [
            "A type of index",
            "A unique identifier for a record in a table",
            "A foreign key",
            "A table name",
          ],
          correctAnswer: 1,
          explanation: "A primary key is a unique identifier for each record in a database table, ensuring no duplicate entries.",
        },
        {
          question: "What is a foreign key?",
          options: [
            "A primary key",
            "A key used to link two tables together",
            "A type of index",
            "A table name",
          ],
          correctAnswer: 1,
          explanation: "A foreign key is a field in one table that references the primary key of another table, creating a relationship between tables.",
        },
        {
          question: "What is normalization?",
          options: [
            "A backup process",
            "The process of organizing data to reduce redundancy",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.",
        }
      ],
      Medium: [
        {
          question: "What is the difference between SQL and NoSQL databases?",
          options: [
            "SQL is faster than NoSQL",
            "SQL is relational, NoSQL is non-relational",
            "NoSQL is more secure than SQL",
            "There is no difference",
          ],
          correctAnswer: 1,
          explanation: "SQL databases are relational and use structured schemas, while NoSQL databases are non-relational and have flexible schemas.",
        },
        {
          question: "What is a database index?",
          options: [
            "A backup copy",
            "A data structure that improves the speed of data retrieval",
            "A type of query",
            "A table name",
          ],
          correctAnswer: 1,
          explanation: "A database index is a data structure that improves the speed of data retrieval operations on a database table.",
        },
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
        {
          question: "What is a database view?",
          options: [
            "A backup copy",
            "A virtual table based on the result of a query",
            "A type of index",
            "A table name",
          ],
          correctAnswer: 1,
          explanation: "A database view is a virtual table based on the result of a query, providing a way to simplify complex queries.",
        },
        {
          question: "What is a stored procedure?",
          options: [
            "A backup process",
            "A set of SQL statements stored in the database",
            "A type of index",
            "A table name",
          ],
          correctAnswer: 1,
          explanation: "A stored procedure is a set of SQL statements stored in the database that can be executed as a single unit.",
        }
      ],
      Hard: [
        {
          question: "What is database sharding?",
          options: [
            "A backup technique",
            "Splitting a database into smaller, more manageable pieces",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Database sharding is the process of splitting a database into smaller, more manageable pieces called shards to improve performance and scalability.",
        },
        {
          question: "What is a deadlock in databases?",
          options: [
            "A backup process",
            "A situation where two or more transactions are waiting for each other to release locks",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "A deadlock occurs when two or more transactions are waiting for each other to release locks, causing a standstill.",
        },
        {
          question: "What is database replication?",
          options: [
            "A backup process",
            "The process of copying data from one database to another",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Database replication is the process of copying data from one database to another to ensure data availability and reliability.",
        },
        {
          question: "What is database partitioning?",
          options: [
            "A backup process",
            "Dividing a database into smaller, more manageable parts",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Database partitioning is the process of dividing a database into smaller, more manageable parts to improve performance and maintenance.",
        },
        {
          question: "What is database normalization to 3NF?",
          options: [
            "A backup process",
            "A process of organizing data to minimize redundancy and dependency",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Third Normal Form (3NF) is a database normalization process that ensures data is organized to minimize redundancy and dependency.",
        }
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
        {
          question: "What is scalability?",
          options: [
            "A security feature",
            "The ability of a system to handle growing amounts of work",
            "A backup system",
            "A monitoring tool",
          ],
          correctAnswer: 1,
          explanation: "Scalability is the ability of a system to handle growing amounts of work by adding resources to the system.",
        },
        {
          question: "What is a load balancer?",
          options: [
            "A database",
            "A device that distributes network traffic across servers",
            "A type of encryption",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation: "A load balancer is a device that distributes network traffic across multiple servers to ensure no single server becomes overwhelmed.",
        },
        {
          question: "What is caching?",
          options: [
            "A backup process",
            "Storing frequently accessed data in a faster storage system",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Caching is the process of storing frequently accessed data in a faster storage system to improve performance.",
        },
        {
          question: "What is a CDN?",
          options: [
            "A database",
            "Content Delivery Network - a distributed network of servers",
            "A type of encryption",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation: "A CDN (Content Delivery Network) is a distributed network of servers that delivers web content to users based on their geographic location.",
        }
      ],
      Medium: [
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
        {
          question: "What is horizontal scaling?",
          options: [
            "Adding more power to existing servers",
            "Adding more servers to handle increased load",
            "A type of encryption",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation: "Horizontal scaling is the process of adding more servers to handle increased load, rather than adding more power to existing servers.",
        },
        {
          question: "What is a message queue?",
          options: [
            "A database",
            "A system for asynchronous communication between services",
            "A type of encryption",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation: "A message queue is a system for asynchronous communication between services, allowing them to communicate without being directly connected.",
        },
        {
          question: "What is database sharding?",
          options: [
            "A backup process",
            "Splitting a database into smaller, more manageable pieces",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Database sharding is the process of splitting a database into smaller, more manageable pieces called shards to improve performance and scalability.",
        },
        {
          question: "What is eventual consistency?",
          options: [
            "A backup process",
            "A consistency model where updates propagate over time",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "Eventual consistency is a consistency model where updates propagate over time, rather than being immediately consistent across all nodes.",
        }
      ],
      Hard: [
        {
          question: "What is the CAP theorem?",
          options: [
            "A backup process",
            "A theorem about distributed systems' trade-offs between Consistency, Availability, and Partition tolerance",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "The CAP theorem states that in a distributed system, it's impossible to simultaneously provide more than two of: Consistency, Availability, and Partition tolerance.",
        },
        {
          question: "What is a circuit breaker pattern?",
          options: [
            "A backup process",
            "A design pattern to prevent cascading failures in distributed systems",
            "A type of encryption",
            "A query optimization technique",
          ],
          correctAnswer: 1,
          explanation: "The circuit breaker pattern is a design pattern that prevents cascading failures in distributed systems by stopping the flow of requests when a service is failing.",
        },
        {
          question: "What is the difference between synchronous and asynchronous communication?",
          options: [
            "Synchronous is faster than asynchronous",
            "Synchronous waits for a response, asynchronous doesn't",
            "Asynchronous is more secure than synchronous",
            "There is no difference",
          ],
          correctAnswer: 1,
          explanation: "Synchronous communication waits for a response before continuing, while asynchronous communication allows the sender to continue without waiting for a response.",
        },
        {
          question: "What is a distributed system?",
          options: [
            "A single server system",
            "A system whose components are located on different networked computers",
            "A type of encryption",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation: "A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages.",
        },
        {
          question: "What is the difference between stateful and stateless services?",
          options: [
            "Stateful services are faster than stateless",
            "Stateful services maintain data between requests, stateless don't",
            "Stateless services are more secure than stateful",
            "There is no difference",
          ],
          correctAnswer: 1,
          explanation: "Stateful services maintain data between requests, while stateless services don't store any data between requests.",
        }
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
        {
          question: "What is the difference between AI and Machine Learning?",
          options: [
            "There is no difference",
            "AI is broader, ML is a subset of AI",
            "ML is broader, AI is a subset of ML",
            "They are completely unrelated",
          ],
          correctAnswer: 1,
          explanation: "AI is the broader concept of machines being able to carry out tasks intelligently, while ML is a specific approach to achieve AI through learning from data.",
        },
        {
          question: "What is a feature in machine learning?",
          options: [
            "A type of algorithm",
            "An input variable used for prediction",
            "A type of neural network",
            "A programming language",
          ],
          correctAnswer: 1,
          explanation: "Features are individual measurable properties or characteristics of a phenomenon being observed in machine learning.",
        },
        {
          question: "What is overfitting in machine learning?",
          options: [
            "When the model performs well on training data but poorly on new data",
            "When the model is too simple",
            "When the model is too fast",
            "When the model uses too much memory",
          ],
          correctAnswer: 0,
          explanation: "Overfitting occurs when a model learns the training data too well, including its noise and outliers, making it perform poorly on new data.",
        },
        {
          question: "What is the purpose of a training set in machine learning?",
          options: [
            "To test the final model",
            "To train the model",
            "To deploy the model",
            "To visualize the data",
          ],
          correctAnswer: 1,
          explanation: "The training set is used to teach the model by providing examples from which it can learn patterns and relationships.",
        }
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
        {
          question: "What is the difference between classification and regression?",
          options: [
            "Classification predicts categories, regression predicts continuous values",
            "Classification is faster than regression",
            "Regression is more accurate than classification",
            "There is no difference",
          ],
          correctAnswer: 0,
          explanation: "Classification predicts discrete categories, while regression predicts continuous numerical values.",
        },
        {
          question: "What is cross-validation?",
          options: [
            "A type of neural network",
            "A technique to assess model performance using multiple training and validation sets",
            "A data preprocessing step",
            "A type of clustering algorithm",
          ],
          correctAnswer: 1,
          explanation: "Cross-validation is a technique to evaluate model performance by training and testing on different subsets of the data.",
        },
        {
          question: "What is the purpose of a validation set?",
          options: [
            "To train the model",
            "To test the final model",
            "To tune hyperparameters and prevent overfitting",
            "To deploy the model",
          ],
          correctAnswer: 2,
          explanation: "The validation set is used to tune hyperparameters and evaluate the model during training to prevent overfitting.",
        },
        {
          question: "What is feature engineering?",
          options: [
            "A type of neural network",
            "The process of creating new features from existing data",
            "A type of clustering algorithm",
            "A data visualization technique",
          ],
          correctAnswer: 1,
          explanation: "Feature engineering is the process of creating new features from existing data to improve model performance.",
        }
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
        {
          question: "What is the difference between bagging and boosting?",
          options: [
            "Bagging trains models in parallel, boosting trains models sequentially",
            "Bagging is faster than boosting",
            "Boosting is more accurate than bagging",
            "There is no difference",
          ],
          correctAnswer: 0,
          explanation: "Bagging trains multiple models in parallel and combines their predictions, while boosting trains models sequentially, each focusing on previous errors.",
        },
        {
          question: "What is transfer learning?",
          options: [
            "A type of neural network",
            "Using knowledge from one task to improve learning in another task",
            "A data preprocessing technique",
            "A type of clustering algorithm",
          ],
          correctAnswer: 1,
          explanation: "Transfer learning is the process of using knowledge gained from one task to improve learning in another related task.",
        },
        {
          question: "What is the curse of dimensionality?",
          options: [
            "A type of neural network",
            "Problems that arise when working with high-dimensional data",
            "A data preprocessing technique",
            "A type of clustering algorithm",
          ],
          correctAnswer: 1,
          explanation: "The curse of dimensionality refers to problems that arise when working with high-dimensional data, such as increased computational complexity and sparsity.",
        },
        {
          question: "What is the difference between L1 and L2 regularization?",
          options: [
            "L1 creates sparse models, L2 prevents large weights",
            "L1 is faster than L2",
            "L2 is more accurate than L1",
            "There is no difference",
          ],
          correctAnswer: 0,
          explanation: "L1 regularization creates sparse models by encouraging zero weights, while L2 regularization prevents large weights by penalizing their square values.",
        }
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
