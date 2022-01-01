import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "../atoms/StyledInput";

interface IProps {
  isConditionMet: {
    name: boolean;
    phoneNum: boolean;
    uniqueNum: boolean;
  };
  setIsConditionMet: (value: { name: boolean; phoneNum: boolean; uniqueNum: boolean }) => void;
}

const PhoneInput = ({ isConditionMet, setIsConditionMet }: IProps) => {
  const [phoneNum, setPhoneNum] = useState("");

  const handleNameOnChange = (value: any) => {
    setPhoneNum(value);
    console.log("숫자", value);
  };

  useEffect(() => {
    console.log(phoneNum.length);
    if (phoneNum.length === 10) {
      setPhoneNum(phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      setIsConditionMet({ ...isConditionMet, phoneNum: true });
    } else if (phoneNum.length === 13) {
      setPhoneNum(phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
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
        onChange={handleNameOnChange}
        isConditionMet={isConditionMet.phoneNum}
        maxByte={13}
        value={phoneNum}
      />
    </PhoneWrapper>
  );
};

export default PhoneInput;

const PhoneWrapper = styled.div`
  margin: 0px 24px 32px 24px;
`;
