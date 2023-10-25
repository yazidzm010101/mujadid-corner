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
import LatestGallery from "@/components/home/LatestGallery";
import LatestPost from "@/components/home/LatestPost";
import LatestProject from "@/components/home/LatestProject";
import Layout from "@/components/Layout";
import { getLatestGallery } from "@/lib/getGallery";
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
  const latestGallery = getLatestGallery([
    "title",
    "date",
    "slug",
    "coverImage",
    "toolIcon",
  ]);

  return {
    props: { latestPost, latestProjects, latestGallery },
  };
}

function Home({ latestPost, latestProjects, latestGallery }) {
  return (
    <Layout>
      <VStack w={"full"} spacing={0}>
        <Greeting />
        <LatestProject data={latestProjects} />
        <LatestPost data={latestPost} />
        <LatestGallery data={latestGallery} />
      </VStack>
    </Layout>
  );
}

export default Home;
