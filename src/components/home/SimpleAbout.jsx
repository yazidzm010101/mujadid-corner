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
      pt={{ base: 0, xl: 200 }}
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        alignItems={"flex-start"}
        spacing={{ xl: 20 }}
      >
        <Box w={{ base: "full", xl: "40%" }} mb={8} pos={"relative"}>
          <AspectRatio
            data-aos="zoom-in"
            ratio={1}
            w={"full"}
            maxW={{ base: "240px", xl: "full" }}
            mx={"auto"}
          >
            <>
              <Image
                transform={"rotate(-5deg) translate(-50%, -5%) scale(0.5)"}
                rounded={"xl"}
                w={"full"}
                h={"full"}
                objectFit={"contain !important"}
                src={
                  "https://cdn3d.iconscout.com/3d/premium/thumb/painting-board-5748776-4817934.png?f=webp"
                }
              />
              <Image
                transform={"rotate(5deg) translate(40%, -10%) scale(0.5)"}
                rounded={"xl"}
                w={"full"}
                h={"full"}
                objectFit={"contain !important"}
                src={
                  "https://static.vecteezy.com/system/resources/previews/028/600/712/original/hoodie-3d-rendering-icon-illustration-free-png.png"
                }
              />
              <Image
                rounded={"xl"}
                w={"full"}
                h={"full"}
                objectFit={"contain !important"}
                src={
                  "https://cdn3d.iconscout.com/3d/premium/thumb/matcha-8147961-6478159.png"
                }
              />
            </>
          </AspectRatio>
        </Box>
        <Box w={{ base: "full", xl: "80%" }} pos={"relative"}>
          <VStack alignItems={"start"} maxW={"container.sm"} mx={"auto"}>
            <Text
              data-aos={"scale-fade-up"}
              w={"full"}
              fontWeight={"medium"}
              mb={6}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              color={"gray.700"}
              _dark={{ color: "white" }}
            >
              Hi, I am {data.name} and this is my corner
            </Text>
            <Text
              data-aos={"scale-fade-up"}
              w={"full"}
              lineHeight={2}
              fontSize={{ base: "lg", md: "xl" }}
              color={"gray.600"}
              _dark={{ color: "gray.300" }}
            >
              {data.about}
            </Text>
            <Button
              data-aos={"scale-fade-left"}
              ml={"auto"}
              as={Link}
              href="/about"
              iconSpacing={4}
              rightIcon={<Icon h={7} w={7} as={BsArrowRightCircleFill} />}
              rounded={"full"}
              variant={"ghost"}
              fontSize={"2xl"}
              fontWeight={"extrabold"}
              px={10}
              py={10}
              bg={"transparent"}
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
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}

export default SimpleAbout;
