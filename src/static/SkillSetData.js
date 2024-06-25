import { FaCreditCard,   FaMobileAlt, FaNode, FaReact, FaShoppingCart } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { Image } from "@chakra-ui/react";
 

const SkillSetData = [
  {
    name: "React",
    description: "The Best JavaScript library for building user interfaces.",
    icon: <FaReact size={"50px"} />,
  },
  {
    name: "React Native",
    description:
      "Cross Platform app development in React Native for both Android and iOS.",
    icon: <FaReact size={"50px"} />,
  },
  {
    name: "Next.js",
    description: "The React Framework for Production.",
    icon: <RiNextjsLine size={"50px"} />,
  },
  {
    name: "Firebase SDK",
    description:
      "Platform developed by Google for creating mobile and web applications.",
    icon: <IoLogoFirebase size={"50px"} />,
  },
  {
    name: "MongoDB",
    description: "NoSQL database for modern applications.",
    icon: <SiMongodb size={"50px"} />,
  },

  {
    name: "ExpressJs",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
    icon: <FaNodeJs size={"50px"} />,
  },
  {
    name: "Chakra UI",
    description: "A professional UI library for your up and coming website.",
    icon: <SiChakraui size={"50px"} />,
  },
  {
    "name": "Tailwind CSS",
    "description": "Utility-first CSS framework for rapidly building custom designs.",
    "icon": <RiTailwindCssFill  size={"50px"} />
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: <FaNode size={"50px"} />,
  },
  {
    name: "In-App Purchase",
    description: "Facilitates in-app purchases within mobile applications.",
    icon: <FaShoppingCart size={"50px"} />,
  },
  {
    name: "Payment Gateway",
    description:
      "Service that authorizes and processes payments in e-commerce.",
    icon: <FaCreditCard size={"50px"} />,
  },
  {
    name: "Expo",
    description: "Framework and platform for universal React applications.",
    icon:<Image w={'50px'} src="/expo.svg"/>
  },
]

export default SkillSetData;
