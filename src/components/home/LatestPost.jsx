import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { BsArrowRightCircleFill } from "react-icons/bs";
import NextLink from "next/link";
import WaveAlt from "@/assets/WaveAlt";
import { useRouter } from "next/router";

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
      bg={"gray.100"}
      pos={"relative"}
      w={"full"}
      mx={"auto"}
      py={24}
      clipPath={"polygon(0% 2%, 100% 0%, 100% 100%, 0% 100%)"}
      overflow={"hidden"}
      my={-24}
      minH={"130vh"}
    >
      <Container
        w={"full"}
        maxW={"container.xl"}
        px={{ lg: 10 }}
        mx={"auto"}
        pos={"relative"}
      >
        <Heading
          as="h2"
          mb={20}
          // px={4}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          letterSpacing={4}
          color={"teal.900"}
        >
          Latest posts
        </Heading>
      </Container>
      <AspectRatio
        ratio={4 / 3}
        pos={"absolute"}
        transform={"scaleY(-100%)"}
        bottom={0}
        right={0}
        w={"100%"}
      >
        <Box as={WaveAlt} />
      </AspectRatio>
      <Stack
        pos={"relative"}
        margin={"0 auto"}
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 0, lg: 10 }}
        flexDirection={"row"}
        spacing={0}
        flexWrap={"wrap"}
        py={6}
      >
        {data?.map((item, i) => (
          <Flex
            as={NextLink}
            href={`/posts/${item.slug}`}
            key={i}
            flexDirection={"column"}
            w={{ base: "full", md: "50%", lg: "33.33%" }}
            p={6}
          >
            <AspectRatio
              ratio={[4 / 3, 1, 3 / 4]}
              flexShrink={0}
              boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.2)"}
              rounded={"xl"}
            >
              <Image
                src={getFullUrl(item.coverImage)}
                alt={item.title}
                rounded={"xl"}
              />
            </AspectRatio>
            <VStack alignItems={"flex-start"} my={6}>
              <Text
                as={"h5"}
                fontSize={"3xl"}
                mb={1}
                noOfLines={2}
                // fontWeight={"bold"}
                // mt={{ base: 8, md: 0 }}
              >
                {item.title}
              </Text>
              {/* <Text
                fontSize={"1.1rem"}
                color={"gray.600"}
                lineHeight={"2rem"}
                mb={2}
                noOfLines={2}
              >
                {item.excerpt}
              </Text> */}
              <HStack w={"full"}>
                <Text fontSize={"sm"} color={"gray.500"}>
                  {item.date}
                </Text>
              </HStack>
            </VStack>
          </Flex>
        ))}
        <Container maxW={"container.xl"} w={"full"}>
          <HStack w={"full"} justifyContent={"flex-end"} my={5}>
            <Button
              as={Link}
              href="#"
              color={"teal.900"}
              iconSpacing={4}
              rightIcon={<Icon h={7} w={7} as={BsArrowRightCircleFill} />}
              rounded={"full"}
              variant={"ghost"}
              fontSize={"2xl"}
              fontWeight={"extrabold"}
              px={10}
              py={10}
              bg={"transparent"}
              letterSpacing={1}
              mr={-10}
              _hover={{
                // bg: "gray.800",
                // color: "teal.200",
                transform: "scale(1.01)",
                textUnderlineOffset: 12,
                // textDecoration: "unset !important",
              }}
              // color={"teal.200"}
              size={"lg"}
            >
              Read my blog
            </Button>
          </HStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default LatestPost;
