import { Footer } from "antd/es/layout/layout";
import { StrictMode } from "react";

export default function UOBFooter() {
    return (
        <StrictMode>
            <Footer style={{ textAlign: 'center' }}>
                Uncle1Bo ©{new Date().getFullYear()}
            </Footer>
        </StrictMode>
    );
}