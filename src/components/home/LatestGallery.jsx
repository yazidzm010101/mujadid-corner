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
      bg={"gray.100"}
      pos={"relative"}
      w={"full"}
      mx={"auto"}
      py={24}
      mb={-24}
      overflow={"hidden"}
      minH={"130vh"}
    >
      <AspectRatio
        ratio={4 / 3}
        pos={"absolute"}
        transform={"scaleY(-100%)"}
        bottom={0}
        opacity={0.5}
        right={{ base: "-50%", lg: 0 }}
        w={{ base: "200%", lg: "150%" }}
      >
        <Box as={WaveAlt} />
      </AspectRatio>
      <Container
        w={"full"}
        maxW={"container.xl"}
        px={{ lg: 10 }}
        mx={"auto"}
        pos={"relative"}
      >
        <Heading
          as="h2"
          // px={4}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          letterSpacing={4}
          color={"teal.900"}
        >
          Gallery
        </Heading>
        <Text
          maxW={"container.md"}
          mt={4}
          mb={20}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          letterSpacing={4}
          color={"teal.900"}
        >
          Not just writing code, I also love art, drawing, and design
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
            // as={NextLink}
            // href={`/posts/${item.slug}`}
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
                    letterSpacing={1.5}
                    mb={1}
                    fontWeight={"medium"}
                    noOfLines={2}
                  >
                    {item.title}
                  </Text>
                </VStack>
              </>
            </AspectRatio>
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
              Explore more
            </Button>
          </HStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default LatestGallery;
