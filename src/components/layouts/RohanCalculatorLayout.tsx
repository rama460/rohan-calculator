import React from "react";
import RohanCaluculatorDrawer from "./RohanCalculatorDrawer";
import RohanCalculatorHeader from "./RohanCalculatorHeader";
import Status from "../status/Status";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RohanCalculatorLayout: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <React.Fragment>
            <RohanCalculatorHeader open={open} toggleDrawer={toggleDrawer} />
            <RohanCaluculatorDrawer open={open} toggleDrawer={toggleDrawer} />
            <BrowserRouter>
                <Routes>
                    <Route path="" Component={Status} />
                </Routes>
            </BrowserRouter>
        </React.Fragment >

    );
}