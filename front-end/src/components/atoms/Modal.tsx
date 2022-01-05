import styled from "styled-components";

interface IProps {
  children: React.ReactElement;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isBlur: boolean; //모달창이 켜졌을때 뒤에 회색으로 처리하는지 (true면 회색처리됨)
}

function Modal({ ...props }: IProps): React.ReactElement {
  const { children, isOpen, setIsOpen, isBlur } = props;
  const closeHandler = (): void => {
    setIsOpen(false);
  };

  return (
    <SModal>
      {isOpen && (
        <>
          <Background onClick={closeHandler} isBlur={isBlur}></Background>
          <div>{children}</div>
        </>
      )}
    </SModal>
  );
}

export default Modal;

const SModal = styled.div`
  z-index: 10;
`;

const Background = styled.div<{ isBlur?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.isBlur ? 0.5 : undefined)};
  background-color: ${(props) => (props.isBlur ? "#000000" : undefined)};
`;
