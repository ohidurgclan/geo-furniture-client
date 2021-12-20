import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useGetAllPostQuery } from '../../../hooks/useProducts';
import ProductsData from '../../ProductsData/ProductsData';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Products = () => {
  const { data } = useGetAllPostQuery()  
  return (
    <>
      <Header />
        <Container sx={{ mt: 5, mb: 5 }}>
          <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h5">Our Products</Typography>
              <Grid container spacing={3}>
          {
              data && data.map((product) => <ProductsData
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

export default Products;