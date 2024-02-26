import { AvatarGroup, Flex } from '@chakra-ui/react'
import React from 'react'

function ProfileHeader() {
  return <Flex gap={{base:4, sm:10}}>
    <AvatarGroup></AvatarGroup>

  </Flex>
   
}

export default ProfileHeader
