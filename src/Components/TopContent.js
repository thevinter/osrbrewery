import { CardContent, Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import ItemCard from './ItemCard';

export default function TopContent() {
    return (
        <Box>
            <Typography m={3} variant="h3">Top Content of the Week</Typography>
            <Box m={3} sx={{display: "flex", justifyContent: "space-between"}}>
                <ItemCard 
                    name="Dark Overlord of Destruction"
                    image="https://i.imgur.com/iiyB5kT.jpg"
                    description="this dark overlord is the biggest and baddest dude around"
                />
                <ItemCard 
                    name="Frog"
                    image="https://i.pinimg.com/originals/e7/b5/02/e7b502eebbf4cc75feecee345d06ac39.jpg"
                    description="The firercest enemy around. Be carefull or he will jump"
                />
                <ItemCard
                    name="A thing"
                    image="https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmSgmJM52CK7EdgzoHrgw9ooKsRL6w1dQPdYRpZA5r3VMe/Lurking%20Glutton%20111618.png"
                    description="like wtf is even this thing idk i made it up bla bla"
                />
            </Box>
        </Box>
    )
}