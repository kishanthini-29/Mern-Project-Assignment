import React from 'react';
import Layout from '../components/Layout';
import { Paper, Typography, Grid, InputAdornment, IconButton, TextField, Link, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const IndexPage = () => (
  <Layout title="Welcome to My Page">
    <Paper elevation={3} sx={{ padding: '20px' }}>
      <h1>
        Profile Details
      </h1>
      <hr />

      <h4>
        Full Name:
      </h4>
      <TextField
        variant="outlined"
        type="text"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />


      <h4>
        User Name:
      </h4>
      <TextField
        variant="outlined"
        type="text"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <h4>
        Mobile Number:
      </h4>
      <TextField
        variant="outlined"
        type="number"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <h4 >
        Password:
      </h4>

      <TextField
        variant="outlined"
        type="password"

        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br></br>
      <br></br>
      <Button variant="contained" color="primary" fullWidth>

        Update Details
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        <br></br>
        <Link href="/" color="primary">
          Back to Home
        </Link>
      </Typography>
    </Paper>

  </Layout>
);

export default IndexPage;
