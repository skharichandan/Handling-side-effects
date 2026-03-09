import { useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ openIt, children}) {
  const dialog = useRef();

  

  return createPortal(
    <dialog className="modal" ref={dialog} open={openIt}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
