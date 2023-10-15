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
import { FaBox, FaCode, FaPaperPlane } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

import { HiArrowRight } from "react-icons/hi";
import NextLink from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ coverImage, title, icon, excerpt, demoURL, repoURL }) {
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
          opacity: 0.05,
          x: y,
          offsetAnchor: "right center",
        }}
      >
        <Heading
          letterSpacing={2}
          // color={"transparent"}
          as={"h3"}
          fontWeight={"extrabold"}
          fontSize={"400px"}
          w={"max-content"}
          // style={{
          //   WebkitTextStroke: "2px black",
          // }}
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
          opacity: 0.05,
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
        pl={{ xl: "8rem" }}
        pos={"relative"}
        w={"full"}
        alignItems={"flex-start"}
        maxW={"container.md"}
        mx={"auto"}
      >
        <AspectRatio
          ratio={4 / 3}
          w={"full"}
          bg={"white"}
          rounded={"xl"}
          border={"1px solid rgb(0 0 0 / 0.2)"}
          overflow={"hidden"}
        >
          <>
            <Image
              filter={"brightness(0.95)"}
              src={getFullUrl(coverImage)}
              alt={title}
            />
            {(demoURL || repoURL) && (
              <Link
                bg={"rgb(0 0 0 / 0.5)"}
                color={"white"}
                fontSize={"2xl"}
                href={demoURL || repoURL}
                opacity={0}
                target="_blank"
                _hover={{ opacity: 1 }}
              >
                {(demoURL && "Open demo page") || "Open repository"}
              </Link>
            )}
          </>
        </AspectRatio>
        <Box pos={"relative"} w={"full"}>
          <Image
            w={{ base: "4rem", lg: "6rem" }}
            h={{ base: "4rem", lg: "6rem" }}
            pos={"absolute"}
            right={0}
            transform={"translate(-20%, -100%)"}
            rounded={"2xl"}
            shadow={"dark-lg"}
            alt={title}
            src={getFullUrl(icon)}
          />
          <Heading
            letterSpacing={3}
            fontWeight={"extrabold"}
            fontSize={"4xl"}
            as={"h3"}
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
        </Box>
      </VStack>
    </Box>
  );
}

function LatestProject({ data }) {
  return (
    <>
      <Box pos={"relative"} w={"full"} mx={"auto"} py={12} minH={"120vh"}>
        <Box w={"full"} maxW={"container.xl"} mx={"auto"} pl={{ xl: "8rem" }}>
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
        <Box>
          {data?.map((item, i) => (
            <Project key={i} {...item} />
          ))}
        </Box>
      </Box>
      <HStack w={"full"} justifyContent={"center"} my={5} pl={{ xl: "8rem" }}>
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
