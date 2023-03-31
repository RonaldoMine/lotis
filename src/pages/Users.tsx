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
import Pagination from "../components/Pagination";

type Props = {};

type UserRowModel = {
    first_name: string
    last_name: string
    phone: string
    email: string
    commercial_register_number: string
    cni_number: string
    subRows?: UserRowModel[]
}

const Users = (props: Props) => {
    const [data, setData] = useState<any>([]);
    const [enabledFilter, setEnabledFilter] = useState<boolean>(false)
    const {auth} = useAuth()

    //side effects
    useEffect(() => {
        (async () => {
            const fetchUsers = await axios.get(BASE_URL + "users", {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            setData(fetchUsers?.data);
        })();
    }, [auth.token]);

    const [rowSelection, setRowSelection] = useState({});
    // const [globalFilter, setGlobalFilter] = useState("");

    const columns = useMemo<ColumnDef<UserRowModel>[]>(
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
                header: "Noms",
                footer: (props) => props.column.id,
                accessorKey: "first_name",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Prénoms",
                footer: (props) => props.column.id,
                accessorKey: "last_name",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Téléphone",
                footer: (props) => props.column.id,
                accessorKey: "phone",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Email",
                footer: (props) => props.column.id,
                accessorKey: "email",
                // cell: (info) => info.getValue(),
            },
            {
                header: "Registre du commerce",
                footer: (props) => props.column.id,
                accessorKey: "commercial_register_number",
                // cell: (info) => info.getValue(),
            },
            {
                header: "CNI",
                footer: (props) => props.column.id,
                accessorKey: "cni_number",
                // cell: (info) => info.getValue(),
            }
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
        enableFilters: enabledFilter
    });

    return (
        <>
            <PageHeader title={"Terrains"} link={"/admin/lands"}/>
            <div className="card">
                <div className="card-header pb-0 flex justify-between">
                    <h5>Liste des utilisateurs</h5>
                    <button type="button" onClick={() => setEnabledFilter(!enabledFilter)}
                            className={`btn btn-pill ${enabledFilter ? 'btn-gradient' : 'btn-dashed'} color-4`}>Filtrer
                    </button>
                </div>
                <div className="card-body payment-table row">
                    <div className="w-full p-2">
                        <table className="w-full">
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
                                <td className="p-1 text-center">
                                    <IndeterminateCheckbox
                                        {...{
                                            checked: table.getIsAllPageRowsSelected(),
                                            indeterminate: table.getIsSomePageRowsSelected(),
                                            onChange: table.getToggleAllPageRowsSelectedHandler(),
                                        }}
                                    />
                                </td>
                                <td colSpan={table.getColumn.length - 1}>Lignes ({table.getRowModel().rows.length})</td>
                            </tr>
                            </tfoot>
                        </table>
                        <div className={"mt-2 px-2"}>
                            {Object.keys(rowSelection).length} sur{" "}
                            {table.getPreFilteredRowModel().rows.length} lignes selectionnées
                        </div>
                        <hr/>
                        <Pagination table={table}/>
                    </div>
                </div>
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
                className="w-36 border rounded p-1"
                style={{fontSize: 12, fontWeight: "initial"}}
            />
        </div>
    ) : (
        <input
            type="text"
            value={(column.getFilterValue() ?? "") as string}
            onChange={(e) => column.setFilterValue(e.target.value)}
            placeholder={`Search...`}
            className="w-36 border rounded p-1"
            style={{fontSize: 12, fontWeight: "initial"}}
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

export default Users;
