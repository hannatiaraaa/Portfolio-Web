import React from 'react';
import { SOCIAL_MEDIA_ICON_NAME } from 'types/SocialMedia';

type Props = {
  name: keyof typeof SOCIAL_MEDIA_ICON_NAME;
  url?: string;
  hasUsername?: boolean;
  isColorMode?: boolean;
};

const SocialMedia = ({ name, url, hasUsername, isColorMode }: Props) => {
  return (
    <a
      href={hasUsername ? `${url}/hannatiaraaa` : url}
      target='_blank'
      className={`rounded-full cursor-pointer inline-block text-center select-none relative text-xl`}
    >
      <i
        className={`bg-none p-2 rounded-none hover:rounded-full transition-all text-socialMedia-${name} ${
          SOCIAL_MEDIA_ICON_NAME[name]
        } hover:text-white hover:bg-socialMedia-${name}${isColorMode ? '-light' : ''}`}
        data-fa-transform='grow-5'
      ></i>
    </a>
  );
};

export default SocialMedia;
