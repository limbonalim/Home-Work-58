import React from 'react';

interface Props extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
  const className: string[] = ['alert', 'd-flex'];
  const alertColor: string = `alert-${type}`;
  className.push(alertColor);
  let closeButton: React.ReactNode | null = (
    <button
      type="button"
      className="btn-close ms-auto"
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={() => onDismiss ? onDismiss() : undefined}
    ></button>);
  if (!onDismiss) {
    closeButton = null;
  }
  return (
    <div
      className={className.join(' ')}
      role="alert"
    >
      {children}
      {closeButton}
    </div>
  );
};

export default Alert;