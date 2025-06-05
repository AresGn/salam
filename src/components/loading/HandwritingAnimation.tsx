import React from "react";
import { motion } from "framer-motion";

export function HandwritingAnimation() {
  const name = "SAIBOU ABDOU SALAM";
  const letters = name.split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="text-center">
        <motion.div
          className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className={letter === " " ? "inline-block w-4" : "inline-block"}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Co-Fondateur Fiabilitech • Étudiant Supply Chain
        </motion.div>
      </div>
    </motion.div>
  );
}
