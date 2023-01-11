
function Article({title, date="January 1, 1970",priview}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{priview}</p>
        </article>
    );
}

export default Article;