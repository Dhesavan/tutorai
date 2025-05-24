"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const IT_DOMAINS = [
  {
    key: "frontend",
    label: "Frontend",
    icon: "🎨",
    description: "Master modern frontend technologies to build interactive user interfaces.",
      careerOutcomes: ["Frontend Developer", "React Developer", "UI Developer", "JavaScript Developer"],
    salaryRange: "$65,000 - $140,000",
    demand: "Very High Demand",
    learningPath: [
      {
          title: "HTML5 & CSS3 Fundamentals",
        time: "15h",
        tags: ["Beginner", "Web Fundamentals"],
        description: "Learn semantic HTML5 and modern CSS3 including Flexbox and Grid.",
          resources: [
          { label: "MDN HTML Basics", type: "article", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" },
          { label: "CSS Grid Complete Guide", type: "article", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
          { label: "Flexbox Froggy Game", type: "practice", url: "https://flexboxfroggy.com/" },
          { label: "freeCodeCamp Responsive Web Design", type: "course", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
        ],
      },
      {
        title: "JavaScript Essentials",
        time: "20h",
        tags: ["Beginner", "Core"],
        description: "Understand JavaScript syntax, DOM manipulation, and ES6+ features.",
        resources: [
          { label: "JavaScript.info", type: "article", url: "https://javascript.info/" },
          { label: "MDN JavaScript Guide", type: "article", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
          { label: "freeCodeCamp JavaScript Algorithms", type: "course", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
        ],
      },
      {
        title: "React Basics",
        time: "18h",
        tags: ["Intermediate", "Framework"],
        description: "Learn React components, hooks, and state management.",
        resources: [
          { label: "React Official Docs", type: "article", url: "https://react.dev/learn" },
          { label: "Scrimba React Course", type: "course", url: "https://scrimba.com/learn/learnreact" },
        ],
      },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    icon: "⚙️",
    description: "Build robust server-side applications and APIs using multiple languages and frameworks.",
    careerOutcomes: ["Backend Developer", "Node.js Developer", "Python Developer", "Java Developer", "API Engineer"],
    salaryRange: "$70,000 - $150,000",
    demand: "High Demand",
    learningPath: [
      {
        title: "Node.js & Express Fundamentals",
        time: "16h",
        tags: ["Beginner", "JavaScript", "Server"],
        description: "Learn Node.js basics, Express.js, and REST API development.",
          resources: [
          { label: "Node.js Official Docs", type: "article", url: "https://nodejs.org/en/docs/" },
          { label: "Express.js Guide", type: "article", url: "https://expressjs.com/en/starter/installing.html" },
          { label: "freeCodeCamp APIs & Microservices", type: "course", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
        ],
      },
      {
        title: "Python Backend (Django/Flask)",
        time: "18h",
        tags: ["Beginner", "Python", "Framework"],
        description: "Build backend applications using Python with Django and Flask frameworks.",
        resources: [
          { label: "Django Official Tutorial", type: "article", url: "https://docs.djangoproject.com/en/4.2/intro/tutorial01/" },
          { label: "Flask Mega-Tutorial", type: "article", url: "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world" },
          { label: "freeCodeCamp Python APIs", type: "course", url: "https://www.youtube.com/watch?v=Qr4QMBUPxWo" },
        ],
      },
      {
        title: "Java Backend (Spring Boot)",
        time: "20h",
        tags: ["Intermediate", "Java", "Framework"],
        description: "Develop scalable backend services using Java and Spring Boot.",
        resources: [
          { label: "Spring Boot Getting Started", type: "article", url: "https://spring.io/guides/gs/spring-boot/" },
          { label: "Java Brains Spring Boot", type: "course", url: "https://www.youtube.com/watch?v=vtPkZShrvXQ" },
        ],
      },
      {
        title: "API Development & RESTful Services",
        time: "12h",
        tags: ["Core", "API", "REST"],
        description: "Design and implement RESTful APIs, learn best practices and documentation.",
          resources: [
          { label: "RESTful API Design Guide", type: "article", url: "https://restfulapi.net/" },
          { label: "Swagger/OpenAPI Docs", type: "article", url: "https://swagger.io/docs/specification/about/" },
        ],
      },
      {
        title: "Microservices Architecture",
        time: "14h",
        tags: ["Advanced", "Microservices"],
        description: "Understand microservices principles, communication, and deployment.",
          resources: [
          { label: "Microservices.io Patterns", type: "article", url: "https://microservices.io/patterns/index.html" },
          { label: "Spring Boot Microservices", type: "course", url: "https://www.youtube.com/watch?v=K2VljzCC16g" },
        ],
      },
      {
        title: "Backend Security Essentials",
        time: "10h",
        tags: ["Security", "Best Practices"],
        description: "Learn authentication, authorization, and secure coding for backend systems.",
          resources: [
          { label: "OWASP Top 10", type: "article", url: "https://owasp.org/www-project-top-ten/" },
          { label: "JWT Authentication Tutorial", type: "article", url: "https://jwt.io/introduction" },
        ],
      },
      {
        title: "Testing & Debugging Backend Apps",
        time: "8h",
        tags: ["Testing", "Quality"],
        description: "Write unit, integration, and end-to-end tests for backend applications.",
        resources: [
          { label: "Jest Testing Guide", type: "article", url: "https://jestjs.io/docs/getting-started" },
          { label: "Postman API Testing", type: "course", url: "https://www.postman.com/resources/webinars/api-testing-101/" },
        ],
      },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: "📱",
    description: "Build native and cross-platform mobile applications for iOS and Android.",
    careerOutcomes: ["Mobile Developer", "Android Developer", "iOS Developer", "React Native Developer"],
    salaryRange: "$70,000 - $150,000",
    demand: "High Demand",
    learningPath: [
      {
        title: "Mobile App Fundamentals",
        time: "10h",
        tags: ["Beginner", "Mobile"],
        description: "Understand mobile platforms, app architecture, and UI/UX basics.",
          resources: [
          { label: "Google Android Basics", type: "course", url: "https://developer.android.com/courses/android-basics-kotlin/course" },
          { label: "Apple Human Interface Guidelines", type: "article", url: "https://developer.apple.com/design/human-interface-guidelines/" },
        ],
      },
      {
        title: "React Native Essentials",
        time: "14h",
        tags: ["Cross-Platform", "JavaScript"],
        description: "Build cross-platform apps using React Native.",
        resources: [
          { label: "React Native Docs", type: "article", url: "https://reactnative.dev/docs/getting-started" },
          { label: "freeCodeCamp React Native", type: "course", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
        ],
      },
      {
        title: "Flutter for Mobile",
        time: "16h",
        tags: ["Cross-Platform", "Dart"],
        description: "Develop beautiful apps with Flutter and Dart.",
        resources: [
          { label: "Flutter Official Docs", type: "article", url: "https://docs.flutter.dev/" },
          { label: "Flutter Crash Course", type: "course", url: "https://www.youtube.com/watch?v=VPvVD8t02U8" },
        ],
        },
      ],
    },
    {
    key: "devops",
    label: "DevOps",
    icon: "☁️",
    description: "Automate, deploy, and monitor applications with modern DevOps practices.",
    careerOutcomes: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer", "Automation Engineer"],
    salaryRange: "$80,000 - $160,000",
    demand: "Very High Demand",
    learningPath: [
      {
        title: "DevOps Fundamentals",
        time: "10h",
        tags: ["Beginner", "DevOps"],
        description: "Learn the basics of DevOps, CI/CD, and automation.",
          resources: [
          { label: "What is DevOps? (Microsoft)", type: "article", url: "https://learn.microsoft.com/en-us/devops/what-is-devops" },
          { label: "freeCodeCamp DevOps", type: "course", url: "https://www.youtube.com/watch?v=0yWAtQ6wYNM" },
        ],
      },
      {
        title: "CI/CD Pipelines",
        time: "12h",
        tags: ["CI/CD", "Automation"],
        description: "Set up continuous integration and deployment pipelines.",
        resources: [
          { label: "GitHub Actions Docs", type: "article", url: "https://docs.github.com/en/actions" },
          { label: "Jenkins Getting Started", type: "article", url: "https://www.jenkins.io/doc/tutorials/build-a-java-app-with-maven/" },
        ],
      },
      {
        title: "Cloud & Containerization",
        time: "14h",
        tags: ["Cloud", "Docker", "Kubernetes"],
        description: "Deploy and manage applications in the cloud using Docker and Kubernetes.",
        resources: [
          { label: "Docker Official Docs", type: "article", url: "https://docs.docker.com/get-started/" },
          { label: "Kubernetes Basics", type: "course", url: "https://www.youtube.com/watch?v=X48VuDVv0do" },
        ],
      },
    ],
  },
  {
    key: "cloud",
    label: "Cloud Computing",
    icon: "🌩️",
    description: "Master cloud platforms, deployment, and cloud-native architectures for scalable solutions.",
    careerOutcomes: ["Cloud Engineer", "Cloud Architect", "DevOps Engineer", "Site Reliability Engineer", "Cloud Consultant"],
    salaryRange: "$90,000 - $180,000",
    demand: "Very High Demand",
    learningPath: [
      {
        title: "Cloud Fundamentals",
        time: "10h",
        tags: ["Beginner", "Cloud"],
        description: "Understand the basics of cloud computing, service models (IaaS, PaaS, SaaS), and deployment models.",
        resources: [
          { label: "AWS Cloud Practitioner Essentials", type: "course", url: "https://www.aws.training/Details/Curriculum?id=20685" },
          { label: "Azure Fundamentals", type: "course", url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/" },
          { label: "Google Cloud Digital Leader", type: "course", url: "https://cloud.google.com/training/courses/cloud-digital-leader" }
        ],
      },
      {
        title: "AWS, Azure, & GCP Core Services",
        time: "14h",
        tags: ["Intermediate", "AWS", "Azure", "GCP"],
        description: "Learn about compute, storage, networking, and database services on major cloud platforms.",
        resources: [
          { label: "AWS Core Services Overview", type: "article", url: "https://aws.amazon.com/getting-started/hands-on/" },
          { label: "Azure Core Cloud Services", type: "article", url: "https://learn.microsoft.com/en-us/azure/architecture/cloud-adoption/getting-started/azure-core-cloud-services" },
          { label: "Google Cloud Core Services", type: "article", url: "https://cloud.google.com/docs/overview" }
        ],
      },
      {
        title: "Cloud Security & IAM",
        time: "8h",
        tags: ["Security", "IAM"],
        description: "Understand cloud security best practices, Identity and Access Management (IAM), and compliance.",
        resources: [
          { label: "AWS Security Best Practices", type: "article", url: "https://aws.amazon.com/architecture/security-identity-compliance/" },
          { label: "Azure Security Documentation", type: "article", url: "https://learn.microsoft.com/en-us/security/azure-security/" },
          { label: "Google Cloud IAM", type: "article", url: "https://cloud.google.com/iam/docs" }
        ],
      },
      {
        title: "Cloud DevOps & Automation",
        time: "12h",
        tags: ["DevOps", "Automation"],
        description: "Implement CI/CD, Infrastructure as Code (IaC), and automation using cloud-native tools.",
        resources: [
          { label: "AWS DevOps Essentials", type: "course", url: "https://www.aws.training/Details/Curriculum?id=20785" },
          { label: "Terraform on Azure", type: "article", url: "https://learn.microsoft.com/en-us/azure/developer/terraform/" },
          { label: "Google Cloud Build CI/CD", type: "article", url: "https://cloud.google.com/build/docs/automating-builds/create-basic-pipeline" }
        ],
      },
      {
        title: "Cloud-Native & Serverless Architectures",
        time: "10h",
        tags: ["Advanced", "Serverless"],
        description: "Explore serverless, containers, Kubernetes, and cloud-native design patterns.",
        resources: [
          { label: "AWS Serverless Getting Started", type: "article", url: "https://aws.amazon.com/serverless/getting-started/" },
          { label: "Azure Serverless Docs", type: "article", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview" },
          { label: "Google Cloud Run", type: "article", url: "https://cloud.google.com/run/docs" }
        ],
      }
    ],
  },
  {
    key: "ai",
    label: "Artificial Intelligence",
    icon: "🤖",
    description: "Explore AI and machine learning concepts, tools, and applications.",
    careerOutcomes: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "Research Scientist"],
    salaryRange: "$90,000 - $180,000",
    demand: "Very High Demand",
    learningPath: [
      {
        title: "AI & ML Fundamentals",
        time: "12h",
        tags: ["Beginner", "AI", "ML"],
        description: "Understand the basics of artificial intelligence and machine learning.",
          resources: [
          { label: "Google AI Crash Course", type: "course", url: "https://developers.google.com/machine-learning/crash-course" },
          { label: "Coursera AI For Everyone", type: "course", url: "https://www.coursera.org/learn/ai-for-everyone" },
        ],
      },
      {
        title: "Python for Data Science",
        time: "10h",
        tags: ["Python", "Data Science"],
        description: "Use Python for data analysis and machine learning tasks.",
        resources: [
          { label: "Kaggle Python Course", type: "course", url: "https://www.kaggle.com/learn/python" },
          { label: "Pandas Official Docs", type: "article", url: "https://pandas.pydata.org/docs/" },
      ],
    },
    {
        title: "Deep Learning & Neural Networks",
        time: "16h",
        tags: ["Deep Learning", "Neural Networks"],
        description: "Learn about neural networks, TensorFlow, and PyTorch.",
          resources: [
          { label: "DeepLearning.AI TensorFlow", type: "course", url: "https://www.coursera.org/professional-certificates/tensorflow-in-practice" },
          { label: "PyTorch Tutorials", type: "article", url: "https://pytorch.org/tutorials/" },
        ],
      },
      ],
    },
    {
    key: "cybersecurity",
    label: "Cybersecurity",
    icon: "🛡️",
    description: "Protect systems, networks, and data from digital attacks.",
    careerOutcomes: ["Cybersecurity Analyst", "Security Engineer", "Penetration Tester", "SOC Analyst"],
    salaryRange: "$80,000 - $170,000",
    demand: "High Demand",
    learningPath: [
      {
        title: "Cybersecurity Fundamentals",
        time: "10h",
        tags: ["Beginner", "Security"],
        description: "Learn the basics of cybersecurity, threats, and vulnerabilities.",
          resources: [
          { label: "Cybrary Security Fundamentals", type: "course", url: "https://www.cybrary.it/course/cyber-security/" },
          { label: "OWASP Top 10", type: "article", url: "https://owasp.org/www-project-top-ten/" },
        ],
      },
      {
        title: "Network Security & Encryption",
        time: "12h",
        tags: ["Network", "Encryption"],
        description: "Understand network security, firewalls, and encryption techniques.",
        resources: [
          { label: "Cisco Networking Basics", type: "course", url: "https://skillsforall.com/course/networking-basics" },
          { label: "SSL/TLS Explained", type: "article", url: "https://www.cloudflare.com/learning/ssl/what-is-ssl/" },
      ],
    },
    {
        title: "Ethical Hacking & Pen Testing",
        time: "14h",
        tags: ["Ethical Hacking", "Pen Testing"],
        description: "Learn penetration testing, vulnerability assessment, and ethical hacking tools.",
          resources: [
          { label: "TryHackMe Beginner Path", type: "course", url: "https://tryhackme.com/path/outline/beginner" },
          { label: "Kali Linux Tools", type: "article", url: "https://tools.kali.org/tools-listing" },
        ],
      },
    ],
  },
  {
    key: "fullstack",
    label: "Full Stack",
    icon: "🚀",
    description: "Become proficient in both frontend and backend development, building complete web applications.",
    careerOutcomes: ["Full Stack Developer", "Web Developer", "Software Engineer", "Product Engineer"],
    salaryRange: "$80,000 - $170,000",
    demand: "Very High Demand",
    learningPath: [
      {
        title: "Frontend & UI Essentials",
        time: "18h",
        tags: ["Frontend", "UI"],
        description: "Master HTML, CSS, JavaScript, and modern frontend frameworks.",
        resources: [
          { label: "freeCodeCamp Responsive Web Design", type: "course", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
          { label: "React Official Docs", type: "article", url: "https://react.dev/learn" },
      ],
    },
    {
        title: "Backend & API Development",
        time: "20h",
        tags: ["Backend", "API"],
        description: "Build robust backend services and RESTful APIs.",
          resources: [
          { label: "Node.js Official Docs", type: "article", url: "https://nodejs.org/en/docs/" },
          { label: "Django Official Tutorial", type: "article", url: "https://docs.djangoproject.com/en/4.2/intro/tutorial01/" },
        ],
      },
      {
        title: "Deployment & DevOps Basics",
        time: "12h",
        tags: ["Deployment", "DevOps"],
        description: "Learn to deploy full stack apps and automate workflows.",
        resources: [
          { label: "Vercel Deployment Guide", type: "article", url: "https://vercel.com/docs" },
          { label: "GitHub Actions Docs", type: "article", url: "https://docs.github.com/en/actions" },
        ],
      },
    ],
  },
  // ... Add more domains here (Full Stack, Mobile, DevOps, Data Science, Cloud, Cybersecurity, ML, etc.)
]

export function Roadmap({ userId }: { userId: string }) {
  const [selectedDomain, setSelectedDomain] = useState(IT_DOMAINS[0].key)
  const domain = IT_DOMAINS.find((d) => d.key === selectedDomain)!

  // Mock progress
  const progress = 0
  const completedItems = 0
  const totalItems = domain.learningPath.length
  const totalHours = domain.learningPath.reduce((sum, step) => sum + parseInt(step.time), 0)

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2">
        {IT_DOMAINS.map((d) => (
          <button
            key={d.key}
            className={`px-4 py-2 font-semibold rounded-t-md border-b-2 transition-colors ${selectedDomain === d.key ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-primary"}`}
            onClick={() => setSelectedDomain(d.key)}
          >
            <span className="mr-2">{d.icon}</span>
            {d.label}
          </button>
        ))}
                    </div>

      {/* Domain Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold flex items-center gap-2">{domain.icon} {domain.label} Development</h2>
          <p className="text-muted-foreground">{domain.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {domain.careerOutcomes.map((role) => (
              <Badge key={role} variant="secondary">{role}</Badge>
                          ))}
                        </div>
          <div className="mt-2 flex items-center gap-4">
            <span className="font-medium">Salary Range:</span>
            <span>{domain.salaryRange}</span>
            <Badge variant="outline" className="ml-2 text-yellow-600 border-yellow-400 bg-yellow-50">{domain.demand}</Badge>
                      </div>
                    </div>
        <div className="w-full md:w-72 bg-muted rounded-lg p-4 flex flex-col items-center">
          <h3 className="font-semibold mb-2">Your Progress</h3>
          <Progress value={progress} className="w-full mb-2" />
          <div className="text-sm">{progress}%</div>
          <div className="text-xs text-muted-foreground mt-2">0h of {totalHours}h</div>
          <div className="text-xs text-muted-foreground">{completedItems} of {totalItems} items</div>
                          </div>
                        </div>

      {/* Learning Path */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Learning Path</h3>
        <div className="space-y-6">
          {domain.learningPath.map((step, idx) => (
            <Card key={step.title}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <CardTitle className="flex items-center gap-2">
                    <span>{step.title}</span>
                    <Badge variant="outline">{step.time}</Badge>
                    {step.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                        </div>
                      </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-medium">Learning Resources:</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.resources.map((res) => (
                              <a
                        key={res.label}
                        href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded border hover:bg-muted transition"
                      >
                        {res.type === "article" && <span>🔗</span>}
                        {res.type === "course" && <span>🎓</span>}
                        {res.type === "practice" && <span>💻</span>}
                        <span>{res.label}</span>
                        <Badge variant="outline" className="ml-auto text-xs">{res.type}</Badge>
                              </a>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
      </div>
    </div>
  )
}
