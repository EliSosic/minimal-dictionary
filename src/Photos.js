import React from "react";

import "./Photos.css";

export default function Photos (props) {
    console.log(props.photos);
    if (props.photos) {
        return (
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function (photos, index) { 
                        return (
                            <div className="col-3" key={index}>
                             <img src={photos.src.landscape} className="img-fluid" alt="" />
                            </div>
                    );
                })}
                </div>
            </div>
        )
    } else {
        return null;
    }
    
}