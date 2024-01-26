import { Container, Flex } from "@chakra-ui/react"

const HomePage =() => {
  return (
   <Container maxW={"container.lg"}>
    <Flex>
      <Box>
        FeedPosts
      </Box>
      <Box>
        Suggested
      </Box>
    </Flex>
   </Container>
  )
}

export default HomePage
