import React from 'react';
import { Alert, Box, Typography } from '@mui/material';

export const FormulaEditorHelp: React.FC = () => (
    <Box sx={{ p: 2, height: '60vh', overflow: 'auto' }}>
        <Typography variant="h6" gutterBottom>
            計算式ガイド
        </Typography>

        <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">📊 基本変数:</Typography>
            <Typography variant="body2" component="div">
                • <strong>level</strong> - キャラクターレベル<br />
                • <strong>heroLevel</strong> - 超越レベル<br />
                • <strong>raceid</strong> - 種族ID (1=ヒューマン, 2=エルフ, 3=ハーフエルフ, 4=ダン, 5=デカン, 6=ダークエルフ, 7=トリニティ)<br />
                • <strong>jobid</strong> - 職業ID<br />
                • <strong>strength, vitality, dexterity, intelligence, agility, mentality</strong> - 基本ステータス
            </Typography>
        </Alert>

        <Alert severity="warning" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">🔗 中間変数 (他のステータスを参照):</Typography>
            <Typography variant="body2" component="div">
                <strong>波括弧 {'{ }'} で囲んで使用:</strong><br />
                • <strong>{`{strength}`}</strong> - 計算済み筋力値<br />
                • <strong>{`{vitality}`}</strong> - 計算済み体力値<br />
                • <strong>{`{hitPoint}`}</strong> - 計算済みHP値<br />
                • <strong>{`{meleeAttack}`}</strong> - 計算済み近接攻撃力<br />
                ⚠️ 循環参照するとエラーになります
            </Typography>
        </Alert>

        <Alert severity="success" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">🧮 数学関数:</Typography>
            <Typography variant="body2" component="div">
                • <strong>floor(x)</strong> - 小数点以下切り捨て<br />
                • <strong>ceil(x)</strong> - 小数点以下切り上げ<br />
                • <strong>round(x)</strong> - 四捨五入<br />
                • <strong>abs(x)</strong> - 絶対値<br />
                • <strong>min(a,b), max(a,b)</strong> - 最小値・最大値<br />
                • <strong>pow(x,y)</strong> - x の y 乗<br />
                • <strong>sqrt(x)</strong> - 平方根
            </Typography>
        </Alert>

        <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">🏷️ 装備・バフオプション変数:</Typography>
            <Typography variant="body2" component="div">
                <strong>options.ts から自動取得:</strong><br />
                • <strong>plusStrength, plusVitality</strong> - Plus系ステータス<br />
                • <strong>weaponAttack, equipmentDefense</strong> - 装備系ボーナス<br />
                • <strong>buffStrength, temporaryAttack</strong> - バフ系ボーナス<br />
                • <strong>baseHP, baseMP</strong> - 基礎値系<br />
                ※ 利用可能な変数は自動で検証されます
            </Typography>
        </Alert>

        <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">🌟 種族関連変数:</Typography>
            <Typography variant="body2" component="div">
                • <strong>initialStatusStrength</strong> - 種族初期筋力<br />
                • <strong>initialStatusVitality</strong> - 種族初期体力<br />
                • <strong>raceHitPointPerLevel</strong> - レベル毎HP増加<br />
                • <strong>raceMagicPointPerLevel</strong> - レベル毎MP増加<br />
                • <strong>raceMovementSpeed</strong> - 種族移動速度
            </Typography>
        </Alert>

        <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">💬 コメント機能:</Typography>
            <Typography variant="body2" component="div">
                • <strong>//</strong> から行末まではコメント<br />
                • 計算には影響しないため、説明や注釈に使用<br />
                • 複雑な式の説明に活用してください
            </Typography>
        </Alert>

        <Alert severity="success" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">✅ 自動バリデーション機能:</Typography>
            <Typography variant="body2" component="div">
                • <strong>構文チェック</strong> - 括弧の対応、演算子の妥当性<br />
                • <strong>変数名検証</strong> - 未定義変数の検出<br />
                • <strong>循環参照検出</strong> - 中間変数の相互参照チェック<br />
                • <strong>実行テスト</strong> - 実際の計算可能性を検証<br />
                ❌ エラーがある場合は保存できません
            </Typography>
        </Alert>
    </Box>
);
