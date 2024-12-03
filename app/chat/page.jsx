"use client";

import User from "@/components/chat/user";
import { Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import { SocketProvider } from "@/context/socket";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader";

export default function ({ children }) {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get("https://dummyjson.com/users");
    setUsers(data.users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <SocketProvider>
        <Grid id="app" templateColumns="repeat(4, 1fr)" height="100vh">
          <GridItem id="users_list" colSpan="1" overflow="auto">
            <VStack align="stretch" gap="0">
              {users.length === 0 ? (
                <Loader />
              ) : (
                users.map((user) => (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.firstName}
                    email={user.email}
                    avatar={user.image}
                    isOnline={user.isOnline}
                  />
                ))
              )}
            </VStack>
          </GridItem>
          <GridItem id="chat_area" colSpan="3" padding="5" position="relative" overflow="hidden">
            {children || (
              <Image
                src="/assets/chat.svg"
                width="500px"
                position="absolute"
                inset="0"
                margin="auto"
              />
            )}
          </GridItem>
        </Grid>
      </SocketProvider>
    </>
  );
}
