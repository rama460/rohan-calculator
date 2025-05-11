import { Box, Button, TextField } from "@mui/material"
import React, { useState } from "react";
import { contextNames } from "../../modules/state/storage";
import { resetAllStatusState } from "../../modules/state/statuses";
import { useAtomValue, useSetAtom } from "jotai";
import { resetAllEquipmentState } from "../../modules/state/items";
import { buffStateFamily } from "../../modules/state/skills";
import CharactorContextLoadDialog from "./CharactoContextLoadDialog";
import CharactorContextSaveDialog from "./CharactoContextSaveDialog";
import { resetBaseState } from "../../modules/state/bases";
import CharactorContextDeleteDialog from "./CharactoContextDeleteDialog";

interface CharactorContextTitleProps {
    index?: number
}

export const CharactorContextTitle: React.FC<CharactorContextTitleProps> = ({ index }) => {
    const [name, setName] = useState("キャラクター" + (index ?? 1));
    const [loadDialogOpen, setLoadDialogOpen] = useState(false);
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const names = useAtomValue(contextNames);
    const resetAllStatus = useSetAtom(resetAllStatusState);
    const resetAllEquipment = useSetAtom(resetAllEquipmentState);
    const resetAllBaseState = useSetAtom(resetBaseState);
    const setSelfBuffStatuses = useSetAtom(buffStateFamily("Self"));
    const setGroupBuffStatuses = useSetAtom(buffStateFamily("Group"));
    const setGuildBuffStatuses = useSetAtom(buffStateFamily("Guild"));
    const setCashBuffStatuses = useSetAtom(buffStateFamily("Cash"));

    return (

        <Box display="flex" justifyContent="space-between" alignItems="center">
            <TextField
                type="text"
                size="small"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Box display="flex" gap={1}>
                <Button
                    size="small"
                    onClick={() => { resetAllStatus(); resetAllEquipment(); resetAllBaseState(); setSelfBuffStatuses([]); setGroupBuffStatuses([]); setGuildBuffStatuses([]); setCashBuffStatuses([]) }}
                >
                    リセット
                </Button>
                <Button
                    size="small"
                    disabled={names.length === 0}
                    onClick={() => { setLoadDialogOpen(true) }}
                >
                    ロード
                </Button>
                <Button
                    size="small"
                    onClick={() => { setSaveDialogOpen(true) }}
                >
                    セーブ
                </Button>
                <Button
                    size="small"
                    onClick={() => { setDeleteDialogOpen(true) }}
                    disabled={names.length === 0}
                >
                    削除
                </Button>
            </Box>
            <CharactorContextLoadDialog
                index={index}
                isOpen={loadDialogOpen}
                setIsOpen={setLoadDialogOpen}
                setLoadedName={setName}
            />
            <CharactorContextSaveDialog
                index={index}
                isOpen={saveDialogOpen}
                setIsOpen={setSaveDialogOpen}
                loadedName={name}
                setLoadedName={setName}
            />
            <CharactorContextDeleteDialog
                index={index}
                isOpen={deleteDialogOpen}
                setIsOpen={setDeleteDialogOpen}
            />
        </Box >
    )
}

export default CharactorContextTitle;