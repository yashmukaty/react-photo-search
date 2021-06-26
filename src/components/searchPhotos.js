import React,{useState} from "react";
import Unsplash,{ toJson } from "unsplash-js";

const unsplash = new Unsplash({
    accessKey: "Z42TPpeXpw5VADpXA_1ePixjKx8ESJKwJNl_d_3bEW4"
});

function SearchPhotos(){
    const [query,setQuery] = useState("");
    const [pics, setPics] = useState([]);
    
    const searchPhotos =async (e) => {
        e.preventDefault();
        unsplash.search
        .photos(query,1,20)
        .then(toJson)
        .then((json) => {setPics(json.results);
        });
    }
        


    return(
        <>
        <form className="form" onSubmit={searchPhotos}>
            <label className="label" htmlFor="query">
                {" "}
                📷
            </label>
            <input
            type="text"
            name="query"
            className="input"
            placeholder = "Try dog or apple"
            value = {query}
            onChange = {(e)=> setQuery(e.target.value)}
            />
            <button type="submit" className="button">
                Search
            </button>

        </form>
        <div className="card-list">
            {
            pics.map((pic) => 
            <div className="card">
                <img className="card--image"
                alt={pic.alt_description}
                src = {pic.urls.full}
                width="50%"
                height="50%"
                ></img>
            </div>)
            }

        </div>

        </>
    );
}
export default SearchPhotos;