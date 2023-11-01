import {
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

  return (
    <Layout title={post.title}>
      <Container maxW={"container.md"}>
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
            <Text marginRight={"auto"}>{post.date}</Text>
            <Button variant={"ghost"}>
              <Icon h={"20px"} w={"20px"} as={TbShare} />
            </Button>
          </HStack>
          <Spacer as={"hr"} my={3} />
          <ReactMarkdown components={ChakraUIRenderer(newTheme)}>
            {post.content}
          </ReactMarkdown>
        </Box>
      </Container>
    </Layout>
  );
}
