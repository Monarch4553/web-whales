 
import { FaMobileScreen } from "react-icons/fa6";
import Theme from "@/theme/Theme";
import { RiComputerLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
const MetricsData = [
  {
    name: "Customers Satisfied",
    num: 73,
    icon: <IoMdHappy  size={'35px'} color={Theme.secondaryColor}/>
  },
  {
    name: "Apps Developed",
    num: 97,
    icon:<FaMobileScreen size={'35px'} color={Theme.secondaryColor}/>
  },
  {
    name: "Websites Delivered",
    num: 113,
    icon:<RiComputerLine size={'35px'} color={Theme.secondaryColor}/>
  },
];
export default MetricsData;
