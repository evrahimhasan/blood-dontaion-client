import React from 'react';
import Banner from '../../components/banner/Banner';
import Featured from '../../components/featured/Featured';
import Contact from '../../components/contact/Contact';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-3'>
            <Banner></Banner>
            <Featured></Featured>
            <Contact></Contact>
        </div>
    );
};

export default Home;