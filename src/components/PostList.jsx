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
} from "@chakra-ui/react";

import { FaCode } from "react-icons/fa";
import NextLink from "next/link";
import { motion } from "framer-motion";

function LatestProject({ data }) {
  return (
    <Box pos={"relative"} w={"full"} mx={"auto"} py={12}>
      <Box w={"full"} maxW={"container.xl"} mx={"auto"}>
        <Heading
          w={"full"}
          as="h2"
          mb={10}
          px={4}
          textAlign={{ base: "center" }}
          fontSize={"xl"}
          letterSpacing={3}
          fontWeight={"extrabold"}
          textTransform={"uppercase"}
          color={"teal.300"}
        >
          Latest projects
        </Heading>
      </Box>
      <Flex
        alignItems={"center"}
        direction={{ base: "column", sm: "row" }}
        overflowX={"auto"}
        pos={"relative"}
        px={{ base: 0, lg: "6rem" }}
        py={6}
        _before={{ md: { content: "''", margin: "auto" } }}
        _after={{ md: { content: "''", margin: "auto" } }}
      >
        {data?.map((item, i) => (
          <Box
            as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            key={i}
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              offscreen: {
                scale: 0.8,
                opacity: 0,
              },
              onscreen: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
            w={"full"}
            maxW={"480px"}
            flexShrink={0}
            px={3}
            py={3}
          >
            <Link
              key={i}
              as={NextLink}
              href={`/projects/${item.slug}`}
              display={"block"}
              w={"full"}
              rounded={"xl"}
              border={"1px"}
              borderColor={"blackAlpha.200"}
              _hover={{
                transform: "scale(1.01)",
                borderColor: "green.400",
              }}
              overflow={"hidden"}
            >
              <AspectRatio ratio={16 / 9}>
                <>
                  <Image
                    border={"1px"}
                    borderColor={"gray.100"}
                    src={item.coverImage}
                    w={"full"}
                    h={"full"}
                    objectFit={"cover"}
                    alt={item.title}
                  />
                  <Text
                    bgGradient={
                      "linear(to-b, rgba(0,0,0,0), blackAlpha.300, blackAlpha.800)"
                    }
                    color={"white"}
                    pb={4}
                    pt={24}
                    bottom={0}
                    w={"full"}
                    textAlign={"start"}
                    px={6}
                    fontWeight={"bold"}
                    letterSpacing={2}
                    justifyContent={"start !important"}
                    alignItems={"end !important"}
                    top={0}
                  >
                    {item.title}
                  </Text>
                </>
              </AspectRatio>
            </Link>
          </Box>
        ))}
      </Flex>
      <HStack w={"full"} justifyContent={"center"} my={5}>
        <Button
          as={Link}
          rightIcon={<Icon as={FaCode} />}
          rounded={"3xl"}
          px={10}
          py={6}
          href="mailto:yazidzm.developer@gmail.com?subject=Hello%20Yazid"
          bg={"teal.200"}
          letterSpacing={1}
          _hover={{
            bg: "teal.400",
            color: "white",
            transform: "scale(1.02)",
            shadow: "0px 6px 16px #38B2AC",
            border: "1px",
            borderColor: "rgba(255,255,255,0.2)",
          }}
          color={"teal.800"}
        >
          See more
        </Button>
      </HStack>
    </Box>
  );
}

export default LatestProject;
