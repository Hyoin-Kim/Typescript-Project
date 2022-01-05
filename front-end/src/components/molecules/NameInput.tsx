import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "../atoms/StyledInput";
import { IJoinInfo } from "../../types/info.type";

interface IProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isConditionMet: IJoinInfo;
  setIsConditionMet: (value: IJoinInfo) => void;
}

const NameInput = ({ inputRef, onKeyPress, isConditionMet, setIsConditionMet }: IProps) => {
  const [name, setName] = useState("");
  const handleNameOnChange = (value: string) => {
    setName(value);
  };

  //이름 입력 조건
  useEffect(() => {
    const nameCheck = /^[가-힣|a-z|A-Z|\s]+$/;
    const nameSpace = /^[^\s|\s$]/;
    //문자열이 정규표현식과 매칭되는지 여부
    if (nameCheck.test(name) && nameSpace.test(name)) {
      setIsConditionMet({ ...isConditionMet, name: true });
    } else {
      setIsConditionMet({ ...isConditionMet, name: false });
    }
  }, [name]);

  return (
    <NameWrapper>
      <p>이름</p>
      <StyledInput
        width="300px"
        errorMsg="한글과 영문만 가능합니다."
        message="닉네임이 아닌 실명인지 확인해주세요."
        tip="TIP"
        onChange={handleNameOnChange}
        isConditionMet={isConditionMet.name}
        inputRef={inputRef}
        onKeyPress={onKeyPress}
        maxByte={50}
      />
    </NameWrapper>
  );
};

export default NameInput;

const NameWrapper = styled.div`
  margin: 26px 24px 32px 24px;
`;
