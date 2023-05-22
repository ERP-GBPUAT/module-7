import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PunishmentModal({setShowPunishmentModal}) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Write punishment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <textarea style={{
            width:"100%",
            height:"100%"
          }}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowPunishmentModal(false)}>Close</Button>
          <Button variant="primary" onClick={()=>setShowPunishmentModal(false)}>Approve</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default PunishmentModal;