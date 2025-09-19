import { useTheme } from "antd-style";
import { Header } from "antd/es/layout/layout";
import { StrictMode } from "react";
import styles from './UOBHeader.module.css';
import { Button, Col, Row } from "antd";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useThemeContext } from "../utils/Theme";
export default function UOBHeader() {
    const { isDark, toggleTheme } = useThemeContext();
    const token = useTheme();
    return (
        <StrictMode>
            <Header
                className={styles.header}
                style={{
                    '--header-bg': token.colorPrimaryBg,
                    '--title-color': token.colorPrimary,
                    padding: '0 24px'
                }}
            >
                <Row justify="space-between" align="middle" style={{ width: '100%' }}>
                    <Col>
                        <h1 className={styles.title}>Uncle1Bo</h1>
                    </Col>
                    <Col>
                        <Button
                            type="text"
                            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
                            onClick={toggleTheme}
                            size="large"
                            title={isDark ? '切换至亮色模式' : '切换至暗色模式'}
                            style={{ fontSize: '18px' }}
                        />
                    </Col>
                </Row>
            </Header>
        </StrictMode>
    );
}