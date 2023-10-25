import React from 'react'
import Modal from 'react-modal'; // Import the react-modal library

Modal.setAppElement('#root');

function CategoryModal({modalIsOpen,afterOpenModal,closeModal,customStyles}) {
  return (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
    </Modal>
  )
}

export default CategoryModal
