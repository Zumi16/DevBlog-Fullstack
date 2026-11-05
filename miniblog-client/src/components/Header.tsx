import type { SetStateAction, Dispatch } from 'react';
import './Header.css'

interface HeaderProps {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    setModalOpen: (open: boolean) => void;
}

export function Header({ isLoggedIn, setIsLoggedIn, setModalOpen }: HeaderProps) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
    }

    return (
        <div className='header-container'>
            <div className="left-section">
                <h3 className='logo'>DevBLog</h3>
            </div>
            <div className="right-section">
                <button className='feed-btn'>Feed</button>
                {isLoggedIn
                    ?
                    <button className='sign-up-btn' onClick={() => handleLogout()}>Logout</button>
                    :
                    <button className='sign-up-btn' onClick={() => setModalOpen(true)}>Sign Up</button>
                }
            </div>
        </div>
    )
}