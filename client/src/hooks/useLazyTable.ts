import { useState, useCallback } from "react";
import {
  DataTablePageEvent,
  DataTableSortEvent,
  DataTableFilterEvent,
  DataTableFilterMeta,
} from "primereact/datatable";
import { LazyTableState } from "../types";

export const useLazyTable = () => {
  const [lazyState, setLazyState] = useState<
    LazyTableState<DataTableFilterMeta>
  >({
    first: 0,
    rows: 10,
    page: 1,
    sortField: "name",
    sortOrder: 1,
    filters: {
      name: { value: "", matchMode: "contains" },
      address: { value: "", matchMode: "contains" },
    },
  });

  const onPage = useCallback((event: DataTablePageEvent) => {
    setLazyState((prevState) => ({
      ...prevState,
      first: event.first,
      rows: event.rows,
      page: (event.page ?? 1) + 1,
    }));
  }, []);

  const onSort = useCallback((event: DataTableSortEvent) => {
    setLazyState((prevState) => ({
      ...prevState,
      sortField: event.sortField,
      sortOrder: event.sortOrder === 1 ? 1 : -1,
    }));
  }, []);

  const onFilter = useCallback((event: DataTableFilterEvent) => {
    event["first"] = 0;
    setLazyState((prevState) => ({
      ...prevState,
      filters: event.filters,
      first: 0,
      page: 1,
    }));
  }, []);

  return { lazyState, onPage, onSort, onFilter, setLazyState };
};
