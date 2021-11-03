import { CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ItemInfo(){
    return (
        <Box sx={{width:300, display: 'flex', flexDirection: 'column'}}>
            <CardMedia
                component="img"
                sx={{ height: '100%', align: "center"}}
                image="https://wondering.monster/images/wondering-monster-aldrovandi.png"
                alt="a dude"
            />
            <CardContent>
                <Typography sx={{fontWeight: "bold"}}>HP: 1d6</Typography>
                <Typography sx={{fontWeight: "bold"}}>STR: 3</Typography>
                <Typography sx={{fontWeight: "bold"}}>Weapons:</Typography>
                <Typography > - Teeth (1d6)</Typography>
                <Typography > - Fists (1d4)</Typography>
                <Typography sx={{fontWeight: "bold"}}>Alignment: Neutral</Typography>
            </CardContent>
        </Box>
    )
}