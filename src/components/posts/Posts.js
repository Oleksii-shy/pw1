import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts({userId}) {
    let [postsList, setPostsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => {
                   setPostsList(value);
                });
    }, []);

    const filter = postsList.filter(value => value.userId === userId);
    return (
        <div>
            {filter.map((value, index) => <Post key={index} item={value}/>)}
        </div>
    );
}