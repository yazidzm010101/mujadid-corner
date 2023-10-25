import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Fade,
  HStack,
  Heading,
  Icon,
  Image,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import data from "~/_data/experience";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Experience() {
  const [active, setActive] = useState(0);
  const [interval, setInterval] = useState(4000);
  const router = useRouter();

  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  useEffect(() => {
    let to;
    if (interval >= 0) {
      to = setTimeout(() => {
        let nextActive = active + 1;
        if (nextActive > data.length - 1) {
          nextActive = 0;
        }
        setActive(nextActive);
      }, interval);
    }
    return () => {
      clearTimeout(to);
    };
  }, [active, interval]);

  return (
    <VStack w={"full"} mx={"auto"} pos={"relative"}>
      <Box w={"full"} maxW={"container.xl"} mx={"auto"}>
        <Heading
          w={"full"}
          as="h2"
          mb={10}
          px={4}
          textAlign={{ base: "center" }}
          fontSize={"xl"}
          letterSpacing={6}
          fontWeight={"extrabold"}
          textTransform={"uppercase"}
        >
          #Working Experience
        </Heading>
      </Box>
      <Container
        as={HStack}
        maxW={"container.xl"}
        spacing={0}
        alignItems={"start"}
        flexWrap={"wrap"}
      >
        <Box w={{ base: "full", md: "20%" }}>
          <Stack
            direction={{ base: "row", md: "column" }}
            overflowX={{ base: "auto", md: "hidden" }}
            px={6}
            flexShrink={0}
          >
            {data.map((item, i) => (
              <Image
                key={i}
                my={4}
                w={{ base: "200px", md: "160px" }}
                h={"50px"}
                objectFit={"contain"}
                maxW={"full"}
                mx={4}
                src={getFullUrl(item.image)}
                alt={item.name}
                filter={
                  active == i ? "saturate(1)" : "saturate(0) brightness(0)"
                }
                opacity={active == i ? "1" : "0.5"}
                cursor={"pointer"}
                onClick={() => {
                  setActive(i);
                  setInterval(-1);
                }}
                transition={".15s all ease-in-out"}
                _hover={{
                  opacity: active != i && 0.75,
                }}
              />
            ))}
          </Stack>
        </Box>
        <Box w={{ base: "full", md: "80%" }} flexShrink={0}>
          {data[active]?.name && (
            <VStack px={12} w={"full"} alignItems={"start"} py={6}>
              <Text fontSize={"xl"}>{data[active].name}</Text>
              <Spacer as={"hr"} />
              <Text fontSize={"sm"} lineHeight={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec tortor non augue fermentum dictum. Cras tempus in orci in
                laoreet. Mauris sit amet rutrum justo, vel eleifend erat.
                Aliquam erat volutpat. Mauris porttitor rutrum auctor. Mauris
                blandit mauris sed mi cursus pretium. Pellentesque volutpat
                mattis lorem eget tempus. Sed ultricies vel lacus et blandit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                finibus mi laoreet ornare semper. Nunc bibendum lobortis nulla
                eget iaculis. Pellentesque viverra dui odio, ac lacinia elit
                pulvinar rutrum. Suspendisse faucibus pellentesque ipsum, non
                dapibus dui facilisis a.
              </Text>
            </VStack>
          )}
          {data.map((item, i) => (
            <Stack
              key={i}
              direction={"column"}
              in={active == i}
              as={Fade}
              unmountOnExit
              w={"full"}
              overflowX={"auto"}
              overflowY={"hidden"}
              px={6}
              py={{ base: 6, md: 0 }}
              alignItems={{ base: "center", md: "stretch   " }}
              _before={{ md: { content: "''", margin: "auto" } }}
              _after={{ md: { content: "''", margin: "auto" } }}
            >
              {item.experiences.map((item, i) => (
                <Box
                  key={i}
                  as={motion.div}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={{
                    offscreen: {
                      scale: 0.8,
                      opacity: 0,
                    },
                    onscreen: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.8,
                      },
                    },
                  }}
                  w={"full"}
                  // maxW={{ base: "400px", sm: "500px", md: "420px" }}
                  flexShrink={0}
                  px={3}
                  py={4}
                >
                  <Card
                    bg={"white"}
                    w={"full"}
                    h={"full"}
                    rounded={"xl"}
                    shadow={"unset"}
                  >
                    <CardHeader pb={1} pos={"relative"}>
                      {item.category && (
                        <Tag
                          rounded={"xl"}
                          mb={2}
                          bg={item.categoryColor + ".500"}
                          color={"white"}
                          pos={"absolute"}
                          top={-3}
                          left={4}
                        >
                          {item.category}
                        </Tag>
                      )}
                      <Heading
                        as={"h5"}
                        mt={1}
                        color={"gray.800"}
                        fontSize={"xl"}
                        fontWeight={"normal"}
                        letterSpacing={1}
                      >
                        {item.title}
                      </Heading>
                    </CardHeader>
                    <CardBody py={0}>
                      <Text lineHeight={2} color={"gray.500"} fontSize={"sm"}>
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
                            >
                              {skill.icon && (
                                <Icon as={skill.icon} mr={1} w={3} h={3} />
                              )}
                              <Text fontSize="xs">{skill.name}</Text>
                            </Tag>
                          ))}
                        </HStack>
                      )}
                    </CardFooter>
                  </Card>
                </Box>
              ))}
            </Stack>
          ))}
        </Box>
      </Container>
    </VStack>
  );
}

export default Experience;
