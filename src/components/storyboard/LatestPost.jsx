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
    <Stack
      pos={"relative"}
      margin={"0 auto"}
      w={"calc(100% + 3rem)"}
      mx={-6}
      maxW={"container.xl"}
      flexDirection={"row"}
      spacing={0}
      flexWrap={"wrap"}
      py={6}
    >
      {data?.map((item, i) => (
        <Flex
          as={NextLink}
          href={`/storyboard/${item.year}/${item.month}/${item.slug}`}
          key={i}
          flexDirection={"column"}
          w={{ base: "full", md: "50%" }}
          p={6}
        >
          <AspectRatio
            ratio={4 / 3}
            flexShrink={0}
            boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.2)"}
            rounded={"xl"}
            overflow={"hidden"}
          >
            <>
              <Image
                src={getFullUrl(item.preview)}
                alt={item.title}
                filter={"blur(20px)"}
                transform={"scale(1.5)"}
                rounded={"xl"}
              />
              <Image
                src={getFullUrl(item.preview)}
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
                {formatDateString({ input: item.date })}
              </Text>
            </HStack>
          </VStack>
        </Flex>
      ))}
    </Stack>
  );
}

export default LatestPost;
