import React, { useMemo, useState } from 'react';
import { SkillItem } from './SkillItem';

type Props<T> = {
  data: T;
  className?: string | '';
};

const SkillsSet = <TData extends any[]>({ data, className }: Props<TData>) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { style } = event.target as HTMLImageElement;
    style.display = 'none';
  };

  return (
    <div className={`${className} my-10 justify-center grid grid-cols-2 gap-12 space-y-0 lg:grid-cols-3`}>
      {data.map((value, index) => {
        const { name, description, noIcon } = value;
        const skill: string = name ?? value;
        return (
          <SkillItem
            key={skill}
            skill={skill}
            description={description}
            noIcon={noIcon}
            onError={handleImageError}
          />
        );
      })}
    </div>
  );
};

export default SkillsSet;
