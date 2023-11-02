import { Box, Button, Icon, Link, VStack } from "@chakra-ui/react";

import MujadidCorner from "@/assets/MujadidCorner";
import NextLink from "next/link";
import NightModeSwitcher from "./NightModeSwitcher";
import { RiCloseFill } from "react-icons/ri";
import { useEffect } from "react";

const data = [
  { name: "Home", href: "/" },
  { name: "Workspace", href: "/workspace" },
  { name: "Storyboard", href: "/storyboard" },
  { name: "Artscape", href: "/artscape" },
  { name: "About", href: "/about" },
];

function Floatbar({ isOpen, onClose, ...props }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <Box
      pos={"fixed"}
      top={0}
      right={0}
      roundedBottomLeft={isOpen ? "0" : "full"}
      w={isOpen ? "100vw" : "0"}
      h={isOpen ? "100vh" : "0"}
      transition={"all .25s ease-in-out"}
      shadow={"2xl"}
      overflow={"hidden"}
    >
      <Box
        w={"100vw"}
        h={"100vh"}
        overflowY={"auto"}
        bg={"gray.100"}
        _dark={{ bg: "teal.900" }}
      >
        <Box
          as={NightModeSwitcher}
          pointerEvents={!isOpen && "none"}
          pos={"fixed"}
          top={4}
          left={4}
          className={
            (isOpen && "animate__animated animate__fadeIn") ||
            "animate__animated animate__fadeOut"
          }
          style={{
            animationDelay: (isOpen && ".25s") || "0s",
            animationDuration: ".2s",
          }}
        />
        <Button
          pointerEvents={!isOpen && "none"}
          bg={"transparent"}
          rounded={"999px"}
          pos={"fixed"}
          w={"max-content"}
          px={3}
          py={3}
          top={3}
          right={2}
          color={"gray.600"}
          _dark={{ color: "gray.100" }}
          h={"max-content"}
          _hover={{ color: "teal.400" }}
          onClick={onClose}
        >
          <Icon
            as={RiCloseFill}
            w={7}
            h={7}
            transition={"all .2s ease-in-out"}
            transform={!isOpen && "rotate(-180deg)"}
            opacity={!isOpen && 0}
          />
        </Button>
        <Box py={"1.4rem"} w={"max-content"} ml={"auto"} mr={"4rem"}>
          <NextLink href={"/"}>
            <MujadidCorner
              color="teal.800"
              _dark={{ color: "teal.100" }}
              fontSize={"xl"}
            />
          </NextLink>
        </Box>
        <VStack
          alignItems={"stretch"}
          justifyContent={"center"}
          py={20}
          w={"full"}
          maxW={"300px  "}
          fontSize={"4xl"}
          mx={"auto"}
        >
          {data.map((item, i) => (
            <Link
              key={item.name}
              as={NextLink}
              px={8}
              py={4}
              fontWeight={"medium"}
              color={"gray.600"}
              _dark={{ color: "gray.200" }}
              href={item.href}
              className={
                (isOpen && "animate__animated animate__fadeInUp") ||
                "animate__animated animate__fadeOutDown"
              }
              style={{
                animationDuration: ".5s",
                animationDelay:
                  (isOpen && i * 0.07 + "s") ||
                  (data.length - (i + 1)) * 0.07 + "s",
              }}
            >
              {item.name}
            </Link>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default Floatbar;
