import { BlogGrid } from "../components/BlogGrid"
import { Header } from "../components/Header"
import "./HomePage.css"

interface HomePageProps {
    signUpOpen: boolean;
    setSignUpOpen: (open: boolean) => void
}

export function HomePage({signUpOpen, setSignUpOpen}: HomePageProps) {
    return (
        <div className="homepage-body">
            <Header setSignUpOpen={setSignUpOpen}/>
            <BlogGrid setSignUpOpen={setSignUpOpen} signUpOpen={signUpOpen}/>
        </div>
    )
}