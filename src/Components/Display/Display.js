import React from "react";
import "./Display.css";

const Display = props => {
    return (
        <div className="comp-display border border-danger rounded">
            {props.children}
        </div>
    );
};

export default Display;