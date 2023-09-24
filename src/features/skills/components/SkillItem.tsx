import React from 'react';
import Image from 'next/image';
import { Skills } from 'types/Skills';

type Props = {
  skill: string;
  description?: string;
  noIcon?: boolean;
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

export const SkillItem = ({ skill, description, noIcon, onError }: Props) => {
  const skillTitle = Skills[skill as keyof typeof Skills];

  return (
    <div
      key={skill}
      className='flex flex-col items-center justify-center text-center'
    >
      {!noIcon && (
        <div
          className={
            'mb-4 flex items-center justify-center rounded-full bg-white/[.85] dark:bg-transparent h-14 w-14 p-2 dark:p-0'
          }
        >
          <Image
            src={skill}
            alt={skillTitle}
            width={32}
            height={32}
            className='h-8 w-8 dark:h-10 dark:w-10 object-contain'
            onError={onError}
          />
        </div>
      )}
      <h5 className='mb-2 text-lg font-semibold md:font-bold text-dark-theme dark:text-light-theme'>{skillTitle}</h5>
      {description && <p className='text-zinc-500 dark:text-zinc-400'>{description}</p>}
    </div>
  );
};
