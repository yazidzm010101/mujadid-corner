import { Box, Button, Fade, Icon, Link, Text, VStack } from "@chakra-ui/react";

import MujadidCorner from "@/assets/MujadidCorner";
import NextLink from "next/link";
import { RiCloseFill } from "react-icons/ri";

function Floatbar({ isOpen, onClose, ...props }) {
  return (
    <Box
      unmountOnExit
      animateOpacity
      pos={"fixed"}
      top={0}
      right={0}
      roundedBottomLeft={(isOpen && "0") || "full"}
      w={(isOpen && "100vw") || "0 !important"}
      h={(isOpen && "100vw") || "0 !important"}
      transition={"all .3s ease-in-out"}
      overflow={"hidden"}
    >
      <Box
        as={Fade}
        in={isOpen}
        unmountOnExit
        bg={"teal.900"}
        w={"100vw"}
        h={"100vh"}
        overflowY={"auto"}
      >
        <Button
          bg={"transparent"}
          rounded={"999px"}
          pos={"fixed"}
          w={"max-content"}
          px={3}
          py={3}
          top={3}
          right={2}
          color={"gray.400"}
          h={"max-content"}
          onClick={onClose}
          _hover={{ color: "teal.100" }}
        >
          <Icon as={RiCloseFill} w={7} h={7} />
        </Button>
        <Box pr={"5.5rem"} py={4} w={"max-content"} mx={"auto"}>
          <NextLink href={"/"}>
            <MujadidCorner color="teal.100" />
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
            href={"/gallery"}
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
