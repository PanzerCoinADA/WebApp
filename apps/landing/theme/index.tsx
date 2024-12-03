import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource-variable/inter";

const overrides = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    brand: {
      highlight: "#096467",
      light: "#FFFFFF",
      dark: "#000000",
      "50": "#FFFFFF",
      "100": "#F2F2F2",
      "200": "#F2F2F2",
      "300": "#F2F2F2",
      "400": "#E6E6E6",
      "500": "#E6E6E6",
      "600": "#E6E6E6",
      "700": "#999999",
      "800": "#999999",
      "900": "#999999",
    },
  },
  components: {
    Button: {
      variants: {
        entropi: {
          bgColor: "brand.dark",
          textColor: "brand.light",
          transition: "0.3 ease-in-out",
          _hover: {
            bgColor: "brand.200",
            textColor: "brand.dark",
            transition: "0.3 ease-in-out",
          },
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "gray.900")(props),
      },
    }),
  },
};

export default extendTheme(overrides);
