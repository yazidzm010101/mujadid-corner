import { Box, Container, Image, Spacer, Text } from "@chakra-ui/react";
import { getAllPWorks, getLatestWorks } from "@/lib/fetchWork";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import CodeBlock from "@/components/CodeBlock";
import ErrorPage from "next/error";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";
import { getSingleWork } from "@/lib/fetchWork";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const project = getSingleWork(params, [
    "title",
    "date",
    "slug",
    "content",
    "preview",
  ]);
  const latestProjects = getLatestWorks(["slug", "title", "date"]);

  return {
    props: { project, latestProjects },
  };
}

export async function getStaticPaths() {
  getLatestWorks;
  const projects = getAllPWorks(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}

const newTheme = {
  p: ({ children }) => (
    <Text as={"p"} my={2} fontSize={"medium"} lineHeight={10}>
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text as={"h2"} my={2} fontSize={"2xl"} lineHeight={10} fontWeight={"bold"}>
      {children}
    </Text>
  ),
  code: ({ ...props }) => <CodeBlock {...props} />,
};

export default function Project({ project }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={project.title}>
      <Container maxW={"container.md"}>
        <Box as={"article"}>
          <Text
            as={"h1"}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            fontWeight={"black"}
          >
            {project.title}
          </Text>
          {project.preview && (
            <Image
              src={project.preview}
              w={"full"}
              alt={project.title}
              rounded={"lg"}
              my={6}
            />
          )}
          <Spacer as={"hr"} my={3} />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={ChakraUIRenderer(newTheme)}
          >
            {project.content}
          </ReactMarkdown>
        </Box>
      </Container>
    </Layout>
  );
}
