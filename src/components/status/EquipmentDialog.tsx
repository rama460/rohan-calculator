import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";


interface EquipmentDialogProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void
    equipmentType: string;
    children: React.ReactNode
}

export const EquipmentDialog: React.FC<EquipmentDialogProps> = ({ isOpen, onConfirm, onCancel, equipmentType, children }) => {
    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: "30px" }} >
                    {equipmentType}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-description"
                        sx={{ fontSize: "25px", textAlign: "center" }}
                    >
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onConfirm} >
                        OK
                    </Button>
                    <Button onClick={onCancel} >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default EquipmentDialog;