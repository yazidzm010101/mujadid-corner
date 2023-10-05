import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
  position,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import config from "~/_data/config";
import { motion } from "framer-motion";
import JupyterRing from "@/assets/JupyterRing";
import JupyterRingAlt from "@/assets/JupyterRingAlt";

function Greeting() {
  return (
    <VStack
      bgColor={"black"}
      w={"full"}
      spacing={6}
      my={-24}
      mb={10}
      py={64}
      clipPath={"polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)"}
      px={4}
      pos={"relative"}
      overflow={"hidden"}
    >
      <Image
        src={
          "https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_640.jpg"
        }
        alt={"banner"}
        filter={"blur(4px)"}
        opacity={0.2}
        w={"full"}
        h={"full"}
        pos={"absolute"}
        top={0}
        left={0}
      />
      <motion.div
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "200vh",
          height: "200vh",
          left: "70%",
          top: "100%",
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
          opacity={0.05}
          w={"full"}
          h={"full"}
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "200vh",
          height: "200vh",
          left: "70%",
          top: "100%",
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
          opacity={0.05}
          w={"full"}
          h={"full"}
        />
      </motion.div>
      <Heading
        as={"h1"}
        letterSpacing={1}
        fontWeight={"extrabold"}
        maxW={"10ch"}
        fontSize={{ base: "5xl", lg: "7xl" }}
        textAlign={"center"}
        bgGradient={"linear(to-br, green.400, teal.300, purple.600)"}
        bgClip={"text"}
        pos={"relative"}
      >
        <Text>Welcome to {config.page_name}</Text>
      </Heading>
      <Heading
        as={"h1"}
        letterSpacing={1}
        fontWeight={"extrabold"}
        maxW={"10ch"}
        fontSize={{ base: "5xl", lg: "7xl" }}
        textAlign={"center"}
        bgGradient={"linear(to-br, green.400, teal.300, purple.600)"}
        bgClip={"text"}
        pos={"absolute"}
        filter={"blur(20px)"}
        opacity={0.5}
        pointerEvents={"none"}
      >
        <Text>Welcome to {config.page_name}</Text>
      </Heading>
      <Text
        pos={"relative"}
        textAlign={"center"}
        maxW={"640px"}
        fontSize={"2xl"}
        fontWeight={"medium"}
        color={"white"}
      >
        The place where I can share my thoughts, story, and idea to the world
      </Text>
    </VStack>
  );
}

export default Greeting;
