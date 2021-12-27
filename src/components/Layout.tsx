import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";

const Layout: React.FC = () => {
    return (
        <>
            <Drawer />
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
