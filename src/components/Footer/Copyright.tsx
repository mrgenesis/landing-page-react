
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://webservico.net/">
      Web Serviço
      </Link>{' '}
      {new Date().getFullYear()}{'.'}
    </Typography>
  );
}

export default Copyright;
