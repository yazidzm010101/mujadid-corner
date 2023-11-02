import {
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
import { getAllPosts } from "@/lib/getPost";
import style from "@/styles/greeting.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

export function getStaticProps({ params }) {
  const allPost = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "toolIcon",
  ]);

  return {
    props: { allPost },
  };
}

function GalleryPage({ allPost }) {
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
    <Layout title={"About"}>
      <Box
        ref={ref}
        w={"full"}
        pos={"relative"}
        mt={-16}
        pt={24}
        pb={96}
        bg={"white"}
        _dark={{ bg: "gray.700" }}
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
            bgGradient={
              "linear(to-r,teal.200,green.200, teal.200,green.200, teal.200, green.200, teal.200)"
            }
            opacity={1}
            _dark={{ mixBlendMode: "color-dodge", opacity: 0.3 }}
            as={Cloud}
          />
        </VStack>
        <Box
          w={"full"}
          h={"full"}
          pos={"absolute"}
          top={0}
          mixBlendMode={"color-burn"}
          left={0}
          bgImage={`url("${getFullUrl("/images/diagonal-stripe.svg")}")`}
          bgRepeat={"repeat"}
          backgroundSize={"100px"}
          opacity={0.2}
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
                  src={
                    "https://www.iconarchive.com/download/i138836/microsoft/fluentui-emoji-3d/Writing-Hand-3d-Default.1024.png"
                  }
                  display={"inline"}
                  verticalAlign={"middle"}
                  mx={4}
                  w={{ base: 10, md: 16, lg: 20 }}
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

export default GalleryPage;
