import {FunctionComponent} from 'react'
import {ListItem, ListItemAvatar, ListItemText} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import {blue} from '@mui/material/colors'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import GitIcon from '@mui/icons-material/GitHub'

interface ContactDetailsListItemProps {
    content: string
type:number
}

const ContactDetailsListItem: FunctionComponent<ContactDetailsListItemProps> = ({content,type}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[600]}}>
                    {type===1?<PhoneIcon />:type===2?<MailIcon />:<GitIcon />}
                </Avatar>
            </ListItemAvatar>
            <ListItemText>
                {content}
            </ListItemText>
        </ListItem>
    )
}

export default ContactDetailsListItem
