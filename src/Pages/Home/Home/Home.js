import React from 'react';
import ProductsData from '../../ProductsData/ProductsData';
import Header from '../../Shared/Header/Header';
import HomeSlider from '../HomeSlider/HomeSlider';
import NewBanner from '../NewBanner/NewBanner';
import OfferBanner from '../OfferBanner/OfferBanner';

const Home = () => {
    return (
        <>
            <Header/>
            <HomeSlider />
            <ProductsData />
            <NewBanner />
            <OfferBanner />
        </>
    );
};

export default Home;