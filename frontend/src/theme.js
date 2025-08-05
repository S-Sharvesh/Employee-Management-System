import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3c72',
      light: '#2a5298',
      dark: '#1a3460',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2a5298',
      light: '#3a62a8',
      dark: '#24477a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1a3460, #24477a)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
        },
      },
    },
  },
});

export default theme;
