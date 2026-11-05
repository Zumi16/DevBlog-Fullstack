import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { BlogGrid } from "../components/BlogGrid"
import { Header } from "../components/Header"
import "./HomePage.css"

interface HomePageProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function HomePage({ modalOpen, setModalOpen }: HomePageProps) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return !!localStorage.getItem('token')
    })

    return (
        <div className="homepage-body">
            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setModalOpen={setModalOpen} 
            />
            <BlogGrid
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
        </div>
    )
}