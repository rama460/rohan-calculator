export type MonacoApi = {
    languages: {
        register: (language: { id: string }) => void;
        setMonarchTokensProvider: (languageId: string, provider: unknown) => void;
    };
    editor: {
        defineTheme: (themeName: string, themeData: unknown) => void;
        setTheme: (themeName: string) => void;
    };
};

export const configureFormulaEditorMonaco = (monaco: MonacoApi) => {
    monaco.languages.register({ id: 'rohan-formula' });

    monaco.languages.setMonarchTokensProvider('rohan-formula', {
        tokenizer: {
            root: [
                [/\/\/.*$/, 'comment'],
                [/\b(floor|ceil|round|abs|max|min|pow|sqrt|sin|cos|tan)\b/, 'keyword'],
                [/\b(calculated[A-Za-z]+)\b/, 'type.identifier'],
                [/\b(initialStatus[A-Za-z]+|race[A-Za-z]+)\b/, 'predefined'],
                [/\b(level|heroLevel|raceid|jobid|strength|vitality|dexterity|intelligence|agility|mentality)\b/, 'variable'],
                [/\d+\.?\d*/, 'number'],
                [/[+\-*/()%]/, 'operator'],
                [/[a-zA-Z][a-zA-Z0-9_]*/, 'string'],
            ]
        }
    });

    monaco.editor.defineTheme('rohan-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
            { token: 'keyword', foreground: '569cd6' },
            { token: 'type.identifier', foreground: '9cdcfe' },
            { token: 'predefined', foreground: '4fc1ff' },
            { token: 'variable', foreground: 'dcdcaa' },
            { token: 'number', foreground: 'b5cea8' },
            { token: 'operator', foreground: 'd4d4d4' },
            { token: 'string', foreground: 'ce9178' },
        ],
        colors: {
            'editor.background': '#1e1e1e',
        }
    });

    monaco.editor.setTheme('rohan-dark');
};
