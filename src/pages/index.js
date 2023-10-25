import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import Greeting from "@/components/home/Greeting";
import Head from "next/head";
import LatestPost from "@/components/home/LatestPost";
import LatestProject from "@/components/home/LatestProject";
import Layout from "@/components/Layout";
import { getLatestPost } from "@/lib/getPost";
import { getLatestProjects } from "@/lib/getProject";

export function getStaticProps({ params }) {
  const latestPost = getLatestPost([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);
  const latestProjects = getLatestProjects([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "icon",
    "demoURL",
    "repoURL",
  ]);

  return {
    props: { latestPost, latestProjects },
  };
}

function Home({ latestPost, latestProjects }) {
  return (
    <Layout>
      <VStack w={"full"} spacing={0}>
        <Greeting />
        <LatestProject data={latestProjects} />
        <LatestPost data={latestPost} />
      </VStack>
    </Layout>
  );
}

export default Home;
