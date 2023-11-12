import React, {useState} from 'react';
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
      <Alert
        type="warning"
        showWindow={showAlert}
        clickDismissable={closeAlert}
      >This warning will close when you click</Alert>
      <Modal
        show={showModal}
        onClose={cancel}
        buttons={buttons}
        title="Some kinda modal title"
      >
        <p>This is some modal content... If you press continue button Alert will open</p>
      </Modal>
    </>
  );
};

export default App;
