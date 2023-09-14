import React, { useState, useEffect, DetailedHTMLProps } from 'react';

interface IGeneralTypewritter extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  speed?: number;
  delay?: number;
}

interface ITypewritter extends IGeneralTypewritter {
  text: string;
  onEndText?: () => void;
}

interface ITypewritterTexts extends IGeneralTypewritter {
  texts: string[];
}

export const Typewritter = ({ text, speed = 100, delay = 2500, onEndText, className }: ITypewritter) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, speed);

        return () => clearTimeout(timeoutId);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      if (currentIndex > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, speed);

        return () => clearTimeout(timeoutId);
      } else {
        if (onEndText) {
          onEndText();
        }
        setCurrentIndex(0);
        setDisplayedText('');
        setIsTyping(true);
      }
    }
  }, [currentIndex, text, speed, delay, isTyping, onEndText]);

  return <span className={className}>{displayedText}</span>;
};

export const TypewritterTexts = ({ texts, ...props }: ITypewritterTexts) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onEndText = () =>
    setCurrentIndex((prevIndex) => {
      if (currentIndex < texts.length - 1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });

  const text = texts[currentIndex];

  return (
    <Typewritter
      text={text}
      onEndText={onEndText}
      {...props}
    />
  );
};
