import Form from "@components/Common/Form";
import Button from "@components/Common/Button";
import TextField from "@components/Common/TextField";
import { Flex } from "@chakra-ui/react";
import { PayloadLogin } from "@store/Auth";
import { useRecoilState } from "recoil";

const LoginFormModule = () => {
  const [payload, setPayload] = useRecoilState(PayloadLogin);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Flex flexDirection={"column"} gap={2}>
        <TextField
          value={payload["email"]}
          type="text"
          placeholder="maulana@gmail.com"
          label="Email"
          onChange={(e) =>
            setPayload({ ...payload, ["email"]: e.target.value })
          }
        />
        <TextField
          value={payload["password"]}
          onChange={(e) =>
            setPayload({ ...payload, ["password"]: e.target.value })
          }
          type="password"
          placeholder="************"
          label="Password"
        />
      </Flex>
      <Button
        type="submit"
        style={{
          color: "blue.300",
          backgroundColor: "white",
          width: "full",
          shadow: "black.800",
        }}
        text="Login"
      />
    </Form>
  );
};

export default LoginFormModule;
