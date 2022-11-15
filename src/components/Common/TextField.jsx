import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";

const TextField = ({
  placeholder,
  isInvalid,
  name,
  errors,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel fontWeight={600} color={"white"} htmlFor={name}>
        {label}
      </FormLabel>
      <Input
        type={type}
        variant={"outline"}
        borderColor={"white"}
        backdropBlur={true}
        backgroundColor="white"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <FormErrorMessage>{errors}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
