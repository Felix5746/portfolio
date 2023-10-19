import {FunctionComponent} from 'react'
import {Card, CardActions, CardContent, CardMedia} from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
    image: string,
    id: number
    title: string,
    content: string
    buttonTitle: string
    setItem: (id: number) => void
    active: boolean
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({active, image, id, title, content, buttonTitle, setItem}) => {

    return (
        <>
            <Card  onClick={() => setItem(id)}>
                <CardMedia
                    sx={{height: 300}}
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
                        {active && <Link target={'_blank'} to={'https://github.com/Felix5746'}><Button size="medium">{buttonTitle}</Button></Link>}
                        {!active && <Button size="medium">{buttonTitle}</Button>}
                    </CardActions>



            </Card>
        </>
    )
}

export default ProjectCard
