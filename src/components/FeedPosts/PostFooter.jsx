import { Flex, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import {NotificationLogo,UnlikeLogo } from '../../assets/constants'

function PostFooter() {
const[liked, setLiked] = useState(false);
const [likes, setLikes] = useState(1000)

  return <>
  <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
    <Box>
{!liked ? (<NotificationLogo />) : (<UnlikeLogo />)}
    </Box>
  </Flex>
  
  </>
}

export default PostFooter
