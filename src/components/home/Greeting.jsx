import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Aurora from "@/assets/Aurora";
import { BiSolidConfused } from "react-icons/bi";
import JupyterRing from "@/assets/JupyterRing";
import JupyterRingAlt from "@/assets/JupyterRingAlt";
import Link from "next/link";
import SimpleAbout from "./SimpleAbout";
import StarNoise from "@/assets/StarNoise";
import config from "~/_data/config";

function Greeting() {
  const { scrollY } = useScroll();
  const greetingYReal = useTransform(() => scrollY.get() / -1);
  const greetingY = useSpring(greetingYReal, { stiffness: 50, damping: 10 });
  const greetingButtonYReal = useTransform(() => scrollY.get() / -3);
  const greetingButtonY = useSpring(greetingButtonYReal, {
    stiffness: 50,
    damping: 10,
  });
  return (
    <VStack
      bgColor={"black"}
      w={"full"}
      spacing={6}
      mt={-24}
      // mb={10}
      py={64}
      // clipPath={"polygon(0% 0%, 100% 0%, 100% 100%, 0% 95%)"}
      px={4}
      pos={"relative"}
      overflow={"hidden"}
    >
      {/* <Image
        src={
          "https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_640.jpg"
        }
        alt={"banner"}
        filter={"blur(4px)"}
        opacity={0.2}
        w={"full"}
        h={"full"}
        objectFit={"cover"}
        pos={"absolute"}
        top={0}
        left={0}
      /> */}
      <Box
        id={"aurora"}
        as={Aurora}
        w={"full"}
        h={"full"}
        pos={"absolute"}
        top={0}
        left={0}
        opacity={1}
      />
      <Box
        as={StarNoise}
        w={"full"}
        h={"full"}
        pos={"absolute"}
        top={0}
        left={0}
        opacity={1}
        filter={"blur(1px)"}
      />
      <Box
        opacity={1}
        bgGradient={"linear(to-t, teal.900, transparent)"}
        w={"full"}
        h={"full"}
        objectFit={"cover"}
        pos={"absolute"}
        top={0}
        left={0}
      />
      <Box display={{ base: "none", md: "block" }}>
        <motion.div
          style={{
            position: "absolute",
            pointerEvents: "none",
            width: "200vh",
            height: "200vh",
            left: "70%",
            top: "0%",
            offsetPosition: "center",
          }}
          animate={{
            rotate: [0, 360],
            x: ["-50%"],
            y: ["-50%"],
            offsetPosition: "center",
          }}
          transition={{
            duration: 120,
            ease: "linear",
            delay: 0,
            repeat: Infinity,
          }}
        >
          <JupyterRing
            filter={"blur(3px)"}
            color={"blue.200"}
            opacity={0.02}
            w={"full"}
            h={"full"}
          />
        </motion.div>
      </Box>
      <motion.div
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "200vh",
          height: "200vh",
          left: "70%",
          top: "0%",
          offsetPosition: "center",
        }}
        animate={{
          rotate: [0, -360],
          x: ["-50%"],
          y: ["-50%"],
          offsetPosition: "center",
        }}
        transition={{
          duration: 120,
          ease: "linear",
          delay: 0,
          repeat: Infinity,
        }}
      >
        <JupyterRingAlt
          filter={"blur(3px)"}
          color="teal.200"
          opacity={0.02}
          w={"full"}
          h={"full"}
        />
      </motion.div>
      <motion.div style={{ y: greetingY, position: "absolute" }}>
        <Heading
          userSelect={"none"}
          as={"h1"}
          mt={{ base: 0, md: 6 }}
          letterSpacing={1}
          fontWeight={"normal"}
          maxW={"10ch"}
          fontSize={{ base: "5xl", lg: "7xl" }}
          textAlign={"center"}
          bgGradient={"linear(to-br, green.400, teal.300, purple.600)"}
          bgClip={"text"}
          filter={"blur(5px)"}
          opacity={0.5}
          pointerEvents={"none"}
        >
          <Text>Welcome to {config.page_name}</Text>
        </Heading>
      </motion.div>
      <motion.div style={{ y: greetingY, position: "relative" }}>
        <Heading
          as={motion.h1}
          letterSpacing={1}
          fontWeight={"normal"}
          maxW={"10ch"}
          fontSize={{ base: "5xl", lg: "7xl" }}
          textAlign={"center"}
          bgGradient={"linear(to-br, green.400, teal.300, purple.600)"}
          bgClip={"text"}
        >
          <Text>Welcome to {config.page_name}</Text>
        </Heading>
      </motion.div>

      <motion.div style={{ y: greetingY, position: "relative" }}>
        <Text
          pos={"relative"}
          textAlign={"center"}
          maxW={"640px"}
          fontSize={"2xl"}
          fontWeight={"medium"}
          color={"white"}
          mb={8}
        >
          The place where I can share my thoughts, story, and idea to the world
        </Text>
      </motion.div>
      <motion.div
        style={{
          y: greetingButtonY,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HStack w={"full"} justifyContent={"center"} spacing={4} my={8}>
          <Button
            rounded={"full"}
            size={"lg"}
            py={{ base: 8, md: 10 }}
            px={{ base: 9, md: 16 }}
          >
            Read my blog
          </Button>
          <Button
            rounded={"full"}
            size={"lg"}
            variant={"outline"}
            color={"white"}
            py={{ base: 8, md: 10 }}
            px={{ base: 9, md: 16 }}
            _hover={{ bg: "whiteAlpha.100" }}
          >
            See my works
          </Button>
        </HStack>
        <Button
          as={Link}
          href={"#greeting"}
          rounded={"full"}
          size={"lg"}
          variant={"ghost"}
          color={"white"}
          py={{ base: 8, md: 10 }}
          px={{ base: 9, md: 16 }}
          w={"max-content"}
          mx={"auto"}
          leftIcon={<Icon as={BiSolidConfused} w={6} h={6} />}
          _hover={{ bg: "whiteAlpha.100" }}
        >
          Who is this guy, like really?
        </Button>
      </motion.div>
      <SimpleAbout />
    </VStack>
  );
}

export default Greeting;
