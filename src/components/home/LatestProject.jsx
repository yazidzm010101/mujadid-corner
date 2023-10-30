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
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import { BiCodeBlock } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Dots from "@/assets/Dots";
import { HiArrowRight } from "react-icons/hi";
import { TbScreenShare } from "react-icons/tb";
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
    [0, 1, 1, 0]
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
          <motion.div
            style={{
              pointerEvents: "none",
              position: "absolute",
              left: "0",
              top: "-10%",
              opacity: backdropOpacity,
              x: backdropX,
              offsetAnchor: "right center",
            }}
          >
            <Heading
              letterSpacing={2}
              as={"h3"}
              // color={"rgb(0 0 0 / 0.02)"}
              color={"rgb(255 255 255 / 0.01)"}
              fontWeight={"extrabold"}
              fontSize={"400px"}
              w={"max-content"}
              userSelect={"none"}
              style={{
                // WebkitTextStroke: "1px rgb(0 0 0/0.05)",
                WebkitTextStroke: "1px rgb(255 255 255/0.02)",
              }}
            >
              {title}
            </Heading>
          </motion.div>
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
            color={"rgb(255 255 255 / 0.1)"}
            // color={"rgb(0 0 0 / 0.1)"}
            pos={"absolute"}
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
          // border={"2px solid rgb(0 0 0 / 0.2)"}
          border={"2px solid rgb(255 255 255 / 0.1)"}
          overflow={"hidden"}
        >
          <Box
            // bgGradient={"linear(to-t, rgb(0 0 0 / 0.01), rgb(0 0 0/0.1))"}
            bgGradient={
              "linear(to-t, rgb(255 255 255 / 0.01), rgb(255 255 255/0.1))"
            }
          />
        </AspectRatio>
        <Box display={{ base: "none", md: "block" }}>
          <motion.div
            style={{
              pointerEvents: "none",
              position: "absolute",
              right: "-100%",
              bottom: "0",
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
              style={{
                // WebkitTextStroke: "1px rgb(0 0 0 / 0.1)",
                WebkitTextStroke: "1px rgb(255 255 255 / 0.05)",
              }}
            >
              {title}
            </Heading>
          </motion.div>
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.8 }}
              style={{
                width: "100%",
              }}
            >
              <AspectRatio
                ratio={4 / 3}
                w={"full"}
                bg={"white"}
                rounded={"xl"}
                // border={"1px solid rgb(0 0 0 / 0.2)"}
                overflow={"hidden"}
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
            </motion.div>
          </Box>
          <Box
            pos={"relative"}
            py={{ lg: 42 }}
            my={{ lg: 10 }}
            w={"full"}
            flex={{ lg: 4, xl: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.8 }}
              style={{
                width: "100%",
              }}
            >
              <Heading
                // color={"gray.700"}
                color={"gray.200"}
                letterSpacing={3}
                fontWeight={"normal"}
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                as={"h3"}
                my={2}
                textAlign={"start"}
              >
                {title}
              </Heading>
              <Text
                // color={"gray.500"}
                color={"gray.400"}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                noOfLines={3}
                lineHeight={"3rem"}
                letterSpacing={2}
              >
                {excerpt}
              </Text>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

function LatestProject({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const { scrollYProgress: scrollPageY } = useScroll();
  const [clipPathY, setClipPathY] = useState(0.02);
  useMotionValueEvent(scrollPageY, "change", (lastValue) => {
    const maxValue = 0.5;
    let percentage = 0;
    let offsetClipPath = 0.02;
    if (lastValue > 0) {
      percentage = Math.min(lastValue, maxValue) / maxValue;
    }
    setClipPathY(offsetClipPath - offsetClipPath * percentage);
  });
  return (
    <Box
      pos={"relative"}
      w={"full"}
      minH={"100vh"}
      py={24}
      // clipPath={`polygon(0% ${clipPathY * 100}%, 100% ${
      //   (0.02 - clipPathY) * 100
      // }%, 100% 100%, 0% 100%)`}
      mt={-64}
      pt={64}
      pb={32}
      // bg={"gray.200"}
      bgGradient={"linear(to-b, transparent, teal.900 8%, gray.900)"}
    >
      <Container
        w={"full"}
        maxW={"container.xl"}
        px={{ lg: 10 }}
        mx={"auto"}
        pos={"relative"}
      >
        <Heading
          as="h2"
          mb={20}
          // px={4}
          textAlign={{ base: "center", lg: "start" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          fontWeight={"extrabold"}
          letterSpacing={4}
          // color={"teal.900"}
          color={"teal.300"}
        >
          Latest Works
        </Heading>
      </Container>
      <div
        ref={ref}
        style={{
          width: "100%",
          position: "relative",
          scrollSnapAlign: "center",
        }}
      >
        {data?.map((item, i) => (
          <Project key={i} {...item} />
        ))}
      </div>
      <Container maxW={"container.xl"} w={"full"}>
        <HStack w={"full"} justifyContent={"flex-end"} my={5}>
          <Button
            as={Link}
            href="#"
            // color={"teal.900"}
            color={"teal.300"}
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
              // bg: "gray.800",
              // color: "teal.200",
              transform: "scale(1.01)",
              textUnderlineOffset: 12,
              // textDecoration: "unset !important",
            }}
            // color={"teal.200"}
            size={"lg"}
          >
            See more of my works
          </Button>
        </HStack>
      </Container>
      {/* <motion.div
        style={{
          position: "absolute",
          right: "16rem",
          top: (1 / data.length) * 50 + "%",
          y: indicatorY,
        }}
      >
        <VStack
          w={"max-content"}
          pos={"relative"}
          spacing={8}
          // transform={"translateY(-50%)"}
        >
          {data?.map((item, i) => (
            <Box
              rounded={"full"}
              w={4}
              h={4}
              cursor={"pointer"}
              border={"1px solid rgb(0 0 0 / 1)"}
              overflow={"hidden"}
            >
              <motion.div
                onClick={() => handleIndicator(i)}
                style={{
                  width: "100%",
                  height: "100%",
                  background: "rgb(0 0 0 / 0.85)",
                  opacity: indicatorOpacity(i),
                }}
              />
            </Box>
          ))}
        </VStack>
      </motion.div> */}
    </Box>
  );
}

export default LatestProject;
