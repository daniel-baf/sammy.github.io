import { createTheme } from '@mui/material/styles';

// Google Material Design color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c2c2c', // Dark charcoal
      light: '#4a4a4a',
      dark: '#1a1a1a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#8b7355', // Warm brown
      light: '#a68968',
      dark: '#6b5842',
      contrastText: '#fff',
    },
    success: {
      main: '#6b8e23', // Olive green
      light: '#8ba446',
      dark: '#556b1a',
      contrastText: '#fff',
    },
    warning: {
      main: '#d4a574', // Warm beige
      light: '#e0b88a',
      dark: '#b8895d',
      contrastText: '#000',
    },
    error: {
      main: '#a0522d', // Sienna
      light: '#b8704a',
      dark: '#7d3f22',
      contrastText: '#fff',
    },
    background: {
      default: '#faf8f5', // Warm off-white
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#6b6b6b',
    },
  },
  typography: {
    fontFamily: [
      'Georgia',
      'Playfair Display',
      'serif',
      '-apple-system',
      'BlinkMacSystemFont',
    ].join(','),
    h1: {
      fontWeight: 400,
      fontSize: '3rem',
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 400,
      fontSize: '2.5rem',
      letterSpacing: '0.02em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '2rem',
      letterSpacing: '0.01em',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.25rem',
    },
    body1: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ].join(','),
      fontSize: '1rem',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ].join(','),
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 500,
      letterSpacing: '0.1em',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ].join(','),
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          fontSize: '0.875rem',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
