import React, {useState} from 'react';

interface Props extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  clickDismissable?: boolean;
}

const Alert: React.FC<Props> = ({type, clickDismissable = false, onDismiss, children}) => {
  const [show, setShow] = useState<boolean>(true);
  const alertColor: string = `alert-${type}`;
  const className: string[] = ['alert', alertColor];

  let closeButton: React.ReactNode | null = (
    <button
      type="button"
      className="btn-close ms-auto"
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={() => onDismiss ? onDismiss() : undefined}
    ></button>);

  const closeAlert = () => {
    if (clickDismissable) {
      setShow(false);
    }
  };

  if (!onDismiss || clickDismissable) {
    closeButton = null;
  }
  return (
    <div
      className={className.join(' ')}
      role="alert"
      onClick={() => closeAlert()}
      style={{display: show ? 'block' : 'none'}}
    >
      <div className="d-flex">
        {children}
        {closeButton}
      </div>
    </div>
  );
};

export default Alert;