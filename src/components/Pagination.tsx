import {Table} from "@tanstack/react-table";

export default function Pagination({table}: {table: Table<any>}){
    return (
        <nav className="theme-pagination">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}>
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}>
                        <span aria-hidden="true">{"‹"}</span>
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="javascript:void(0)">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <button className="page-link"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}>
                        <span aria-hidden="true">›</span>
                        <span className="sr-only">Next</span>
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link"
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}>
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
