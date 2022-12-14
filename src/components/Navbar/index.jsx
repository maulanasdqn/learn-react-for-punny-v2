import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { URL_PATH } from "@util/Constant";
import { useRecoilValue } from "recoil";
import { PayloadLogin } from "@store/Auth";

const Navbar = () => {
  const payload = useRecoilValue(PayloadLogin);
  return (
    <Box
      display={"flex"}
      backgroundColor={"blue.400"}
      padding={"1rem"}
      color={"white"}
      width={"full"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"6"}>
        <Flex alignItems={"center"} gap={"4"}>
          <Text fontWeight={"700"}>Logo</Text>
        </Flex>
        <Flex gap={"2"} alignItems={"center"}>
          <Link to={URL_PATH.HOME}>Home</Link>
          <Link to={URL_PATH.ABOUT}>About</Link>
          <Link to={URL_PATH.CONTACT}>Contact</Link>
        </Flex>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"4"}>
        <Link to={URL_PATH.LOGIN}>Login</Link>
        <Link to={URL_PATH.REGISTER}>Register</Link>
      </Box>
      <Box>
        <h1>{payload.email}</h1>
        <h1>{payload.password}</h1>
      </Box>
    </Box>
  );
};

export default Navbar;
