import {
  Box,
  Button,
  Collapse,
  Fade,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import NextLink from "next/link";
import React from "react";
import { RiCloseFill } from "react-icons/ri";

function Floatbar({ isOpen, onClose, ...props }) {
  return (
    <Box
      unmountOnExit
      animateOpacity
      pos={"fixed"}
      top={0}
      left={0}
      roundedBottomRight={"full"}
      w={(isOpen && "400px") || "0 !important"}
      h={(isOpen && "400px") || "0 !important"}
      transition={"all .2s ease-in-out"}
      trans
      overflow={"hidden"}
      maxW={"full"}
      boxShadow={"1rem 1.5rem 6rem -1rem rgb(0 0 0 / 0.5)"}
    >
      <Box
        as={Fade}
        in={isOpen}
        unmountOnExit
        bg={"teal.900"}
        w={"full"}
        h={"full"}
      >
        <Button
          bg={"transparent"}
          rounded={"999px"}
          pos={"fixed"}
          top={4}
          left={4}
          w={"max-content"}
          px={4}
          py={4}
          right={0}
          color={"gray.400"}
          h={"max-content"}
          onClick={onClose}
          _hover={{ color: "teal.100" }}
        >
          <Icon as={RiCloseFill} w={7} h={7} />
        </Button>
        <Box pl={"5.5rem"} py={6}>
          <NextLink href={"/"}>
            {" "}
            <Text
              fontSize={"2xl"}
              fontWeight={"black"}
              color="teal.100"
              fontFamily={'"Noto Kufi Arabic", sans-serif'}
            >
              مجديد
            </Text>
          </NextLink>
        </Box>
        <VStack alignItems={"stretch"} pb={14}>
          <Link
            as={NextLink}
            px={8}
            py={4}
            color={"gray.200"}
            href={"/projects"}
          >
            Projects
          </Link>
          <Link
            as={NextLink}
            px={8}
            py={4}
            color={"gray.200"}
            href={"/projects"}
          >
            Blogs
          </Link>
          <Link
            as={NextLink}
            px={8}
            py={4}
            color={"gray.200"}
            href={"/projects"}
          >
            Gallery
          </Link>
          <Link
            as={NextLink}
            px={8}
            py={4}
            color={"gray.200"}
            href={"/projects"}
          >
            About
          </Link>
        </VStack>
      </Box>
    </Box>
  );
}

export default Floatbar;
