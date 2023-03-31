import axios from "axios";
import {
    useEffect,
    useMemo,
    useState,
    useRef,
    HTMLProps
} from "react";
import {
    Column,
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    Table,
    useReactTable,
} from "@tanstack/react-table";
import {BASE_URL} from "../utils/axios/axios";
import PageHeader from "../components/PageHeader";
import useAuth from "../hooks/useAuth";

type Props = {};

type LandRowModel = {
    reference: string
    town: string
    district: string
    localisation: string
    surface: string
    subRows?: LandRowModel[]
}

const Lands = (props: Props) => {
    const [data, setData] = useState<any>([]);
    const {auth}  = useAuth()

    //side effects
    useEffect(() => {
        (async () => {
            const fetchLands = await axios.get(BASE_URL + "lands", {
                headers: {
                    Authorization: `Bearer ${auth.token}` ,
                    "Content-Type": "multipart/form-data",
                },
            });
            setData(fetchLands?.data);
        })();
    }, [auth.token]);

    const [rowSelection, setRowSelection] = useState({});
    // const [globalFilter, setGlobalFilter] = useState("");

    const columns = useMemo<ColumnDef<LandRowModel>[]>(
        () => [
            {
                id: "select",
                header: ({table}) => (
                    <IndeterminateCheckbox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                ),
                cell: ({row}) => (
                    <div className="px-1">
                        <IndeterminateCheckbox
                            {...{
                                checked: row.getIsSelected(),
                                disabled: !row.getCanSelect(),
                                indeterminate: row.getIsSomeSelected(),
                                onChange: row.getToggleSelectedHandler(),
                            }}
                        />
                    </div>
                ),
            },
            {
                header: "Reference",
                footer: (props) => props.column.id,
                accessorKey: "reference_number",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Ville",
                footer: (props) => props.column.id,
                accessorKey: "town",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Quartier",
                footer: (props) => props.column.id,
                accessorKey: "district",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Localisation",
                footer: (props) => props.column.id,
                accessorKey: "localisation",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Surface",
                footer: (props) => props.column.id,
                accessorKey: "surface",
                // cell: (info) => info.getValue(),
            },
        ],
        []
    );

    // const [data, setData] = useState(() => makeData(100000));

    const table = useReactTable({
        data,
        columns,
        state: {
            rowSelection,
        },
        enableRowSelection: true, //enable row selection for all rows
        // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <>
            <PageHeader title={"Listes des terrains"} link={"/admin/lands"}/>
            <div className="p-2">
                <table>
                    <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter column={header.column} table={table}/>
                                                    </div>
                                                ) : null}
                                            </>
                                        )}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td className="p-1">
                            <IndeterminateCheckbox
                                {...{
                                    checked: table.getIsAllPageRowsSelected(),
                                    indeterminate: table.getIsSomePageRowsSelected(),
                                    onChange: table.getToggleAllPageRowsSelectedHandler(),
                                }}
                            />
                        </td>
                        <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td>
                    </tr>
                    </tfoot>
                </table>
                <div className="h-2"/>
                <div className="flex items-center gap-2">
                    <button
                        className="border rounded p-1"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {"<<"}
                    </button>
                    <button
                        className="border rounded p-1"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {"<"}
                    </button>
                    <button
                        className="border rounded p-1"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {">"}
                    </button>
                    <button
                        className="border rounded p-1"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {">>"}
                    </button>
                    <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
          </strong>
        </span>
                    <span className="flex items-center gap-1">
          | Go to page:
          <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
          />
        </span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <br/>
                <div>
                    {Object.keys(rowSelection).length} of{" "}
                    {table.getPreFilteredRowModel().rows.length} Total Rows Selected
                </div>
                <hr/>
                <br/>
            </div>
        </>
    );
};

function Filter({
                    column,
                    table,
                }: {
    column: Column<any, any>;
    table: Table<any>;
}) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id);

    return typeof firstValue === "number" ? (
        <div className="flex space-x-2">
            <input
                type="number"
                value={((column.getFilterValue() as any)?.[0] ?? "") as string}
                onChange={(e) =>
                    column.setFilterValue((old: any) => [e.target.value, old?.[1]])
                }
                placeholder={`Min`}
                className="w-24 border shadow rounded"
            />
            <input
                type="number"
                value={((column.getFilterValue() as any)?.[1] ?? "") as string}
                onChange={(e) =>
                    column.setFilterValue((old: any) => [old?.[0], e.target.value])
                }
                placeholder={`Max`}
                className="w-24 border shadow rounded"
            />
        </div>
    ) : (
        <input
            type="text"
            value={(column.getFilterValue() ?? "") as string}
            onChange={(e) => column.setFilterValue(e.target.value)}
            placeholder={`Search...`}
            className="w-36 border shadow rounded"
        />
    );
}

function IndeterminateCheckbox({
                                   indeterminate,
                                   className = "",
                                   ...rest
                               }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
    const ref = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate, rest.checked]);

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + " cursor-pointer"}
            {...rest}
        />
    );
}

export default Lands;
