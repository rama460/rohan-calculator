import { Box, TextField, Typography, Chip } from "@mui/material";
import { charactorStateFamily, CharactorStateType } from "../../modules/state/charactor";
import { customFormulaStateFamily } from "../../modules/state/custom-formulas";
import { useAtomValue } from "jotai";

interface CharactorParameterFieldProps {
    name: CharactorStateType;
    title: string;
}

export const CharactorParameterField: React.FC<CharactorParameterFieldProps> = ({ name, title }) => {
    const value = useAtomValue(charactorStateFamily(name));
    const customFormula = useAtomValue(customFormulaStateFamily(name));

    // カスタマイズされているかどうかをチェック
    const isCustomized = customFormula !== null && customFormula?.isActive;

    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={1}>
            <Box display="flex" alignItems="center" gap={0.5} flex={1}>
                <Typography
                    variant="caption"
                    sx={{
                        textAlign: "left",
                        color: 'text.primary',
                        fontWeight: 'normal'
                    }}
                >
                    {title}
                </Typography>
                {isCustomized && (
                    <Chip
                        label="カスタム"
                        size="small"
                        variant="outlined"
                        color="primary"
                        sx={{
                            fontSize: '8px',
                            height: '16px',
                            ml: 0.5,
                            '& .MuiChip-label': {
                                px: 0.5
                            }
                        }}
                    />
                )}
            </Box>
            <TextField
                type="text"
                size="small"
                value={value}
                sx={{
                    width: "70px",
                    "& .MuiInputBase-input": {
                        fontSize: 10,
                        height: 5,
                        padding: 1,
                        fontWeight: isCustomized ? 'bold' : 'normal',
                        backgroundColor: isCustomized ? '#e3f2fd' : 'transparent'
                    }
                }}
                InputProps={{
                    readOnly: true
                }}
            />
        </Box>
    );
}
export default CharactorParameterField;