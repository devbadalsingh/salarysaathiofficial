import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IconButton,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Box,
  Typography,
  Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import logo from '../assets/image/Salari Saathi logo.png'; // Adjust the path based on your structure
import { useMediaQuery } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate(); // Hook for navigation
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to scroll to top and navigate
  const scrollToTop = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
    handleMenuClose();
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#f9f9f9' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '64px', marginTop: '10px' }}>
          <Link to="/" onClick={() => scrollToTop('/')} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '41%', height: 'auto' }} />
          </Link>

          {/* Sticky Dropdown menu button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
            sx={{
              backgroundColor: 'black',
              color: 'white',
              padding: '5px',
              borderRadius: '10px',
              width: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'fixed',
              top: '34px',
              right: '20px',
              zIndex: 1000,
              '&:hover': {
                backgroundColor: 'gray',
              },
            }}
          >
            {open ? <CloseIcon sx={{ fontSize: '20px' }} /> : <MenuIcon sx={{ fontSize: '20px' }} />}
            <Typography variant="h6" sx={{ ml: 1 }}>Menu</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Box sx={{ background: '#D9D9D9', width: '300px', p: 2 }}>
          <MenuItem onClick={() => scrollToTop('/')}>
            <Box sx={{ color: '#0b2747', display: 'flex', alignItems: 'center', width: '100%' }}>
              <HomeIcon sx={{ mr: 1 }} /> HOME
            </Box>
          </MenuItem>
          <MenuItem onClick={() => scrollToTop('/about-us')}>
            <Box sx={{ color: '#0b2747', display: 'flex', alignItems: 'center', width: '100%' }}>
              <InfoIcon sx={{ mr: 1 }} /> ABOUT US
            </Box>
          </MenuItem>
          <MenuItem onClick={() => scrollToTop('/repay-now')}>
            <Box sx={{ color: '#0b2747', display: 'flex', alignItems: 'center', width: '100%' }}>
              <PaymentIcon sx={{ mr: 1 }} /> REPAY NOW
            </Box>
          </MenuItem>
          <MenuItem onClick={() => scrollToTop('/contact-us')}>
            <Box sx={{ color: '#0b2747', display: 'flex', alignItems: 'center', width: '100%' }}>
              <ContactMailIcon sx={{ mr: 1 }} /> CONTACT US
            </Box>
          </MenuItem>

          {/* Divider Line */}
          <Box sx={{ width: '100%', borderTop: '1px solid black', my: 2 }} />

          {/* Apply Now Button */}
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#333', color: 'white', borderRadius: '5px', '&:hover': { backgroundColor: '#555' } }}
              fullWidth
              onClick={() => scrollToTop('/apply-now')}
            >
              <AssignmentIcon sx={{ mr: 1 }} /> APPLY NOW
            </Button>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook sx={{ color: '#0b2747', cursor: 'pointer' }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter sx={{ color: '#0b2747', cursor: 'pointer' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram sx={{ color: '#0b2747', cursor: 'pointer' }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn sx={{ color: '#0b2747', cursor: 'pointer' }} />
            </a>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default Header;
