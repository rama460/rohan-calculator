import React, { useState } from 'react';
import { PageContainer } from '../common/PageContainer';
import {
    Box,
    Tabs,
    Tab
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
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

    return (
        <PageContainer
            title="データベース"
            icon={<StorageIcon sx={{ fontSize: 32 }} />}
        >
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="データベースタブ">
                        <Tab label="アイテム" />
                        <Tab label="スキル" />
                        <Tab label="その他" />
                    </Tabs>
                </Box>

                <TabPanel value={tabValue} index={0}>
                    <ItemDatabase />
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <SkillDatabase />
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                    <OtherDatabase />
                </TabPanel>
            </Box>
        </PageContainer>
    );
};

export default Database;