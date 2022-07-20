import ReactDOM from 'react-dom';
import { VscClose } from 'react-icons/vsc';

import styles from '../styles/ModalPortal.module.scss';

const ModalPortal = ({children, isOpen, onClose}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <article className={styles.wrapper}>
      <div
        onClick={handleModalContainerClick}
        className="ModalContainer">
          <button onClick={onClose}>
            <VscClose />
          </button>
        {children}
        </div>
    </article>,
    document.getElementById('modal-root')
  );
}

export default ModalPortal;