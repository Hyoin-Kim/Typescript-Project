/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import NameInput from "../molecules/NameInput";
import PhoneInput from "../molecules/PhoneInput";
import IdentifyInput from "../molecules/IdentifyInput";
import Footer from "../common/Footer";

interface IProps {
  handleOnKeyPress?: (value: string) => void;
}

const InformationInput = ({ handleOnKeyPress }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(false);
  const [isConditionMet, setIsConditionMet] = useState({
    name: false,
    phoneNum: false,
    uniqueNum: false,
  });

  useEffect(() => {
    console.log("current: ", inputRef);
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isConditionMet.name && isConditionMet.phoneNum && isConditionMet.uniqueNum) {
      setIsJoinButtonDisabled(true);
    } else {
      setIsJoinButtonDisabled(false);
    }
  }, [isConditionMet]);

  return (
    <div>
      <NameInput
        inputRef={inputRef}
        onKeyPress={handleOnKeyPress}
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
      />
      <PhoneInput isConditionMet={isConditionMet} setIsConditionMet={setIsConditionMet} />
      <IdentifyInput isConditionMet={isConditionMet} setIsConditionMet={setIsConditionMet} />
      <Footer isJoinButtonDisabled={isJoinButtonDisabled} />
    </div>
  );
};

export default InformationInput;
