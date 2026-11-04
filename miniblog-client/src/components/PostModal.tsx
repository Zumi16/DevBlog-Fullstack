import { useEffect, useRef, type Dispatch, type SetStateAction } from "react"
import './PostModal.css'

interface PostModalProps {
    setPostModalOpen: Dispatch<SetStateAction<boolean>>
}

export function PostModal({ setPostModalOpen }: PostModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus()
        }
    }, [])


    return (
        <div className="modal-overlay" onClick={() => setPostModalOpen(false)}>
            <div className="post-modal-container" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2>Create post</h2>
                </div>
                <div className="create-post-container">
                    <input className="post-title" ref={titleRef} placeholder="Title"></input>
                    <textarea className="post-textarea"  placeholder="Care to share your thoughts?"></textarea>
                </div>
                <button className="post-btn">Post</button>
            </div>
        </div>
    )
}
