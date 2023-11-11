import {ReactNode, useState} from 'react';
import Modal from '../components/Modal/Modal';
import Alert from '../components/Alert/Alert';
import {ButtonConfig} from '../type';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const continueFunc = (): void => {
    setShowAlert(true);
  };

  const cancel = () => {
    setShowModal(false);
  };

  const buttons: ButtonConfig[] = [
    {type: 'primary', label: 'Continue', onClick: continueFunc},
    {type: 'danger', label: 'Close', onClick: cancel},
  ];

  const getModal = () => {
    setShowModal(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };
  const getAlert = () => {
    setShowAlert(true);
  };

  let alert: ReactNode | null = null;
  if (showAlert) {
    alert = (
      <Alert
        type="danger"
        onDismiss={closeAlert}
      >This is a warning type alert</Alert>
    );
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={getModal}
      >Show Modal
      </button>
      <button
        type="button"
        className="btn btn-secondary m-2"
        onClick={getAlert}
      >Show Alert
      </button>
      <Modal
        show={showModal}
        onClose={cancel}
        buttons={buttons}
        title="Some kinda modal title"
      >
        <p>This is some modal content... If you press continue button Alert will open</p>
      </Modal>
      {alert}
      <Alert type="warning" clickDismissable>This warning will close when you click</Alert>
    </>
  );
};

export default App;
