import { Button, Card, CardActions, CardContent, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ItemInfo from "./ItemInfo";

export default function Featured() {
    return(
        <Box m={3}>
            <Typography mb={2} variant="h3">Featured Article</Typography>
            <Card  sx={{display: 'flex', justifyContent: "space-between", flexDirection: "row"}}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography variant="h4">Dudo</Typography>
                        <Typography align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod erat id lectus ultrices, ac lobortis felis placerat. Quisque faucibus hendrerit finibus. Etiam quis mauris velit. Quisque eros mi, volutpat ut urna vitae, condimentum varius elit. Pellentesque a placerat justo. Praesent scelerisque, ante in aliquet faucibus, ex sapien maximus quam, faucibus iaculis tellus mauris vitae odio. Morbi ante leo, placerat ac nunc vel, fringilla hendrerit est. Cras nisi lorem, bibendum a feugiat quis, dignissim auctor lorem. Proin tempor porttitor ultricies. Praesent placerat vitae risus et fringilla. Duis commodo sed libero id cursus. Donec sit amet feugiat eros, imperdiet congue augue.

Aenean pharetra nisi sed hendrerit venenatis. Aliquam aliquet rutrum ornare. In vel massa ligula. Mauris viverra fermentum consequat. Donec lacinia dapibus purus ac bibendum. Proin feugiat convallis dui, ullamcorper vehicula nisl vestibulum at. Suspendisse potenti. Etiam vulputate neque viverra nisl viverra congue. Morbi posuere leo elit, eu dapibus urna fermentum a. Nullam orci nunc, mattis non libero in, efficitur fringilla nibh. Ut ut ante sapien. Ut consequat enim lacinia, viverra lacus placerat, accumsan augue. Praesent nec risus et sem convallis mollis. Nullam luctus turpis sit amet felis semper, sed fringilla magna mattis.
nec mollis consequat lorem ac elementum. Duis na. Praesent tristique mi at orci ultricies, vel posuere libero euismod. Aliquam lobortis malesuada eros, eu pretium magna. Vivamus venenatis, velit pulvinar tempor convallis, turpis lorem feugiat odio, in tempor nisi urna ac ipsum. Integer eu augue non sapien ultricies pharetra. Aliquam nisl dui, pellentesque sit amet scelerisque eu, convallis eget magna. Nullam auctor blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dictum neque eu erat dapibus ornare. Nulla rhoncus eleifend enim vitae tincidunt.</Typography>
                    </CardContent>
                    <CardActions sx={{alignSelf: "end"}}>
                        <Button sx={{margin: 1}} variant="outlined" size="medium">MORE</Button>
                    </CardActions>
                </Box>
                <CardContent>
                    <ItemInfo/>
                </CardContent>
            </Card>
        </Box>
    )
}