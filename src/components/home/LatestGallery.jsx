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
import WaveAlt from "@/assets/WaveAlt";
import { useRouter } from "next/router";

function LatestGallery({ data }) {
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
      py={24}
      mb={-24}
      overflow={"hidden"}
      minH={"130vh"}
      bg={"gray.200"}
      _dark={{ bg: "gray.900" }}
    >
      <AspectRatio
        ratio={4 / 3}
        pos={"absolute"}
        transform={"scaleY(-100%)"}
        bottom={0}
        right={{ base: "-50%", lg: 0 }}
        w={{ base: "200%", lg: "150%" }}
        opacity={0.3}
        _dark={{ opacity: 0.1 }}
      >
        <Box
          as={WaveAlt}
          startColor={"rgb(100 255 200)"}
          endColor={"rgb(100 200 255)"}
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
          Art Scape
          <Image
            src={
              // "https://cdn3d.iconscout.com/3d/premium/thumb/gallery-6332703-5209349.png"
              "https://cdn3d.iconscout.com/3d/premium/thumb/painting-board-5748776-4817934.png?f=webp"
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
          Not just writing codes, I also love doing some{" "}
          <Box
            as={"span"}
            verticalAlign={"top"}
            pt={0.5}
            display={"inline-block"}
            fontFamily={"Satisfy"}
          >
            arts & designs
          </Box>
          .
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
          Here, take a look at some of them.
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
            data-aos={"shrink-fade-up"}
            key={i}
            flexDirection={"column"}
            w={{ base: "full", md: "50%", lg: "33.33%" }}
            p={6}
            pos={"relative"}
          >
            <AspectRatio
              ratio={[4 / 3, 1, 3 / 4]}
              flexShrink={0}
              boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.2)"}
              rounded={"xl"}
              overflow={"hidden"}
              cursor={"pointer"}
              bg={"white"}
            >
              <>
                <Image
                  src={getFullUrl(item.coverImage)}
                  alt={item.title}
                  rounded={"xl"}
                  _hover={{ transform: "scale(1.1)" }}
                  transition={"all .2s ease-in-out"}
                />
                <VStack
                  top={"unset !important"}
                  bottom={"0 !important"}
                  bgGradient={
                    "linear(to-t, teal.900, teal.900 20%, transparent)"
                  }
                  h={"max-content !important"}
                  alignItems={"flex-start"}
                  pt={20}
                  pb={3}
                  px={6}
                >
                  <Text
                    as={"h5"}
                    color={"gray.200"}
                    fontSize={"lg"}
                    w={"full"}
                    mb={1}
                    fontWeight={"medium"}
                    noOfLines={2}
                  >
                    {item.title}
                  </Text>
                </VStack>
              </>
            </AspectRatio>

            {item.toolIcon && (
              <Image
                bg={"gray.100"}
                boxShadow={"0 0.5rem 3rem -.5rem black"}
                pos={"absolute"}
                top={10}
                left={2}
                pointerEvents={"none"}
                src={item.toolIcon}
                w={12}
                h={12}
                objectFit={"cover"}
                rounded={"xl"}
              />
            )}
          </Flex>
        ))}
        <Container maxW={"container.xl"} w={"full"}>
          <HStack w={"full"} justifyContent={"flex-end"} my={5}>
            <Button
              data-aos={"scale-fade-left"}
              as={Link}
              href="/artscape"
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
              Explore more
            </Button>
          </HStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default LatestGallery;
