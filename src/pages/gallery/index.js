import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";

import GalleryList from "@/components/gallery/GalleryList";
import Layout from "@/components/Layout";
import Scribble from "@/assets/Scribble";
import { getAllGallery } from "@/lib/getGallery";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/router";

export function getStaticProps({ params }) {
  const allGallery = getAllGallery([
    "title",
    "date",
    "slug",
    "coverImage",
    "toolIcon",
  ]);

  return {
    props: { allGallery },
  };
}

function GalleryPage({ allGallery }) {
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
      <Box ref={ref} w={"full"} pos={"relative"} mt={-16} pt={16} pb={24}>
        <AspectRatio
          ratio={4 / 3}
          w={"full"}
          h={"full"}
          maxW={{ base: "full", md: "container.xl" }}
          top={0}
          left={0}
          transform={{ md: "translateX(-10%)" }}
          pos={"absolute"}
        >
          <Box as={Scribble} opacity={0.25} filter={"grayscale(1)"} />
        </AspectRatio>
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
                mt={16}
                as="h2"
                // px={4}
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "5xl", md: "5xl", lg: "6xl", xl: "7xl" }}
                fontWeight={"extrabold"}
                letterSpacing={4}
                color={"teal.900"}
              >
                Gallery
              </Heading>
              <Text
                maxW={"container.md"}
                mt={4}
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                letterSpacing={4}
                color={"teal.900"}
              >
                Not just writing code, I also love art, drawing, and design
              </Text>
            </Box>

            <AspectRatio
              pt={24}
              ml={"auto"}
              ratio={{ base: 4 / 3, md: 1 }}
              w={{ base: "full", md: "40%" }}
            >
              <motion.div style={{ y: yMove }}>
                <Image
                  filter={"contrast(0.7) brightness(1.1)"}
                  src={getFullUrl("/images/miyamoto-art.png")}
                  objectFit={"cover"}
                  w={"full"}
                  h={"full"}
                />
              </motion.div>
            </AspectRatio>
          </Flex>
        </Container>
      </Box>
      <Box w={"full"} mb={-24}>
        <GalleryList data={allGallery} />
      </Box>
    </Layout>
  );
}

export default GalleryPage;
