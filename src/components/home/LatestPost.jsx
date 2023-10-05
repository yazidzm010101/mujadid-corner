import JupyterRing from "@/assets/JupyterRing";
import JupyterRingAlt from "@/assets/JupyterRingAlt";
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
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

function LatestPost({ data }) {
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  return (
    <Box
      bg={"gray.200"}
      pos={"relative"}
      w={"full"}
      mx={"auto"}
      mb={-24}
      py={24}
      clipPath={"polygon(0% 2%, 100% 0%, 100% 100%, 0% 100%)"}
      minH={"130vh"}
    >
      <Box w={"full"} maxW={"container.xl"} mx={"auto"} pos={"relative"}>
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
            right={"-26rem"}
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
        pos={"relative"}
        margin={"0 auto"}
        maxW={"container.xl"}
        px={{ base: 0, lg: "6rem" }}
        pr={{ xl: 48 }}
        py={6}
        spacing={32}
      >
        {data?.map((item, i) => (
          <Flex key={i} flexDirection={{ base: "column", md: "row" }}>
            <AspectRatio
              w={{ base: "full", md: "300px" }}
              ratio={16 / 9}
              flexShrink={0}
            >
              <Image
                src={getFullUrl(item.coverImage)}
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
        <HStack w={"full"} justifyContent={"center"}>
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
