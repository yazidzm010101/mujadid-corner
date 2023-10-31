import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGitlab } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import NextLink from "next/link";
import { SiLinkedin } from "react-icons/si";
import data from "~/_data/about";

function Footer() {
  return (
    <Box
      w={"full"}
      bg={"gray.900"}
      borderTop={"1px solid rgb(255 2552 255 / 0.05)"}
      pos={"relative"}
    >
      <Container maxW={"container.xl"} py={8}>
        <Flex w={"full"} flexWrap={"wrap"}>
          <VStack
            mt={8}
            alignItems={"start"}
            spacing={5}
            px={8}
            mb={8}
            width={{ base: "100%", md: "50%" }}
          >
            <Text fontSize={"2xl"} color={"gray.200"}>
              {data.name}
            </Text>
            <Text fontSize={"md"} color={"gray.400"} lineHeight={2}>
              Software engineer, love linux distro, non-smoker, drinks to{" "}
              <s>coffe</s> matcha, can do a little art & design, currently
              fighting typical programmer stereotype bad habits
            </Text>
            <HStack spacing={3}>
              <Link href={"https://github.com/yazidzm010101"}>
                <Icon
                  color="gray.100"
                  _hover={{ color: "gray.400" }}
                  as={BsGithub}
                  w={6}
                  h={6}
                />
              </Link>
              <Link href={"https://gitlab.com/yazidzm010101"}>
                <Icon
                  color="gray.100"
                  _hover={{ color: "gray.400" }}
                  as={BiLogoGitlab}
                  w={6}
                  h={6}
                />
              </Link>
              <Link href={"https://www.instagram.com/yazidzm/"}>
                <Icon
                  color="gray.100"
                  _hover={{ color: "gray.400" }}
                  as={AiOutlineInstagram}
                  w={6}
                  h={6}
                />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/yazid-zaidan-mujadid-821b02193/"
                }
              >
                <Icon
                  color="gray.100"
                  _hover={{ color: "gray.400" }}
                  as={SiLinkedin}
                  w={6}
                  h={6}
                />
              </Link>
            </HStack>
          </VStack>
          <VStack
            alignItems={"start"}
            px={8}
            spacing={3}
            mt={8}
            width={{ base: "100%", md: "50%" }}
          >
            <VStack alignItems={"start"} spacing={3} mb={8}>
              <Text fontSize={"xl"} color={"gray.200"}>
                Contact
              </Text>
              <VStack
                alignItems={"flex-start"}
                spacing={10}
                flexWrap={"wrap"}
                color={"gray.500"}
              >
                <Link
                  mb={-5}
                  as={NextLink}
                  _hover={{ color: "gray.100" }}
                  href={
                    "mailto:yazidzm.developer@gmail.com?subject=Hi%2C%20Yazid%20Zaidan%20Mujadid"
                  }
                >
                  yazidzm.developer@gmail.com
                </Link>
                <Link
                  mb={-5}
                  as={NextLink}
                  _hover={{ color: "gray.100" }}
                  href={"https://wa.me/62895325593165"}
                >
                  +62 895-3255-93165
                </Link>
              </VStack>
            </VStack>
            <Text mt={8} fontSize={"xl"} color={"gray.200"}>
              Sitemap
            </Text>
            <VStack
              alignItems={"flex-start"}
              spacing={10}
              flexWrap={"wrap"}
              color={"gray.500"}
            >
              <Link
                mb={-5}
                as={NextLink}
                _hover={{ color: "gray.100" }}
                href={"/"}
              >
                Home
              </Link>
              <Link
                mb={-5}
                as={NextLink}
                _hover={{ color: "gray.100" }}
                href={"/projects"}
              >
                Projects
              </Link>
              <Link
                mb={-5}
                as={NextLink}
                _hover={{ color: "gray.100" }}
                href={"/blog"}
              >
                Blog
              </Link>
              <Link
                mb={-5}
                as={NextLink}
                _hover={{ color: "gray.100" }}
                href={"/about"}
              >
                About
              </Link>
            </VStack>
          </VStack>
          <Text px={8} w={"full"} mt={20} color={"gray.400"}>
            All rights reserved © Yazid Zaidan Mujadid 2023
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
