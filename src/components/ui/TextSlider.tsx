import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextSliderProps {
  words: string[];
  delay?: number;
  infinite?: boolean;
  gradient?: boolean;
}

export function TextSlider({
  words,
  delay = 3000,
  infinite = true,
  gradient = true,
}: TextSliderProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) =>
        infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
      );
    }, delay);

    return () => clearInterval(interval);
  }, [words.length, delay, infinite]);

  return (
    <div className="relative inline-block min-h-[2em] w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
          className={`block font-semibold text-center ${
            gradient
              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              : "text-blue-600 dark:text-blue-400"
          }`}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
