import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QrCode from '../../assets/images/qrcode/qr-code.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { postDesposit } from '../../redux/user';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ValidationTextFields() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    wallet: '',
    staking: '',
    transactionHash: ''
  });
  const [validationErrors, setValidationErrors] = React.useState({
    wallet: '',
    staking: '',
    transactionHash: ''
  });

  const handleClick = () => {
    onCopyClick();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  const onCopyClick = () => {
    try {
      navigator.clipboard.writeText('0x3bCaD00fDde10EbB9285899dd01522D8E0A54337');
      setOpen(true);
    } catch (error) {
      const tempItem = document.createElement('input');
      tempItem.setAttribute('type', 'text');
      tempItem.setAttribute('display', 'none');
      const content = '0x3bCaD00fDde10EbB9285899dd01522D8E0A54337';
      tempItem.setAttribute('value', content);
      document.body.appendChild(tempItem);

      tempItem.select();
      document.execCommand('Copy');

      tempItem.parentElement.removeChild(tempItem);
      setOpen(true);
    }
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const validateForm = () => {
    const errors = {};

    // Wallet validation
    if (formValues.wallet.trim() === '') {
      errors.wallet = 'Wallet is required.';
    }

    // Staking validation
    if (formValues.staking.trim() === '') {
      errors.staking = 'Staking amount is required.';
    }

    // Transaction hash validation
    if (formValues.transactionHash.trim() === '') {
      errors.transactionHash = 'Transaction hash is required.';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const errors = validateForm();
      if (Object.keys(errors).length === 0) {
        // Form is valid, submit the data or perform any other desired action
        const res = await postDesposit(formValues);
        if (res.response.status == 500) {
          console.log('Transaction hash is already submitted');
          throw 'Transaction hash is already submitted';
        }
        setOpen2(true);
      } else {
        // Set validation errors
        setValidationErrors(errors);
      }
    } catch (error) {
      setValidationErrors((prevState) => ({
        ...prevState,
        transactionHash: error
      }));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', background: 'white', width: 'fit-content', p: 4, borderRadius: '20px', mb: 4 }}
      >
        <h1>Enter Deposit Details</h1>
        <TextField
          error={Boolean(validationErrors.wallet)}
          id="outlined-error-helper-text-wallet"
          label="Wallet"
          name="wallet"
          value={formValues.wallet}
          onChange={handleInputChange}
          helperText={validationErrors.wallet}
          sx={{
            mt: 2,
            width: { sm: 200, md: 300 },
            '& .MuiInputBase-root': {}
          }}
        />

        <TextField
          error={Boolean(validationErrors.staking)}
          id="outlined-error-helper-text-staking"
          label="Deposit (USD)"
          name="staking"
          value={formValues.staking}
          onChange={handleInputChange}
          helperText={validationErrors.staking}
          sx={{
            mt: 2,
            width: { sm: 200, md: 300 }
          }}
        />

        <TextField
          error={Boolean(validationErrors.transactionHash)}
          id="outlined-error-helper-text-transaction-hash"
          label="Transaction Hash"
          name="transactionHash"
          value={formValues.transactionHash}
          onChange={handleInputChange}
          helperText={validationErrors.transactionHash}
          sx={{
            mt: 2,
            width: { sm: 200, md: 300 },
            '& .MuiInputBase-root': {}
          }}
        />

        <Button type="submit" variant="contained" disableElevation sx={{ mt: 2, width: '200px' }}>
          Submit
        </Button>
        <p>Deposit: Lock crypto, support network - Tron.</p>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', background: 'white', width: 'fit-content', p: 4, borderRadius: '20px', ml: 2 }}
      >
        <Box>
          <img src={QrCode} alt="QrCode" width={240} />
          <h1>Important</h1>
          <ol>
            <li>This address is only for Royal Magic</li>
            <li>Sending any other coin or token to this address may result in the loss</li>
            <li>Deposits will automatically be processed after 3 network confirmations.</li>
          </ol>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <TextField
            // error
            disabled
            id="outlined-error-helper-text"
            label="0x3bCaD00fDde10EbB9285899dd01522D8E0A54337"
            // defaultValue="Hello World"
            sx={{
              width: '100%'
            }}
          />
          <ContentCopyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} onClick={handleClick} />

          <Snackbar
            style={{ backgroundColor: '#fff' }}
            open={open}
            autoHideDuration={1000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
            message="Copied"
            action={action}
          />
          <Snackbar
            autoHideDuration={6000}
            open={open2}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose2}
            action={action}
          >
            <Alert severity="success">Request Submitted Successfully</Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}
