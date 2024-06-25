 "use client"
import { Text } from "@chakra-ui/react";
 import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingEffect({strings,...props}) {
    const typo = useRef(null)
    useEffect(() => {
        const typed = new Typed(typo.current, {
          strings,
          typeSpeed: 40,
          loop: true,
          backSpeed: 40,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
  return (
    <Text ref={typo}  {...props}></Text>
  )
}
