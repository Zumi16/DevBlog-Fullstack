import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import './BlogGrid.css'
import { Modal } from './Modal'
import { getPost } from '../services/postService.ts' // Match the service filename's lowercase casing.
import { PostModal } from './PostModal.tsx'

interface BlogGridProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    created_at?: string;
}

export function BlogGrid({ modalOpen, setModalOpen }: BlogGridProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [postModalOpen, setPostModalOpen] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return !!localStorage.getItem('token')
    })

    const fetchPost = async () => {
        console.log('fetchPost called');

        try {
            const data = await getPost();

            if (data.token) {
                localStorage.setItem('token', data.token)
            }

            setPosts(Array.isArray(data) ? data : []);
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message)
            }
        }

    }

    // **** LILIPAT SA HEADER WHEN LOGGED IN SHOW LOGOUT
    // THEN SHOW SIGNUP/LOGIN WHEN LOGGED OUT ****
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchPost();
    }, [isLoggedIn])

    console.log(posts)
    return (
        <div className="blog-grid">
            <div>
            </div>
            <div className='middle-container'>
                {isLoggedIn &&
                    <div className='create-post'>
                        <div className='avatar'>1x1</div>
                        <input className='post-input' onClick={() => setPostModalOpen(true)} placeholder="Care to share your thoughts?" readOnly></input>
                        <button className='add-image-btn'>icon</button>
                        <button onClick={() => handleLogout()}>Logout</button>
                    </div>
                }
                {/* Posts here */}
                <div className='post-container'>
                    {posts.map((post) => (
                        <article key={post.id} className='article-container'>
                            <div className='avatar-author'>
                                <p>Image</p>
                                <p></p>
                            </div>
                            <div className='title-content'>
                                <p>{post.content}</p>
                                <p>{post.created_at}</p>
                            </div>
                        </article>
                    ))}
                </div>
                {postModalOpen && <PostModal setPostModalOpen={setPostModalOpen}  setPosts={setPosts} />}
            </div>
            <div className='right-container'>
                <div className='recent-articles'>
                    <h5>Article 1</h5>
                    <h5>Article 2</h5>
                    <h5>Article 3</h5>
                </div>
            </div>
            {modalOpen && (
                <Modal
                    setModalOpen={setModalOpen}
                    onLoginSuccess={() => {
                        setIsLoggedIn(true);
                        fetchPost();
                    }}
                />
            )
            }
        </div>
    )
}
