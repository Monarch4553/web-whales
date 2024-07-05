import Portfolio from "@/components/Portfolio";
import WebPortfolio from "@/components/WebPortfolio";
import Theme from "@/theme/Theme";
import { Box } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box bgColor={Theme.bgLightShade}>
 
      <Portfolio />
      <WebPortfolio />
    </Box>
  );
}
