import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface PageHeaderProps {
    title: string;
    icon?: React.ReactNode;
    subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, icon, subtitle }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: theme.palette.background.paper,
                borderBottom: `1px solid ${theme.palette.divider}`,
                py: 3,
                mb: 3
            }}
        >
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box display="flex" alignItems="center" sx={{ mb: subtitle ? 1 : 0 }}>
                    {icon && (
                        <Box sx={{ mr: 1, color: theme.palette.primary.main }}>
                            {icon}
                        </Box>
                    )}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.primary.main,
                            textAlign: 'center'
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                {subtitle && (
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ textAlign: 'center' }}
                    >
                        {subtitle}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default PageHeader;