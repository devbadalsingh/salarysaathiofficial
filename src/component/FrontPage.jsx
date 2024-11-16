import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import backgroundImage from '../assets/image/Frame 501.png';

const FrontPage = () => {
  const theme = useTheme();

  return (
<Box
  sx={{
    overflowX: 'hidden',
    width: '100%',
    backgroundColor: '#f9f9f9',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: theme.spacing(2),
    height: {xs:'100vh',md:'110vh',sm:'118vh',lg:'107vh'}, // Same height across all screens
    '@media (width: 414px) and (height: 896px)': {
      height: '80vh', // Specific height for iPhone XR
    },
    '@media (width: 390px) and (height: 844px)': {
      height: '80vh', // Adjusted height for iPhone 12 Pro
    },
    '@media (width: 430px) and (height: 932px)': {
      height: '80vh', // Adjusted height for iPhone 14 Pro Max
    },
   '@media (width: 412px) and (height: 915px)': {
      height: '20vh', // Adjusted height for Pixel 7
    },
    '@media (width: 1024px) and (height: 1366px)': {
      height: '90vh', // Adjusted height for 1024x1336 screens
    },
    
  }}
>  {/* Centered Content */}
      <Box sx={{ mt: -60, [theme.breakpoints.down('sm')]: { mt: -64 } ,
      
       '@media (width: 414px) and (height: 896px)': {
        mt: -75, // Specific height for iPhone XR
      }, 
    '@media (width: 1024px) and (height: 1366px)': {
      mt: -130, // Adjusted height for 1024x1336 screens
    },}
      
    
    }>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            color: 'black',
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem',
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize: '2rem',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '2.5rem',
            },
          }}
        >
          Quick urgent assured loan in just
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mb: 0.5,
            fontWeight: 'bold',
            color: '#FFAA00',
            [theme.breakpoints.down('sm')]: {
              fontSize: '1.5rem',
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize: '2rem',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '2.5rem',
            },
          }}
        >
          5 minutes
        </Typography>
      </Box>

      {/* Buttons in a smaller container */}
         {/* Buttons in a smaller container */}
         <Button
        variant="contained"
        href="/apply-now"
        sx={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          fontSize: { xs: "14px", sm: "16px" }, // Adjust font size
          padding: { xs: "8px 16px", sm: "5px 10px" }, // Adjust padding
          animation: "blinking 1.5s infinite",
          "&:hover": {
            backgroundColor: "#FFAA00",
          },
          "@keyframes blinking": {
            "0%": { backgroundColor: "black", color: "white" },
            "50%": { backgroundColor: "#FFAA00", color: "black" },
            "100%": { backgroundColor: "black", color: "white" },
          },
        }}
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default FrontPage;
