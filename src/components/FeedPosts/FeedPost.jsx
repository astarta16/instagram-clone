import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'

const  FeedPost =() => {
  return <>
  <PostHeader />
  <Box>
    <Image src='/img1.png' alt='user profile pic'/>
    </Box>
    <PostHeader />
  </>
    
  
}

export default FeedPost
