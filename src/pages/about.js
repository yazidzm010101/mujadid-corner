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
import About from "@/components/about/About";
import Experience from "@/components/about/Experience";
import Head from "next/head";
import config from '~/_data/config'

function AboutPage() {
  return (
    <Layout title={'About'}>
      <VStack spacing={'12rem'} w={"full"}>
        <About />
        <Experience />
      </VStack>
    </Layout>
  );
}

export default AboutPage;