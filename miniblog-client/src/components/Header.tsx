import './Header.css'

interface HeaderProps {
    setModalOpen: (open: boolean) => void
}

export function Header({setModalOpen}: HeaderProps) {
    return (
        <div className='header-container'>
            <div className="left-section">
                <h3 className='logo'>DevBLog</h3>
            </div>
            <div className="right-section">
                <button className='feed-btn'>Feed</button>
                <button className='sign-up-btn' onClick={() => setModalOpen(true)}>Sign Up</button>
            </div>
        </div>
    )
}