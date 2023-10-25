import {FunctionComponent} from 'react'
import {Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {NavLink} from 'react-router-dom'

interface FeaturedCardProps {
    image: string
    title: string
    content: string
    buttonTitle: string
    link: string
}

const FeaturedCard: FunctionComponent<FeaturedCardProps> = ({link, image, title, content, buttonTitle}) => {
    return (
        <Grid item xs={10} md={4} lg={4}>
            <Card>
                <CardMedia
                    sx={{ height: 300 }}
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
                    <NavLink to={link}>
                        <Button size="large">{buttonTitle}</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default FeaturedCard
