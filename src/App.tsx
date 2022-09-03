import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import Navigation from './routes/routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
