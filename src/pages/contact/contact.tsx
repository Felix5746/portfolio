import {FunctionComponent} from 'react'
import {Grid, List} from '@mui/material'
import Container from '@mui/material/Container'
import Textbox from './components/textbox.tsx'
import MultilineTextbox from './components/multilineTextbox.tsx'
import ContactElement from './components/contactElement.tsx'
import Button from '@mui/material/Button'
import ContactDetailsListItem from './components/contactDetailsListItem.tsx'

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={2}>
                <ContactElement width={7}>
                    <h2>Contact me</h2>
                    <Textbox label={'First name'} placeholder={'Enter your first name'}/>
                    <Textbox label={'Last name'} placeholder={'Enter your last name'}/>
                    <Textbox label={'Email'} placeholder={'Enter your Email'}/>
                    <MultilineTextbox label={'Message'} placeholder={'Enter your message here'}/>
                    <Button sx={{marginY: 2}} fullWidth variant="contained">Send</Button>
                </ContactElement>
                <Grid item spacing={2} xs={5} >
                <ContactElement width={12}>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <ContactDetailsListItem content={'0476 30 21 73'} type={1}/>
                        <ContactDetailsListItem content={'Felixbastijns@hotmail.com'} type={2}/>
                        <ContactDetailsListItem content={'My GitHub'} type={3}/>
                    </List>
                </ContactElement>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact
