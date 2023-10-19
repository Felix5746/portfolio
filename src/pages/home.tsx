import {FunctionComponent} from 'react'

import FeaturedCard from '../components/featuredCard.tsx'
import {Grid} from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <Container maxWidth={'lg'}>

            </Container>

            <Container maxWidth={'lg'}>
                <Box sx={{marginTop: '100px'}}>
                    <Grid container spacing={2}>
                        {/* FeaturedCard 1 */}
                        <Grid item xs={4}>
                            <FeaturedCard
                                buttonTitle={'Ask your question'}
                                content={'Welcome! feel free to ask any question you might have.'}
                                image={'src/assets/images/it_2.jpg'}
                                title={'Contact'}
                            />
                        </Grid>

                        {/* FeaturedCard 2 */}
                        <Grid item xs={4}>
                            <FeaturedCard
                                buttonTitle={'Look at project'}
                                content={'Check out this project i made for the course datamanipulation'}
                                image={'src/assets/images/code.jpg'}
                                title={'Project 1'}
                            />
                        </Grid>

                        {/* FeaturedCard 3 */}
                        <Grid item xs={4}>
                            <FeaturedCard
                                buttonTitle={'Learn more'}
                                content={'Want to learn more about me? check out my interests page'}
                                image={'src/assets/images/forest_1.jpg'}
                                title={'Personal interests'}
                            />
                        </Grid>
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
                    height: '60vh', // Set the height to 100% of the viewport height
                    marginTop: '100px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
                }}
            >

            </Box>


            <Container maxWidth={'lg'}>
                <Box sx={{marginTop: '100px'}}>
                    <Grid container spacing={2}>
                        {/* FeaturedCard 1 */}
                        <Grid item xs={4}>
                            <FeaturedCard
                                buttonTitle={'Ask your question'}
                                content={'Welcome! feel free to ask any question you might have.'}
                                image={'src/assets/images/it_2.jpg'}
                                title={'Contact'}
                            />
                        </Grid>

                        {/* FeaturedCard 2 */}
                        <Grid item xs={4}>
                            <FeaturedCard
                                buttonTitle={'Look at project'}
                                content={'Check out this project i made for the course datamanipulation'}
                                image={'src/assets/images/code.jpg'}
                                title={'Project 1'}
                            />
                        </Grid>

                        {/* FeaturedCard 3 */}
                        <Grid item xs={4}>
                            <FeaturedCard
                                buttonTitle={'Learn more'}
                                content={'Want to learn more about me? check out my interests page'}
                                image={'src/assets/images/forest_1.jpg'}
                                title={'Personal interests'}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Home
