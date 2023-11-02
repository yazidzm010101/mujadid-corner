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
  VStack,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

import { BsX } from "react-icons/bs";
import MotionBox from "../MotionBox";

function Story({ isOpen, onClose, data: initialData, title: initialTitle }) {
  const [data, setData] = useState(initialData);
  const [title, setTitle] = useState(initialTitle);
  const [leftNavShown, setLeftNavShown] = useState(false);
  const [rightNavShown, setRightNavShown] = useState(false);
  const [active, setActive] = useState(-1);
  const [clientX, setClientX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
    }
  });

  return (
    <Portal>
      <Box
        as={Fade}
        in={isOpen}
        unmountOnExit
        bg={"gray.900"}
        pos={"fixed"}
        zIndex={1000}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
      >
        <Button
          variant={"ghost"}
          color={"white"}
          rounded={"full"}
          pos={"absolute"}
          top={4}
          right={4}
          px={2}
          py={7}
          onClick={onClose}
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <Icon as={BsX} w={10} h={10} />
        </Button>
        <VStack alignItems={"flex-start"} pos={"absolute"} top={8} left={10}>
          <Heading
            as="h2"
            fontSize={"4xl"}
            fontWeight={"extrabold"}
            color={"teal.200"}
          >
            Gallery
          </Heading>
          <Heading
            as="h4"
            fontSize={"lg"}
            fontWeight={"normal"}
            color={"gray.200"}
          >
            {title}
          </Heading>
        </VStack>
        <Box
          w={"full"}
          px={10}
          pos={"absolute"}
          top={"50%"}
          left={0}
          transform={"translateY(-50%)"}
        >
          <Box
            ref={containerRef}
            onScroll={(e) => onScroll(e.target)}
            w={"full"}
            rounded={"xl"}
            overflowX={"auto"}
            className="scroll-dark"
            // onMouseDown={(e) => {
            //   setClientX(e.clientX);
            //   setIsDragging(true);
            // }}
            // onMouseUp={(e) => {
            //   setClientX(e.clientX);
            //   setIsDragging(false);
            // }}
            // onMouseMove={(e) => {
            //   if (isDragging) {
            //     navigateScroll(e.clientX - clientX, true);
            //     setClientX(e.clientX);
            //   }
            // }}
            // // onDragOver={(e) => {
            // //   navigateScroll(e.clientX - clientX, true);
            // //   setClientX(e.clientX);
            // // }}
          >
            <HStack ref={targetRef} mx={"auto"} spacing={4} w={"max-content"}>
              {data?.map((image, i) => (
                <>
                  <AspectRatio
                    flexShrink={0}
                    w={"container.md"}
                    ratio={3 / 4}
                    key={i}
                    rounded={"xl"}
                    overflow={"hidden"}
                    maxH={"full"}
                    maxW={"400px"}
                    onClick={() => setActive(i)}
                    role="group"
                    cursor={"pointer"}
                    userSelect={"none"}
                  >
                    <>
                      <Image
                        src={image}
                        transition={"all .2s ease-in-out"}
                        _groupHover={{ transform: "scale(1.1)" }}
                      />
                      {/* <Image
                        src={image}
                        filter={"blur(10px)"}
                        transform={"scale(1.1)"}
                        transition={"all .2s ease-in-out"}
                        _groupHover={{ transform: "scale(1.2)" }}
                      /> */}
                      {/* <Image
                        src={image}
                        objectFit={"contain !important"}
                        transition={"all .2s ease-in-out"}
                        _groupHover={{ transform: "scale(1.1)" }}
                      /> */}
                    </>
                  </AspectRatio>
                  <Portal>
                    <VStack
                      spacing={0}
                      pos={"fixed"}
                      top={0}
                      w={"full"}
                      h={"full"}
                      left={0}
                      as={ScaleFade}
                      in={i == active}
                      bg={"blackAlpha.800"}
                      zIndex={1001}
                      unmountOnExit
                    >
                      <Image
                        w={"full"}
                        h={"full"}
                        src={image}
                        objectFit={"contain"}
                      />
                      {data.length > 1 && (
                        <>
                          <VStack
                            pos={"absolute"}
                            top={0}
                            left={0}
                            pl={10}
                            pr={14}
                            justifyContent={"center"}
                            h={"calc(100% + 5px)"}
                            bgGradient={
                              "linear(to-r, blackAlpha.500, transparent)"
                            }
                            transition={".25s all ease-in-out"}
                            role="group"
                          >
                            <Button
                              variant={"ghost"}
                              color={"white"}
                              px={1}
                              py={7}
                              rounded={"full"}
                              _hover={{ bg: "whiteAlpha.100" }}
                              opacity={0.5}
                              _groupHover={{ opacity: 1 }}
                              onClick={() =>
                                setActive(
                                  active - 1 < 0 ? data.length - 1 : active - 1,
                                )
                              }
                            >
                              <Icon as={BiChevronLeft} w={12} h={12} />
                            </Button>
                          </VStack>
                          <VStack
                            pos={"absolute"}
                            top={0}
                            right={0}
                            pr={10}
                            pl={14}
                            justifyContent={"center"}
                            h={"calc(100% + 5px)"}
                            bgGradient={
                              "linear(to-l, blackAlpha.500, transparent)"
                            }
                            transition={".25s all ease-in-out"}
                            role="group"
                          >
                            <Button
                              variant={"ghost"}
                              color={"white"}
                              px={1}
                              py={7}
                              rounded={"full"}
                              _hover={{ bg: "whiteAlpha.100" }}
                              opacity={0.5}
                              _groupHover={{ opacity: 1 }}
                              onClick={() =>
                                setActive(
                                  active + 1 >= data.length ? 0 : active + 1,
                                )
                              }
                            >
                              <Icon as={BiChevronRight} w={12} h={12} />
                            </Button>
                          </VStack>
                        </>
                      )}
                      <Button
                        variant={"ghost"}
                        rounded={"full"}
                        color={"white"}
                        pos={"absolute"}
                        top={4}
                        right={4}
                        px={2}
                        py={7}
                        _hover={{ bg: "whiteAlpha.200" }}
                        onClick={() => setActive(-1)}
                      >
                        <Icon as={BsX} w={10} h={10} />
                      </Button>
                    </VStack>
                  </Portal>
                </>
              ))}{" "}
            </HStack>
          </Box>
          <VStack
            pos={"absolute"}
            top={-1}
            left={10}
            pr={14}
            justifyContent={"center"}
            h={"calc(100% - 5px)"}
            opacity={leftNavShown ? 1 : 0}
            bgGradient={"linear(to-r, gray.900, transparent)"}
            transition={".25s all ease-in-out"}
          >
            <Button
              as={MotionBox}
              variant={"ghost"}
              color={"white"}
              px={1}
              rounded={"full"}
              _hover={{ bg: "whiteAlpha.100" }}
              pointerEvents={leftNavShown ? "auto" : "none"}
              cursor={leftNavShown ? "pointer" : "none"}
              transition={".25s all ease-in-out"}
              onClick={() => navigateScroll(-1)}
            >
              <Icon as={BiChevronLeft} w={12} h={12} />
            </Button>
          </VStack>{" "}
          <VStack
            pos={"absolute"}
            top={-1}
            right={10}
            pl={14}
            justifyContent={"center"}
            h={"calc(100% - 5px)"}
            opacity={rightNavShown ? 1 : 0}
            bgGradient={"linear(to-l, gray.900, transparent)"}
            transition={".25s all ease-in-out"}
          >
            <Button
              as={MotionBox}
              variant={"ghost"}
              color={"white"}
              px={1}
              rounded={"full"}
              _hover={{ bg: "whiteAlpha.100" }}
              pointerEvents={rightNavShown ? "auto" : "none"}
              cursor={rightNavShown ? "pointer" : "none"}
              transition={".25s all ease-in-out"}
              onClick={() => navigateScroll(1)}
            >
              <Icon as={BiChevronRight} w={12} h={12} />
            </Button>
          </VStack>
        </Box>
      </Box>
    </Portal>
  );
}

export default Story;
