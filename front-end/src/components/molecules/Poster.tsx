import React from "react";
import styled from "styled-components";
import SecurityImg from "../../assets/security.svg";

const Poster = () => {
  return (
    <>
      <InquireButton>
        <button>문의하기</button>
      </InquireButton>
      <PosterWrapper>
        <div>정확한 환급액 조회를 위해</div>
        <div> 아래 정보가 필요해요!</div>
      </PosterWrapper>
      <Notice>
        <p>고객님의 정보는 안전하게 보호되니 안심하고 입력하세요!</p>
        <img src={SecurityImg} alt=""></img>
      </Notice>
    </>
  );
};

export default Poster;

const PosterWrapper = styled.div`
  margin: 0px 24px 0px 24px;

  & > div {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  }
`;

const InquireButton = styled.div`
  height: 56px;
  width: 100%;
  button {
    border: none;
    height: 28px;
    width: 57px;
    background-color: #f8f8f8;
    border-radius: 4px;
    font-size: 12px;
    float: right;
    margin: 14px 16px 14px 0px;
  }
`;

const Notice = styled.nav`
  margin: 20px 24px 0px 24px;
  align-content: space-between;
  display: flex;
  width: 327px;
  height: 68px;
  background-color: #f8f8f8;
  border-radius: 8px;

  & > p {
    display: flex;
    align-self: center;
    width: 203px;
    margin: 12px 38px 12px 15px;
  }

  & > img {
    display: flex;
    align-self: center;
    width: 48px;
    height: 48px;
  }
`;
