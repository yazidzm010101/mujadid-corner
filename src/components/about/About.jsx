import {
    AspectRatio,
    Box,
    Flex,
    HStack,
    Heading,
    Icon,
    Image,
    Spacer,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import Blob from "@/assets/Blob";
import data from '~/_data/about';

function About() {
    return (
        <Box id="about" maxW="container.xl" mx={"auto"} px={6}>
            <Stack
                direction={{ base: "column", md: "row" }}
                alignItems={"flex-start"}
                spacing={7}
            >
                <Box w={{ base: "full", md: "40%" }} pos={"relative"}>
                    <Heading
                        w={"full"}
                        as="h2"
                        mb={10}
                        px={4}
                        textAlign={{ base: "center", md: "start" }}
                        fontSize={"xl"}
                        letterSpacing={3}
                        fontWeight={"extrabold"}
                        textTransform={"uppercase"}
                        color={"teal.300"}
                    >
                        About me
                    </Heading>
                    <Box
                        color={"blue.50"}
                        pos={"absolute"}
                        top={0}
                        left={0}
                        w={"400%"}
                        transform={"translate(-50%, 0)"}
                    >
                        <Blob />
                    </Box>
                    <AspectRatio
                        ratio={1}
                        w={"200px"}
                        mx={{ base: "auto", md: "unset" }}
                        maxW={"full"}
                    >
                        <Image
                            rounded={"3rem"}
                            w={"full"}
                            h={"full"}
                            src={data.photo}
                            alt={'profile-image'}
                        />
                    </AspectRatio>
                </Box>
                <VStack
                    w={{ base: "full", md: "80%" }}
                    pos={"relative"}
                    alignItems={"flex-start"}
                    textAlign={{ base: "center", md: "start" }}
                >
                    <Text
                        w={"full"}
                        letterSpacing={1}
                        lineHeight={2}
                        fontWeight={"medium"}
                        color={"gray.800"}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        {data.name}
                    </Text>
                    <Text
                        w={"full"}
                        letterSpacing={1}
                        lineHeight={2}
                        color={"gray.600"}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        {data.about}
                    </Text>
                    <Box h={"1px"} w={"full"} bgGradient={{base: "linear(to-r, rgb(0 0 0 / 0), rgb(0 0 0 / 0.3), rgb(0 0 0 / 0))", md: "linear(to-r, rgb(0 0 0 / 0.3), rgb(0 0 0 / 0))"}} my={3} />
                    <Text
                        w={"full"}
                        color={"gray.500"}
                        fontSize={{ base: "sm", md: "md" }}
                        textTransform={"uppercase"}
                        letterSpacing={3}
                    >
                        Latest interest
                    </Text>
                    <HStack
                        justifyContent={{ base: "center", md: "flex-start" }}
                        flexWrap={"wrap"}
                        w={"full"}
                        mt={2}
                        spacing={10}
                    >
                        {
                            data?.latest_interest.map((item, i) => (
                                <Flex
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    color={item.color}
                                    key={i}
                                >
                                    <Icon as={item.icon} mr={2} h={10} w={10} />
                                    <Text fontSize={"xl"}>{item.name}</Text>
                                </Flex>
                            ))
                        }
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    );
}

export default About;