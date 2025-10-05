import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export const Config: React.FC = () => {
    return (
        <PageContainer
            title="設定"
            icon={<SettingsIcon sx={{ fontSize: 32 }} />}
        >
            <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                    設定機能は現在開発中です
                </Typography>
            </Box>
        </PageContainer>
    );
};

export default Config;