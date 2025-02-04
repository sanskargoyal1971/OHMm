// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import Exercise from '../Breathing/BreathingLottie';


// const BreathingModel = ({ show, onHide }) => {
//   return (
//     <Modal
//     show={show} // Control modal visibility
//     onHide={onHide} // Hide the modal on close
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//     dialogClassName="modal-dialog-centered"
//   >
//     <Modal.Header closeButton>
//         <Modal.Title>Breathing Exercise</Modal.Title>
//       </Modal.Header >
//     <Modal.Body style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
//       <Exercise />
//     </Modal.Body>
//     <Modal.Footer>
//     <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//     </Modal.Footer>
//     </Modal>
//   );
// };

// export default BreathingModel;

import Exercise from "../Breathing/BreathingLottie"

const BreathingModel = ({ show, onHide }) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-xl font-semibold">Breathing Exercise</h3>
          <button onClick={onHide} className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 flex justify-center items-center min-h-[300px]">
          <Exercise />
        </div>
        <div className="border-t p-4 flex justify-end">
          <button
            onClick={onHide}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default BreathingModel

