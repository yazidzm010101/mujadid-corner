import { Box, Button, HStack, Icon, Link, Text } from "@chakra-ui/react";

import { RiMenu4Fill } from "react-icons/ri";
import { useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const ref = useRef({});
  const { pathname } = useRouter();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const difference = scrollY.getPrevious() - latest;
    const direction = difference < 0 ? "down" : "up";
    setIsSolid(latest > ref.current.clientHeight);
    setIsHidden(direction == "down" && latest > ref.current.clientHeight);
  });
  return (
    <Box
      w={"full"}
      pos={"fixed"}
      ref={ref}
      zIndex={999}
      top={0}
      left={0}
      transition={".2s all ease-in-out"}
      color={pathname == "/" && (!isSolid ? "white" : "gray.800")}
      bg={isSolid ? "whiteAlpha.800" : "rgba(255,255,255,0)"}
      borderBottom={"1px"}
      borderColor={(isSolid && "blackAlpha.200") || "transparent"}
      backdropFilter={isSolid && "blur(16px)"}
      transform={isHidden && "translateY(-100%)"}
    >
      <HStack
        w={"full"}
        py={6}
        px={6}
        justifyContent={"center"}
        spacing={12}
        pos={"relative"}
      >
        <Button
          display={{ base: "flex", md: "none" }}
          bg={"transparent"}
          rounded={"999px"}
          px={2}
          py={2}
          pos={"absolute"}
          top={"50%"}
          left={0}
          ml={6}
          h={"max-content"}
          transform={"translateY(-50%)"}
          _hover={{ color: "teal.400" }}
        >
          <Icon as={RiMenu4Fill} w={7} h={7} />
        </Button>
        <HStack
          flex={1}
          justifyContent={"flex-end"}
          spacing={12}
          display={{ base: "none", md: "flex" }}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
        </HStack>
        <Text fontSize={"2xl"} fontFamily={'"Noto Kufi Arabic", sans-serif'}>
          مجديد
        </Text>
        <HStack
          flex={1}
          justifyContent={"flex-start"}
          spacing={12}
          display={{ base: "none", md: "flex" }}
        >
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Blogs</Link>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Navbar;
