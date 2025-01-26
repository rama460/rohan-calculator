import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";
import { Item } from "../static/items";


interface EquipmentDialogProps {
    isOpen: boolean;
    onConfirm: () => void;
    onRemove: () => void;
    onCancel: () => void
    equipmentType: string;
    equippedItem: Item | null;
    children: React.ReactNode
}

export const EquipmentDialog: React.FC<EquipmentDialogProps> = ({ isOpen, onConfirm, onRemove, onCancel, equipmentType, equippedItem, children }) => {
    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                sx={{
                }}
            >
                <DialogTitle sx={{ fontSize: "30px" }} >
                    {equipmentType}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{ fontSize: "25px", textAlign: "center" }}
                    >
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onConfirm} >
                        装備
                    </Button>
                    {equippedItem ? <Button onClick={onRemove} >
                        解除
                    </Button> : <></>}
                    <Button onClick={onCancel} >
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default EquipmentDialog;