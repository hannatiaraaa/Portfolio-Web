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
