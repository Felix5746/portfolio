import {FunctionComponent} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import Box from '@mui/material/Box'

interface ResumeProps {

}

const Resume: FunctionComponent<ResumeProps> = () => {
    return (
        <div>
            <h1>Resume</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" alignItems="center">
                        {/* Image */}
                        <Box flex="50%" paddingRight={2}>

                            <img
                                src="/src/assets/images/keyboard.jpg" // Replace with your image path
                                alt="Accordion Image"
                                style={{ width: '100%', height: 'auto'}}
                            />

                        </Box>

                        {/* Text */}
                        <Box flex="50%">
                            <Typography variant="h6">Accordion 1</Typography>
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa dolorum ea eum expedita fugit illum ipsa ipsam, nemo nesciunt nihil odio, possimus quam quidem quis repellat, repudiandae saepe voluptates!</Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
        </div>    )
}

export default Resume
