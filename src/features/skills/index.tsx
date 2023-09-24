import React, { useMemo, useState } from 'react';
import skills, { allSkills } from 'configs/Skills';
import { useDeviceType } from 'utils/hooks/useDeviceType';
import SkillsSet from './components/SkillsSet';

const Skills = () => {
  const isMediumDevice = useDeviceType('md');

  const RenderSectionSkills = useMemo(() => {
    return skills.map(({ title, data }) => (
      <div key={title}>
        <h3>{title}</h3>
        <SkillsSet data={data} />
        <br />
      </div>
    ));
  }, []);

  const RenderAllSkills = useMemo(() => <SkillsSet data={allSkills} />, []);

  if (isMediumDevice) {
    return RenderSectionSkills;
  } else {
    return RenderAllSkills;
  }
};

export default Skills;
