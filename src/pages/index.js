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
import { getLatestArts } from "@/lib/fetchArt";
import { getLatestStories } from "@/lib/fetchStory";
import { getLatestWorks } from "@/lib/fetchWork";

export function getStaticProps({ params }) {
  const latestPost = getLatestStories([
    "title",
    "date",
    "slug",
    "preview",
    "description",
  ]);
  const latestProjects = getLatestWorks([
    "title",
    "date",
    "slug",
    "preview",
    "description",
    "icon",
    "demoURL",
    "repoURL",
  ]);
  const latestGallery = getLatestArts(
    ["title", "date", "slug", "preview", "toolIcon"],
    6,
  );

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
