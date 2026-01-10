import React from 'react';
import Banner from '../../components/banner/Banner';
import Featured from '../../components/featured/Featured';
import Contact from '../../components/contact/Contact';
import Statistics from '../../components/statistics/Statistics';
import WhyDonate from '../../components/whyDonate/WhyDonate';
import FAQ from '../../components/faq/FAQ';
import Testimonials from '../../components/testimonials/Testimonials';
import MissionSnippet from '../../components/missionSnippet/MissionSnippet';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-3'>
            <Banner></Banner>
            <MissionSnippet></MissionSnippet>
            <WhyDonate></WhyDonate>
            <Featured></Featured>
            <Statistics></Statistics>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;