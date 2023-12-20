import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Snackbar, Alert, Link } from '@mui/material';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleRegister = async () => {
    const registrationSuccess = true;
    if (registrationSuccess) {
      setAlertSeverity('success');
      setAlertMessage('Registration successful!');
      setAlertOpen(true);
    } else {
      setAlertSeverity('error');
      setAlertMessage('Registration failed. Please try again.');
      setAlertOpen(true);
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-background-design-with-stars-blue_53876-43533.jpg?w=740&t=st=1703057688~exp=1703058288~hmac=86f680822a180e7d8ec8dd0066d00c5234089829e8f7c805477ab5a4cf6bc91e")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Paper elevation={3} style={{ padding: '60px', maxWidth: '300px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <br></br>
        <form>
          <TextField
            label="Full Name"
            type="text"
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
           <TextField
            label="Mobile Number"
            type="text"
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          
          <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>
            Register
          </Button>
        </form>

        <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert severity={alertSeverity} onClose={handleAlertClose}>
            {alertMessage}
          </Alert>
        </Snackbar>
        <br></br>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          <Link href="/" color="primary">
            Back to Home
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default RegisterForm;
