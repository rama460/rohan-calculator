import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField, Typography } from "@mui/material";
import React from "react"
import { useStorageContext } from "../../modules/state/storage";

interface CharactorContextSaveDialogProps {
    index?: number
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    loadedName: string
    setLoadedName: (name: string) => void
}

export const CharactorContextSaveDialog: React.FC<CharactorContextSaveDialogProps> = ({ isOpen, setIsOpen, loadedName, setLoadedName }) => {
    const [_, saveContext] = useStorageContext(loadedName);

    const handleSave = () => {
        setIsOpen(false);
        saveContext();
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
                    セーブ
                </DialogTitle>
                <DialogContent sx={{ textAlign: "center" }}>
                    <Typography variant="body1" >
                        ブラウザーに情報を保存します。<br />
                        キャラクター名を入力してください。<br />
                        同名のキャラクターが存在する場合、上書きされます。
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <TextField
                        type="text"
                        size="small"
                        variant="standard"
                        value={loadedName}
                        onChange={(e) => setLoadedName(e.target.value)}
                        sx={{ width: "200px" }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} >
                        セーブ
                    </Button>
                    <Button onClick={handleCancel} >
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
export default CharactorContextSaveDialog;