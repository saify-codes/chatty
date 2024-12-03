"use client";

import {
  HStack,
  VStack,
  Heading,
  Button,
  Skeleton,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MdOutlineCall } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMdPaperPlane } from "react-icons/io";

import ParentLayout from "../page";
import axios from "axios";
import Message from "@/components/chat/message";

export default function () {
  const { user: userId } = useParams();
  const [user, setUser] = useState();

  async function fetchUser() {
    const { data } = await axios.get(`https://dummyjson.com/users/${userId}`);
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  });

  return (
    <ParentLayout>
      <VStack align="stretch" height="100%">
        <HStack justify="space-between">
          {user ? (
            <Heading>{user.firstName}</Heading>
          ) : (
            <Skeleton height="5" width="200px" />
          )}

          <HStack>
            <Button colorPalette="teal" variant="outline">
              <MdOutlineCall />
            </Button>
            <Button colorPalette="teal" variant="solid">
              <IoVideocamOutline />
            </Button>
          </HStack>
        </HStack>
        <VStack id="chat" flex="1" overflow="auto" align="stretch" paddingBlock="5">
          <Message message="hi there" me={true}/>
          <Message message="whatsup!" me={false}/>
        </VStack>
        <HStack gap="5">
          <Textarea placeholder="message..." />
          <Button colorPalette="teal" variant="ghost">
            <IoMdPaperPlane/>
          </Button>
        </HStack>
      </VStack>
    </ParentLayout>
  );
}
