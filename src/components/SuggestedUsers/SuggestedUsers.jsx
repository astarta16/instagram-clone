import { Text, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'

function SuggestedUsers() {
  return <VStack py={8} px={6} gap={4}>
    <SuggestedHeader />

<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
  <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
    Suggested for you

  </Text>

</Flex>
  </VStack>
}

export default SuggestedUsers
