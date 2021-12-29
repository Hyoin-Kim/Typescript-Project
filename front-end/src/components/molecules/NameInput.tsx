import React from "react";
import styled from "styled-components";

const NameInput = () => {
  return (
    <NameWrapper>
      <p>이름</p>
      <input type="text"></input>
    </NameWrapper>
  );
};

export default NameInput;

const NameWrapper = styled.div`
  margin: 26px 24px 32px 24px;

  & > input {
    width: 300px;
  }
`;
