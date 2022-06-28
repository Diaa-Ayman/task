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
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 28%;
  max-height: 80vh;
  overflow-y: auto;
  top: 3.5rem;
  left: 63%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slide_Down} 300ms ease-out forwards;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ModalContent = styled.div``;

export { ModalContainer, BackdropContainer, ModalContent };
