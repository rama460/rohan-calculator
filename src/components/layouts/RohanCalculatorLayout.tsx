import React from "react";
import RohanCaluculatorDrawer from "./RohanCalculatorDrawer";
import RohanCalculatorHeader from "./RohanCalculatorHeader";

export const RohanCalculatorLayout: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <React.Fragment>
            <RohanCalculatorHeader open={open} toggleDrawer={toggleDrawer} />
            <RohanCaluculatorDrawer open={open} toggleDrawer={toggleDrawer} />
        </React.Fragment>

    );
}