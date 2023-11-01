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
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 4, lg: 10 }}
        mx={"auto"}
        pos={"relative"}
      >
        <Heading
          data-aos={"scale-fade-up"}
          as="h2"
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          color={"teal.900"}
          _dark={{ color: "teal.300" }}
        >
          Story Board
          <Image
            src={
              "https://www.iconarchive.com/download/i138836/microsoft/fluentui-emoji-3d/Writing-Hand-3d-Default.1024.png"
            }
            display={"inline"}
            verticalAlign={"middle"}
            mx={4}
            w={{ base: 10, md: 16, lg: 20 }}
          />
        </Heading>
      </Container>
      <Container
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 4, lg: 10 }}
        mx={"auto"}
        pos={"relative"}
      >
        <Text
          data-aos={"scale-fade-up"}
          maxW={"container.xl"}
          mt={4}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color={"teal.800"}
          _dark={{ color: "gray.300" }}
        >
          The board that hold all of my writings and posts.
        </Text>
        <Text
          data-aos={"scale-fade-up"}
          maxW={"container.xl"}
          mt={4}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color={"teal.700"}
          _dark={{ color: "gray.400" }}
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
            href={`/storyboard/${item.slug}`}
            key={i}
            flexDirection={"column"}
            w={{ base: "full", md: "50%", lg: "33.33%" }}
            p={6}
          >
            <AspectRatio
              data-aos={"shrink-fade-up"}
              ratio={[4 / 3, 1, 3 / 4]}
              flexShrink={0}
              boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.2)"}
              rounded={"xl"}
              overflow={"hidden"}
            >
              <>
                <Image
                  src={getFullUrl(item.coverImage)}
                  alt={item.title}
                  filter={"blur(20px)"}
                  transform={"scale(1.5)"}
                  rounded={"xl"}
                />
                <Image
                  src={getFullUrl(item.coverImage)}
                  alt={item.title}
                  objectFit={"contain !important"}
                  rounded={"xl"}
                />
              </>
            </AspectRatio>
            <VStack alignItems={"flex-start"} my={6}>
              <Text
                data-aos={"scale-fade-up"}
                as={"h5"}
                fontSize={"3xl"}
                mb={1}
                color={"gray.700"}
                noOfLines={2}
                _dark={{ color: "gray.200" }}
              >
                {item.title}
              </Text>
              <HStack w={"full"} data-aos={"scale-fade-up"}>
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
            <Button
              data-aos={"scale-fade-left"}
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
              mr={-10}
              _hover={{
                transform: "scale(1.01)",
                textUnderlineOffset: 12,
              }}
              size={"lg"}
              color={"teal.900"}
              _dark={{ color: "teal.300" }}
            >
              Read other stories
            </Button>
          </HStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default LatestPost;
