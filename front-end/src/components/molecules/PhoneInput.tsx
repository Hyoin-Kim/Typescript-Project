import React from "react";
import styled from "styled-components";

const PhoneInput = () => {
  return (
    <PhoneWrapper>
      <p>휴대폰 번호</p>
      <input type="text"></input>
    </PhoneWrapper>
  );
};

export default PhoneInput;

const PhoneWrapper = styled.div`
  margin: 0px 24px 32px 24px;

  & > input {
    width: 300px;
  }
`;
