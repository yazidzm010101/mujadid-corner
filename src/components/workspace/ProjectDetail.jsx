import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

import { BiCode } from "react-icons/bi";
import { CgDesktop } from "react-icons/cg";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import CodeBlock from "../CodeBlock";
import ReactMarkdown from "react-markdown";
import { formatDateString } from "@/lib/textUtils";
import { useRouter } from "next/router";

const newTheme = {
  p: ({ children }) => (
    <Text as={"p"} mb={5} fontSize={"lg"} lineHeight={"3rem"}>
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text
      as={"h2"}
      mt={10}
      fontSize={"2xl"}
      lineHeight={10}
      fontWeight={"bold"}
    >
      {children}
    </Text>
  ),
  a: ({ href, children }) => (
    <Link
      fontWeight={"bold"}
      href={href}
      wordBreak={"break-word"}
      fontSize={"lg"}
      lineHeight={10}
      target="_blank"
    >
      {children}
    </Link>
  ),
  code: ({ ...props }) => <CodeBlock {...props} />,
};

function ProjectDetail({ isOpen, onClose, data }) {
  const router = useRouter();
  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };
  return (
    <Modal isOpen={isOpen} size={"4xl"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"transparent"} shadow={"none"} px={4}>
        <ModalHeader p={0} pos={"relative"}>
          {data?.coverImage && (
            <AspectRatio
              roundedTop={{ sm: "2xl" }}
              overflow={"hidden"}
              ratio={4 / 3}
            >
              <Image
                bg={"gray.300"}
                src={getFullUrl(data.coverImage)}
                objectFit={"contain"}
              />
            </AspectRatio>
          )}
        </ModalHeader>
        <Spacer as={"hr"} />
        <ModalBody
          p={0}
          roundedBottom={{ sm: "2xl" }}
          bg={"white"}
          _dark={{
            bg: "gray.800",
            bgGradient: "linear(to-b, gray.800, gray.900)",
          }}
        >
          <VStack px={6} py={6} alignItems={"flex-start"} pos={"relative"}>
            <Box
              w={"full"}
              h={"full"}
              pos={"absolute"}
              top={0}
              left={0}
              bgImage={`url("${getFullUrl("/images/workspace-pattern.svg")}")`}
              bgRepeat={"repeat"}
              backgroundSize={"150px"}
              filter={"invert(1)"}
              opacity={0.1}
              style={{
                maskImage:
                  "linear-gradient(to bottom, black, transparent 24rem, transparent 70%, black)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent 24rem, transparent 70%, black)",
              }}
            />
            <HStack
              pos={"absolute"}
              right={8}
              top={0}
              spacing={4}
              transform={"translateY(-50%)"}
            >
              {data?.demoURL && (
                <Button
                  bg={"teal.500"}
                  color={"white"}
                  rounded={"full"}
                  as={Link}
                  href={data?.demoURL}
                  shadow={"lg"}
                  leftIcon={<Icon w={5} h={5} as={CgDesktop} />}
                  _hover={{ color: "white", bg: "teal.600" }}
                >
                  Open demo
                </Button>
              )}

              {data?.repoURL && (
                <Button
                  bg={"teal.500"}
                  color={"white"}
                  rounded={"full"}
                  as={Link}
                  href={data?.demoURL}
                  shadow={"lg"}
                  leftIcon={<Icon w={5} h={5} as={BiCode} />}
                  _hover={{ color: "white", bg: "teal.600" }}
                >
                  Open repository
                </Button>
              )}
            </HStack>
            <HStack maxW={"container.sm"} spacing={5} alignItems={"flex-start"}>
              {data?.icon && (
                <AspectRatio
                  flexShrink={0}
                  ratio={1}
                  rounded={"2xl"}
                  overflow={"hidden"}
                  shadow={"lg"}
                  w={{ base: 14, md: 18, lg: 20 }}
                >
                  <Image bg={"gray.300"} src={getFullUrl(data.icon)} />
                </AspectRatio>
              )}
              <VStack alignItems={"flex-start"}>
                <Heading
                  as={"h1"}
                  fontSize={"3xl"}
                  color={"gray.700"}
                  _dark={{ color: "gray.300" }}
                >
                  {data?.title}
                </Heading>
                <Text
                  fontSize={"lg"}
                  color={"gray.600"}
                  _dark={{ color: "gray.400" }}
                >
                  {data?.excerpt}
                </Text>
                {data?.date && (
                  <Text color={"gray.500"} _dark={{ color: "gray.500" }}>
                    {formatDateString({ input: data?.date })}
                  </Text>
                )}
              </VStack>
            </HStack>
            <Spacer as={"hr"} my={4} />
            <Box color={"gray.700"} _dark={{ color: "gray.400" }}>
              <ReactMarkdown components={ChakraUIRenderer(newTheme)}>
                {data?.content}
              </ReactMarkdown>
            </Box>
          </VStack>
        </ModalBody>
        <ModalCloseButton
          right={5}
          size={"lg"}
          rounded={"full"}
          bg={"blackAlpha.800"}
          color={"white"}
        />
      </ModalContent>
    </Modal>
  );
}

export default ProjectDetail;
