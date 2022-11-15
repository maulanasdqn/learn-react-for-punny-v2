import Navbar from "@components/Navbar";
import AuthLayout from "@layouts/Auth";
import { Fragment } from "react";
import LoginFormModule from "./LoginFormModule";

const LoginModule = () => {
  return (
    <Fragment>
      <Navbar />
      <AuthLayout title={"Login to Your Account"}>
        <LoginFormModule />
      </AuthLayout>
    </Fragment>
  );
};

export default LoginModule;
