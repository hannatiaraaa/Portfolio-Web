import { Skills, TSkills, TSkillsSection } from 'types/Skills';

const icons = {
  js: require('assets/icons/js.svg'),
  ts: require('assets/icons/ts.svg'),
  py: require('assets/icons/py.svg'),
  matlab: require('assets/icons/matlab.svg'),
  r: require('assets/icons/r.svg'),
  rn: require('assets/icons/react.svg'),
  'android-studio': require('assets/icons/android-studio.svg'),
  'android-sdk': require('assets/icons/android-sdk.svg'),
  xcode: require('assets/icons/xcode.svg'),
  firebase: require('assets/icons/firebase.svg'),
  onesignal: require('assets/icons/onesignal.svg'),
  react: require('assets/icons/react.svg'),
  next: require('assets/icons/next.svg'),
  tailwind: require('assets/icons/tailwind.svg'),
  mdx: require('assets/icons/mdx.svg'),
  antd: require('assets/icons/antd.svg'),
  mui: require('assets/icons/mui.svg'),
  html: require('assets/icons/html.svg'),
  css: require('assets/icons/css.svg'),
  'react-query': require('assets/icons/react-query.svg'),
  redux: require('assets/icons/redux.svg'),
  saga: require('assets/icons/saga.svg'),
  rtk: require('assets/icons/redux.svg'),
  thunk: require('assets/icons/redux.svg'),
  persist: require('assets/icons/redux.svg'),
  mysql: require('assets/icons/mysql.svg'),
  mathematica: require('assets/icons/mathematica.svg'),
  maple: require('assets/icons/maple.svg'),
  latex: require('assets/icons/latex.svg'),
  ms365: require('assets/icons/ms365.svg'),
};

const techLanguageSkills = [
  {
    name: Skills.js,
    description: 'A versatile programming language commonly used for web and mobile app development',
    icon: icons.js,
  },
  {
    name: Skills.ts,
    description: 'A statically typed superset of JavaScript that enhances code quality and developer productivity',
    icon: icons.ts,
  },
  {
    name: Skills.py,
    description: 'Simple, readable, and ideal for large and evolving codebases in web development and data analysis',
    icon: icons.py,
  },
  {
    name: Skills.matlab,
    description: 'A programming and numeric computing to analyze data, develop algorithms, and create models',
    icon: icons.matlab,
  },
  {
    name: Skills.r,
    description: 'A programming language and environment for statistical computing and graphics',
    icon: icons.r,
  },
];

const mobileAppSkills = [
  {
    name: Skills.rn,
    description:
      'A JavaScript framework for building hybrid/cross mobile applications with a single codebase, primarily for iOS and Android',
    icon: icons.react,
  },
  {
    name: Skills['android-studio'],
    description: 'An integrated development environment (IDE) for Android app development',
    icon: icons['android-studio'],
  },
  {
    name: Skills['android-sdk'],
    description:
      'A collection of Android platform APIs, tools and utilities to debug, profile, and compile Android apps',
    icon: icons['android-sdk'],
  },
  {
    name: Skills.xcode,
    description: 'A unified workflow for user interface design, coding, testing, and debugging for iOS app development',
    icon: icons.xcode,
  },
  {
    name: Skills.firebase,
    description:
      'An app development platform by Google with various services like cloud messaging and realtime database',
    icon: icons.firebase,
  },
  {
    name: Skills.onesignal,
    description: 'A free push notification, email, SMS, and in-app messaging services for mobile apps',
    icon: icons.onesignal,
  },
];

const frontendWebSkills = [
  {
    name: Skills.react,
    description:
      'A JavaScript library for building user interfaces with reusable components in single-page applications',
    icon: icons.react,
  },
  {
    name: Skills.next,
    description:
      'A React framework for server-rendered web apps with improved performance, SEO, and zero-configuration',
    icon: icons.next,
  },
  {
    name: Skills.tailwind,
    description:
      'A utility-first CSS framework for highly customizable web application styling, enabling rapid UI development',
    icon: icons.tailwind,
  },
  {
    name: Skills.mdx,
    description: 'A format that combines Markdown and JSX to render dynamic content in documentation and blogs',
    icon: icons.mdx,
  },
  {
    name: Skills.antd,
    description: 'A popular design system and UI library enriching React web app components',
    icon: icons.antd,
  },
  {
    name: Skills.mui,
    description: "A UI component library that follows Google's Material Design guidelines",
    icon: icons.mui,
  },
  {
    name: Skills.html,
    description: 'Hyper Text Markup Language used for structuring web content',
    icon: icons.html,
  },
  {
    name: Skills.css,
    description: 'Cascading Style Sheets as a styling language for formatting and displaying web documents',
    icon: icons.css,
  },
];

const stateManagementSkills = [
  {
    name: Skills['react-query'],
    description: 'A library that simplifies fetching, caching, and updating server data in React apps',
    icon: icons['react-query'],
  },
  {
    name: Skills.redux,
    description:
      'A predictable state container for consistent JavaScript behavior across client, server, and native environments',
    icon: icons.redux,
  },
  {
    name: Skills.saga,
    description: 'A Redux side effects manager and middleware for handling complex asynchronous behavior sequentially',
    icon: icons.saga,
  },
  {
    name: Skills.rtk,
    description:
      'A package that simplifies Redux use cases by reducing boilerplate code for more concise implementation',
  },
  {
    name: Skills.thunk,
    description: 'A standard approach middleware for writing async logic in Redux apps',
  },
  {
    name: Skills.persist,
    description:
      'A library for saving Redux store data in persistent storage (e.g. local storage) between app sessions',
  },
];

const mathSkills = [
  {
    name: Skills.model,
    description: 'A process of creating math representations to analyze and predict real-world behavior and events',
  },
  {
    name: Skills.ml,
    description:
      'A field of artificial intelligence focused on developing algorithms that can learn and make predictions',
  },
  {
    name: Skills.bd,
    description: 'Extracting insights from vast, diverse, and often real-time datasets for informed decision-making',
  },
  {
    name: Skills.da,
    description:
      'The process of examining raw data sets to find hidden patterns, discover correlations, and derive conclusions',
  },
];

const analysisSkills = [
  {
    name: Skills.mysql,
    description:
      'A popular relational database management system to store, manage, and retrieve structured data efficiently',
    icon: icons.mysql,
  },
  {
    name: Skills.mathematica,
    description: 'A powerful software system for comprehensive technical computing tasks and simulations',
    icon: icons.mathematica,
  },
  {
    name: Skills.maple,
    description: ' A Computer Algebra System for complex math problem-solving and interactive mathematical analysis',
    icon: icons.maple,
  },
];

const docSkills = [
  {
    name: Skills.latex,
    description:
      'A typesetting system designed for the production of technical and scientific documentation including graphical equations',
    icon: icons.latex,
  },
  {
    name: Skills.ms365,
    description:
      'An unified productivity software with cloud-based services for efficient document, presentation, and worksheet creation',
    icon: icons.ms365,
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

export const allSkills: TSkills[] = Object.keys(Skills).map((key) => {
  return {
    name: Skills[key as keyof typeof Skills],
    icon: icons[key as keyof typeof icons],
  };
});

export default skillsSection;
