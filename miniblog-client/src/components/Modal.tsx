import type { Dispatch, SetStateAction } from 'react';
import { useRef, useState } from 'react'
import './Modal.css'

interface ModalProps {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    signUpOpen: boolean;
    setSignUpOpen: Dispatch<SetStateAction<boolean>>
}

export function Modal({ setModalOpen, signUpOpen, setSignUpOpen }: ModalProps) {
    const usernameRef = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="modal-overlay" onClick={() => (setModalOpen(false), setSignUpOpen(false))}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={() => (setModalOpen(false), setSignUpOpen(false))}>Close</button>
                {/* Either SignUp or Login */}
                {!signUpOpen ? 
                <div className='signup-container'>
                    <h2>Sign Up</h2>
                    <div>
                        <p>Username</p>
                        <input type='text' placeholder='enter your username' value={username} ref={usernameRef}
                        onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type='password' placeholder='enter your password' value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button onClick={() =>  (setSignUpOpen(true), console.log(username, password))}>Create Account</button>
                    <button onClick={() => setSignUpOpen(true)}>Already have an account?</button>
                </div> 
                : <div className='login-container'>
                    <h2>Log in</h2>
                    <div>
                        <p>Username</p>
                        <input type='text' placeholder='enter your username' ref={usernameRef}></input>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type='password' placeholder='enter your password'></input>
                    </div>
                    <button onClick={() => setModalOpen(false)}>Login</button>
                    <button onClick={() => setSignUpOpen(false)}>Create an account?</button>
                </div>
                }
            </div>
        </div>
    )
}