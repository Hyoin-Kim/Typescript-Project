import React from "react";
import NameInput from "../molecules/NameInput";
import PhoneInput from "../molecules/PhoneInput";
import IdentifyInput from "../molecules/IdentifyInput";
import Footer from "../common/Footer";

const InformationInput = () => {
  return (
    <div>
      <NameInput />
      <PhoneInput />
      <IdentifyInput />
      <Footer />
    </div>
  );
};

export default InformationInput;
