import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../molecules/Modal";
import HomeBarIcon from "../../assets/homeBar.svg";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModalFunc() {
    setIsOpen(!isOpen);
  }
  return (
    <FooterWrapper>
      <Button onClick={openModalFunc}>다음</Button>
      <img src={HomeBarIcon} alt=""></img>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} isBlur={true} />}
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  text-align: -webkit-center;
`;

const Button = styled.button`
  width: 327px;
  height: 52px;
  background-color: #dde1e6;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
