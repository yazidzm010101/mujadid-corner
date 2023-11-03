import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import ProjectDetail from "./ProjectDetail";
import { useRouter } from "next/router";
import { useState } from "react";

function ProjectList({ data }) {
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  const [active, setActive] = useState(null);
  const detailDisc = useDisclosure();

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
            cursor={"pointer"}
            _hover={{ transform: "translateY(-4px)" }}
            transition={".2s transform ease-in-out"}
            onClick={() => {
              setActive(i);
              detailDisc.onOpen();
            }}
          >
            <AspectRatio
              ratio={4 / 3}
              flexShrink={0}
              boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.04)"}
              rounded={"xl"}
              role="group"
              transition={".2s all ease-in-out"}
              _hover={{
                boxShadow: "0 2rem 2rem 0.15rem rgb(0 0 0 / 0.2)",
              }}
            >
              <>
                <Image
                  src={getFullUrl(item.coverImage)}
                  alt={item.title}
                  rounded={"xl"}
                />
                {item.icon && (
                  <Image
                    src={getFullUrl(item.icon)}
                    rounded={"xl"}
                    bottom={"-.5rem !important"}
                    top={"unset !important"}
                    left={"unset !important"}
                    right={".5rem !important"}
                    shadow={"xl"}
                    border={"1px solid rgb(0 0 0 / 0.1)"}
                    w={{
                      base: "5rem !important",
                      sm: "4rem !important",
                      md: "3rem !important",
                    }}
                    h={{
                      base: "5rem !important",
                      sm: "4rem !important",
                      md: "3rem !important",
                    }}
                  />
                )}
              </>
            </AspectRatio>
            <VStack alignItems={"flex-start"} my={6}>
              <Text
                as={"h5"}
                fontSize={"2xl"}
                mb={1}
                color={"gray.700"}
                noOfLines={2}
                _dark={{ color: "gray.200" }}
              >
                {item.title}
              </Text>
              {/* <HStack w={"full"}>
                <Text
                  fontSize={"sm"}
                  color={"gray.600"}
                  _dark={{ color: "gray.300" }}
                >
                  {formatDateString({ input: item.date })}
                </Text>
              </HStack> */}
            </VStack>
          </Flex>
        ))}
      </Stack>
      <ProjectDetail
        data={data[active]}
        isOpen={detailDisc.isOpen}
        onClose={detailDisc.onClose}
      />
    </Box>
  );
}

export default ProjectList;
