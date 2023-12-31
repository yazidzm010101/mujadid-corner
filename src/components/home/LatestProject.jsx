import {
  AspectRatio,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  SiAnaconda,
  SiAndroidstudio,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJupyter,
  SiLaravel,
  SiMysql,
  SiPython,
  SiReact,
  SiSass,
  SiVite,
} from "react-icons/si";
import { useScroll, useTransform } from "framer-motion";

import { BiCode } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { CgDesktop } from "react-icons/cg";
import Dots from "@/assets/Dots";
import { FaJava } from "react-icons/fa";
import MotionBox from "@/components/MotionBox";
import NextLink from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

const tagsMap = {
  Laravel: SiLaravel,
  jQuery: SiJquery,
  SCSS: SiSass,
  Bootstrap: SiBootstrap,
  ChakraUI: SiChakraui,
  "React.js": SiReact,
  Vite: SiVite,
  HTML: SiHtml5,
  CSS: SiCss3,
  Python: SiPython,
  Javascript: SiJavascript,
  "Jupyter Notebook": SiJupyter,
  Conda: SiAnaconda,
  MySQL: SiMysql,
  "Android Studio": SiAndroidstudio,
  Java: FaJava,
  Firebase: SiFirebase,
};

function Project({
  preview,
  title,
  icon,
  description,
  demoURL,
  repoURL,
  tags,
  draft,
}) {
  const ref = useRef(null);

  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backdropX = useTransform(scrollYProgress, [0, 1.5], [-300, 300]);
  const backdropOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Container
        w={"full"}
        maxW={"container.xl"}
        py={{ base: 20 }}
        px={{ base: 4, lg: 10 }}
      >
        <Box display={{ base: "none", md: "block" }}>
          <MotionBox
            pointerEvents={"none"}
            pos={"absolute"}
            left={0}
            top={"-10%"}
            style={{
              opacity: backdropOpacity,
              x: backdropX,
              offsetAnchor: "right center",
            }}
          >
            <Heading
              as={"h3"}
              color={"rgb(0 0 0 / 0.02)"}
              fontWeight={"extrabold"}
              fontSize={"400px"}
              w={"max-content"}
              userSelect={"none"}
              _light={{
                WebkitTextStroke: "1px rgb(0 0 0/0.05)",
              }}
              _dark={{
                color: "rgb(255 255 255 / 0.01)",
                WebkitTextStroke: "1px rgb(255 255 255/0.02)",
              }}
            >
              {title}
            </Heading>
          </MotionBox>
        </Box>
        <AspectRatio
          ratio={0.7}
          w={"full"}
          maxW={"600px"}
          left={"5%"}
          top={"5%"}
          bottom={0}
          transform={"translateX(5%) translateY(10%)"}
          rounded={"3xl"}
          pos={"absolute"}
          overflow={"hidden"}
        >
          <Box
            as={Dots}
            color={"rgb(0 0 0 / 0.1)"}
            pos={"absolute"}
            _dark={{
              color: "rgb(255 255 255 / 0.1)",
            }}
          />
        </AspectRatio>
        <AspectRatio
          ratio={{ base: 0.7, md: 1 }}
          w={"full"}
          maxW={"600px"}
          right={0}
          bottom={0}
          rounded={"3xl"}
          pos={"absolute"}
          border={"2px solid rgb(0 0 0 / 0.2)"}
          overflow={"hidden"}
          transform={{
            base: "translateX(20%) translateY(-5%) scale(0.5) rotateY(5deg) rotateZ(-2deg)",
            sm: "translateX(5%) translateY(20%) scale(0.5) rotateY(5deg) rotateZ(-2deg)",
          }}
          _dark={{
            border: "2px solid rgb(255 255 255 / 0.1)",
          }}
        >
          <Box
            bgGradient={"linear(to-t, rgb(0 0 0 / 0.01), rgb(0 0 0/0.1))"}
            _dark={{
              bgGradient:
                "linear(to-t, rgb(255 255 255 / 0.01), rgb(255 255 255/0.1))",
            }}
          />
        </AspectRatio>
        <Box display={{ base: "none", md: "block" }}>
          <MotionBox
            pos={"absolute"}
            pointerEvents={"none"}
            right={"-100%"}
            bottom={0}
            style={{
              x: backdropX,
              opacity: backdropOpacity,
              offsetAnchor: "right center",
            }}
          >
            <Heading
              color={"transparent"}
              as={"h3"}
              fontWeight={"extrabold"}
              fontSize={"200px"}
              w={"max-content"}
              userSelect={"none"}
              _light={{
                WebkitTextStroke: "1px rgb(0 0 0 / 0.1)",
              }}
              _dark={{
                WebkitTextStroke: "1px rgb(255 255 255 / 0.05)",
              }}
            >
              {title}
            </Heading>
          </MotionBox>
        </Box>
        <Stack
          direction={{ base: "column", lg: "row-reverse" }}
          w={"full"}
          maxW={{ base: "500px", lg: "full" }}
          spacing={10}
          alignItems={"flex-start"}
          mx={"auto"}
        >
          <Box
            data-aos={"shrink-fade-left"}
            pos={"relative"}
            w={"full"}
            flex={{ lg: 5, xl: 1 }}
            py={{ lg: 42 }}
          >
            <AspectRatio
              ratio={4 / 3}
              w={"full"}
              bg={"white"}
              rounded={"xl"}
              overflow={"hidden"}
              role="group"
              _light={{
                border: "1px solid rgb(0 0 0 / 0.2)",
              }}
            >
              <>
                <Image
                  filter={"brightness(0.95)"}
                  src={getFullUrl(preview)}
                  alt={title}
                />
                {(demoURL || repoURL) && (
                  <VStack
                    opacity={0}
                    backdropFilter={"blur(4px)"}
                    _groupHover={{ opacity: 1 }}
                    transition={".2s all ease-in-out"}
                    bg={"blackAlpha.300"}
                    px={8}
                    pt={4}
                    rounded={"xl"}
                  >
                    {demoURL && (
                      <Button
                        size={"lg"}
                        rounded={"full"}
                        color={"white"}
                        variant={"outline"}
                        borderColor={"rgb(0 0 0 / 0.2)"}
                        bg={"blackAlpha.500"}
                        as={Link}
                        href={getFullUrl(demoURL)}
                        target="_blank"
                        _hover={{ bg: "blackAlpha.900" }}
                        leftIcon={<Icon w={5} h={5} as={CgDesktop} />}
                      >
                        Open demo
                      </Button>
                    )}
                    {repoURL && (
                      <Button
                        size={"lg"}
                        rounded={"full"}
                        color={"white"}
                        variant={"outline"}
                        borderColor={"rgb(0 0 0 / 0.2)"}
                        bg={"blackAlpha.500"}
                        as={Link}
                        href={getFullUrl(repoURL)}
                        target="_blank"
                        _hover={{ bg: "blackAlpha.900" }}
                        leftIcon={<Icon w={5} h={5} as={BiCode} />}
                      >
                        Open repository
                      </Button>
                    )}
                  </VStack>
                )}

                {draft && (
                  <Text
                    bg={"gray.900"}
                    color={"orange.400"}
                    px={10}
                    w={"max-content !important"}
                    h={"max-content !important"}
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight={"bold"}
                    transformOrigin={"center !important"}
                    transform={"translate(30%, 120%) rotate(45deg) !important"}
                    pos={"absolute"}
                    top={"0 !important"}
                    left={"unset !important"}
                    bottom={"unset !important"}
                    right={"2 !important"}
                  >
                    Development
                  </Text>
                )}
              </>
            </AspectRatio>
            <Image
              w={{ base: "4rem", lg: "6rem" }}
              h={{ base: "4rem", lg: "6rem" }}
              pos={"absolute"}
              right={0}
              transform={"translate(-20%, -100%)"}
              objectFit={"contain"}
              bg={"gray.100"}
              rounded={"2xl"}
              shadow={"dark-lg"}
              alt={title}
              src={getFullUrl(icon)}
            />
          </Box>
          <Box
            pos={"relative"}
            py={{ lg: 42 }}
            my={{ lg: 10 }}
            w={"full"}
            flex={{ lg: 4, xl: 1 }}
          >
            <Heading
              data-aos={"scale-fade-up"}
              fontWeight={"normal"}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              as={"h3"}
              my={2}
              textAlign={"start"}
              color={"gray.700"}
              _dark={{ color: "gray.200" }}
            >
              {title}
            </Heading>
            <Text
              data-aos={"scale-fade-up"}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              noOfLines={3}
              lineHeight={"3rem"}
              color={"gray.600"}
              _dark={{ color: "gray.400" }}
            >
              {description}
            </Text>
            <HStack
              maxW={500}
              data-aos={"scale-fade-up"}
              borderTop={"1px"}
              borderColor={"gray.300"}
              w={"full"}
              alignItems={"stretch"}
              flexWrap={"wrap"}
              mt={4}
              py={4}
              spacing={4}
              color={"gray.600"}
              _dark={{
                color: "gray.400",
                borderColor: "gray.600",
              }}
            >
              {tags?.map((tag, i) => (
                <HStack key={i} minH={4} flexShrink={0}>
                  {tagsMap[tag] && <Icon w={4} h={4} as={tagsMap[tag]} />}
                  <Text>{tag}</Text>
                </HStack>
              ))}
            </HStack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

function LatestProject({ data }) {
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
      minH={"100vh"}
      py={24}
      mt={-64}
      pt={64}
      pb={32}
      _light={{
        bgGradient:
          "linear(to-b, transparent, gray.100 10rem, gray.200 30%, gray.200)",
      }}
      _dark={{
        bgGradient: "linear(to-b, transparent, teal.900 10rem, gray.900)",
      }}
    >
      <Container
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 4, lg: 10 }}
        mx={"auto"}
        pos={"relative"}
      >
        <Heading
          data-aos={"scale-fade-up"}
          maxW={"container.xl"}
          as="h2"
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          color={"teal.900"}
          _dark={{ color: "teal.300" }}
        >
          Work Space
          <Image
            mx={4}
            display={"inline"}
            verticalAlign={"middle"}
            src="https://static-00.iconduck.com/assets.00/rocket-emoji-2048x2018-qczjidkx.png"
            w={{ base: 10, md: 16, lg: 20 }}
          />
        </Heading>
      </Container>
      <Container
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 4, lg: 10 }}
        mx={"auto"}
        pos={"relative"}
      >
        <Text
          data-aos={"scale-fade-up"}
          maxW={"container.xl"}
          mt={4}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color={"teal.800"}
          _dark={{ color: "gray.300" }}
        >
          It is so fun to do a little experiment and project.
        </Text>
        <Text
          data-aos={"scale-fade-up"}
          maxW={"container.xl"}
          mt={4}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color={"teal.700"}
          _dark={{ color: "gray.400" }}
        >
          Take a look at my most recent works here.
        </Text>
      </Container>
      <Box w={"full"} pos={"relative"}>
        {data?.map((item, i) => (
          <Project key={i} {...item} />
        ))}
      </Box>
      <Container maxW={"container.xl"} w={"full"}>
        <HStack w={"full"} justifyContent={"flex-end"} my={5}>
          <Button
            data-aos={"scale-fade-left"}
            as={NextLink}
            href={"/workspace"}
            iconSpacing={4}
            rightIcon={<Icon h={7} w={7} as={BsArrowRightCircleFill} />}
            rounded={"full"}
            variant={"ghost"}
            fontSize={"2xl"}
            fontWeight={"extrabold"}
            px={10}
            py={10}
            bg={"transparent"}
            mr={-10}
            size={"lg"}
            color={"teal.900"}
            _dark={{ color: "teal.300" }}
            _hover={{
              transform: "scale(1.01)",
              textUnderlineOffset: 12,
              bg: "transparent",
            }}
          >
            See more of my works
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}

export default LatestProject;
