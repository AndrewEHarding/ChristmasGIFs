import React from "react";
import "./Display.css";

const Display = props => {
    return (
        <div className="border border-danger rounded">
            {props.children}
        </div>
    );
};

export default Display;