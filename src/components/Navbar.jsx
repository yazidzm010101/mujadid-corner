import {
  Box,
  Button,
  Container,
  Fade,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import Floatbar from "./Floatbar";
import NextLink from "next/link";
import NightModeSwitcher from "./NightModeSwitcher";
import { RiMenu4Fill } from "react-icons/ri";
import { useRouter } from "next/router";

function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const ref = useRef({});
  const { pathname } = useRouter();
  const navDislosure = useDisclosure();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const difference = scrollY.getPrevious() - latest;
    const direction = difference < 0 ? "down" : "up";
    setIsSolid(latest > ref.current.clientHeight);
    setIsHidden(direction == "down" && latest > ref.current.clientHeight);
  });
  return (
    <div ref={ref} style={{ width: "100%", position: "relative" }}>
      <Container
        maxW={"full"}
        pos={"relative"}
        zIndex={999}
        transition={".2s all ease-in-out"}
        color={"gray.800"}
        _dark={{ color: "white" }}
      >
        <HStack
          w={"full"}
          py={6}
          px={6}
          justifyContent={"center"}
          spacing={12}
          pos={"relative"}
        >
          <HStack flexShrink={0} justifyContent={"flex-start"} spacing={12}>
            <Button
              bg={(isSolid && "white") || "transparent"}
              rounded={"full"}
              pos={"fixed"}
              top={4}
              left={4}
              shadow={isSolid && "xl"}
              w={"max-content"}
              px={4}
              py={4}
              right={0}
              h={"max-content"}
              onClick={() => navDislosure.onToggle()}
              color={"gray.600"}
              _dark={{ color: !isSolid && "white" }}
              _hover={{ color: "teal.400" }}
            >
              <Icon as={RiMenu4Fill} w={7} h={7} />
            </Button>
          </HStack>
          <HStack flex={1} justifyContent={"flex-start"} spacing={12}>
            <NextLink href={"/"} px={2} py={2}>
              {" "}
              <Text
                fontSize={"2xl"}
                fontWeight={"black"}
                overflow={"hidden"}
                fontFamily={'"Noto Kufi Arabic", sans-serif'}
              >
                مجديد
              </Text>
            </NextLink>
          </HStack>
          <HStack
            // as={Fade}
            // in={!navDislosure.isOpen}
            flex={1}
            justifyContent={"flex-end"}
            spacing={12}
            // display={{ base: "none", md: "flex" }}
          >
            <NightModeSwitcher />
            {/* <NextLink href={"#"}>Projects</NextLink>
            <NextLink href={"/gallery"}>Gallery</NextLink>
            <NextLink href={"#"}>Blogs</NextLink>
            <NextLink href={"/about"}>About</NextLink> */}
          </HStack>
        </HStack>
        <Floatbar isOpen={navDislosure.isOpen} onClose={navDislosure.onClose} />
      </Container>
    </div>
  );
}

export default Navbar;
