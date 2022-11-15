import { Flex, Text } from "@chakra-ui/react";

const AuthLayout = ({ children, title }) => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"full"}
      padding={"2"}
      backgroundColor={"white"}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        backgroundColor={"blue.400"}
        width={"600px"}
        height={"auto"}
        rounded={"lg"}
      >
        <Text fontSize={"2xl"} fontWeight={"600"} color={"black.900"}>
          {title}
        </Text>
        {children}
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
