//import { codingEssentials, competitiveProgramming, computerVisionSpecialization, cppEssentials, cppHindi, deepLearningEssentials, dsaEssentials, dsaLevelUp, dynamicProgramming, gameTheory, gitAndGithub, graphAlgorithms, machineLearningEssentials, naturalLanguageProcessing, pythonDataScience, pythonProgramming } from "../assets"
import { teamData } from "./teamData"
import { whyCMData } from './whyCMData'
import aiIcon from "../assets/course-icon/aiIcon.png"
import javaIcon from "../assets/course-icon/javaIcon.png"
import java from "../assets/course-icon/java.png"
import cppIcon from "../assets/course-icon/cppIcon.png"
import pyhthonIcon from "../assets/course-icon/pythonIcon.png"
import dsaIcon from "../assets/course-icon/dsaIcon.png"
import mernIcon from "../assets/course-icon/mernIcon.png"
import reactjsIcon from "../assets/course-icon/reactjsIcon.png"
import deepIcon from "../assets/course-icon/deepIcon.png"
import progFandamentals from "../../curriculumData/programmingFundamentals.json"
import competitiveProgramming from "../../curriculumData/competitiveProgramming.json"
import dsa from "../../curriculumData/dsa.json"
import reactjs from "../../curriculumData/reactjs.json"
import mern from "../../curriculumData/mern.json"
import datascience from "../../curriculumData/dataScience.json"
import deeplearning from "../../curriculumData/deepLearning.json"

export const courseData = [
  {
    //Programming Languages
    id: 1,
    title: "Beginner Courses",
    courses: [
      {
        courseImage: javaIcon,
        title: "Programming with Java",
        mentors: "Mentor : Naresh Saharan",
        slug: 'java-basic',
        courseDetail:
        {
          mentors: "Mentor : Naresh Saharan",
          title: "Programming with Java",
          descriptionTop: "Enter the world of programming, learn fundamental building blocks of programming & problem solving for beginners.",
          priceInfo:
          {
            current: "₹1999+taxes",
            original: "₹10,000",
          },
          learningOutcomes:
            [
              "Understand the building blocks of programming",
              "Identify how to break down a problem statement & build logical thinking mindset",
              "Concepts before you start learning programming languages and advanced topics",
              "Learn to illustrate the steps required to solve a problem",
            ],
          courseDescription:
            [
              "This is the most fundamental course for beginners. Learn the basics of programming with Java, including Loops, Functions, OOPS, and Arrays."
            ],
          instructor: [teamData[1]],
          whyUs: whyCMData,
          isProject: false,
          courseImage: java,
          courseCurriculum: progFandamentals,
        },
      },
      {
        courseImage: cppIcon,
        title: "Programming with C++",
        mentors: "Mentor : Sagar Jangra",
        slug: 'cpp-basic',
        courseDetail: {
          title: "Programming with C++",
          descriptionTop: "Beginner friendly course to learn C++ programming in a fun & easy way and enter the world of computer science!",
          priceInfo: {
            current: "₹1999+taxes",
            original: "₹10,000",
          },
          starRating: "⭐⭐⭐⭐⭐ 4.7",
          learningOutcomes: [
            "Programming Fundamentals & Concepts",
            "Complete Modern C++ Syntax",
            "C++ Standard Template Library",
            "Converting Logic into C++ Code",
            "Object Oriented Programming",
            "Problem Solving",
          ],
          courseDescription: [
            "This is the most fundamental course for beginners. Learn the basics of programming with C++, including Loops, Functions, OOPS, and Arrays."
          ],
          instructor: [teamData[1]],
          whyUs: whyCMData,
          isProject: false,
          courseImage: cppIcon,
          courseCurriculum: progFandamentals,
        },
      },
      {
        courseImage: pyhthonIcon,
        title: "Programming with Python",
        mentors: "Mentor : Sumit Tyagi",
        slug: 'python-basic',
        courseDetail: {
          title: "Programming with Python",
          descriptionTop: "Start your programming skills by learning Python3 - master data structures, OOPS, problem solving.",
          priceInfo: {
            current: "₹1999+taxes",
            original: "₹10,000",
          },
          starRating: "⭐⭐⭐⭐⭐ 4.8",
          learningOutcomes: [
            "Complete Python3 Programming",
            "Logic Building & Problem Solving",
            "Object Oriented Programming",
            "Inheritance & Polymorphism",
            "Intermediate - Advanced Python Concepts",
            "Modules & Packages",
            "File & Exception Handling",
          ],
          courseDescription: [
            "This is the most fundamental course for beginners. Learn the basics of programming with Python, including Loops, Functions, OOPS, and List."
          ],
          instructor: [teamData[0]],
          whyUs: whyCMData,
          isProject: false,
          courseImage: pyhthonIcon,
          courseCurriculum: progFandamentals,
        },
      },
    ]
  },
  {
    id: 2,
    title: "Intermediate Courses",
    courses: [
      {
        courseImage: dsaIcon,
        title: "DSA with Java",
        mentors: "Mentor : Naresh Saharan",
        slug: 'java-dsa',
        courseDetail: {
          title: "Data Structures & Algorithms with Java",
          descriptionTop: "Master core computer science concepts by mastering data structures, algorithms & problem solving using Java",
          priceInfo: {
            current: "₹4999+taxes",
            original: "₹18,560",
          },
          starRating: "⭐⭐⭐⭐⭐ 4.7",
          learningOutcomes: [
            "Core concepts & internals of Data Structures",
            "Trees, Linked Lists, Heaps, Graphs",
            "Build all data structures from scratch",
            "Object Oriented Programming Basics",
            "Learn to apply Data Structures",
            "Brute Force & Optimisation Techniques",
            "Space Time Complexity Analysis",
            "Hash Functions, Collision Handling",
            "Recursion & Backtracking",
          ],
          courseDescription: [
            "This course introduces students to essential data structures using Java.",
            "Through hands-on coding exercises, learners will explore arrays, linked lists, stacks, queues, trees, graphs, and more.",
            "Emphasis will be placed on understanding the efficiency of different data structures and algorithms, preparing students for technical interviews and real-world problem-solving.",],
          courseFeatures: [],
          instructor: [teamData[1]],
          whyUs: whyCMData,
          courseImage: dsaIcon,
          isProject: false,
          courseCurriculum: dsa,
        },
      },
      {
        courseImage: dsaIcon,
        title: "DSA with Python",
        mentors: "Mentor : Sumit Tyagi",
        slug: 'python-dsa',
        courseDetail: {
          title: "Data Structures & Algorithms with Python",
          descriptionTop: "Master problem solving for Coding Interviews, ace Data Structures & Algorithms by solving over 150 important questions!",
          priceInfo: {
            current: "₹4999+taxes",
            original: "₹18,560",
          },
          learningOutcomes: [
            "Core concepts & internals of Data Structures",
            "Trees, Linked Lists, Heaps, Graphs",
            "Build all data structures from scratch",
            "Object Oriented Programming Basics",
            "Learn to apply Data Structures",
            "Brute Force & Optimisation Techniques",
            "Space Time Complexity Analysis",
            "Hash Functions, Collision Handling",
            "Recursion & Backtracking",
          ],
          courseDescription: [
            "This course introduces students to essential data structures using Python.",
            "Through hands-on coding exercises, learners will explore arrays, linked lists, stacks, queues, trees, graphs, and more.",
            "Emphasis will be placed on understanding the efficiency of different data structures and algorithms, preparing students for technical interviews and real-world problem-solving.",],
          courseFeatures: [],
          courseDescriptionEnd: [
            "Course exercises are in C++ but programmers having experience in one or more languages (C++/Java/Python/JavaScript) can definitely do this course, provided they have fundamental understanding of data structures. The course covers both breadth & depth of topics, diving deep where-ever needed. You will also learn how to apply techniques involving like - sorting & searching algorithms, sliding window, binary search, hashing which are very important for problem solving. For advanced topics like Dynamic Programming & Graphs, the course starts from the basics & helps you master these topics from the very fundamentals.",
          ],
          instructor: [teamData[0]],
          courseImage: dsaIcon,
          whyUs: whyCMData,
          isProject: false,
          courseCurriculum: dsa,
        },
      },
      {
        courseImage: dsaIcon,
        title: "DSA with C++",
        mentors: "Mentor : Sagar Jangra",
        slug: 'cpp-programming',
        courseDetail: {
          title: "Data Structures & Algorithms with C++",
          descriptionTop: "Master coding techniques - vector, hashmap, stl,dynamic programming, data structures & algorithms",
          priceInfo: {
            current: "₹4999+taxes",
            original: "₹18,560",
          },
          learningOutcomes: [
            "Core concepts & internals of Data Structures",
            "Trees, Linked Lists, Heaps, Graphs",
            "Build all data structures from scratch",
            "Object Oriented Programming Basics",
            "Learn to apply Data Structures",
            "Brute Force & Optimisation Techniques",
            "Space Time Complexity Analysis",
            "Hash Functions, Collision Handling",
            "Recursion & Backtracking",
          ],
          courseDescription: [
            "This course introduces students to essential data structures using CPP.",
            "Through hands-on coding exercises, learners will explore arrays, linked lists, stacks, queues, trees, graphs, and more.",
            "Emphasis will be placed on understanding the efficiency of different data structures and algorithms, preparing students for technical interviews and real-world problem-solving.",],
          courseFeatures: [],
          instructor: [teamData[0]],
          whyUs: whyCMData,
          courseImage: dsaIcon,
          isProject: false,
          courseCurriculum: dsa,
        },
      },
      {
        courseImage: reactjsIcon,
        title: "Introduction to React Js",
        mentors: "Mentor : Mandeep Attri",
        slug: 'reactjs',
        courseDetail: {
          title: "Introduction to React Js",
          descriptionTop: "This course teaches you how to build dynamic web applications with React, covering essential concepts. Learn to create modern, interactive user interfaces efficiently.",
          priceInfo: {
            current: "₹4999+taxes",
            original: "₹18,560",
          },
          learningOutcomes: [
            "Master HTML and CSS to build responsive and accessible web pages.",
            "Gain proficiency in JavaScript for DOM manipulation.",
            "Asynchronous programming, and modern ES6+ features.",
            "Develop advanced React.js skills",
            "State management with Redux and server-side rendering.",
          ],
          courseDescription: [
            "This React JS course is designed to provide a comprehensive understanding of the React library and its ecosystem.",
            "You will start with the fundamentals of web development, covering HTML and CSS, before diving into JavaScript to gain a solid foundation in scripting.",
            "Throughout the course, you'll learn how to build dynamic and responsive user interfaces using React.js, leveraging components, state management, and React Hooks.",
            "You'll explore essential topics like routing with React Router, handling forms and validation, and managing global state with Redux.",
            "The course also covers advanced concepts such as server-side rendering and testing methodologies to ensure the quality of your applications.",
            "By the end of the course, you'll have the skills and knowledge to create complex, efficient web applications that can compete in today’s job market.",
            "Whether you're a beginner looking to enter the field of web development or a developer aiming to enhance your skill set with modern tools and practices, this course provides a solid foundation in React.js."],
          courseFeatures: [],
          instructor: [teamData[1]],
          whyUs: whyCMData,
          courseImage: reactjsIcon,
          isProject: false,
          courseCurriculum: reactjs,
        },
      },
      {
        courseImage: aiIcon,
        title: "Data Science and Analytics",
        mentors: "Mentor : Sumit Tyagi",
        slug: 'ai-machine-learning',
        courseDetail: {
          title: "AI and Machine Learning",
          descriptionTop: "Dive deep into game theory algorithms, learn & apply these techniques for Codeforces & Competitive Programming problems!",
          priceInfo: {
            current: "₹4999+taxes",
            original: "₹18,560",
          },
          learningOutcomes: [
            "Python Programming",
            "Data Science Libraries",
            "SQL, Statistics",
            "Deep Learning",
          ],
          courseDescription: [
            "This Data Science Mastery course is designed to provide an in-depth introduction to the world of data science, equipping you with the skills to handle and analyze data effectively.",
            "You will start by learning the fundamentals of Python programming, followed by hands-on experience with key data science libraries like NumPy, Pandas, and Plotly for data manipulation and visualization.",
            "The course dives deep into SQL for database management, along with essential statistical concepts needed for both descriptive and inferential data analysis.",
            "As you progress, you'll explore various machine learning algorithms, from regression models to decision trees and clustering techniques, applying them to solve real-world data problems.",
            "The course also covers advanced topics like neural networks and deep learning using TensorFlow and Keras, where you will work on practical projects such as facial recognition systems and sentiment analysis.",
            "By the end of the course, you will have the proficiency to manage data, apply statistical techniques, and build machine learning models, enabling you to pursue a career in data science across various industries."],
          courseFeatures: [],
          courseImage: aiIcon,
          instructor: [teamData[0]],
          whyUs: whyCMData,
          isProject: true,
          courseCurriculum: datascience,
        },
      }
    ]
  },
  {
    id: 3,
    title: "Mastery Courses",
    courses: [
      {
        courseImage: deepIcon,
        title: "AI and Deep Learning",
        mentors: "By Sumit Tyagi",
        slug: 'deep-learning',
        courseDetail: {
          title: "Deep Learning",
          descriptionTop: "This course equips learners with the skills to master Python programming, data manipulation, statistical analysis, and machine learning, preparing them for real-world applications in data science and deep learning.",
          priceInfo: {
            current: "₹9999+taxes",
            original: "₹28,560",
          },
          learningOutcomes: [
            "Proficient in Python programming, including data types, control structures, functions, and modules.",
            "Strong understanding of statistical concepts and techniques for data analysis.",
            "Experience in implementing machine learning algorithms for predictive modeling tasks.",
            "Knowledge of deep learning frameworks like TensorFlow and Keras for building neural networks.",
            "Familiarity with advanced deep learning topics, including GANs and transformers.",
            "Hands-on experience in deploying machine learning and deep learning models for real-world applications.",
            "Competence in project implementation and problem-solving within the data science domain.",
            "Ability to document and communicate technical concepts effectively."
          ],
          courseDescription: [
            "This comprehensive course provides an in-depth understanding of Python programming and its application in data science.",
            "You will explore foundational Python concepts, control flow, functions, and object-oriented programming.",
            "The course delves into advanced topics such as data manipulation with NumPy and Pandas, statistical analysis, and machine learning algorithms.",
            "Hands-on experience with deep learning principles using TensorFlow and Keras will prepare you to tackle real-world data science challenges.",
            "Ideal for aspiring data scientists, this course equips you with the skills to build innovative solutions and apply advanced techniques in your projects."],
          courseFeatures: [],
          instructor: [teamData[0]],
          whyUs: whyCMData,
          isProject: true,
          courseImage: deepIcon,
          courseCurriculum: deeplearning,
        },
      },
      {
        courseImage: mernIcon,
        title: "Mern Stack",
        mentors: "Mentor : Mandeep Attri",
        starRating: "⭐⭐⭐⭐⭐ 5.0",
        isAvailable: true,
        slug: 'mern-stack',
        courseDetail: {
          title: "Mern Stack",
          descriptionTop: "Master full-stack web development using MongoDB, Express.js, React.js, and Node.js to build dynamic, scalable applications.",
          priceInfo: {
            current: "₹9999+taxes",
            original: "₹28,560",
          },
          starRating: "⭐⭐⭐⭐⭐ 5.0",
          learningOutcomes: [
            "Proficient in HTML, CSS, and JavaScript for web development.",
            "Ability to build dynamic, single-page applications using React.js.",
            "Expertise in server-side development with Node.js and Express.js.",
            "Strong understanding of MongoDB for data management and integration.",
            "Experience with authentication and authorization techniques.",
            "Hands-on experience in project planning and implementation."
          ],
          courseDescription: [
            "The MERN Stack course offers an in-depth exploration of web development using MongoDB, Express.js, React.js, and Node.js.",
            "You will learn to create full-stack applications, from designing responsive user interfaces to building robust back-end services.",
            "The course covers essential topics including data management with MongoDB, routing and middleware with Express.js, and component-based architecture with React.js.",
            "By engaging with hands-on projects, you will gain practical experience in deploying, scaling, and securing web applications.",
            "This course is ideal for aspiring web developers looking to master the MERN stack and build real-world applications."],

          courseFeatures: [],
          instructor: [teamData[1]],
          whyUs: whyCMData,
          isProject: false,
          courseCurriculum: mern,
          courseImage: mernIcon,
        },
      },
      {
        courseImage: dsaIcon,
        title: "Competitive Programming",
        mentors: "Mentor : Naresh Saharan",
        slug: 'competitive-programming',
        courseDetail: {
          title: "Competitive Programming Essentials",
          descriptionTop: "This Competitive Programming course provides learners with essential algorithmic and problem-solving skills through comprehensive topics such as data structures, recursion, dynamic programming, and graph theory, along with practical exercises to excel in coding contests.",
          priceInfo: {
            current: "₹9,999+taxes",
            original: "₹28,560",
          },
          learningOutcomes: [
            "Proficient in analyzing and solving complex algorithmic problems efficiently.",
            "Strong understanding of data structures and their applications in problem-solving.",
            "Ability to implement various algorithms, including searching, sorting, and dynamic programming.",
            "Skilled in recursion and backtracking techniques for problem-solving.",
            "Competence in applying greedy algorithms and optimization strategies.",
            "Familiarity with advanced topics such as graphs, segment trees, and tries.",
            "Knowledge of bit manipulation and number theory concepts.",
            "Experience with exploratory data analysis techniques and their practical applications.",
            "Ability to approach and solve adhoc problems with creativity and analytical thinking.",
            "Understanding of game theory principles and their application in competitive programming."
          ],
          courseDescription: [
            "The Competitive Programming course is designed to equip learners with essential algorithmic and problem-solving skills necessary for success in competitive programming contests.",
            "Through a comprehensive curriculum, students will explore a range of topics, including recursion, dynamic programming, and graph theory, along with practical coding exercises.",
            "Participants will learn to analyze algorithms for efficiency and apply various data structures to optimize their solutions.",
            "The course also covers advanced topics such as segment trees, tries, and game theory, enabling students to tackle a wide variety of challenges.",
            "By engaging with hands-on projects and real-time problem-solving, learners will build the confidence and expertise needed for competitive programming."],
          courseFeatures: [],
          instructor: [teamData[1]],
          whyUs: whyCMData,
          isProject: false,
          courseCurriculum: competitiveProgramming,
          courseImage: dsaIcon,
        },
      },
    ]
  }
]
