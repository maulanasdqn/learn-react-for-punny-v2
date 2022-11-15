import { Checkbox } from "@chakra-ui/react";

const CheckBox = ({ value, onChange, checked }) => {
  return <Checkbox value={value} checked={checked} onChange={onChange} />;
};

export default CheckBox;
