import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
  useAccordion,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <SkeletonCircle height="10px" w={"200px"} />
                <SkeletonCircle height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}> contents wrappet</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img="/img1.png" username="ssd" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="ssd" avatar="/img1.png" />
          <FeedPost img="/img3.png" username="ssd" avatar="/img1.png" />
          <FeedPost img="/img4.png" username="ssd" avatar="/img1.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
