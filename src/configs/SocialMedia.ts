export enum SOCIAL_MEDIA_ICON_NAME {
  email = 'fa-solid fa-envelope-open-text',
  linkedin = 'fa-brands fa-linkedin-in',
  github = 'fa-brands fa-github',
  gitlab = 'fa-brands fa-gitlab',
  hackerrank = 'fa-brands fa-hackerrank',
  whatsapp = 'fa-brands fa-whatsapp',
}

export type TSocialMedia = {
  name: keyof typeof SOCIAL_MEDIA_ICON_NAME;
  url?: string;
  hasUsername?: boolean;
  isColorMode?: boolean;
};
const phone = process.env.NEXT_PUBLIC_PHONE;

export const socialMedia: TSocialMedia[] = [
  { name: 'email', url: 'mailto:hannatiara@gmail.com', hasUsername: false },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/hanna-tiara-andarlia/', hasUsername: false },
  { name: 'github', url: 'https://github.com/', hasUsername: true, isColorMode: true },
  { name: 'gitlab', url: 'https://gitlab.com/', hasUsername: true },
  { name: 'hackerrank', url: 'https://hackerrank.com/', hasUsername: true },
];

export const completeSocialMedia: TSocialMedia[] = [
  {
    name: 'whatsapp',
    url: `https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`,
    hasUsername: false,
  },
  ...socialMedia,
];
