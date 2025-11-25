import React from 'react';
import Hero from '../components/home/Hero';
import History from '../components/home/History';
import Gallery from '../components/home/Gallery';
import MenuPreview from '../components/home/MenuPreview';
import FullMenuGallery from '../components/home/FullMenuGallery';
import FAQ from '../components/home/FAQ';

const Home = () => {
    return (
        <main>
            <Hero />
            <History />
            <Gallery />
            <MenuPreview />
            <FullMenuGallery />
            <FAQ />
        </main>
    );
};

export default Home;
