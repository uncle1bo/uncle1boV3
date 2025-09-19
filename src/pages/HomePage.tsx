import { Layout } from "antd";
import { StrictMode } from "react";
const { Header, Content, Footer } = Layout;
export default function HomePage() {
    return (
        <StrictMode>
            <Layout style={{ minHeight: `100vh` }}>
                <Header style={{ background: `#8DDDDD` }}>
                    <h1>
                        Uncle1Bo
                    </h1>
                </Header>
                <Content style={{width:`100vw`}}>
                    <p>
                        你好
                    </p>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Uncle1Bo ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        </StrictMode>
    );
}