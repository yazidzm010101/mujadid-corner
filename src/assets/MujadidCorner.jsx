import { Box, Text } from "@chakra-ui/react";

import React from "react";

function MujadidCorner({ color = "white", _cornerStyle, ...rest }) {
  return (
    <Box color={color} {...rest} pos={"relative"}>
      <Box
        w={2}
        h={2}
        border={"2px solid"}
        borderColor={color}
        pos={"absolute"}
        bottom={0}
        left={0}
        _dark={{ borderColor: rest?._dark?.color }}
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
