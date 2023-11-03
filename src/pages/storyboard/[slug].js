import {
  AspectRatio,
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { getAllPosts, getLatestPost, getPostBySlug } from "@/lib/getPost";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import CodeBlock from "@/components/CodeBlock";
import ErrorPage from "next/error";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";
import { TbShare } from "react-icons/tb";
import { formatDateString } from "@/lib/textUtils";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
  ]);
  const latestPost = getLatestPost(["slug", "title", "date"]);

  return {
    props: { post, latestPost },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const newTheme = {
  p: ({ children }) => (
    <Text as={"p"} my={5} fontSize={"xl"} lineHeight={"3rem"}>
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text
      as={"h2"}
      my={5}
      mt={20}
      fontSize={"3xl"}
      lineHeight={10}
      fontWeight={"bold"}
    >
      {children}
    </Text>
  ),
  a: ({ href, children }) => (
    <Link
      fontWeight={"bold"}
      href={href}
      wordBreak={"break-word"}
      fontSize={"xl"}
      lineHeight={10}
      target="_blank"
    >
      {children}
    </Link>
  ),
  code: ({ ...props }) => <CodeBlock {...props} />,
};

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  return (
    <Layout title={post.title}>
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
          opacity={0.3}
          w={{ base: "200%", md: "full" }}
          ratio={1}
          pos={"absolute"}
          top={0}
          transform={"translateY(-20%)"}
          left={{ base: 0, md: "-20%" }}
        >
          <Image
            src={getFullUrl(
              "https://fffuel.co/images/dddepth-preview/dddepth-028.jpg",
            )}
            style={{
              maskImage: "radial-gradient(black, transparent)",
              WebkitMaskImage:
                "radial-gradient(black, transparent, transparent)",
            }}
          />
        </AspectRatio>
        <AspectRatio
          opacity={0.2}
          w={{ base: "200%", md: "full" }}
          ratio={1}
          pos={"absolute"}
          bottom={0}
          transform={"translateY(30%)"}
          right={{ base: 0, md: "-20%" }}
        >
          <Image
            src={getFullUrl(
              "https://fffuel.co/images/dddepth-preview/dddepth-056.jpg",
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
        <Container maxW={"container.md"} pos={"relative"}>
          <Box as={"article"}>
            <Spacer as={"hr"} my={3} />
            {post.coverImage && (
              <Image
                src={post.coverImage}
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
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              fontWeight={"black"}
            >
              {post.title}
            </Text>
            <HStack>
              <Text marginRight={"auto"}>
                {formatDateString({ input: post.date })}
              </Text>
              <Button variant={"ghost"}>
                <Icon h={"20px"} w={"20px"} as={TbShare} />
              </Button>
            </HStack>
            <Spacer as={"hr"} my={3} />
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={ChakraUIRenderer(newTheme)}
            >
              {post.content}
            </ReactMarkdown>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
