import { Skills, type TSkillsSection } from 'types/Skills';

export const allSkills = Object.keys(Skills);

const techLanguageSkills = [
  {
    name: 'js',
    description: 'A versatile programming language commonly used for web and mobile app development',
  },
  {
    name: 'ts',
    description: 'A statically typed superset of JavaScript that enhances code quality and developer productivity',
  },
  {
    name: 'py',
    description: 'Simple, readable, and ideal for large and evolving codebases in web development and data analysis',
  },
  {
    name: 'matlab',
    description: 'A programming and numeric computing to analyze data, develop algorithms, and create models',
  },
  {
    name: 'r',
    description: 'A programming language and environment for statistical computing and graphics',
  },
];

const mobileAppSkills = [
  {
    name: 'rn',
    description:
      'A JavaScript framework for building hybrid/cross mobile applications with a single codebase, primarily for iOS and Android',
  },
  {
    name: 'android-studio',
    description: 'An integrated development environment (IDE) for Android app development',
  },
  {
    name: 'android-sdk',
    description:
      'A collection of Android platform APIs, tools and utilities to debug, profile, and compile Android apps',
  },
  {
    name: 'xcode',
    description: 'A unified workflow for user interface design, coding, testing, and debugging for iOS app development',
  },
  {
    name: 'firebase',
    description:
      'An app development platform by Google with various services like cloud messaging and realtime database',
  },
  {
    name: 'onesignal',
    description: 'A free push notification, email, SMS, and in-app messaging services for mobile apps',
  },
];

const frontendWebSkills = [
  {
    name: 'react',
    description:
      'A JavaScript library for building user interfaces with reusable components in single-page applications',
  },
  {
    name: 'next',
    description:
      'A React framework for server-rendered web apps with improved performance, SEO, and zero-configuration',
  },
  {
    name: 'tailwind',
    description:
      'A utility-first CSS framework for highly customizable web application styling, enabling rapid UI development',
  },
  {
    name: 'mdx',
    description: 'A format that combines Markdown and JSX to render dynamic content in documentation and blogs',
  },
  {
    name: 'antd',
    description: 'A popular design system and UI library enriching React web app components',
  },
  {
    name: 'mui',
    description: "A UI component library that follows Google's Material Design guidelines",
  },
  {
    name: 'html',
    description: 'Hyper Text Markup Language used for structuring web content',
  },
  {
    name: 'css',
    description: 'Cascading Style Sheets as a styling language for formatting and displaying web documents',
  },
];

const stateManagementSkills = [
  {
    name: 'react-query',
    description: 'A library that simplifies fetching, caching, and updating server data in React apps',
  },
  {
    name: 'redux',
    description:
      'A predictable state container for consistent JavaScript behavior across client, server, and native environments',
  },
  {
    name: 'saga',
    description: 'A Redux side effects manager and middleware for handling complex asynchronous behavior sequentially',
  },
  {
    name: 'rtk',
    description:
      'A package that simplifies Redux use cases by reducing boilerplate code for more concise implementation',
    noIcon: true,
  },
  {
    name: 'thunk',
    description: 'A standard approach middleware for writing async logic in Redux apps',
    noIcon: true,
  },
  {
    name: 'persist',
    description:
      'A library for saving Redux store data in persistent storage (e.g. local storage) between app sessions',
    noIcon: true,
  },
];

const mathSkills = [
  {
    name: 'model',
    description: 'A process of creating math representations to analyze and predict real-world behavior and events',
  },
  {
    name: 'ml',
    description:
      'A field of artificial intelligence focused on developing algorithms that can learn and make predictions',
  },
  {
    name: 'bd',
    description: 'Extracting insights from vast, diverse, and often real-time datasets for informed decision-making',
  },
  {
    name: 'da',
    description:
      'The process of examining raw data sets to find hidden patterns, discover correlations, and derive conclusions',
  },
];

const analysisSkills = [
  {
    name: 'mysql',
    description:
      'A popular relational database management system to store, manage, and retrieve structured data efficiently',
  },
  {
    name: 'mathematica',
    description: 'A powerful software system for comprehensive technical computing tasks and simulations',
  },
  {
    name: 'maple',
    description: ' A Computer Algebra System for complex math problem-solving and interactive mathematical analysis',
  },
];

const docSkills = [
  {
    name: 'latex',
    description:
      'A typesetting system designed for the production of technical and scientific documentation including graphical equations',
  },
  {
    name: 'ms365',
    description:
      'An unified productivity software with cloud-based services for efficient document, presentation, and worksheet creation',
  },
];

const skillsSection: TSkillsSection[] = [
  { title: 'Programming languages', data: techLanguageSkills },
  { title: 'Mobile app development', data: mobileAppSkills },
  { title: 'Frontend web technologies', data: frontendWebSkills },
  { title: 'State management', data: stateManagementSkills },
  { title: 'Applied mathematics', data: mathSkills },
  { title: 'Scientific computing tools', data: analysisSkills },
  { title: 'Documentations', data: docSkills },
];

export default skillsSection;
