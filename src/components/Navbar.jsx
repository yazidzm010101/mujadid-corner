import {
  Button,
  Container,
  Fade,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import Floatbar from "./Floatbar";
import MujadidCorner from "@/assets/MujadidCorner";
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
        px={0}
        transition={".2s all ease-in-out"}
        color={"gray.800"}
        _dark={{ color: "white" }}
      >
        <HStack
          w={"full"}
          py={4}
          px={4}
          justifyContent={"center"}
          spacing={6}
          pos={"relative"}
        >
          <HStack flexShrink={0} justifyContent={"flex-start"} spacing={12}>
            <NightModeSwitcher />
          </HStack>
          <HStack
            as={Fade}
            in={!navDislosure.isOpen}
            flex={1}
            justifyContent={"flex-start"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            <NextLink href={"#"}>Projects</NextLink>
            <NextLink href={"/gallery"}>Gallery</NextLink>
            <NextLink href={"#"}>Blogs</NextLink>
            <NextLink href={"/about"}>About</NextLink>
          </HStack>
          <HStack
            flexShrink={0}
            flex={{ base: 1, md: 0 }}
            justifyContent={"flex-end"}
            spacing={12}
            mr={6}
          >
            <NextLink href={"/"} px={2} py={2}>
              <MujadidCorner color={"gray.600"} _dark={{ color: "white" }} />
            </NextLink>
          </HStack>
          <HStack flexShrink={0} spacing={12}>
            <Button
              bg={(isSolid && "white") || "transparent"}
              rounded={"full"}
              pos={"fixed"}
              top={3}
              right={2}
              shadow={isSolid && "xl"}
              w={"max-content"}
              px={3}
              py={3}
              h={"max-content"}
              onClick={() => navDislosure.onToggle()}
              color={"gray.600"}
              _dark={{ color: !isSolid && "white" }}
              _hover={{ color: "teal.400" }}
            >
              <Icon
                as={RiMenu4Fill}
                w={7}
                h={7}
                transformOrigin={"center"}
                transition={"all .2s ease-in-out"}
                transform={navDislosure.isOpen && "rotate(180deg)"}
                opacity={navDislosure.isOpen && 0}
              />
            </Button>
          </HStack>
        </HStack>
        <Floatbar isOpen={navDislosure.isOpen} onClose={navDislosure.onClose} />
      </Container>
    </div>
  );
}

export default Navbar;
