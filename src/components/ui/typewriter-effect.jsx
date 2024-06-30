"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentLine, setCurrentLine] = useState(0);

  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  // Break words into lines based on a specified number of characters per line
  const charsPerLine = 20; // Adjust this value as needed
  const lines = [];
  let currentLineText = [];

  wordsArray.forEach((word) => {
    word.text.forEach((char) => {
      if (currentLineText.length >= charsPerLine && char === " ") {
        lines.push(currentLineText.join(""));
        currentLineText = [];
      } else {
        currentLineText.push(char);
      }
    });
  });

  if (currentLineText.length) {
    lines.push(currentLineText.join(""));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev < lines.length - 1 ? prev + 1 : prev));
    }, 3000); // Adjust the interval to control typing speed

    return () => clearInterval(interval);
  }, [lines.length]);

  const renderLine = (line, idx) => {
    return (
      <motion.div
        key={`line-${idx}`}
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
        >
          {line}
        </div>
      </motion.div>
    );
  };

  return (
    <div className={cn("space-y-2 my-6", className)}>
      {lines.slice(0, currentLine + 1).map((line, idx) => renderLine(line, idx))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[8px] h-4 sm:h-6 xl:h-24 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
