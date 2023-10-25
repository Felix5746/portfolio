import { FunctionComponent, useState} from 'react';
import { Grid } from '@mui/material';
import CarouselContent from './carouselContent.tsx';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import ArrowBack from '@mui/icons-material/ArrowBackIos';

interface InterestsCarouselProps {}

const InterestsCarousel: FunctionComponent<InterestsCarouselProps> = () => {
    const [loaded, setLoaded] = useState(true);
    const [currentContent, setCurrentContent] = useState(0);
    const [transitioning, setTransitioning] = useState(false); // Track transition status

    const contentData = [
        {
            image: 'src/assets/images/forest_1.jpg',
            title: 'Nature',
            content:
                'Ik ben iemand die graag de bossen intrekt voor een lange wandeling. Zeker na een hele dag programmeren merk ik dat dit heel verhelderend kan zijn en dat het mijn werk vaak ten goede komt. Zelfs vlakbij huis vind ik het iedere keer weer verbazend wat voor mooie stukken natuur we hier hebben.',
        },
        {
            image: 'src/assets/images/trial.jpg',
            title: 'Sport',
            content:
                'Naast wandelen in de natuur hou ik ook van lopen in de natuur. Het doet me goed om na een hele dag achter een bureau te zitten ook eens wat intensiever te bewegen. Het liefst loop ik lange afstanden en ga ik op zoek naar nieuwe en mooie plaatsen om te ontdekken. Door regelmatig te sporten merk ik dat ik alerter ben en veel meer energie heb.',
        },
        {
            image: 'src/assets/images/guitar.jpg',
            title: 'Music',
            content:
                'In mijn vrije tijd hou ik me graag bezig met het spelen en schrijven van muziek. Hierbij speel ik voornamelijk basgitaar. Het schrijven van een nummer lijkt voor mij erg op het schrijven van een programma. Verschillende onderdelen moeten op de juiste plaats en op de juiste manier uitgewerkt worden zodat het een mooi werkend geheel kan worden. Het zijn beide zeer creatieve processen maar tegelijk wiskundig en logisch opgebouwd.',
        },
    ];

    const carouselStyle = {
        transition: 'opacity 1s ease-in-out',
        opacity: loaded ? 1 : 0,
    };

    const handleForward = () => {
        if (!transitioning) {
            setTransitioning(true);
            changeContent((currentContent + 1) % contentData.length);
        }
    };

    const handleBack = () => {
        if (!transitioning) {
            setTransitioning(true);
            changeContent((currentContent - 1 + contentData.length) % contentData.length);
        }
    };

    const changeContent = (newContent: number) => {
        setLoaded(false);

        setTimeout(() => {
            setCurrentContent(newContent);
                setLoaded(true);
                setTimeout(() => {
                    setTransitioning(false); // Enable the buttons after both fade-in and fade-out transitions are complete
                }, 1000);
        }, 1000);
    };



    return (
        <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} sx={{ height: '60vh' }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} onClick={handleBack} style={{ cursor: 'pointer', opacity: transitioning ? 0.5 : 1 }}>
                <ArrowBack />
            </Grid>
            <Grid item xs={8} style={carouselStyle}>
                <CarouselContent
                    key={currentContent}
                    image={contentData[currentContent].image}
                    title={contentData[currentContent].title}
                    content={contentData[currentContent].content}
                />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} onClick={handleForward} style={{ cursor: 'pointer', opacity: transitioning ? 0.5 : 1 }}>
                <ArrowForward />
            </Grid>
        </Grid>
    );
};

export default InterestsCarousel;
