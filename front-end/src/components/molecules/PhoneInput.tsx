import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "../atoms/StyledInput";
import { IJoinInfo } from "../../types/info.type";

interface IProps {
  phoneInputRef?: React.RefObject<HTMLInputElement>;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isConditionMet: IJoinInfo;
  setIsConditionMet: (value: IJoinInfo) => void;
}

const PhoneInput = ({ phoneInputRef, onKeyPress, isConditionMet, setIsConditionMet }: IProps) => {
  const [phoneNum, setPhoneNum] = useState("");

  const handlePhoneOnChange = (value: string) => {
    setPhoneNum(value);
  };

  //휴대폰 번호 입력 조건
  useEffect(() => {
    if (phoneNum.length === 10) {
      setPhoneNum(phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")); //phoneNum이 10자리일경우(xxx/xxx/xxxx) '-' 생성(10자리->12자리)
    } else if (phoneNum.length === 13) {
      setPhoneNum(phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")); //phoneNum이 13자리일경우(xxx-xxxx-xxxx) '-' 생성
    }
    const oldPhoneNum = /^01([1|9|])-?([0-9]{3,4})-?([0-9]{4})$/; //011 또는 019 형식
    const recentPhoneNum = /^01([0])-?([0-9]{4})-?([0-9]{4})$/; //010 형식
    if (oldPhoneNum.test(phoneNum) === true || recentPhoneNum.test(phoneNum)) {
      setIsConditionMet({ ...isConditionMet, phoneNum: true });
    } else {
      setIsConditionMet({ ...isConditionMet, phoneNum: false });
    }
  }, [phoneNum]);

  return (
    <PhoneWrapper>
      <p>휴대폰 번호</p>
      <StyledInput
        width="300px"
        errorMsg="올바른 휴대폰 번호를 입력하세요."
        onChange={handlePhoneOnChange}
        isConditionMet={isConditionMet.phoneNum}
        maxByte={13}
        value={phoneNum}
        onKeyPress={onKeyPress}
        inputRef={phoneInputRef}
      />
    </PhoneWrapper>
  );
};

export default PhoneInput;

const PhoneWrapper = styled.div`
  margin: 0px 24px 32px 24px;
`;
