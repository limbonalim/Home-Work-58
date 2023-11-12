import React from 'react';
import {HTMLMotionProps, motion} from 'framer-motion';
import {ButtonConfig} from '../../type';

interface Props extends React.PropsWithChildren {
  show: boolean;
  onClose: () => void;
  title: string;
  buttons?: ButtonConfig[];
}

interface StyleProps extends HTMLMotionProps<'div'> {
  opacity: number;
  y: number;
  scale: number;
  display: string;
}

interface Variants {
  open: StyleProps;
  closed: StyleProps;
}

const variants: Variants = {
  open: {opacity: 1, y: 0, scale: 1, display: 'block'},
  closed: {opacity: 0, y: -100, scale: 0, display: 'none'},
};

const Modal: React.FC<Props> = ({show, onClose, title, buttons, children}) => {
  let modalBut: React.ReactNode | undefined = buttons?.map((button: ButtonConfig, index: number) => {
    const buttonColor = `btn-${button.type}`;
    let buttonClass = ['btn', buttonColor];

    return (<button
      key={index}
      type="button"
      className={buttonClass.join(' ')}
      onClick={() => button.onClick()}
    >{button.label}</button>);
  });

  const visible: React.CSSProperties = {
    display: 'block'
  };
  if (!show) {
    visible.display = 'none';
  }

  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <>
      <motion.div
        animate={show ? 'open' : 'closed'}
        variants={variants ? variants : {}}
        transition={{ease: 'easeOut', duration: 1}}
      >
        <div
          className="modal-backdrop show"
          style={visible}
        />
        <div
          className="modal show"
          style={visible}
          onClick={() => onClose()}
        >
          <div
            className="modal-dialog"
            onClick={onInnerClick}
          >
            <div className="modal-content">
              <div className="modal-header mb-2">
                <h1 className="modal-title fs-5">{title}</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => onClose()}
                ></button>
              </div>
              <div className="px-3">
                {children}
              </div>
              <div className="modal-footer">
                {modalBut}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;