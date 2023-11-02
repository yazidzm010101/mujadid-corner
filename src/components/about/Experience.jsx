import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import Story from "./Story";
import data from "~/_data/experience";
import { useRouter } from "next/router";
import { useState } from "react";

function Experience() {
  const router = useRouter();
  const [activeStory, setActiveStory] = useState(-1);
  const storyDisc = useDisclosure();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };
  return (
    <Box w={"full"} mx={"auto"} pos={"relative"}>
      <Container
        px={{ base: 4, lg: 10 }}
        w={"full"}
        maxW={"container.xl"}
        mx={"auto"}
        pos={"relative"}
      >
        <Heading
          mb={20}
          data-aos={"scale-fade-up"}
          as="h2"
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          color={"teal.900"}
          _dark={{ color: "teal.300" }}
        >
          Experience
        </Heading>
      </Container>
      <Container maxW={"container.xl"}>
        {[...data].reverse().map((item, i) => (
          <Box pos={"relative"} w={"full"} pl={8} key={i}>
            <Box
              data-aos={"fade"}
              pos={"absolute"}
              w={8}
              borderLeft={"1px solid"}
              borderTop={"1px solid"}
              roundedTopLeft={"3xl"}
              roundedBottomLeft={i == data.length - 1 && "3xl"}
              borderColor={"teal.400"}
              h={(i != data.length - 1 && "calc(100% + 4rem)") || "full"}
              top={{ base: 8, md: 10, lg: 12 }}
              left={0}
            />
            <Box
              pos={"absolute"}
              w={6}
              h={6}
              p={2}
              rounded={"full"}
              bg={"teal.400"}
              top={{ base: 8, md: 10, lg: 12 }}
              left={-3}
            >
              <Box rounded={"full"} w={"full"} h={"full"} bg={"white"} />
            </Box>
            {i == data.length - 1 && (
              <Box
                fontWeight={"bold"}
                pos={"absolute"}
                px={3}
                py={2}
                color={"white"}
                fontSize={"sm"}
                rounded={"full"}
                bg={"teal.400"}
                bottom={-16}
                left={3}
              >
                <HStack spacing={1}>
                  <Box bg={"white"} rounded={"full"} px={0.5} fontSize={"xl"}>
                    🏃
                  </Box>
                  <Text>Yes, I&apos;m started here</Text>
                </HStack>
              </Box>
            )}
            <HStack
              pos={"relative"}
              w={"full"}
              spacing={4}
              my={4}
              alignItems={"start"}
            >
              <AspectRatio
                data-aos={"shrink-fade-up"}
                boxShadow={"0 1rem 3rem -1.5rem black"}
                w={{ base: 14, md: 20, lg: 24 }}
                flexShrink={0}
                ratio={1}
                bg={"white"}
                rounded={"xl"}
              >
                <Image
                  src={getFullUrl(item.image)}
                  px={2}
                  objectFit={"contain !important"}
                />
              </AspectRatio>
              <VStack
                data-aos={"scale-fade-up"}
                alignItems={"start"}
                flexGrow={1}
                spacing={0}
              >
                <Text
                  fontWeight={"bold"}
                  maxW={"full"}
                  wordBreak={"break-word"}
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  color={"gray.700"}
                  _dark={{ color: "gray.300" }}
                >
                  {item.position}
                </Text>
                <Text
                  color={"gray.500"}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  _dark={{ color: "gray.400" }}
                >
                  {item.name}
                </Text>
              </VStack>
            </HStack>
            {item?.gallery && (
              <HStack
                data-aos={"shrink-fade-up"}
                w={"max-content"}
                pos={"relative"}
                ml={10}
                spacing={0}
                flexShrink={0}
                rounded={"full"}
                cursor={"pointer"}
                onClick={() => {
                  storyDisc.onOpen();
                  setActiveStory(i);
                }}
              >
                {" "}
                <Box
                  data-aos={"fade"}
                  pos={"absolute"}
                  w={12}
                  borderLeft={"1px solid"}
                  borderTop={"1px solid"}
                  roundedTopLeft={"3xl"}
                  borderColor={"teal.400"}
                  borderStyle={"dashed"}
                  h={8}
                  top={6}
                  left={"-4.5rem"}
                />
                {item?.gallery.slice(0, 3).map((image, i) => (
                  <AspectRatio
                    key={i}
                    ratio={1}
                    rounded={"xl"}
                    overflow={"hidden"}
                    pos={"relative"}
                    zIndex={item?.gallery.length - i}
                    w={12}
                    ml={-10}
                    border={"2px solid"}
                    borderColor={"teal.400"}
                  >
                    <Image src={image} />
                  </AspectRatio>
                ))}
                {item?.gallery.length - 3 > 0 && (
                  <Flex
                    pos={"absolute"}
                    left={
                      Math.min(Math.max(item?.gallery.length - 3, 3), 3) * 0.3 +
                      "rem"
                    }
                    h={"full"}
                    fontWeight={"bold"}
                    roundedRight={"xl"}
                    bg={"teal.400"}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                    px={2}
                    pl={
                      Math.min(Math.max(item?.gallery.length - 3, 3), 3) * 0.3 +
                      "rem"
                    }
                    color={"white"}
                  >
                    {item?.gallery.length - 3}+
                  </Flex>
                )}
              </HStack>
            )}
            <Stack
              key={i}
              direction={"column"}
              w={"full"}
              py={{ base: 6, md: 0 }}
              alignItems={{ base: "center", md: "stretch   " }}
              _before={{ md: { content: "''", margin: "auto" } }}
              _after={{ md: { content: "''", margin: "auto" } }}
              spacing={12}
            >
              {[...item.experiences].reverse().map((item, i) => (
                <Box
                  key={i}
                  data-aos={"shrink-fade-up"}
                  w={"full"}
                  pos={"relative"}
                  flexShrink={0}
                >
                  <Box
                    data-aos={"fade"}
                    pos={"absolute"}
                    w={12}
                    borderLeft={"1px solid"}
                    borderTop={"1px solid"}
                    roundedTopLeft={"3xl"}
                    borderStyle={"dashed"}
                    borderColor={"teal.400"}
                    h={8}
                    top={-1}
                    left={-8}
                  />
                  <Card
                    w={"full"}
                    maxW={"container.lg"}
                    h={"full"}
                    rounded={"xl"}
                    shadow={"unset"}
                    bg={"whiteAlpha.500"}
                    backdropFilter={"blur(10px)"}
                    border={"1px solid"}
                    borderColor={"blackAlpha.50"}
                    transition={"all .2s ease-in-out"}
                    _dark={{
                      bg: "blackAlpha.100",
                      color: "gray.500",
                      borderColor: "whiteAlpha.200",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <CardHeader px={8} pb={1} pos={"relative"}>
                      {item.category && (
                        <Tag
                          rounded={"xl"}
                          mb={2}
                          fontWeight={"bold"}
                          bg={item.categoryColor + ".400"}
                          color={"white"}
                          pos={"absolute"}
                          top={-3}
                          left={4}
                          pt={1}
                        >
                          {item.category}
                        </Tag>
                      )}
                      <Heading
                        as={"h5"}
                        mt={1}
                        color={"gray.700"}
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        letterSpacing={1}
                        _dark={{ color: "gray.400" }}
                      >
                        {item.title}
                      </Heading>
                    </CardHeader>
                    <CardBody px={8} py={0}>
                      <Text
                        lineHeight={2}
                        color={"gray.500"}
                        fontSize={{ base: "lg", md: "xl" }}
                        _dark={{ color: "gray.500" }}
                      >
                        {item.description}
                      </Text>
                    </CardBody>
                    <CardFooter>
                      {item.skills && (
                        <HStack flexWrap={"wrap"} spacing={3}>
                          {item.skills.map((skill, i) => (
                            <Tag
                              key={i}
                              color={skill.color && skill.color + ".600"}
                              bg={skill.color && skill.color + ".50"}
                              rounded={"xl"}
                              _dark={{
                                bg: skill.color && skill.color + ".600",
                                color: "white",
                              }}
                            >
                              {skill.icon && (
                                <Icon as={skill.icon} mr={1} w={4} h={4} />
                              )}
                              <Text fontSize="md">{skill.name}</Text>
                            </Tag>
                          ))}
                        </HStack>
                      )}
                    </CardFooter>
                  </Card>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Container>
      <Story
        isOpen={storyDisc.isOpen}
        onClose={storyDisc.onClose}
        data={[...data].reverse()[activeStory]?.gallery}
        title={[...data].reverse()[activeStory]?.name}
      />
    </Box>
  );
}

export default Experience;
