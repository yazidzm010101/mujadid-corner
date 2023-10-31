import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";

import Aurora from "@/assets/Aurora";
import { CgMouse } from "react-icons/cg";
import MotionBox from "../MotionBox";
import SimpleAbout from "./SimpleAbout";
import StarNoise from "@/assets/StarNoise";
import config from "~/_data/config";
import style from "@/styles/greeting.module.css";

function Greeting() {
  const { scrollY } = useScroll();
  const scrollDown = () => {
    window.scrollTo({ top: window.outerHeight * 0.8, behavior: "smooth" });
  };
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const scale = useTransform(scrollY, [0, 1000], [1, 0.5]);

  return (
    <VStack
      as={MotionBox}
      w={"full"}
      spacing={6}
      mt={-24}
      py={64}
      px={4}
      pos={"relative"}
      overflow={"hidden"}
      bgColor={"white"}
      _dark={{ bgColor: "black" }}
      style={{ perspective: "100px" }}
    >
      <Box
        as={Aurora}
        w={"full"}
        h={"full"}
        pos={"absolute"}
        top={0}
        left={0}
        display={"none"}
        _dark={{ display: "block" }}
      />
      <Box
        className={style["star-noise"]}
        as={Aurora}
        rounded={"full"}
        overflow={"hidden"}
        pos={"absolute"}
        top={"-10%"}
        mx={"auto"}
        w={"500vh"}
        h={"500vh"}
        opacity={1}
        _dark={{ opacity: 0.1 }}
      />
      <Box
        pos={"absolute"}
        top={0}
        left={0}
        bottom={0}
        right={0}
        bgGradient={
          "linear(to-b, gray.200, transparent 20%, transparent 40%, gray.200)"
        }
        _dark={{ display: "none" }}
      />
      <Box
        className={style["star-noise"]}
        as={StarNoise}
        rounded={"full"}
        overflow={"hidden"}
        pos={"absolute"}
        top={{ base: 0, md: "-10%" }}
        mx={"auto"}
        w={"200vw"}
        h={"200vw"}
        display="none"
        _dark={{ display: "block" }}
      />
      <Box
        opacity={1}
        roundedTop={"full"}
        w={{ base: "200%", md: "180%", lg: "150%" }}
        h={"full"}
        left={"50%"}
        transform={"translateX(-50%)"}
        objectFit={"cover"}
        pos={"absolute"}
        top={{ base: "35%", md: "40%", xl: "45%" }}
        bgGradient={
          "radial(transparent, teal.100 30%, gray.200 50%, rgb(200 200 200 / 0.1), rgb(200 200 200 / 0.8) 90%, rgb(200 200 200 / 1))"
        }
        _dark={{
          boxShadow: "inset 0 0 4rem rgb(32 109 117 / 0.8)",
          bgGradient:
            "radial(transparent, teal.900 30%, gray.900 60%, rgb(0 0 0 / 0.5), rgb(0 0 0 / 0) 90%, rgb(0 0 0 / 0.9))",
        }}
      />
      <MotionBox
        // initial={{ y: 20, opacity: 0 }}
        style={{
          y: y,
          scale: scale,
          opacity: 1,
          rotateX: 1,
          // transformStyle: "preserve-3d",
        }}
        // viewport={{ once: true }}
        pos={"relative"}
      >
        <Heading
          as={"h1"}
          letterSpacing={1}
          fontWeight={"medium"}
          fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
          textAlign={"center"}
          bgGradient={
            "linear(to-br, teal.600, gray.600 30%, gray.700, gray.700, gray.600 70%, teal.600)"
          }
          bgClip={"text"}
          _dark={{
            bgGradient: "linear(to-br, green.400, teal.300, purple.600)",
          }}
        >
          <Text>
            Welcome to
            <br />
            {config.page_name}
          </Text>
        </Heading>
      </MotionBox>
      <MotionBox
        // initial={{ y: 20, opacity: 0 }}
        style={{
          y: y,
          scale: scale,
          opacity: 1,
          rotateX: 1,
          // transformStyle: "preserve-3d",
        }}
        // viewport={{ once: true }}
        pos={"relative"}
      >
        <Text
          pos={"relative"}
          textAlign={"center"}
          maxW={"640px"}
          fontSize={"2xl"}
          fontWeight={"light"}
          color={"gray.700"}
          _dark={{ color: "white" }}
          mb={8}
        >
          The place where I can share my thoughts, story, and idea to the world
        </Text>
      </MotionBox>
      <MotionBox
        // initial={{ y: 20, opacity: 0 }}
        style={{
          y: y,
          scale: scale,
          opacity: 1,
          rotateX: 1,
          // transformStyle: "preserve-3d",
        }}
        // viewport={{ once: true }}
        pos={"relative"}
        w={"full"}
        display={"flex"}
        flexDir={"column"}
      >
        <HStack w={"full"} justifyContent={"center"} spacing={4} my={8}>
          <Button
            rounded={"full"}
            size={"lg"}
            variant={"glass"}
            _light={{
              bg: "teal.700",
              color: "white",
              borderColor: "transparent",
              _hover: { bg: "teal.800" },
            }}
          >
            Read my blog
          </Button>
          <Button
            rounded={"full"}
            size={"lg"}
            variant={"glass"}
            colorScheme="transparent"
          >
            See my works
          </Button>
        </HStack>
        <MotionBox
          marginX={"auto"}
          animate={{
            y: [0, -20],
            opacity: [0, 0.1, 1, 1, 0],
            offsetPosition: "center",
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: 0,
            repeat: Infinity,
          }}
        >
          <Button
            onClick={scrollDown}
            rounded={"full"}
            size={"lg"}
            variant={"blur"}
            py={{ base: 6, md: 8 }}
            px={{ base: 2, md: 4 }}
            minW={"max-content"}
            w={"max-content"}
          >
            <Icon as={CgMouse} w={8} h={8} />
          </Button>
        </MotionBox>
      </MotionBox>
      <SimpleAbout />
    </VStack>
  );
}

export default Greeting;
