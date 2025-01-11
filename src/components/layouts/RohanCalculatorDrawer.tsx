import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

interface DrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export const RohanCaluculatorDrawer: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {
    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <List>
                {['Status', 'Skill', 'Stats', 'Config', 'Database'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
export default RohanCaluculatorDrawer;