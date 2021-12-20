import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{marginTop: '10vh'}}>
            <AppBar style={{backgroundColor: '#f9f9f9', boxShadow: 'none' }}  position="static">
                <Toolbar>
                    <Typography style={{ fontWeight: '500', color: '#202020', margin: '5vmin', display: 'flex', justifyContent: 'space-between' }} variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        <Box>Copyright © Geo Furniture</Box><Box>Design {'&'} Developed With <Link href="https://www.linkedin.com/in/ohidurgclan/" color="#202020" underline="none">React {'&'} Redux</Link></Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;