import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userID, setUserID] = useState('');
  const [walletAdd, setWalletadd] = useState('');
  const [invA, setInva] = useState('');
  const [value, setValue] = React.useState('');

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleSearch = () => {
    // Perform search logic here using the searchQuery
    console.log('Searching for:', searchQuery);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleUserQueryChange = (event) => {
    setUserID(event.target.value);
  };
  const handleWalletQueryChange = (event) => {
    setWalletadd(event.target.value);
  };

  const handleInvQueryChange = (event) => {
    setInva(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column', background: 'white', width: '100%', p: 4, borderRadius: '20px', height: '100%' }}
    >
      <Typography variant="h2" sx={{ mb: 3 }}>
        Search User
      </Typography>
      <Grid container sx={{ mb: 2 }} rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} md={6}>
          <TextField
            label="UserId/ Wallet Address"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            style={{ marginRight: '1rem', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" onClick={handleSearch} sx={{ marginTop: '4px', px: 4, py: 1, width: '100%' }}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h3" sx={{ mb: 3, mt: 5 }}>
        Member Information
      </Typography>
      <Grid container sx={{ mb: 2 }} rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} md={3}>
          <TextField
            label="User ID"
            variant="outlined"
            value={userID}
            onChange={handleUserQueryChange}
            style={{ marginRight: '1rem', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Wallet Address"
            variant="outlined"
            value={walletAdd}
            onChange={handleWalletQueryChange}
            sx={{ marginRight: '1rem', width: '100%' }}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Registration Date" value={value} onChange={(newValue) => setValue(newValue)} />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} md={3}>
          <TextField
            label="Investment Amt  "
            variant="outlined"
            value={invA}
            onChange={handleInvQueryChange}
            sx={{ marginRight: '1rem', width: '100%' }}
          />
        </Grid>

        <Grid item xs={12} md={3} sx={{ px: 3 }}>
          <Button variant="contained" onClick={handleSearch} sx={{ width: '100%', py: 1, marginTop: '4px' }}>
            DashBoard
          </Button>
        </Grid>
        <Grid item xs={12} md={3} sx={{ px: 3 }}>
          <Button variant="contained" onClick={handleSearch} sx={{ backgroundColor: 'red', width: '100%', py: 1, marginTop: '4px' }}>
            Block User
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchSection;
