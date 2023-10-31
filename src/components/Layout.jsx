import { Box, Flex } from "@chakra-ui/react";

import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import config from "~/_data/config";
import { useRouter } from "next/router";

function Layout({ children, title }) {
  const { pathname } = useRouter();
  let page_title = config.page_name;
  if (!!title) {
    page_title = title + " - " + page_title;
  }
  return (
    <Box
      w={"full"}
      minH="100vh"
      overflowY={"hidden"}
      pos={"relative"}
      bg={"gray.50"}
      overflowX={"hidden"}
      _dark={{ bg: "gray.800" }}
    >
      <Head>
        <title>{page_title}</title>
      </Head>
      <Navbar />
      <Flex flexDir={"column"} w={"full"} minH={"100vh"} pos={"relative"}>
        <Box w={"full"} py={24} mt={-28} flexGrow={1}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
}

export default Layout;
