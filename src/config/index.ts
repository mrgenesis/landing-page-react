
export const firebaseConsfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const tiers = [
  {
    title: '250 MEGA',
    price: '99',
    description: 'Internet de 250 mega instalação grátis',
    buttonText: 'Assinar',
    buttonVariant: 'outlined',
  },
  {
    title: '500 MEGA + TV Top',
    subheader: 'Mais popular',
    price: '189',
    description: 'Internet de 500 mega + TV Claro Box Top HD instalação grátis',
    buttonText: 'Assinar',
    buttonVariant: 'contained',
  },
  {
    title: '500 MEGA',
    price: '119',
    description: 'Internet de 500 mega instalação grátis',
    buttonText: 'Assinar',
    buttonVariant: 'outlined',
  },
];