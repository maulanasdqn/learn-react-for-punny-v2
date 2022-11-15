import { Button as Btn } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Button = ({ text, to = "", type, style }) => {
  return (
    <Btn {...style} type={type}>
      {to.length === 0 ? text : <Link to={to}>{text}</Link>}
    </Btn>
  );
};

export default Button;
