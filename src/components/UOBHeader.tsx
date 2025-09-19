import { useTheme } from "antd-style";
import { Header } from "antd/es/layout/layout";
import { StrictMode } from "react";
import styles from './UOBHeader.module.css';
import { Button, Col, Row } from "antd";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useThemeContext } from "../utils/Theme";
import { Link } from "react-router-dom";
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
                    '--title-hover-color': token.colorPrimaryHover,
                    '--motion-duration': token.motionDurationMid,
                    '--button-color': token.colorTextSecondary
                }}
            >
                <Row className={styles.rowContainer}>
                    <Col className={styles.titleCol}>
                        <Link to="/" style={{ textDecoration: '返回主页' }}>
                            <h1 className={styles.title}>Uncle1Bo</h1>
                        </Link>
                    </Col>

                    <Col className={styles.buttonCol}>
                        <Button
                            type="text"
                            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
                            onClick={toggleTheme}
                            size="large"
                            title={isDark ? '切换至亮色模式' : '切换至暗色模式'}
                            className={styles.themeButton}
                        />
                    </Col>
                </Row>
            </Header>
        </StrictMode>
    );
}