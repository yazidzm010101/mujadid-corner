import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Portal,
  ScaleFade,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

import { BsX } from "react-icons/bs";
import { useRouter } from "next/router";

function GalleryList({ data }) {
  const router = useRouter();
  const [active, setActive] = useState(-1);
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  useEffect(() => {
    if (active > -1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [active]);

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
              onClick={() => setActive(i)}
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
            <Portal>
              <VStack
                unmountOnExit
                as={ScaleFade}
                bg={"blackAlpha.800"}
                h={"full"}
                in={i == active}
                left={0}
                pos={"fixed"}
                spacing={0}
                top={0}
                w={"full"}
                zIndex={1001}
              >
                <Image
                  h={"full"}
                  objectFit={"contain"}
                  src={item.coverImage}
                  w={"full"}
                />
                {data.length > 1 && (
                  <>
                    <VStack
                      h={"calc(100% + 5px)"}
                      justifyContent={"center"}
                      left={0}
                      pl={{ base: 2, md: 4, lg: 10 }}
                      pos={"absolute"}
                      pr={14}
                      role="group"
                      top={0}
                      transition={".25s all ease-in-out"}
                      bgGradient={"linear(to-r, blackAlpha.500, transparent)"}
                    >
                      <Button
                        _groupHover={{ opacity: 1 }}
                        _hover={{ bg: "whiteAlpha.100" }}
                        color={"white"}
                        opacity={0.5}
                        px={1}
                        py={7}
                        rounded={"full"}
                        variant={"ghost"}
                        onClick={() =>
                          setActive(
                            active - 1 < 0 ? data.length - 1 : active - 1,
                          )
                        }
                      >
                        <Icon as={BiChevronLeft} h={12} w={12} />
                      </Button>
                    </VStack>
                    <VStack
                      h={"calc(100% + 5px)"}
                      justifyContent={"center"}
                      pl={14}
                      pos={"absolute"}
                      pr={{ base: 2, md: 4, lg: 10 }}
                      right={0}
                      role="group"
                      top={0}
                      transition={".25s all ease-in-out"}
                      bgGradient={"linear(to-l, blackAlpha.500, transparent)"}
                    >
                      <Button
                        _groupHover={{ opacity: 1 }}
                        _hover={{ bg: "whiteAlpha.100" }}
                        color={"white"}
                        opacity={0.5}
                        px={1}
                        py={7}
                        rounded={"full"}
                        variant={"ghost"}
                        onClick={() =>
                          setActive(active + 1 >= data.length ? 0 : active + 1)
                        }
                      >
                        <Icon as={BiChevronRight} h={12} w={12} />
                      </Button>
                    </VStack>
                  </>
                )}
                <Button
                  _hover={{ bg: "whiteAlpha.200" }}
                  color={"white"}
                  pos={"absolute"}
                  px={2}
                  py={7}
                  right={{ base: 3, md: 4 }}
                  rounded={"full"}
                  top={{ base: 1, md: 4 }}
                  variant={"ghost"}
                  onClick={() => setActive(-1)}
                >
                  <Icon as={BsX} h={10} w={10} />
                </Button>
              </VStack>
            </Portal>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}

export default GalleryList;
