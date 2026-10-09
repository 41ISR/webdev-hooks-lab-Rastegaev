export const BookListItem = (props) => {

    const handleDone = () => {
        props.setbook(o => o.map(b => b.id === props.book.id ? { ...b, done: !b.done } : b))
    }
    const handleDelete = () => {
        props.setbook(o => o.filter(b => b.id !== props.book.id))
    }

    return (
        <div className="book-row" data-id="1">
            <div className="book-cover" style={{ background: "#4f6b52" }}>

            </div>
            <div className="book-info">
                <p className="book-title done">{props.book.name}</p>
                <div className="book-author">{props.book.author}</div>
            </div>
            <div className={`read-check${props.book.done ? " checked" : ""}`} onClick={handleDone} data-role="toggle">
                <span className="check-circle" >✓</span>
                <span className="read-label">Прочитано</span>
            </div>
            <button
                className="delete-btn"
                data-role="delete"
                title="Убрать с полки" onClick={handleDelete}>
                ✕
            </button>
        </div>
    )
}