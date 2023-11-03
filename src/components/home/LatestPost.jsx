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
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { BsArrowRightCircleFill } from "react-icons/bs";
import NextLink from "next/link";
import { formatDateString } from "@/lib/textUtils";
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
        pointerEvents={"none"}
        opacity={0.3}
        w={{ base: "200%", md: "full" }}
        ratio={1}
        pos={"absolute"}
        top={0}
        transform={"translateY(-20%)"}
        right={{ base: 0, md: "-20%" }}
        _dark={{ mixBlendMode: "color-burn" }}
      >
        <Image
          src={getFullUrl(
            "https://fffuel.co/images/dddepth-preview/dddepth-028.jpg",
          )}
          style={{
            maskImage: "radial-gradient(black, transparent)",
            WebkitMaskImage: "radial-gradient(black, transparent, transparent)",
          }}
        />
      </AspectRatio>
      <AspectRatio
        pointerEvents={"none"}
        w={{ base: "200%", md: "full" }}
        ratio={1}
        pos={"absolute"}
        top={0}
        transform={"translateY(-20%)"}
        right={{ base: 0, md: "-20%" }}
      >
        <Box
          bgImage={`url("${getFullUrl("/images/storyboard-pattern.svg")}")`}
          bgRepeat={"repeat"}
          backgroundSize={"50px"}
          mixBlendMode={"color-burn"}
          opacity={0.1}
          _dark={{ filter: "invert(1)", mixBlendMode: "unset" }}
          style={{
            maskImage: "radial-gradient(black, transparent)",
            WebkitMaskImage: "radial-gradient(black, transparent, transparent)",
          }}
        />
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
            display={"inline"}
            verticalAlign={"middle"}
            mx={4}
            w={{ base: 10, md: 16, lg: 20 }}
            src={
              "https://www.iconarchive.com/download/i138836/microsoft/fluentui-emoji-3d/Writing-Hand-3d-Default.1024.png"
            }
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
                  {formatDateString({ input: item.date, isRelative: true })}
                </Text>
              </HStack>
            </VStack>
          </Flex>
        ))}
        <Container maxW={"container.xl"} w={"full"}>
          <HStack w={"full"} justifyContent={"flex-end"} my={5}>
            <Button
              data-aos={"scale-fade-left"}
              as={NextLink}
              href="/storyboard"
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
              size={"lg"}
              color={"teal.900"}
              _dark={{ color: "teal.300" }}
              _hover={{
                transform: "scale(1.01)",
                textUnderlineOffset: 12,
                bg: "transparent",
              }}
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
