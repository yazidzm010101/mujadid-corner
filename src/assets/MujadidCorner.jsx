import { AspectRatio, HStack, Text } from "@chakra-ui/react";

import MujadidCornerIcon from "./MujadidCornerIcon";
import { useState } from "react";

function MujadidCorner({
  color = "gray.700",
  _cornerStyle,
  _logoStyle,
  ...rest
}) {
  const [currColor, setCurrColor] = useState(color);
  const [currDarkColor, setCurrDarkColor] = useState(rest?._dark?.color);
  const [currFilter, setCurrFilter] = useState("saturate(0) brightness(0.5)");
  const [currDarkFilter, setCurrDarkFilter] = useState(
    "saturate(0) brightness(3)"
  );
  const onMouseOver = () => {
    setCurrColor("teal.500");
    setCurrDarkColor("teal.200");
    setCurrFilter("saturate(1)");
    setCurrDarkFilter("saturate(1)");
  };
  const onMouseLeave = () => {
    setCurrColor(color);
    setCurrDarkColor(rest?._dark?.color || color);
    setCurrFilter("saturate(0) brightness(0.8)");
    setCurrDarkFilter("saturate(0) brightness(3)");
  };
  return (
    <HStack
      color={currColor}
      {...rest}
      _dark={{ ...rest?._dark, color: currDarkColor }}
      _hover={{ color: color, _dark: { color: rest?._dark?.color } }}
      pos={"relative"}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      transition={".2s all ease-in-out"}
    >
      {/* <Box
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
      /> */}
      <Text
        ml={4}
        fontSize={rest?.fontSize || "xl"}
        fontWeight={"black"}
        overflow={"hidden"}
        fontFamily={'"Noto Kufi Arabic", sans-serif'}
      >
        مجديد
      </Text>
      <AspectRatio ratio={1} w={8}>
        <MujadidCornerIcon
          filter={currFilter}
          _dark={{ filter: currDarkFilter }}
          transition={".2s all ease-in-out"}
          {..._logoStyle}
        />
      </AspectRatio>
    </HStack>
  );
}

export default MujadidCorner;
