
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

// import netVirtua from './net-virtua.webp';
import getTopImage from './getTopImage';
import { Button } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';


export default function Top() {
  const [viewPortSize, setViewPortSize] = useState(window.innerWidth);
  const [topImg, setTopImg] = useState(getTopImage(viewPortSize));
  useLayoutEffect(() => {
    function updateSize() {
      setViewPortSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  useEffect(() => {
    setTopImg(getTopImage(viewPortSize));
  }, [viewPortSize]);
  const navigate = useNavigate();
  return (
    <Box  
      sx={{ 
        backgroundImage: `url(${topImg})`, 
        height: '70vh', 
        width: '100%',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
      }}
      component="header"
    >
      <Button 
      onClick={() => navigate('/cadastro')}
      sx={{ 
        margin: '0 auto',
        position: 'absolute',
        left: '35%',
        top: '58vh',
        transform: 'translate(-50, -50)',
        backgroundColor: '#F2B441',
        borderRadius: 5,
        width: 150,
        color: '#000000',
        "&:hover": {
          'backgroundColor': '#f09905'
        }
      }}>
        Assine
      </Button>
    </Box>
  );
}

export {Top};