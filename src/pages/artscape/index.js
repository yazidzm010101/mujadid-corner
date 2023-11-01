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

import GalleryList from "@/components/artscape/GalleryList";
import Layout from "@/components/Layout";
import MotionBox from "@/components/MotionBox";
import Scribble from "@/assets/Scribble";
import { getAllGallery } from "@/lib/getGallery";
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
      <Box
        ref={ref}
        w={"full"}
        pos={"relative"}
        mt={-16}
        pt={16}
        pb={24}
        _dark={{ bg: "gray.800" }}
      >
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
          <Box
            as={Scribble}
            filter={"grayscale(1)"}
            opacity={0.25}
            _dark={{ opacity: 0.3 }}
          />
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
                data-aos={"scale-fade-up"}
                as="h2"
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "7xl" }}
                fontWeight={"extrabold"}
                color={"teal.900"}
                _dark={{ color: "teal.300" }}
              >
                Art Scape
                <Image
                  src={
                    // "https://cdn3d.iconscout.com/3d/premium/thumb/gallery-6332703-5209349.png"
                    "https://cdn3d.iconscout.com/3d/premium/thumb/painting-board-5748776-4817934.png?f=webp"
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
                Not just writing codes, I also love doing some{" "}
                <Box
                  as={"span"}
                  verticalAlign={"top"}
                  pt={0.5}
                  display={"inline-block"}
                  fontFamily={"Satisfy"}
                >
                  arts & designs
                </Box>
                .
              </Text>
            </Box>

            <AspectRatio
              pt={24}
              ml={"auto"}
              ratio={{ base: 4 / 3, md: 1 }}
              w={{ base: "full", md: "40%" }}
              _dark={{ mixBlendMode: "color-dodge" }}
            >
              <MotionBox style={{ y: yMove }}>
                <Image
                  filter={"contrast(0.7) brightness(1.1)"}
                  src={getFullUrl("/images/miyamoto-art.png")}
                  objectFit={"cover"}
                  w={"full"}
                  h={"full"}
                  _dark={{
                    filter: "invert(1s) contrast(0.7) brightness(1.1)",
                    opacity: 0.3,
                  }}
                />
              </MotionBox>
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
