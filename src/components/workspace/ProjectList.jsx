import {
  AspectRatio,
  Box,
  Flex,
  HStack,
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
            w={{ base: "full", sm: "50%", lg: "33.33%" }}
            p={6}
            cursor={"pointer"}
            _hover={{ transform: "translateY(-4px)" }}
            transition={".2s transform ease-in-out"}
            onClick={() => {
              setActive(i);
              detailDisc.onOpen();
            }}
          >
            <VStack
              alignItems={"flex-start"}
              w={"full"}
              h={"full"}
              rounded={"xl"}
              overflow={"hidden"}
              bg={"gray.100"}
              _dark={{ bg: "teal.900" }}
              transition={"all .2s ease-in-out"}
              boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.05)"}
              _hover={{
                boxShadow: "0 2rem 2rem 0.15rem rgb(0 0 0 / 0.2)",
              }}
            >
              <AspectRatio
                w={"full"}
                ratio={4 / 3}
                flexShrink={0}
                boxShadow={"0 2rem 2rem 0.15rem rgb(0 0 0 / 0.04)"}
                rounded={"xl"}
                role="group"
                transition={".2s all ease-in-out"}
              >
                <>
                  <Image src={getFullUrl(item.coverImage)} alt={item.title} />
                  <Box
                    bgGradient={"linear(to-t, gray.200, transparent 20%)"}
                    _dark={{
                      bgGradient: "linear(to-t, teal.900, transparent 20%)",
                    }}
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
                      objectFit={"contain !important"}
                      bg={"white"}
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
              <Text
                px={4}
                as={"h5"}
                fontSize={"xl"}
                mb={1}
                color={"gray.700"}
                noOfLines={1}
                _dark={{ color: "gray.200" }}
              >
                {item.title}
              </Text>
              <HStack w={"full"} px={4} pb={8}>
                <Text
                  fontSize={"sm"}
                  color={"gray.600"}
                  _dark={{ color: "gray.300" }}
                  noOfLines={2}
                >
                  {item.excerpt}
                </Text>
              </HStack>
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
