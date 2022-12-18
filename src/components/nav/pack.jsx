import React from "react";

export default function pack() {
    return(
        <div className="pack">
            <ul>
                <li style={{color: "darkgoldenrod", cursor: "pointer"}}>Download Json File</li>
                
            </ul>
            <div id="packme">
                    <span style={{color:"plum"}}>import </span> 
                    <span style={{color:"lightblue"}}>Api_ADTime </span>
                    <span style={{color:"plum"}}> from </span> 
                    <span style={{color: "orange"}}>"ADTIME_API"</span>
                </div>
        </div>
    )
}