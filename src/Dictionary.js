import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
    function search (event) {
        event.preventDefault ();
        alert("searching");
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" className="Search-line" />
            <input type="submit" value="Search" className="Search-button"/>
        </form>
    </div>
    ); 
}