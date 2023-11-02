import { AnimatePresence, useTransform } from "framer-motion";
import { AspectRatio, Box, Button, Icon, useColorMode } from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import { FaSun } from "react-icons/fa";
import MotionBox from "./MotionBox";
import { RiSunFill } from "react-icons/ri";

function NightModeSwitcher({ ...rest }) {
  const { colorMode, setColorMode } = useColorMode();
  const [darkMode, setDarkMode] = useState(colorMode == "dark");
  const moonY = useTransform(() => (darkMode ? 0 : 10));
  const moonX = useTransform(() => (darkMode ? 0 : -40));
  const sunY = useTransform(() => (darkMode ? 10 : 0));
  const sunX = useTransform(() => (darkMode ? 40 : 0));
  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      setColorMode((darkMode && "dark") || "light");
    }, 200);
    return () => clearTimeout(interval);
  }, [darkMode]);
  useEffect(() => {
    setDarkMode(colorMode == "dark");
  }, [colorMode]);
  return (
    <Box
      w={"max-content"}
      cursor={"pointer"}
      rounded={"full"}
      overflow={"hidden"}
      my={0}
      border={"1px solid"}
      bg={"rgb(200 200 255 / 0.05)"}
      borderColor={"rgb(0 0 0 / 0.05)"}
      transition={"all .2s ease-in-out"}
      backdropFilter={"blur(4px)"}
      onClick={() => setDarkMode(!darkMode)}
      {...rest}
    >
      <AspectRatio ratio={1} w={10}>
        <>
          <MotionBox
            transition={"all .2s ease-in-out"}
            style={{ y: moonY, x: moonX }}
          >
            <Icon
              p={2.5}
              w={"full"}
              h={"full"}
              as={BsFillMoonStarsFill}
              color={"yellow.400"}
            />
          </MotionBox>
          <MotionBox
            transition={"all .2s ease-in-out"}
            style={{ y: sunY, x: sunX }}
          >
            <Icon
              p={2}
              w={"full"}
              h={"full"}
              as={RiSunFill}
              color={"orange.400"}
            />
          </MotionBox>
        </>
      </AspectRatio>
    </Box>
  );
}

export default NightModeSwitcher;
