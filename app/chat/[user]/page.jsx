"use client";

import {
  HStack,
  VStack,
  Heading,
  Button,
  Skeleton,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { MdOutlineCall } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMdPaperPlane } from "react-icons/io";

import ParentLayout from "../page";
import axios from "axios";
import Message from "@/components/chat/message";
import IncomingCall from "@/components/chat/incomingCall";

export default function () {
  const { user: userId } = useParams();
  const [user, setUser] = useState();
  const [messages, setMessage] = useState([]);
  const [showModal, setModalVisibility] = useState(false);
  const textarea = useRef(null);

  async function fetchUser() {
    const { data } = await axios.get(`https://dummyjson.com/users/${userId}`);
    setUser(data);
  }

  function pushMessage(message) {
    setMessage([...messages, message]);
  }

  function buttonClickHandler() {
    const text = textarea.current.value;

    if (text.trim() != "") {
      pushMessage(text, true);
      textarea.current.value = "";
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ParentLayout>
      <IncomingCall 
      show={showModal} 
      onClose={()=>setModalVisibility(false)} />
      <VStack align="stretch" height="100%">
        <HStack justify="space-between">
          {user ? (
            <Heading>{user.firstName}</Heading>
          ) : (
            <Skeleton height="5" width="200px" />
          )}

          <HStack>
            <Button
              colorPalette="teal"
              variant="outline"
              onClick={() => setModalVisibility(true)}
            >
              <MdOutlineCall />
            </Button>
            <Button colorPalette="teal" variant="solid">
              <IoVideocamOutline />
            </Button>
          </HStack>
        </HStack>
        <VStack
          id="chat"
          flex="1"
          overflow="auto"
          align="stretch"
          paddingBlock="5"
        >
          {messages.map((message, key) => (
            <Message key={key} message={message} />
          ))}
        </VStack>
        <HStack gap="5">
          <Textarea placeholder="message..." ref={textarea} />
          <Button
            colorPalette="teal"
            variant="ghost"
            onClick={buttonClickHandler}
          >
            <IoMdPaperPlane />
          </Button>
        </HStack>
      </VStack>
    </ParentLayout>
  );
}
