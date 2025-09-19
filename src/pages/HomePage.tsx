import { Layout } from "antd";
import { StrictMode } from "react";
import UOBHeader from "../components/UOBHeader";
import UOBFooter from "../components/UOBFooter";
const { Content} = Layout;
export default function HomePage() {
    return (
        <StrictMode>
            <Layout style={{ minHeight: `100vh` }}>
                <UOBHeader />
                <Content style={{ width: `100vw` }}>
                    <p>
                        你好
                    </p>
                </Content>
                <UOBFooter/>
            </Layout>
        </StrictMode>
    );
}