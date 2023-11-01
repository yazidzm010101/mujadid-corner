import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import About from "@/components/about/About";
import Experience from "@/components/about/Experience";
import GetInTouch from "@/components/about/GetInTouch";
import Head from "next/head";
import Layout from "@/components/Layout";
import config from "~/_data/config";

function AboutPage() {
  return (
    <Layout title={"About"}>
      <VStack
        spacing={56}
        py={48}
        my={-24}
        w={"full"}
        bgGradient={"linear(to-b, gray.200, gray.100 20%, gray.100)"}
        _dark={{ bgGradient: "linear(to-b, teal.800, gray.800 20%, gray.800)" }}
      >
        <About />
        <Experience />
        <GetInTouch />
      </VStack>
    </Layout>
  );
}

export default AboutPage;
