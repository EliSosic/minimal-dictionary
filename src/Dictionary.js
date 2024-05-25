import React, {useState} from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos"

import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState (null);

    function handleResponse (response) {
        console.log(response.data)
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function handleSheCodesResponse (response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function search (event) {
        event.preventDefault ();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);

        let sheCodesApiKey = "3c836392eab01t60930bboe42ecabfe4";
        let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;

        axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
    }

    function updateKeyword (event){
        setKeyword(event.target.value)

    }

   
    return (
    <div className="Dictionary">
        <div className="container">
            <form onSubmit={search}>
                <input type="search" onChange={updateKeyword} className="Search-line" />
                <input type="submit" value="Search" className="Search-button"/>
            </form>
        </div>
        <Results  results={results} />
        <Photos photos={photos} />
    </div>
    ); 
}