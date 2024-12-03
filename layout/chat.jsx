import User from "@/components/chat/user";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { SocketProvider } from "@/context/socket";

export default function ({ children }) {

    return <>
        <SocketProvider>
            <Grid id="app" templateColumns="repeat(4, 1fr)" height='100vh'>
                <GridItem id="users_list" colSpan="1" background="yellow">
                    <VStack>
                        <User />
                    </VStack>
                </GridItem>
                <GridItem id="chat_area" colSpan="3">dddd</GridItem>
            </Grid>
        </SocketProvider>
    </>

}
