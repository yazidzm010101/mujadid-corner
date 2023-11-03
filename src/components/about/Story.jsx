import {
  AspectRatio,
  Box,
  Button,
  Fade,
  HStack,
  Heading,
  Icon,
  Image,
  Portal,
  ScaleFade,
  Stack,
  VStack,
} from "@chakra-ui/react";
import {
  BiCarousel,
  BiChevronLeft,
  BiChevronRight,
  BiGridAlt,
} from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

import { BsX } from "react-icons/bs";
import MotionBox from "../MotionBox";

function Story({ isOpen, onClose, data: initialData, title: initialTitle }) {
  const [data, setData] = useState(initialData);
  const [title, setTitle] = useState(initialTitle);
  const [leftNavShown, setLeftNavShown] = useState(false);
  const [rightNavShown, setRightNavShown] = useState(false);
  const [isGrid, setIsGrid] = useState(false);
  const [active, setActive] = useState(-1);

  const containerRef = useRef(null);
  const targetRef = useRef(null);

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
            : (containerRef.current.scrollWidth / data.length) * direction),
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
      document.body.style.overflow = "hidden";
      setData(initialData);
      setTitle(initialTitle);
    } else {
      document.body.style.overflow = "unset";
      setActive(-1);
      setIsGrid(false);
    }
  }, [isOpen]);

  return (
    <Portal>
      <Box
        unmountOnExit
        as={Fade}
        bg={"gray.900"}
        className="scroll-dark"
        h={"full"}
        in={isOpen}
        left={0}
        overflowY={active > -1 ? "hidden" : "auto"}
        pos={"fixed"}
        top={0}
        w={"full"}
        zIndex={1000}
      >
        <VStack
          alignItems={"flex-start"}
          justifyContent={"center"}
          left={0}
          minH={"full"}
          pb={10}
          pos={"absolute"}
          pt={48}
          px={{ base: 2, md: 4, lg: 10 }}
          top={0}
          w={"full"}
        >
          <Box flexShrink={0} pos={"relative"} w={"full"}>
            <Box
              className="scroll-dark"
              overflowX={{ base: "none", sm: !isGrid && "auto" }}
              ref={containerRef}
              rounded={"xl"}
              w={"full"}
              onScroll={(e) => onScroll(e.target)}
            >
              <Stack
                direction={"row"}
                flexWrap={{ base: "wrap", sm: (isGrid && "wrap") || "nowrap" }}
                ref={targetRef}
                spacing={0}
                w={{ base: "full", sm: !isGrid && "max-content" }}
              >
                {data?.map((image, i) => (
                  <Box
                    flexShrink={0}
                    key={i}
                    maxW={{ sm: !isGrid && "400px" }}
                    p={4}
                    w={{
                      base: "50%",
                      sm: isGrid ? "50%" : "container.md",
                      md: isGrid && "33.33%",
                      xl: isGrid && "25%",
                    }}
                  >
                    <AspectRatio
                      cursor={"pointer"}
                      flexShrink={0}
                      key={i}
                      overflow={"hidden"}
                      ratio={3 / 4}
                      role="group"
                      rounded={"xl"}
                      userSelect={"none"}
                      w={"full"}
                      onClick={() => setActive(i)}
                    >
                      <Image
                        _hover={{ transform: "scale(1.1)" }}
                        bg={"gray.600"}
                        src={image}
                        transition={"all .2s ease-in-out"}
                      />
                    </AspectRatio>
                    <Portal>
                      <VStack
                        unmountOnExit
                        as={ScaleFade}
                        bg={"blackAlpha.800"}
                        h={"full"}
                        in={i == active}
                        left={0}
                        pos={"fixed"}
                        spacing={0}
                        top={0}
                        w={"full"}
                        zIndex={1001}
                      >
                        <Image
                          h={"full"}
                          objectFit={"contain"}
                          src={image}
                          w={"full"}
                        />
                        {data.length > 1 && (
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
                                onClick={() =>
                                  setActive(
                                    active - 1 < 0
                                      ? data.length - 1
                                      : active - 1,
                                  )
                                }
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
                                onClick={() =>
                                  setActive(
                                    active + 1 >= data.length ? 0 : active + 1,
                                  )
                                }
                              >
                                <Icon as={BiChevronRight} h={12} w={12} />
                              </Button>
                            </VStack>
                          </>
                        )}
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
                          onClick={() => setActive(-1)}
                        >
                          <Icon as={BsX} h={10} w={10} />
                        </Button>
                      </VStack>
                    </Portal>
                  </Box>
                ))}{" "}
              </Stack>
            </Box>
            <VStack
              bgGradient={"linear(to-r, gray.900, transparent)"}
              display={{ base: "none", sm: !isGrid && "flex" }}
              h={"calc(100% - 10px)"}
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
                _hover={{ bg: "whiteAlpha.100" }}
                as={MotionBox}
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
              bgGradient={"linear(to-l, gray.900, transparent)"}
              display={{ base: "none", sm: !isGrid && "flex" }}
              h={"calc(100% - 10px)"}
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
                _hover={{ bg: "whiteAlpha.100" }}
                as={MotionBox}
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
        </VStack>
        <HStack
          pos={"fixed"}
          top={0}
          right={0}
          w={"full"}
          justifyContent={"flex-end"}
          px={4}
          flexShrink={0}
          spacing={0}
          py={3}
          bgGradient={"linear(to-b, gray.900, transparent)"}
        >
          <AspectRatio
            display={{ base: "none", sm: "block" }}
            color={(isGrid && "gray.500") || "gray.200"}
            cursor={"pointer"}
            ratio={1}
            w={8}
            mr={4}
            onClick={() => setIsGrid(false)}
          >
            <Icon as={BiCarousel} />
          </AspectRatio>
          <AspectRatio
            display={{ base: "none", sm: "block" }}
            cursor={"pointer"}
            ratio={1}
            w={8}
            mr={4}
            onClick={() => setIsGrid(true)}
          >
            <Icon
              as={BiGridAlt}
              color={(!isGrid && "gray.500") || "gray.200"}
            />
          </AspectRatio>
          <Box my={3} bg={"gray.400"} w={"1px"} alignSelf={"stretch"} />
          <Button
            _hover={{ bg: "whiteAlpha.200" }}
            color={"white"}
            px={2}
            py={7}
            rounded={"full"}
            variant={"ghost"}
            onClick={onClose}
          >
            <Icon as={BsX} h={10} w={10} />
          </Button>
        </HStack>
        <VStack
          alignItems={"flex-start"}
          left={10}
          pos={"absolute"}
          top={8}
          pointerEvents={"none"}
          pr={{ sm: 200 }}
        >
          <Heading
            as="h2"
            color={"teal.200"}
            fontSize={"4xl"}
            fontWeight={"extrabold"}
          >
            Gallery
          </Heading>
          <Heading
            as="h4"
            color={"gray.200"}
            fontSize={"lg"}
            fontWeight={"normal"}
          >
            {title}
          </Heading>
        </VStack>
      </Box>
    </Portal>
  );
}

export default Story;
