import React from "react";
import "./Control.css";

const Control = props => {
    return (
        <div className="comp-control border border-success rounded">
            {props.children}
        </div>
    );
};

export default Control;