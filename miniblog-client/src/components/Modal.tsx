import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react';
import './Modal.css';
import { registerUser, loginUser } from '../services/authService.ts'

interface ModalProps {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    onLoginSuccess?: () => void;
}

export function Modal({ setModalOpen, onLoginSuccess }: ModalProps) {
    const usernameRef = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [error, setError] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isLogin) {
            try {
                const response = await loginUser({ username, password })

                console.log('Registered Successfully', response)

                if (response.token) {
                    localStorage.setItem('token', response.token)
                    setModalOpen(false)
                }

                if (onLoginSuccess) {
                    onLoginSuccess();
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)

                    console.log(error)
                }
            }
        } else {
            try {
                const response = await registerUser({ username, password })

                console.log('Login Successfully', response)
                setModalOpen(false)

                if (response.token) {
                    localStorage.setItem('token', response.token)
                }

                if (onLoginSuccess) {
                    onLoginSuccess();
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)

                    console.log(error)
                }
            }
        }

    }

    useEffect(() => {
        const timer = setTimeout(() => setError(''), 3000);
        return () => clearTimeout(timer);
    }, [error])

    return (
        <div className="modal-overlay" onClick={() => (setModalOpen(false), setIsLogin(false))}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={() => (setModalOpen(false), setIsLogin(false))}>Close</button>
                {/* Either SignUp or Login */}
                {isLogin ?
                    <div className='login-container'>
                        <h2>Log in</h2>
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
                        <button onClick={handleSubmit}>Login</button>
                        <button onClick={() => setIsLogin(false)}>Create an account?</button>
                        {error && <p style={{color: "red"}}>{error}</p>}
                    </div>
                    :
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
                        <button onClick={handleSubmit}>Create Account</button>
                        <button onClick={() => setIsLogin(true)}>Already have an account?</button>
                    </div>
                }
            </div>
        </div>
    )
}