import { Col, Image as AntdImage, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import { StrictMode } from "react";

export default function UOBFooter() {
    return (
        <StrictMode>
            <Footer style={{ padding: "12px 24px" }}>
                {/* 用Row包裹Row作为最外层容器 */}
                <Row gutter={[8, 4]} // 行列间距（水平8px，垂直4px）
                    justify="center" // 内容水平居中
                    align="middle" // 内容垂直居中
                >
                    {/* 版权信息：占满整行 */}
                    <Col xs={24} sm={24}> {/* xs/sm屏幕都占满24格（整行） */}
                        <Paragraph style={{ margin: 0, textAlign: 'center' }}>
                            © 2025 Uncle1Bo. 保留所有权利。
                        </Paragraph>
                    </Col>
                    {/* 备案信息行 */}
                    <Col xs={24} sm={24}>
                        <Row
                            justify="center" // 备案内容水平居中
                            align="middle" // 图标与文字垂直居中
                            gutter={[8, 0]} // 备案项之间的间距
                        >
                            {/* ICP备案 */}
                            <Col>
                                <Link
                                    href="https://beian.miit.gov.cn/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    新ICP备2024011471号-1
                                </Link>
                            </Col>
                            {/* 分隔符 */}
                            <Col>丨</Col>
                            {/* 公安备案（带图标） */}
                            <Col>
                                <Link
                                    href="http://www.beian.gov.cn/"
                                    target="_blank"
                                    rel="noopener"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                                >
                                    <AntdImage
                                        src="src\assets\beian.png"
                                        alt="公安备案图标"
                                        width={16}
                                        height={16}
                                        preview={false}
                                        style={{ verticalAlign: 'top' }}
                                    />
                                    新公网安备65010202001290号
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Footer>
        </StrictMode>
    );
}