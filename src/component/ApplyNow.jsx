import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Link,
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  CurrencyRupee,
  PinDrop,
  CalendarToday,
  Public,
  LocationOn,
} from '@mui/icons-material';
import Swal from 'sweetalert2';

import backgroundImg from '../assets/image/Frame 446.png';
import applyImage from '../assets/image/apply now qua final.webp'
const ApplyNow = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [formValues, setFormValues] = useState({
    fName: '',
    lName:' ',
    gender: '',
    pan: '',
    aadhaar: '',
    mobile: '',
    alternateMobile: '',
    dob: '',
    personalEmail: '',
    officeEmail: '',
    pinCode: '',
    salary: '',
    loanAmount: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [animationState, setAnimationState] = useState([]);


  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("the pan value is 1",value)
  
    // Validation for input fields (only block if invalid input is entered)
  
    // Mobile: Only digits and max 10 characters
    if (name === 'fName' && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === 'lName' && !/^[A-Za-z\s]*$/.test(value)) return;
  
    if (name === 'mobile' && (!/^\d*$/.test(value) || value.length > 10)) return;
  
    // Salary and Loan Amount: Only digits
    if ((name === 'salary' || name === 'loanAmount') && !/^\d*$/.test(value)) return;
  
    // PinCode: Only digits and max 6 characters
    if (name === 'pinCode' && (!/^\d*$/.test(value) || value.length > 6)) return;
  
    // Aadhaar: Only digits and max 12 characters
    if (name === 'aadhaar' && (!/^\d*$/.test(value) || value.length > 12)) return;
    
    //pan validation 
    if (name === 'pan') {
      // Convert to uppercase for consistency
      const panInput = value.toUpperCase();
  
      // Allow only up to 10 characters and validate per character
      if (panInput.length <= 10) {
          // Regular expression to match PAN format progressively
          if (
              /^[A-Z]{0,5}$/.test(panInput) || // First 5 characters must be letters
              /^[A-Z]{5}\d{0,4}$/.test(panInput) || // Next 4 characters must be digits
              /^[A-Z]{5}\d{4}[A-Z]?$/.test(panInput) // Last character must be a letter
          ) {
              setFormValues({ ...formValues, [name]: panInput });
              setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear any error message
          } else {
              setFormErrors((prevErrors) => ({
                  ...prevErrors,
                  [name]: 'PAN format should be 5 letters, 4 digits, and 1 letter (e.g., ABCDE1234F).',
              }));
          }
      }
      return; // Prevent further processing if input exceeds 10 characters
  }
  

  // validation for dob
  if (name === 'dob') {
    const birthDate = new Date(value); // Convert input to a date
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    // Adjust age if the current month and day are before the birth month and day
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    if (age < 18) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        dob: 'You must be at least 18 years old.',
      }));
      return; // Prevent updating the value if invalid
    }
  }
  

    console.log("the pan value is ",value)
    // Update form values and reset errors for the specific field
    setFormValues({ ...formValues, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };
  
  const validateForm = () => {
    const errors = {};
    const mobileValid = /^\d{10}$/.test(formValues.mobile);
    const panValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formValues.pan);
    const aadhaarValid = /^\d{12}$/.test(formValues.aadhaar);
    const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.personalEmail);
    const officeEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.officeEmail);
    const pinCodeValid = /^\d{6}$/.test(formValues.pinCode);

    Object.keys(formValues).forEach((field) => {
      if (!formValues[field]) {
        errors[field] = 'This field is required';
      }
    });

    if (!mobileValid) errors.mobile = 'Mobile number must be a 10-digit number';
    if (!aadhaarValid) errors.aadhaar = 'Aadhaar number must be a 12-digit number';
    if (!panValid) errors.pan = 'Invalid PAN format (e.g., ABCDE1234F)';
    if (!emailValid) errors.personalEmail = 'Invalid email format';
    if (!officeEmailValid) errors.officeEmail = 'Invalid office email format';
    if (!pinCodeValid) errors.pinCode = 'pinCode must be 6 digits';
    if (!termsAccepted) errors.termsAccepted = 'You must accept the Terms & Conditions';
    if (!state) errors.state = 'Please select a state';
    if (!city) errors.city = 'Please select a city';

    return errors;
  };

  

  const handlePincodeChange = async (e) => {
    const value = e.target.value;
    setFormValues({ ...formValues, pinCode: value });
    console.log(value);
    
    // Fetch city and state based on pincode
    if (value.length === 6) {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const data = await response.json();

        if (data[0].Status === "Success") {
          const { Block, State } = data[0].PostOffice[0];
          setCity(Block);
          setState(State);
          console.log(city, state);
          
        } else {
          // Handle invalid pin code case
          setCity('');
          setState('');
          Swal.fire({
            icon: 'error',
            title: 'Invalid Pincode',
            text: 'Please enter a valid pincode.',
          });
        }
      } catch (error) {
        console.error('Error fetching pincode data:', error);
      }
    } else {
      setCity('');
      setState('');
    }
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const errors = validateForm(); // Validate form and get errors
    
    console.log("the values of onject ",Object.keys(errors).length)
    // Check for validation errors
    if (Object.keys(errors).length >=2) {
      setFormErrors(errors); // Set the errors in state
      return; // Prevent submission
    }
  
    // Proceed with form submission if there are no errors
    try {
      const response = await fetch('https://api.salarysaathi.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formValues,
          state: state,
          city: city,
          termsAccepted,
          source: 'website',
        }),
      });
  
      if (!response.ok) throw new Error('Network response was not ok');
  
      const result = await response.json();
  
      Swal.fire({
        title: 'Success!',
        text: 'Our executive will call you or revert you back in 24 hours.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      // Reset form after successful submission
      setFormValues({
        fName: '',
        lName: '',
        gender: '',
        pan: '',
        aadhaar: '',
        mobile: '',
        dob: '',
        personalEmail: '',
        officeEmail: '',
        pinCode: '',
        salary: '',
        loanAmount: '',
      });
      setTermsAccepted(false);
      setState('');
      setCity('');
      setFormErrors({}); // Reset form errors
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  



  return (
    <div>
     <Box 
      sx={{ 
        background: '#f9f9f9',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Adjust height as needed
        padding: '30px',
      }}
    >

          <form>
          <Container maxWidth="xl" sx={{ mt: 5 ,mb:5}}>
        <Box
          component="form"
          id="loanForm"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            padding: {xs:1,md:10},
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Gray shadow effect

            backgroundColor: 'rgba(240, 240, 240, 0.5)',
            borderRadius: '50px',
            border:{xs:'none',md: '2px solid white '},
            boxShadow: 3,
            width: '100%',
          }}
        ><Typography variant="h3" gutterBottom align="center" style={{ fontWeight: 'bold' }}>
        Apply For Loan
    </Typography>
    
          <Grid container spacing={3}>
                              {[
                    { label: 'First Name', name: 'fName', icon: <Person /> },
                    { label: 'Last Name', name: 'lName', icon: <Person /> },

                    { label: 'Gender', name: 'gender', icon: <Person />, type: 'select', options: ['M', 'F', 'Others'] ,isInput: true},
                    { label: 'PAN', name: 'pan', icon: <Public /> , type: 'text' },
                    { label: 'Aadhaar', name: 'aadhaar', icon: <Public /> },
                    { label: 'Mobile', name: 'mobile', icon: <Phone /> },
                    { label: 'DOB', name: 'dob', icon: <CalendarToday />, type: 'date' },
                    { label: 'Personal Email', name: 'personalEmail', icon: <Email /> },
                    { label: 'Office Email', name: 'officeEmail', icon: <Email /> },
                    { label: 'Monthly Salary', name: 'salary', icon: <CurrencyRupee /> },
                    { label: 'Loan Amount Required', name: 'loanAmount', icon: <CurrencyRupee /> },
                  ]
                ?.map((field, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                
              >
                <TextField
                  fullWidth
                  required
                  name={field.name}
                  label={field.label}
                  value={formValues[field.name]}
                  onChange={handleInputChange}
                  type={field.type || 'text'}
                  select={field.type === 'select'}
                  error={!!formErrors[field.name]}
                  helperText={formErrors[field.name] || ''}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{field.icon}</InputAdornment>,
                  }}
                >
                  {field.options &&
                    field.options.map((option) => (
                      <MenuItem key={option} value={option}>
            {option === "M" ? "Male" : option === "F" ? "Female" : "Other"}
          </MenuItem>
                    ))}
                </TextField>
                
              </Grid>
            ))}
            

        <Grid
          item
          xs={12}
          md={6}
          sx={{
           
          }}
        >
          <TextField
            fullWidth
            required
            name='pinCode'
            label="Pincode"
            value={formValues.pinCode}
            onChange={handlePincodeChange}
            error={!!formErrors.pinCode}
            helperText={formErrors.pinCode || ''}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PinDrop sx={{ color: '#1976d2' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: '#f0f4ff',
              borderRadius: '4px',
            }}
          />
        </Grid>
        <Grid
              item
              xs={12}
              md={6}
              sx={{
              
              }}
            >
              <TextField
                fullWidth
                required
                name='city'
                label="City"
                value={city}
                error={!!formErrors.city}
                helperText={formErrors.city || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              >
            
                  
              </TextField>
            </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
            
            }}
          >
            <TextField
              fullWidth
              required
              name='state'
              label="State"
              value={state}
              error={!!formErrors.state}
              helperText={formErrors.state || ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn sx={{ color: '#1976d2' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: '#f0f4ff',
                borderRadius: '4px',
              }}
            >
              
            </TextField>
          </Grid>
           


            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox checked={termsAccepted} onChange={handleCheckboxChange} />}
                label={
                  <Typography variant="body2">
                    I accept the{' '}
                    <Link href="terms-condition" target="_blank" rel="noopener">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="privacy-policy" target="_blank" rel="noopener">
                      Privacy Policy
                    </Link>
                  </Typography>
                }
              />
              {formErrors.termsAccepted && (
                <Typography color="error" variant="body2">
                  {formErrors.termsAccepted}
                </Typography>
              )}
            </Grid>
          </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: { xs: 2, md: 0 } }}> 
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                sx={{ 
                  backgroundColor: '#444', // Light black color
                  padding: '4px', 
                  width: '50%',
                  textAlign: 'center',
                  fontSize: '0.875rem', // Smaller font size
                  borderRadius: '8px', // Set border radius for button
                  '&:hover': {
                    backgroundColor: '#333', // Darker shade on hover
                  },
                }}
              >
                Submit
              </Button>
            </Box>


        </Box>
      </Container>
          </form>
      </Box>
    </div>
  );
};

export default ApplyNow;
