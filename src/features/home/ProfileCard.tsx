import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { RunningDesignation } from './components/RunningDesignation';
import { completeSocialMedia } from 'configs/SocialMedia';
import { SocialMediaList } from './components/SocialMediaList';

export const ProfileCard = () => {
  let ref: React.MutableRefObject<any> = useRef(null);
  let [style, setStyle] = useState<React.CSSProperties>({});

  let onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return;

    let { clientX, clientY } = e;
    let { width, height, x, y } = ref.current.getBoundingClientRect();
    let mouseX = Math.abs(clientX - x);
    let mouseY = Math.abs(clientY - y);
    let rotateMin = -15;
    let rotateMax = 15;
    let rotateRange = rotateMax - rotateMin;

    let rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    };

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    });
  }, []);

  let onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' });
  }, []);

  useEffect(() => {
    let { current } = ref;
    if (!current) return;
    current.addEventListener('mousemove', onMouseMove);
    current.addEventListener('mouseleave', onMouseLeave);
    return () => {
      if (!current) return;
      current.removeEventListener('mousemove', onMouseMove);
      current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      style={{ perspective: '600px' }}
      className='z-10 my-4 lg:mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]'
      ref={ref}
    >
      <div
        style={style}
        className='flex flex-col overflow-hidden transition-all duration-200 ease-out xl:rounded-lg  bg-bg-light dark:bg-bg-dark shadow-dark-theme shadow-lg dark:shadow-light-theme lg:outline lg:outline-1 outline-gray-600 dark:outline-gray-100 gap-8'
      >
        <Image
          src='profile'
          alt='profile picture'
          priority
          width={832}
          height={480}
          className='w-[52rem] h-[30rem] object-cover'
        />
        <div className='flex flex-col flex-1 items-center justify-evenly gap-2'>
          <RunningDesignation />
          <p>A full time learner</p>
        </div>
        <SocialMediaList data={completeSocialMedia} />

        <span className='h-1.5 bg-gradient-to-r from-red-600 via-teal-500 to-purple-600'></span>
      </div>
    </div>
  );
};
