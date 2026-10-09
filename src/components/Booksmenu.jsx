import { BookList } from "./BookList"
import { Filter } from "./Filter"
import { BookForm} from "./BookForm"
import { useState } from "react"
import { nanoid } from "nanoid"

export const BooksMenu = () => {
    const [book, setbook] = useState([])
    const [bookName, setbookName] = useState('')
    const [filter, setFilter] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (bookName === '') return
        if (bookName.trim === '') return
        const newBook = {
            name: bookName.trim(),
            author:"Кадзуо Исигуро",
            done: false,
            counter: 0,
            id: nanoid()
        }
        setbook(o => [...o, newBook])
        setbookName('')

    }
    return (
        <section className="screen active" id="screen-shelf">
            <p className="greeting">Добрый вечер</p>

            <BookForm handleSubmit={handleSubmit} setbookName={setbookName} bookName={bookName}/>

            <Filter filter={filter} setFilter={setFilter}/>

            <BookList book={book} setbook={setbook} filter={filter}/>
        </section>
    )
}