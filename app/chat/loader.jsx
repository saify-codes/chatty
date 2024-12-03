import { Skeleton, Stack, HStack } from "@chakra-ui/react";

export default function () {
  return (
    <>
      {Array(20).fill(0).map((_, key) => (
        <HStack gap="5" padding="5" key={key}>
          <Skeleton height="10" width="10" borderRadius="50%" />
          <Stack flex="1">
            <Skeleton height="5" />
            <Skeleton height="5" width="80%" />
          </Stack>
        </HStack>
      ))}
    </>
  );
}
