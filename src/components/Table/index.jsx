import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { getLivrosService } from "../../services/livrosService";
import "../../primereact-theme/theme.css";

export function TableTest() {
  const [livros, setLivros] = useState({});
  const [selectedLivros, setSelectedLivros] = useState(null);

  async function getLivros() {
    const res = await getLivrosService();
    setLivros(res.data);
  }

  useEffect(() => {
    getLivros();
  }, []);
  return (
    <DataTable
      value={livros}
      size="large"
      tableStyle={{ minWidth: "50rem" }}
      paginator
      rows={10}
      rowsPerPageOptions={[2, 10, 25]}
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      selectionMode="multiple"
      selection={selectedLivros}
      onSelectionChange={(e) => setSelectedLivros(e.value)}
    >
      <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
      <Column field="nome" header="Nome" sortable></Column>
      <Column field="edicao" header="Edição" sortable></Column>
      <Column field="autor" header="Autor" sortable></Column>
      <Column field="ano" header="Ano" sortable></Column>
    </DataTable>
  );
}
