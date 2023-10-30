import { AspectRatio, Button, Icon, useColorMode } from "@chakra-ui/react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";

function NightModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      variant={"blur"}
      overflow={"hidden"}
      py={3}
      px={1}
      my={0}
    >
      <AspectRatio ratio={1} w={4}>
        <>
          <Icon
            transform={colorMode == "light" && "translateY(-200%)"}
            transition={"all .2s ease-in-out"}
            as={BsFillMoonStarsFill}
            color={"yellow.400"}
          />

          <Icon
            transform={colorMode == "dark" && "translateY(200%)"}
            transition={"all .2s ease-in-out"}
            as={RiSunFill}
            color={"orange.500"}
          />
        </>
      </AspectRatio>
    </Button>
  );
}

export default NightModeSwitcher;
