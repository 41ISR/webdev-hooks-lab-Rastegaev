export const Filter = () => {
    return (
        <div className="list-toolbar">
            <span className="toolbar-title">Книги</span>
            <div className="filter-chip">
                <input type="checkbox" id="filterCheckbox" />
                <label htmlFor="filterCheckbox">
                    <span className="dot"></span>
                    Только непрочитанные
                </label>
            </div>
        </div>
    )
}