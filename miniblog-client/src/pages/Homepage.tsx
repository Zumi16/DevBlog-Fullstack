import type { Dispatch, SetStateAction } from 'react';
import { BlogGrid } from "../components/BlogGrid"
import { Header } from "../components/Header"
import "./HomePage.css"

interface HomePageProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    setUserName: Dispatch<SetStateAction<string[]>>;
    signUpOpen: boolean;
    setSignUpOpen: Dispatch<SetStateAction<boolean>>
}

export function HomePage({modalOpen, setModalOpen, setUserName, signUpOpen, setSignUpOpen}: HomePageProps) {
    return (
        <div className="homepage-body">
            <Header setModalOpen={setModalOpen}/>
            <BlogGrid 
                modalOpen={modalOpen}
                setModalOpen={setModalOpen} 
                setUserName={setUserName}
                signUpOpen={signUpOpen}
                setSignUpOpen={setSignUpOpen}
            />
        </div>
    )
}