import { Box, Button, TextField } from "@mui/material"
import React, { useState } from "react";
import { contextNames } from "../../modules/state/storage";
import { useAtomValue, useSetAtom } from "jotai";
import CharactorContextLoadDialog from "./CharactoContextLoadDialog";
import CharactorContextSaveDialog from "./CharactoContextSaveDialog";
import CharactorContextDeleteDialog from "./CharactoContextDeleteDialog";
import { resetUiCharacterContextAtom } from "../../modules/state/ui";

interface CharactorContextTitleProps {
    index?: number
}

export const CharactorContextTitle: React.FC<CharactorContextTitleProps> = ({ index }) => {
    const [name, setName] = useState("キャラクター" + (index ?? 1));
    const [loadDialogOpen, setLoadDialogOpen] = useState(false);
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const names = useAtomValue(contextNames);
    const resetCharacterContext = useSetAtom(resetUiCharacterContextAtom);

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
                    onClick={() => { resetCharacterContext(); }}
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
