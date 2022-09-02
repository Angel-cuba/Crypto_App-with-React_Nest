import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import Login from './components/auth/login.form';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
