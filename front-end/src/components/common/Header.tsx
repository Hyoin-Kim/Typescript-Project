import styled from "styled-components";
import { BatteryIcon } from "../../assets";

const Header = () => {
  const now = new Date(); //현재 시간 표현
  const currHour = now.getHours();
  const currMinutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

  return (
    <HeaderWrapper>
      <div>
        {currHour}:{currMinutes}
      </div>
      <img src={BatteryIcon} alt="" />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    margin: 12px 0px 11px 30px;
  }

  & > img {
    margin-right: 14px;
  }
`;
