import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "../atoms/StyledInput";

const NameInput = (): React.ReactElement => {
  const [isConditionMet, setIsConditionMet] = useState({
    name: false,
  });
  const [name, setName] = useState("");
  const handleNameOnChange = (value: string) => {
    setName(value);
    console.log(value);
  };

  useEffect(() => {
    const nameCheck = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    if (nameCheck.test(name)) {
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
        onChange={handleNameOnChange}
        isConditionMet={isConditionMet.name}
      />
    </NameWrapper>
  );
};

export default NameInput;

const NameWrapper = styled.div`
  margin: 26px 24px 32px 24px;
`;
