import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

import data from "~/_data/experience";
import { useRouter } from "next/router";

function Experience() {
  const router = useRouter();
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
              top={"3rem"}
              left={0}
            />
            <Box
              pos={"absolute"}
              w={6}
              h={6}
              p={2}
              rounded={"full"}
              bg={"teal.400"}
              top={"3rem"}
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
                I&apos;m not born yet! 🤓
              </Box>
            )}
            <HStack w={"full"} spacing={4} my={4} alignItems={"start"}>
              <AspectRatio
                data-aos={"shrink-fade-up"}
                boxShadow={"0 1rem 3rem -1.5rem black"}
                w={24}
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
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color={"gray.700"}
                  _dark={{ color: "gray.300" }}
                >
                  {item.position}
                </Text>
                <Text
                  color={"gray.500"}
                  fontSize={{ base: "lg", md: "xl" }}
                  _dark={{ color: "gray.400" }}
                >
                  {item.name}
                </Text>
              </VStack>
            </HStack>
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
              {item.experiences.map((item, i) => (
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
    </Box>
  );
}

export default Experience;
