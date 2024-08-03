import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import { useUserLocation } from "../contexts/UserLocationContext";
import { useFetchLocations } from "../hooks/useFetchLocation";
import { useLazyTable } from "../hooks/useLazyTable";
import { Error } from "../shared/loadingError";

export const LocationList: React.FC = () => {
  const { lazyState, onPage, onSort, onFilter } = useLazyTable();
  const { setLocation } = useUserLocation();

  const { data, isLoading, isError } = useFetchLocations({
    search: lazyState.filters.name?.value,
    sortBy: lazyState.sortField,
    sortDirection: lazyState.sortOrder === 1 ? "asc" : "desc",
    page: lazyState.page,
    limit: lazyState.rows,
  });

  const handleRowClick = (e: any) => {
    const location = e.data;
    setLocation({ latitude: location.latitude, longitude: location.longitude });
  };

  return (
    <div className="card">
      <h2>Locations </h2>
      {isError && <Error />}
      {!isError && (
        <DataTable
          value={data?.locations || []}
          lazy
          selectionMode="single"
          filterDisplay="row"
          dataKey="id"
          paginator
          first={lazyState.first}
          rows={lazyState.rows}
          totalRecords={data?.total || 0}
          onPage={onPage}
          onSort={onSort}
          sortField={lazyState.sortField}
          sortOrder={lazyState.sortOrder === 1 ? 1 : -1}
          onFilter={onFilter}
          filters={lazyState.filters}
          loading={isLoading}
          tableStyle={{ minWidth: "75rem" }}
          onRowClick={handleRowClick}
        >
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search by name"
          />
          <Column field="score" header="Score" sortable />
          <Column field="address" header="Address" />
        </DataTable>
      )}
    </div>
  );
};
