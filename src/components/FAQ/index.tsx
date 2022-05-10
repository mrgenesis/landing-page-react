import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { uid } from '../../commun/utils/uid';
import { questions } from './questions';

export default function FAQ() {
  return (
    <div>
      <Typography component={'h2'} variant='h4'>Perguntas frequentes</Typography>
      {questions.map(item => {
        return (
          <Accordion key={uid()}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='h6'>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
      
    </div>
  );
}
