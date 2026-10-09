import { Button } from "./Button"
import { Input } from "./Input"

export const BookForm = (props) => {
    return (
        <div className="add-book-row">
            <form action="" onSubmit={props.handleSubmit}>
                <Input value={props.bookName} onChange={(e) => props.setbookName(e.target.value)}/>
                <Button></Button>
            </form>
        </div>
    )
}