import React from "react";

    const Button = (props) => {
        const btnCss = `btn ${props.typeCss} rounded ${props.css}`;
        return(
            <div>
                <button className={btnCss} onClick={props.clic}>{props.children}</button>

            </div>
        )
    }

export default Button;