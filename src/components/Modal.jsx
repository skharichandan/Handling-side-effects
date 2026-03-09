import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ openIt, children}) {
  const dialog = useRef();

  useEffect(() => {
    if(openIt) {
    dialog.current.showModal();
  } else {
    dialog.current.close();
  }
  }, [openIt]);
  
  return createPortal(
    <dialog className="modal" ref={dialog} >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
