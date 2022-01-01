import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "../atoms/StyledInput";

interface IProps {
  phoneInputRef?: React.RefObject<HTMLInputElement>;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isConditionMet: {
    name: boolean;
    phoneNum: boolean;
    uniqueNum: boolean;
  };
  setIsConditionMet: (value: { name: boolean; phoneNum: boolean; uniqueNum: boolean }) => void;
}

const PhoneInput = ({ phoneInputRef, onKeyPress, isConditionMet, setIsConditionMet }: IProps) => {
  const [phoneNum, setPhoneNum] = useState("");

  const handleNameOnChange = (value: string) => {
    setPhoneNum(value);
  };

  useEffect(() => {
    if (phoneNum.length >= 3) {
      if (phoneNum.length === 10) {
        setPhoneNum(phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      } else if (phoneNum.length === 13) {
        setPhoneNum(phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
      }
      const oldPhoneNum = /^01([1|9|])-?([0-9]{3,4})-?([0-9]{4})$/;
      const recentPhoneNum = /^01([0])-?([0-9]{4})-?([0-9]{4})$/;
      if (oldPhoneNum.test(phoneNum) === true || recentPhoneNum.test(phoneNum)) {
        setIsConditionMet({ ...isConditionMet, phoneNum: true });
      } else {
        setIsConditionMet({ ...isConditionMet, phoneNum: false });
      }
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
        onChange={handleNameOnChange}
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
