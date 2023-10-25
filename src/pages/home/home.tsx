import {FunctionComponent} from 'react'

import FeaturedCard from '../../components/featuredCard.tsx'
import {Grid, Paper} from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InterestsCarousel from './components/interestsCarousel.tsx'

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const paperStyles = {
        borderRadius:0,
        height: '60vh',
        marginTop: '100px',
        borderTop: '1px solid rgba(0, 0, 0, 0.2)', // Soft top border
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)', // Soft bottom border
    };

    return (
        <>

            <Container maxWidth={'lg'}>
                <Box sx={{marginTop: '100px'}}>
                    <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
                            <FeaturedCard
                                buttonTitle={'Ask your question'}
                                content={'Welcome! feel free to ask any question you might have.'}
                                image={'src/assets/images/contact_1.jpg'}
                                title={'Contact'}
                                link={'/contact'}
                            />
                            <FeaturedCard
                                buttonTitle={'Look at project'}
                                content={'Check out this project i made for the course datamanipulation'}
                                image={'src/assets/images/code.jpg'}
                                title={'Project 1'}
                                link={'/experience'}
                            />
                            <FeaturedCard
                                buttonTitle={'Learn more'}
                                content={'Want to learn more about me? check out my interests page'}
                                image={'src/assets/images/forest_1.jpg'}
                                title={'Personal interests'}
                                link={'/interests'}
                            />
                    </Grid>
                </Box>
            </Container>
            <Box
                sx={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("src/assets/images/forest_2.jpg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%', // Set the width to 100% of the viewport width
                    height: '40vh', // Set the height to 60% of the viewport height (adjust as needed)
                    marginTop: '100px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'Left',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    paddingLeft: '8vw',

                }}
            >

                    <h2>
                        Download my resume here!
                    </h2>
                    <Button href="src/assets/files/CV_FelixBastijns.pdf"
                            download="CV_FelixBastijns.pdf"
                            sx={{marginLeft:3}}
                            variant="contained">
                        Download
                    </Button>



            </Box>

            <Paper elevation={0} sx={paperStyles}>
                <InterestsCarousel/>
            </Paper>


        </>
    )
}

export default Home
