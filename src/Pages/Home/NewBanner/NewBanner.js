import { Container, Grid } from '@mui/material';
import React from 'react';
import img1 from '../../../image/offbanner/banner-002.jpg';
import img2 from '../../../image/offbanner/banner-001.jpg';

const NewBanner = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img height="auto" width="100%" src={img1} alt="" />
                </Grid>
                <Grid item xs={6}>
                    <img height="auto" width="100%" src={img2} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default NewBanner;