import type { Dispatch, SetStateAction } from 'react';
import { BlogGrid } from "../components/BlogGrid"
import { Header } from "../components/Header"
import "./HomePage.css"

interface HomePageProps {
    signUpOpen: boolean;
    setSignUpOpen: Dispatch<SetStateAction<boolean>>;
    setUserName: Dispatch<SetStateAction<string[]>>;
}

export function HomePage({signUpOpen, setSignUpOpen, setUserName}: HomePageProps) {
    return (
        <div className="homepage-body">
            <Header setSignUpOpen={setSignUpOpen}/>
            <BlogGrid 
                signUpOpen={signUpOpen} 
                setSignUpOpen={setSignUpOpen} 
                setUserName={setUserName}
            />
        </div>
    )
}