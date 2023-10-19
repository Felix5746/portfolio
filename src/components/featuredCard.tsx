import {FunctionComponent} from 'react'
import {Card, CardActions, CardContent, CardMedia} from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface FeaturedCardProps {
    image: string,
    title: string,
    content: string
    buttonTitle: string
}

const FeaturedCard: FunctionComponent<FeaturedCardProps> = ({image, title, content, buttonTitle}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button size="large">{buttonTitle}</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default FeaturedCard
