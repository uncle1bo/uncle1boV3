import { theme, type ThemeConfig } from "antd";
import { createContext, useContext, useState, type ReactNode } from "react";
import { cyan, cyanDark } from '@ant-design/colors'

type ThemeState = {
    isDark: boolean,
    theme: ThemeConfig,
    toggleTheme: () => void,
}
const ThemeContext = createContext<ThemeState | undefined>(undefined);
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext 必须在 Theme 组件内部使用");
    }
    return context;
};
export default function Theme({ children }: { children: ReactNode }){
    const [isDark, setIsDark] = useState(false)
    function calcTheme(): ThemeConfig {
        return {
            token: {
                colorPrimary: isDark ? cyanDark.primary : cyan.primary,
            },
            algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }
    };
    function toggleTheme() {
        setIsDark(!isDark);
    };
    return (
        <ThemeContext.Provider value={{isDark, theme: calcTheme(), toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}