import React from 'react';
import {ButtonConfig} from '../../type';

interface Props extends React.PropsWithChildren {
  show: boolean;
  onClose: () => void;
  title: string;
  buttons?: ButtonConfig[];
}

const Modal: React.FC<Props> = ({show, onClose, title, buttons, children}) => {
  const visible: React.CSSProperties = {
    display: 'none',
  };
  if (show) {
    visible.display = 'block';
  }

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

  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <>
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
    </>
  );
};

export default Modal;