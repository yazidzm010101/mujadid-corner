import {
  Box,
  Button,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { FaClipboard } from "react-icons/fa";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function CodeBlock({ language, children, node: { data } }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [timer, setTimer] = React.useState(null);
  const onCopy = (value) => {
    onToggle();
    navigator.clipboard.writeText(value);
    setTimer(
      setTimeout(() => {
        onClose();
        clearTimeout(timer);
        setTimer(null);
      }, 1000),
    );
  };
  return (
    <Box rounded={"md"} overflow={"hidden"} mb={12}>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{ padding: "1rem 1rem" }}
      >
        {children}
      </SyntaxHighlighter>
      {data?.meta && (
        <HStack bg={"gray.200"} _dark={{ bg: "gray.900" }} px={2} py={1}>
          <Text>{data.meta}</Text>
          <Popover isOpen={isOpen} onClose={onClose}>
            <PopoverTrigger>
              <Button
                m={0}
                ml={"auto"}
                size={"sm"}
                p={0.2}
                variant={"ghost"}
                onClick={() => onCopy(children)}
              >
                <Icon w={"16px"} h={"16px"} as={FaClipboard} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w={"max-content"} border={"1px solid black"}>
              <PopoverArrow bg={"black"} boxShadow={"0 !important"} />
              <PopoverBody
                bg={"black"}
                color={"white"}
                fontFamily={"Inter, sans-serif"}
              >
                <Text>Successfully copied!</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      )}
    </Box>
  );
}

export default CodeBlock;
