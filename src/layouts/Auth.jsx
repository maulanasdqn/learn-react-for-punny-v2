import { Flex, Text } from "@chakra-ui/react";

const AuthLayout = ({ children, title }) => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"full"}
      padding={"6"}
      backgroundColor={"white"}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        backgroundColor={"blue.400"}
        width={"600px"}
        height={"50%"}
        rounded={"lg"}
      >
        <Text
          fontSize={"3xl"}
          padding={"2rem"}
          fontWeight={"600"}
          color={"white"}
        >
          {title}
        </Text>
        {children}
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
