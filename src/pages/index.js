import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Greeting from "@/components/home/Greeting";
import LatestProject from "@/components/home/LatestProject";
import LatestPost from "@/components/home/LatestPost";
import { getLatestPost } from "@/lib/getPost";
import Head from "next/head";
import { getLatestProjects } from "@/lib/getProject";

export function getStaticProps({ params }) {
  const latestPost = getLatestPost([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ])
  const latestProjects = getLatestProjects([
    'title',
    'date',
    'slug',
    'coverImage',
  ])

  return {
    props: { latestPost, latestProjects },
  }
}

function Home({ latestPost, latestProjects }) {
  return (
    <Layout>
      <VStack spacing={'12rem'} w={"full"}>
        <Greeting />
        <LatestPost data={latestPost} />
        <LatestProject data={latestProjects}/>
      </VStack>
    </Layout>
  );
}

export default Home;