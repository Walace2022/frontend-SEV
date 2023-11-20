import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { getLivrosService } from "../../services/livrosService";
import "../../primereact-theme/theme.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

export function Tabelas() {
  const [livros, setLivros] = useState([
    {
      _id: "",
      nome: "",
      edicao: "",
      autor: "",
      ano: "",
    },
  ]);
  const [selectedLivros, setSelectedLivros] = useState(null);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  async function getLivros() {
    try {
      const res = await getLivrosService();
      setLivros(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getLivros();
  }, []);

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="">
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Digite oque procura"
          />
        </span>
      </div>
    );
  };

  return (
    <>
      <DataTable
        value={livros}
        dataKey="_id"
        size="large"
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={5}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        selectionMode="multiple"
        selection={selectedLivros}
        onSelectionChange={(e) => setSelectedLivros(e.value)}
        header={renderHeader}
        filters={filters}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column field="nome" header="Nome" sortable></Column>
        <Column field="edicao" header="Edição" sortable></Column>
        <Column field="autor" header="Autor" sortable></Column>
        <Column field="ano" header="Ano" sortable></Column>
      </DataTable>
    </>
  );
}
