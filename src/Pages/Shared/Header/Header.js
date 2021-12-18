import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { Button, Paper, TextField } from '@mui/material';
import { borderColor, borderRadius } from '@mui/system';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/home"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                 >Home</NavLink>
      </MenuItem>  
      <MenuItem>
        <NavLink to="/products"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                 >Products</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/login"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                 >Log In</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/register"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                 >Register</NavLink>
      </MenuItem>
    </Menu>
  );
    // const { user, logOut } = useAuth();
return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: 'none' , backgroundColor: '#fff'}} position="static">
        <Toolbar>
          <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: '600', color: 'var(--bg-black-100)', mr: 5}}>
            Geo Furniture
          </Typography>
    <Paper elevation={0}
      component="form"
      sx={{ ml: 5,p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, border: '1px solid var(--border-color)' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, borderRight: '1px solid var(--borer-color)' }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <IconButton type="submit" sx={{ backgroundColor: 'var(--bg-black-100)', borderRadius: 'initial' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLink to="/home"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                     >Home</NavLink>
            <NavLink to="/products"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                 >Products</NavLink>
            <NavLink to="/login"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                 >Log In</NavLink>
            <NavLink to="/register"
                style={{ fontWeight: '400', fontSize: '1.2rem', color: 'var(--deep-theme-color)', margin: '2rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                 >Ragister</NavLink>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}



export default Header;