import { Box, Container } from "@mui/material";
import CharactorContext from "./CharactorContext";


export const Status = () => {
    return (
        <Box sx={{ width: "100vw", paddingTop: "100px" }}>
            <Container maxWidth="md">
                <CharactorContext index={1} />
            </Container>
        </Box>
    );
}
export default Status;