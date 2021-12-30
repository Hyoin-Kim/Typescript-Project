import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "../atoms/StyledInput";

const IdentifyInput = () => {
  const [isConditionMet, setIsConditionMet] = useState({
    uniqueNum: false,
  });
  const [uniqueNum, setUniqueNum] = useState("");
  const handleNameOnChange = (value: string) => {
    setUniqueNum(value);
    console.log(value);
  };

  useEffect(() => {
    const nameCheck = /^[0-9]+$/;
    if (nameCheck.test(uniqueNum)) {
      setIsConditionMet({ ...isConditionMet, uniqueNum: true });
    } else {
      setIsConditionMet({ ...isConditionMet, uniqueNum: false });
    }
  }, [uniqueNum]);

  return (
    <IdentifyWrapper>
      <p>주민등록번호</p>
      <StyledInput
        width="124px"
        errorMsg="올바른 주민등록번호를 입력하세요."
        onChange={handleNameOnChange}
        isConditionMet={isConditionMet.uniqueNum}
      />{" "}
      -{" "}
      <StyledInput
        width="124px"
        errorMsg="올바른 주민등록번호를 입력하세요."
        onChange={handleNameOnChange}
        isConditionMet={isConditionMet.uniqueNum}
      />
    </IdentifyWrapper>
  );
};

export default IdentifyInput;

const IdentifyWrapper = styled.div`
  margin: 0px 24px 32px 24px;
  & > div {
    display: inline-block;
    margin: 15px;
  }
`;
