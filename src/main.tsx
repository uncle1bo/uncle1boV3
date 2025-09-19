import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import { ConfigProvider } from 'antd';
import Theme, { useThemeContext } from './utils/Theme';
function ThemedApp() {
    const { theme } = useThemeContext();
    return (
        <ConfigProvider theme={theme}>
            <AppRouter />
        </ConfigProvider>
    );
};
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Theme>
            <ThemedApp />
        </Theme>
    </React.StrictMode>
);