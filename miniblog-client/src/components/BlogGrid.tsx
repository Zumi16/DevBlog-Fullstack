import './BlogGrid.css'

export function BlogGrid() {
    return (
        <div className="blog-grid">
            <div>

            </div>
            <div className='feed-container'>
                <article className='article-container'>
                    <div className='avatar-author'>
                        <p>Image</p>
                        <p>Name</p>
                    </div>
                    <div className='title-content'>
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </article>
            </div>
        </div>
    )
}