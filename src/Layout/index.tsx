import { ReactNode } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import './style.css';

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;