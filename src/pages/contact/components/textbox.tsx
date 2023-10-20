import {FunctionComponent} from 'react'
import {TextField} from '@mui/material'

interface TextboxProps {
    label: string
    placeholder: string

}

const Textbox: FunctionComponent<TextboxProps> = ({placeholder,label}) => {
    return (
        <TextField
            fullWidth
            sx={{marginTop:2}}
            required
            id="outlined-required-color"
            label={label}
            placeholder={placeholder}
        />

    )
}

export default Textbox
