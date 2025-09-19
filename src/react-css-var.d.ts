// 扩展 React 的 CSSProperties 以支持自定义 CSS 变量（--xxx 形式）
import 'react';
declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number;
    }
}