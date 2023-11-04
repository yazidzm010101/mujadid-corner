import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";

import Cloud from "@/assets/Cloud";
import Layout from "@/components/Layout";
import PostList from "@/components/storyboard/PostList";
import { getAllPosts } from "@/lib/fetchStory";
import style from "@/styles/greeting.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

export function getStaticProps({ params }) {
  const allPost = getAllPosts([
    "title",
    "date",
    "year",
    "month",
    "slug",
    "preview",
    "toolIcon",
  ]);

  return {
    props: { allPost },
  };
}

function StoryboardPage({ allPost }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const yMove = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };
  return (
    <Layout title={"Storyboard"}>
      <Box
        ref={ref}
        w={"full"}
        pos={"relative"}
        mt={-16}
        pt={24}
        pb={96}
        bgGradient={"linear(to-b, teal.100, white)"}
        _dark={{ bgGradient: "linear(to-b,gray.800, teal.800)" }}
      >
        <VStack w={"full"}>
          <Box
            className={style["star-noise"]}
            rounded={"full"}
            overflow={"hidden"}
            pos={"absolute"}
            top={{ base: "-20vw", md: "-100vw" }}
            mx={"auto"}
            w={"250vw"}
            h={"250vw"}
            mixBlendMode={"hard-light"}
            opacity={1}
            _dark={{ mixBlendMode: "hard-light", opacity: 1 }}
            as={Cloud}
            bgGradient={
              "linear(to-r,teal.200,blue.200, teal.200,blue.200, teal.200, blue.200, teal.200)"
            }
          />
        </VStack>
        <AspectRatio
          w={{ base: "200%", md: "full" }}
          ratio={1}
          pos={"absolute"}
          top={0}
          transform={"translateY(-20%)"}
          mixBlendMode={"color-burn"}
          left={{ base: 0, md: "20%" }}
        >
          <Image
            src={getFullUrl(
              "https://fffuel.co/images/dddepth-preview/dddepth-028.jpg"
            )}
            style={{
              maskImage: "radial-gradient(black, transparent)",
              WebkitMaskImage:
                "radial-gradient(black, transparent, transparent)",
            }}
          />
        </AspectRatio>
        <Box
          w={"full"}
          h={"full"}
          pos={"absolute"}
          top={0}
          mixBlendMode={"color-burn"}
          left={0}
          bgImage={`url("${getFullUrl("/images/storyboard-pattern.svg")}")`}
          bgRepeat={"repeat"}
          backgroundSize={"50px"}
          opacity={0.1}
        />
        <Container
          w={"full"}
          maxW={"container.xl"}
          px={{ base: 4, md: 12, lg: 10 }}
          mx={"auto"}
          pos={"relative"}
        >
          <Flex w={"full"} flexWrap={"wrap"}>
            <Box w={{ base: "full", md: "60%" }} py={16}>
              <Heading
                data-aos={"scale-fade-up"}
                as="h2"
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
                fontWeight={"extrabold"}
                color={"teal.900"}
                _dark={{ color: "teal.300" }}
              >
                Story Board
                <Image
                  display={"inline"}
                  verticalAlign={"middle"}
                  mx={4}
                  w={{ base: 10, md: 16, lg: 20 }}
                  src={
                    "https://www.iconarchive.com/download/i138836/microsoft/fluentui-emoji-3d/Writing-Hand-3d-Default.1024.png"
                  }
                />
              </Heading>
              <Text
                data-aos={"scale-fade-up"}
                maxW={"container.xl"}
                mt={4}
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                color={"teal.800"}
                _dark={{ color: "gray.300" }}
              >
                The board that hold all of my writings and posts.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box w={"full"} mb={-24}>
        <PostList data={allPost} />
      </Box>
    </Layout>
  );
}

export default StoryboardPage;
