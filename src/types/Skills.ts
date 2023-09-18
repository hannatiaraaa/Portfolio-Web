import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export enum Skills {
  'ts' = 'Typescript',
  'js' = 'JavaScript',
  'rn' = 'React Native',
  'next' = 'Next.js',
  'tailwind' = 'Tailwind CSS',
  'react' = 'React.js',
  'react-query' = 'React Query',
  'rtk' = 'Redux Toolkit',
  'saga' = 'Redux saga',
  'mdx' = 'MDX',
  'redux' = 'Redux',
  'android-studio' = 'Android Studio',
  'android-sdk' = 'Android SDK',
  'xcode' = 'Xcode',
  'antd' = 'AntDesign',
  'mui' = 'Material UI',
  'firebase' = 'Firebase',
  'onesignal' = 'OneSignal',
  'thunk' = 'Redux thunk',
  'persist' = 'Redux persist',
  'py' = 'Python',
  'matlab' = 'MATLAB',
  'ml' = 'Machine learning',
  'model' = 'Mathematical modelling',
  'mysql' = 'MySQL',
  'r' = 'R',
  'bd' = 'Big data',
  'da' = 'Data analytics',
  'html' = 'HTML',
  'css' = 'CSS',
  'maple' = 'Maple',
  'mathematica' = 'Wolfram Mathematica',
  'latex' = 'LaTeX',
  'ms365' = 'Microsoft 365 / Office',
}

export type TSkills = {
  name: Skills;
  description?: string;
  icon?: StaticImport;
};

export type TSkillsSection = {
  title: string;
  data: TSkills[];
};
