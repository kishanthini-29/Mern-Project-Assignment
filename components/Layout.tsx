import React, { ReactNode } from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Container, Typography, Link as MuiLink } from '@mui/material';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       
        </Typography>
      </Toolbar>
    </AppBar>
    <Container component="main" maxWidth="md" sx={{ mt: 2, flexGrow: 1 }}>
      {children}
    </Container>
    <br></br>
    <br></br>
    <footer style={{ textAlign: 'center', marginTop: 'auto' }}>
      <hr />
      <span>Welcome to Mern Project 2023</span>
    </footer>
  </div>
);

export default Layout;
