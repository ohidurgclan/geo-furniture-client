import React from 'react';
import { Container, Grid } from '@mui/material';
import img1 from '../../../image/offbanner/banner-003.jpg';
import img2 from '../../../image/offbanner/banner-004.jpg';
import img3 from '../../../image/offbanner/banner-005.jpg';

const OfferBanner = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img height="auto" width="100%" src={img1} alt="" />
                </Grid>
                <Grid item xs={4}>
                    <img height="auto" width="100%" src={img2} alt="" />
                </Grid>
                <Grid item xs={4}>
                    <img height="auto" width="100%" src={img3} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default OfferBanner;