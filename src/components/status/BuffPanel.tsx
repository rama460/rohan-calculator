import Grid from "@mui/material/Grid2";
import BuffIconButton from "./BuffIconButton";

interface BuffPanelProps {
}

export const BuffPanel: React.FC<BuffPanelProps> = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ md: 12, xs: 12 }}>
                <BuffIconButton icon="helmet" />
            </Grid>
        </Grid >
    )
}

export default BuffPanel;