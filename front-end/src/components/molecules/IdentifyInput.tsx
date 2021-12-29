import React from "react";
import styled from "styled-components";

const IdentifyInput = () => {
  return (
    <IdentifyWrapper>
      <p>주민등록번호</p>
      <input type="text"></input> <div>-</div> <input type="text"></input>
    </IdentifyWrapper>
  );
};

export default IdentifyInput;

const IdentifyWrapper = styled.div`
  margin: 0px 24px 32px 24px;

  & > input {
    width: 124px;
  }
  & > div {
    display: inline-block;
    margin: 15px;
  }
`;
