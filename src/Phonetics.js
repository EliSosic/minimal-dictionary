import React from "react";
import "./Phonetics.css"

export default function Phonetics (props) {
    console.log(props.phonetic);
    return(
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer" >Listen</a>
            {props.phonetic.text}
        </div>
    )
}