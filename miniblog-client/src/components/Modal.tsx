import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react'
import './Modal.css'

interface ModalProps {
    setSignUpOpen: Dispatch<SetStateAction<boolean>>;
    setUserName: Dispatch<SetStateAction<string[]>>;
}

export function Modal({ setSignUpOpen, setUserName}: ModalProps) {
    const usernameRef = useRef<HTMLInputElement>(null)
    return (
        <div className="modal-overlay" onClick={() => setSignUpOpen(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={() => setSignUpOpen(false)}>Close</button>
                <div className='signup-container'>
                    <h2>Sign Up</h2>
                    <div>
                        <p>Username</p>
                        <input type='text' placeholder='enter your username' ref={usernameRef}></input>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type='password' placeholder='enter your password'></input>
                    </div>
                    <button onClick={() => (setUserName(previousNames => [...previousNames, usernameRef.current?.value ?? ""]), setSignUpOpen(false))}>Create Account</button>
                    <p>Already have an account?</p>
                </div>
            </div>
        </div>
    )
}