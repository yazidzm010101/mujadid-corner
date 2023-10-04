import { Button, Heading, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

function Greeting() {
    return (
        <VStack spacing={12} px={4}>
            <Heading
                as={"h1"}
                letterSpacing={1}
                fontWeight={"extrabold"}
                maxW={"800px"}
                fontSize={{base: "5xl", lg: "7xl"}}
                textAlign={"center"}
                bgGradient={"linear(to-br, green.200, green.300, blue.400)"}
                bgClip={"text"}
            >
                Welcome to Mujadid's Corner
            </Heading>
            <Text
                textAlign={"center"}
                maxW={"640px"}
                fontSize={"lg"}
                color={"gray.600"}
            >
                The place where I can share my thoughts, story, and idea to the world
            </Text>
            {/* <Button
                as={Link}
                rightIcon={<Icon as={FaPaperPlane} />}
                rounded={"3xl"}
                px={10}
                py={6}
                href="mailto:yazidzm.developer@gmail.com?subject=Hello%20Yazid"
                bg={"teal.200"}
                letterSpacing={1}
                _hover={{ bg: "teal.400", color: "white", transform: "scale(1.02)", shadow: "0px 6px 16px #38B2AC", border: '1px', borderColor: 'rgba(255,255,255,0.2)' }}
                color={"teal.800"}
            >
                Get in touch
            </Button> */}
        </VStack>
    );
}

export default Greeting;