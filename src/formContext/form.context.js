import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // State for Page 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for Page 2
  const [brandName, setBrandName] = useState("");
  const [brandType, setBrandType] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [taxIdNumber, setTaxIdNumber] = useState("");

  return (
    <FormContext.Provider
      value={{
        // Page 1 values
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        // Page 2 values
        brandName,
        setBrandName,
        brandType,
        setBrandType,
        streetAddress,
        setStreetAddress,
        city,
        setCity,
        zipCode,
        setZipCode,
        taxIdNumber,
        setTaxIdNumber,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
