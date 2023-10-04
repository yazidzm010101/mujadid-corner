import {
    AspectRatio,
    Box,
    HStack,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as NextLink } from "next/link";

function LatestPost({data}) {
    return (
        <Box pos={"relative"} w={"full"} mx={"auto"}>
            <Box w={"full"} maxW={"container.xl"} mx={"auto"}>
                <Heading
                    w={"full"}
                    as="h2"
                    mb={10}
                    px={4}
                    textAlign={{ base: "center" }}
                    fontSize={"xl"}
                    letterSpacing={3}
                    fontWeight={"extrabold"}
                    textTransform={"uppercase"}
                    color={"teal.300"}
                >
                    Latest post
                </Heading>
            </Box>
            <HStack
                overflowX={"auto"}
                overflowY={"hidden"}
                pos={"relative"}
                px={{ base: 0, lg: "6rem" }}
                py={6}
                _before={{ md: { content: "''", margin: "auto" } }}
                _after={{ md: { content: "''", margin: "auto" } }}
            >
                {data?.map((item, i) => (
                    <Box
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        key={i}
                        viewport={{ once: false, amount: 0.1 }}
                        variants={{
                            offscreen: {
                                scale: 0.8,
                                opacity: 0 ,
                            },
                            onscreen: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8,
                                },
                            },
                        }}
                        w={"full"}
                        maxW={"480px"}
                        flexShrink={0}
                        px={3}
                    >
                        <Link
                            key={i}
                            as={NextLink}
                            href={`/posts/${item.slug}`}
                            display={"block"}
                            w={"full"}
                            rounded={"xl"}
                            border={"1px"}
                            borderColor={"blackAlpha.200"}
                            _hover={{
                                transform: "scale(1.01)",
                                borderColor: "green.400",
                            }}
                            overflow={"hidden"}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <>
                                    <Image
                                        border={"1px"}
                                        borderColor={"gray.100"}
                                        src={item.coverImage}
                                        alt={item.title}
                                        w={"full"}
                                        h={"full"}
                                        objectFit={"cover"}
                                    />
                                    <Text
                                        bgGradient={
                                            "linear(to-b, rgba(0,0,0,0), blackAlpha.300, blackAlpha.800)"
                                        }
                                        color={"white"}
                                        pb={4}
                                        pt={24}
                                        bottom={0}
                                        w={"full"}
                                        textAlign={"start"}
                                        px={6}
                                        fontWeight={"bold"}
                                        letterSpacing={2}
                                        justifyContent={"start !important"}
                                        alignItems={"end !important"}
                                        top={0}
                                    >
                                        {item.title}
                                    </Text>
                                </>
                            </AspectRatio>
                        </Link>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
}

export default LatestPost;