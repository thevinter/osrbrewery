import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function Header() {

    const logo = (
        <Typography variant="h6" component="h1">
            OSRBREWERY
        </Typography>
    )


    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>{logo}</Toolbar>
            </AppBar>
        </Box>
    )
}