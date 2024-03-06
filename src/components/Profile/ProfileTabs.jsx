import { Flex } from "@chakra-ui/react";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}></Flex>
  );
};

export default ProfileTabs;
