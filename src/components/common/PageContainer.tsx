import React from 'react';
import { Box, Container } from '@mui/material';
import { PageHeader } from './PageHeader';

interface PageContainerProps {
    title: string;
    icon?: React.ReactNode;
    subtitle?: string;
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const PageContainer: React.FC<PageContainerProps> = ({
    title,
    icon,
    subtitle,
    children,
    maxWidth = 'xl'
}) => {
    return (
        <Box sx={{ width: "100vw", paddingTop: "80px" }}>
            <PageHeader title={title} icon={icon} subtitle={subtitle} />
            <Container maxWidth={maxWidth}>
                {children}
            </Container>
        </Box>
    );
};

export default PageContainer;