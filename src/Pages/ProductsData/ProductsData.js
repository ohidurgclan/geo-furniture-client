import { Container } from '@mui/material';
import React from 'react';
import { useGetAllPostQuery } from '../../hooks/useProducts';

const ProductsData = () => {
    const {data} = useGetAllPostQuery()
    return (
        <>
            {
                data.map((product) => <Container key={product.key} >
                    <h4>{product.name}</h4>
                </Container>
                )
            }
        </>
    );
};

export default ProductsData;