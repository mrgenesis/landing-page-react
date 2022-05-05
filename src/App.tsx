import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import RootPage from './pages/Root';

// Um teste para verificar que as variáveis estão sendo definidas corretamente.
console.log('REACT_APP_TEST', process.env.REACT_APP_TEST);

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <RootPage />
    </Box>
  );
}