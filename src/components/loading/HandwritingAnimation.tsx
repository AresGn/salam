import { motion } from "framer-motion";

export function HandwritingAnimation() {
  const name = "SAIBOU ABDOU SALAM";
  const letters = name.split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 leading-tight"
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
              className={letter === " " ? "inline-block w-2 sm:w-3 md:w-4" : "inline-block"}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 px-2 leading-relaxed"
        >
          <span className="block sm:inline">Fondateur de Fiabilitech</span>
          <span className="hidden sm:inline mx-2">•</span>
          <span className="block sm:inline">Étudiant Supply Chain</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
