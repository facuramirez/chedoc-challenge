import React from "react";
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";

interface LayoutProps{
    children: React.ReactNode
}

export default function Layout({children}:LayoutProps) {
    return(
        <div>            
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css" />
            </Head>
            
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />            
        </div>
    )
}