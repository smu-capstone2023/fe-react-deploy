//madal page 만들어서 './modal'로 연결하기

import React from 'react';
import { ModalButton } from './SignupStyles.js';
import {} from './ModalStyles.css';

//showModal 변수는 부모 컴포넌트로부터 받아옴
//onClose는 모달을 닫아줌

function Modal({ showModal, onClose }) {
  if (!showModal) {
    return null;
  }

  return (
    <div>
      <h2>학과 인증</h2>
      <p>학과 인증을 위해 아래 버튼을 클릭하세요.</p>
      <button onClick={onClose}>인증하러가기</button>
    </div>
  );
}

export default Modal;