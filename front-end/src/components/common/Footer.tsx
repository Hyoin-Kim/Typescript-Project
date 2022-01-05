import { useState } from "react";
import styled from "styled-components";
import NoticeModal from "../molecules/NoticeModal";
import { HomeBarIcon } from "../../assets";

interface IProps {
  isJoinButtonDisabled: boolean;
}

const Footer = ({ isJoinButtonDisabled }: IProps) => {
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  function openModalFunc() {
    setIsNoticeModalOpen(!isNoticeModalOpen);
  }
  return (
    <FooterWrapper>
      <ButtonWrapper>
        {isJoinButtonDisabled ? <CButton onClick={openModalFunc}>다음</CButton> : <Button>다음</Button>}
      </ButtonWrapper>
      <ImageWrapper>
        <img src={HomeBarIcon} alt="" />
      </ImageWrapper>
      <NoticeModal isNoticeModalOpen={isNoticeModalOpen} setIsNoticeModalOpen={setIsNoticeModalOpen} />
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
  text-align: -webkit-center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 92px;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  & > img {
    position: sticky;
    margin: 20px 0 26px 0;
    z-index: 1000;
  }
`;

const Button = styled.button`
  width: 327px;
  height: 52px;
  background-color: #dde1e6;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 16px;
`;

const CButton = styled.button`
  width: 327px;
  height: 52px;
  background-color: #4394f0;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
