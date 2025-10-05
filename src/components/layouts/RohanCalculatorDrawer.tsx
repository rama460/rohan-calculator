import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
    Box,
    Divider,
    useTheme,
    useMediaQuery,
    Chip,
    Tooltip
} from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';

interface DrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export const RohanCaluculatorDrawer: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {
    const navigator = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [
        {
            displayName: 'ステータス',
            path: '/',
            icon: <PersonIcon />,
            description: 'キャラクターのステータス計算',
            status: 'ready' as const
        },
        {
            displayName: 'スキル',
            path: '/skill',
            icon: <AutoFixHighIcon />,
            description: 'スキルツリーとビルドシミュレータ',
            status: 'ready' as const
        },
        {
            displayName: '統計',
            path: '/stats',
            icon: <BarChartIcon />,
            description: 'ステータス統計と分析',
            status: 'development' as const
        },
        {
            displayName: 'コスチューム',
            path: '/costume',
            icon: <CheckroomIcon />,
            description: 'コスチューム比較とシミュレーション',
            status: 'ready' as const
        },
        {
            displayName: '設定',
            path: '/config',
            icon: <SettingsIcon />,
            description: 'アプリケーション設定',
            status: 'development' as const
        },
        {
            displayName: 'データベース',
            path: '/database',
            icon: <StorageIcon />,
            description: 'アイテム・スキルデータベース',
            status: 'development' as const
        }
    ];

    const drawerWidth = isMobile ? 280 : 320;

    return (
        <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                }
            }}
        >
            <Box sx={{ overflow: 'auto', height: '100%' }}>
                {/* Header */}
                <Box sx={{
                    p: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white'
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        Rohan Calculator
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        キャラクター計算ツール
                    </Typography>
                </Box>

                <Divider />

                {/* Navigation Menu */}
                <List sx={{ pt: 1 }}>
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const isImplemented = item.status === 'ready';

                        return (
                            <ListItem key={item.displayName} disablePadding sx={{ px: 1 }}>
                                <Tooltip
                                    title={!isImplemented ? "この機能は開発中です" : ""}
                                    placement="right"
                                    arrow
                                >
                                    <Box sx={{ width: '100%' }}>
                                        <ListItemButton
                                            onClick={(event) => {
                                                if (isImplemented) {
                                                    navigator(item.path);
                                                    toggleDrawer(false)(event);
                                                }
                                            }}
                                            disabled={!isImplemented}
                                            sx={{
                                                borderRadius: 2,
                                                mb: 0.5,
                                                backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
                                                color: isActive ? 'white' : isImplemented ? 'inherit' : theme.palette.text.disabled,
                                                '&:hover': {
                                                    backgroundColor: isImplemented ? (isActive ? theme.palette.primary.dark : theme.palette.action.hover) : 'transparent',
                                                },
                                                '& .MuiListItemIcon-root': {
                                                    color: isActive ? 'white' : isImplemented ? theme.palette.text.secondary : theme.palette.text.disabled,
                                                },
                                                transition: 'all 0.2s ease-in-out',
                                                cursor: isImplemented ? 'pointer' : 'not-allowed',
                                                opacity: isImplemented ? 1 : 0.5
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 40 }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: !isMobile ? 0.5 : 0 }}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            fontWeight: isActive ? 'bold' : 'normal',
                                                            flex: 1
                                                        }}
                                                    >
                                                        {item.displayName}
                                                    </Typography>
                                                    <Chip
                                                        label={isImplemented ? "実装済み" : "開発中"}
                                                        size="small"
                                                        color={isImplemented ? "success" : "default"}
                                                        variant={isImplemented ? "filled" : "outlined"}
                                                        sx={{
                                                            fontSize: '0.65rem',
                                                            height: 20,
                                                            '& .MuiChip-label': {
                                                                px: 1
                                                            }
                                                        }}
                                                    />
                                                </Box>
                                                {!isMobile && (
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            fontSize: '0.75rem',
                                                            color: isActive ? 'rgba(255, 255, 255, 0.7)' : isImplemented ? theme.palette.text.secondary : theme.palette.text.disabled,
                                                            display: 'block'
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </ListItemButton>
                                    </Box>
                                </Tooltip>
                            </ListItem>
                        );
                    })}
                </List>

                {/* Footer */}
                <Box sx={{
                    mt: 'auto',
                    p: 2,
                    borderTop: `1px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.grey[50]
                }}>
                    <Typography variant="caption" color="text.secondary" align="center" display="block">
                        Version 1.0.0
                    </Typography>
                    <Typography variant="caption" color="text.secondary" align="center" display="block">
                        © 2025 Rohan Calculator
                    </Typography>
                </Box>
            </Box>
        </Drawer>
    )
}
export default RohanCaluculatorDrawer;