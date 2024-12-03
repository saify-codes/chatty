"use client";

import { Avatar } from "@/components/ui/avatar";
import { GoDotFill } from "react-icons/go";
import { Text, Heading, HStack, VStack, Badge, Icon } from "@chakra-ui/react";
import Link from "next/link";

export default function user(props) {
  return (
    <Link href={`/chat/${props.id}`}>
      <HStack
        padding="5"
        gap="10"
        borderBottom="1px solid #333"
        cursor="pointer"
        _hover={{ background: "#333" }}
      >
        <Avatar
          size="2xl"
          name={props.name}
          src={props.avatar}
          border={props.isOnline ? "5px solid green" : "none"}
        />
        <VStack align="start">
          <Heading textAlign="left">{props.name}</Heading>
          <Text>{props.email}</Text>
        </VStack>
        {props.isOnline && (
          <Icon color="green" marginLeft="auto">
            <GoDotFill />
          </Icon>
        )}
      </HStack>
    </Link>
  );
}
