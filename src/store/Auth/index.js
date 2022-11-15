import { atom } from "recoil";

export const PayloadLogin = atom({
  key: "payload-login",
  default: {
    email: "",
    password: "",
  },
});
