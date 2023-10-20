import {FunctionComponent} from 'react'
import {TextField} from '@mui/material'

interface MultilineTextboxProps {
    label: string
    placeholder: string
}

const MultilineTextbox: FunctionComponent<MultilineTextboxProps> = ({placeholder, label}) => {
    return (
        <TextField
            fullWidth
            sx={{marginTop:2}}
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={4}
            placeholder={placeholder}
        />
    )
}

export default MultilineTextbox
