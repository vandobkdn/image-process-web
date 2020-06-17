import React from "react";

const RightSide = (props) => {

    return (
        <React.Fragment>
            <label>Entity Label: <span><b>{props.entity}</b></span></label>
            {props.children}
        </React.Fragment>
    )
};

export default RightSide;