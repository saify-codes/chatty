import { Box } from "@chakra-ui/react";

export default function ({ message, me }) {
  return (
    <Box
      margin={me ? "0 auto 0 0" : "0 0 0 auto"}
      background={me ? "gray.800" : "teal"}
      padding="3"
      borderRadius="5px"
      maxWidth="200px"
    >
      {message}
    </Box>
  );
}
