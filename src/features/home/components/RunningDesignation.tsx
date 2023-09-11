import React from 'react';
import { TypewritterTexts } from 'components/Typewritter';

export const RunningDesignation = () => {
  return (
    <TypewritterTexts
      className='font-bold h-5 text-dark-theme dark:text-light-theme'
      texts={['Software Engineer', 'Frontend Developer']}
      delay={20000}
    />
  );
};
