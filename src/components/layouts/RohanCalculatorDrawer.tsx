import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom";

interface DrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export const RohanCaluculatorDrawer: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {
    const navigator = useNavigate();

    const menuItems = [
        ['Status', '/'],
        ['Skill', '/skill'],
        ['Stats', '/stats'],
        ['Costume', '/costume'],
        ['Config', '/config'],
        ['Database', '/database']
    ];

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <List>
                {menuItems.map(([displayName, path]) => (
                    <ListItem key={displayName} disablePadding>
                        <ListItemButton onClick={(event) => { navigator(path); toggleDrawer(false)(event) }}>
                            <ListItemText primary={displayName} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
export default RohanCaluculatorDrawer;