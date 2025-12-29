"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { DataTablePagination } from "@/components/admin/DataTablePagination";

import { PROPERT_CATEGORIES } from "@/constants";
import { PropertyCategory } from "@/types/propertyCategory";

interface DataTableProps<TValue> {
  columns: ColumnDef<PropertyCategory, TValue>[];
}

export function DataTable<TValue>({ columns }: DataTableProps<TValue>) {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 20 });
  const [rowSelection, setRowSelection] = useState({});
  // const { data, isLoading } = useGetAllProductAdmin({
  //   page: String(pagination.pageIndex + 1),
  //   limit: String(pagination.pageSize),
  // });

  // const totalCount = data?.totalCount ?? 0;

  // const pageCount = data?.totalPages;
  const isLoading = false;
  const pageCount = 1;

  const table = useReactTable({
    data: PROPERT_CATEGORIES,
    columns,
    pageCount,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),

    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    // getPaginationRowModel: getPaginationRowModel(),

    state: {
      rowSelection,
      pagination,
    },
  });

  return (
    <div className="overflow-hidden rounded-md border mt-8 bg-background px-4 pb-8">
      {Object.entries(rowSelection).length > 0 && (
        <div className="flex items-center">
          <button className="bg-red-600 text-white py-2 px-4 rounded-md font-medium mb-2 mt-5 text-sm hover:opacity-85">
            Delete property(s)
          </button>
        </div>
      )}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="p-5">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-5 capitalize">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DataTablePagination table={table} />
    </div>
  );
}
