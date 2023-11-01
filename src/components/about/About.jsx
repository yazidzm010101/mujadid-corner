import {
  AspectRatio,
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import ParallaxText from "../ParallaxText";
import data from "~/_data/about";
import { useRouter } from "next/router";

function ParallaxSkills({ baseVelocity = 2, skills, ...rest }) {
  return (
    <ParallaxText baseVelocity={baseVelocity} {...rest}>
      <HStack
        justifyContent={{ base: "center", md: "flex-start" }}
        flexWrap={"wrap"}
        w={"full"}
        spacing={[4, 4, 6]}
        my={[2, 2, 3]}
        mx={[2, 2, 3]}
      >
        {skills.map((item, i) => (
          <Flex
            bg={"whiteAlpha.100"}
            backdropFilter={"blur(10px) contrast(2)"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"gray.600"}
            rounded={"xl"}
            key={i}
            px={8}
            py={6}
            border={"1px solid"}
            borderColor={"blackAlpha.50"}
            transition={"all .2s ease-in-out"}
            _dark={{
              bg: "blackAlpha.100",
              color: "gray.500",
              borderColor: "whiteAlpha.200",
              backdropFilter: "blur(10px)",
            }}
            _hover={{
              bg: item.color,
              color: "white",
              _dark: { bg: item.color, color: "white" },
            }}
          >
            <Icon as={item.icon} mr={2} h={10} w={10} />
            <Text fontSize={"2xl"}>{item.name}</Text>
          </Flex>
        ))}
      </HStack>
    </ParallaxText>
  );
}

function About() {
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };
  return (
    <Box w={"full"}>
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
          About me
        </Heading>
      </Container>
      <Stack
        px={{ base: 4, lg: 10 }}
        w={"full"}
        maxW={"container.xl"}
        mx={"auto"}
        direction={{ base: "column", lg: "row" }}
        alignItems={"flex-start"}
        spacing={7}
      >
        <Box w={{ base: "full", lg: "40%" }} pos={"relative"}>
          <AspectRatio
            data-aos={"shrink-fade-up"}
            ratio={1}
            w={"200px"}
            mx={"auto"}
            maxW={"full"}
          >
            <>
              <Image
                src={
                  "https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png?f=webp"
                }
                display={"inline"}
                verticalAlign={"middle"}
                mx={4}
                objectFit={"contain"}
                pos={"absolute"}
                filter={"hue-rotate(90deg)"}
                transform={"translate(50%, 20%) scale(0.5)"}
              />
              <Image
                pos={"absolute"}
                transform={"translate(-70%, 30%) scale(0.7)"}
                src={
                  "https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png?f=webp"
                }
                display={"inline"}
                verticalAlign={"middle"}
                mx={4}
                objectFit={"contain"}
              />
              <Image
                rounded={"3rem"}
                w={"full"}
                h={"full"}
                src={getFullUrl(data.photo)}
                alt={"profile-image"}
                boxShadow={"0 1rem 4rem -1.5rem black"}
                border={"1px solid rgb(0 0 0 / 0.3)"}
              />
            </>
          </AspectRatio>
        </Box>
        <VStack
          w={{ base: "full", lg: "80%" }}
          pos={"relative"}
          alignItems={"flex-start"}
          textAlign={{ base: "center", lg: "start" }}
        >
          <Text
            data-aos={"scale-fade-up"}
            w={"full"}
            letterSpacing={1}
            lineHeight={2}
            fontWeight={"medium"}
            color={"gray.700"}
            fontSize={{ base: "4xl", md: "5xl" }}
            _dark={{ color: "gray.200" }}
          >
            Hi, I am {data.name}
          </Text>
          <Text
            data-aos={"scale-fade-up"}
            w={"full"}
            letterSpacing={1}
            lineHeight={2}
            color={"gray.500"}
            fontSize={{ base: "xl", md: "2xl" }}
            _dark={{ color: "gray.400" }}
          >
            {data.about}
          </Text>
        </VStack>
      </Stack>
      <Container maxW={"container.xl"} mt={20} px={{ base: 4, lg: 10 }}>
        <Text
          data-aos={"scale-fade-up"}
          w={"full"}
          color={"teal.800"}
          mx={"auto"}
          fontWeight={"black"}
          fontSize={{ base: "3xl", md: "4xl" }}
          letterSpacing={3}
          textAlign={{ base: "center", md: "end" }}
          _dark={{ color: "teal.300" }}
          mt={{ base: 48, md: 0 }}
        >
          Skills
        </Text>
      </Container>
      <Box
        h={"1px"}
        w={"full"}
        display={{ base: "none", md: "block" }}
        bgGradient={{
          base: "linear(to-l, rgb(0 0 0 / 0), rgb(0 0 0 / 0.1), rgb(0 0 0 / 0))",
          md: "linear(to-l, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0))",
        }}
        _dark={{
          bgGradient: {
            base: "linear(to-l, rgb(255 255 255 / 0), rgb(255 255 255 / 0.1), rgb(255 255 255 / 0))",
            md: "linear(to-l, rgb(255 255 255 / 0.1), rgb(255 255 255  / 0))",
          },
        }}
        my={3}
      />
      <ParallaxSkills skills={data?.latest_interest} baseVelocity={2} />
      <ParallaxSkills skills={data?.latest_interest} baseVelocity={-2} />
      <ParallaxSkills
        skills={!!data && [...data.latest_interest].reverse()}
        baseVelocity={2}
        display={{ md: "none" }}
      />
    </Box>
  );
}

export default About;
