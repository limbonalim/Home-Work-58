import {useState} from 'react';
import Modal from '../components/Modal/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => {
    setShowModal(false);
  };

  const getModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={getModal}
      >Show Modal
      </button>
      <Modal
        show={showModal}
        onClose={cancel}
        title="Some kinda modal title"
      >
        <p>This is modal content!</p>
      </Modal>
    </>
  );
};

export default App;
