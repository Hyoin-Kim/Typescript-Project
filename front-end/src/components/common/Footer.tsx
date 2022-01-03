import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../molecules/Modal";
import { HomeBarIcon } from "../../assets";

interface IProps {
  isJoinButtonDisabled: boolean;
}

const Footer = ({ isJoinButtonDisabled }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModalFunc() {
    setIsOpen(!isOpen);
  }
  return (
    <FooterWrapper>
      {isJoinButtonDisabled ? <CButton onClick={openModalFunc}>다음</CButton> : <Button>다음</Button>}
      <ImageWrapper>
        <img src={HomeBarIcon} alt="" />
      </ImageWrapper>
      {isOpen && isJoinButtonDisabled && <Modal isOpen={isOpen} setIsOpen={setIsOpen} isBlur={true} />}
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

const ImageWrapper = styled.div`
  position: relative;
  & > img {
    position: sticky;
    margin: 20px 0 10px 0;
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
