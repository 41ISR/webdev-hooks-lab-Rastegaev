export const Filter = (props) => {
    return (
        <div className="list-toolbar" >
            <span className="toolbar-title">Книги</span>
            <div className="filter-chip">
                <input type="checkbox" id="filterCheckbox" onClick={() => props.setFilter(o => !o)} />
                <label htmlFor="filterCheckbox">
                    <span className="dot"></span>
                    Только непрочитанные
                </label>
            </div>
        </div>
    )
}