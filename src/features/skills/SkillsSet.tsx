import React from 'react';
import Image from 'next/image';
import type { TSkills } from 'types/Skills';

type Props = {
  data: TSkills[];
  className?: string | '';
};

const SkillsSet = ({ data, className }: Props) => {
  return (
    <div className={`${className} my-10 justify-center grid grid-cols-2 gap-12 space-y-0 lg:grid-cols-3`}>
      {data.map(({ name, description, icon }) => {
        return (
          <div
            key={name}
            className='flex flex-col items-center justify-center text-center'
          >
            {icon && (
              <div className='mb-4 flex items-center justify-center rounded-full bg-white/[.85] dark:bg-transparent h-14 w-14 p-2 dark:p-0'>
                <Image
                  src={icon}
                  alt={`${name} icon`}
                  className='h-8 w-8 dark:h-10 dark:w-10 object-contain'
                />
              </div>
            )}
            <h5 className='mb-2 text-lg font-semibold md:font-bold text-dark-theme dark:text-light-theme'>{name}</h5>
            {description && <p className='text-zinc-500 dark:text-zinc-400'>{description}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSet;
