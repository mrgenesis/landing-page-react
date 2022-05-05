import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { uid } from '../../commun/utils/uid';

const FAQs = [
  { question: 'pergunta1', answer: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' },
  { question: 'pergunta2', answer: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' },
  { question: 'pergunta3', answer: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' },
  { question: 'pergunta4', answer: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' },
];
export default function FAQ() {
  return (
    <div>
      <Typography component={'h2'} variant='h4'>Perguntas frequentes</Typography>
      {FAQs.map(item => {
        return (
          <Accordion key={uid()}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.question}</Typography>
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
