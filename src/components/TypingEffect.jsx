"use client"
import { Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingEffect({ strings, ...props }) {
  const typo = useRef(null);

  useEffect(() => {
    const typed = new Typed(typo.current, {
      strings,
      typeSpeed: 30,
      startDelay: 1000,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      onComplete: (self) => {
        self.cursor.remove();
      },
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <Text ref={typo}    {...props}></Text>
  );
}
