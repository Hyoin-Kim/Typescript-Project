import React from "react";
import UserInfoTemplate from "../components/templates/UserInfoTemplate";
import styled from "styled-components";

const Main = () => {
  return (
    <StyledRoot>
      <UserInfoTemplate />
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
`;
