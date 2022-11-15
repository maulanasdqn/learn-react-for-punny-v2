import { Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import Navbar from "@components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Flex align="center" justify="center">
        {children}
      </Flex>
    </Fragment>
  );
};

export default MainLayout;
