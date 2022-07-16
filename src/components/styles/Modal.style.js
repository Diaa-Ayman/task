import styled, { keyframes } from 'styled-components';

const slide_Down = keyframes`
   from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const BackdropContainer = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

const ModalContainer = styled.div`
  position: fixed;
  width: ${({width}) => width};
  max-height: 80vh;
  overflow-y: auto;


  top: ${({top}) => top};
  left: ${({left}) => left};

  background-color: white;
  padding: ${({padding}) => padding};
  box-shadow: ${({boxShadow}) => boxShadow};
  z-index: 30;
  animation: ${slide_Down} 300ms ease-out forwards;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ModalContent = styled.div``;

export { ModalContainer, BackdropContainer, ModalContent };
