import React from "react";

export default function ButtonList(props) {
    return (
        <>
            <div className='Button-row'>
                {props.children}
            </div>
        </>
    );
}