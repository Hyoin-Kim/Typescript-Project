/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styled, { css } from "styled-components";
interface IProps {
  width: string;
  isPw?: boolean;
  errorMsg?: string;
  spaceMsg?: string;
  tip?: string;
  message?: string;
  maxByte?: number;
  value?: string;
  isConditionMet: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = ({
  width,
  isPw,
  errorMsg,
  spaceMsg,
  tip,
  message,
  maxByte,
  value,
  isConditionMet,
  onChange,
  onKeyPress,
  inputRef,
}: IProps): React.ReactElement => {
  const [isFocusOn, setIsFocusOn] = useState(false);
  const [isInput, setIsInput] = useState("");

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setIsInput(e.target.value);
  }
  function handleOnFocus() {
    setIsFocusOn(true);
  }

  return (
    <StyledInputWrpper>
      <InputContainer
        width={width}
        condition={!isFocusOn ? 0 : (isFocusOn && isConditionMet) || isInput == "" ? 1 : -1}>
        <Input
          width={width}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onKeyPress={onKeyPress}
          type={isPw ? "password" : "text"}
          autoComplete={isPw ? "false" : "true"}
          maxLength={maxByte}
          ref={inputRef}
          value={value}
        />
      </InputContainer>
      {isFocusOn && !isConditionMet && isInput !== "" && <ErrorMsg>{errorMsg}</ErrorMsg>}
      {(isFocusOn && isConditionMet) || isInput == "" ? (
        <TipWrapper>
          <Tip>{tip}</Tip> <p>{message}</p>
        </TipWrapper>
      ) : null}
      {/* {isInput == "" ? <ErrorMsg>{spaceMsg}</ErrorMsg> : null} */}
    </StyledInputWrpper>
  );
};

export default StyledInput;

const StyledInputWrpper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div<{ width: string; condition: number }>`
  /* condition 
  0 : 기본상태
  -1 : 조건이 올바르지않을때
  1 : 조건이 올바를때   */
  ${(props) =>
    props.condition == 0
      ? css`
          border: none;
          border-bottom: 1px solid #e6e6e6;
        `
      : props.condition == -1
      ? css`
          border: none;
          border-bottom: 2px solid red;
        `
      : css`
          border: none;
          border-bottom: 2px solid #848484;
        `};
  display: flex;
  align-items: center;

  width: ${(props) => props.width};
`;

const Input = styled.input<{ width: string }>`
  padding: 5px;
  border: none;
  width: ${(props) => props.width};
  :focus {
    outline: none;
  }
`;

const ErrorMsg = styled.div`
  color: #e85440;
  font-size: 14px;
  line-height: 140%;
`;

const Tip = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  color: #4394f0;
  margin-right: 5px;
`;

const TipWrapper = styled.div`
  display: flex;
`;
