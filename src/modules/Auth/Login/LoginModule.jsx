import Navbar from "@components/Navbar";
import AuthLayout from "@layouts/Auth";
import { Fragment } from "react";
import { Text } from "@chakra-ui/react";

const LoginModule = () => {
  return (
    <Fragment>
      <Navbar />
      <AuthLayout title={"Login to Your Account"}>
        <Text>Aku MAu Login Gays</Text>
      </AuthLayout>
    </Fragment>
  );
};

export default LoginModule;
