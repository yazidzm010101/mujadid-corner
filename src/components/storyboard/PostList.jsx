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

function PostList({ data }) {
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
      py={20}
      mt={-96}
      bgGradient={"linear(to-b, transparent, gray.200 24rem, gray.300)"}
      _dark={{
        bgGradient: "linear(to-b, transparent, teal.700 10rem, gray.800)",
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
            as={NextLink}
            href={`/storyboard/${item.slug}`}
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
      </Stack>
    </Box>
  );
}

export default PostList;
