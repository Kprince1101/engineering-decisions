'use client';

import { Sandpack } from '@codesandbox/sandpack-react';

type SandpackEditorProps = {
    code: string;
    dependencies?: Record<string, string>;
};

export function SandpackEditor({ code, dependencies }: SandpackEditorProps) {
    return (
        <Sandpack
            template="react"
            files={{
                '/App.js': code,
            }}
            customSetup={{
                dependencies: dependencies || {},
            }}
            options={{
                showNavigator: false,
                showTabs: false,
                showLineNumbers: true,
                editorHeight: 350,
            }}
        />
    );
}
