"use client"

import * as React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const domainOptions = [
  "JavaScript Fundamentals",
  "React.js",
  "Node.js",
  "Python Basics",
  "Data Structures & Algorithms",
  "Database Concepts",
  "System Design",
  "Web Development",
  "Cloud Computing",
  "DevOps Basics",
  "Cybersecurity"
]

const difficultyOptions = ["easy", "medium", "hard"]

type Difficulty = "easy" | "medium" | "hard"

const staticQuestions: Record<string, Record<Difficulty, { question: string, options: string[], correctAnswer: number, explanation: string }[]>> = {
  "JavaScript Fundamentals": {
    easy: [
      {
        question: "What is the correct syntax to print a message in the console in JavaScript?",
        options: ["console.log('Hello')", "print('Hello')", "echo('Hello')", "printf('Hello')"],
        correctAnswer: 0,
        explanation: "console.log() is used to print messages to the console in JavaScript."
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "let", "both var and let"],
        correctAnswer: 3,
        explanation: "Both var and let can be used to declare variables in JavaScript."
      }
    ],
    medium: [
      {
        question: "What will be the output of: console.log(typeof null)?",
        options: ["object", "null", "undefined", "number"],
        correctAnswer: 0,
        explanation: "typeof null returns 'object' due to a legacy bug in JavaScript."
      },
      {
        question: "Which array method creates a new array with all elements that pass the test implemented by the provided function?",
        options: ["filter", "map", "reduce", "forEach"],
        correctAnswer: 0,
        explanation: "filter() creates a new array with elements that pass the test."
      }
    ],
    hard: [
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A function having access to its own scope, the outer function's scope, and the global scope",
          "A function that returns another function",
          "A function that is immediately invoked",
          "A function with no parameters"
        ],
        correctAnswer: 0,
        explanation: "A closure is a function having access to its own scope, the outer function's scope, and the global scope."
      },
      {
        question: "What is the result of [1,2,3] + [4,5,6] in JavaScript?",
        options: ["'1,2,34,5,6'", "[1,2,3,4,5,6]", "'1,2,3,4,5,6'", "NaN"],
        correctAnswer: 0,
        explanation: "The + operator converts arrays to strings and concatenates them, resulting in '1,2,34,5,6'."
      }
    ]
  },
  "React.js": {
    easy: [
      {
        question: "What is the command to create a new React app using Create React App?",
        options: ["npx create-react-app my-app", "npm install react", "react new app", "npm create react-app"],
        correctAnswer: 0,
        explanation: "npx create-react-app my-app creates a new React app."
      },
      {
        question: "Which hook is used to manage state in a functional component?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 0,
        explanation: "useState is the primary hook for managing state in functional components."
      }
    ],
    medium: [
      {
        question: "What is the purpose of the useEffect hook?",
        options: [
          "To perform side effects in function components",
          "To manage state",
          "To create context",
          "To memoize values"
        ],
        correctAnswer: 0,
        explanation: "useEffect is used for side effects like data fetching, subscriptions, etc."
      },
      {
        question: "How do you pass data from a parent to a child component?",
        options: ["Via props", "Via state", "Via context", "Via refs"],
        correctAnswer: 0,
        explanation: "Props are used to pass data from parent to child."
      }
    ],
    hard: [
      {
        question: "What is React's Context API used for?",
        options: [
          "To share state/data globally without prop drilling",
          "To manage component lifecycle",
          "To handle HTTP requests",
          "To optimize rendering"
        ],
        correctAnswer: 0,
        explanation: "Context API allows sharing data globally in a React app."
      },
      {
        question: "What is the difference between useMemo and useCallback?",
        options: [
          "useMemo memoizes values, useCallback memoizes functions",
          "useMemo is for side effects, useCallback is for state",
          "useMemo is for refs, useCallback is for context",
          "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "useMemo memoizes values, useCallback memoizes functions."
      }
    ]
  },
  "Node.js": {
    easy: [
      {
        question: "Which of the following is a Node.js framework?",
        options: ["Express.js", "Django", "Laravel", "Spring"],
        correctAnswer: 0,
        explanation: "Express.js is a popular Node.js framework."
      },
      {
        question: "Which command runs a Node.js file named app.js?",
        options: ["node app.js", "npm app.js", "run app.js", "start app.js"],
        correctAnswer: 0,
        explanation: "node app.js runs a Node.js file."
      }
    ],
    medium: [
      {
        question: "What is the purpose of the package.json file?",
        options: [
          "To manage project dependencies and scripts",
          "To store HTML templates",
          "To define CSS styles",
          "To configure the database"
        ],
        correctAnswer: 0,
        explanation: "package.json manages dependencies, scripts, and project metadata."
      },
      {
        question: "Which module is used to work with file and directory paths?",
        options: ["path", "fs", "os", "http"],
        correctAnswer: 0,
        explanation: "The 'path' module provides utilities for file and directory paths."
      }
    ],
    hard: [
      {
        question: "What is the event loop in Node.js?",
        options: [
          "A mechanism that handles asynchronous callbacks",
          "A loop that runs forever",
          "A function that repeats",
          "A type of middleware"
        ],
        correctAnswer: 0,
        explanation: "The event loop handles asynchronous operations in Node.js."
      },
      {
        question: "How can you handle uncaught exceptions in Node.js?",
        options: [
          "By listening to the 'uncaughtException' event on process",
          "By using try/catch everywhere",
          "By using setTimeout",
          "By using async/await"
        ],
        correctAnswer: 0,
        explanation: "process.on('uncaughtException', handler) can catch uncaught exceptions."
      }
    ]
  },
  "Python Basics": {
    easy: [
      {
        question: "Which symbol is used to comment a single line in Python?",
        options: ["#", "//", "<!--", "--"],
        correctAnswer: 0,
        explanation: "# is used for single-line comments in Python."
      },
      {
        question: "How do you print 'Hello World' in Python?",
        options: ["print('Hello World')", "echo 'Hello World'", "console.log('Hello World')", "printf('Hello World')"],
        correctAnswer: 0,
        explanation: "print('Hello World') prints to the console in Python."
      }
    ],
    medium: [
      {
        question: "What is a list comprehension in Python?",
        options: [
          "A concise way to create lists",
          "A function that returns a list",
          "A method to sort lists",
          "A way to import modules"
        ],
        correctAnswer: 0,
        explanation: "List comprehensions provide a concise way to create lists."
      },
      {
        question: "What is the output of: print(type({}))?",
        options: ["<class 'dict'>", "<class 'list'>", "<class 'set'>", "<class 'tuple'>"],
        correctAnswer: 0,
        explanation: "{} creates a dictionary, so the type is <class 'dict'>."
      }
    ],
    hard: [
      {
        question: "What is a Python generator?",
        options: [
          "A function that yields values one at a time",
          "A function that returns a list",
          "A class that creates objects",
          "A module for random numbers"
        ],
        correctAnswer: 0,
        explanation: "Generators yield values one at a time and maintain state between calls."
      },
      {
        question: "What does the 'with' statement do in Python?",
        options: [
          "It simplifies exception handling by encapsulating common preparation and cleanup tasks",
          "It creates a new thread",
          "It defines a function",
          "It imports a module"
        ],
        correctAnswer: 0,
        explanation: "'with' is used for context management, like opening files."
      }
    ]
  },
  "Data Structures & Algorithms": {
    easy: [
      {
        question: "Which data structure uses FIFO (First In First Out)?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        correctAnswer: 0,
        explanation: "Queue uses FIFO order."
      },
      {
        question: "What is the time complexity of accessing an element in an array by index?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctAnswer: 0,
        explanation: "Accessing by index in an array is O(1)."
      }
    ],
    medium: [
      {
        question: "Which sorting algorithm is generally fastest for large datasets?",
        options: ["Quick Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
        correctAnswer: 0,
        explanation: "Quick Sort is generally fastest for large datasets."
      },
      {
        question: "What is a binary search tree?",
        options: [
          "A tree where each node has at most two children and left < root < right",
          "A tree with only one child per node",
          "A tree with cycles",
          "A tree with all nodes at the same depth"
        ],
        correctAnswer: 0,
        explanation: "BSTs have at most two children and left < root < right."
      }
    ],
    hard: [
      {
        question: "What is dynamic programming?",
        options: [
          "A method for solving complex problems by breaking them down into simpler subproblems",
          "A way to write code at runtime",
          "A type of recursion",
          "A sorting algorithm"
        ],
        correctAnswer: 0,
        explanation: "Dynamic programming solves problems by breaking them into subproblems and storing results."
      },
      {
        question: "What is the time complexity of searching in a balanced binary search tree?",
        options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
        correctAnswer: 0,
        explanation: "Searching in a balanced BST is O(log n)."
      }
    ]
  },
  "Database Concepts": {
    easy: [
      {
        question: "What is a primary key?",
        options: ["A unique identifier for a record in a table", "A type of index", "A foreign key", "A table name"],
        correctAnswer: 0,
        explanation: "A primary key uniquely identifies a record."
      },
      {
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
        correctAnswer: 0,
        explanation: "SELECT retrieves data from a database."
      }
    ],
    medium: [
      {
        question: "What is normalization in databases?",
        options: [
          "The process of organizing data to reduce redundancy",
          "The process of encrypting data",
          "The process of creating indexes",
          "The process of backing up data"
        ],
        correctAnswer: 0,
        explanation: "Normalization organizes data to reduce redundancy."
      },
      {
        question: "What is a foreign key?",
        options: [
          "A key used to link two tables",
          "A key that is always unique",
          "A key that is never null",
          "A key that is used for sorting"
        ],
        correctAnswer: 0,
        explanation: "A foreign key links two tables."
      }
    ],
    hard: [
      {
        question: "What is a database view?",
        options: [
          "A virtual table based on the result of a query",
          "A physical table",
          "A type of index",
          "A backup file"
        ],
        correctAnswer: 0,
        explanation: "A view is a virtual table based on a query."
      },
      {
        question: "What is a deadlock in databases?",
        options: [
          "A situation where two or more transactions are waiting for each other to release locks",
          "A type of backup",
          "A type of index",
          "A type of normalization"
        ],
        correctAnswer: 0,
        explanation: "A deadlock is when transactions wait for each other, causing a standstill."
      }
    ]
  },
  "System Design": {
    easy: [
      {
        question: "What is scalability in system design?",
        options: ["The ability to handle increased load", "The ability to recover from failure", "The ability to encrypt data", "The ability to reduce latency"],
        correctAnswer: 0,
        explanation: "Scalability is the ability to handle increased load."
      },
      {
        question: "What is a load balancer?",
        options: ["A device that distributes network traffic across servers", "A database", "A cache", "A firewall"],
        correctAnswer: 0,
        explanation: "A load balancer distributes traffic across servers."
      }
    ],
    medium: [
      {
        question: "What is microservices architecture?",
        options: [
          "An architectural style that structures an application as a collection of small services",
          "A single large application",
          "A database design",
          "A testing framework"
        ],
        correctAnswer: 0,
        explanation: "Microservices architecture structures an app as a collection of small services."
      },
      {
        question: "What is a CDN?",
        options: ["Content Delivery Network", "Central Data Node", "Content Data Network", "Central Delivery Network"],
        correctAnswer: 0,
        explanation: "CDN stands for Content Delivery Network."
      }
    ],
    hard: [
      {
        question: "What is eventual consistency?",
        options: [
          "A consistency model where updates propagate over time",
          "A model where all updates are immediate",
          "A model for relational databases only",
          "A model for single-server systems"
        ],
        correctAnswer: 0,
        explanation: "Eventual consistency means updates propagate over time, not instantly."
      },
      {
        question: "What is sharding in system design?",
        options: [
          "Splitting a database into smaller, more manageable pieces",
          "Encrypting data",
          "Caching data",
          "Balancing network traffic"
        ],
        correctAnswer: 0,
        explanation: "Sharding splits a database for scalability."
      }
    ]
  },
  "Web Development": {
    easy: [
      {
        question: "Which language is used for styling web pages?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        correctAnswer: 0,
        explanation: "CSS is used for styling web pages."
      },
      {
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Link", "Universal Reference Locator"],
        correctAnswer: 0,
        explanation: "URL stands for Uniform Resource Locator."
      }
    ],
    medium: [
      {
        question: "What is responsive web design?",
        options: [
          "Designing websites to work on all devices and screen sizes",
          "Designing only for mobile",
          "Designing only for desktop",
          "Designing for print"
        ],
        correctAnswer: 0,
        explanation: "Responsive design works on all devices and screen sizes."
      },
      {
        question: "What is the purpose of the <form> element in HTML?",
        options: [
          "To collect user input",
          "To display images",
          "To create links",
          "To add scripts"
        ],
        correctAnswer: 0,
        explanation: "<form> is used to collect user input."
      }
    ],
    hard: [
      {
        question: "What is the main advantage of using a CSS preprocessor like SASS?",
        options: [
          "It allows variables, nesting, and mixins in CSS",
          "It makes CSS run faster",
          "It adds JavaScript to CSS",
          "It creates HTML templates"
        ],
        correctAnswer: 0,
        explanation: "SASS allows variables, nesting, and mixins in CSS."
      },
      {
        question: "What is the purpose of the 'defer' attribute in a <script> tag?",
        options: [
          "It delays script execution until after the document has been parsed",
          "It loads the script asynchronously",
          "It blocks page rendering",
          "It only works with CSS files"
        ],
        correctAnswer: 0,
        explanation: "'defer' delays script execution until after parsing."
      }
    ]
  },
  "Cloud Computing": {
    easy: [
      {
        question: "What is cloud computing?",
        options: ["Delivery of computing services over the internet", "A type of database", "A programming language", "A web browser"],
        correctAnswer: 0,
        explanation: "Cloud computing delivers services over the internet."
      },
      {
        question: "Which of the following is a cloud service provider?",
        options: ["AWS", "MySQL", "React", "Linux"],
        correctAnswer: 0,
        explanation: "AWS is a cloud service provider."
      }
    ],
    medium: [
      {
        question: "What is SaaS?",
        options: ["Software as a Service", "Storage as a Service", "System as a Service", "Server as a Service"],
        correctAnswer: 0,
        explanation: "SaaS stands for Software as a Service."
      },
      {
        question: "What is the main benefit of using cloud storage?",
        options: [
          "Access data from anywhere",
          "Faster internet",
          "Cheaper computers",
          "More RAM"
        ],
        correctAnswer: 0,
        explanation: "Cloud storage allows access to data from anywhere."
      }
    ],
    hard: [
      {
        question: "What is serverless computing?",
        options: [
          "A cloud-computing model where the cloud provider runs the server",
          "A model with no servers at all",
          "A type of database",
          "A programming language"
        ],
        correctAnswer: 0,
        explanation: "Serverless means the provider manages the server."
      },
      {
        question: "What is a VPC in cloud computing?",
        options: [
          "Virtual Private Cloud",
          "Virtual Public Cloud",
          "Verified Private Cloud",
          "Virtual Protected Cluster"
        ],
        correctAnswer: 0,
        explanation: "VPC stands for Virtual Private Cloud."
      }
    ]
  },
  "DevOps Basics": {
    easy: [
      {
        question: "What does CI/CD stand for?",
        options: [
          "Continuous Integration/Continuous Delivery",
          "Code Integration/Code Deployment",
          "Continuous Improvement/Continuous Development",
          "Code Inspection/Code Debugging"
        ],
        correctAnswer: 0,
        explanation: "CI/CD stands for Continuous Integration/Continuous Delivery."
      },
      {
        question: "Which tool is commonly used for containerization?",
        options: ["Docker", "Jenkins", "Git", "Nginx"],
        correctAnswer: 0,
        explanation: "Docker is a popular containerization tool."
      }
    ],
    medium: [
      {
        question: "What is a blue-green deployment?",
        options: [
          "A deployment strategy that reduces downtime by running two environments",
          "A type of database replication",
          "A monitoring tool",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "Blue-green deployment uses two environments to reduce downtime."
      },
      {
        question: "What is the purpose of Infrastructure as Code (IaC)?",
        options: [
          "To automate infrastructure provisioning",
          "To write application code",
          "To manage user permissions",
          "To monitor application logs"
        ],
        correctAnswer: 0,
        explanation: "IaC allows you to automate and manage infrastructure using code."
      }
    ],
    hard: [
      {
        question: "In Kubernetes, what is a podDisruptionBudget?",
        options: [
          "A policy to limit the number of pods down during maintenance",
          "A cost estimation tool",
          "A logging configuration",
          "A type of deployment"
        ],
        correctAnswer: 0,
        explanation: "podDisruptionBudget limits the number of pods that can be unavailable."
      },
      {
        question: "What is the main benefit of using canary deployments?",
        options: [
          "To test new features with a small subset of users",
          "To encrypt network traffic",
          "To automate backups",
          "To monitor CPU usage"
        ],
        correctAnswer: 0,
        explanation: "Canary deployments allow testing with a small group before full rollout."
      }
    ]
  },
  "Cybersecurity": {
    easy: [
      {
        question: "What does HTTPS stand for?",
        options: ["HyperText Transfer Protocol Secure", "HyperText Transfer Protocol Service", "HyperText Transfer Protocol Standard", "HyperText Transfer Protocol Server"],
        correctAnswer: 0,
        explanation: "HTTPS stands for HyperText Transfer Protocol Secure."
      },
      {
        question: "Which of the following is a strong password?",
        options: ["P@ssw0rd123!", "password", "123456", "qwerty"],
        correctAnswer: 0,
        explanation: "P@ssw0rd123! is a strong password."
      }
    ],
    medium: [
      {
        question: "What is a CSRF attack?",
        options: [
          "Cross-Site Request Forgery",
          "Cross-Site Resource Fetch",
          "Client-Side Resource Failure",
          "Code Security Risk Factor"
        ],
        correctAnswer: 0,
        explanation: "CSRF stands for Cross-Site Request Forgery, an attack that tricks a user into submitting unwanted actions."
      },
      {
        question: "What is the difference between symmetric and asymmetric encryption?",
        options: [
          "Symmetric uses one key, asymmetric uses two",
          "Asymmetric is faster",
          "Symmetric is only for passwords",
          "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "Symmetric uses one key, asymmetric uses a public/private key pair."
      }
    ],
    hard: [
      {
        question: "What is a buffer overflow attack?",
        options: [
          "An attack that overflows a buffer to execute malicious code",
          "A type of phishing",
          "A password guessing attack",
          "A denial of service attack"
        ],
        correctAnswer: 0,
        explanation: "Buffer overflow exploits memory management bugs to execute code."
      },
      {
        question: "How does HTTPS protect data in transit?",
        options: [
          "By encrypting data between client and server",
          "By compressing data",
          "By using firewalls",
          "By using strong passwords"
        ],
        correctAnswer: 0,
        explanation: "HTTPS encrypts data between client and server."
      }
    ]
  }
}

export function DomainTest() {
  const [selectedDomain, setSelectedDomain] = useState<string>("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("easy")
  const [testStarted, setTestStarted] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const questions = selectedDomain && selectedDifficulty ? staticQuestions[selectedDomain][selectedDifficulty] : []

  const handleStart = () => {
    setTestStarted(true)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const handleAnswerSelect = (questionIdx: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIdx]: answerIndex
    }))
  }

  const calculateScore = () => {
    let correctCount = 0
    questions.forEach((question, idx) => {
      if (selectedAnswers[idx] === question.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setShowResults(true)
  }

  const resetTest = () => {
    setTestStarted(false)
    setSelectedDomain("")
    setSelectedDifficulty("easy")
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (!testStarted) {
    return (
      <div className="space-y-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold">Start from Scratch</h2>
        <div>
          <label className="block mb-2 font-medium">Select a domain to start your test:</label>
          <select
            className="border rounded px-3 py-2 w-full mb-4"
            value={selectedDomain}
            onChange={e => setSelectedDomain(e.target.value)}
          >
            <option value="">-- Select Domain --</option>
            {domainOptions.map(domain => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
          <label className="block mb-2 font-medium">Select difficulty:</label>
          <select
            className="border rounded px-3 py-2 w-full"
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value as Difficulty)}
          >
            {difficultyOptions.map(diff => (
              <option key={diff} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</option>
            ))}
          </select>
        </div>
        <Button
          onClick={handleStart}
          disabled={!selectedDomain}
          className="w-full mt-4"
        >
          Start from Scratch
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{selectedDomain} Test ({selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)})</h2>
        <Button onClick={resetTest} variant="outline">
          Start from Scratch
        </Button>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          {questions.map((question, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">Question {idx + 1}</CardTitle>
                <CardDescription>{question.question}</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedAnswers[idx]?.toString()}
                  onValueChange={(value) => handleAnswerSelect(idx, parseInt(value))}
                >
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`q${idx}-${index}`} />
                      <Label htmlFor={`q${idx}-${index}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
          <Button
            onClick={calculateScore}
            className="w-full"
            disabled={Object.keys(selectedAnswers).length !== questions.length}
          >
            Submit Answers
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>
                You scored {score} out of {questions.length} ({Math.round((score/questions.length) * 100)}%)
              </CardDescription>
            </CardHeader>
          </Card>

          {questions.map((question, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">Question {idx + 1}</CardTitle>
                <CardDescription>{question.question}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded ${
                        index === question.correctAnswer
                          ? "bg-green-100 dark:bg-green-900"
                          : selectedAnswers[idx] === index
                          ? "bg-red-100 dark:bg-red-900"
                          : ""
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Explanation:</strong> {question.explanation}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 