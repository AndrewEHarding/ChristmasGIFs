import React from "react";
import "./Button.css";

const Button = props => {
    return (
        <button type="button" className="btn btn-success">{props.word}</button>
    );
};

export default Button;