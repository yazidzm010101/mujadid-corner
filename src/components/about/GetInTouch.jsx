import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGitlab } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Cloud from "@/assets/Cloud";
import { SiLinkedin } from "react-icons/si";
import style from "@/styles/greeting.module.css";

function GetInTouch() {
  return (
    <Box
      w={"full"}
      mx={"auto"}
      pos={"relative"}
      overflow={"hidden"}
      pt={32}
      pb={48}
      mb={-48}
    >
      <VStack w={"full"}>
        <Box
          className={style["star-noise"]}
          rounded={"full"}
          overflow={"hidden"}
          pos={"absolute"}
          top={0}
          mx={"auto"}
          w={"200vw"}
          h={"200vw"}
          bgGradient={
            "linear(to-r,teal.100,green.100, teal.100,green.100, teal.100, green.100, teal.100)"
          }
          mixBlendMode={"darken"}
          opacity={0.3}
          _dark={{ mixBlendMode: "color-dodge", opacity: 0.3 }}
          as={Cloud}
        />
      </VStack>
      <Box
        bgGradient={"linear(to-b, gray.100, transparent 30%, gray.100)"}
        _dark={{
          bgGradient: "linear(to-b, gray.800, transparent 30%, gray.800)",
        }}
        pos={"absolute"}
        top={"0"}
        left={0}
        w={"full"}
        h={"full"}
      />
      <VStack px={4}>
        <Image
          data-aos={"shrink-fade-up"}
          src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2018-qczjidkx.png"
          w={{ base: 16, md: 16, lg: 20 }}
        />
      </VStack>
      <Box
        w={"full"}
        style={{ perspective: "100px", perspectiveOrigin: "center" }}
      >
        <Container
          pos={"relative"}
          as={VStack}
          px={{ base: 4, lg: 10 }}
          w={"full"}
          maxW={"container.xl"}
          mx={"auto"}
          minH={"50vh"}
          justifyContent={"center"}
          transform={"rotateX(0.5deg)"}
        >
          <Text
            data-aos={"scale-fade-up"}
            fontSize={{ base: "xl", md: "3xl" }}
            textAlign={"center"}
          >
            Having an interest to work together?
          </Text>
          <Heading
            data-aos={"scale-fade-up"}
            as={"h1"}
            fontSize={{ base: "5xl", md: "7xl" }}
            maxW={"container.lg"}
            textAlign={"center"}
          >
            Let&apos;s go build something great!
          </Heading>
          <Button
            data-aos={"scale-fade-up"}
            as={Link}
            href={
              "mailto:yazidzm.developer@gmail.com?subject=Hi%2C%20Yazid%20Zaidan%20Mujadid"
            }
            textDecor={"none !important"}
            variant={"glass"}
            size={"lg"}
            backdropFilter={"saturate(8)"}
            my={3}
            fontSize={"2xl"}
            _hover={{
              transform: "translateY(-4px)",
            }}
          >
            Contact me
          </Button>
          <HStack
            data-aos={"scale-fade-up"}
            spacing={6}
            pt={2}
            px={6}
            rounded={"full"}
            bg={"blackAlpha.700"}
            backdropFilter={"saturate(3)"}
          >
            <Link href={"https://github.com/yazidzm010101"}>
              <Icon
                color="gray.100"
                _hover={{ color: "white", transform: "translateY(-2px)" }}
                transition={".2s all ease-in-out"}
                as={BsGithub}
                w={7}
                h={7}
              />
            </Link>
            <Link href={"https://gitlab.com/yazidzm010101"}>
              <Icon
                color="gray.100"
                _hover={{ color: "white", transform: "translateY(-2px)" }}
                transition={".2s all ease-in-out"}
                as={BiLogoGitlab}
                w={7}
                h={7}
              />
            </Link>
            <Link href={"https://www.instagram.com/yazidzm/"}>
              <Icon
                color="gray.100"
                _hover={{ color: "white", transform: "translateY(-2px)" }}
                transition={".2s all ease-in-out"}
                as={AiOutlineInstagram}
                w={7}
                h={7}
              />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/yazid-zaidan-mujadid-821b02193/"
              }
            >
              <Icon
                color="gray.100"
                _hover={{ color: "white", transform: "translateY(-2px)" }}
                transition={".2s all ease-in-out"}
                as={SiLinkedin}
                w={7}
                h={7}
              />
            </Link>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

export default GetInTouch;
