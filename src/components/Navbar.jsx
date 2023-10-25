import { Box, Button, Container, HStack, Icon, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import NextLink from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
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
    <Container
      maxW={"full"}
      pos={"relative"}
      zIndex={999}
      transition={".2s all ease-in-out"}
      color={(pathname == "/" && "white") || "gray.800"}
      bg={
        isSolid
          ? (pathname == "/" && "rgb(0 0 0 / 0.2)") || "whiteAlpha.800"
          : (pathname == "/" && "rgb(0 0 0 / 0)") || "rgb(255 255 255 / 0)"
      }
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
        <HStack flex={1} justifyContent={"flex-start"} spacing={12}>
          <NextLink href={"/"} px={2} py={2}>
            {" "}
            <Text
              fontSize={"2xl"}
              fontFamily={'"Noto Kufi Arabic", sans-serif'}
            >
              مجديد
            </Text>
          </NextLink>
        </HStack>
        <HStack
          flex={8}
          justifyContent={"center"}
          spacing={12}
          display={{ base: "none", md: "flex" }}
        >
          <NextLink href={"#"}>Projects</NextLink>
          <NextLink href={"#"}>Blogs</NextLink>
          <NextLink href={"/about"}>About</NextLink>
        </HStack>
        <HStack flex={1} justifyContent={"flex-end"} spacing={12}>
          <Button
            bg={"transparent"}
            rounded={"999px"}
            px={2}
            py={2}
            right={0}
            h={"max-content"}
            color={pathname == "/" && "white"}
            _hover={{ color: "teal.400" }}
          >
            <Icon as={RiMenu4Fill} w={7} h={7} />
          </Button>
        </HStack>
      </HStack>
    </Container>
  );
}

export default Navbar;
