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

function GalleryList({ data }) {
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  return (
    <Box
      bgGradient={"linear(to-t, gray.100, gray.100 90%, transparent)"}
      pos={"relative"}
      w={"full"}
      mx={"auto"}
      py={24}
      mt={-48}
      overflow={"hidden"}
      minH={"130vh"}
      _dark={{
        bgGradient: "linear(to-t, gray.800, gray.900 90%, transparent)",
      }}
    >
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
                  h={"max-content !important"}
                  alignItems={"flex-start"}
                  pt={20}
                  pb={3}
                  px={6}
                  bgGradient={
                    "linear(to-t, teal.900, teal.900 20%, transparent)"
                  }
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
      </Stack>
    </Box>
  );
}

export default GalleryList;
