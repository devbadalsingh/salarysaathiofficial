import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../assets/image/Frame .png'; // Adjust the path accordingly

const LoanCalculate = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <Box
            sx={{
                overflowY: 'hidden',
                backgroundColor: '#f9f9f9',
                height: 'auto', // Use auto height for responsiveness
                minHeight: '130vh', // Minimum height
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'black',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    mb: 4,
                    mt: 10,
                    fontSize: '3rem',
                    '&:hover': {
                        color: 'orange',
                    },
                    '@media (max-width: 600px)': {
                        fontSize: '2rem',
                    },
                }}
            >
                Make Your Dreams Come True
            </Typography>

            <Grid container spacing={2} ref={ref} sx={{ px: { xs: 1, md: 4 } }}>
                {/* First Column */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            paddingY: 3,
                            paddingX: 6,
                            mt: 2,
                            mb: 4,
                            mx: 2,
                            borderRadius: '40px',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#000',
                            minHeight: '250px', // Set a minimum height for the box
                            height: 'auto', // Auto height to allow for flexibility
                            border: '2px solid white',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                            animation: inView ? 'slideIn 0.5s forwards' : 'none',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                backgroundColor: 'transparent',
                                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                                color: 'black',
                            },
                            '@media (max-width: 600px)': {
                                height: 'auto', // Adjust height for small screens
                                paddingX: 3, // Decrease padding on small screens
                                marginBottom: 2, // Reduce margin on small screens
                            },
                        }}
                    >
                        <Typography variant="h5" fontWeight={550} component="strong" color="inherit" sx={{ mt: 4 }}>
                        Short on cash before Salary day?
                        </Typography>
                        <Typography variant="h6" color="inherit" sx={{ mt: 1 }}>
                        Turn to SalarySathi.com! We’ll provide you with the support you need and get funds in your account in just 5 minutes.                        </Typography>
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            paddingY: 3,
                            paddingX: 6,
                            mt: 2,
                            mb: 4,
                            mx: 2,
                            borderRadius: '40px',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#000',
                            minHeight: '250px',
                            height: 'auto',
                            border: '2px solid white',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                            animation: inView ? 'slideIn 0.5s forwards' : 'none',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                backgroundColor: 'transparent',
                                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                                color: 'black',
                            },
                            '@media (max-width: 600px)': {
                                height: 'auto',
                                paddingX: 3,
                                marginBottom: 2,
                            },
                        }}
                    >
                        <Typography variant="h5" fontWeight={550} component="strong" color="inherit" sx={{ mt: 4 }}>
                        Facing mid-month money troubles?                        </Typography>
                        <Typography variant="h6" color="inherit" sx={{ mt: 1 }}>
                        At SalarySathi.com, we offer quick loans tailored to your needs. Apply now, and receive funds instantly.                        </Typography>
                    </Paper>
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            paddingY: 3,
                            paddingX: 6,
                            mt: 2,
                            mb: 4,
                            mx: 2,
                            borderRadius: '40px',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#000',
                            minHeight: '250px',
                            height: 'auto',
                            border: '2px solid white',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                            animation: inView ? 'slideIn 0.5s forwards' : 'none',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                backgroundColor: 'transparent',
                                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                                color: 'black',
                            },
                            '@media (max-width: 600px)': {
                                height: 'auto',
                                paddingX: 3,
                                marginBottom: 2,
                            },
                        }}
                    >
                        <Typography variant="h5" fontWeight={550} component="strong" color="inherit" sx={{ mt: 4 }}>
                        Salary not enough to cover unexpected expenses?
                        </Typography>
                        <Typography variant="h6" color="inherit" sx={{ mt: 1 }}>
                        We’ve got your back! Get a hassle-free loan with SalarySathi.com in minutes—because we believe in helping you stay on track.                        </Typography>
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            paddingY: 3,
                            paddingX: 6,
                            mt: 2,
                            mb: 4,
                            mx: 2,
                            borderRadius: '40px',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            color: '#000',
                            minHeight: '250px',
                            height: 'auto',
                            border: '2px solid white',
                            position: 'relative',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                            animation: inView ? 'slideIn 0.5s forwards' : 'none',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                backgroundColor: 'transparent',
                                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                                color: 'black',
                            },
                            '@media (max-width: 600px)': {
                                height: 'auto',
                                paddingX: 3,
                                marginBottom: 2,
                            },
                        }}
                    >
                        <Typography variant="h5" fontWeight={550} component="strong" color="inherit" sx={{ mt: 4 }}>

                        Need a financial lift?

                        </Typography>
                        <Typography variant="h6" color="inherit" sx={{ mt: 1 }}>
                        With SalarySathi.com, your loan is just 5 minutes away. Fast, easy, and reliable solutions for when you need it most.                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LoanCalculate;
