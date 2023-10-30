import {
  AspectRatio,
  Box,
  Button,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import MotionBox from "../MotionBox";
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
    <Box
      id="greeting"
      w={"full"}
      maxW="container.xl"
      mx={"auto"}
      px={6}
      pt={200}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems={"flex-start"}
        spacing={{ sm: 8, md: 16, xl: 48 }}
      >
        <Box w={{ base: "full", md: "40%" }} mb={8} pos={"relative"}>
          <MotionBox
            w={"full"}
            pos={"relative"}
            initial={{ y: 30, scaleY: 1.1, opacity: 0 }}
            whileInView={{
              y: 0,
              scaleY: 1,
              opacity: 1,
            }}
            viewport={{ amount: 0.5 }}
          >
            <AspectRatio
              ratio={0.7}
              w={"full"}
              maxW={{ base: "240px", md: "full" }}
              mx={{ base: "auto", md: "unset" }}
            >
              <Image
                rounded={"xl"}
                w={"full"}
                h={"full"}
                src={getFullUrl(data.photo_alt)}
                alt={"profile-image"}
              />
            </AspectRatio>
          </MotionBox>
        </Box>
        <Box w={{ base: "full", md: "80%" }} pos={"relative"}>
          <VStack as={MotionBox} alignItems={"start"}>
            <Text
              as={MotionBox}
              w={"full"}
              letterSpacing={1}
              fontWeight={"medium"}
              mb={6}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              initial={{ y: 30, scaleY: 1.1, opacity: 0 }}
              whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              color={"gray.700"}
              _dark={{ color: "white" }}
            >
              Hi, I am {data.name} and this is my corner
            </Text>
            <Text
              as={MotionBox}
              w={"full"}
              letterSpacing={1}
              lineHeight={2}
              fontSize={{ base: "lg", md: "xl" }}
              initial={{ y: 30, scaleY: 1.1, opacity: 0 }}
              whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              color={"gray.600"}
              _dark={{ color: "gray.300" }}
            >
              {data.simple_about_description}
            </Text>
            <MotionBox
              ml={"auto"}
              initial={{ y: 30, scaleY: 1.1, opacity: 0 }}
              whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
              viewport={{ amount: 0.5 }}
            >
              <Button
                as={Link}
                href="/about"
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
                  transform: "scale(1.01)",
                  textUnderlineOffset: 12,
                }}
                size={"lg"}
                color={"gray.700"}
                _dark={{ color: "gray.100" }}
              >
                About me
              </Button>
            </MotionBox>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}

export default SimpleAbout;
