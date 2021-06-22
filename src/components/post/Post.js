export default function Post({item}) {
    console.log(item);
    return (
        <p>
            {item.id}. {item.title}
        </p>
    );
}