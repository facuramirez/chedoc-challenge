import React from "react";
import Navbar from './Navbar/Navbar';

interface LayoutProps{
    children: React.ReactNode
}

export default function Layout({children}:LayoutProps) {
    return(
        <div>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    )
}