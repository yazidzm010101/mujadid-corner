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
} from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";

import { BiCodeBlock } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Dots from "@/assets/Dots";
import MotionBox from "@/components/MotionBox";
import { TbScreenShare } from "react-icons/tb";
import { useRef } from "react";
import { useRouter } from "next/router";

function Project({ coverImage, title, icon, excerpt, demoURL, repoURL }) {
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
    [0, 1, 1, 0],
  );

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
      ref={ref}
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
              letterSpacing={2}
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
          transform={{
            base: "translateX(20%) translateY(-5%) scale(0.5) rotateY(5deg) rotateZ(-2deg)",
            sm: "translateX(5%) translateY(20%) scale(0.5) rotateY(5deg) rotateZ(-2deg)",
          }}
          rounded={"3xl"}
          pos={"absolute"}
          border={"2px solid rgb(0 0 0 / 0.2)"}
          overflow={"hidden"}
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
              letterSpacing={2}
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
            pos={"relative"}
            w={"full"}
            flex={{ lg: 5, xl: 1 }}
            py={{ lg: 42 }}
          >
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.8 }}
              w={"full"}
            >
              <AspectRatio
                ratio={4 / 3}
                w={"full"}
                bg={"white"}
                rounded={"xl"}
                overflow={"hidden"}
                _light={{
                  border: "1px solid rgb(0 0 0 / 0.2)",
                }}
              >
                <>
                  <Image
                    filter={"brightness(0.95)"}
                    src={getFullUrl(coverImage)}
                    alt={title}
                  />
                  {(demoURL || repoURL) && (
                    <Link
                      bg={"rgb(29 64 68 / 0.95)"}
                      color={"white"}
                      fontSize={"2xl"}
                      href={demoURL || repoURL}
                      opacity={0}
                      target="_blank"
                      _hover={{ opacity: 1 }}
                    >
                      <Icon
                        mr={4}
                        mt={1}
                        as={(demoURL && TbScreenShare) || BiCodeBlock}
                      />
                      <Text>
                        {(demoURL && "Open demo page") || "Open repository"}
                      </Text>
                    </Link>
                  )}
                </>
              </AspectRatio>
              <Image
                w={{ base: "4rem", lg: "6rem" }}
                h={{ base: "4rem", lg: "6rem" }}
                pos={"absolute"}
                right={0}
                transform={"translate(-20%, -100%)"}
                rounded={"2xl"}
                shadow={"dark-lg"}
                alt={title}
                src={getFullUrl(icon)}
              />
            </MotionBox>
          </Box>
          <Box
            pos={"relative"}
            py={{ lg: 42 }}
            my={{ lg: 10 }}
            w={"full"}
            flex={{ lg: 4, xl: 1 }}
          >
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.8 }}
              w={"full"}
            >
              <Heading
                letterSpacing={3}
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
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                noOfLines={3}
                lineHeight={"3rem"}
                letterSpacing={2}
                color={"gray.600"}
                _dark={{ color: "gray.400" }}
              >
                {excerpt}
              </Text>
            </MotionBox>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

function LatestProject({ data }) {
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
          "linear(to-b, transparent, gray.100 8%, gray.200 30%, gray.200)",
      }}
      _dark={{
        bgGradient: "linear(to-b, transparent, teal.900 8%, gray.900)",
      }}
    >
      <Container
        as={MotionBox}
        w={"full"}
        maxW={"container.xl"}
        px={{ base: 4, lg: 10 }}
        mx={"auto"}
        pos={"relative"}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
      >
        <Heading
          as="h2"
          mb={20}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          letterSpacing={4}
          color={"teal.900"}
          _dark={{ color: "teal.300" }}
        >
          Latest Works
        </Heading>
      </Container>
      <Box w={"full"} pos={"relative"}>
        {data?.map((item, i) => (
          <Project key={i} {...item} />
        ))}
      </Box>
      <Container maxW={"container.xl"} w={"full"}>
        <HStack w={"full"} justifyContent={"flex-end"} my={5}>
          <MotionBox
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
          >
            <Button
              as={Link}
              href="#"
              iconSpacing={4}
              rightIcon={<Icon h={7} w={7} as={BsArrowRightCircleFill} />}
              rounded={"full"}
              variant={"ghost"}
              fontSize={"2xl"}
              fontWeight={"extrabold"}
              px={10}
              py={10}
              bg={"transparent"}
              letterSpacing={1}
              mr={-10}
              _hover={{
                transform: "scale(1.01)",
                textUnderlineOffset: 12,
              }}
              size={"lg"}
              color={"teal.900"}
              _dark={{ color: "teal.300" }}
            >
              See more of my works
            </Button>
          </MotionBox>
        </HStack>
      </Container>
    </Box>
  );
}

export default LatestProject;
