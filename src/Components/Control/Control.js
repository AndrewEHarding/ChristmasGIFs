import React from "react";
import "./Control.css";

const Control = props => {
    return (
        <div className="border border-success rounded">
            {props.children}
        </div>
    );
};

export default Control;