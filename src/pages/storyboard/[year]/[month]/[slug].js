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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  getAllStories,
  getLatestStories,
  getSingleStory,
} from "@/lib/fetchStory";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import CodeBlock from "@/components/CodeBlock";
import ErrorPage from "next/error";
import Head from "next/head";
import LatestPost from "@/components/storyboard/LatestPost";
import Layout from "@/components/Layout";
import NextLink from "next/link";
import ReactMarkdown from "react-markdown";
import { TbShare } from "react-icons/tb";
import { formatDateString } from "@/lib/textUtils";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const post = getSingleStory(params, [
    "title",
    "date",
    "slug",
    "month",
    "content",
    "preview",
    "description",
  ]);
  const latestPost = getLatestStories([
    "slug",
    "title",
    "date",
    "preview",
  ]).filter(({ slug }) => slug != params.slug);

  return {
    props: { post, latestPost },
  };
}

export async function getStaticPaths() {
  const posts = getAllStories(["slug", "date"]);
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
        year: String(post.year),
        month: String(post.month),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

let newTheme = {
  img: ({ alt, src }) => (
    <VStack as={"span"} w={"full"} mb={10}>
      <Image src={src} w={"full"} alt={alt} />
      {alt && (
        <Text as={"span"} fontStyle={"italic"} textAlign={"center"}>
          {alt}
        </Text>
      )}
    </VStack>
  ),
  p: ({ children }) => (
    <Text
      mb={10}
      fontSize={{ base: "lg", md: "xl" }}
      lineHeight={{ base: "2rem", sm: "2.5rem" }}
    >
      {children}
    </Text>
  ),
  ul: ({ children }) => (
    <Text
      mb={10}
      as={"ul"}
      fontSize={{ base: "lg", md: "xl" }}
      pl={{ base: 10, md: 16 }}
    >
      {children}
    </Text>
  ),
  li: ({ children }) => (
    <Text
      mb={2}
      as={"li"}
      fontSize={{ base: "lg", md: "xl" }}
      lineHeight={{ base: "2rem", sm: "2.5rem" }}
    >
      {children}
    </Text>
  ),
  a: ({ href, children }) => (
    <Link
      as={NextLink}
      fontWeight={"bold"}
      href={href}
      wordBreak={"break-word"}
      fontSize={{ base: "lg", md: "xl" }}
      lineHeight={{ base: "2rem", sm: "2.5rem" }}
      target="_blank"
    >
      {children}
    </Link>
  ),
  code: ({ ...props }) => <CodeBlock {...props} />,
};
for (let i = 1; i <= 6; i++) {
  let baseFont = 1;
  let base = (7 - i) * 0.15 + baseFont + "rem";
  let md = (8 - i) * 0.15 + baseFont + "rem";
  newTheme["h" + i] = ({ children }) => (
    <Text
      as={"h" + i}
      mb={2}
      fontFamily={"heading"}
      fontSize={{ base, md }}
      lineHeight={{ base: "2rem", sm: "2.5rem" }}
      fontWeight={"bold"}
    >
      {children}
    </Text>
  );
}

export default function StoryPage({ post, latestPost }) {
  const shareDisc = useDisclosure();
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  useEffect(() => {
    let timer;
    if (shareDisc.isOpen) {
      let message = `Read "${post.title}" on Mujadid's Corner\n${location.protocol}//${location.host}${location.pathname}`;
      navigator.clipboard.writeText(message);
      timer = setTimeout(() => {
        shareDisc.onClose();
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [shareDisc.isOpen]);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post.title}>
      <Head>
        {/* Essential META Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.basePath + router.asPath} />
        {post.preview && <meta property="og:image" content={post.preview} />}
        {post.preview && <meta name="twitter:image:alt" content={post.title} />}
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:description" content={post.description} />
        <meta property="og:site_name" content={"Mujadid's Story"} />
      </Head>
      <Box
        pos={"relative"}
        w={"full"}
        minH={"full"}
        mt={-24}
        pt={24}
        mb={-32}
        pb={32}
        _dark={{ bg: "gray.900" }}
      >
        <AspectRatio
          opacity={0.5}
          w={{ base: "200%", md: "full" }}
          ratio={1}
          pos={"absolute"}
          top={0}
          transform={"translateY(-20%)"}
          left={{ base: 0, md: "-20%" }}
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
        <AspectRatio
          opacity={0.5}
          w={{ base: "200%", md: "full" }}
          ratio={1}
          pos={"absolute"}
          bottom={0}
          transform={"translateY(30%)"}
          right={{ base: 0, md: "-20%" }}
        >
          <Image
            src={getFullUrl(
              "https://fffuel.co/images/dddepth-preview/dddepth-056.jpg"
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
          bottom={0}
          mixBlendMode={"color-burn"}
          left={0}
          bgImage={`url("${getFullUrl("/images/storyboard-pattern.svg")}")`}
          bgRepeat={"repeat"}
          backgroundSize={"50px"}
          opacity={0.1}
          _dark={{ filter: "invert(1)", mixBlendMode: "unset" }}
        />
        <Box
          w={"full"}
          h={"full"}
          pos={"absolute"}
          bottom={0}
          left={0}
          bgGradient={
            "linear(to-b, transparent, gray.100 30%, gray.100 70%, transparent)"
          }
          _dark={{
            bgGradient:
              "linear(to-b, transparent, gray.800 30%, gray.800 70%, transparent)",
          }}
        />
        <Container as={"section"} maxW={"container.md"} pos={"relative"}>
          <Box as={"section"}>
            <Spacer
              as={"hr"}
              my={3}
              _light={{ borderColor: "rgb(0 0 0 / 0.1)" }}
            />
            {post.preview && (
              <Image
                src={post.preview}
                alt={post.title}
                mx={{ base: "-1rem", md: "0" }}
                maxW={{ base: "unset", md: "full" }}
                w={{ base: "calc(100% + 2rem)", md: "full" }}
                rounded={{ md: "lg" }}
                my={6}
              />
            )}
            <Text
              as={"h1"}
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight={"black"}
            >
              {post.title}
            </Text>
            <HStack>
              <Text marginRight={"auto"}>
                {formatDateString({ input: post.date })}
              </Text>
              <Popover isOpen={shareDisc.isOpen} onClose={shareDisc.onClose}>
                <PopoverTrigger>
                  <Button variant={"ghost"} onClick={shareDisc.onOpen}>
                    <Icon h={"20px"} w={"20px"} as={TbShare} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={"max-content"} border={"1px solid black"}>
                  <PopoverArrow bg={"black"} boxShadow={"0 !important"} />
                  <PopoverBody
                    bg={"black"}
                    color={"white"}
                    fontFamily={"serif"}
                  >
                    <Text>Successfully copied!</Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
            <Spacer
              as={"hr"}
              my={3}
              _light={{ borderColor: "rgb(0 0 0 / 0.1)" }}
            />
            <Box w={"full"} fontFamily={"serif"}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={ChakraUIRenderer(newTheme)}
              >
                {post.content}
              </ReactMarkdown>
            </Box>
          </Box>
          {latestPost?.length > 0 && (
            <>
              <Spacer
                as={"hr"}
                mt={24}
                mb={10}
                _light={{ borderColor: "rgb(0 0 0 / 0.1)" }}
              />
              <VStack as={"section"} alignItems={"flex-start"}>
                <Heading as={"h5"} fontSize={"2xl"}>
                  More of my story
                </Heading>
                <LatestPost data={latestPost} />
              </VStack>
            </>
          )}
        </Container>
      </Box>
    </Layout>
  );
}
