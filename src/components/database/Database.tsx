import React, { useState } from 'react';
import { PageContainer } from '../common/PageContainer';
import {
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Tabs,
    Tab,
    Chip,
    Stack
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import InventoryIcon from '@mui/icons-material/Inventory';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { ItemDatabase } from './ItemDatabase';
import { SkillDatabase } from './SkillDatabase';
import { OtherDatabase } from './OtherDatabase';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`database-tabpanel-${index}`}
            aria-labelledby={`database-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export const Database: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const databaseCategories = [
        {
            title: 'アイテム',
            icon: <InventoryIcon />,
            description: '武器・防具・アクセサリー・コスチューム・タリスマンのデータベース',
            status: '利用可能',
            color: 'success'
        },
        {
            title: 'スキル',
            icon: <AutoFixHighIcon />,
            description: '全職業のスキル情報とスキルツリー',
            status: '利用可能',
            color: 'success'
        },
        {
            title: '種族',
            icon: <PersonIcon />,
            description: 'プレイ可能な種族の情報とステータス',
            status: '利用可能',
            color: 'success'
        },
        {
            title: 'タイトル',
            icon: <EmojiEventsIcon />,
            description: 'ゲーム内タイトルとその効果',
            status: '利用可能',
            color: 'success'
        }
    ];

    return (
        <PageContainer
            title="データベース"
            icon={<StorageIcon sx={{ fontSize: 32 }} />}
        >
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="データベースタブ">
                        <Tab label="概要" />
                        <Tab label="アイテム" />
                        <Tab label="スキル" />
                        <Tab label="その他" />
                    </Tabs>
                </Box>

                <TabPanel value={tabValue} index={0}>
                    <Typography variant="h6" gutterBottom>
                        データベース機能について
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Rohan Calculatorのデータベースでは、ゲーム内の各種データを検索・閲覧することができます。
                    </Typography>

                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        {databaseCategories.map((category, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 3
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                {category.icon}
                                                <Typography variant="h6">
                                                    {category.title}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" color="text.secondary">
                                                {category.description}
                                            </Typography>
                                            <Chip
                                                label={category.status}
                                                size="small"
                                                color={category.color as any}
                                                variant="outlined"
                                            />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <ItemDatabase />
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                    <SkillDatabase />
                </TabPanel>

                <TabPanel value={tabValue} index={3}>
                    <OtherDatabase />
                </TabPanel>
            </Box>
        </PageContainer>
    );
};

export default Database;