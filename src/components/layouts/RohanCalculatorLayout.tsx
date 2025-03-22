import React from "react";
import RohanCaluculatorDrawer from "./RohanCalculatorDrawer";
import RohanCalculatorHeader from "./RohanCalculatorHeader";
import Status from "../status/Status";

export const RohanCalculatorLayout: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <React.Fragment>
            <RohanCalculatorHeader open={open} toggleDrawer={toggleDrawer} />
            <RohanCaluculatorDrawer open={open} toggleDrawer={toggleDrawer} />
            <Status />
        </React.Fragment >

    );
}