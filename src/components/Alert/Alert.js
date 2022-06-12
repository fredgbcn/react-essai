import React from "react";

    const Alert = (props) =>{
        const css = `alert ${props.alertType}`;
        return (
            <>
                <div class={css} role="alert">
                {props.children}
                </div>
            </>
        )
        }

export default Alert;