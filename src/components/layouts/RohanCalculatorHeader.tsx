import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
interface HeaderProps {
    open: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const RohanCalculatorHeader: React.FC<HeaderProps> = ({ open, toggleDrawer }) => {
    return (
        <Box sx={{ flexGrow: 1, width: "100%" }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={toggleDrawer(!open)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Rohan Calucator
                    </Typography>
                    <IconButton
                        size="large"
                        color="inherit"
                        href="https://github.com/rama460/rohan-calculator"
                    >
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default RohanCalculatorHeader;