import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useGetAllPostQuery } from '../../../hooks/useProducts';
import ProductsData from '../../ProductsData/ProductsData';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HomeSlider from '../HomeSlider/HomeSlider';
import NewBanner from '../NewBanner/NewBanner';
import OfferBanner from '../OfferBanner/OfferBanner';
import RealtimeService from '../RealtimeService/RealtimeService';

const Home = () => {
    const { data } = useGetAllPostQuery()
    console.log(data)
    return (
        <>
            <Header/>
            <HomeSlider />
            <RealtimeService />
            <Container sx={{ mt: 5, mb: 5 }}>
                <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h5">Latest Products</Typography>
                <Grid container spacing={3}>
            {
               data && data.slice(0, 3).map((product) => <ProductsData
                    key={product.key}
                    product={product}
                ></ProductsData>)
                    }
            </Grid>
            </Container>
            <NewBanner />
            <Container sx={{ mt: 5, mb: 5 }}>
                <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h5">Best Selling Products</Typography>
                <Grid container spacing={3}>
            {
               data && data.slice(4, 7).map((product) => <ProductsData
                    key={product.key}
                    product={product}
                ></ProductsData>)
                    }
            </Grid>
            </Container>
            <OfferBanner />
            <Container sx={{ mt: 5, mb: 5 }}>
                <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h5">Featured Products</Typography>
                <Grid container spacing={3}>
            {
               data && data.slice(7, 13).map((product) => <ProductsData
                    key={product.key}
                    product={product}
                ></ProductsData>)
                    }
            </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Home;