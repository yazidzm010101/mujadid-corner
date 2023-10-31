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
import MotionBox from "@/components/MotionBox";
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
      pos={"relative"}
      w={"full"}
      mx={"auto"}
      overflow={"visible"}
      minH={"130vh"}
      bg={"gray.200"}
      _dark={{ bg: "gray.900" }}
    >
      <AspectRatio
        ratio={4 / 3}
        pos={"absolute"}
        bottom={0}
        opacity={0.8}
        w={{ base: "300%", lg: "200%" }}
        _light={{
          transform: "rotate(-90deg) scaleX(1) scaleY(1)",
          transformOrigin: "center",
          top: 0,
          right: "-10%",
        }}
        _dark={{
          filter: "blur(100px)",
          top: "50%",
          left: { base: "-50%", lg: "-20%" },
        }}
      >
        <Box as={WaveAlt} />
      </AspectRatio>
      <Container
        as={MotionBox}
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 4, lg: 10 }}
        mx={"auto"}
        pos={"relative"}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
      >
        <Heading
          as="h2"
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          letterSpacing={4}
          color={"teal.900"}
          _dark={{ color: "teal.300" }}
        >
          Story Board
        </Heading>
      </Container>
      <Container
        as={MotionBox}
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 4, lg: 10 }}
        mx={"auto"}
        pos={"relative"}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
      >
        <Text
          maxW={"container.md"}
          mt={4}
          textAlign={{ base: "center", md: "start" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color={"teal.800"}
          _dark={{ color: "teal.500" }}
        >
          Basically, this section lies all of my writings and posts.
        </Text>
        <Text
          maxW={"container.lg"}
          mt={4}
          textAlign={{ base: "center", md: "start" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color={"teal.700"}
          _dark={{ color: "teal.700" }}
        >
          Here are some of the latest posts.
        </Text>
      </Container>
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
              as={MotionBox}
              ratio={[4 / 3, 1, 3 / 4]}
              flexShrink={0}
              boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.2)"}
              rounded={"xl"}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.5 }}
            >
              <Image
                src={getFullUrl(item.coverImage)}
                alt={item.title}
                rounded={"xl"}
              />
            </AspectRatio>
            <VStack
              as={MotionBox}
              alignItems={"flex-start"}
              my={6}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8 }}
            >
              <Text
                as={"h5"}
                fontSize={"3xl"}
                mb={1}
                color={"gray.700"}
                noOfLines={2}
                _dark={{ color: "gray.200" }}
              >
                {item.title}
              </Text>
              <HStack w={"full"}>
                <Text
                  fontSize={"sm"}
                  color={"gray.600"}
                  _dark={{ color: "gray.300" }}
                >
                  {item.date}
                </Text>
              </HStack>
            </VStack>
          </Flex>
        ))}
        <Container maxW={"container.xl"} w={"full"}>
          <HStack w={"full"} justifyContent={"flex-end"} my={5}>
            <MotionBox
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.5 }}
            >
              <Button
                as={Link}
                href="#"
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
                  transform: "scale(1.01)",
                  textUnderlineOffset: 12,
                }}
                size={"lg"}
                color={"teal.900"}
                _dark={{ color: "teal.300" }}
              >
                Read my blog
              </Button>
            </MotionBox>
          </HStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default LatestPost;
