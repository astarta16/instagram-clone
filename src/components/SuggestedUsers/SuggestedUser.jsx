import { Avatar, Button, Flex } from '@chakra-ui/react'
import React from 'react'

const  SuggestedUser = ({followers, name, avatar}) => {
  return <Flex w={"full"}
  justifyContent={"space-between"} alignItems={"center"}>
    <Flex>
      <Avatar src={avatar} name={name}  size={"md"}/>
    </Flex>
    <Button></Button>
  </Flex>
   
  
}

export default SuggestedUser
