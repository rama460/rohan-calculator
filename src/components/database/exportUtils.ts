// データエクスポート用のヘルパー関数

export const exportToJSON = (data: any[], filename: string = 'data') => {
    const jsonString = JSON.stringify(data, null, 2);
    downloadFile(jsonString, `${filename}.json`, 'application/json');
};

export const exportToCSV = (data: any[], filename: string = 'data') => {
    if (data.length === 0) return;

    // CSVヘッダーを取得（最初のオブジェクトのキーから）
    const headers = Object.keys(data[0]);

    // CSVコンテンツを作成
    const csvContent = [
        headers.join(','), // ヘッダー行
        ...data.map(row =>
            headers.map(header => {
                let value = row[header];

                // オブジェクトや配列の場合はJSON文字列に変換
                if (typeof value === 'object' && value !== null) {
                    value = JSON.stringify(value);
                }

                // 値をダブルクォートで囲む（CSV仕様に従う）
                return `"${String(value).replace(/"/g, '""')}"`;
            }).join(',')
        )
    ].join('\n');

    downloadFile(csvContent, `${filename}.csv`, 'text/csv;charset=utf-8;');
};

const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // クリーンアップ
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

// データをエクスポート用に平坦化する関数
export const flattenDataForExport = (data: any[]) => {
    return data.map(item => {
        const flattened: any = { ...item };

        // ネストされたオブジェクトを平坦化
        Object.keys(flattened).forEach(key => {
            if (typeof flattened[key] === 'object' && flattened[key] !== null && !Array.isArray(flattened[key])) {
                // オブジェクトの場合、キーを"parent_child"形式に変換
                Object.keys(flattened[key]).forEach(nestedKey => {
                    flattened[`${key}_${nestedKey}`] = flattened[key][nestedKey];
                });
                delete flattened[key];
            }
        });

        return flattened;
    });
};