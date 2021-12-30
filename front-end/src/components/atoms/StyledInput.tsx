import React, { useState } from "react";
import styled, { css } from "styled-components";
interface IProps {
  width: string;
  name?: string;
  isPw?: boolean;
  errorMsg?: string;
  isConditionMet: boolean;
  onChange?: (value: string) => void;
}

const StyledInput = ({ width, name, isPw, errorMsg, isConditionMet, onChange }: IProps) => {
  const [isFocusOn, setIsFocusOn] = useState(false);
  const [value, setValue] = useState("");

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setValue(e.target.value);
  }
  function handleOnFocus() {
    setIsFocusOn(true);
  }

  return (
    <StyledInputWrpper>
      <InputContainer width={width} condition={!isFocusOn ? 0 : (isFocusOn && isConditionMet) || value == "" ? 1 : -1}>
        <Input
          width={width}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          type={isPw ? "password" : "text"}
          autoComplete={isPw ? "false" : "true"}
          name={name}
        />
      </InputContainer>
      {isFocusOn && !isConditionMet && value !== "" && <ErrorMsg>{errorMsg}</ErrorMsg>}
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
  text-align: left;
  text-align: left;
  color: red;
`;
