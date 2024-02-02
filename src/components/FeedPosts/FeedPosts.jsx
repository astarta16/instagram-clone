import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts =() => {
  return (
   <Container maxW={"container.sm"} py={10} px={2}>
    <FeedPost img="/img1.png" username="ssd" avatar = "/img1.png"/>
    <FeedPost img="/img2.png" username="ssd" avatar = "/img1.png"/>
    <FeedPost img="/img3.png" username="ssd" avatar = "/img1.png"/>
    <FeedPost img="/img4.png" username="ssd" avatar = "/img1.png"/>
   </Container>
  )
}

export default FeedPosts
