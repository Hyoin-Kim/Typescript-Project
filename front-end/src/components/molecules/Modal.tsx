import React from "react";
import styled from "styled-components";
import check from "../../assets/check_color.svg";
import checkGray from "../../assets/check.svg";

export interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isBlur: boolean; //모달창이 켜졌을때 뒤에 회색으로 처리하는지 (true면 회색처리됨)
}

const Modal = ({ ...props }: IProps): React.ReactElement => {
  const { isOpen, setIsOpen, isBlur } = props;
  const closeHandler = (): void => {
    setIsOpen(false);
  };

  return (
    <SModal>
      {isOpen && (
        <>
          <Background onClick={closeHandler} isBlur={isBlur}></Background>
          <ModalWrapper>
            <input type="checkbox"></input>
            약관에 모두 동의
            <AcceptCheck>
              <img src={checkGray} alt="" />
              <div>[필수] 개인정보 이용 동의</div>
            </AcceptCheck>
            <AcceptCheck>
              <img src={checkGray} alt="" />
              <div>[필수] 서비스 이용 약관 동의</div>
            </AcceptCheck>
            <AcceptCheck>
              <img src={checkGray} alt="" />
              <div>[필수] 고유식별정보 처리 동의</div>
            </AcceptCheck>
            <AcceptCheck>
              <img src={checkGray} alt="" />
              <div>[필수] 제3자 정보제공 동의</div>
            </AcceptCheck>
          </ModalWrapper>
        </>
      )}
    </SModal>
  );
};

export default Modal;

export const SModal = styled.div`
  position: absolute;
  z-index: 100;
`;

export const Background = styled.div<{ isBlur?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.isBlur ? 0.3 : undefined)};
  background-color: ${(props) => (props.isBlur ? "rgba(0,0,0,0.5)" : undefined)};
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 10px;
  border: none;
  background-color: white;
  width: 375px;
  height: 362px;
  z-index: 9999;
  overflow: visible;
  box-sizing: border-box;
`;

const AcceptCheck = styled.div`
  & > div {
    display: inline-block;
  }
  & > img {
    display: inline-block;
  }
`;
