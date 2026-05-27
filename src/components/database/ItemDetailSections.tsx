import React from 'react';
import {
    Box,
    CardMedia,
    Chip,
    Divider,
    Stack,
    Typography,
} from '@mui/material';

import {
    getCategoryDisplayName,
    getWeaponTypeDisplayName,
} from './itemDatabaseData';
import {
    getOptionDisplayName,
    getRaceDisplayName,
    ItemDetailItem,
} from './itemDetailHelpers';

interface ItemSummarySectionProps {
    item: ItemDetailItem;
}

export const ItemSummarySection: React.FC<ItemSummarySectionProps> = ({ item }) => (
    <>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 80, height: 80, objectFit: 'contain' }}
                image={item.icon}
                alt={item.name}
            />
            <Box>
                <Typography variant="h6">{item.name}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Chip
                        label={getCategoryDisplayName(item.category)}
                        color="primary"
                        variant="outlined"
                    />
                    {'type' in item && item.type && (
                        <Chip
                            label={getWeaponTypeDisplayName(item.type)}
                            color="secondary"
                            variant="outlined"
                        />
                    )}
                </Box>
            </Box>
        </Box>

        <Divider />
    </>
);

interface BaseOptionsSectionProps {
    options: Record<string, number> | undefined;
    title: string;
}

export const BaseOptionsSection: React.FC<BaseOptionsSectionProps> = ({ options, title }) => {
    if (!options || Object.keys(options).length === 0) return null;

    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {Object.entries(options).map(([key, value]) => (
                    <Chip
                        key={key}
                        label={getOptionDisplayName(key, value)}
                        size="small"
                        color={value > 0 ? 'success' : 'default'}
                        variant="outlined"
                    />
                ))}
            </Box>
        </Box>
    );
};

interface LevelOptionsSectionProps {
    options: Record<number, Record<string, number>> | undefined;
    title: string;
    setLabel: (level: string) => string;
    color: 'primary' | 'secondary';
}

export const LevelOptionsSection: React.FC<LevelOptionsSectionProps> = ({
    options,
    title,
    setLabel,
    color,
}) => {
    if (!options || Object.keys(options).length === 0) return null;

    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
                {title}
            </Typography>
            <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                {Object.entries(options).map(([level, effects]) => (
                    <Box key={level} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            {setLabel(level)}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                            {Object.entries(effects).map(([key, value]) => (
                                <Chip
                                    key={key}
                                    label={getOptionDisplayName(key, value)}
                                    size="small"
                                    color={color}
                                    variant="outlined"
                                    sx={{ fontSize: '0.7rem' }}
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

interface RaceOptionsSectionProps {
    item: ItemDetailItem;
}

export const RaceOptionsSection: React.FC<RaceOptionsSectionProps> = ({ item }) => {
    if (!('raceBaseOptions' in item) || !item.raceBaseOptions) return null;

    return (
        <Box>
            <Typography variant="subtitle2" gutterBottom>
                種族別オプション
            </Typography>
            {Object.entries(item.raceBaseOptions).map(([race, options]) => (
                <Box key={race} sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                        {race}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                        {Object.entries(options).map(([key, value]) => (
                            <Chip
                                key={key}
                                label={getOptionDisplayName(key, value)}
                                size="small"
                                color="info"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

interface ItemMetadataSectionsProps {
    item: ItemDetailItem;
}

export const ItemMetadataSections: React.FC<ItemMetadataSectionsProps> = ({ item }) => (
    <>
        {item.availableRaces && (
            <Box>
                <Typography variant="subtitle2" gutterBottom>
                    使用可能種族
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.availableRaces.map((race) => (
                        <Chip
                            key={race}
                            label={getRaceDisplayName(race)}
                            size="small"
                            color="info"
                            variant="outlined"
                        />
                    ))}
                </Box>
            </Box>
        )}

        {item.sockets && (
            <Box>
                <Typography variant="subtitle2" gutterBottom>
                    ソケット数
                </Typography>
                <Chip
                    label={`${item.sockets} ソケット`}
                    color="warning"
                    variant="outlined"
                />
            </Box>
        )}

        {item.seriesName && (
            <Box>
                <Typography variant="subtitle2" gutterBottom>
                    シリーズ名
                </Typography>
                <Chip
                    label={item.seriesName}
                    color="info"
                    variant="outlined"
                />
            </Box>
        )}
    </>
);

interface RelatedItemsSectionProps {
    relatedItems: ItemDetailItem[];
    onItemClick?: (item: ItemDetailItem) => void;
}

export const RelatedItemsSection: React.FC<RelatedItemsSectionProps> = ({ relatedItems, onItemClick }) => {
    if (relatedItems.length === 0) return null;

    return (
        <Box>
            <Typography variant="subtitle2" gutterBottom>
                関連アイテム
            </Typography>
            <Stack spacing={1}>
                {relatedItems.map((relatedItem) => (
                    <Box
                        key={`${relatedItem.category}-${relatedItem.id}`}
                        onClick={() => onItemClick?.(relatedItem)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            p: 1,
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 1,
                            cursor: onItemClick ? 'pointer' : 'default',
                            '&:hover': onItemClick ? {
                                backgroundColor: 'action.hover'
                            } : {}
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={relatedItem.icon}
                            alt={relatedItem.name}
                            sx={{ width: 24, height: 24, objectFit: 'contain' }}
                        />
                        <Typography variant="body2" sx={{ flexGrow: 1 }}>
                            {relatedItem.name}
                        </Typography>
                        <Chip
                            label={getCategoryDisplayName(relatedItem.category)}
                            size="small"
                            variant="outlined"
                        />
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};
