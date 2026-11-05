import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react"
import './PostModal.css'
import { addPost } from "../services/postService";
import { type Post } from './BlogGrid'

interface PostModalProps {
    setPostModalOpen: Dispatch<SetStateAction<boolean>>
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export function PostModal({ setPostModalOpen, setPosts}: PostModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus()
        }
    }, [])

    const handlePost = async () => {
        try {
            const response = await addPost({title, content})

            setPosts((prevPosts) => [response, ...prevPosts])
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message)
            }
        }
    }
    return (
        <div className="modal-overlay" onClick={() => setPostModalOpen(false)}>
            <div className="post-modal-container" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2>Create post</h2>
                </div>
                <div className="create-post-container">
                    <input className="post-title" ref={titleRef} placeholder="Title" 
                    onChange={(e) => setTitle(e.target.value)}></input>
                    <textarea className="post-textarea" placeholder="Care to share your thoughts?"
                    onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <button className="post-btn" onClick={() => (handlePost(), setPostModalOpen(false))}>Post</button>
            </div>
        </div>
    )
}
