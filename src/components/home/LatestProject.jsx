import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FaBox, FaCode, FaPaperPlane } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ coverImage, title, excerpt }) {
  const ref = useRef(null);

  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Box h={"100vh"} w={"full"} px={4} pos={"relative"} overflowX={"hidden"}>
      <motion.div
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: "0",
          bottom: "20%",
          opacity: 0.1,
          x: y,
          offsetAnchor: "right center",
        }}
      >
        <Heading
          letterSpacing={2}
          color={"transparent"}
          as={"h3"}
          fontWeight={"extrabold"}
          fontSize={"400px"}
          w={"max-content"}
          style={{
            WebkitTextStroke: "2px black",
          }}
        >
          {title}
        </Heading>
      </motion.div>
      <motion.div
        style={{
          pointerEvents: "none",
          position: "absolute",
          right: "-20%",
          top: "0",
          opacity: 0.1,
          x: y,
          offsetAnchor: "right center",
        }}
      >
        <Heading
          letterSpacing={2}
          color={"transparent"}
          as={"h3"}
          fontWeight={"extrabold"}
          fontSize={"200px"}
          w={"max-content"}
          style={{
            WebkitTextStroke: "2px black",
          }}
        >
          {title}
        </Heading>
      </motion.div>
      <VStack
        pos={"relative"}
        w={"full"}
        alignItems={"flex-start"}
        maxW={"container.md"}
        mx={"auto"}
      >
        <AspectRatio ratio={4 / 3} w={"full"} mx={"auto"} mb={6}>
          <Image src={getFullUrl(coverImage)} alt={title} rounded={"xl"} />
        </AspectRatio>
        <Heading
          letterSpacing={3}
          fontWeight={"extrabold"}
          fontSize={"4xl"}
          as={"h3"}
          w={"max-content"}
          textAlign={"start"}
        >
          {title}
        </Heading>
        <Text
          fontSize={"xl"}
          noOfLines={3}
          lineHeight={"3rem"}
          letterSpacing={2}
        >
          {excerpt}
        </Text>
      </VStack>
    </Box>
  );
}

function LatestProject({ data }) {
  return (
    <>
      <Box pos={"relative"} w={"full"} mx={"auto"} py={12} pl={{ xl: "8rem" }}>
        <Box w={"full"} maxW={"container.xl"} mx={"auto"}>
          <Heading
            display={{ xl: "none" }}
            as="h2"
            mb={20}
            px={4}
            textAlign={{ base: "center" }}
            fontSize={{ base: "2xl" }}
            letterSpacing={4}
            fontWeight={"extrabold"}
            textTransform={"uppercase"}
          >
            #Recent projects
          </Heading>
          <Heading
            display={{ base: "none", xl: "block" }}
            pos={"absolute"}
            top={0}
            left={"-26rem"}
            transform={"rotate(-90deg) translate(-50%, -50%)"}
            as="h2"
            mb={20}
            px={4}
            textAlign={"center"}
            fontSize={"7xl"}
            letterSpacing={20}
            fontWeight={"extrabold"}
            textTransform={"uppercase"}
            // style={{ offsetAnchor: "center" }}
          >
            #Recent projects
          </Heading>
        </Box>
        {data?.map((item, i) => (
          <Project key={i} {...item} />
        ))}
      </Box>
      <HStack w={"full"} justifyContent={"center"} my={5}>
        <Button
          as={Link}
          rightIcon={<Icon as={HiArrowRight} />}
          rounded={"md"}
          px={10}
          py={6}
          href="mailto:yazidzm.developer@gmail.com?subject=Hello%20Yazid"
          bg={"gray.800"}
          letterSpacing={5}
          _hover={{
            bg: "teal.400",
            color: "white",
            transform: "scale(1.02)",
            shadow: "0px 6px 16px #38B2AC",
            border: "1px",
            borderColor: "rgba(255,255,255,0.2)",
          }}
          color={"teal.200"}
          textTransform={"uppercase"}
        >
          See more of my works
        </Button>
      </HStack>
    </>
  );
}

export default LatestProject;
