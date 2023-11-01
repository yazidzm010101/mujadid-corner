import {
  Box,
  Button,
  Container,
  Fade,
  HStack,
  Icon,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import Floatbar from "./Floatbar";
import MujadidCorner from "@/assets/MujadidCorner";
import NextLink from "next/link";
import NightModeSwitcher from "./NightModeSwitcher";
import { RiMenu4Fill } from "react-icons/ri";
import { useRouter } from "next/router";

const data = [
  { name: "Workspace", href: "/workspace" },
  { name: "Storyboard", href: "/storyboard" },
  { name: "Artscape", href: "/artscape" },
  { name: "About", href: "/about" },
];

function Navbar() {
  const ref = useRef(null);
  const [isSolid, setIsSolid] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { pathname } = useRouter();
  const navDislosure = useDisclosure();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsSolid(latest > ref.current.clientHeight);
  });

  const detectIndex = () =>
    setActiveIndex(data.findIndex((item) => item.href == pathname));

  useEffect(() => {
    detectIndex();
  }, []);

  const getLeftPercentageNav = (i) => {
    const parent = ref.current;
    if (parent) {
      const child = parent.children[i];
      const width = parent.offsetWidth;
      if (child) {
        return (
          ((child.offsetLeft + child.offsetWidth / 2 - parent.offsetLeft) /
            width) *
          100
        );
      }
    }
    return 0;
  };

  const getWidthNav = (i) => {
    const parent = ref.current;
    if (parent) {
      const child = parent.children[i];
      if (child) {
        const width = child.offsetWidth;
        return width;
      }
    }
    return 0;
  };

  return (
    <Box w={"full"}>
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
          <Box as={Fade} in={!navDislosure.isOpen} mr={"auto"} pos={"relative"}>
            <HStack
              w={"full"}
              justifyContent={"flex-start"}
              spacing={0}
              display={{ base: "none", md: "flex" }}
              ref={ref}
            >
              {data.map((item, i) => (
                <Link
                  py={1}
                  px={3}
                  as={NextLink}
                  key={item.name}
                  href={item.href}
                  fontWeight={pathname == item.href && "bold"}
                  onMouseOver={() => setActiveIndex(i)}
                  onMouseLeave={detectIndex}
                  textDecor={"unset !important"}
                  color={
                    pathname == item.href || i == activeIndex ? "teal.600" : ""
                  }
                  _dark={{
                    color:
                      pathname == item.href || i == activeIndex
                        ? "teal.200"
                        : "",
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Box
                pointerEvents={"none"}
                w={getWidthNav(activeIndex) / 2 + "px"}
                h={"3px"}
                bg={"teal.600"}
                pos={"absolute"}
                bottom={-1}
                transform={"translateX(-50%)"}
                rounded={"full"}
                opacity={activeIndex == -1 && 0}
                left={
                  (activeIndex == -1 && "50%") ||
                  getLeftPercentageNav(activeIndex) + "%"
                }
                transition={
                  (activeIndex == -1 && "all .2s ease-in-out") ||
                  "all .2s ease-in-out, opacity .5s ease-in"
                }
                _dark={{ bg: "teal.200" }}
              />
            </HStack>
          </Box>
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
              bg={!isSolid && "transparent"}
              backdropFilter={isSolid && "blur(4px) contrast(2) saturate(2)"}
              variant={"glass"}
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
              _dark={{ color: "white" }}
              _hover={{ color: "teal.400", _dark: { color: "teal.200" } }}
              {...(!isSolid && { borderColor: "transparent" })}
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
    </Box>
  );
}

export default Navbar;
