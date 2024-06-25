"use client";
import Theme from "@/theme/Theme";
import { Button, Tooltip, useClipboard } from "@chakra-ui/react";
import { useState } from "react";

import { FaCheck} from "react-icons/fa";
export default function CopyToClipBoard({ text,children }) {
  const { onCopy } = useClipboard(text);
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Change label back to "Copy" after 3 seconds
  };
  return (
    <Button  
      onClick={handleCopy}
      _hover={{ bgColor: copied ? 'green.400' : Theme.secondaryColor }}
      bgColor={copied ? 'green.400' : Theme.primaryColor}
      size={"sm"}
       px={'10px'} color={'white'}
      
    >
      {copied ? <FaCheck/> : children}
    </Button>
  );
}
