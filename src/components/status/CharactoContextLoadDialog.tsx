import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React from "react"
import { contextNames, useStorageContext } from "../../modules/state/storage";
import { useAtomValue } from "jotai";

interface CharactorContextLoadDialogProps {
    index?: number
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    setLoadedName: (name: string) => void
}

export const CharactorContextLoadDialog: React.FC<CharactorContextLoadDialogProps> = ({ isOpen, setIsOpen, setLoadedName }) => {
    const names = useAtomValue(contextNames);
    const [name, setName] = React.useState(names[0]);
    const [loadContext, _] = useStorageContext(name);

    const handleLoad = () => {
        setIsOpen(false);
        setLoadedName(name);
        loadContext();
    }
    const handleCancel = () => {
        setIsOpen(false);
    }
    return (
        <React.Fragment >
            <Dialog
                open={isOpen}
                sx={{
                }}
            >
                <DialogTitle sx={{ fontSize: "30px" }} >
                    ロード
                </DialogTitle>
                <DialogContent sx={{ textAlign: "center" }}>
                    <Typography variant="body1" >
                        ブラウザーに保存された情報を読み込みます。<br />
                        キャラクターを選択してください。
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <FormControl fullWidth>
                        <InputLabel id="load-select-label">キャラクター</InputLabel>
                        <Select
                            labelId="load-select-label"
                            id="load-select"
                            value={name}
                            label="キャラクター"
                            onChange={(event: SelectChangeEvent) => { setName(event.target.value) }}
                        >
                            {names.map((name, index) => (
                                <MenuItem key={index} value={name}>{name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLoad} >
                        ロード
                    </Button>
                    <Button onClick={handleCancel} >
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
export default CharactorContextLoadDialog;