import { useState } from "react"
import { BookListItem } from "./BookListItem"

export const BookList = (props) => {




    

    return (
        <div className="book-list" id="bookList">
            {props.filter ? 
            props.book.filter((el)=>!el.done)
            .map((el) => (<BookListItem key={el.id} book={el} setbook={props.setbook}/>)): props.book.map((el)=><BookListItem key={el.id} book={el} setbook={props.setbook}/>)
            }
        </div>
    )
}