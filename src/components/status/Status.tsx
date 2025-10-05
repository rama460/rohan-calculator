import CharactorContext from "./CharactorContext";
import { PageContainer } from "../common/PageContainer";
import PersonIcon from '@mui/icons-material/Person';


export const Status = () => {
    return (
        <PageContainer
            title="ステータス計算"
            icon={<PersonIcon sx={{ fontSize: 32 }} />}
            maxWidth="md"
        >
            <CharactorContext index={1} />
        </PageContainer>
    );
}
export default Status;