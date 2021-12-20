import { Container, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react';
import { Box } from '@mui/system';

const RealtimeService = () => {
    return (
        <Box style={{ backgroundColor: '#f9f9f9', height: '10rem', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Grid data-aos="zoom-in" container spacing={3}>
                    <Grid item xs={4}>
                        <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <AttachMoneyIcon sx={{ fontSize: 60, color: 'var(--bg-black-100)' }} />
                            <Box>
                                <Typography sx={{ fontWeight: '700' }} variant="h6" component="div">
                                    100% Secure Payment
                                </Typography>
                                <Typography variant="body2" gutterBottom component="div">
                                    International Secure Payment Getway
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <LocalShippingIcon sx={{ fontSize: 60, color: 'var(--bg-black-100)' }} />
                            <Box>
                                <Typography sx={{ fontWeight: '700' }} variant="h6" component="div">
                                    Free Local Delivery
                                </Typography>
                                <Typography variant="body2" gutterBottom component="div">
                                    Experienced Delivery Department
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <LocalPhoneIcon sx={{ fontSize: 60, color: 'var(--bg-black-100)' }} />
                            <Box>
                                <Typography sx={{ fontWeight: '700' }} variant="h6" component="div">
                                    24/7 Hours Support
                                </Typography>
                                <Typography variant="body2" gutterBottom component="div">
                                    Creative Support Team
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>    
        </Box>
    );
};

export default RealtimeService;