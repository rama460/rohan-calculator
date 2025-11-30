import React, { useState, useMemo } from 'react';
import {
    Box,
    TextField,
    Grid,
    Card,
    Typography,
    Chip,
    Stack,
    Tabs,
    Tab,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { races } from '../../static/races';
import { titles } from '../../static/titles';
import { BuiltinOptions, getDisplayOptionName } from '../../static/options';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`other-tabpanel-${index}`}
            aria-labelledby={`other-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export const OtherDatabase: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);
    const [raceSearchTerm, setRaceSearchTerm] = useState('');
    const [titleSearchTerm, setTitleSearchTerm] = useState('');

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    // 種族データのフィルタリング
    const filteredRaces = useMemo(() => {
        if (!raceSearchTerm) return races;
        return races.filter(race =>
            race.name.toLowerCase().includes(raceSearchTerm.toLowerCase()) ||
            race.displayName.toLowerCase().includes(raceSearchTerm.toLowerCase())
        );
    }, [raceSearchTerm]);

    // タイトルデータのフィルタリング
    const filteredTitles = useMemo(() => {
        if (!titleSearchTerm) return titles;
        return titles.filter(title =>
            title.name.toLowerCase().includes(titleSearchTerm.toLowerCase()) ||
            title.displayName.toLowerCase().includes(titleSearchTerm.toLowerCase())
        );
    }, [titleSearchTerm]);

    const getStatColor = (value: number) => {
        if (value > 0) return 'success';
        if (value < 0) return 'error';
        return 'default';
    };

    const getOptionDisplayName = (optionKey: string, value: number) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        if (option) {
            return `${getDisplayOptionName(option)}: ${value > 0 ? '+' : ''}${value}`;
        }
        return `${optionKey}: ${value > 0 ? '+' : ''}${value}`;
    };

    const getStatDisplayName = (statKey: string, value: number) => {
        const statMap: Record<string, string> = {
            strength: '力',
            vitality: '体力',
            intelligence: '知能',
            agility: '敏捷性',
            mentality: '精神力',
            dexterity: '瞬発力'
        };
        const displayName = statMap[statKey] || statKey;
        return `${displayName}: ${value}`;
    };

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab
                        icon={<PersonIcon />}
                        label="種族"
                        iconPosition="start"
                    />
                    <Tab
                        icon={<EmojiEventsIcon />}
                        label="タイトル"
                        iconPosition="start"
                    />
                </Tabs>
            </Box>

            <TabPanel value={tabValue} index={0}>
                {/* 種族データベース */}
                <Box sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        placeholder="種族名で検索..."
                        value={raceSearchTerm}
                        onChange={(e) => setRaceSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                        }}
                        sx={{ mb: 2 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {filteredRaces.length} 件の種族が見つかりました
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    {filteredRaces.map((race, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <PersonIcon color="primary" />
                                            <Box>
                                                <Typography variant="h6">
                                                    {race.displayName}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {race.name}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack spacing={2}>
                                            {race.initialStatus && (
                                                <Box>
                                                    <Typography variant="subtitle2" gutterBottom>
                                                        初期ステータス
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {Object.entries(race.initialStatus).map(([stat, value]) => (
                                                            <Chip
                                                                key={stat}
                                                                label={getStatDisplayName(stat, value as number)}
                                                                size="small"
                                                                color={getStatColor(value as number) as any}
                                                                variant="outlined"
                                                            />
                                                        ))}
                                                    </Box>
                                                </Box>
                                            )}

                                            <Box>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    その他情報
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    <Chip
                                                        label={`HP/Lv: ${race.hitPointPerLevel}`}
                                                        size="small"
                                                        color="info"
                                                        variant="outlined"
                                                    />
                                                    <Chip
                                                        label={`MP/Lv: ${race.magicPointPerLevel}`}
                                                        size="small"
                                                        color="info"
                                                        variant="outlined"
                                                    />
                                                    <Chip
                                                        label={`速度: ${race.movementSpeed}`}
                                                        size="small"
                                                        color="info"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                            </Box>

                                            {race.jobs && race.jobs.length > 0 && (
                                                <Box>
                                                    <Typography variant="subtitle2" gutterBottom>
                                                        利用可能職業
                                                    </Typography>
                                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                        {race.jobs.map((job, jobIndex) => (
                                                            <Chip
                                                                key={jobIndex}
                                                                label={job.displayName || job.name}
                                                                size="small"
                                                                color="primary"
                                                                variant="outlined"
                                                            />
                                                        ))}
                                                    </Stack>
                                                </Box>
                                            )}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
                {/* タイトルデータベース */}
                <Box sx={{ mb: 3 }}>
                    <TextField
                        fullWidth
                        placeholder="タイトル名で検索..."
                        value={titleSearchTerm}
                        onChange={(e) => setTitleSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                        }}
                        sx={{ mb: 2 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {filteredTitles.length} 件のタイトルが見つかりました
                    </Typography>
                </Box>

                <Stack spacing={2}>
                    {filteredTitles.map((title, index) => (
                        <Card key={index}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <EmojiEventsIcon color="warning" />
                                        <Box>
                                            <Typography variant="h6">
                                                {title.displayName}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack spacing={2}>
                                        {title.options && Object.keys(title.options).length > 0 && (
                                            <Box>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    効果
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    {Object.entries(title.options).map(([stat, value]) => (
                                                        <Chip
                                                            key={stat}
                                                            label={getOptionDisplayName(stat, value as number)}
                                                            size="small"
                                                            color={getStatColor(value as number) as any}
                                                            variant="outlined"
                                                        />
                                                    ))}
                                                </Box>
                                            </Box>
                                        )}
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    ))}
                </Stack>
            </TabPanel>
        </Box>
    );
};

export default OtherDatabase;