import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body, #root": { height: "100%" },
    },
  },
  fonts: {
    heading: 'monospace',
    body: 'monospace',
  },
  components: {
    Switch: {
      baseStyle: {
        track: {
          bg: "blackAlpha.300",
          _checked: { bg: "black" },
        },
        thumb: {
          bg: "white",
          border: "2px solid",
          borderColor: "black",
        },
      },
      defaultProps: { colorScheme: "blackAlpha" },
    },
  }
});

export default theme;
