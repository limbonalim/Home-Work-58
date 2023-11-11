import {ReactNode, useState} from 'react';
import Modal from '../components/Modal/Modal';
import Alert from '../components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const cancel = () => {
    setShowModal(false);
  };
  const getModal = () => {
    setShowModal(true);
  };

  const closeAlert = () => {
    setShowAlert(false)
  };
  const getAlert = () => {
    setShowAlert(true);
  };

  let alert: ReactNode | null = null;
  if (showAlert) {
     alert = (<Alert
      type="warning"
      onDismiss={closeAlert}
    >This is a warning type alert</Alert>)
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={getModal}
      >Show Modal
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={getAlert}
      >Show Alert
      </button>
      <Modal
        show={showModal}
        onClose={cancel}
        title="Some kinda modal title"
      >
        <p>This is modal content!</p>
      </Modal>

      {alert}
    </>
  );
};

export default App;
