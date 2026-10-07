import { BlogGrid } from "../components/BlogGrid"
import { Header } from "../components/Header"
import "./HomePage.css"
export function HomePage() {
    return (
        <div className="homepage-body">
            <Header />
            <BlogGrid />
        </div>
    )
}