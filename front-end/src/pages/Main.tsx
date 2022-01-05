import styled from "styled-components";
import UserInfoTemplate from "../components/templates/UserInfoTemplate";

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
