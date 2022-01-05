import React, { useState, useRef, useEffect } from "react";
import NameInput from "../molecules/NameInput";
import PhoneInput from "../molecules/PhoneInput";
import IdentifyInput from "../molecules/IdentifyInput";
import { IJoinInfo } from "../../types/info.type";

interface IProps {
  isConditionMet: IJoinInfo;
  setIsConditionMet: (value: IJoinInfo) => void;
}

const InformationInput = ({ isConditionMet, setIsConditionMet }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const birthInputRef = useRef<HTMLInputElement>(null);
  const uniqueInputRef = useRef<HTMLInputElement>(null);
  const [birthNum, setBirthNum] = useState("");

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  //nameInput에서 Enter시, 휴대폰 번호 필드에 포커싱
  function handleNamePress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      phoneInputRef.current?.focus();
    }
  }
  //phoneInput에서 Enter시, 주민등록번호 생년월일 필드에 포커싱
  function handlePhonePress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      birthInputRef.current?.focus();
    }
  }
  //주민등록 생년월일에 Enter 또는 6자리 성립시, 주민등록번호 뒷자리 필드에 포커싱
  function handleUniquePress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter" || birthNum.length === 6) {
      uniqueInputRef.current?.focus();
    }
  }

  return (
    <>
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
        birthNum={birthNum}
        setBirthNum={setBirthNum}
      />
    </>
  );
};

export default InformationInput;
