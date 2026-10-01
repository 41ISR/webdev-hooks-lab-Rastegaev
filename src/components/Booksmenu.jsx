import { BookList } from "./BookList"
import { Filter } from "./Filter"
import { Input } from "./Input"

export const BooksMenu = () => {
    return (
        <section className="screen active" id="screen-shelf">
            <p className="greeting">Добрый вечер</p>

           <Input/>

            <Filter/>

           <BookList/>
        </section>
    )
}