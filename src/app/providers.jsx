"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import scrollAndFontCss from "@/static/scrollAndFontCss";

const theme = extendTheme({
  fonts: {
    heading: `'Space Grotesk Variable', sans-serif`,
    body: `'Space Grotesk Variable', sans-serif`,
  },
});

export function Providers({ children }) {
  
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <ChakraProvider theme={theme}>
        <Global styles={scrollAndFontCss} />
        {children}
      </ChakraProvider>
    </ReactLenis>
  );
}
