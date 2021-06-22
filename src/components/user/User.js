import Posts from "../posts/Posts";

export default function User({item: {id, name, email}}) {

    return (
        <div>
            <h4>{name} - {email}</h4>
            <Posts userId={id}/>
        </div>
    );
}