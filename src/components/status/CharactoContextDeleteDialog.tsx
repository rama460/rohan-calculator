import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React from "react"
import { contextNames, contextState } from "../../modules/state/storage";
import { useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";

interface CharactorContextDeleteDialogProps {
    index?: number
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const CharactorContextDeleteDialog: React.FC<CharactorContextDeleteDialogProps> = ({ isOpen, setIsOpen }) => {
    const names = useAtomValue(contextNames);
    const [name, setName] = React.useState(names[0]);
    const setContext = useSetAtom(contextState(name));
    const handleDelete = () => {
        setIsOpen(false);
        setName(names[0]);
        setContext(RESET);
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
                        ブラウザーに保存された情報を削除します。<br />
                        削除するキャラクターを選択してください。
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <FormControl fullWidth>
                        <InputLabel id="load-select-label">キャラクター</InputLabel>
                        <Select
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
                    <Button onClick={handleDelete} >
                        削除
                    </Button>
                    <Button onClick={handleCancel} >
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
export default CharactorContextDeleteDialog;