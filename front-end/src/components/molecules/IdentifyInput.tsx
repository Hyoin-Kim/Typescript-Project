import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledInput from "../atoms/StyledInput";
import { IJoinInfo } from "../../types/info.type";

interface IProps {
  birthInputRef?: React.RefObject<HTMLInputElement>;
  uniqueInputRef?: React.RefObject<HTMLInputElement>;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  birthNum: string;
  setBirthNum: (value: string) => void;
  isConditionMet: IJoinInfo;
  setIsConditionMet: (value: IJoinInfo) => void;
}

const IdentifyInput = ({
  birthInputRef,
  uniqueInputRef,
  onKeyPress,
  birthNum,
  setBirthNum,
  isConditionMet,
  setIsConditionMet,
}: IProps) => {
  const [isBirthFocusOn, setIsBirthFocusOn] = useState(false);
  const [isUniqueFocusOn, setIsUniqueFocusOn] = useState(false);
  const [uniqueNum, setUniqueNum] = useState("");
  const handleBirthOnChange = (value: string) => {
    setBirthNum(value);
    setIsBirthFocusOn(true);
    console.log(birthNum);
  };

  const handleUniqueOnChange = (value: string) => {
    setUniqueNum(value);
    setIsUniqueFocusOn(false);
  };

  useEffect(() => {
    const nameCheck = /^[0-9]+$/;
    if (nameCheck.test(birthNum)) {
      setIsConditionMet({ ...isConditionMet, birthNum: true });
    } else {
      setIsConditionMet({ ...isConditionMet, birthNum: false });
    }
  }, [birthNum]);

  useEffect(() => {
    const nameCheck = /^[0-9]+$/;
    if (nameCheck.test(uniqueNum)) {
      const genderNum = uniqueNum.slice(0, 1);
      if (genderNum >= "1" && genderNum <= "4") {
        const checkArr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
        const birthArr = birthNum.split("").map(function (item) {
          return parseInt(item);
        });
        const uniqueArr = uniqueNum.split("").map(function (item) {
          return parseInt(item);
        });
        const combineArr = birthArr.concat(uniqueArr);
        for (let i = 0; i < combineArr.length - 1; i++) {
          combineArr[i] = combineArr[i] * checkArr[i];
        }
        const uniqueLastNum = combineArr[combineArr.length - 1];
        let sum = 0;
        for (let i = 0; i < combineArr.length - 1; i++) {
          sum += combineArr[i];
        }
        sum = sum % 11;
        sum = 11 - sum;
        if (sum > 9) {
          sum = sum % 10;
        }
        if (sum === uniqueLastNum) {
          setIsConditionMet({ ...isConditionMet, uniqueNum: true });
        } else {
          setIsConditionMet({ ...isConditionMet, uniqueNum: false });
        }
      } else {
        setIsConditionMet({ ...isConditionMet, uniqueNum: false });
      }
    } else {
      setIsConditionMet({ ...isConditionMet, uniqueNum: false });
    }
  }, [uniqueNum]);

  return (
    <IdentifyWrapper>
      <p>주민등록번호</p>
      <InputWrapper>
        <StyledInput
          width="145px"
          onChange={handleBirthOnChange}
          isConditionMet={isConditionMet.birthNum}
          maxByte={6}
          onKeyPress={onKeyPress}
          inputRef={birthInputRef}
        />{" "}
        -{" "}
        <StyledInput
          width="145px"
          onChange={handleUniqueOnChange}
          isPw={true}
          isConditionMet={isConditionMet.uniqueNum}
          maxByte={7}
          inputRef={uniqueInputRef}
        />
      </InputWrapper>
      {(isBirthFocusOn || isUniqueFocusOn) &&
      (!isConditionMet.birthNum || !isConditionMet.uniqueNum) &&
      (uniqueNum !== "" || birthNum !== "") ? (
        <div>
          <ErrorMsg>올바른 주민등록번호를 입력하세요.</ErrorMsg>
        </div>
      ) : null}
    </IdentifyWrapper>
  );
};

export default IdentifyInput;

const IdentifyWrapper = styled.div`
  margin: 0px 24px 32px 24px;
`;

const InputWrapper = styled.div`
  display: inline-flex;
`;

const ErrorMsg = styled.div`
  color: #e85440;
  font-size: 14px;
  line-height: 140%;
`;
