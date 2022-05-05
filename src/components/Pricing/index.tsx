
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import claroVideoImg from './claro-video.svg';
import discoveryPlusImg from './discoveryplus.svg';
import nowImg from './now.svg';
import { Divider } from '@mui/material';

const tiers = [
  {
    title: '250 MEGA',
    price: '99',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Assinar',
    buttonVariant: 'outlined',
  },
  {
    title: '350 MEGA',
    subheader: 'Mais popular',
    price: '129',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Assinar',
    buttonVariant: 'contained',
  },
  {
    title: '500 MEGA',
    price: '139',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Assinar',
    buttonVariant: 'outlined',
  },
];
const Bd = () => <strong>Com o Claro Box</strong>

const PricingContent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid container spacing={5} alignItems="flex-end" sx={{ mb: 7 }}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === '350 MEGA' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: '#F23838',
                  }}
                />
                <CardContent>
                  
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >

                  <Typography component={'h2'} variant='body1'>Acesso aos apps de conteúdo</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Travis Howard" src={discoveryPlusImg} />
                    <Avatar alt="Cindy Baker" src={nowImg} />
                    <Avatar alt="Remy Sharp" src={claroVideoImg} />
                    <Avatar alt="Cindy Baker">+2</Avatar>
                  </Stack>
                  
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    Wi-Fi grátis dentro e fora de casa.
                  </Box>
                  
                  <Divider />
                  <Typography component={'h2'} variant='body1'>A partir de:</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}
                  >
                    <Typography component="h2" variant="h4" color="text.primary">
                      R${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      ,99/m
                    </Typography>
                  </Box>
                  <Typography component={'h2'} variant='body1'>{tier.title === '350 MEGA' ? <Bd /> : 'Valor individual'}</Typography>

                </CardContent>
                <CardActions>
                  <Button
                  onClick={() => navigate('/cadastro')}
                    fullWidth
                    sx={{ 
                      borderColor: '#F2B441',
                      backgroundColor: '#F2B441',
                      borderRadius: 5,
                      width: 150,
                      color: '#000000',
                      "&:hover": {
                        borderColor: '#F2B441',
                        backgroundColor: '#f09905'
                      }
                   }}
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </React.Fragment>
  );
}

export default PricingContent;