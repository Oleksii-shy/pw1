import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comentsList, setComentsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json())
                .then(value => {
                    setComentsList(value);
                });
    }, [])
    return (
        <div>
            {comentsList.map((value, index) => <Comment key={index} item={value}/>)}
        </div>
    );
}