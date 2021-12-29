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

const NameWrapper = styled.div``;
