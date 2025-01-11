import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
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
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default RohanCalculatorHeader;