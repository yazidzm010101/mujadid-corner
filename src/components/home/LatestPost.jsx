import JupyterRing from "@/assets/JupyterRing";
import JupyterRingAlt from "@/assets/JupyterRingAlt";
import { getFullURL } from "@/lib/getFullUrl";
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
import { motion } from "framer-motion";
import NextLink from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

function LatestPost({ data }) {
  return (
    <Box
      bg={"gray.200"}
      pos={"relative"}
      w={"full"}
      mx={"auto"}
      mb={-24}
      py={24}
      clipPath={"polygon(0% 2%, 100% 0%, 100% 100%, 0% 100%)"}
    >
      <motion.div
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "200vh",
          height: "200vh",
          left: "30%",
          top: "40%",
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
          color={"gray.300"}
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
          left: "30%",
          top: "40%",
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
          color="gray.300"
          w={"full"}
          h={"full"}
        />
      </motion.div>
      <Box w={"full"} maxW={"container.xl"} mx={"auto"}>
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
            #Recent Posts
          </Heading>
          <Heading
            display={{ base: "none", xl: "block" }}
            pos={"absolute"}
            top={0}
            right={"-20rem"}
            transform={"rotate(-90deg) translate(-50%, -50%)"}
            as="h2"
            mb={20}
            px={4}
            textAlign={"center"}
            fontSize={"7xl"}
            letterSpacing={20}
            fontWeight={"extrabold"}
            textTransform={"uppercase"}
          >
            #Recent Posts
          </Heading>
        </Box>
      </Box>
      <VStack
        margin={"0 auto"}
        maxW={"container.xl"}
        px={{ base: 0, lg: "6rem" }}
        pr={{ xl: 72 }}
        py={6}
        spacing={32}
      >
        {data?.map((item, i) => (
          <Flex
            as={motion.div}
            key={i}
            flexDirection={{ base: "column", md: "row" }}
            initial="offscreen"
            whileInView="onscreen"
            alignItems={"stretch"}
            viewport={{ once: false, amount: 0 }}
            variants={{
              offscreen: {
                scale: 0.8,
                opacity: 0,
                y: "20%",
              },
              onscreen: {
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
          >
            <AspectRatio
              w={{ base: "full", md: "300px" }}
              ratio={16 / 9}
              flexShrink={0}
            >
              <Image
                src={getFullURL(item.coverImage)}
                alt={item.title}
                rounded={{ md: "lg" }}
              />
            </AspectRatio>
            <VStack alignItems={"flex-start"} mx={8}>
              <Text
                as={"h5"}
                fontSize={"3xl"}
                mb={1}
                noOfLines={2}
                fontWeight={"bold"}
                mt={{ base: 8, md: 0 }}
              >
                {item.title}
              </Text>
              <Text
                fontSize={"1.1rem"}
                color={"gray.600"}
                lineHeight={"2rem"}
                mb={2}
                noOfLines={2}
              >
                {item.excerpt}
              </Text>
              <HStack w={"full"}>
                <Text fontSize={"sm"} color={"gray.500"}>
                  {item.date}
                </Text>
                <Button
                  textTransform={"uppercase"}
                  rightIcon={<Icon as={FaArrowRight} />}
                  fontWeight={"bold"}
                  variant={"ghost"}
                  marginTop={"auto"}
                  marginLeft={"auto"}
                >
                  <NextLink href={`/posts/${item.slug}`}>Read more</NextLink>
                </Button>
              </HStack>
            </VStack>
          </Flex>
        ))}
        <HStack bg={"gray.200"} w={"full"} justifyContent={"center"}>
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
            See more of my posts
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default LatestPost;
