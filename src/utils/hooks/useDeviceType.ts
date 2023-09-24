import { useEffect, useState } from 'react';

type TDevice = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const getResposiveCategory = (type: TDevice, innerWidth: number) => {
  switch (type) {
    case '2xl':
      return innerWidth >= 1536;

    case 'xl':
      return innerWidth >= 1280;

    case 'lg':
      return innerWidth >= 1024;

    case 'md':
      return innerWidth >= 768;

    default:
      return innerWidth >= 640;
  }
};

export const useDeviceType = (type: TDevice) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    const currentDevice = getResposiveCategory(type, window.innerWidth);
    if (currentDevice) {
      setIsChanged(true);
    }

    const handleResize = (e: UIEvent) => {
      const { innerWidth } = e.target as typeof window;
      const resposiveCategory = getResposiveCategory(type, innerWidth);
      setIsChanged(Boolean(resposiveCategory)); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [type]);

  return isChanged;
};
