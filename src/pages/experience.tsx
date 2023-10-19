import {FunctionComponent, useState} from 'react'
import Box from '@mui/material/Box'
import {Grid} from '@mui/material'
import Container from '@mui/material/Container'
import ProjectCard from '../components/projectCard.tsx'


interface ExperienceProps {

}
const cardData = [
    {
        id:0,
        buttonTitle: 'Look at project',
        content: 'Check out this project I made for the course datamanipulation',
        image: 'src/assets/images/it_1.jpg',
        title: 'Project 1',
    },
    {
        id:1,
        buttonTitle: 'Look at project',
        content: 'Check out this project I made for the course datamanipulation',
        image: 'src/assets/images/code.jpg',
        title: 'Project 2',
    },
    {
        id:2,
        buttonTitle: 'Look at project',
        content: 'Check out this project I made for the course datamanipulation',
        image: 'src/assets/images/it_2.jpg',
        title: 'Project 3',
    },

];
const Experience: FunctionComponent<ExperienceProps> = () => {
    const [currentItem, setCurrentItem] = useState<number>(1);

    const changeSelection = (id:number) => {
        setCurrentItem(id)

    }


    return (
        <div>
            <Container maxWidth={'lg'}>
                <Box>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop={10} marginBottom={10}>
                        {cardData.map((card) => (
                            <Grid item xs={12} sm={10} md={9} lg={4} key={card.id} marginTop={2} marginBottom={2}>
                                <div className={card.id !== currentItem ? 'small-card' : 'big-card'}>
                                    <ProjectCard
                                        buttonTitle={card.buttonTitle}
                                        content={card.content}
                                        image={card.image}
                                        title={card.title}
                                        setItem={changeSelection}
                                        id={card.id}
                                        active={card.id === currentItem}
                                    />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Experience
