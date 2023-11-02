import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { formatDateString } from "@/lib/textUtils";
import { useRouter } from "next/router";

function ProjectList({ data }) {
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
      bgGradient={
        "linear(to-b, transparent, gray.100 24rem, gray.100, transparent)"
      }
      _dark={{
        bgGradient: "linear(to-b, transparent, teal.700 24rem, gray.800)",
      }}
    >
      <Box
        w={"full"}
        h={"50%"}
        pos={"absolute"}
        bottom={0}
        left={0}
        bg={"teal.200"}
        _dark={{ bg: "teal.800" }}
      />
      <Box
        w={"full"}
        h={"50%"}
        pos={"absolute"}
        bottom={0}
        left={0}
        bgImage={`url("${getFullUrl("/images/workspace-pattern.svg")}")`}
        bgRepeat={"repeat"}
        backgroundSize={"150px"}
        filter={"invert(1)"}
        opacity={0.1}
      />
      <Box
        w={"full"}
        h={"full"}
        pos={"absolute"}
        bottom={0}
        left={0}
        bgGradient={
          "linear(to-b, transparent, gray.100 24rem, gray.100, transparent)"
        }
        _dark={{
          bgGradient:
            "linear(to-b, transparent, teal.700 24rem, teal.700, transparent)",
        }}
      />
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
            // href={`/workspace/${item.slug}`}
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
                  {formatDateString({ input: item.date })}
                </Text>
              </HStack>
            </VStack>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}

export default ProjectList;
