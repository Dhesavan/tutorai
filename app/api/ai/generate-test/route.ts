import { NextResponse } from 'next/server';

const questionBank = {
  'Python Basics': {
    easy: [
      {
        id: "python-easy-1",
        question: "What is a variable in Python?",
        options: ["A value that cannot change", "A container for storing data", "A type of function", "A loop"],
          correctAnswer: 1,
        explanation: "A variable in Python is a container for storing data values.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you print output in Python?",
        options: ["print()", "echo()", "output()", "display()"],
        correctAnswer: 0,
        explanation: "The print() function is used to output data in Python.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is a list in Python?",
        options: ["A sequence of characters", "A collection of items in a particular order", "A type of function", "A loop"],
          correctAnswer: 1,
        explanation: "A list in Python is a collection of items in a particular order.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you write a comment in Python?",
        options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
          correctAnswer: 1,
        explanation: "Comments in Python start with the # symbol.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is a function in Python?",
        options: ["A block of code that performs a task", "A type of variable", "A loop", "A string"],
        correctAnswer: 0,
        explanation: "A function is a block of code that performs a specific task.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you create a dictionary in Python?",
        options: ["Using {}", "Using []", "Using <>", "Using ()"],
        correctAnswer: 0,
        explanation: "Dictionaries in Python are created using curly braces {}.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is a tuple in Python?",
        options: ["A mutable list", "An immutable sequence", "A type of function", "A loop"],
          correctAnswer: 1,
        explanation: "A tuple is an immutable sequence of values.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you write a for loop in Python?",
        options: ["for i in range(5):", "for (i=0; i<5; i++)", "foreach i in range(5)", "loop i from 1 to 5"],
        correctAnswer: 0,
        explanation: "The correct syntax is: for i in range(5):",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between == and = in Python?",
        options: ["== is assignment, = is comparison", "Both are assignment", "== is comparison, = is assignment", "Both are comparison"],
        correctAnswer: 2,
        explanation: "== is used for comparison, = is used for assignment.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you import a module in Python?",
        options: ["import module", "include module", "require module", "using module"],
          correctAnswer: 0,
        explanation: "Modules are imported using the import statement.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is the purpose of the pass statement?",
        options: ["To exit a loop", "To do nothing", "To print output", "To raise an error"],
          correctAnswer: 1,
        explanation: "The pass statement does nothing and is used as a placeholder.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you get user input in Python?",
        options: ["input()", "get()", "scan()", "read()"],
        correctAnswer: 0,
        explanation: "The input() function is used to get user input.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is the type() function used for?",
        options: ["To get the type of a variable", "To convert types", "To print output", "To create a variable"],
        correctAnswer: 0,
        explanation: "type() returns the type of the specified object.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you check the length of a list?",
        options: ["len(list)", "length(list)", "list.length()", "count(list)"],
        correctAnswer: 0,
        explanation: "len(list) returns the number of items in a list.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is the None keyword?",
        options: ["A string", "A special constant representing null", "A function", "A variable"],
          correctAnswer: 1,
        explanation: "None is a special constant representing the absence of a value.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you write an if statement in Python?",
        options: ["if x == 5:", "if (x == 5)", "if x = 5 then", "if x == 5 then"],
        correctAnswer: 0,
        explanation: "The correct syntax is: if x == 5:",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is indentation used for in Python?",
        options: ["To align code", "To define code blocks", "To comment code", "To import modules"],
          correctAnswer: 1,
        explanation: "Indentation is used to define code blocks in Python.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you concatenate strings in Python?",
        options: ["Using +", "Using &", "Using .", "Using ,"],
        correctAnswer: 0,
        explanation: "Strings are concatenated using the + operator.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "What is a boolean value in Python?",
        options: ["A string", "A number", "True or False", "A function"],
        correctAnswer: 2,
        explanation: "Boolean values are True or False.",
        difficulty: "Easy",
        topic: "Python Basics"
      },
      {
        question: "How do you write a while loop in Python?",
        options: ["while condition:", "while (condition)", "loop while condition", "repeat while condition"],
        correctAnswer: 0,
        explanation: "The correct syntax is: while condition:",
        difficulty: "Easy",
        topic: "Python Basics"
      }
    ],
    medium: [
      {
        question: "What is list comprehension in Python?",
        options: ["A way to create lists using loops and conditions in a single line", "A method to compress lists", "A function to sort lists", "A way to delete elements from a list"],
        correctAnswer: 0,
        explanation: "List comprehension provides a concise way to create lists using loops and conditions in a single line.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you handle exceptions in Python?",
        options: ["Using try and except blocks", "Using error and catch blocks", "Using handle and except blocks", "Using try and catch blocks"],
        correctAnswer: 0,
        explanation: "Exceptions in Python are handled using try and except blocks.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is a lambda function?",
        options: ["A function defined without a name", "A function that returns a list", "A function that sorts data", "A function that deletes data"],
        correctAnswer: 0,
        explanation: "A lambda function is an anonymous function defined with the lambda keyword.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you open and read a file in Python?",
        options: ["Using open() and read()", "Using file() and get()", "Using openfile() and readfile()", "Using open() and get()"],
        correctAnswer: 0,
        explanation: "Files are opened with open() and read with read().",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is a set in Python?",
        options: ["An unordered collection of unique elements", "A list of numbers", "A dictionary of key-value pairs", "A tuple of values"],
        correctAnswer: 0,
        explanation: "A set is an unordered collection of unique elements.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you define a class in Python?",
        options: ["Using the class keyword", "Using the def keyword", "Using the struct keyword", "Using the object keyword"],
        correctAnswer: 0,
        explanation: "Classes are defined using the class keyword.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is inheritance in Python?",
        options: ["A way to create a new class from an existing class", "A way to delete a class", "A way to sort data", "A way to create a function"],
        correctAnswer: 0,
        explanation: "Inheritance allows a class to inherit attributes and methods from another class.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you use the map() function?",
        options: ["To apply a function to every item in an iterable", "To create a dictionary", "To sort a list", "To filter a list"],
        correctAnswer: 0,
        explanation: "map() applies a function to every item in an iterable.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between append() and extend()?",
        options: ["append() adds a single element, extend() adds elements from another iterable", "Both add a single element", "Both add elements from another iterable", "append() removes an element, extend() adds an element"],
        correctAnswer: 0,
        explanation: "append() adds a single element, extend() adds elements from another iterable.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you reverse a list?",
        options: ["Using reverse()", "Using invert()", "Using flip()", "Using turn()"],
        correctAnswer: 0,
        explanation: "The reverse() method reverses a list in place.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is the global keyword?",
        options: ["It declares a variable as global inside a function", "It creates a new variable", "It deletes a variable", "It sorts a variable"],
        correctAnswer: 0,
        explanation: "The global keyword is used to declare a variable as global inside a function.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you use the filter() function?",
        options: ["To filter elements in an iterable based on a function", "To sort a list", "To map values", "To create a dictionary"],
        correctAnswer: 0,
        explanation: "filter() filters elements in an iterable based on a function.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is a generator in Python?",
        options: ["A function that yields values one at a time", "A function that returns a list", "A function that sorts data", "A function that deletes data"],
        correctAnswer: 0,
        explanation: "A generator yields values one at a time using the yield keyword.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you use the zip() function?",
        options: ["To combine multiple iterables element-wise", "To compress files", "To sort lists", "To filter lists"],
        correctAnswer: 0,
        explanation: "zip() combines multiple iterables element-wise.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between deep copy and shallow copy?",
        options: ["Deep copy copies all nested objects, shallow copy only top-level", "Both copy all nested objects", "Both copy only top-level objects", "Deep copy deletes objects, shallow copy copies objects"],
        correctAnswer: 0,
        explanation: "Deep copy copies all nested objects, shallow copy only top-level.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you use the enumerate() function?",
        options: ["To get both index and value when iterating", "To sort a list", "To filter a list", "To map values"],
        correctAnswer: 0,
        explanation: "enumerate() returns both index and value when iterating.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is a decorator in Python?",
        options: ["A function that modifies another function", "A function that sorts data", "A function that deletes data", "A function that creates a list"],
        correctAnswer: 0,
        explanation: "A decorator is a function that modifies another function.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you use *args and **kwargs?",
        options: ["To pass variable numbers of arguments to a function", "To sort arguments", "To delete arguments", "To create a list"],
        correctAnswer: 0,
        explanation: "*args and **kwargs allow passing variable numbers of arguments to a function.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "What is the __init__ method?",
        options: ["A constructor method in a class", "A destructor method", "A sorting method", "A mapping method"],
        correctAnswer: 0,
        explanation: "__init__ is the constructor method in a class.",
        difficulty: "medium",
        topic: "Python Basics"
      },
      {
        question: "How do you check if a key exists in a dictionary?",
        options: ["'key' in dict", "dict.has_key('key')", "dict.exists('key')", "dict.contains('key')"],
        correctAnswer: 0,
        explanation: "You can check with 'key' in dict.",
        difficulty: "medium",
        topic: "Python Basics"
      }
    ],
    hard: [
      {
        question: "What is a metaclass in Python?",
        options: ["A class of a class that defines how a class behaves", "A class that inherits from another class", "A function that returns a class", "A module that contains classes"],
        correctAnswer: 0,
        explanation: "A metaclass is a class of a class that defines how a class behaves.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you create a custom iterator in Python?",
        options: ["By defining __iter__ and __next__ methods", "By using a for loop", "By using a generator expression", "By using a list comprehension"],
        correctAnswer: 0,
        explanation: "A custom iterator is created by defining __iter__ and __next__ methods in a class.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the purpose of the 'with' statement in Python?",
        options: ["To simplify exception handling by encapsulating common preparation and cleanup tasks", "To define a function", "To create a loop", "To declare a variable"],
        correctAnswer: 0,
        explanation: "The 'with' statement simplifies exception handling by encapsulating common preparation and cleanup tasks.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between @staticmethod and @classmethod?",
        options: ["@staticmethod does not take self or cls, @classmethod takes cls as the first argument", "@staticmethod takes self, @classmethod does not", "@classmethod is only for inheritance", "There is no difference"],
        correctAnswer: 0,
        explanation: "@staticmethod does not take self or cls, @classmethod takes cls as the first argument.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you implement multiple inheritance in Python?",
        options: ["By specifying multiple parent classes in the class definition", "By using the super() function", "By using mixins only", "By importing from another module"],
        correctAnswer: 0,
        explanation: "Multiple inheritance is implemented by specifying multiple parent classes in the class definition.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the Global Interpreter Lock (GIL)?",
        options: ["A mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once", "A lock for file operations", "A lock for database access", "A lock for network operations"],
        correctAnswer: 0,
        explanation: "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you create a generator in Python?",
        options: ["By using the yield keyword in a function", "By using the return keyword", "By using a list comprehension", "By using a lambda function"],
        correctAnswer: 0,
        explanation: "Generators are created using the yield keyword in a function.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is monkey patching in Python?",
        options: ["Dynamically changing a class or module at runtime", "Fixing bugs in the code", "Writing unit tests", "Patching network connections"],
        correctAnswer: 0,
        explanation: "Monkey patching is dynamically changing a class or module at runtime.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you use decorators with arguments?",
        options: ["By defining a decorator factory that returns a decorator", "By passing arguments directly to the decorator", "By using lambda functions", "By using global variables"],
        correctAnswer: 0,
        explanation: "Decorators with arguments are created by defining a decorator factory that returns a decorator.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between deep copy and shallow copy in Python?",
        options: ["Deep copy copies all nested objects, shallow copy only top-level objects", "Both copy all nested objects", "Both copy only top-level objects", "Deep copy deletes objects, shallow copy copies objects"],
        correctAnswer: 0,
        explanation: "Deep copy copies all nested objects, shallow copy only top-level objects.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you handle circular imports in Python?",
        options: ["By restructuring code, using import statements inside functions, or using importlib", "By using global variables", "By using static methods", "By using lambda functions"],
        correctAnswer: 0,
        explanation: "Circular imports can be handled by restructuring code, using import statements inside functions, or using importlib.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the __slots__ attribute used for?",
        options: ["To restrict the creation of instance attributes and save memory", "To define class methods", "To create static variables", "To define inheritance"],
        correctAnswer: 0,
        explanation: "__slots__ is used to restrict the creation of instance attributes and save memory.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you make a class iterable in Python?",
        options: ["By defining __iter__ and __next__ methods", "By defining __getitem__ only", "By using a generator", "By using a list comprehension"],
        correctAnswer: 0,
        explanation: "A class is made iterable by defining __iter__ and __next__ methods.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between __str__ and __repr__ methods?",
        options: ["__str__ is for readable output, __repr__ is for unambiguous output for developers", "__str__ is for developers, __repr__ is for users", "There is no difference", "Both are used for string formatting"],
        correctAnswer: 0,
        explanation: "__str__ is for readable output, __repr__ is for unambiguous output for developers.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you implement context managers in Python?",
        options: ["By defining __enter__ and __exit__ methods", "By using a decorator", "By using a generator", "By using a lambda function"],
        correctAnswer: 0,
        explanation: "Context managers are implemented by defining __enter__ and __exit__ methods.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between bytes and bytearray?",
        options: ["bytes are immutable, bytearray is mutable", "Both are immutable", "Both are mutable", "bytes are mutable, bytearray is immutable"],
        correctAnswer: 0,
        explanation: "bytes are immutable, bytearray is mutable.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you use the property decorator?",
        options: ["To define getter, setter, and deleter methods for a class attribute", "To define a static method", "To define a class method", "To define a global variable"],
        correctAnswer: 0,
        explanation: "The property decorator is used to define getter, setter, and deleter methods for a class attribute.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is method resolution order (MRO) in Python?",
        options: ["The order in which base classes are searched when executing a method", "The order in which methods are defined", "The order of function arguments", "The order of variable assignment"],
        correctAnswer: 0,
        explanation: "MRO is the order in which base classes are searched when executing a method.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "How do you use the super() function?",
        options: ["To call a method from a parent class", "To create a new class", "To define a static method", "To define a class method"],
        correctAnswer: 0,
        explanation: "super() is used to call a method from a parent class.",
        difficulty: "hard",
        topic: "Python Basics"
      },
      {
        question: "What is the difference between is and == in Python?",
        options: ["is checks identity, == checks equality", "is checks equality, == checks identity", "There is no difference", "Both are used for assignment"],
        correctAnswer: 0,
        explanation: "is checks identity, == checks equality.",
        difficulty: "hard",
        topic: "Python Basics"
      }
    ]
  },
  'JavaScript Basics': {
    easy: [
      {
        question: "What is a variable in JavaScript?",
      options: [
          "A container for storing data values",
          "A function",
          "A loop",
          "A type of operator"
      ],
      correctAnswer: 0,
        explanation: "A variable in JavaScript is a container for storing data values.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you declare a function in JavaScript?",
        options: [
          "function myFunc() {}",
          "def myFunc() {}",
          "func myFunc() {}",
          "declare function myFunc() {}"
        ],
        correctAnswer: 0,
        explanation: "Functions are declared using the function keyword: function myFunc() {}",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is an array in JavaScript?",
        options: [
          "A collection of items stored in a single variable",
          "A type of function",
          "A loop",
          "A string"
        ],
        correctAnswer: 0,
        explanation: "An array is a collection of items stored in a single variable.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you write a comment in JavaScript?",
        options: [
          "// comment",
          "# comment",
          "<!-- comment -->",
          "/* comment */"
        ],
        correctAnswer: 0,
        explanation: "Single-line comments in JavaScript start with //.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the difference between let and var?",
        options: [
          "let is block-scoped, var is function-scoped",
          "let is function-scoped, var is block-scoped",
          "No difference",
          "let is for constants, var is for variables"
        ],
        correctAnswer: 0,
        explanation: "let is block-scoped, while var is function-scoped.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you print output in JavaScript?",
        options: [
          "console.log()",
          "print()",
          "echo()",
          "output()"
        ],
        correctAnswer: 0,
        explanation: "console.log() is used to print output in JavaScript.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a string in JavaScript?",
        options: [
          "A sequence of characters",
          "A number",
          "A boolean",
          "A function"
        ],
        correctAnswer: 0,
        explanation: "A string is a sequence of characters.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you write a for loop in JavaScript?",
        options: [
          "for (let i = 0; i < 5; i++) {}",
          "for i in range(5):",
          "foreach (i in 5) {}",
          "loop i from 1 to 5"
        ],
        correctAnswer: 0,
        explanation: "The correct syntax is: for (let i = 0; i < 5; i++) {}",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the typeof operator?",
        options: [
          "An operator to check the type of a variable",
          "An operator to compare values",
          "An operator to declare variables",
          "An operator to loop"
        ],
        correctAnswer: 0,
        explanation: "typeof is used to check the type of a variable.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you create an object in JavaScript?",
        options: [
          "Using {}",
          "Using []",
          "Using ()",
          "Using <>"
        ],
        correctAnswer: 0,
        explanation: "Objects are created using curly braces {}.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the === operator?",
        options: [
          "Strict equality (checks value and type)",
          "Assignment operator",
          "Loose equality (checks value only)",
          "Inequality operator"
        ],
        correctAnswer: 0,
        explanation: "=== checks for strict equality (value and type).",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you check the length of an array?",
        options: [
          "array.length",
          "length(array)",
          "array.size()",
          "count(array)"
        ],
        correctAnswer: 0,
        explanation: "The length property gives the number of elements in an array.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a boolean value in JavaScript?",
        options: [
          "true or false",
          "A string",
          "A number",
          "A function"
        ],
        correctAnswer: 0,
        explanation: "Boolean values are true or false.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you write an if statement in JavaScript?",
        options: [
          "if (x === 5) {}",
          "if x == 5 then",
          "if x = 5 {}",
          "if x === 5 then"
        ],
        correctAnswer: 0,
        explanation: "The correct syntax is: if (x === 5) {}",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the null value?",
        options: [
          "A special value representing no value",
          "A string",
          "A number",
          "A boolean"
        ],
        correctAnswer: 0,
        explanation: "null is a special value representing no value.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you concatenate strings in JavaScript?",
        options: [
          "Using +",
          "Using &",
          "Using .",
          "Using ,"
        ],
        correctAnswer: 0,
        explanation: "Strings are concatenated using the + operator.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a while loop?",
        options: [
          "A loop that runs as long as a condition is true",
          "A loop that runs a fixed number of times",
          "A loop that runs once",
          "A loop that never runs"
        ],
        correctAnswer: 0,
        explanation: "A while loop runs as long as its condition is true.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you get user input in JavaScript (in a browser)?",
        options: [
          "prompt()",
          "input()",
          "scan()",
          "read()"
        ],
        correctAnswer: 0,
        explanation: "prompt() is used to get user input in a browser.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the purpose of the return statement?",
        options: [
          "To return a value from a function",
          "To print output",
          "To declare a variable",
          "To end a loop"
        ],
        correctAnswer: 0,
        explanation: "The return statement returns a value from a function.",
        difficulty: "easy",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you access object properties?",
        options: [
          "Using dot notation or bracket notation",
          "Using parentheses",
          "Using angle brackets",
          "Using a colon"
        ],
        correctAnswer: 0,
        explanation: "Object properties are accessed using dot notation (obj.prop) or bracket notation (obj['prop']).",
        difficulty: "easy",
        topic: "JavaScript Basics"
      }
    ],
    medium: [
      {
        question: "What is a callback function?",
        options: [
          "A function passed as an argument to another function",
          "A function that calls itself",
          "A function that returns another function",
          "A function that runs only once"
        ],
        correctAnswer: 0,
        explanation: "A callback function is passed as an argument to another function and is executed later.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you handle errors in JavaScript?",
        options: [
          "Using try...catch blocks",
          "Using error() function",
          "Using catchError()",
          "Using handleError()"
        ],
        correctAnswer: 0,
        explanation: "Errors are handled using try...catch blocks.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the difference between == and ===?",
        options: [
          "== checks value, === checks value and type",
          "== checks type, === checks value",
          "No difference",
          "== is for numbers, === is for strings"
        ],
        correctAnswer: 0,
        explanation: "== checks value with type coercion, === checks value and type strictly.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use the map() function?",
        options: [
          "To create a new array by applying a function to each element",
          "To filter elements in an array",
          "To sort an array",
          "To join two arrays"
        ],
        correctAnswer: 0,
        explanation: "map() creates a new array by applying a function to each element.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A function that remembers its lexical scope",
          "A function that closes the browser",
          "A function that runs only once",
          "A function that returns another function"
        ],
        correctAnswer: 0,
        explanation: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use the filter() function?",
        options: [
          "To create a new array with elements that pass a test",
          "To sort an array",
          "To map values",
          "To join arrays"
        ],
        correctAnswer: 0,
        explanation: "filter() creates a new array with elements that pass the provided test.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the difference between undefined and null?",
        options: [
          "undefined means a variable has been declared but not assigned; null is an assignment value",
          "No difference",
          "undefined is for objects, null is for arrays",
          "undefined is a string, null is a number"
        ],
        correctAnswer: 0,
        explanation: "undefined is the default value for unassigned variables; null is an explicit assignment for 'no value'.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use the reduce() function?",
        options: [
          "To reduce an array to a single value",
          "To filter an array",
          "To map values",
          "To sort an array"
        ],
        correctAnswer: 0,
        explanation: "reduce() applies a function against an accumulator and each element to reduce the array to a single value.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the scope of a variable?",
        options: [
          "The region of code where the variable can be accessed",
          "The type of the variable",
          "The value of the variable",
          "The length of the variable"
        ],
        correctAnswer: 0,
        explanation: "Scope determines where a variable can be accessed in code.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you define a class in JavaScript?",
        options: [
          "Using the class keyword",
          "Using the function keyword",
          "Using the def keyword",
          "Using the object keyword"
        ],
        correctAnswer: 0,
        explanation: "Classes are defined using the class keyword.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the prototype chain?",
        options: [
          "A mechanism by which objects inherit properties from other objects",
          "A way to chain functions",
          "A method to sort arrays",
          "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "The prototype chain is how JavaScript implements inheritance.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use the forEach() method?",
        options: [
          "To execute a function for each array element",
          "To filter an array",
          "To map values",
          "To sort an array"
        ],
        correctAnswer: 0,
        explanation: "forEach() executes a function for each array element.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is event bubbling?",
        options: [
          "The propagation of an event from child to parent elements",
          "The propagation of an event from parent to child elements",
          "A way to sort events",
          "A method to stop events"
        ],
        correctAnswer: 0,
        explanation: "Event bubbling is when an event propagates from the innermost element to the outer elements.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use setTimeout and setInterval?",
        options: [
          "To schedule code execution after a delay or at intervals",
          "To sort arrays",
          "To filter arrays",
          "To map values"
        ],
        correctAnswer: 0,
        explanation: "setTimeout schedules code after a delay; setInterval repeats code at intervals.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is hoisting in JavaScript?",
        options: [
          "The default behavior of moving declarations to the top",
          "A way to sort arrays",
          "A method to stop events",
          "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "Hoisting moves variable and function declarations to the top of their scope.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use promises?",
        options: [
          "To handle asynchronous operations",
          "To sort arrays",
          "To filter arrays",
          "To map values"
        ],
        correctAnswer: 0,
        explanation: "Promises are used to handle asynchronous operations.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is async/await?",
        options: [
          "A way to write asynchronous code that looks synchronous",
          "A way to sort arrays",
          "A method to stop events",
          "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "async/await allows writing asynchronous code in a synchronous style.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use destructuring assignment?",
        options: [
          "To extract values from arrays or properties from objects",
          "To sort arrays",
          "To filter arrays",
          "To map values"
        ],
        correctAnswer: 0,
        explanation: "Destructuring assignment extracts values from arrays or objects into variables.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the spread operator?",
        options: [
          "An operator to expand elements of an array or object",
          "An operator to sort arrays",
          "An operator to filter arrays",
          "An operator to map values"
        ],
        correctAnswer: 0,
        explanation: "The spread operator (...) expands elements of an array or object.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you import and export modules?",
        options: [
          "Using import and export statements",
          "Using require and module.exports",
          "Using include and export",
          "Using fetch and send"
        ],
        correctAnswer: 0,
        explanation: "Modules are imported and exported using import/export statements in ES6.",
        difficulty: "medium",
        topic: "JavaScript Basics"
      }
    ],
    hard: [
      {
        question: "What is the event loop in JavaScript?",
        options: [
          "A mechanism that handles asynchronous callbacks",
          "A type of loop for arrays",
          "A function that repeats events",
          "A way to create timers"
        ],
        correctAnswer: 0,
        explanation: "The event loop is responsible for handling asynchronous callbacks in JavaScript.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How does prototypal inheritance work?",
        options: [
          "Objects inherit directly from other objects",
          "Classes inherit from other classes",
          "Functions inherit from arrays",
          "Variables inherit from functions"
        ],
        correctAnswer: 0,
        explanation: "In JavaScript, objects inherit directly from other objects via the prototype chain.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a generator function?",
        options: [
          "A function that can pause and resume its execution",
          "A function that generates random numbers",
          "A function that creates arrays",
          "A function that only runs once"
        ],
        correctAnswer: 0,
        explanation: "Generator functions can pause and resume execution using the yield keyword.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you create a custom iterator?",
        options: [
          "By implementing the next() method and [Symbol.iterator]",
          "By using a for loop",
          "By using a generator function",
          "By using setInterval"
        ],
        correctAnswer: 0,
        explanation: "Custom iterators implement the next() method and [Symbol.iterator] property.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a WeakMap and WeakSet?",
        options: [
          "Collections that hold weak references to objects",
          "Collections that hold only primitive values",
          "Collections that are immutable",
          "Collections that are thread-safe"
        ],
        correctAnswer: 0,
        explanation: "WeakMap and WeakSet hold weak references to objects, allowing garbage collection.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use Proxy objects?",
        options: [
          "To define custom behavior for fundamental operations on objects",
          "To create new arrays",
          "To handle asynchronous code",
          "To manage event listeners"
        ],
        correctAnswer: 0,
        explanation: "Proxy objects allow you to define custom behavior for operations like property lookup, assignment, etc.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the Reflect API?",
        options: [
          "A built-in object that provides methods for interceptable JavaScript operations",
          "A way to reflect light in the browser",
          "A method for debugging code",
          "A function for creating arrays"
        ],
        correctAnswer: 0,
        explanation: "The Reflect API provides methods for interceptable JavaScript operations, often used with Proxy.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use Symbol in JavaScript?",
        options: [
          "To create unique identifiers for object properties",
          "To create new arrays",
          "To define classes",
          "To handle events"
        ],
        correctAnswer: 0,
        explanation: "Symbol is used to create unique and immutable identifiers for object properties.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is tail call optimization?",
        options: [
          "An optimization where the last function call is optimized to avoid growing the call stack",
          "A way to optimize array methods",
          "A method for sorting arrays",
          "A way to optimize event listeners"
        ],
        correctAnswer: 0,
        explanation: "Tail call optimization allows recursive functions to reuse stack frames for the last call.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use the bind, call, and apply methods?",
        options: [
          "To set the value of 'this' in a function",
          "To create new arrays",
          "To handle events",
          "To define classes"
        ],
        correctAnswer: 0,
        explanation: "bind, call, and apply are used to set the value of 'this' in a function.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a module pattern?",
        options: [
          "A design pattern to encapsulate private and public members",
          "A way to sort arrays",
          "A method for event handling",
          "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "The module pattern is used to encapsulate private and public members in JavaScript.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you implement memoization?",
        options: [
          "By caching the results of function calls",
          "By using setTimeout",
          "By using event listeners",
          "By using forEach"
        ],
        correctAnswer: 0,
        explanation: "Memoization caches the results of expensive function calls for efficiency.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a debounce function?",
        options: [
          "A function that delays execution until after a certain time has elapsed since the last call",
          "A function that runs only once",
          "A function that sorts arrays",
          "A function that handles events"
        ],
        correctAnswer: 0,
        explanation: "Debounce limits the rate at which a function can fire.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use the Object.defineProperty method?",
        options: [
          "To define or modify a property on an object",
          "To create new arrays",
          "To handle events",
          "To define classes"
        ],
        correctAnswer: 0,
        explanation: "Object.defineProperty is used to define or modify properties on objects.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a service worker?",
        options: [
          "A script that runs in the background and manages caching and network requests",
          "A function that handles events",
          "A method for sorting arrays",
          "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "Service workers run in the background and manage caching, push notifications, and network requests.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use Web Workers?",
        options: [
          "To run scripts in background threads",
          "To handle events",
          "To sort arrays",
          "To define classes"
        ],
        correctAnswer: 0,
        explanation: "Web Workers allow scripts to run in background threads, separate from the main execution thread.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is the Shadow DOM?",
        options: [
          "A web standard that enables encapsulation of DOM and CSS",
          "A method for sorting arrays",
          "A function for handling events",
          "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "The Shadow DOM allows encapsulation of DOM and CSS for web components.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you use the fetch API?",
        options: [
          "To make network requests to servers",
          "To sort arrays",
          "To handle events",
          "To define classes"
        ],
        correctAnswer: 0,
        explanation: "The fetch API is used to make network requests to servers.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "What is a microtask queue?",
        options: [
          "A queue for promises and mutation observers",
          "A queue for setTimeout callbacks",
          "A queue for event listeners",
          "A queue for array methods"
        ],
        correctAnswer: 0,
        explanation: "The microtask queue handles promises and mutation observers, running before the next event loop tick.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      },
      {
        question: "How do you handle deep cloning of objects?",
        options: [
          "By using structuredClone or JSON.parse(JSON.stringify(obj))",
          "By using Object.assign",
          "By using a for loop",
          "By using map()"
        ],
        correctAnswer: 0,
        explanation: "Deep cloning can be done with structuredClone or JSON.parse(JSON.stringify(obj)), but be aware of limitations.",
        difficulty: "hard",
        topic: "JavaScript Basics"
      }
    ]
  },
  'Data Structure and Algorithm': {
    easy: [
      {
        question: "What is the main purpose of a data structure?",
          options: [
          "To organize and store data efficiently",
          "To compile code",
          "To display graphics",
          "To connect to the internet"
        ],
        correctAnswer: 0,
        explanation: "Data structures are used to organize and store data efficiently for various operations.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "Which data structure uses LIFO (Last-In, First-Out) order?",
          options: [
          "Stack",
          "Queue",
          "Array",
          "Tree"
        ],
        correctAnswer: 0,
        explanation: "A stack uses Last-In, First-Out (LIFO) order for adding and removing elements.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "Which data structure uses FIFO (First-In, First-Out) order?",
        options: [
          "Queue",
          "Stack",
          "Graph",
          "Heap"
        ],
        correctAnswer: 0,
        explanation: "A queue uses First-In, First-Out (FIFO) order for adding and removing elements.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is the index of the first element in an array?",
        options: [
          "0",
          "1",
          "-1",
          "Depends on the language"
        ],
        correctAnswer: 0,
        explanation: "In most programming languages, arrays are zero-indexed.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "Which data structure is best for implementing a recursive algorithm?",
        options: [
          "Stack",
          "Queue",
          "Array",
          "Hash Table"
        ],
        correctAnswer: 0,
        explanation: "Stacks are used to keep track of function calls in recursion.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is a node in a linked list?",
        options: [
          "An element containing data and a reference to the next node",
            "A function",
          "A sorting algorithm",
          "A type of array"
        ],
        correctAnswer: 0,
        explanation: "A node in a linked list contains data and a reference to the next node.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "Which data structure is used to represent hierarchical relationships?",
        options: [
          "Tree",
          "Array",
          "Stack",
          "Queue"
        ],
        correctAnswer: 0,
        explanation: "Trees are used to represent hierarchical relationships.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is the main advantage of a hash table?",
          options: [
          "Fast data retrieval using keys",
          "Sorted data",
          "Hierarchical data",
          "Sequential access"
        ],
        correctAnswer: 0,
        explanation: "Hash tables provide fast data retrieval using keys.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "Which data structure is best for implementing a priority queue?",
        options: [
          "Heap",
          "Stack",
          "Array",
          "Linked List"
        ],
        correctAnswer: 0,
        explanation: "Heaps are commonly used to implement priority queues.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is the parent node in a tree?",
          options: [
          "A node with one or more child nodes",
          "A node with no children",
          "A node at the bottom of the tree",
          "A node with two parents"
        ],
        correctAnswer: 0,
        explanation: "A parent node is a node that has one or more child nodes.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is a leaf node in a tree?",
        options: [
          "A node with no children",
          "A node with two parents",
          "A node at the top of the tree",
          "A node with only one child"
        ],
        correctAnswer: 0,
        explanation: "A leaf node is a node with no children.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "Which data structure is used for breadth-first search (BFS) in a graph?",
          options: [
          "Queue",
          "Stack",
          "Heap",
          "Array"
        ],
        correctAnswer: 0,
        explanation: "A queue is used to implement breadth-first search (BFS) in a graph.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "Which data structure is used for depth-first search (DFS) in a graph?",
          options: [
          "Stack",
          "Queue",
          "Heap",
          "Array"
        ],
        correctAnswer: 0,
        explanation: "A stack is used to implement depth-first search (DFS) in a graph.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is the time complexity of accessing an element in an array by index?",
        options: [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        correctAnswer: 0,
        explanation: "Accessing an element by index in an array is O(1) time.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is a graph?",
          options: [
          "A collection of nodes connected by edges",
          "A sorted array",
          "A type of tree",
          "A function"
        ],
        correctAnswer: 0,
        explanation: "A graph is a collection of nodes (vertices) connected by edges.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is a circular queue?",
        options: [
          "A queue where the last position is connected to the first",
          "A queue with only one element",
          "A stack with two ends",
          "A queue with no front"
        ],
        correctAnswer: 0,
        explanation: "A circular queue connects the last position to the first, forming a circle.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is the main operation of a stack?",
          options: [
          "Push and pop",
          "Enqueue and dequeue",
          "Insert and delete",
          "Sort and search"
        ],
        correctAnswer: 0,
        explanation: "Stacks use push (add) and pop (remove) operations.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is the main operation of a queue?",
        options: [
          "Enqueue and dequeue",
          "Push and pop",
          "Insert and delete",
          "Sort and search"
        ],
        correctAnswer: 0,
        explanation: "Queues use enqueue (add) and dequeue (remove) operations.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is a doubly linked list?",
          options: [
          "A linked list where each node points to both next and previous nodes",
          "A list with only one node",
          "A list with two heads",
          "A circular list"
        ],
        correctAnswer: 0,
        explanation: "A doubly linked list has nodes that point to both the next and previous nodes.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      },
      {
        question: "What is a hash function used for in a hash table?",
        options: [
          "To map keys to indices in the table",
          "To sort the table",
          "To reverse the table",
          "To encrypt the table"
        ],
        correctAnswer: 0,
        explanation: "A hash function maps keys to indices in a hash table for fast access.",
        difficulty: "easy",
        topic: "Data Structure and Algorithm"
      }
    ],
    medium:[
        {
          question: "What is the main idea behind binary search?",
          options: [
            "Divide the sorted array and search in halves",
            "Check every element one by one",
            "Sort the array before searching",
            "Use a hash table for searching"
          ],
          correctAnswer: 0,
          explanation: "Binary search divides a sorted array and searches in halves, reducing the search space each time.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "Which sorting algorithm is based on the divide and conquer principle?",
          options: [
            "Merge sort",
            "Bubble sort",
            "Selection sort",
            "Insertion sort"
          ],
          correctAnswer: 0,
          explanation: "Merge sort uses the divide and conquer principle to sort arrays.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the worst-case time complexity of quick sort?",
          options: [
            "O(n^2)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
          ],
          correctAnswer: 0,
          explanation: "The worst-case time complexity of quick sort is O(n^2), but on average it is O(n log n).",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a self-balancing binary search tree?",
          options: [
            "A tree that automatically keeps its height balanced",
            "A tree with only left children",
            "A tree with only right children",
            "A tree with no leaves"
          ],
          correctAnswer: 0,
          explanation: "Self-balancing binary search trees keep their height balanced for efficient operations.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a hash collision?",
          options: [
            "When two keys hash to the same index",
            "When a key is not found",
            "When a table is full",
            "When a value is deleted"
          ],
          correctAnswer: 0,
          explanation: "A hash collision occurs when two keys hash to the same index in a hash table.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "Which data structure is best for implementing a LRU cache?",
          options: [
            "Hash map and doubly linked list",
            "Stack",
            "Queue",
            "Heap"
          ],
          correctAnswer: 0,
          explanation: "A combination of a hash map and a doubly linked list is used for efficient LRU cache implementation.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a circular linked list?",
          options: [
            "A linked list where the last node points to the first node",
            "A list with only one node",
            "A list with two heads",
            "A doubly linked list"
          ],
          correctAnswer: 0,
          explanation: "In a circular linked list, the last node points back to the first node.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the main advantage of a doubly linked list over a singly linked list?",
          options: [
            "Can be traversed in both directions",
            "Uses less memory",
            "Faster insertion at the end",
            "Easier to implement"
          ],
          correctAnswer: 0,
          explanation: "Doubly linked lists can be traversed in both directions.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a min heap?",
          options: [
            "A binary tree where the parent is less than or equal to its children",
            "A tree with only left children",
            "A tree with only right children",
            "A tree with no leaves"
          ],
          correctAnswer: 0,
          explanation: "In a min heap, the parent node is always less than or equal to its children.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a topological sort used for?",
          options: [
            "Ordering tasks with dependencies in a directed acyclic graph",
            "Sorting arrays",
            "Searching trees",
            "Balancing heaps"
          ],
          correctAnswer: 0,
          explanation: "Topological sort is used to order tasks with dependencies in a DAG.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the time complexity of inserting an element into a binary search tree (average case)?",
          options: [
            "O(log n)",
            "O(n)",
            "O(1)",
            "O(n^2)"
          ],
          correctAnswer: 0,
          explanation: "On average, insertion in a balanced BST is O(log n).",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a spanning tree?",
          options: [
            "A subgraph that includes all the vertices of the original graph with the minimum number of edges",
            "A tree with only one node",
            "A tree with no leaves",
            "A tree with only right children"
          ],
          correctAnswer: 0,
          explanation: "A spanning tree is a subgraph that includes all vertices with the minimum number of edges.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a trie used for?",
          options: [
            "Efficient retrieval of strings, such as in autocomplete",
            "Sorting arrays",
            "Searching trees",
            "Balancing heaps"
          ],
          correctAnswer: 0,
          explanation: "Tries are used for efficient retrieval of strings, such as in autocomplete features.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the main idea behind dynamic programming?",
          options: [
            "Breaking problems into overlapping subproblems and storing their solutions",
            "Sorting arrays",
            "Searching trees",
            "Balancing heaps"
          ],
          correctAnswer: 0,
          explanation: "Dynamic programming breaks problems into overlapping subproblems and stores their solutions.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a graph traversal?",
          options: [
            "Visiting all the nodes in a graph",
            "Sorting the nodes in a graph",
            "Deleting nodes from a graph",
            "Adding nodes to a graph"
          ],
          correctAnswer: 0,
          explanation: "Graph traversal is the process of visiting all nodes in a graph.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "Which algorithm finds the shortest path in a weighted graph?",
          options: [
            "Dijkstra's algorithm",
            "Bubble sort",
            "Depth-first search",
            "Heap sort"
          ],
          correctAnswer: 0,
          explanation: "Dijkstra's algorithm finds the shortest path in a weighted graph.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a hash map's average-case time complexity for search?",
          options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
          ],
          correctAnswer: 0,
          explanation: "Hash maps provide O(1) average-case time complexity for search.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a queue mainly used for in graph algorithms?",
          options: [
            "Breadth-first search (BFS)",
            "Depth-first search (DFS)",
            "Sorting",
            "Balancing"
          ],
          correctAnswer: 0,
          explanation: "Queues are used for BFS in graph algorithms.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the main property of a binary search tree?",
          options: [
            "Left child < parent < right child",
            "All nodes are equal",
            "All nodes are leaves",
            "All nodes are roots"
          ],
          correctAnswer: 0,
          explanation: "In a BST, the left child is less than the parent, and the right child is greater.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the main use of a stack in expression evaluation?",
          options: [
            "To convert and evaluate expressions (e.g., infix to postfix)",
            "To sort numbers",
            "To search arrays",
            "To balance heaps"
          ],
          correctAnswer: 0,
          explanation: "Stacks are used to convert and evaluate expressions, such as infix to postfix.",
          difficulty: "medium",
          topic: "Data Structure and Algorithm"
        }
      ],
    hard: [
        {
          question: "What is a red-black tree?",
          options: [
            "A self-balancing binary search tree with color properties",
            "A tree with only red and black nodes",
            "A tree with two roots",
            "A tree with only one child per node"
          ],
          correctAnswer: 0,
          explanation: "A red-black tree is a self-balancing binary search tree where each node has a color property.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is an AVL tree?",
          options: [
            "A self-balancing binary search tree where the heights of subtrees differ by at most one",
            "A tree with only left children",
            "A tree with only right children",
            "A tree with no leaves"
          ],
          correctAnswer: 0,
          explanation: "An AVL tree is a self-balancing binary search tree with strict balancing conditions.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a B-tree?",
          options: [
            "A self-balancing search tree used in databases and file systems",
            "A binary tree with only two children",
            "A tree with only one node",
            "A tree with no leaves"
          ],
          correctAnswer: 0,
          explanation: "A B-tree is a self-balancing search tree commonly used in databases and file systems.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a Fibonacci heap?",
          options: [
            "A heap data structure with better amortized running time for some operations",
            "A heap with only Fibonacci numbers",
            "A binary heap with two roots",
            "A tree with only one child per node"
          ],
          correctAnswer: 0,
          explanation: "A Fibonacci heap is a heap data structure with better amortized running time for decrease-key and merge operations.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a splay tree?",
          options: [
            "A self-adjusting binary search tree that moves accessed elements to the root",
            "A tree with only left children",
            "A tree with only right children",
            "A tree with no leaves"
          ],
          correctAnswer: 0,
          explanation: "A splay tree is a self-adjusting binary search tree that moves accessed elements to the root.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a suffix tree?",
          options: [
            "A compressed trie of all the suffixes of a string",
            "A tree with only suffix nodes",
            "A tree with only one child per node",
            "A tree with no leaves"
          ],
          correctAnswer: 0,
          explanation: "A suffix tree is a compressed trie containing all the suffixes of a given string.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a segment tree?",
          options: [
            "A tree used for storing intervals or segments",
            "A tree with only one child per node",
            "A tree with only left children",
            "A tree with no leaves"
          ],
          correctAnswer: 0,
          explanation: "A segment tree is used for storing intervals or segments and allows querying which of the stored segments contain a given point.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a disjoint set?",
          options: [
            "A data structure that keeps track of a partition of a set into disjoint subsets",
            "A set with only one element",
            "A set with overlapping elements",
            "A set with no elements"
          ],
          correctAnswer: 0,
          explanation: "A disjoint set is a data structure that keeps track of a partition of a set into disjoint subsets.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a strongly connected component?",
          options: [
            "A maximal set of vertices in a directed graph where each vertex is reachable from every other",
            "A set of nodes with only one connection",
            "A set of nodes with no connections",
            "A set of nodes with only outgoing edges"
          ],
          correctAnswer: 0,
          explanation: "A strongly connected component is a maximal set of vertices in a directed graph where each vertex is reachable from every other.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a network flow algorithm?",
          options: [
            "An algorithm to find the maximum flow in a flow network",
            "An algorithm to sort arrays",
            "An algorithm to search trees",
            "An algorithm to balance heaps"
          ],
          correctAnswer: 0,
          explanation: "Network flow algorithms are used to find the maximum flow in a flow network.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the traveling salesman problem?",
          options: [
            "A problem to find the shortest possible route visiting each city exactly once and returning to the origin",
            "A problem to sort arrays",
            "A problem to search trees",
            "A problem to balance heaps"
          ],
          correctAnswer: 0,
          explanation: "The traveling salesman problem seeks the shortest route visiting each city once and returning to the start.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is the knapsack problem?",
          options: [
            "A problem to maximize the total value in a knapsack without exceeding its capacity",
            "A problem to sort arrays",
            "A problem to search trees",
            "A problem to balance heaps"
          ],
          correctAnswer: 0,
          explanation: "The knapsack problem is an optimization problem to maximize value without exceeding capacity.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a greedy algorithm?",
          options: [
            "An algorithm that makes the locally optimal choice at each step",
            "An algorithm that always backtracks",
            "An algorithm that sorts arrays",
            "An algorithm that balances heaps"
          ],
          correctAnswer: 0,
          explanation: "A greedy algorithm makes the locally optimal choice at each step.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is backtracking?",
          options: [
            "A method for finding solutions by trying partial solutions and then abandoning them if they are not suitable",
            "A method for sorting arrays",
            "A method for searching trees",
            "A method for balancing heaps"
          ],
          correctAnswer: 0,
          explanation: "Backtracking tries partial solutions and abandons them if they are not suitable.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is branch and bound?",
          options: [
            "An algorithm design paradigm for discrete and combinatorial optimization problems",
            "A method for sorting arrays",
            "A method for searching trees",
            "A method for balancing heaps"
          ],
          correctAnswer: 0,
          explanation: "Branch and bound is used for discrete and combinatorial optimization problems.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a randomized algorithm?",
          options: [
            "An algorithm that uses random numbers to influence its behavior",
            "An algorithm that always produces the same output",
            "An algorithm that sorts arrays",
            "An algorithm that balances heaps"
          ],
          correctAnswer: 0,
          explanation: "A randomized algorithm uses random numbers to influence its behavior.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is amortized analysis?",
          options: [
            "An analysis technique to average the time required to perform a sequence of data structure operations",
            "A method for sorting arrays",
            "A method for searching trees",
            "A method for balancing heaps"
          ],
          correctAnswer: 0,
          explanation: "Amortized analysis averages the time required for a sequence of operations.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a bloom filter?",
          options: [
            "A space-efficient probabilistic data structure to test set membership",
            "A sorting algorithm",
            "A searching algorithm",
            "A type of tree"
          ],
          correctAnswer: 0,
          explanation: "A bloom filter is a space-efficient probabilistic data structure to test set membership.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a skip list?",
          options: [
            "A data structure that allows fast search within an ordered sequence of elements",
            "A sorting algorithm",
            "A searching algorithm",
            "A type of tree"
          ],
          correctAnswer: 0,
          explanation: "A skip list allows fast search within an ordered sequence of elements.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        },
        {
          question: "What is a van Emde Boas tree?",
          options: [
            "A tree data structure that supports fast operations on a universe of keys",
            "A binary search tree",
            "A heap",
            "A trie"
          ],
          correctAnswer: 0,
          explanation: "A van Emde Boas tree supports fast operations on a universe of keys.",
          difficulty: "hard",
          topic: "Data Structure and Algorithm"
        }
      ]
  },
  'Database Concepts': {
    easy: [
        {
          question: "What is a database?",
          options: [
          "A collection of organized data",
            "A programming language",
          "A type of algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A database is a collection of organized data that can be easily accessed, managed, and updated.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a table in a database?",
        options: [
          "A structure to store data in rows and columns",
          "A type of function",
          "A sorting algorithm",
          "A network device"
        ],
        correctAnswer: 0,
        explanation: "A table stores data in rows and columns in a database.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a primary key?",
          options: [
          "A unique identifier for each record in a table",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A primary key uniquely identifies each record in a table.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a foreign key?",
        options: [
          "A field in one table that refers to the primary key in another table",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A foreign key is a field in one table that refers to the primary key in another table.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a SQL query?",
          options: [
          "A command to interact with a database",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A SQL query is a command used to interact with a database.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a relational database?",
        options: [
          "A database that stores data in tables with relationships",
          "A database that stores data in files",
          "A database that stores data in arrays",
          "A database that stores data in objects"
        ],
        correctAnswer: 0,
        explanation: "A relational database stores data in tables with relationships between them.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a NoSQL database?",
          options: [
          "A database that does not use tables for data storage",
          "A database that only stores numbers",
          "A database that only stores text",
          "A database that only stores images"
        ],
        correctAnswer: 0,
        explanation: "A NoSQL database does not use tables for data storage and is often used for unstructured data.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is normalization?",
        options: [
            "The process of organizing data to reduce redundancy",
          "The process of sorting data",
          "The process of encrypting data",
          "The process of deleting data"
        ],
        correctAnswer: 0,
        explanation: "Normalization organizes data to reduce redundancy and improve data integrity.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is denormalization?",
          options: [
          "The process of combining tables to improve read performance",
          "The process of sorting data",
          "The process of encrypting data",
          "The process of deleting data"
        ],
        correctAnswer: 0,
        explanation: "Denormalization combines tables to improve read performance, sometimes at the cost of redundancy.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is an index in a database?",
          options: [
          "A data structure that improves the speed of data retrieval",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "An index is a data structure that improves the speed of data retrieval operations.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a view in a database?",
          options: [
          "A virtual table based on the result of a query",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A view is a virtual table based on the result of a SQL query.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a transaction?",
          options: [
          "A sequence of database operations that are treated as a single unit",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A transaction is a sequence of operations performed as a single logical unit of work.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is ACID property?",
          options: [
          "A set of properties that guarantee reliable database transactions",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a join operation?",
          options: [
          "A SQL operation to combine rows from two or more tables",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A join operation combines rows from two or more tables based on a related column.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a schema?",
          options: [
          "The structure that defines the organization of data in a database",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A schema defines the structure and organization of data in a database.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a constraint?",
          options: [
          "A rule that limits the values that can be stored in a column",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A constraint is a rule that limits the values that can be stored in a column.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a unique key?",
          options: [
          "A constraint that ensures all values in a column are different",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A unique key ensures that all values in a column are unique.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a composite key?",
          options: [
          "A key made up of two or more columns",
          "A key made up of only one column",
          "A key that is always unique",
          "A key that is always null"
        ],
        correctAnswer: 0,
        explanation: "A composite key is made up of two or more columns to uniquely identify a record.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a stored procedure?",
        options: [
          "A set of SQL statements that can be executed as a program",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A stored procedure is a set of SQL statements that can be executed as a program.",
        difficulty: "easy",
        topic: "Database Concepts"
      },
      {
        question: "What is a trigger in a database?",
          options: [
          "A procedure that is automatically executed in response to certain events",
          "A type of data type",
          "A sorting algorithm",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A trigger is a procedure that is automatically executed in response to certain events on a table or view.",
        difficulty: "easy",
        topic: "Database Concepts"
      }
    ],
    medium: [
            {
              question: "What is a clustered index?",
              options: [
                "An index that determines the physical order of data in a table",
                "An index that is stored separately from the data",
                "An index that only supports unique values",
                "An index used only for views"
              ],
              correctAnswer: 0,
              explanation: "A clustered index determines the physical order of data in a table.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a non-clustered index?",
              options: [
                "An index stored separately from the actual table data",
                "An index that determines the physical order of data",
                "An index that only supports unique values",
                "An index used only for views"
              ],
              correctAnswer: 0,
              explanation: "A non-clustered index is stored separately from the table data and contains pointers to the data.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a self join?",
          options: [
                "A join where a table is joined with itself",
                "A join between two different databases",
                "A join that only uses primary keys",
                "A join that does not use any keys"
              ],
              correctAnswer: 0,
              explanation: "A self join is a regular join but the table is joined with itself.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a cross join?",
              options: [
                "A join that returns the Cartesian product of two tables",
                "A join that only returns matching rows",
                "A join that uses foreign keys",
                "A join that is used for subqueries"
              ],
              correctAnswer: 0,
              explanation: "A cross join returns the Cartesian product of two tables.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a subquery?",
          options: [
                "A query nested inside another query",
                "A query that only returns one row",
                "A query that updates data",
                "A query that deletes data"
              ],
              correctAnswer: 0,
              explanation: "A subquery is a query nested inside another query.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a correlated subquery?",
              options: [
                "A subquery that references columns from the outer query",
                "A subquery that does not reference any columns",
                "A subquery that only returns one row",
                "A subquery that updates data"
              ],
              correctAnswer: 0,
              explanation: "A correlated subquery references columns from the outer query.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a union in SQL?",
          options: [
                "A command to combine the results of two or more SELECT statements",
                "A command to join tables",
                "A command to update data",
                "A command to delete data"
              ],
              correctAnswer: 0,
              explanation: "UNION combines the results of two or more SELECT statements.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a GROUP BY clause used for?",
              options: [
                "To group rows that have the same values in specified columns",
                "To sort the result set",
                "To filter rows",
                "To join tables"
              ],
              correctAnswer: 0,
              explanation: "GROUP BY groups rows that have the same values in specified columns.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a HAVING clause?",
          options: [
                "A clause used to filter groups after GROUP BY",
                "A clause used to filter rows before grouping",
                "A clause used to join tables",
                "A clause used to update data"
              ],
              correctAnswer: 0,
              explanation: "HAVING is used to filter groups after GROUP BY.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a CASE statement in SQL?",
              options: [
                "A way to perform conditional logic in queries",
                "A way to join tables",
                "A way to update data",
                "A way to delete data"
              ],
              correctAnswer: 0,
              explanation: "CASE allows conditional logic in SQL queries.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a window function?",
          options: [
                "A function that performs calculations across a set of table rows related to the current row",
                "A function that opens a new window",
                "A function that updates data",
                "A function that deletes data"
              ],
              correctAnswer: 0,
              explanation: "Window functions perform calculations across a set of table rows related to the current row.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a CTE (Common Table Expression)?",
              options: [
                "A temporary result set defined within the execution scope of a single SQL statement",
                "A permanent table",
                "A type of index",
                "A type of constraint"
              ],
              correctAnswer: 0,
              explanation: "A CTE is a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a materialized view?",
          options: [
                "A view whose result is stored physically",
                "A view that is always virtual",
                "A view that cannot be indexed",
                "A view that is only used for updates"
              ],
              correctAnswer: 0,
              explanation: "A materialized view stores its result physically, unlike a regular view.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a deadlock in a database?",
              options: [
                "A situation where two or more transactions are waiting for each other to release locks",
                "A situation where a transaction is always successful",
                "A situation where data is always consistent",
                "A situation where a query returns no rows"
              ],
              correctAnswer: 0,
              explanation: "A deadlock occurs when two or more transactions are waiting for each other to release locks.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a rollback?",
          options: [
                "An operation that undoes changes made by a transaction",
                "An operation that saves changes",
                "An operation that deletes data",
                "An operation that updates data"
              ],
              correctAnswer: 0,
              explanation: "Rollback undoes changes made by a transaction.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a commit?",
              options: [
                "An operation that saves all changes made by a transaction",
                "An operation that undoes changes",
                "An operation that deletes data",
                "An operation that updates data"
              ],
              correctAnswer: 0,
              explanation: "Commit saves all changes made by a transaction.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a savepoint?",
          options: [
                "A point within a transaction to which you can roll back",
                "A point where a transaction starts",
                "A point where a transaction ends",
                "A point where data is deleted"
              ],
              correctAnswer: 0,
              explanation: "A savepoint is a point within a transaction to which you can roll back.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a cursor in SQL?",
              options: [
                "A database object used to retrieve, manipulate, and navigate through a result set row by row",
                "A pointer to a table",
                "A type of index",
                "A type of constraint"
              ],
              correctAnswer: 0,
              explanation: "A cursor is used to retrieve, manipulate, and navigate through a result set row by row.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is a database trigger?",
          options: [
                "A procedure that is automatically executed in response to certain events on a table or view",
                "A type of index",
                "A type of constraint",
                "A type of view"
              ],
              correctAnswer: 0,
              explanation: "A trigger is a procedure that is automatically executed in response to certain events on a table or view.",
              difficulty: "medium",
              topic: "Database Concepts"
            },
            {
              question: "What is database replication?",
              options: [
                "The process of copying and maintaining database objects in multiple databases",
                "The process of deleting data",
                "The process of updating data",
                "The process of indexing data"
              ],
              correctAnswer: 0,
              explanation: "Replication is the process of copying and maintaining database objects in multiple databases.",
              difficulty: "medium",
              topic: "Database Concepts"
            }
    ],
    hard: [
        {
            question: "What is sharding in databases?",
          options: [
              "Partitioning data across multiple servers to improve scalability",
              "Encrypting data in a database",
              "Backing up a database",
              "Normalizing tables"
            ],
            correctAnswer: 0,
            explanation: "Sharding is partitioning data across multiple servers to improve scalability and performance.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is partitioning?",
            options: [
              "Dividing a database into distinct, independent parts",
              "Encrypting data in a database",
              "Backing up a database",
              "Normalizing tables"
            ],
            correctAnswer: 0,
            explanation: "Partitioning divides a database into distinct, independent parts for manageability and performance.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is CAP theorem?",
          options: [
              "It states that a distributed database can only guarantee two of Consistency, Availability, and Partition tolerance",
              "It describes the process of database normalization",
              "It is a method for indexing data",
              "It is a type of database backup"
            ],
            correctAnswer: 0,
            explanation: "The CAP theorem states that a distributed system can only guarantee two of Consistency, Availability, and Partition tolerance at the same time.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is eventual consistency?",
            options: [
              "A consistency model where updates will propagate and all nodes will eventually be consistent",
              "A model where all nodes are always consistent",
              "A model where data is never consistent",
              "A model for immediate consistency"
            ],
            correctAnswer: 0,
            explanation: "Eventual consistency means all updates will propagate and all nodes will eventually be consistent.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a distributed database?",
          options: [
              "A database that is stored on multiple physical locations",
              "A database that is only accessible locally",
              "A database that is not normalized",
              "A database that is not indexed"
            ],
            correctAnswer: 0,
            explanation: "A distributed database is stored on multiple physical locations, often for redundancy and performance.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a graph database?",
            options: [
              "A database that uses graph structures for semantic queries",
              "A database that stores only images",
              "A database that is not indexed",
              "A database that is only used for backups"
            ],
            correctAnswer: 0,
            explanation: "Graph databases use graph structures with nodes, edges, and properties for semantic queries.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a document store?",
          options: [
              "A NoSQL database that stores data as documents",
              "A database that stores only text files",
              "A database that stores only images",
              "A database that stores only numbers"
            ],
            correctAnswer: 0,
            explanation: "Document stores are NoSQL databases that store data as documents, often in JSON or BSON format.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a columnar database?",
            options: [
              "A database that stores data by columns instead of rows",
              "A database that stores only one column",
              "A database that is not indexed",
              "A database that is only used for backups"
            ],
            correctAnswer: 0,
            explanation: "Columnar databases store data by columns, which is efficient for analytical queries.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a time series database?",
            options: [
              "A database optimized for storing and querying time-stamped data",
              "A database that stores only text",
              "A database that is not indexed",
              "A database that is only used for backups"
            ],
            correctAnswer: 0,
            explanation: "Time series databases are optimized for storing and querying time-stamped or time-series data.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a spatial database?",
            options: [
              "A database optimized for storing and querying spatial data like coordinates",
              "A database that stores only text",
              "A database that is not indexed",
              "A database that is only used for backups"
            ],
            correctAnswer: 0,
            explanation: "Spatial databases are optimized for storing and querying spatial data such as coordinates and geometry.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a data warehouse?",
            options: [
              "A system used for reporting and data analysis, often containing historical data",
              "A system for real-time transaction processing",
              "A system for database backups",
              "A system for database normalization"
            ],
            correctAnswer: 0,
            explanation: "A data warehouse is used for reporting and data analysis, often containing large amounts of historical data.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is OLAP?",
            options: [
              "Online Analytical Processing, used for complex queries and analysis",
              "Online Transaction Processing",
              "Offline Analytical Processing",
              "Online Array Processing"
            ],
            correctAnswer: 0,
            explanation: "OLAP stands for Online Analytical Processing, used for complex queries and analysis.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is OLTP?",
            options: [
              "Online Transaction Processing, used for managing transaction-oriented applications",
              "Online Analytical Processing",
              "Offline Transaction Processing",
              "Online Table Processing"
            ],
            correctAnswer: 0,
            explanation: "OLTP stands for Online Transaction Processing, used for managing transaction-oriented applications.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a star schema?",
            options: [
              "A database schema with a central fact table connected to dimension tables",
              "A schema with only one table",
              "A schema with no relationships",
              "A schema used only for backups"
            ],
            correctAnswer: 0,
            explanation: "A star schema has a central fact table connected to dimension tables, commonly used in data warehousing.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a snowflake schema?",
            options: [
              "A database schema where dimension tables are normalized",
              "A schema with only one table",
              "A schema with no relationships",
              "A schema used only for backups"
            ],
            correctAnswer: 0,
            explanation: "A snowflake schema is a normalized version of a star schema, with dimension tables normalized into multiple related tables.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is data mining?",
            options: [
              "The process of discovering patterns in large data sets",
              "The process of deleting data",
              "The process of updating data",
              "The process of indexing data"
            ],
            correctAnswer: 0,
            explanation: "Data mining is the process of discovering patterns and knowledge from large amounts of data.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is ETL process?",
            options: [
              "Extract, Transform, Load - a process in data warehousing",
              "Encrypt, Transfer, Load",
              "Extract, Transfer, Link",
              "Evaluate, Transform, Load"
            ],
            correctAnswer: 0,
            explanation: "ETL stands for Extract, Transform, Load, a process in data warehousing.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a surrogate key?",
            options: [
              "A unique identifier for an entity, not derived from application data",
              "A key derived from application data",
              "A key that is always null",
              "A key that is always unique"
            ],
            correctAnswer: 0,
            explanation: "A surrogate key is a unique identifier for an entity, not derived from application data.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a fact table?",
            options: [
              "A central table in a star schema that contains quantitative data",
              "A table that contains only text data",
              "A table that is not indexed",
              "A table used only for backups"
            ],
            correctAnswer: 0,
            explanation: "A fact table is a central table in a star schema that contains quantitative data for analysis.",
            difficulty: "hard",
            topic: "Database Concepts"
          },
          {
            question: "What is a dimension table?",
            options: [
              "A table in a star schema that contains descriptive attributes",
              "A table that contains only numbers",
              "A table that is not indexed",
              "A table used only for backups"
            ],
            correctAnswer: 0,
            explanation: "A dimension table contains descriptive attributes related to the fact data in a star schema.",
            difficulty: "hard",
            topic: "Database Concepts"
          }
        
    ]
  },
  'System Design': {
    easy: [
      {
        question: "What is system design?",
        options: [
          "The process of defining the architecture and components of a system",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "System design is the process of defining the architecture, components, modules, interfaces, and data for a system.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is scalability?",
        options: [
          "The ability of a system to handle increased load",
          "The ability to write code quickly",
          "The process of debugging",
          "A type of database"
        ],
        correctAnswer: 0,
        explanation: "Scalability is the capability of a system to handle a growing amount of work or its potential to accommodate growth.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is reliability?",
        options: [
          "The ability of a system to function correctly and consistently",
          "The speed of a system",
          "The cost of a system",
          "A type of network"
        ],
        correctAnswer: 0,
        explanation: "Reliability refers to the probability that a system will run without failure over a specific period.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is availability?",
        options: [
          "The proportion of time a system is operational and accessible",
          "The number of users a system can support",
          "The amount of data a system can store",
          "A type of server"
        ],
        correctAnswer: 0,
        explanation: "Availability is the percentage of time a system is operational and accessible when required for use.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a load balancer?",
        options: [
          "A device or software that distributes network or application traffic across multiple servers",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a cache?",
        options: [
          "A storage layer that stores frequently accessed data for quick retrieval",
          "A type of network",
          "A programming paradigm",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "A cache is a hardware or software component that stores data so future requests for that data can be served faster.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a database?",
        options: [
          "An organized collection of structured information or data",
          "A type of programming language",
          "A network device",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "A database is an organized collection of data, generally stored and accessed electronically from a computer system.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a web server?",
        options: [
          "A server that delivers web pages to clients over the internet",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "A web server is a computer system that hosts websites and delivers web pages to users' browsers.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a client-server architecture?",
        options: [
          "A model where clients request resources and servers provide them",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "Client-server architecture is a network structure where clients request resources or services and servers provide them.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a microservice?",
        options: [
          "An architectural style that structures an application as a collection of small, independent services",
          "A type of database",
          "A programming language",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Microservices are a way of designing software systems as suites of independently deployable services.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a monolith?",
        options: [
          "A single, unified software application",
          "A type of database",
          "A programming language",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A monolith is a software application where all components are combined into a single program.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a distributed system?",
        options: [
          "A system with components located on different networked computers",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a CDN?",
        options: [
          "A Content Delivery Network that distributes content to users based on their geographic location",
          "A type of database",
          "A programming language",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A CDN is a geographically distributed network of servers that deliver content to users based on their location.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a queue?",
        options: [
          "A data structure or service that holds messages or tasks to be processed",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "A queue is a data structure or service that stores messages or tasks to be processed in order.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a message broker?",
        options: [
          "A system that enables communication between different applications or services",
          "A type of database",
          "A programming language",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A message broker is an intermediary program that translates messages from the formal messaging protocol of the sender to the formal messaging protocol of the receiver.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a failover?",
        options: [
          "A backup operational mode in which the functions of a system component are assumed by secondary system components",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "Failover is a backup operational mode in which the functions of a system component are assumed by secondary system components when the primary component becomes unavailable.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a backup?",
        options: [
          "A copy of data stored separately for recovery in case of loss",
          "A type of database",
          "A programming language",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A backup is a copy of data stored separately to recover information in case of data loss.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is replication?",
        options: [
          "The process of sharing information to ensure consistency between redundant resources",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "Replication is the process of sharing information to ensure consistency between redundant resources, such as software or hardware components.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a partition?",
        options: [
          "A division of a database or system into distinct, independent parts",
          "A type of database",
          "A programming language",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A partition is a division of a database or system into distinct, independent parts to improve manageability, performance, and availability.",
        difficulty: "easy",
        topic: "System Design"
      },
      {
        question: "What is a heartbeat in system design?",
        options: [
          "A periodic signal sent to indicate normal operation or to synchronize parts of a system",
          "A type of database",
          "A programming language",
          "A security protocol"
        ],
        correctAnswer: 0,
        explanation: "A heartbeat is a periodic signal sent between devices or components to indicate normal operation or synchronize actions.",
        difficulty: "easy",
        topic: "System Design"
      }
    ],
    medium: [
      {
        question: "What is horizontal scaling?",
        options: [
          "Adding more machines to handle increased load",
          "Upgrading the CPU of a single machine",
          "Reducing the number of servers",
          "Compressing data to save space"
        ],
        correctAnswer: 0,
        explanation: "Horizontal scaling means adding more machines to handle increased load, as opposed to vertical scaling which upgrades a single machine.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is vertical scaling?",
        options: [
          "Upgrading the resources (CPU, RAM) of a single machine",
          "Adding more machines to a system",
          "Splitting a database into shards",
          "Distributing traffic with a load balancer"
        ],
        correctAnswer: 0,
        explanation: "Vertical scaling means increasing the resources of a single machine to handle more load.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a stateless service?",
        options: [
          "A service that does not retain client data between requests",
          "A service that stores all data in memory",
          "A service that uses a database for every request",
          "A service that only runs on one server"
        ],
        correctAnswer: 0,
        explanation: "Stateless services do not retain client data between requests, making them easier to scale.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a stateful service?",
        options: [
          "A service that retains client data between requests",
          "A service that never stores data",
          "A service that only uses cache",
          "A service that is always stateless"
        ],
        correctAnswer: 0,
        explanation: "Stateful services retain client data between requests, which can complicate scaling and failover.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a service registry?",
        options: [
          "A database of available services and their locations",
          "A list of users in a system",
          "A log of all service requests",
          "A cache of recent responses"
        ],
        correctAnswer: 0,
        explanation: "A service registry keeps track of available services and their network locations for service discovery.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is service discovery?",
        options: [
          "The process of finding network locations of services",
          "The process of debugging services",
          "The process of scaling services",
          "The process of deleting services"
        ],
        correctAnswer: 0,
        explanation: "Service discovery is the process by which services find each other on a network, often using a service registry.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a reverse proxy?",
        options: [
          "A server that forwards client requests to backend servers",
          "A server that caches static files",
          "A server that only handles outgoing requests",
          "A server that encrypts all traffic"
        ],
        correctAnswer: 0,
        explanation: "A reverse proxy forwards client requests to backend servers and can provide load balancing, security, and caching.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a circuit breaker?",
        options: [
          "A pattern that prevents a system from repeatedly trying to execute an operation likely to fail",
          "A device that cuts off power",
          "A method for encrypting data",
          "A way to balance load"
        ],
        correctAnswer: 0,
        explanation: "The circuit breaker pattern prevents a system from making requests that are likely to fail, improving resilience.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a bulkhead pattern?",
        options: [
          "A design that isolates components to prevent failure from spreading",
          "A way to compress data",
          "A method for encrypting traffic",
          "A type of load balancer"
        ],
        correctAnswer: 0,
        explanation: "The bulkhead pattern isolates components so that a failure in one does not affect others.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a sidecar pattern?",
        options: [
          "A design where a helper service runs alongside the main service",
          "A way to store logs",
          "A method for scaling databases",
          "A type of cache"
        ],
        correctAnswer: 0,
        explanation: "The sidecar pattern involves running a helper service alongside the main service to provide additional functionality.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a saga pattern?",
        options: [
          "A pattern for managing distributed transactions",
          "A way to store large files",
          "A method for encrypting data",
          "A type of load balancer"
        ],
        correctAnswer: 0,
        explanation: "The saga pattern manages distributed transactions by breaking them into a series of smaller, independent steps.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a CQRS pattern?",
        options: [
          "A pattern that separates read and write operations",
          "A way to compress data",
          "A method for encrypting traffic",
          "A type of cache"
        ],
        correctAnswer: 0,
        explanation: "CQRS (Command Query Responsibility Segregation) separates read and write operations for better scalability and maintainability.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is event sourcing?",
        options: [
          "A pattern where state changes are stored as a sequence of events",
          "A way to source data from multiple databases",
          "A method for encrypting data",
          "A type of load balancer"
        ],
        correctAnswer: 0,
        explanation: "Event sourcing stores state changes as a sequence of events, allowing for easier auditing and rollback.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a read replica?",
        options: [
          "A copy of a database used for read operations",
          "A backup of a database",
          "A database used for write operations",
          "A type of cache"
        ],
        correctAnswer: 0,
        explanation: "A read replica is a copy of a database used to handle read operations and reduce load on the primary database.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a write-ahead log?",
        options: [
          "A log that records changes before they are applied to the database",
          "A log that records changes after they are applied",
          "A log of all read operations",
          "A log of all network requests"
        ],
        correctAnswer: 0,
        explanation: "A write-ahead log records changes before they are applied to ensure data integrity in case of failure.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a leader election?",
        options: [
          "A process to select a coordinator among distributed nodes",
          "A method for encrypting data",
          "A way to balance load",
          "A type of cache"
        ],
        correctAnswer: 0,
        explanation: "Leader election is the process of selecting a coordinator among distributed nodes for coordination tasks.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a consensus algorithm?",
        options: [
          "An algorithm to achieve agreement among distributed systems",
          "A method for compressing data",
          "A way to encrypt traffic",
          "A type of load balancer"
        ],
        correctAnswer: 0,
        explanation: "Consensus algorithms help distributed systems agree on a single data value or state.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a distributed lock?",
        options: [
          "A mechanism to ensure only one process accesses a resource at a time in a distributed system",
          "A way to encrypt data",
          "A method for compressing data",
          "A type of cache"
        ],
        correctAnswer: 0,
        explanation: "Distributed locks ensure that only one process can access a resource at a time in a distributed system.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a rate limiter?",
        options: [
          "A mechanism to control the rate of requests to a service",
          "A way to compress data",
          "A method for encrypting traffic",
          "A type of cache"
        ],
        correctAnswer: 0,
        explanation: "A rate limiter controls the number of requests a service can handle in a given time period.",
        difficulty: "medium",
        topic: "System Design"
      },
      {
        question: "What is a throttling mechanism?",
        options: [
          "A technique to limit the usage of resources by users or services",
          "A way to compress data",
          "A method for encrypting traffic",
          "A type of cache"
        ],
        correctAnswer: 0,
        explanation: "Throttling mechanisms limit the usage of resources to prevent overloading a system.",
        difficulty: "medium",
        topic: "System Design"
      }
    ],
    hard: [
        {
          question: "What is eventual consistency?",
          options: [
            "A consistency model where updates will propagate and all nodes will eventually be consistent",
            "A model where all nodes are always consistent",
            "A model where data is never consistent",
            "A model for immediate consistency"
          ],
          correctAnswer: 0,
          explanation: "Eventual consistency means all updates will propagate and all nodes will eventually be consistent.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is strong consistency?",
          options: [
            "A model where all nodes see the same data at the same time",
            "A model where data is never consistent",
            "A model for delayed consistency",
            "A model for partial consistency"
          ],
          correctAnswer: 0,
          explanation: "Strong consistency ensures that all nodes see the same data at the same time after a write operation.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a distributed transaction?",
          options: [
            "A transaction that spans multiple networked databases or services",
            "A transaction that only affects one database",
            "A transaction that is always rolled back",
            "A transaction that is never committed"
          ],
          correctAnswer: 0,
          explanation: "A distributed transaction involves multiple networked databases or services and requires coordination to ensure atomicity.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a two-phase commit?",
          options: [
            "A protocol to ensure all nodes in a distributed system agree to commit a transaction",
            "A method for compressing data",
            "A way to encrypt traffic",
            "A type of load balancer"
          ],
          correctAnswer: 0,
          explanation: "Two-phase commit is a protocol to ensure all nodes in a distributed system agree to commit or abort a transaction.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a Paxos algorithm?",
          options: [
            "A consensus algorithm for achieving agreement in a distributed system",
            "A sorting algorithm",
            "A hashing algorithm",
            "A compression algorithm"
          ],
          correctAnswer: 0,
          explanation: "Paxos is a consensus algorithm used to achieve agreement among distributed systems.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a Raft algorithm?",
          options: [
            "A consensus algorithm designed to be easy to understand",
            "A sorting algorithm",
            "A hashing algorithm",
            "A compression algorithm"
          ],
          correctAnswer: 0,
          explanation: "Raft is a consensus algorithm that is designed to be more understandable than Paxos.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a gossip protocol?",
          options: [
            "A protocol where nodes periodically exchange information with random peers",
            "A protocol for encrypting data",
            "A protocol for compressing data",
            "A protocol for balancing load"
          ],
          correctAnswer: 0,
          explanation: "Gossip protocols allow nodes to periodically exchange information with random peers, helping to spread information quickly.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a sharding strategy?",
          options: [
            "A method for distributing data across multiple databases or servers",
            "A method for compressing data",
            "A method for encrypting data",
            "A method for balancing load"
          ],
          correctAnswer: 0,
          explanation: "Sharding is a strategy for distributing data across multiple databases or servers to improve scalability.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is partition tolerance?",
          options: [
            "The ability of a system to continue operating despite network partitions",
            "The ability to compress data",
            "The ability to encrypt data",
            "The ability to balance load"
          ],
          correctAnswer: 0,
          explanation: "Partition tolerance means a system can continue to operate even if network partitions occur.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a quorum?",
          options: [
            "The minimum number of nodes required to agree on an operation in a distributed system",
            "A type of load balancer",
            "A method for compressing data",
            "A method for encrypting data"
          ],
          correctAnswer: 0,
          explanation: "A quorum is the minimum number of nodes that must agree on an operation for it to be committed in a distributed system.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a bloom filter?",
          options: [
            "A space-efficient probabilistic data structure to test set membership",
            "A sorting algorithm",
            "A searching algorithm",
            "A type of tree"
          ],
          correctAnswer: 0,
          explanation: "A bloom filter is a space-efficient probabilistic data structure to test set membership.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is consistent hashing?",
          options: [
            "A technique to distribute data across a dynamic set of nodes",
            "A method for compressing data",
            "A method for encrypting data",
            "A type of load balancer"
          ],
          correctAnswer: 0,
          explanation: "Consistent hashing distributes data across a dynamic set of nodes, minimizing reorganization when nodes are added or removed.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a distributed cache?",
          options: [
            "A cache that is shared across multiple servers or nodes",
            "A cache that only stores data locally",
            "A cache that compresses data",
            "A cache that encrypts data"
          ],
          correctAnswer: 0,
          explanation: "A distributed cache is shared across multiple servers or nodes to improve performance and scalability.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is leaderless replication?",
          options: [
            "A replication model where no single node is designated as the leader",
            "A model where one node is always the leader",
            "A model for compressing data",
            "A model for encrypting data"
          ],
          correctAnswer: 0,
          explanation: "Leaderless replication allows any node to accept writes, increasing availability but complicating consistency.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a vector clock?",
          options: [
            "A mechanism for tracking causality in distributed systems",
            "A clock that measures time in vectors",
            "A method for compressing data",
            "A method for encrypting data"
          ],
          correctAnswer: 0,
          explanation: "Vector clocks are used to track causality between events in distributed systems.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a Merkle tree?",
          options: [
            "A tree in which every leaf node is labeled with a hash of a data block",
            "A tree that only stores numbers",
            "A tree that compresses data",
            "A tree that encrypts data"
          ],
          correctAnswer: 0,
          explanation: "A Merkle tree is a tree in which every leaf node is labeled with a hash of a data block, used for efficient and secure verification.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a time series database?",
          options: [
            "A database optimized for storing and querying time-stamped data",
            "A database that only stores text",
            "A database that compresses data",
            "A database that encrypts data"
          ],
          correctAnswer: 0,
          explanation: "Time series databases are optimized for storing and querying time-stamped or time-series data.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a log-structured merge-tree?",
          options: [
            "A data structure that improves write performance by batching and merging writes",
            "A tree that only stores logs",
            "A tree that compresses data",
            "A tree that encrypts data"
          ],
          correctAnswer: 0,
          explanation: "A log-structured merge-tree is a data structure that improves write performance by batching and merging writes.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a distributed file system?",
          options: [
            "A file system that allows access to files from multiple hosts sharing via a network",
            "A file system that only stores files locally",
            "A file system that compresses files",
            "A file system that encrypts files"
          ],
          correctAnswer: 0,
          explanation: "A distributed file system allows access to files from multiple hosts sharing via a network.",
          difficulty: "hard",
          topic: "System Design"
        },
        {
          question: "What is a peer-to-peer network?",
          options: [
            "A network where each node can act as both a client and a server",
            "A network with only one server",
            "A network that compresses data",
            "A network that encrypts data"
          ],
          correctAnswer: 0,
          explanation: "In a peer-to-peer network, each node can act as both a client and a server, sharing resources directly.",
          difficulty: "hard",
          topic: "System Design"
        }
      ]
  },
  'Web Development': {
    easy: [
      {
        question: "What is HTML?",
        options: [
          "A markup language for creating web pages",
          "A programming language for server-side logic",
          "A database system",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "HTML (HyperText Markup Language) is used to structure content on the web.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is CSS?",
        options: [
          "A language for styling web pages",
          "A database query language",
          "A server-side scripting language",
          "A type of hardware"
        ],
        correctAnswer: 0,
        explanation: "CSS (Cascading Style Sheets) is used to style and layout web pages.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is JavaScript?",
        options: [
          "A programming language for web development",
          "A markup language",
          "A database system",
          "A web server"
        ],
        correctAnswer: 0,
        explanation: "JavaScript is a programming language used to create interactive effects within web browsers.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a web browser?",
        options: [
          "A software application for accessing information on the web",
          "A server that hosts websites",
          "A programming language",
          "A database"
        ],
        correctAnswer: 0,
        explanation: "A web browser is a software application used to access and view websites.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a web server?",
        options: [
          "A computer system that hosts websites and serves web pages",
          "A browser extension",
          "A CSS framework",
          "A database"
        ],
        correctAnswer: 0,
        explanation: "A web server hosts websites and delivers web pages to users' browsers.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a URL?",
        options: [
          "A Uniform Resource Locator, the address of a web page",
          "A type of programming language",
          "A web server",
          "A CSS property"
        ],
        correctAnswer: 0,
        explanation: "A URL is the address used to access a specific resource on the web.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is HTTP?",
        options: [
          "A protocol for transferring web pages",
          "A programming language",
          "A database system",
          "A CSS framework"
        ],
        correctAnswer: 0,
        explanation: "HTTP (HyperText Transfer Protocol) is used for transferring web pages on the internet.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is HTTPS?",
        options: [
          "A secure version of HTTP",
          "A markup language",
          "A database system",
          "A web server"
        ],
        correctAnswer: 0,
        explanation: "HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP, using encryption.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a domain name?",
        options: [
          "A human-readable address for a website",
          "A type of CSS selector",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "A domain name is a human-readable address used to access websites.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a hyperlink?",
        options: [
          "A clickable link to another web page or resource",
          "A CSS property",
          "A database query",
          "A server-side script"
        ],
        correctAnswer: 0,
        explanation: "A hyperlink is a clickable element that navigates to another web page or resource.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a form in HTML?",
        options: [
          "An element for collecting user input",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "A form is an HTML element used to collect user input.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a div in HTML?",
        options: [
          "A block-level container element",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "A div is a block-level container used to group elements in HTML.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a span in HTML?",
        options: [
          "An inline container element",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "A span is an inline container used to group elements for styling.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a CSS selector?",
        options: [
          "A pattern used to select HTML elements for styling",
          "A JavaScript function",
          "A database query",
          "A web server"
        ],
        correctAnswer: 0,
        explanation: "A CSS selector is used to select HTML elements to apply styles.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a class in HTML?",
        options: [
          "An attribute used to assign styles to elements",
          "A JavaScript function",
          "A database table",
          "A web server"
        ],
        correctAnswer: 0,
        explanation: "A class is an attribute used to assign styles and identify elements in HTML.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is an ID in HTML?",
        options: [
          "A unique identifier for an HTML element",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "An ID is a unique identifier assigned to an HTML element.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a favicon?",
        options: [
          "A small icon displayed in the browser tab",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "A favicon is a small icon displayed in the browser tab for a website.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a responsive design?",
        options: [
          "A design that adapts to different screen sizes and devices",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "Responsive design ensures web pages look good on all devices and screen sizes.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a viewport?",
        options: [
          "The visible area of a web page in the browser",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "The viewport is the visible area of a web page in the user's browser.",
        difficulty: "easy",
        topic: "Web Development"
      },
      {
        question: "What is a meta tag?",
        options: [
          "An HTML tag that provides metadata about the web page",
          "A CSS property",
          "A JavaScript function",
          "A database table"
        ],
        correctAnswer: 0,
        explanation: "A meta tag provides metadata such as description, keywords, and author for a web page.",
        difficulty: "easy",
        topic: "Web Development"
      }
    ],
    medium: [
      {
        question: "What is the DOM?",
        options: [
          "A programming interface for HTML and XML documents",
          "A database system",
          "A CSS framework",
          "A server-side language"
        ],
        correctAnswer: 0,
        explanation: "The DOM (Document Object Model) is a programming interface for web documents, representing the page structure as a tree.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is AJAX?",
        options: [
          "A technique for asynchronous web requests",
          "A CSS property",
          "A database query language",
          "A server-side framework"
        ],
        correctAnswer: 0,
        explanation: "AJAX (Asynchronous JavaScript and XML) allows web pages to update asynchronously by exchanging data with a web server behind the scenes.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a REST API?",
        options: [
          "An API that follows Representational State Transfer principles",
          "A database system",
          "A CSS framework",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "A REST API is an application programming interface that conforms to REST architectural style and allows interaction with RESTful web services.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a SPA (Single Page Application)?",
        options: [
          "A web application that loads a single HTML page and updates content dynamically",
          "A server-side rendered website",
          "A static HTML page",
          "A database system"
        ],
        correctAnswer: 0,
        explanation: "A SPA loads a single HTML page and dynamically updates content as the user interacts with the app.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a PWA (Progressive Web App)?",
        options: [
          "A web app that uses modern web capabilities to deliver an app-like experience",
          "A server-side application",
          "A database system",
          "A CSS framework"
        ],
        correctAnswer: 0,
        explanation: "A PWA uses modern web capabilities to provide an app-like experience to users.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a CSS framework?",
        options: [
          "A library that makes it easier to style web pages",
          "A database system",
          "A JavaScript library",
          "A server-side language"
        ],
        correctAnswer: 0,
        explanation: "A CSS framework is a library that helps developers style web pages quickly and consistently.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a JavaScript framework?",
        options: [
          "A library or framework that helps build web applications",
          "A database system",
          "A CSS property",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "A JavaScript framework provides structure and tools for building web applications.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a front-end library?",
        options: [
          "A collection of pre-written code for building user interfaces",
          "A database system",
          "A server-side language",
          "A CSS property"
        ],
        correctAnswer: 0,
        explanation: "A front-end library is a collection of code that helps build user interfaces efficiently.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a back-end framework?",
        options: [
          "A framework for building server-side applications",
          "A CSS framework",
          "A front-end library",
          "A database system"
        ],
        correctAnswer: 0,
        explanation: "A back-end framework provides tools and structure for building server-side applications.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is Node.js?",
        options: [
          "A JavaScript runtime built on Chrome's V8 engine",
          "A CSS framework",
          "A database system",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "Node.js is a JavaScript runtime that allows running JavaScript on the server side.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A CSS framework",
          "A database system",
          "A server-side language"
        ],
        correctAnswer: 0,
        explanation: "React is a popular JavaScript library for building user interfaces, especially single-page applications.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is Angular?",
        options: [
          "A TypeScript-based open-source web application framework",
          "A CSS property",
          "A database system",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "Angular is a TypeScript-based framework for building web applications.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is Vue.js?",
        options: [
          "A progressive JavaScript framework for building user interfaces",
          "A CSS framework",
          "A database system",
          "A server-side language"
        ],
        correctAnswer: 0,
        explanation: "Vue.js is a progressive JavaScript framework for building user interfaces.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a build tool?",
        options: [
          "A tool that automates tasks like bundling, minification, and transpilation",
          "A database system",
          "A CSS property",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "A build tool automates tasks such as bundling, minification, and transpilation in web development.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a package manager?",
        options: [
          "A tool that automates installing, updating, and managing software packages",
          "A CSS property",
          "A database system",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "A package manager helps install, update, and manage software packages and dependencies.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a bundler?",
        options: [
          "A tool that combines multiple files into a single file",
          "A CSS property",
          "A database system",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "A bundler combines multiple files (like JavaScript modules) into a single file for deployment.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a transpiler?",
        options: [
          "A tool that converts code from one language to another",
          "A database system",
          "A CSS property",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "A transpiler converts code from one programming language to another, such as TypeScript to JavaScript.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is server-side rendering?",
        options: [
          "Rendering web pages on the server before sending them to the client",
          "Rendering web pages in the browser",
          "A CSS property",
          "A database system"
        ],
        correctAnswer: 0,
        explanation: "Server-side rendering generates the HTML for a web page on the server and sends it to the client.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is client-side rendering?",
        options: [
          "Rendering web pages in the browser using JavaScript",
          "Rendering web pages on the server",
          "A CSS property",
          "A database system"
        ],
        correctAnswer: 0,
        explanation: "Client-side rendering generates the HTML for a web page in the browser using JavaScript.",
        difficulty: "medium",
        topic: "Web Development"
      },
      {
        question: "What is a web component?",
        options: [
          "A reusable custom element with encapsulated functionality and styling",
          "A CSS property",
          "A database system",
          "A markup language"
        ],
        correctAnswer: 0,
        explanation: "A web component is a reusable custom element with encapsulated functionality and styling.",
        difficulty: "medium",
        topic: "Web Development"
      }
    ],
    hard: [
      {
        question: "What is WebAssembly?",
        options: [
          "A binary instruction format for a stack-based virtual machine, enabling high-performance web apps",
          "A JavaScript framework for building user interfaces",
          "A CSS preprocessor",
          "A server-side rendering technique"
        ],
        correctAnswer: 0,
        explanation: "WebAssembly is a binary instruction format that allows code written in multiple languages to run on the web at near-native speed.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a service worker?",
        options: [
          "A script that runs in the background and manages caching and network requests",
          "A CSS property for responsive design",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A service worker is a background script that enables features like offline support and push notifications.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a web socket?",
        options: [
          "A protocol for full-duplex communication between client and server",
          "A CSS selector for web components",
          "A JavaScript function for DOM manipulation",
          "A database connection pool"
        ],
        correctAnswer: 0,
        explanation: "Web sockets provide a persistent, full-duplex communication channel between client and server.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is SSR (Server Side Rendering)?",
        options: [
          "Rendering web pages on the server before sending them to the client",
          "Rendering web pages in the browser using JavaScript",
          "A CSS preprocessor",
          "A database query optimization"
        ],
        correctAnswer: 0,
        explanation: "SSR generates the HTML for a web page on the server and sends it to the client, improving performance and SEO.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is hydration in web development?",
        options: [
          "The process of attaching event listeners to server-rendered HTML",
          "A CSS property for fluid layouts",
          "A database normalization technique",
          "A JavaScript memory management process"
        ],
        correctAnswer: 0,
        explanation: "Hydration attaches event listeners to server-rendered HTML, making it interactive on the client side.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is code splitting?",
        options: [
          "A technique to split code into smaller bundles for faster loading",
          "A CSS property for multi-column layouts",
          "A database sharding method",
          "A JavaScript function for string manipulation"
        ],
        correctAnswer: 0,
        explanation: "Code splitting divides code into smaller bundles, improving load times and performance.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is tree shaking?",
        options: [
          "A process to remove unused code from a JavaScript bundle",
          "A CSS animation technique",
          "A database indexing method",
          "A server-side rendering optimization"
        ],
        correctAnswer: 0,
        explanation: "Tree shaking eliminates unused code from JavaScript bundles, reducing file size.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a virtual DOM?",
        options: [
          "An in-memory representation of the real DOM used for efficient updates",
          "A CSS property for 3D layouts",
          "A database schema",
          "A server-side rendering technique"
        ],
        correctAnswer: 0,
        explanation: "The virtual DOM is an in-memory representation of the real DOM, allowing efficient updates and rendering.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a shadow DOM?",
        options: [
          "A web standard that enables encapsulation of DOM and CSS",
          "A CSS property for drop shadows",
          "A database backup method",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "The shadow DOM allows encapsulation of DOM and CSS for web components, preventing style leakage.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a custom element?",
        options: [
          "A user-defined HTML element with custom behavior",
          "A CSS selector for custom styles",
          "A database table",
          "A JavaScript built-in object"
        ],
        correctAnswer: 0,
        explanation: "Custom elements are user-defined HTML elements with custom behavior, part of the Web Components standard.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a micro frontend?",
        options: [
          "An architectural style where a frontend app is decomposed into smaller, independent pieces",
          "A CSS framework for small screens",
          "A database partitioning method",
          "A JavaScript minification tool"
        ],
        correctAnswer: 0,
        explanation: "Micro frontends decompose a frontend app into smaller, independently deployable pieces.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is static site generation?",
        options: [
          "A method of pre-rendering web pages at build time",
          "A CSS property for fixed layouts",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "Static site generation pre-renders web pages at build time, resulting in fast, static HTML files.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is JAMstack?",
        options: [
          "A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup",
          "A CSS framework",
          "A database system",
          "A server-side language"
        ],
        correctAnswer: 0,
        explanation: "JAMstack is a web development architecture based on JavaScript, APIs, and Markup.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is GraphQL?",
        options: [
          "A query language for APIs and a runtime for executing those queries",
          "A CSS preprocessor",
          "A database migration tool",
          "A JavaScript testing framework"
        ],
        correctAnswer: 0,
        explanation: "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a headless CMS?",
        options: [
          "A content management system that provides content via an API",
          "A CSS framework for content styling",
          "A database backup tool",
          "A JavaScript animation library"
        ],
        correctAnswer: 0,
        explanation: "A headless CMS manages content and provides it via an API, decoupled from the presentation layer.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a content delivery network (CDN)?",
        options: [
          "A network of servers that deliver content to users based on their geographic location",
          "A CSS property for content alignment",
          "A database replication method",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A CDN is a network of servers that deliver content to users based on their location, improving speed and reliability.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is cross-origin resource sharing (CORS)?",
        options: [
          "A mechanism that allows restricted resources on a web page to be requested from another domain",
          "A CSS property for cross-browser compatibility",
          "A database sharding method",
          "A JavaScript function for string manipulation"
        ],
        correctAnswer: 0,
        explanation: "CORS is a security feature that allows or restricts resources requested from another domain.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a web manifest?",
        options: [
          "A JSON file that provides metadata for a web application",
          "A CSS file for web styling",
          "A database schema",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A web manifest is a JSON file that provides metadata for a web application, enabling features like 'add to home screen'.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is a lighthouse audit?",
        options: [
          "An automated tool for improving the quality of web pages",
          "A CSS property for light effects",
          "A database migration tool",
          "A JavaScript testing framework"
        ],
        correctAnswer: 0,
        explanation: "Lighthouse is an automated tool for auditing performance, accessibility, and SEO of web pages.",
        difficulty: "hard",
        topic: "Web Development"
      },
      {
        question: "What is accessibility (a11y) in web development?",
        options: [
          "The practice of making web content usable by people with disabilities",
          "A CSS property for alignment",
          "A database backup method",
          "A JavaScript animation library"
        ],
        correctAnswer: 0,
        explanation: "Accessibility (a11y) ensures web content is usable by people with disabilities.",
        difficulty: "hard",
        topic: "Web Development"
      }
    ]
  },
  'Cloud Computing': {
    easy: [
      {
        question: "What is cloud computing?",
        options: [
          "The delivery of computing services over the internet",
          "A type of programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "Cloud computing is the delivery of computing services like servers, storage, databases, networking, software, over the internet.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a virtual machine?",
        options: [
          "A software emulation of a physical computer",
          "A type of database",
          "A programming language",
          "A web server"
        ],
        correctAnswer: 0,
        explanation: "A virtual machine is a software emulation of a physical computer that runs an operating system and applications.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a container?",
        options: [
          "A lightweight, standalone, executable package of software",
          "A type of database",
          "A programming language",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "A container is a lightweight, standalone, executable package that includes everything needed to run a piece of software.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is SaaS?",
        options: [
          "Software as a Service",
          "Storage as a Service",
          "Server as a Service",
          "Security as a Service"
        ],
        correctAnswer: 0,
        explanation: "SaaS stands for Software as a Service, a cloud computing model that delivers software over the internet.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is PaaS?",
        options: [
          "Platform as a Service",
          "Programming as a Service",
          "Process as a Service",
          "Performance as a Service"
        ],
        correctAnswer: 0,
        explanation: "PaaS stands for Platform as a Service, providing a platform allowing customers to develop, run, and manage applications.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is IaaS?",
        options: [
          "Infrastructure as a Service",
          "Internet as a Service",
          "Integration as a Service",
          "Information as a Service"
        ],
        correctAnswer: 0,
        explanation: "IaaS stands for Infrastructure as a Service, providing virtualized computing resources over the internet.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a public cloud?",
        options: [
          "A cloud service offered over the public internet and shared across organizations",
          "A cloud service used only by one organization",
          "A cloud service for private use",
          "A cloud service for government use"
        ],
        correctAnswer: 0,
        explanation: "A public cloud is a cloud service offered over the public internet and shared by multiple organizations.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a private cloud?",
        options: [
          "A cloud service used exclusively by one organization",
          "A cloud service shared by multiple organizations",
          "A cloud service for public use",
          "A cloud service for government use"
        ],
        correctAnswer: 0,
        explanation: "A private cloud is a cloud service used exclusively by one organization.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a hybrid cloud?",
        options: [
          "A combination of public and private cloud services",
          "A cloud service for government use",
          "A cloud service for only one organization",
          "A cloud service for only public use"
        ],
        correctAnswer: 0,
        explanation: "A hybrid cloud combines public and private cloud services, allowing data and applications to be shared between them.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud provider?",
        options: [
          "A company that offers cloud computing services",
          "A type of database",
          "A programming language",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "A cloud provider is a company that offers cloud computing services, such as AWS, Azure, or Google Cloud.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is AWS?",
        options: [
          "Amazon Web Services, a cloud computing platform",
          "A programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "AWS stands for Amazon Web Services, a comprehensive cloud computing platform by Amazon.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is Microsoft Azure?",
        options: [
          "A cloud computing platform by Microsoft",
          "A programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "Microsoft Azure is a cloud computing platform and service created by Microsoft.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is Google Cloud Platform?",
        options: [
          "A cloud computing platform by Google",
          "A programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "Google Cloud Platform is a suite of cloud computing services offered by Google.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is serverless computing?",
        options: [
          "A cloud-computing model where the cloud provider manages the server",
          "A programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "Serverless computing allows developers to build and run applications without managing servers.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud region?",
        options: [
          "A geographic area where cloud resources are hosted",
          "A type of database",
          "A programming language",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "A cloud region is a geographic area where cloud resources are physically hosted.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud availability zone?",
        options: [
          "A distinct location within a cloud region with independent power and networking",
          "A type of database",
          "A programming language",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "A cloud availability zone is a distinct location within a region, designed for high availability.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a load balancer in cloud?",
        options: [
          "A service that distributes incoming network traffic across multiple servers",
          "A programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "A load balancer distributes incoming network traffic across multiple servers to ensure reliability and performance.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is cloud storage?",
        options: [
          "A service that allows data to be stored and accessed over the internet",
          "A programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "Cloud storage allows data to be stored and accessed over the internet.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud database?",
        options: [
          "A database service built and accessed through a cloud platform",
          "A programming language",
          "A web browser",
          "A physical server"
        ],
        correctAnswer: 0,
        explanation: "A cloud database is a database service built and accessed through a cloud platform.",
        difficulty: "easy",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud API?",
        options: [
          "An application programming interface for interacting with cloud services",
          "A programming language",
          "A database system",
          "A web browser"
        ],
        correctAnswer: 0,
        explanation: "A cloud API is an interface that allows interaction with cloud services programmatically.",
        difficulty: "easy",
        topic: "Cloud Computing"
      }
    ],
    medium: [
      {
        question: "What is auto-scaling in cloud?",
        options: [
          "Adding more machines to handle increased load",
          "Upgrading the CPU of a single machine",
          "Reducing the number of servers",
          "Compressing data to save space"
        ],
        correctAnswer: 0,
        explanation: "Horizontal scaling means adding more machines to handle increased load, as opposed to vertical scaling which upgrades a single machine.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is cloud orchestration?",
        options: [
          "The process of managing and automating the deployment, scaling, and management of cloud resources",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "Cloud orchestration is the process of managing and automating the deployment, scaling, and management of cloud resources.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud function?",
        options: [
          "A serverless function that runs in response to an event",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud function is a serverless function that runs in response to an event, often used for backend logic.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a managed service?",
        options: [
          "A service where the cloud provider manages the infrastructure and operations",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A managed service is a service where the cloud provider manages the infrastructure and operations, often used for backend services.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a VPC?",
        options: [
          "A virtual private cloud, a network configuration within a cloud provider's infrastructure",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A VPC (Virtual Private Cloud) is a virtual network configuration within a cloud provider's infrastructure, allowing for secure and isolated network environments.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud firewall?",
        options: [
          "A security service that controls incoming and outgoing network traffic",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud firewall is a security service that controls incoming and outgoing network traffic, providing an additional layer of security.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a CDN?",
        options: [
          "A content delivery network that caches content and delivers it to users based on their geographic location",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A CDN (Content Delivery Network) is a network of servers that caches content and delivers it to users based on their geographic location, improving performance and reliability.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud migration?",
        options: [
          "The process of moving data and applications from one cloud provider to another",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud migration is the process of moving data and applications from one cloud provider to another, often for scalability or cost reasons.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a multi-cloud strategy?",
        options: [
          "Using multiple cloud providers to achieve a specific goal",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A multi-cloud strategy involves using multiple cloud providers to achieve a specific goal, often for redundancy or flexibility.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud-native application?",
        options: [
          "An application designed to run on cloud infrastructure",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud-native application is an application designed to run on cloud infrastructure, often using microservices architecture.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a service mesh?",
        options: [
          "A layer of infrastructure that manages service-to-service communication",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A service mesh is a layer of infrastructure that manages service-to-service communication, providing features like traffic management, security, and observability.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud billing model?",
        options: [
          "The way cloud resources are billed and paid for",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud billing model is the way cloud resources are billed and paid for, often based on usage or reserved instances.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a spot instance?",
        options: [
          "An instance that runs when there is unused capacity in the cloud",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A spot instance is an instance that runs when there is unused capacity in the cloud, offering a discount compared to on-demand instances.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a reserved instance?",
        options: [
          "An instance that is purchased for a fixed period of time",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A reserved instance is an instance that is purchased for a fixed period of time, offering a discount compared to on-demand instances.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud SLA?",
        options: [
          "A service level agreement that defines the level of service expected from a cloud provider",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud SLA (Service Level Agreement) is a service level agreement that defines the level of service expected from a cloud provider.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud monitoring tool?",
        options: [
          "A tool that monitors cloud resources and provides alerts",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud monitoring tool is a tool that monitors cloud resources and provides alerts, helping to ensure high availability and performance.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud backup?",
        options: [
          "The process of backing up data to a remote location",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud backup is the process of backing up data to a remote location, often using automated tools to ensure data consistency and availability.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud disaster recovery?",
        options: [
          "The process of recovering from a disaster by using cloud resources",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud disaster recovery is the process of recovering from a disaster by using cloud resources, often involving automated failover and data replication.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud IAM?",
        options: [
          "A service that manages access to cloud resources",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud IAM (Identity and Access Management) service is a service that manages access to cloud resources, providing features like role-based access control and multi-factor authentication.",
        difficulty: "medium",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud resource group?",
        options: [
          "A collection of cloud resources that share the same lifecycle",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud resource group is a collection of cloud resources that share the same lifecycle, allowing for easier management and cost optimization.",
        difficulty: "medium",
        topic: "Cloud Computing"
      }
    ],
    hard: [
      {
        question: "What is Kubernetes?",
        options: [
          "An open-source container orchestration platform",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and operations of application containers across clusters of hosts.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is Docker Swarm?",
        options: [
          "A container orchestration platform by Docker",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "Docker Swarm is a container orchestration platform by Docker, allowing for easy deployment and scaling of containerized applications.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is OpenStack?",
        options: [
          "An open-source cloud operating system",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "OpenStack is an open-source cloud operating system that provides a flexible and scalable platform for managing cloud resources.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is cloud bursting?",
        options: [
          "The process of using cloud resources to handle peak loads",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "Cloud bursting is the process of using cloud resources to handle peak loads, allowing for cost savings and increased scalability.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is edge computing?",
        options: [
          "The practice of running applications closer to the data source",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "Edge computing is the practice of running applications closer to the data source, reducing latency and improving performance.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a service broker in cloud?",
        options: [
          "A service that connects applications to cloud services",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A service broker is a service that connects applications to cloud services, providing a unified interface for accessing various cloud providers.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud hypervisor?",
        options: [
          "Software that enables virtualization of hardware",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud hypervisor is software that enables virtualization of hardware, allowing multiple operating systems to run on a single physical machine.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud load balancer algorithm?",
        options: [
          "The algorithm used to distribute incoming traffic across multiple servers",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud load balancer algorithm is the algorithm used to distribute incoming traffic across multiple servers, ensuring high availability and performance.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud-native CI/CD pipeline?",
        options: [
          "The process of building, testing, and deploying applications in a cloud-native environment",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud-native CI/CD pipeline is the process of building, testing, and deploying applications in a cloud-native environment, often using tools like Jenkins, GitLab CI, and Kubernetes.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud security posture management (CSPM)?",
        options: [
          "The practice of managing and monitoring cloud resources to ensure security",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud security posture management (CSPM) is the practice of managing and monitoring cloud resources to ensure security, often involving tools like AWS Config, Terraform, and Prometheus.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud access security broker (CASB)?",
        options: [
          "A service that provides cloud-native security for applications",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud access security broker (CASB) is a service that provides cloud-native security for applications, often used to enforce security policies and monitor cloud usage.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud service mesh?",
        options: [
          "A layer of infrastructure that manages service-to-service communication",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud service mesh is a layer of infrastructure that manages service-to-service communication, providing features like traffic management, security, and observability.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a serverless framework?",
        options: [
          "A framework that simplifies the development and deployment of serverless applications",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A serverless framework is a framework that simplifies the development and deployment of serverless applications, often using tools like AWS SAM, Serverless Framework, and Terraform.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud function cold start?",
        options: [
          "The time it takes for a cloud function to start up",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud function cold start is the time it takes for a cloud function to start up, often affecting latency and cost.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud tenancy model?",
        options: [
          "The way cloud resources are shared among users",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud tenancy model is the way cloud resources are shared among users, often affecting cost and scalability.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud cost optimization?",
        options: [
          "The practice of minimizing cloud costs while maximizing performance",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud cost optimization is the practice of minimizing cloud costs while maximizing performance, often involving tools like AWS Cost Explorer, Terraform, and Prometheus.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud compliance standard?",
        options: [
          "The standards and regulations that cloud providers must adhere to",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud compliance standard is the standards and regulations that cloud providers must adhere to, often involving tools like AWS Artifact, Terraform, and CIS-AWS.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud infrastructure as code?",
        options: [
          "The practice of managing cloud infrastructure through code",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud infrastructure as code is the practice of managing cloud infrastructure through code, often using tools like Terraform, CloudFormation, and Ansible.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud API gateway?",
        options: [
          "A service that provides a unified interface for accessing multiple cloud services",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud API gateway is a service that provides a unified interface for accessing multiple cloud services, often used for API management and security.",
        difficulty: "hard",
        topic: "Cloud Computing"
      },
      {
        question: "What is a cloud-native storage solution?",
        options: [
          "A storage solution designed for cloud-native applications",
          "A method for encrypting data",
          "A database migration tool",
          "A JavaScript event handler"
        ],
        correctAnswer: 0,
        explanation: "A cloud-native storage solution is a storage solution designed for cloud-native applications, often using object storage and cloud-specific features.",
        difficulty: "hard",
        topic: "Cloud Computing"
      }
    ]
  },
  'DevOps': {
    easy: [
      {
        question: "What is DevOps?",
        options: [
          "The practice of combining development and operations",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "DevOps is the practice of combining development and operations, emphasizing collaboration and automation.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is continuous integration?",
        options: [
          "The practice of merging code changes frequently",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Continuous integration is the practice of merging code changes frequently, often using tools like Jenkins, GitLab CI, and GitHub Actions.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is continuous delivery?",
        options: [
          "The practice of deploying code changes frequently",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Continuous delivery is the practice of deploying code changes frequently, often using tools like Jenkins, GitLab CI, and GitHub Actions.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is version control?",
        options: [
          "The practice of managing changes to code",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Version control is the practice of managing changes to code, often using tools like Git, SVN, and Mercurial.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a build pipeline?",
        options: [
          "The process of building and testing software",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A build pipeline is the process of building and testing software, often using tools like Jenkins, GitLab CI, and GitHub Actions.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a deployment pipeline?",
        options: [
          "The process of deploying software to production",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A deployment pipeline is the process of deploying software to production, often using tools like Jenkins, GitLab CI, and GitHub Actions.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a container?",
        options: [
          "A lightweight, isolated environment for running applications",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A container is a lightweight, isolated environment for running applications, often using tools like Docker, Kubernetes, and LXC.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is Docker?",
        options: [
          "A platform for developing, shipping, and running applications",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Docker is a platform for developing, shipping, and running applications, often using containers.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is Kubernetes?",
        options: [
          "An open-source container orchestration platform",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and operations of application containers across clusters of hosts.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is infrastructure as code?",
        options: [
          "The practice of managing infrastructure through code",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure as code is the practice of managing infrastructure through code, often using tools like Terraform, CloudFormation, and Ansible.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a configuration management tool?",
        options: [
          "A tool for managing infrastructure configurations",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A configuration management tool is a tool for managing infrastructure configurations, often using tools like Ansible, Puppet, and Chef.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is monitoring in DevOps?",
        options: [
          "The practice of monitoring systems and services",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Monitoring in DevOps is the practice of monitoring systems and services, often using tools like Prometheus, Grafana, and ELK stack.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is logging?",
        options: [
          "The practice of recording system events",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Logging is the practice of recording system events, often using tools like ELK stack, Splunk, and Graylog.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a rollback?",
        options: [
          "The practice of reverting to a previous version of code",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A rollback is the practice of reverting to a previous version of code, often used to recover from failed deployments.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a blue-green deployment?",
        options: [
          "The practice of deploying a new version of an application alongside the current version",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A blue-green deployment is the practice of deploying a new version of an application alongside the current version, allowing for zero-downtime deployments.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a canary deployment?",
        options: [
          "The practice of deploying a new version of an application to a small percentage of users",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A canary deployment is the practice of deploying a new version of an application to a small percentage of users, allowing for controlled rollouts and risk assessment.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a release management?",
        options: [
          "The practice of managing the release of new software versions",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Release management is the practice of managing the release of new software versions, often using tools like Jenkins, GitLab CI, and GitHub Actions.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a cloud provider?",
        options: [
          "A company that offers cloud computing services",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A cloud provider is a company that offers cloud computing services, such as AWS, Azure, or Google Cloud.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a microservice?",
        options: [
          "An architectural style where services are independently deployable and replaceable",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A microservice is an architectural style where services are independently deployable and replaceable, often using tools like Docker, Kubernetes, and Spring Boot.",
        difficulty: "easy",
        topic: "DevOps"
      },
      {
        question: "What is a service mesh?",
        options: [
          "A layer of infrastructure that manages service-to-service communication",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A service mesh is a layer of infrastructure that manages service-to-service communication, providing features like traffic management, security, and observability.",
        difficulty: "easy",
        topic: "DevOps"
      }
    ],
    medium: [
      {
        question: "What is a CI/CD pipeline?",
        options: [
          "The process of building, testing, and deploying software",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A CI/CD pipeline is the process of building, testing, and deploying software, often using tools like Jenkins, GitLab CI, and GitHub Actions.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Jenkins?",
        options: [
          "An open-source automation server",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Jenkins is an open-source automation server that can be used for continuous integration and continuous delivery (CI/CD) pipelines.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is GitLab CI?",
        options: [
          "A CI/CD platform by GitLab",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "GitLab CI is a CI/CD platform by GitLab, allowing for easy integration with Git repositories and automated workflows.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is CircleCI?",
        options: [
          "A CI/CD platform by CircleCI",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "CircleCI is a CI/CD platform by CircleCI, allowing for easy integration with Git repositories and automated workflows.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Travis CI?",
        options: [
          "A CI/CD platform by Travis CI",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Travis CI is a CI/CD platform by Travis CI, allowing for easy integration with Git repositories and automated workflows.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Ansible?",
        options: [
          "An open-source automation tool",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Ansible is an open-source automation tool that can be used for configuration management, application deployment, and more.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Chef?",
        options: [
          "An open-source configuration management tool",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Chef is an open-source configuration management tool that can be used for infrastructure as code and application deployment.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Puppet?",
        options: [
          "An open-source configuration management tool",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Puppet is an open-source configuration management tool that can be used for infrastructure as code and application deployment.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Terraform?",
        options: [
          "An open-source infrastructure as code tool",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Terraform is an open-source infrastructure as code tool that can be used for infrastructure as code and application deployment.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Helm?",
        options: [
          "A package manager for Kubernetes",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Helm is a package manager for Kubernetes that can be used for application deployment and management.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Prometheus?",
        options: [
          "An open-source monitoring system",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Prometheus is an open-source monitoring system that can be used for monitoring and alerting in a DevOps environment.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Grafana?",
        options: [
          "An open-source analytics platform",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Grafana is an open-source analytics platform that can be used for monitoring and alerting in a DevOps environment.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is ELK stack?",
        options: [
          "Elasticsearch, Logstash, and Kibana",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "ELK stack is a combination of Elasticsearch, Logstash, and Kibana, often used for log management and analytics.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is Splunk?",
        options: [
          "A software platform for machine data analytics",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Splunk is a software platform for machine data analytics that can be used for log management, security monitoring, and more.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is a deployment strategy?",
        options: [
          "The practice of deploying software in different environments",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A deployment strategy is the practice of deploying software in different environments, often using tools like Jenkins, GitLab CI, and GitHub Actions.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is a rolling update?",
        options: [
          "The practice of gradually updating a service in a rolling fashion",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A rolling update is the practice of gradually updating a service in a rolling fashion, often used for zero-downtime deployments.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is a feature flag?",
        options: [
          "A way to enable or disable features in code",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A feature flag is a way to enable or disable features in code, often used for gradual rollouts and A/B testing.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is a secret management tool?",
        options: [
          "A tool for managing secrets like API keys and passwords",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A secret management tool is a tool for managing secrets like API keys and passwords, often used for secure configuration management.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is a container registry?",
        options: [
          "A service for storing and managing container images",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A container registry is a service for storing and managing container images, often using tools like Docker Hub, Google Container Registry, and AWS ECR.",
        difficulty: "medium",
        topic: "DevOps"
      },
      {
        question: "What is a load balancer in DevOps?",
        options: [
          "A service that distributes incoming traffic across multiple servers",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A load balancer distributes incoming traffic across multiple servers to ensure reliability and performance, often used in DevOps environments.",
        difficulty: "medium",
        topic: "DevOps"
      }
    ],
    hard: [
      {
        question: "What is immutable infrastructure?",
        options: [
          "The practice of managing infrastructure as code",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Immutable infrastructure is the practice of managing infrastructure as code, often using tools like Terraform, CloudFormation, and Ansible.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a service discovery?",
        options: [
          "The practice of finding and registering services",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Service discovery is the practice of finding and registering services, often using tools like Consul, Eureka, and Zookeeper.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a distributed tracing?",
        options: [
          "The practice of tracing requests across services",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Distributed tracing is the practice of tracing requests across services, often using tools like Jaeger, Zipkin, and New Relic.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is chaos engineering?",
        options: [
          "The practice of intentionally introducing chaos to test system resilience",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Chaos engineering is the practice of intentionally introducing chaos to test system resilience, often using tools like Chaos Monkey, Gremlin, and Litmus.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a service mesh architecture?",
        options: [
          "The architecture of a service mesh",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A service mesh architecture is the architecture of a service mesh, often using tools like Istio, Linkerd, and Envoy.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a sidecar pattern in DevOps?",
        options: [
          "The pattern of running additional services alongside main services",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A sidecar pattern in DevOps is the pattern of running additional services alongside main services, often used for observability and security.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a blue/green deployment strategy?",
        options: [
          "The strategy of deploying a new version of an application alongside the current version",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A blue/green deployment strategy is the strategy of deploying a new version of an application alongside the current version, allowing for zero-downtime deployments.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a canary release?",
        options: [
          "The practice of deploying a new version of an application to a small percentage of users",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A canary release is the practice of deploying a new version of an application to a small percentage of users, allowing for controlled rollouts and risk assessment.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a rollback strategy?",
        options: [
          "The practice of reverting to a previous version of code",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A rollback strategy is the practice of reverting to a previous version of code, often used to recover from failed deployments.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a disaster recovery plan?",
        options: [
          "The practice of planning for and responding to a disaster",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A disaster recovery plan is the practice of planning for and responding to a disaster, often involving tools like AWS Disaster Recovery, Azure Site Recovery, and Google Cloud Spanner.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a self-healing system?",
        options: [
          "The practice of systems automatically recovering from failures",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A self-healing system is the practice of systems automatically recovering from failures, often using tools like Prometheus, Grafana, and ELK stack.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a scaling policy?",
        options: [
          "The practice of managing the scaling of services",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A scaling policy is the practice of managing the scaling of services, often using tools like Kubernetes, Istio, and Prometheus.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a custom resource definition (CRD)?",
        options: [
          "A way to define custom resources in Kubernetes",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A custom resource definition (CRD) is a way to define custom resources in Kubernetes, allowing for custom resource types and custom controllers.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a stateful set in Kubernetes?",
        options: [
          "A type of Kubernetes resource that manages stateful applications",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A stateful set in Kubernetes is a type of Kubernetes resource that manages stateful applications, often used for databases and other stateful services.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a pod in Kubernetes?",
        options: [
          "A basic unit of deployment in Kubernetes",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A pod in Kubernetes is a basic unit of deployment, representing a single instance of a containerized application.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a node in Kubernetes?",
        options: [
          "A worker node in a Kubernetes cluster",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A node in Kubernetes is a worker node in a Kubernetes cluster, representing a physical or virtual machine.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a cluster in Kubernetes?",
        options: [
          "A group of nodes in a Kubernetes cluster",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A cluster in Kubernetes is a group of nodes in a Kubernetes cluster, representing a group of physical or virtual machines.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a persistent volume?",
        options: [
          "A way to persist data across multiple nodes in a Kubernetes cluster",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A persistent volume is a way to persist data across multiple nodes in a Kubernetes cluster, allowing for stateful applications and data persistence.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a network policy in Kubernetes?",
        options: [
          "A way to define network policies in Kubernetes",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A network policy in Kubernetes is a way to define network policies in Kubernetes, allowing for fine-grained control over network traffic.",
        difficulty: "hard",
        topic: "DevOps"
      },
      {
        question: "What is a Helm chart?",
        options: [
          "A package for deploying applications on Kubernetes",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A Helm chart is a package for deploying applications on Kubernetes, allowing for easy deployment and management of applications.",
        difficulty: "hard",
        topic: "DevOps"
      }
    ]
  },
  'Cybersecurity': {
    easy: [
      {
        question: "What is cybersecurity?",
        options: [
          "The practice of protecting systems and data from attacks",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Cybersecurity is the practice of protecting systems and data from attacks, often involving tools like firewalls, antivirus software, and intrusion detection systems.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a computer virus?",
        options: [
          "A program that can replicate itself and spread to other computers",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A computer virus is a program that can replicate itself and spread to other computers, often using email attachments or malicious websites.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is malware?",
        options: [
          "Any software that is harmful or malicious",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Malware is any software that is harmful or malicious, often used to refer to viruses, worms, and Trojan horses.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a firewall?",
        options: [
          "A network security device that controls incoming and outgoing network traffic",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A firewall is a network security device that controls incoming and outgoing network traffic, often used to prevent unauthorized access to a network.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a password?",
        options: [
          "A secret string of characters used to authenticate a user",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A password is a secret string of characters used to authenticate a user, often used for login and access control.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is phishing?",
        options: [
          "The practice of tricking users into revealing sensitive information",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Phishing is the practice of tricking users into revealing sensitive information, often using social engineering techniques.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is two-factor authentication?",
        options: [
          "The practice of requiring two forms of authentication for access",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Two-factor authentication is the practice of requiring two forms of authentication for access, often using a code sent to a secondary device.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is encryption?",
        options: [
          "The practice of encoding data to prevent unauthorized access",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Encryption is the practice of encoding data to prevent unauthorized access, often using algorithms like AES, RSA, and ECC.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a hacker?",
        options: [
          "An individual who seeks to gain unauthorized access to systems",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A hacker is an individual who seeks to gain unauthorized access to systems, often using their technical skills to exploit vulnerabilities.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is antivirus software?",
        options: [
          "Software designed to detect and remove malware",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Antivirus software is designed to detect and remove malware, often used to protect systems from viruses, worms, and Trojan horses.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a security patch?",
        options: [
          "A small update to a software application that fixes a security vulnerability",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A security patch is a small update to a software application that fixes a security vulnerability, often used to patch known vulnerabilities.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a brute force attack?",
        options: [
          "An attack where an attacker tries many different passwords to gain access",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A brute force attack is an attack where an attacker tries many different passwords to gain access, often using automated tools.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a security breach?",
        options: [
          "An unauthorized access to a system or data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A security breach is an unauthorized access to a system or data, often involving unauthorized access to sensitive information.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a vulnerability?",
        options: [
          "A weakness in a system or application that can be exploited",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A vulnerability is a weakness in a system or application that can be exploited, often involving a security flaw or misconfiguration.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a threat?",
        options: [
          "Any potential risk to a system or data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A threat is any potential risk to a system or data, often involving malicious actors or external factors.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a risk in cybersecurity?",
        options: [
          "The likelihood of a security breach",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A risk in cybersecurity is the likelihood of a security breach, often involving factors like the complexity of the system, the availability of backups, and the effectiveness of security measures.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a digital certificate?",
        options: [
          "A document that proves the authenticity of a user or device",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A digital certificate is a document that proves the authenticity of a user or device, often used for secure communication and authentication.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a secure connection?",
        options: [
          "A connection that is encrypted and authenticated",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A secure connection is a connection that is encrypted and authenticated, often using protocols like HTTPS, SSH, and SSL.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is HTTPS?",
        options: [
          "A secure version of HTTP",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "HTTPS is a secure version of HTTP, using encryption to protect data in transit.",
        difficulty: "easy",
        topic: "Cybersecurity"
      },
      {
        question: "What is a security token?",
        options: [
          "A small piece of data used for authentication",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A security token is a small piece of data used for authentication, often used for single sign-on (SSO) and multi-factor authentication (MFA).",
        difficulty: "easy",
        topic: "Cybersecurity"
      }
    ],
    medium: [
      {
        question: "What is a DDoS attack?",
        options: [
          "An attack where a large number of requests are sent to a website or service",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A DDoS attack is an attack where a large number of requests are sent to a website or service, overwhelming the network and causing service disruption.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is ransomware?",
        options: [
          "Malware that encrypts files and demands a ransom for decryption",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Ransomware is malware that encrypts files and demands a ransom for decryption, often using social engineering techniques to trick users into paying the ransom.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a trojan horse?",
        options: [
          "Malware disguised as legitimate software",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A trojan horse is malware disguised as legitimate software, often used to gain unauthorized access to a system.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is spyware?",
        options: [
          "Software that secretly monitors user activity",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Spyware is software that secretly monitors user activity, often used to track user behavior and collect sensitive information.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is adware?",
        options: [
          "Software that displays advertisements to users",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Adware is software that displays advertisements to users, often bundled with free software or installed without user consent.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a rootkit?",
        options: [
          "Malware that hides in the operating system and is difficult to detect",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A rootkit is malware that hides in the operating system and is difficult to detect, often used for persistent access to a system.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a backdoor?",
        options: [
          "A hidden entry point into a system",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A backdoor is a hidden entry point into a system, often used for unauthorized access.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a keylogger?",
        options: [
          "Software that records keystrokes on a computer",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A keylogger is software that records keystrokes on a computer, often used to steal passwords and other sensitive information.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a man-in-the-middle attack?",
        options: [
          "An attack where an attacker intercepts communications between two parties",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A man-in-the-middle attack is an attack where an attacker intercepts communications between two parties, often using a proxy server to eavesdrop on the conversation.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is SQL injection?",
        options: [
          "An attack where malicious SQL code is injected into a SQL query",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "SQL injection is an attack where malicious SQL code is injected into a SQL query, often used to gain unauthorized access to a database.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is cross-site scripting (XSS)?",
        options: [
          "An attack where malicious JavaScript code is injected into a web page",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Cross-site scripting (XSS) is an attack where malicious JavaScript code is injected into a web page, often used to steal cookies and other sensitive information.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a security audit?",
        options: [
          "The practice of reviewing security policies and procedures",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A security audit is the practice of reviewing security policies and procedures, often used to identify vulnerabilities and improve security.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is penetration testing?",
        options: [
          "The practice of testing a system's defenses by simulating an attack",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Penetration testing is the practice of testing a system's defenses by simulating an attack, often used to identify vulnerabilities and improve security.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is social engineering?",
        options: [
          "The practice of manipulating people to gain unauthorized access",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Social engineering is the practice of manipulating people to gain unauthorized access, often using psychological tactics to deceive users.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a sandbox in cybersecurity?",
        options: [
          "A controlled environment where malicious software can be safely executed",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A sandbox is a controlled environment where malicious software can be safely executed, often used for testing and analysis of unknown software.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a security policy?",
        options: [
          "A set of rules and guidelines for security practices",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A security policy is a set of rules and guidelines for security practices, often used to define acceptable behavior and enforce security measures.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a honeypot?",
        options: [
          "A decoy system used to attract and analyze attacks",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A honeypot is a decoy system used to attract and analyze attacks, often used to monitor and learn about attack patterns and techniques.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a botnet?",
        options: [
          "A network of compromised computers controlled by a single entity",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A botnet is a network of compromised computers controlled by a single entity, often used for distributed denial-of-service (DDoS) attacks and other malicious activities.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is a zero-day exploit?",
        options: [
          "An exploit that is discovered before the vendor has released a patch",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A zero-day exploit is an exploit that is discovered before the vendor has released a patch, often used to target unpatched systems.",
        difficulty: "medium",
        topic: "Cybersecurity"
      },
      {
        question: "What is multi-factor authentication?",
        options: [
          "The practice of requiring multiple forms of authentication for access",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Multi-factor authentication is the practice of requiring multiple forms of authentication for access, often using a code sent to a secondary device and a password.",
        difficulty: "medium",
        topic: "Cybersecurity"
      }
    ],
    hard: [
      {
        question: "What is advanced persistent threat (APT)?",
        options: [
          "An attack that is well-planned and executed over a long period of time",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Advanced persistent threat (APT) is an attack that is well-planned and executed over a long period of time, often involving multiple stages and techniques.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is cryptojacking?",
        options: [
          "Malware that uses a victim's computing resources to mine cryptocurrency",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Cryptojacking is malware that uses a victim's computing resources to mine cryptocurrency, often using a web browser exploit or a malicious script.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is buffer overflow?",
        options: [
          "An attack where an attacker writes beyond the end of a buffer",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Buffer overflow is an attack where an attacker writes beyond the end of a buffer, often used to gain unauthorized access to a system.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is privilege escalation?",
        options: [
          "The practice of gaining higher privileges than intended",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Privilege escalation is the practice of gaining higher privileges than intended, often used to gain unauthorized access to a system.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is session hijacking?",
        options: [
          "The practice of stealing a user's session information",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Session hijacking is the practice of stealing a user's session information, often using social engineering techniques to deceive users.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is DNS spoofing?",
        options: [
          "An attack where an attacker manipulates DNS responses",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "DNS spoofing is an attack where an attacker manipulates DNS responses, often used to redirect users to a malicious website.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is ARP poisoning?",
        options: [
          "An attack where an attacker manipulates ARP tables",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "ARP poisoning is an attack where an attacker manipulates ARP tables, often used to redirect traffic to a malicious host.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is steganography?",
        options: [
          "The practice of hiding information within other information",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Steganography is the practice of hiding information within other information, often used to hide sensitive data from unauthorized access.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is public key infrastructure (PKI)?",
        options: [
          "A system for managing digital certificates and public-private key pairs",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Public key infrastructure (PKI) is a system for managing digital certificates and public-private key pairs, often used for secure communication and authentication.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is elliptic curve cryptography?",
        options: [
          "A cryptographic algorithm that uses elliptic curves",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Elliptic curve cryptography is a cryptographic algorithm that uses elliptic curves, often used for secure communication and digital signatures.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a logic bomb?",
        options: [
          "Malware that executes malicious code at a specific time or condition",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A logic bomb is malware that executes malicious code at a specific time or condition, often used to cause damage or disrupt systems.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a worm?",
        options: [
          "Malware that spreads from one computer to another",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A worm is malware that spreads from one computer to another, often using email attachments or network shares to propagate.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a digital forensics investigation?",
        options: [
          "The practice of analyzing digital evidence to determine the source and nature of a security incident",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Digital forensics investigation is the practice of analyzing digital evidence to determine the source and nature of a security incident, often used to identify the attacker and recover lost data.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a security information and event management (SIEM) system?",
        options: [
          "A system for collecting, analyzing, and correlating security events",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A security information and event management (SIEM) system is a system for collecting, analyzing, and correlating security events, often used for incident detection and response.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a security operations center (SOC)?",
        options: [
          "A team of security professionals responsible for monitoring and responding to security incidents",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A security operations center (SOC) is a team of security professionals responsible for monitoring and responding to security incidents, often using tools like Splunk, ELK stack, and SIEM systems.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a red team/blue team exercise?",
        options: [
          "The practice of simulating an attack to test a system's defenses",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A red team/blue team exercise is the practice of simulating an attack to test a system's defenses, often used to identify vulnerabilities and improve security.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a cyber kill chain?",
        options: [
          "A model for understanding and predicting cyber attacks",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A cyber kill chain is a model for understanding and predicting cyber attacks, often used to identify stages of an attack and develop countermeasures.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a supply chain attack?",
        options: [
          "An attack where multiple parties are compromised",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A supply chain attack is an attack where multiple parties are compromised, often involving multiple stages and techniques.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a side-channel attack?",
        options: [
          "An attack where information is leaked through unintended channels",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A side-channel attack is an attack where information is leaked through unintended channels, often used to gain unauthorized access to a system.",
        difficulty: "hard",
        topic: "Cybersecurity"
      },
      {
        question: "What is a threat intelligence platform?",
        options: [
          "A system for collecting, analyzing, and sharing threat intelligence",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A threat intelligence platform is a system for collecting, analyzing, and sharing threat intelligence, often used for incident detection and response.",
        difficulty: "hard",
        topic: "Cybersecurity"
      }
    ]
  },
  'Machine Learning Basics': {
    easy: [
      {
        question: "What is machine learning?",
        options: [
          "The practice of teaching computers to learn from data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Machine learning is the practice of teaching computers to learn from data, often using algorithms like supervised learning, unsupervised learning, and reinforcement learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is supervised learning?",
        options: [
          "The practice of training a model on labeled data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Supervised learning is the practice of training a model on labeled data, often used for classification and regression problems.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is unsupervised learning?",
        options: [
          "The practice of training a model on unlabeled data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Unsupervised learning is the practice of training a model on unlabeled data, often used for clustering and dimensionality reduction.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a dataset?",
        options: [
          "A collection of data used for training a model",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A dataset is a collection of data used for training a model, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a feature in machine learning?",
        options: [
          "A characteristic of the data used for training a model",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A feature is a characteristic of the data used for training a model, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a label in machine learning?",
        options: [
          "The target variable in a supervised learning problem",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A label is the target variable in a supervised learning problem, often used for classification and regression problems.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a training set?",
        options: [
          "The set of data used to train a model",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A training set is the set of data used to train a model, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a test set?",
        options: [
          "The set of data used to evaluate a model",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A test set is the set of data used to evaluate a model, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a validation set?",
        options: [
          "The set of data used to tune a model's hyperparameters",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A validation set is the set of data used to tune a model's hyperparameters, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a model in machine learning?",
        options: [
          "A mathematical representation of a problem",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A model in machine learning is a mathematical representation of a problem, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is overfitting?",
        options: [
          "The practice of fitting a model too closely to the training data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Overfitting is the practice of fitting a model too closely to the training data, often resulting in poor generalization to new data.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is underfitting?",
        options: [
          "The practice of fitting a model too poorly to the training data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Underfitting is the practice of fitting a model too poorly to the training data, often resulting in poor performance on new data.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a classification problem?",
        options: [
          "A problem where the goal is to classify data into categories",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A classification problem is a problem where the goal is to classify data into categories, often used for supervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a regression problem?",
        options: [
          "A problem where the goal is to predict a continuous value",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A regression problem is a problem where the goal is to predict a continuous value, often used for supervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a clustering problem?",
        options: [
          "A problem where the goal is to group similar data points together",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A clustering problem is a problem where the goal is to group similar data points together, often used for unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a decision tree?",
        options: [
          "A flowchart-like structure used for decision making",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A decision tree is a flowchart-like structure used for decision making, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a neural network?",
        options: [
          "A type of machine learning model that is inspired by the structure of the human brain",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A neural network is a type of machine learning model that is inspired by the structure of the human brain, often used for supervised learning and unsupervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a confusion matrix?",
        options: [
          "A table used to evaluate the performance of a classification model",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A confusion matrix is a table used to evaluate the performance of a classification model, often used for supervised learning.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is accuracy in machine learning?",
        options: [
          "The percentage of correct predictions made by a model",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Accuracy is the percentage of correct predictions made by a model, often used for classification problems.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is precision and recall?",
        options: [
          "The measures of a model's performance in binary classification",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Precision and recall are the measures of a model's performance in binary classification, often used for classification problems.",
        difficulty: "easy",
        topic: "Machine Learning Basics"
      }
    ],
    medium: [
      {
        question: "What is cross-validation?",
        options: [
          "The practice of evaluating a model's performance on multiple subsets of the data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Cross-validation is the practice of evaluating a model's performance on multiple subsets of the data, often used for model selection and hyperparameter tuning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is feature engineering?",
        options: [
          "The practice of creating new features from existing data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Feature engineering is the practice of creating new features from existing data, often used for supervised learning and unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is data normalization?",
        options: [
          "The practice of scaling features to a similar range",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Data normalization is the practice of scaling features to a similar range, often used for supervised learning and unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is data augmentation?",
        options: [
          "The practice of generating new data from existing data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Data augmentation is the practice of generating new data from existing data, often used for supervised learning and unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a support vector machine (SVM)?",
        options: [
          "A type of machine learning model that finds the best hyperplane to separate classes",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A support vector machine (SVM) is a type of machine learning model that finds the best hyperplane to separate classes, often used for supervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is k-means clustering?",
        options: [
          "A type of unsupervised learning algorithm that partitions data into k clusters",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "K-means clustering is a type of unsupervised learning algorithm that partitions data into k clusters, often used for unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is principal component analysis (PCA)?",
        options: [
          "A technique for reducing the dimensionality of data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Principal component analysis (PCA) is a technique for reducing the dimensionality of data, often used for unsupervised learning and feature extraction.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is logistic regression?",
        options: [
          "A type of supervised learning algorithm that models the probability of a binary outcome",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Logistic regression is a type of supervised learning algorithm that models the probability of a binary outcome, often used for classification problems.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is linear regression?",
        options: [
          "A type of supervised learning algorithm that models the relationship between variables",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Linear regression is a type of supervised learning algorithm that models the relationship between variables, often used for regression problems.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a random forest?",
        options: [
          "An ensemble of decision trees",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A random forest is an ensemble of decision trees, often used for supervised learning and feature importance analysis.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a loss function?",
        options: [
          "A measure of how well a model's predictions match the true values",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A loss function is a measure of how well a model's predictions match the true values, often used for supervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is gradient descent?",
        options: [
          "An optimization algorithm used to minimize a loss function",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Gradient descent is an optimization algorithm used to minimize a loss function, often used for supervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a learning rate?",
        options: [
          "The step size used in the optimization algorithm",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A learning rate is the step size used in the optimization algorithm, often used for supervised learning and unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a hyperparameter?",
        options: [
          "A parameter in a machine learning model that is not learned from the data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A hyperparameter is a parameter in a machine learning model that is not learned from the data, often used for supervised learning and unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a ROC curve?",
        options: [
          "A plot of true positive rate against false positive rate",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A ROC curve is a plot of true positive rate against false positive rate, often used for binary classification problems.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is F1 score?",
        options: [
          "The harmonic mean of precision and recall",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "F1 score is the harmonic mean of precision and recall, often used for binary classification problems.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a confusion matrix used for?",
        options: [
          "To evaluate the performance of a classification model",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A confusion matrix is used to evaluate the performance of a classification model, often used for supervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a time series analysis?",
        options: [
          "The practice of analyzing time-series data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Time series analysis is the practice of analyzing time-series data, often used for supervised learning and unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a recommender system?",
        options: [
          "A system that recommends items to users based on their preferences",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A recommender system is a system that recommends items to users based on their preferences, often used for supervised learning and unsupervised learning.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is a generative model?",
        options: [
          "A type of machine learning model that generates new data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "A generative model is a type of machine learning model that generates new data, often used for unsupervised learning and generative tasks.",
        difficulty: "medium",
        topic: "Machine Learning Basics"
      }
    ],
    hard: [
      {
        question: "What is deep learning?",
        options: [
          "A type of machine learning model that is inspired by the structure of the human brain",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Deep learning is a type of machine learning model that is inspired by the structure of the human brain, often used for supervised learning and unsupervised learning.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is reinforcement learning?",
        options: [
          "The practice of training an agent to make decisions in an environment",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Reinforcement learning is the practice of training an agent to make decisions in an environment, often used for autonomous systems and game playing.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is transfer learning?",
        options: [
          "The practice of using a pre-trained model as a starting point for a new task",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Transfer learning is the practice of using a pre-trained model as a starting point for a new task, often used for supervised learning and unsupervised learning.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is ensemble learning?",
        options: [
          "The practice of combining multiple models to improve performance",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Ensemble learning is the practice of combining multiple models to improve performance, often used for supervised learning and unsupervised learning.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is gradient boosting?",
        options: [
          "An ensemble learning technique that builds trees sequentially",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Gradient boosting is an ensemble learning technique that builds trees sequentially, often used for supervised learning and regression problems.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is XGBoost?",
        options: [
          "An optimized implementation of gradient boosting",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "XGBoost is an optimized implementation of gradient boosting, often used for supervised learning and regression problems.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is LSTM?",
        options: [
          "A type of recurrent neural network that can learn long-term dependencies",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "LSTM is a type of recurrent neural network that can learn long-term dependencies, often used for sequence prediction and time-series analysis.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is convolutional neural network (CNN)?",
        options: [
          "A type of neural network that is good at image recognition",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Convolutional neural network (CNN) is a type of neural network that is good at image recognition, often used for supervised learning and unsupervised learning.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
      {
        question: "What is attention mechanism in deep learning?",
        options: [
          "A technique for focusing on relevant parts of input data",
          "A programming language",
          "A type of database",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "Attention mechanism in deep learning is a technique for focusing on relevant parts of input data, often used for supervised learning and unsupervised learning.",
        difficulty: "hard",
        topic: "Machine Learning Basics"
      },
           // ... last question object in hard array ...
           {
            question: "What is word embedding?",
            options: [
              "The practice of representing words as vectors",
              "A programming language",
              "A type of database",
              "A network protocol"
            ],
            correctAnswer: 0,
            explanation: "Word embedding is the practice of representing words as vectors, often used for supervised learning and unsupervised learning.",
            difficulty: "hard",
            topic: "Machine Learning Basics"
          }
        ] // <-- CLOSE the hard array
      }   // <-- CLOSE the "Machine Learning Basics" topic
    };    // <-- CLOSE the questionBank object
    
    export async function GET() {
      return NextResponse.json({ topics: Object.keys(questionBank) });
    }
    
    export async function POST(req: Request) {
      const body = await req.json();
      const { topic, difficulty, questionCount } = body;
    
      if (!topic || !difficulty || !questionCount) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
    
      const topicBank = questionBank[topic];
      if (!topicBank) {
        return NextResponse.json({ error: `Topic '${topic}' not found.` }, { status: 404 });
      }
    
      const questions = topicBank[difficulty.toLowerCase()];
      if (!questions) {
        return NextResponse.json({ error: `Difficulty '${difficulty}' not found for topic '${topic}'.` }, { status: 404 });
      }
    
      if (questionCount > questions.length) {
        return NextResponse.json({ error: `Only ${questions.length} questions available for topic '${topic}' and difficulty '${difficulty}'.` }, { status: 400 });
      }
    
      return NextResponse.json({
        questions: questions.slice(0, questionCount),
        totalAvailable: questions.length
      });
    }