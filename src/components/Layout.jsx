import {
    Box,
    Flex,
} from "@chakra-ui/react";
import Wave from "@/assets/Wave";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import config from '~/_data/config'
import Head from "next/head";

function Layout({ children, title }) {
    const { pathname } = useRouter();
    let page_title = config.page_name;
    if (!!title) {
        page_title = title + ' - ' + page_title
    }
    return (
        <Box
            w={"full"}
            minH="100vh"
            overflowY={"hidden"}
            pos={"relative"}
            bg={"gray.50"}
            overflowX={"hidden"}
        >
            <Head>
                <title>{page_title}</title>
            </Head>
            {
                pathname == '/' && (
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
                )
            }
            <Navbar />
            <Flex flexDir={"column"} w={"full"} minH={"100vh"} pos={"relative"}>
                <Box w={"full"} py={24} flexGrow={1}>
                    {children}
                </Box>
                <Footer />
            </Flex>
        </Box>
    );
}

export default Layout;