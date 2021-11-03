import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './ItemCard.css'

export default function ItemCard(props) {
    const title = (
        <Typography variant='h5' component='div'>
            {props.name}
        </Typography>
    )
    
    const description = (
        <Typography variant='p' component='div'>
            {props.description}
        </Typography>
    )

    return (
        <Box>
            <Card sx={{minWidth: 255, maxWidth: 500, minHeight: 400}}>
                <CardContent sx={{minHeight:60}}>
                    {title}
                </CardContent>
                <CardMedia
                        component="img"
                        sx={{objectFit: "contain", objectPosition: "50% 30%"}}
                        style={{height: 140, bottom: 0, display: "table-cell"}}
                        src={props.image}
                        alt="dark overlord"
                />
                <CardContent>
                    {description}
                </CardContent>
                <CardActions sx={{alignSelf: "end"}}>
                    <Button size="small">MORE</Button>
                </CardActions>
            </Card>
        </Box>
    )
}