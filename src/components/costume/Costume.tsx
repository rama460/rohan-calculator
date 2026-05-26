import React from 'react';
import {
    Box,
    Tabs,
    Tab,
} from '@mui/material';

import { PageContainer } from '../common/PageContainer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { CostumeItemTable } from './CostumeItemTable';
import {
    displayCostumes,
    displayEarrings,
    displayGlasses,
    displayHats,
} from './costumeData';
import { SeriesComparisonTable } from './SeriesComparisonTable';
import { ParameterComparisonTable } from './ParameterComparisonTable';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`costume-tabpanel-${index}`}
            aria-labelledby={`costume-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

export const Costume: React.FC = () => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <PageContainer
            title="コスチューム装備"
            icon={<CheckroomIcon sx={{ fontSize: 32 }} />}
        >
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="costume tabs">
                        <Tab label="コスチューム" id="costume-tab-0" />
                        <Tab label="メガネ" id="costume-tab-1" />
                        <Tab label="イヤリング" id="costume-tab-2" />
                        <Tab label="帽子" id="costume-tab-3" />
                        <Tab label="シリーズ合計" id="costume-tab-4" />
                        <Tab label="シリーズ比較" id="costume-tab-5" />
                    </Tabs>
                </Box>

                <TabPanel value={tabValue} index={0}>
                    <CostumeItemTable items={displayCostumes} categoryName="costume" />
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <CostumeItemTable items={displayGlasses} categoryName="glasses" />
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                    <CostumeItemTable items={displayEarrings} categoryName="earrings" />
                </TabPanel>

                <TabPanel value={tabValue} index={3}>
                    <CostumeItemTable items={displayHats} categoryName="hats" />
                </TabPanel>

                <TabPanel value={tabValue} index={4}>
                    <SeriesComparisonTable />
                </TabPanel>

                <TabPanel value={tabValue} index={5}>
                    <ParameterComparisonTable />
                </TabPanel>
            </Box>
        </PageContainer>
    );
};

export default Costume;
