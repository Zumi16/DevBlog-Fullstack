import type { Dispatch, SetStateAction } from 'react';
import './BlogGrid.css'
import { Modal

 } from './Modal';
interface BlogGridProps {
    signUpOpen: boolean;
    setSignUpOpen: Dispatch<SetStateAction<boolean>>;
    setUserName: Dispatch<SetStateAction<string[]>>;
}

export function BlogGrid({signUpOpen, setSignUpOpen, setUserName}: BlogGridProps) {
    return (
        <div className="blog-grid">
            <div>

            </div>
            <div className='middle-container'>
                <article className='article-container'>
                    <div className='avatar-author'>
                        <p>Image</p>
                        <p>Username</p>
                    </div>
                    <div className='title-content'>
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </article>
                <article className='article-container'>
                    <div className='avatar-author'>
                        <p>Image</p>
                        <p>Username</p>
                    </div>
                    <div className='title-content'>
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </article>
                <article className='article-container'>
                    <div className='avatar-author'>
                        <p>Image</p>
                        <p>Username</p>
                    </div>
                    <div className='title-content'>
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </article>
                                <article className='article-container'>
                    <div className='avatar-author'>
                        <p>Image</p>
                        <p>Username</p>
                    </div>
                    <div className='title-content'>
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </article>
                                <article className='article-container'>
                    <div className='avatar-author'>
                        <p>Image</p>
                        <p>Username</p>
                    </div>
                    <div className='title-content'>
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </article>
                                <article className='article-container'>
                    <div className='avatar-author'>
                        <p>Image</p>
                        <p>Username</p>
                    </div>
                    <div className='title-content'>
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </article>
            </div>
            <div className='right-container'>
                <div className='recent-articles'>
                    <h5>Article 1</h5>
                    <h5>Article 2</h5>
                    <h5>Article 3</h5>
                </div>
            </div>
            { signUpOpen && (
                <Modal 
                    setSignUpOpen={setSignUpOpen}
                    setUserName={setUserName}
                />
            )
            }
        </div>
    )
}