import './Header.css'

export function Header() {
    return (
        <div className='header-container'>
            <div className="left-section">
                <h3>DevBLog</h3>
            </div>
            <div className="right-section">
                <button>Feed</button>
                <button>Sign In</button>
                <p>Post count</p>
            </div>
        </div>
    )
}