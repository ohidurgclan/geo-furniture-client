import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const ProductsData = (props) => {
    const { name, color, price, star, brand, img, detail, category } = props.product;
    return (
            <Grid data-aos="fade-up" item xs={12} md={4} sm={4}>
                <Card sx={{ maxWidth: 368 }}>
                    <Box sx={{margin: '1rem 0 1rem'}}>
                        <Typography sx={{ color: '#0a2c3d', marginLeft: '1rem' }} variant="h6">
                            {name}
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
                            <Typography sx={{ color: '#0a2c3d' }} variant="subtitle1"> Color: {color}</Typography>
                            <Typography sx={{ color: '#0a2c3d' }} variant="subtitle1"> Category: {category}</Typography>
                        </Box>
                    </Box>
                <CardMedia
                    component="img"
                    height="380"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Box style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <Rating name="read-only" value={star} readOnly />
                        <Typography sx={{ color: '#0a2c3d', }} variant="h6">
                            Price: $ {price}
                        </Typography>        
                    </Box>
                    <Typography sx={{ color: '#0a2c3d' }} variant="body2">
                        {detail?.slice(0, 90)}
                    </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <NavLink style={{ textDecoration: 'none' }} to={`/service/${name}`}><Button style={{ backgroundColor: 'var(--bg-black-100)', color: '#202020', textDecoration: 'none' }} variant="contained">Details</Button></NavLink> 
                            <Typography sx={{ color: '#0a2c3d', marginLeft: '0.2rem', textTransform: 'capitalize' }} variant="subtitle1">Brand Name: {brand}</Typography>
                        </Box>
                </CardContent>
                </Card> 
            </Grid>
    );
};

export default ProductsData;