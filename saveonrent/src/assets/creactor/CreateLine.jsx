import React, { useState } from "react";

export default function CreateLine({index , click , isActive}) {
    
    return (
        <div className="CreateLine" onClick={() => click(index)}>
            <p className={isActive? "ConstructorActive" : "Constructor"}>
                Constructor 
            </p>
            <div className={isActive ? "lineActive" : "line"}></div>
        </div>
    );
}
