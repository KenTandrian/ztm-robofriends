import React from "react";

// This is functionality component, all components has props.children, which is components inside this component.
// = components
const Scroll = (props: { children: React.ReactNode }) => {
    return (
        <div style={{overflowY: 'scroll', border: '0px solid black', height: '70vh'}}>
            {props.children}
        </div>
    );
};

export default Scroll;