import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='flex-1 w-11/12 mx-auto my-3'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;