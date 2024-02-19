import { Box, Flex, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Text } from "@chakra-ui/react";

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>

        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}>
          See All
        </Text>
      </Flex>
      <SuggestedUser name='nini gedeshuri' followers={1300} avatar =''/>
      <SuggestedUser name='nini gedeshuri' followers={1300} avatar ='' />
      <SuggestedUser name='nini gedeshuri' followers={1300} avatar ='' />

      
    </VStack>
  );
}

export default SuggestedUsers;
