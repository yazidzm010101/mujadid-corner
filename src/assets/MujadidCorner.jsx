import { Box, Text } from "@chakra-ui/react";

import { useState } from "react";

function MujadidCorner({ color = "gray.700", _cornerStyle, ...rest }) {
  const [currColor, setCurrColor] = useState(color);
  const [currDarkColor, setCurrDarkColor] = useState(rest?._dark?.color);
  const onMouseOver = () => {
    setCurrColor("teal.500");
    setCurrDarkColor("teal.200");
  };
  const onMouseLeave = () => {
    setCurrColor(color);
    setCurrDarkColor(rest?._dark?.color || color);
  };
  return (
    <Box
      color={currColor}
      {...rest}
      _dark={{ ...rest?._dark, color: currDarkColor }}
      pos={"relative"}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      transition={".2s all ease-in-out"}
    >
      <Box
        w={2}
        h={2}
        border={"3px solid"}
        borderColor={currColor}
        pos={"absolute"}
        bottom={0}
        left={0}
        rounded={"sm"}
        transition={".2s all ease-in-out"}
        _dark={{ borderColor: currDarkColor }}
        {..._cornerStyle}
      />
      <Text
        ml={4}
        fontSize={rest?.fontSize || "xl"}
        fontWeight={"black"}
        overflow={"hidden"}
        fontFamily={'"Noto Kufi Arabic", sans-serif'}
      >
        مجديد
      </Text>
    </Box>
  );
}

export default MujadidCorner;
