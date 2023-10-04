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
  import Footer from "@/components/Footer";
  import Navbar from "@/components/Navbar";
  
  function AboutPage() {
    return (
      <Box
        w={"full"}
        minH="100vh"
        overflowY={"hidden"}
        pos={"relative"}
        bg={"gray.50"}
        overflowX={"hidden"}
      >
        <Navbar />
        <VStack spacing={'12rem'} w={"full"} py={48} pos={"relative"}>
          <About />
          <Experience />
        </VStack>
        <Footer />
      </Box>
    );
  }
  
  export default AboutPage;