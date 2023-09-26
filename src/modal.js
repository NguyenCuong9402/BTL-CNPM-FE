import React from 'react';
import styled from 'styled-components';

// Styled components
const ModalOverlay = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const Modal = ({ isOpen, message, onClose }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <p>{message}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;