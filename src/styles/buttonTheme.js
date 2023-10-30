const { defineStyle, defineStyleConfig } = require("@chakra-ui/react");

const glassVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    backdropFilter: "blur(4px)",
    rounded: "full",
    py: { base: 7, md: 9 },
    px: { base: 9, md: 10 },
    border: "1px solid",
    bg: (c != "transparent" && "blackAlpha.100") || "transparent",
    color: "gray.700",
    borderColor: "rgb(0 0 0 / 0.1)",
    _dark: {
      bg: (c != "transparent" && "whiteAlpha.100") || "transparent",
      color: "white",
      borderColor: "rgb(255 255 255 / 0.1)",
    },
    _active: {
      bg: "blackAlpha.200",
      borderColor: "rgb(0 0 0 / 0.2)",
      _dark: {
        bg: "whiteAlpha.200",
        borderColor: "rgb(255 255 255 / 0.2)",
      },
    },
    _hover: {
      bg: "blackAlpha.200",
      borderColor: "rgb(0 0 0 / 0.2)",
      _dark: {
        bg: "whiteAlpha.200",
        borderColor: "rgb(255 255 255 / 0.2)",
      },
    },
  };
});

const blurVariant = defineStyle((props) => {
  return {
    ...glassVariant(props),
    borderColor: "transparent",
    _dark: {
      ...glassVariant(props)._dark,
      borderColor: "transparent",
    },
  };
});

export const buttonTheme = defineStyleConfig({
  variants: {
    glass: glassVariant,
    blur: blurVariant,
  },
});
