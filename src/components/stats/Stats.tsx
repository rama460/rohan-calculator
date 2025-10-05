import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { Typography, Box } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

export const Stats: React.FC = () => {
    return (
        <PageContainer
            title="詳細統計"
            icon={<BarChartIcon sx={{ fontSize: 32 }} />}
        >
            <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                    詳細統計機能は現在開発中です
                </Typography>
            </Box>
        </PageContainer>
    );
};

export default Stats;