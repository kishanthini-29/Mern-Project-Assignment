import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Link, Alert } from '@mui/material';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setShowErrorAlert(true);
      setShowSuccessAlert(false); 
    } else {
      const isValidCredentials = true;

      if (isValidCredentials) {
        setShowSuccessAlert(true);
        setShowErrorAlert(false); 

        setTimeout(() => {
          router.push('/profilePage'); 
        }, 1000);
      } else {
        setShowErrorAlert(true);
        setShowSuccessAlert(false); 
      }
    }
  };

  const handleAlertClose = () => {
    setShowErrorAlert(false);
    setShowSuccessAlert(false);
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
      <Paper elevation={3} style={{ padding: '80px', width: '300px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        {showErrorAlert && (
          <Alert severity="error" onClose={handleAlertClose}>
            Username or password cannot be empty or incorrect.
          </Alert>
        )}
        {showSuccessAlert && (
          <Alert severity="success" onClose={handleAlertClose}>
            Login successful! Redirecting...
          </Alert>
        )}
        <br></br>
        <form>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
         Login
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          <Link href="/" color="inherit">
            Forgot Password?
          </Link>
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Don't have an account?{' '}
          <Link href="/RegisterForm" color="primary">
            Register
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default LoginForm;
