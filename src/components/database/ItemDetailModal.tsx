import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
    BaseOptionsSection,
    ItemMetadataSections,
    ItemSummarySection,
    LevelOptionsSection,
    RaceOptionsSection,
    RelatedItemsSection,
} from './ItemDetailSections';
import { getRelatedItems, ItemDetailItem } from './itemDetailHelpers';

interface ItemDetailModalProps {
    open: boolean;
    onClose: () => void;
    item: ItemDetailItem | null;
    allItems?: ItemDetailItem[];
    onItemClick?: (item: ItemDetailItem) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
    open,
    onClose,
    item,
    allItems = [],
    onItemClick,
}) => {
    if (!item) return null;

    const relatedItems = getRelatedItems(item, allItems);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">
                    {item.name}
                </Typography>
                <Button onClick={onClose} color="inherit" size="small">
                    <CloseIcon />
                </Button>
            </DialogTitle>

            <DialogContent>
                <Stack spacing={3}>
                    <ItemSummarySection item={item} />
                    <ItemMetadataSections item={item} />

                    {'fixedBaseOptions' in item && (
                        <BaseOptionsSection options={item.fixedBaseOptions} title="固定オプション" />
                    )}

                    {'enchantableBaseOptions' in item && (
                        <LevelOptionsSection
                            options={item.enchantableBaseOptions}
                            title="エンチャント効果"
                            setLabel={(level) => `レベル ${level}`}
                            color="primary"
                        />
                    )}

                    <RaceOptionsSection item={item} />

                    {'synergyOptions' in item && (
                        <LevelOptionsSection
                            options={item.synergyOptions}
                            title="シナジー効果"
                            setLabel={(setCount) => `${setCount}セット効果`}
                            color="secondary"
                        />
                    )}

                    <RelatedItemsSection relatedItems={relatedItems} onItemClick={onItemClick} />
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="primary">
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ItemDetailModal;
