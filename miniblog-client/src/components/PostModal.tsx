import type { Dispatch, SetStateAction } from "react"

interface PostModalProps {
    setPostModalOpen: Dispatch<SetStateAction<boolean>>
}

export function PostModal({ setPostModalOpen }: PostModalProps) {
    return (
        <div className="modal-overlay" onClick={() => setPostModalOpen(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                Modal
            </div>
        </div>
    )
}
