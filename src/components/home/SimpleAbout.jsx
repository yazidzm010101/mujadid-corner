import {
  AspectRatio,
  Box,
  Button,
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
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import data from "~/_data/about";
import { useRouter } from "next/router";

function SimpleAbout() {
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };
  return (
    <Box id="greeting" w={"full"} maxW="container.xl" mx={"auto"} px={6}>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems={"flex-start"}
        spacing={{ sm: 8, md: 16, xl: 48 }}
      >
        <Box w={{ base: "full", md: "40%" }} mb={8} pos={"relative"}>
          <AspectRatio
            ratio={0.7}
            w={"full"}
            maxW={{ base: "240px", md: "full" }}
            mx={{ base: "auto", md: "unset" }}
          >
            <Image
              rounded={"3rem"}
              w={"full"}
              h={"full"}
              src={getFullUrl(data.photo_alt)}
              alt={"profile-image"}
            />
          </AspectRatio>
        </Box>
        <VStack
          w={{ base: "full", md: "80%" }}
          pos={"relative"}
          alignItems={"flex-start"}
        >
          <Text
            w={"full"}
            letterSpacing={1}
            fontWeight={"medium"}
            color={"white"}
            mb={6}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          >
            Hi, I am {data.name} and this is my corner
          </Text>
          <Text
            w={"full"}
            letterSpacing={1}
            lineHeight={2}
            color={"gray.300"}
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          >
            {data.simple_about_description}
          </Text>
          <Button
            as={Link}
            href="/about"
            color={"gray.100"}
            iconSpacing={4}
            rightIcon={<Icon h={7} w={7} as={BsArrowRightCircleFill} />}
            rounded={"full"}
            variant={"ghost"}
            fontSize={"2xl"}
            fontWeight={"extrabold"}
            px={10}
            ml={"auto"}
            py={10}
            bg={"transparent"}
            letterSpacing={1}
            mr={{ md: -10 }}
            _hover={{
              // bg: "gray.800",
              // color: "teal.200",
              transform: "scale(1.01)",
              textUnderlineOffset: 12,
              // textDecoration: "unset !important",
            }}
            // color={"teal.200"}
            size={"lg"}
          >
            Learn more about Yazid
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default SimpleAbout;
