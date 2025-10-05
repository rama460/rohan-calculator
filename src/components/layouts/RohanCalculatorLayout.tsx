import React from "react";
import RohanCalculatorDrawer from "./RohanCalculatorDrawer";
import RohanCalculatorHeader from "./RohanCalculatorHeader";
import Status from "../status/Status";
import Skill from "../skill/Skill";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Costume from "../costume/Costume";

export const RohanCalculatorLayout: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const basePath = __APP_CONFIG__.basename;

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <BrowserRouter basename={basePath}>
            <RohanCalculatorHeader open={open} toggleDrawer={toggleDrawer} />
            <RohanCalculatorDrawer open={open} toggleDrawer={toggleDrawer} />
            <Routes>
                <Route path="/" element={<Status />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/stats" element={<div>Stats</div>} />
                <Route path="/costume" element={<Costume />} />
                <Route path="/config" element={<div>Config</div>} />
                <Route path="/database" element={<div>Database</div>} />
            </Routes>
        </BrowserRouter>
    );
}
export default RohanCalculatorLayout;