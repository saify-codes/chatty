import User from "@/components/chat/user";
import { Grid, GridItem, Image, Stack, VStack } from "@chakra-ui/react";
import { SocketProvider } from "@/context/socket";

let users = [
    { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=1", email: "johndoe@example.com", isOnline: true },
    { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=2", email: "janesmith@example.com", isOnline: false },
    { name: "Robert Brown", avatar: "https://i.pravatar.cc/150?img=3", email: "robertbrown@example.com", isOnline: true },
    { name: "Emily White", avatar: "https://i.pravatar.cc/150?img=4", email: "emilywhite@example.com", isOnline: false },
    { name: "Michael Green", avatar: "https://i.pravatar.cc/150?img=5", email: "michaelgreen@example.com", isOnline: true },
    { name: "Linda Black", avatar: "https://i.pravatar.cc/150?img=6", email: "lindablack@example.com", isOnline: false },
    { name: "David Harris", avatar: "https://i.pravatar.cc/150?img=7", email: "davidharris@example.com", isOnline: true },
    { name: "Sarah King", avatar: "https://i.pravatar.cc/150?img=8", email: "sarahking@example.com", isOnline: false },
    { name: "James Wilson", avatar: "https://i.pravatar.cc/150?img=9", email: "jameswilson@example.com", isOnline: true },
    { name: "Patricia Lewis", avatar: "https://i.pravatar.cc/150?img=10", email: "patricialewis@example.com", isOnline: false },
    { name: "Barbara Scott", avatar: "https://i.pravatar.cc/150?img=12", email: "barbarascott@example.com", isOnline: false },
    { name: "Daniel Adams", avatar: "https://i.pravatar.cc/150?img=13", email: "danieladams@example.com", isOnline: true },
    { name: "Jessica Moore", avatar: "https://i.pravatar.cc/150?img=14", email: "jessicamoore@example.com", isOnline: false },
    { name: "William Taylor", avatar: "https://i.pravatar.cc/150?img=15", email: "williamtaylor@example.com", isOnline: true },
    { name: "Elizabeth Clark", avatar: "https://i.pravatar.cc/150?img=16", email: "elizabethclark@example.com", isOnline: false },
    { name: "Joseph Martinez", avatar: "https://i.pravatar.cc/150?img=17", email: "josephmartinez@example.com", isOnline: true },
    { name: "Karen Rodriguez", avatar: "https://i.pravatar.cc/150?img=18", email: "karenrodriguez@example.com", isOnline: false },
    { name: "Matthew Lee", avatar: "https://i.pravatar.cc/150?img=19", email: "matthewlee@example.com", isOnline: true },
    { name: "Nancy Young", avatar: "https://i.pravatar.cc/150?img=20", email: "nancyyoung@example.com", isOnline: false }
];

users.sort((a, b) => b.isOnline - a.isOnline);

export default function ({ children }) {

    return <>
        <SocketProvider>
            <Grid id="app" templateColumns="repeat(4, 1fr)" height='100vh'>
                <GridItem id="users_list" colSpan="1" overflow="auto">
                    <VStack align="stretch" gap="0">
                        {
                            users.map((user, id) =>
                                <User
                                    key={id}
                                    id="1"
                                    name={user.name}
                                    email={user.email}
                                    avatar={user.avatar}
                                    isOnline={user.isOnline} />)
                        }

                    </VStack>
                </GridItem>
                <GridItem id="chat_area" colSpan="3" display="grid" placeContent="center">
                    <Image src="/assets/chat.svg" width="500px" />
                </GridItem>
            </Grid>
        </SocketProvider>
    </>

}
