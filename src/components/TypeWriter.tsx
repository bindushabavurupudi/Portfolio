import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypeWriter = ({ words, speed = 100, deleteSpeed = 50, pauseTime = 2000 }: TypeWriterProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className="font-mono">
      {text}
      <span className="inline-block w-0.5 h-6 ml-0.5 bg-neon align-middle animate-typing-cursor border-r-2 border-neon" />
    </span>
  );
};

export default TypeWriter;
