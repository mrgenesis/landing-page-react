import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import RootPage from './pages/Root';

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