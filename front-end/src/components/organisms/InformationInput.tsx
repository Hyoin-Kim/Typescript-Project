/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import NameInput from "../molecules/NameInput";
import PhoneInput from "../molecules/PhoneInput";
import IdentifyInput from "../molecules/IdentifyInput";
import Footer from "../common/Footer";

const InformationInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const birthInputRef = useRef<HTMLInputElement>(null);
  const uniqueInputRef = useRef<HTMLInputElement>(null);
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(false);
  const [isConditionMet, setIsConditionMet] = useState({
    name: false,
    phoneNum: false,
    uniqueNum: false,
  });

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  function handleNamePress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      phoneInputRef.current?.focus();
    }
  }

  function handlePhonePress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      birthInputRef.current?.focus();
    }
  }

  function handleUniquePress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      uniqueInputRef.current?.focus();
    }
  }

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
        onKeyPress={handleNamePress}
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
      />
      <PhoneInput
        phoneInputRef={phoneInputRef}
        onKeyPress={handlePhonePress}
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
      />
      <IdentifyInput
        birthInputRef={birthInputRef}
        uniqueInputRef={uniqueInputRef}
        onKeyPress={handleUniquePress}
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
      />
      <Footer isJoinButtonDisabled={isJoinButtonDisabled} />
    </div>
  );
};

export default InformationInput;
