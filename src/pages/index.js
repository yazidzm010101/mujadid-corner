import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Wave from "@/assets/Wave";
import Greeting from "@/components/home/Greeting";
import LatestProject from "@/components/home/LatestProject";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LatestPost from "@/components/home/LatestPost";

function Home() {
  return (
    <Box
      w={"full"}
      minH="100vh"
      overflowY={"hidden"}
      pos={"relative"}
      bg={"gray.50"}
      overflowX={"hidden"}
    >
      <Box
        as={Wave}
        w={{ base: "600%", sm: "300%", lg: "200%" }}
        pos={"absolute"}
        top={0}
        left={"50%"}
        transform={"translateX(-50%)"}
        color={"blue.50"}
        h={"600px"}
      />
      <Navbar />
      <VStack spacing={'12rem'} w={"full"} py={48} pos={"relative"}>
        <Greeting />
        <LatestPost />
        <LatestProject />
      </VStack>
      <Footer />
    </Box>
  );
}

export default Home;