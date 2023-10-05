import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Fade,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import data from "~/_data/experience";

function Experience() {
  const [active, setActive] = useState(0);

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
      <HStack px={6}>
        {data.map((item, i) => (
          <Image
            key={i}
            my={4}
            w={"200px"}
            h={"50px"}
            objectFit={"contain"}
            src={item.image}
            alt={item.name}
            filter={active == i ? "saturate(1)" : "saturate(0)"}
            cursor={"pointer"}
            onClick={() => setActive(i)}
            transition={".15s all ease-in-out"}
            _hover={{ filter: active != i && "saturate(0.25)" }}
          />
        ))}
      </HStack>
      {data.map((item, i) => (
        <Stack
          key={i}
          direction={{ base: "column", md: "row" }}
          in={active == i}
          as={Fade}
          unmountOnExit
          w={"100% !important"}
          overflowX={"auto"}
          overflowY={"hidden"}
          px={{ base: 0, lg: "6rem" }}
          py={6}
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
              maxW={{ base: "400px", sm: "500px", md: "420px" }}
              flexShrink={0}
              px={3}
              py={2}
            >
              <Card
                bg={"white"}
                w={"full"}
                h={"full"}
                rounded={"3xl"}
                shadow={"unset"}
              >
                <CardHeader pb={1}>
                  {item.category && (
                    <Tag
                      rounded={"xl"}
                      mb={2}
                      bg={item.categoryColor + ".500"}
                      color={"white"}
                    >
                      {item.category}
                    </Tag>
                  )}
                  <Heading
                    as={"h5"}
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
    </VStack>
  );
}

export default Experience;
