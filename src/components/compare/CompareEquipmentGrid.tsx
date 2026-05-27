import React from "react";
import { Box, Typography } from "@mui/material";
import AppIconButton from "../common/IconButton";
import AppTooltip from "../common/Tooltip";
import EquipmentDialog from "../status/EquipmentDialog";
import EquipmentTooltipContent from "../status/EquipmentTooltipContent";
import { DefaultEquipmentTooltipContent } from "../status/DefaultEquipmentTooltipContent";
import anyBackground from "../../assets/backgrounds/any.png";
import type { EquipmentSlotKey } from "../../modules/character/constants";
import { equipmentSlotKeys } from "../../modules/character/constants";
import type { CharacterState } from "../../modules/character/types";
import { resolvedEquipmentToItem } from "../../modules/equipment";
import { normalizeEquipmentItem } from "../../modules/normalize";
import { resolveEquipment } from "../../modules/resolve";
import { compareEquipmentSlots } from "./compareEquipmentConfig";
import type { Item, ItemTemplate } from "../../static/items";
import { itemTemplates } from "../../static/items";

const templatesBySlot = itemTemplates as Record<EquipmentSlotKey, ItemTemplate[]>;

type CompareEquipmentGridProps = {
    title: string;
    character: CharacterState;
    onChange: (character: CharacterState) => void;
};

const getCharacterRaceId = (character: CharacterState): number => Number(character.base.raceid);
const getCharacterJobId = (character: CharacterState): number => Number(character.base.jobid);

const getAvailableTemplates = (slot: EquipmentSlotKey, character: CharacterState): ItemTemplate[] => {
    if (slot !== "shield") {
        return templatesBySlot[slot];
    }

    const raceid = getCharacterRaceId(character);
    const jobid = getCharacterJobId(character);
    const trinityAvengerCanUseDaggerAsShield = raceid === 0 && jobid === 1;
    return trinityAvengerCanUseDaggerAsShield
        ? templatesBySlot.shield.concat(templatesBySlot.weapon.filter((weapon) => weapon.type === "dagger"))
        : templatesBySlot.shield;
};

const getEquipmentItem = (character: CharacterState, slot: EquipmentSlotKey): Item | undefined => {
    const equipment = resolveEquipment(
        slot,
        character.equipment[slot],
        getCharacterRaceId(character),
        getCharacterJobId(character)
    );
    return equipment ? resolvedEquipmentToItem(equipment) : undefined;
};

const getSynergyCount = (character: CharacterState, slot: EquipmentSlotKey): number => {
    const currentEquipment = resolveEquipment(
        slot,
        character.equipment[slot],
        getCharacterRaceId(character),
        getCharacterJobId(character)
    );
    const synergyKey = currentEquipment?.template.synergyKey;
    if (!synergyKey) {
        return 0;
    }

    return equipmentSlotKeys.filter((candidateSlot) => {
        const equipment = resolveEquipment(
            candidateSlot,
            character.equipment[candidateSlot],
            getCharacterRaceId(character),
            getCharacterJobId(character)
        );
        return equipment?.template.synergyKey === synergyKey;
    }).length;
};

export const CompareEquipmentGrid: React.FC<CompareEquipmentGridProps> = ({
    title,
    character,
    onChange,
}) => {
    const [editingSlot, setEditingSlot] = React.useState<EquipmentSlotKey | null>(null);
    const editingConfig = compareEquipmentSlots.find((config) => config.slot === editingSlot);

    const setEquipment = (slot: EquipmentSlotKey, item: Item | undefined) => {
        const equipment = item
            ? normalizeEquipmentItem(item, slot, getCharacterRaceId(character), getCharacterJobId(character))
            : undefined;
        onChange({
            ...character,
            equipment: {
                ...character.equipment,
                [slot]: equipment,
            },
        });
    };

    return (
        <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                {title}
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(9, 34px)",
                    gridTemplateRows: "repeat(7, 34px)",
                    gap: "2px",
                    minWidth: 322,
                }}
            >
                {compareEquipmentSlots.map((config) => {
                    const equippedItem = getEquipmentItem(character, config.slot);
                    return (
                        <Box
                            key={config.slot}
                            sx={{ gridColumn: config.gridColumn, gridRow: config.gridRow }}
                        >
                            <AppTooltip
                                content={
                                    equippedItem ? (
                                        <EquipmentTooltipContent
                                            currentItem={equippedItem}
                                            synergyCount={getSynergyCount(character, config.slot)}
                                            title={config.title}
                                        />
                                    ) : (
                                        <DefaultEquipmentTooltipContent content={config.title} />
                                    )
                                }
                            >
                                <AppIconButton
                                    backgroundImage={config.backgroundImage ?? anyBackground}
                                    image={equippedItem?.icon}
                                    onClick={() => setEditingSlot(config.slot)}
                                />
                            </AppTooltip>
                        </Box>
                    );
                })}
            </Box>
            {editingConfig && (
                <EquipmentDialog
                    equipmentType={editingConfig.slot}
                    isOpen={editingSlot !== null}
                    onClose={() => setEditingSlot(null)}
                    title={editingConfig.title}
                    equippedItem={getEquipmentItem(character, editingConfig.slot)}
                    setEquippedItem={(item) => setEquipment(editingConfig.slot, item)}
                    itemTemplates={getAvailableTemplates(editingConfig.slot, character)}
                    raceid={getCharacterRaceId(character)}
                    jobid={getCharacterJobId(character)}
                />
            )}
        </Box>
    );
};
