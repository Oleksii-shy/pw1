export default function Comment({item: {postId, id, name, email, body}}) {
    return (
        <div>
            <h4>{id}. Post id: {postId}</h4>
            <h5>{name}</h5>
            <h6>email: {email}</h6>
            <p>{body}</p>
        </div>
    );
}