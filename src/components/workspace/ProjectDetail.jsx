import {
  AspectRatio,
  Box,
  Button,
  Fade,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Portal,
  ScaleFade,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiCode,
  BiZoomIn,
} from "react-icons/bi";
import { BsX } from "react-icons/bs";

import { formatDateString } from "@/lib/textUtils";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useRouter } from "next/router";
import { CgDesktop } from "react-icons/cg";
import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiReact,
  SiSass,
  SiVite,
} from "react-icons/si";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import CodeBlock from "../CodeBlock";

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

const tagsMap = {
  Laravel: SiLaravel,
  jQuery: SiJquery,
  SCSS: SiSass,
  Bootstrap: SiBootstrap,
  ChakraUI: SiChakraui,
  "React.js": SiReact,
  Vite: SiVite,
  HTML: SiHtml5,
  CSS: SiCss3,
  Javascript: SiJavascript,
};

function ProjectDetail({ isOpen, onClose, data }) {
  const router = useRouter();
  const containerRef = useRef(null);

  const [leftNavShown, setLeftNavShown] = useState(false);
  const [rightNavShown, setRightNavShown] = useState(false);

  const [gallery, setGallery] = useState([]);

  const [activeGallery, setActiveGallery] = useState(-1);
  const [activeGalleryHover, setActiveGalleryHover] = useState(true);

  const getFullUrl = (url) => {
    if (url.match(/^\//g)) {
      return router.basePath + url;
    }
    return url;
  };

  const onScroll = (target) => {
    if (target?.scrollWidth > target?.offsetWidth) {
      setLeftNavShown(target.scrollLeft > 0);
      setRightNavShown(
        target.scrollLeft + target.offsetWidth < target.scrollWidth,
      );
    } else {
      setLeftNavShown(false);
      setRightNavShown(false);
    }
  };

  const navigateScroll = (direction, useActualValue) => {
    if (typeof containerRef?.current?.scrollLeft == "number") {
      containerRef.current.scrollTo({
        left:
          containerRef.current.scrollLeft +
          (useActualValue
            ? direction
            : (containerRef.current.scrollWidth /
                containerRef.current.children.length) *
              direction),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let triggerResize = () => onScroll(containerRef?.current);
    if (isOpen) {
      if (containerRef?.current) {
        onScroll(containerRef.current);
        containerRef.current.addEventListener("resize", triggerResize);
      }
    } else {
      if (containerRef?.current) {
        containerRef.current.removeEventListener("resize", triggerResize);
      }
    }
  }, [
    containerRef?.current?.scrollWidth,
    containerRef?.current?.offsetWidth,
    containerRef?.current?.scrollLeft,
  ]);

  useEffect(() => {
    if (isOpen) {
      let currGallery = [{ name: data.title, image: data.preview }];
      if (data?.gallery) {
        currGallery = data.gallery;
      }
      setGallery(currGallery);
    } else {
      setGallery([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (activeGallery > -1) {
      setActiveGalleryHover(true);
    } else {
      setActiveGalleryHover(false);
    }
  }, [activeGallery]);

  useEffect(() => {
    let timeout;
    if (activeGalleryHover) {
      timeout = setTimeout(() => {
        setActiveGalleryHover(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [activeGalleryHover]);

  return (
    <Modal isOpen={isOpen} size={{ base: "full", sm: "4xl" }} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"transparent"} shadow={"none"} px={{ sm: 4 }}>
        <ModalBody
          p={0}
          rounded={{ sm: "2xl" }}
          bg={"white"}
          _dark={{
            bg: "gray.800",
            bgGradient: "linear(to-b, gray.800, gray.900)",
          }}
        >
          <Box
            pointerEvents={"none"}
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

          <HStack spacing={5} alignItems={"center"} px={6} pt={6} pb={4}>
            {data?.icon && (
              <AspectRatio
                flexShrink={0}
                ratio={1}
                rounded={"2xl"}
                overflow={"hidden"}
                shadow={"lg"}
                w={{ base: 14, md: 16, lg: 20 }}
              >
                <Image
                  objectFit={"contain !important"}
                  bg={"white"}
                  src={getFullUrl(data.icon)}
                />
              </AspectRatio>
            )}
            <VStack alignItems={"flex-start"}>
              <Heading
                as={"h1"}
                py={{ base: 3, sm: 3, lg: 5 }}
                fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                color={"gray.700"}
                _dark={{ color: "gray.300" }}
                pr={16}
              >
                {data?.title}
              </Heading>
            </VStack>
          </HStack>
          <VStack alignItems={"flex-start"} px={6}>
            <Text
              fontSize={"lg"}
              color={"gray.600"}
              _dark={{ color: "gray.400" }}
            >
              {data?.description}
            </Text>
            {data?.date && (
              <Text color={"gray.500"} _dark={{ color: "gray.500" }}>
                {formatDateString({ input: data?.date })}
              </Text>
            )}
          </VStack>

          {data?.tags && (
            <HStack
              w={"full"}
              alignItems={"stretch"}
              overflowX={"auto"}
              px={6}
              py={4}
              spacing={4}
            >
              {data.tags.map((item, i) => (
                <HStack key={i} minH={4} flexShrink={0}>
                  {tagsMap[item] && <Icon w={4} h={4} as={tagsMap[item]} />}
                  <Text>{item}</Text>
                </HStack>
              ))}
            </HStack>
          )}
          <Spacer as={"hr"} my={{ sm: 4 }} />
          <VStack px={6} py={6} alignItems={"flex-start"} pos={"relative"}>
            <HStack
              pos={{ base: "static", sm: "absolute" }}
              right={8}
              top={-4}
              spacing={4}
              mb={{ base: 4, sm: 0 }}
              flexWrap={"wrap"}
              w={{ base: "full", sm: "max-content" }}
              transform={{ sm: "translateY(-50%)" }}
            >
              {data?.demoURL && (
                <Button
                  w={{ base: "full", sm: "max-content" }}
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
                  w={{ base: "full", sm: "max-content" }}
                  bg={"teal.500"}
                  color={"white"}
                  rounded={"full"}
                  as={Link}
                  href={data?.repoURL}
                  shadow={"lg"}
                  leftIcon={<Icon w={5} h={5} as={BiCode} />}
                  _hover={{ color: "white", bg: "teal.600" }}
                >
                  Open repository
                </Button>
              )}
            </HStack>
            <Box w={"calc(100% + 2rem)"} mx={-4} pos={"relative"}>
              <HStack
                spacing={0}
                w={"full"}
                overflowX={"auto"}
                ref={containerRef}
                rounded={"xl"}
                bgClip={"border-box"}
                onScroll={(e) => onScroll(e.target)}
              >
                {gallery.map((item, i) => (
                  <Box w={"full"} px={4} flexShrink={0} key={i}>
                    <AspectRatio
                      w={"full"}
                      rounded={"xl"}
                      overflow={"hidden"}
                      ratio={{ base: 4 / 3, sm: 16 / 9 }}
                      border={"1px solid rgb(0 0 0 / 0.1)"}
                      cursor={"pointer"}
                      role="group"
                      onClick={() => setActiveGallery(i)}
                    >
                      <>
                        <Image
                          _groupHover={{ transform: "scale(1.1)" }}
                          transition={".2s transform ease-in-out"}
                          bg={"gray.300"}
                          src={getFullUrl(item.image)}
                          objectFit={"contain"}
                        />
                        <Button
                          color={"white"}
                          _groupHover={{ opacity: 1, bg: "blackAlpha.700" }}
                          opacity={0}
                          rounded={0}
                          bg={"blackAlpha.400"}
                        >
                          <Icon w={12} h={12} as={BiZoomIn} />
                        </Button>
                      </>
                    </AspectRatio>
                    <Portal>
                      <VStack
                        unmountOnExit
                        as={Fade}
                        bg={"blackAlpha.800"}
                        h={"full"}
                        in={i == activeGallery}
                        left={0}
                        pos={"fixed"}
                        spacing={0}
                        top={0}
                        w={"full"}
                        zIndex={9999}
                        onMouseMove={() => setActiveGalleryHover(true)}
                        onMouseDown={() => setActiveGalleryHover(true)}
                      >
                        <Box
                          as={ScaleFade}
                          in={i == activeGallery}
                          w={"full"}
                          h={"full"}
                        >
                          <Image
                            h={"full"}
                            objectFit={"contain"}
                            src={getFullUrl(item.image)}
                            w={"full"}
                          />
                        </Box>
                        {gallery.length > 1 && (
                          <>
                            <VStack
                              h={"calc(100% + 5px)"}
                              justifyContent={"center"}
                              left={0}
                              pl={{ base: 2, md: 4, lg: 10 }}
                              pos={"absolute"}
                              pr={14}
                              role="group"
                              top={0}
                              opacity={activeGalleryHover ? 1 : 0}
                              transition={".25s all ease-in-out"}
                              bgGradient={
                                "linear(to-r, blackAlpha.500, transparent)"
                              }
                            >
                              <Button
                                _groupHover={{ opacity: 1 }}
                                _hover={{ bg: "whiteAlpha.100" }}
                                color={"white"}
                                opacity={0.5}
                                px={1}
                                py={7}
                                rounded={"full"}
                                variant={"ghost"}
                                onClick={() => {
                                  setActiveGallery(
                                    activeGallery - 1 < 0
                                      ? gallery.length - 1
                                      : activeGallery - 1,
                                  );
                                  setActiveGalleryHover(true);
                                }}
                              >
                                <Icon as={BiChevronLeft} h={12} w={12} />
                              </Button>
                            </VStack>
                            <VStack
                              h={"calc(100% + 5px)"}
                              justifyContent={"center"}
                              pl={14}
                              pos={"absolute"}
                              pr={{ base: 2, md: 4, lg: 10 }}
                              right={0}
                              role="group"
                              top={0}
                              opacity={activeGalleryHover ? 1 : 0}
                              transition={".25s all ease-in-out"}
                              bgGradient={
                                "linear(to-l, blackAlpha.500, transparent)"
                              }
                            >
                              <Button
                                _groupHover={{ opacity: 1 }}
                                _hover={{ bg: "whiteAlpha.100" }}
                                color={"white"}
                                opacity={0.5}
                                px={1}
                                py={7}
                                rounded={"full"}
                                variant={"ghost"}
                                onClick={() => {
                                  setActiveGallery(
                                    activeGallery + 1 >= gallery.length
                                      ? 0
                                      : activeGallery + 1,
                                  );
                                  setActiveGalleryHover(true);
                                }}
                              >
                                <Icon as={BiChevronRight} h={12} w={12} />
                              </Button>
                            </VStack>
                          </>
                        )}
                        <Box
                          as={Fade}
                          in={activeGalleryHover}
                          w={"full"}
                          pos={"absolute"}
                          top={0}
                          left={0}
                          pointerEvents={"none"}
                          bgGradient={
                            "linear(to-b, blackAlpha.900, transparent)"
                          }
                        >
                          <Heading
                            color={"white"}
                            pr={20}
                            pl={{ base: 4, md: 8, lg: 10 }}
                            py={4}
                            pb={40}
                          >
                            {item.name}
                          </Heading>
                        </Box>
                        <Button
                          _hover={{ bg: "whiteAlpha.200" }}
                          color={"white"}
                          pos={"absolute"}
                          px={2}
                          py={7}
                          right={{ base: 3, md: 4 }}
                          rounded={"full"}
                          top={{ base: 1, md: 4 }}
                          variant={"ghost"}
                          onClick={() => {
                            setActiveGallery(-1);
                            setActiveGalleryHover(true);
                          }}
                        >
                          <Icon as={BsX} h={10} w={10} />
                        </Button>
                      </VStack>
                    </Portal>
                  </Box>
                ))}
              </HStack>
              <VStack
                h={"calc(100% - 9px)"}
                justifyContent={"center"}
                left={0}
                opacity={leftNavShown ? 1 : 0}
                pointerEvents={"none"}
                pos={"absolute"}
                pr={14}
                top={0}
                transition={".25s all ease-in-out"}
              >
                <Button
                  backdropFilter={"blur(4px)"}
                  bg={"blackAlpha.500"}
                  _hover={{ bg: "blackAlpha.800" }}
                  color={"white"}
                  cursor={leftNavShown ? "pointer" : "none"}
                  pointerEvents={leftNavShown ? "auto" : "none"}
                  px={1}
                  py={7}
                  rounded={"full"}
                  transition={".25s all ease-in-out"}
                  variant={"ghost"}
                  onClick={() => navigateScroll(-1)}
                >
                  <Icon as={BiChevronLeft} h={12} w={12} />
                </Button>
              </VStack>{" "}
              <VStack
                h={"calc(100% - 9px)"}
                justifyContent={"center"}
                opacity={rightNavShown ? 1 : 0}
                pl={14}
                pointerEvents={"none"}
                pos={"absolute"}
                right={0}
                top={0}
                transition={".25s all ease-in-out"}
              >
                <Button
                  backdropFilter={"blur(4px)"}
                  bg={"blackAlpha.500"}
                  _hover={{ bg: "blackAlpha.800" }}
                  color={"white"}
                  cursor={rightNavShown ? "pointer" : "none"}
                  pointerEvents={rightNavShown ? "auto" : "none"}
                  px={1}
                  py={7}
                  rounded={"full"}
                  transition={".25s all ease-in-out"}
                  variant={"ghost"}
                  onClick={() => navigateScroll(1)}
                >
                  <Icon as={BiChevronRight} h={12} w={12} />
                </Button>
              </VStack>
            </Box>
            {data?.content && (
              <Box color={"gray.700"} _dark={{ color: "gray.400" }}>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  components={ChakraUIRenderer(newTheme)}
                >
                  {data?.content}
                </ReactMarkdown>
              </Box>
            )}
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
