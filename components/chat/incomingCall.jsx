"use client";

import { useSocket } from "@/context/socket";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function (props) {
  const [showModal, setModalVisibility] = useState(false);
  const { socket } = useSocket();

  socket?.on("foo", () => {
    setModalVisibility(true);
  });

  return (
    <>
      {showModal && (
        <Box
          position="fixed"
          inset="0"
          background="blackAlpha.700"
          zIndex="999"
        >
          <HStack
            maxWidth="420px"
            position="absolute"
            inset="50px 0 auto 0"
            margin="auto"
            background="gray.800"
            padding="5"
            borderRadius="5px"
            gap="2"
            animation="slide-from-bottom-full 300ms ease-out"
          >
            <Heading marginRight="auto">Saify</Heading>
            <Button colorPalette="teal">Accept</Button>
            <Button colorPalette="red" onClick={()=>setModalVisibility(false)}>
              Decline
            </Button>
          </HStack>
        </Box>
      )}
    </>
  );
}
