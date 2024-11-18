import React, { useEffect, useRef, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import backgroundImage from '../assets/image/Frame 447.png'; // Replace with your background image path

const Technology = () => {
    const [isVisible, setIsVisible] = useState(false);
    const faqRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        }

        return () => {
            if (faqRef.current) {
                observer.unobserve(faqRef.current);
            }
        };
    }, []);

    return (
        <Box
            className="loan-calculate"
            sx={{
                width: '100%',
                height: 'auto',
                padding: 4,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f9f9f9',
                backdropFilter: 'blur(5px)',

                // Responsive background image styling
                '@media (max-width: 1024px)': {
                    backgroundSize: 'contain', // For tablets and smaller screens, use 'contain' to fit within the container
                    backgroundPosition: 'top center', // Adjust position for smaller screens
                },
                '@media (max-width: 600px)': {
                    backgroundSize: 'contain', // For mobile devices, maintain the 'contain' behavior
                    backgroundPosition: 'top center', // Ensure the background is positioned well on mobile
                },
            }}
            ref={faqRef}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    fontSize: '3rem',
                    fontFamily: 'Arial, sans-serif',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    textAlign: 'center',  // This centers the heading
                    margin: '0 auto',     // Ensures the heading is centered with appropriate margin
                    width: 'fit-content', // Keeps the width of the heading to fit its content
                }}
            >
                Our Technology
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    maxWidth: '800px',
                    fontFamily: 'Arial, sans-serif',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    mb: 4,
                    lineHeight: 1.6,
                    textAlign: 'center', // Center the paragraph text
                    margin: '0 auto',     // Ensure the paragraph is centered
                }}
            >
                SalarySaathi.com is powered by a state-of-the-art digital platform that simplifies every step of the loan process. We use advanced algorithms to assess your creditworthiness quickly and accurately, ensuring that you get the best possible loan offers. Our technology ensures:
            </Typography>

            <Box
                sx={{
                    margin: '40px',
                    padding: '2rem',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    '@media (max-width: 600px)': {
                        margin: '20px',
                        padding: '1rem',
                    },
                }}
            >
                <Paper elevation={0} sx={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
                    <div>
                        {techItems.map((tech, index) => (
                            <Accordion
                                key={index}
                                sx={{
                                    backgroundColor: 'transparent',
                                    opacity: isVisible ? 1 : 0,
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon
                                            sx={{
                                                color: 'black',
                                                transition: 'color 0.3s ease',
                                                fontSize: '2rem', // Adjust this value to increase the size
                                                '.Mui-expanded &': {
                                                    color: 'white',
                                                },
                                                '&:hover': {
                                                    color: 'white',
                                                },
                                            }}
                                        />
                                    }
                                    aria-controls={`tech${index}-content`}
                                    id={`tech${index}-header`}
                                    sx={{
                                        backgroundColor: 'transparent',
                                        color: 'black',
                                        transition: 'background-color 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'black',
                                            color: 'white',
                                        },
                                        '&.Mui-expanded': {
                                            backgroundColor: 'black',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Arial, sans-serif',
                                                color: 'inherit',
                                                fontSize: '2rem',
                                                fontWeight: 'bold',
                                                margin: '0 1rem 0 0',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}.
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Arial, sans-serif',
                                                color: 'inherit',
                                                fontSize: '1.25rem',
                                                margin: '0',
                                                textAlign: 'center',
                                                width: '100%',
                                            }}
                                        >
                                            {tech.title}
                                        </Typography>
                                    </Box>
                                </AccordionSummary>

                                <AccordionDetails
                                    sx={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: 'black',
                                        fontSize: '1rem',
                                        padding: '1rem 1.8rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Arial, sans-serif',
                                            color: 'inherit',
                                        }}
                                    >
                                        {tech.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </Paper>
            </Box>
        </Box>
    );
};

// Tech items data
const techItems = [
    {
        title: '01/ Quick Credit Assessments',
        description: 'Our advanced algorithms ensure quick and accurate credit assessments, enabling you to get the best loan offers without any delay.'
    },
    {
        title: '02/ User-Friendly Interface',
        description: 'SalarySaathi offers an intuitive and easy-to-navigate platform, ensuring a smooth loan application process for all users.'
    },
    {
        title: '03/ Real-Time Tracking',
        description: 'Track your loan application status in real-time, providing complete transparency and peace of mind throughout the process.'
    },
    {
        title: '04/ Secure Transactions',
        description: 'We prioritize your security by using encrypted transactions, ensuring your sensitive data remains safe at all times.'
    },
];

export default Technology;
