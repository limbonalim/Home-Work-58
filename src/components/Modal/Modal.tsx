import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<Props> = ({show, onClose, title, children}) => {
  const visible: React.CSSProperties = {
    display: 'none',
  };
  if (show) {
    visible.display = 'block';
  }
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;