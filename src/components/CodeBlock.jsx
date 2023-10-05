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
import React from "react";
import { FaClipboard } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function CodeBlock({
  language,
  children,
  node: {
    data: { meta },
  },
}) {
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
    <Box rounded={"md"} overflow={"hidden"}>
      <SyntaxHighlighter language={language} style={atomOneDark}>
        {children}
      </SyntaxHighlighter>
      <HStack bg={"gray.200"} px={2} py={1}>
        <Text>{meta}</Text>
        <Popover isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <Button
              onClick={() => onCopy(children)}
              m={0}
              ml={"auto"}
              size={"sm"}
              p={0.2}
              variant={"ghost"}
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
              <Text>Berhasil dicomot</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
    </Box>
  );
}

export default CodeBlock;
