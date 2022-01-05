import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../atoms/Modal";
import { AllCheckIcon, AllCheckGrayIcon, CheckIcon, CheckGrayIcon } from "../../assets";

interface IProps {
  isNoticeModalOpen: boolean;
  setIsNoticeModalOpen: (value: boolean) => void;
}

const NoticeModal = ({ isNoticeModalOpen, setIsNoticeModalOpen }: IProps): React.ReactElement => {
  const [checkAll, setCheckAll] = useState(false);
  const [isChecked, setIsChecked] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  function handleCheckAll(): void {
    if (!checkAll) {
      setCheckAll(true);
      setIsChecked({
        check1: true,
        check2: true,
        check3: true,
        check4: true,
      });
    }
    if (checkAll) {
      setCheckAll(false);
      setIsChecked({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
      });
    }
  }

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "policy1":
        setIsChecked({
          ...isChecked,
          check1: !isChecked.check1,
        });
        break;
      case "policy2":
        setIsChecked({
          ...isChecked,
          check2: !isChecked.check2,
        });
        break;
      case "policy3":
        setIsChecked({
          ...isChecked,
          check3: !isChecked.check3,
        });
        break;
      case "policy4":
        setIsChecked({
          ...isChecked,
          check4: !isChecked.check4,
        });
        break;
    }
  };

  useEffect(() => {
    if (isChecked.check1 && isChecked.check2 && isChecked.check3 && isChecked.check4) {
      setCheckAll(true);
    } else setCheckAll(false);
  }, [isChecked.check1, isChecked.check2, isChecked.check3, isChecked.check4]);

  return (
    <Modal isOpen={isNoticeModalOpen} setIsOpen={setIsNoticeModalOpen} isBlur={true}>
      <ModalWrapper>
        <AcceptAllCheck>
          <img src={checkAll ? AllCheckIcon : AllCheckGrayIcon} alt="" onClick={handleCheckAll} />
          <div>약관에 모두 동의</div>
        </AcceptAllCheck>
        <AcceptWrapper>
          <AcceptCheck>
            <CheckBox type="checkbox" checked={isChecked.check1} onChange={handleCheck} name="policy1" id="policy1" />
            <Label htmlFor="policy1">
              <ImgWrapper>
                <img src={isChecked.check1 ? CheckIcon : CheckGrayIcon} alt="" />
              </ImgWrapper>
              <div>[필수] 개인정보 이용 동의</div>
            </Label>
          </AcceptCheck>
          <AcceptCheck>
            <CheckBox type="checkbox" checked={isChecked.check2} onChange={handleCheck} name="policy2" id="policy2" />
            <Label htmlFor="policy2">
              <ImgWrapper>
                <img src={isChecked.check2 ? CheckIcon : CheckGrayIcon} alt="" />
              </ImgWrapper>
              <div>[필수] 서비스 이용 약관 동의</div>
            </Label>
          </AcceptCheck>
          <AcceptCheck>
            <CheckBox type="checkbox" checked={isChecked.check3} onChange={handleCheck} name="policy3" id="policy3" />
            <Label htmlFor="policy3">
              <ImgWrapper>
                <img src={isChecked.check3 ? CheckIcon : CheckGrayIcon} alt="" />
              </ImgWrapper>
              <div>[필수] 고유식별정보 처리 동의</div>
            </Label>
          </AcceptCheck>
          <AcceptCheck>
            <CheckBox type="checkbox" checked={isChecked.check4} onChange={handleCheck} name="policy4" id="policy4" />
            <Label htmlFor="policy4">
              <ImgWrapper>
                <img src={isChecked.check4 ? CheckIcon : CheckGrayIcon} alt="" />
              </ImgWrapper>
              <div>[필수] 제3자 정보제공 동의</div>
            </Label>
          </AcceptCheck>
        </AcceptWrapper>
        {checkAll ? <JoinButton>동의하고 간편인증 하기</JoinButton> : <Button>동의하고 간편인증 하기</Button>}
      </ModalWrapper>
    </Modal>
  );
};

export default NoticeModal;

const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 10px 10px 0px 0px;
  border: none;
  background-color: white;
  width: 23.438rem;
  height: 22.625rem;
  z-index: 10;
`;

const AcceptWrapper = styled.div`
  text-align: start;
  margin: 16px 0px 32px 20px;
`;

const AcceptAllCheck = styled.div`
  display: flex;
  border: 1px solid #dde1e6;
  border-radius: 8px;
  width: 335px;
  height: 48px;
  margin-top: 20px;
  align-items: center;
  & > img {
    margin-left: 10px;
    margin-right: 14px;
    cursor: pointer;
  }

  & > div {
    font-size: 20px;
  }
`;

const AcceptCheck = styled.div`
  margin: 20px;
  & > div {
    display: inline-block;
  }
  & > img {
    display: inline-block;
  }
`;

const CheckBox = styled.input`
  display: none;
  margin-right: 16px;
  cursor: pointer;
`;

const JoinButton = styled.button`
  width: 335px;
  height: 52px;
  background-color: #4394f0;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 335px;
  height: 52px;
  background-color: #dde1e6;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  margin-right: 14px;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
`;
