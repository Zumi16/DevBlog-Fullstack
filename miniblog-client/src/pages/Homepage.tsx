import type { Dispatch, SetStateAction } from 'react';
import { BlogGrid } from "../components/BlogGrid"
import { Header } from "../components/Header"
import "./HomePage.css"

interface HomePageProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function HomePage({modalOpen, setModalOpen}: HomePageProps) {
    return (
        <div className="homepage-body">
            <Header setModalOpen={setModalOpen}/>
            <BlogGrid 
                modalOpen={modalOpen}
                setModalOpen={setModalOpen} 
            />
        </div>
    )
}