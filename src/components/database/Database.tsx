import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { Typography, Box } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';

export const Database: React.FC = () => {
    return (
        <PageContainer
            title="データベース"
            icon={<StorageIcon sx={{ fontSize: 32 }} />}
        >
            <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                    データベース機能は現在開発中です
                </Typography>
            </Box>
        </PageContainer>
    );
};

export default Database;