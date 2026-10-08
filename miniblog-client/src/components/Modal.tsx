import './Modal.css'

interface ModalProps {
    setSignUpOpen: (open: boolean) => void
}

export function Modal({setSignUpOpen}: ModalProps) {
    return (
        <div className="modal-overlay" onClick={() => setSignUpOpen(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={() => setSignUpOpen(false)}>Close</button>
                <h1>This is a modal</h1>
            </div>
        </div>
    )
}