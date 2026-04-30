'use client';
import { ThemeProvider } from 'next-themes';

import React, { use } from 'react';

const ThemesProvider = ({ children }) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>

        </div>
    );
};
export default ThemesProvider;