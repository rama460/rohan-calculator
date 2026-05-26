import React from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import {
    getCategoryDisplayName,
    getRaceDisplayName,
    getWeaponTypeDisplayName,
    ItemDatabaseItem,
} from './itemDatabaseData';

interface ItemDatabaseViewProps {
    items: ItemDatabaseItem[];
    compareItems: ItemDatabaseItem[];
    compareMode: boolean;
    onItemSelect: (item: ItemDatabaseItem) => void;
}

const isSelectedForCompare = (item: ItemDatabaseItem, compareItems: ItemDatabaseItem[]) =>
    compareItems.some(compareItem => compareItem.id === item.id && compareItem.category === item.category);

export const ItemCardView: React.FC<ItemDatabaseViewProps> = ({
    items,
    compareItems,
    compareMode,
    onItemSelect,
}) => (
    <Grid container spacing={2}>
        {items.map((item) => {
            const selected = isSelectedForCompare(item, compareItems);

            return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={`${item.category}-${item.id}`}>
                    <Card
                        onClick={() => onItemSelect(item)}
                        sx={{
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            border: compareMode && selected ? 2 : 1,
                            borderColor: compareMode && selected ? 'primary.main' : 'divider',
                            position: 'relative',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: 3
                            }
                        }}
                    >
                        {compareMode && (
                            <Box sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}>
                                {selected ? (
                                    <CheckBoxIcon color="primary" />
                                ) : (
                                    <CheckBoxOutlineBlankIcon />
                                )}
                            </Box>
                        )}
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <CardMedia
                                    component="img"
                                    image={item.icon}
                                    alt={item.name}
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        objectFit: 'contain',
                                        backgroundColor: 'grey.100',
                                        borderRadius: 1,
                                        flexShrink: 0
                                    }}
                                />
                                <Typography variant="h6" component="h3" sx={{ fontSize: '0.9rem', flexGrow: 1 }}>
                                    {item.name}
                                </Typography>
                            </Box>

                            <Stack spacing={1}>
                                <Chip
                                    label={getCategoryDisplayName(item.category)}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                />

                                {'type' in item && item.type && (
                                    <Chip
                                        label={getWeaponTypeDisplayName(item.type)}
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                    />
                                )}

                                {item.availableRaces && (
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">
                                            使用可能種族:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                            {item.availableRaces.slice(0, 3).map((race) => (
                                                <Chip
                                                    key={race}
                                                    label={getRaceDisplayName(race)}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{ fontSize: '0.7rem', height: 20 }}
                                                />
                                            ))}
                                            {item.availableRaces.length > 3 && (
                                                <Typography variant="caption" color="text.secondary">
                                                    +{item.availableRaces.length - 3}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            );
        })}
    </Grid>
);

export const ItemListView: React.FC<ItemDatabaseViewProps> = ({
    items,
    compareItems,
    compareMode,
    onItemSelect,
}) => (
    <List>
        {items.map((item) => {
            const selected = isSelectedForCompare(item, compareItems);

            return (
                <ListItem
                    key={`${item.category}-${item.id}`}
                    onClick={() => onItemSelect(item)}
                    sx={{
                        cursor: 'pointer',
                        border: compareMode && selected ? 2 : 1,
                        borderColor: compareMode && selected ? 'primary.main' : 'divider',
                        borderRadius: 1,
                        mb: 1,
                        '&:hover': {
                            backgroundColor: 'action.hover'
                        }
                    }}
                    secondaryAction={
                        compareMode ? (
                            selected ? (
                                <CheckBoxIcon color="primary" />
                            ) : (
                                <CheckBoxOutlineBlankIcon />
                            )
                        ) : null
                    }
                >
                    <ListItemAvatar>
                        <Avatar
                            src={item.icon}
                            alt={item.name}
                            sx={{ width: 40, height: 40, backgroundColor: 'grey.100' }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                <Chip
                                    label={getCategoryDisplayName(item.category)}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                />
                                {'type' in item && item.type && (
                                    <Chip
                                        label={getWeaponTypeDisplayName(item.type)}
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                    />
                                )}
                                {item.availableRaces && item.availableRaces.length > 0 && (
                                    <Chip
                                        label={`${item.availableRaces.length}種族対応`}
                                        size="small"
                                        variant="outlined"
                                    />
                                )}
                            </Box>
                        }
                    />
                </ListItem>
            );
        })}
    </List>
);

export const ItemTableView: React.FC<ItemDatabaseViewProps> = ({
    items,
    compareItems,
    compareMode,
    onItemSelect,
}) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    {compareMode && <TableCell>選択</TableCell>}
                    <TableCell>アイコン</TableCell>
                    <TableCell>名前</TableCell>
                    <TableCell>カテゴリ</TableCell>
                    <TableCell>タイプ</TableCell>
                    <TableCell>対応種族数</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item) => {
                    const selected = isSelectedForCompare(item, compareItems);

                    return (
                        <TableRow
                            key={`${item.category}-${item.id}`}
                            onClick={() => onItemSelect(item)}
                            sx={{
                                cursor: 'pointer',
                                backgroundColor: compareMode && selected ? 'action.selected' : 'inherit',
                                '&:hover': {
                                    backgroundColor: 'action.hover'
                                }
                            }}
                        >
                            {compareMode && (
                                <TableCell>
                                    {selected ? (
                                        <CheckBoxIcon color="primary" />
                                    ) : (
                                        <CheckBoxOutlineBlankIcon />
                                    )}
                                </TableCell>
                            )}
                            <TableCell>
                                <Avatar
                                    src={item.icon}
                                    alt={item.name}
                                    sx={{ width: 32, height: 32, backgroundColor: 'grey.100' }}
                                />
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <Chip
                                    label={getCategoryDisplayName(item.category)}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                />
                            </TableCell>
                            <TableCell>
                                {'type' in item && item.type ? (
                                    <Chip
                                        label={getWeaponTypeDisplayName(item.type)}
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                    />
                                ) : '-'}
                            </TableCell>
                            <TableCell>
                                {item.availableRaces ? item.availableRaces.length : '全種族'}
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </TableContainer>
);
