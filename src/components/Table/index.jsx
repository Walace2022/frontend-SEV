import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useRef, useState } from "react";
import { getLivrosService } from "../../services/livrosService";
import "../../primereact-theme/theme.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";

export function Tabelas() {
  const [livros, setLivros] = useState([{}]);
  const [selectedLivros, setSelectedLivros] = useState(null);
  const [deleteLivrosDialog,setDeleteLivrosDialog] = useState(false);
  const dt = useRef(null);

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

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteLivrosDialog(true);
  };

  const hideDeleteLivrosDialog = () => {
    setDeleteLivrosDialog(false);
  };

  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="Não"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteLivrosDialog}
      />
      <Button
        label="Sim"
        icon="pi pi-check"
        severity="danger"
        onClick={hideDeleteLivrosDialog}
      />
    </React.Fragment>
  );

  const leftToolbar = () => {
    return (
      <div className="flex flex-wrap">
        <Button
          label="Deletar"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedLivros || !selectedLivros.length}
        />
      </div>
    );
  };

  const rightToolbar = () => {
    return (
      <Button
        label="Exportar"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
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
    <div className="card">
        <Toolbar
          className="mb-4"
          start={leftToolbar}
          end={rightToolbar}
        ></Toolbar>
      <DataTable
      ref={dt}
        value={livros}
        dataKey="_id"
        size="large"
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={5}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords} Livros"
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
        <Column field="nome" header="Nome" ></Column>
        <Column field="edicao" header="Edição" ></Column>
        <Column field="autor" header="Autor" ></Column>
        <Column field="ano" header="Ano" ></Column>
      </DataTable>
    </div>

    <Dialog
    visible={deleteLivrosDialog}
    style={{ width: "32rem" }}
    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
    header="Confirmar"
    modal
    footer={deleteProductsDialogFooter}
    onHide={hideDeleteLivrosDialog}
  >
    <div className="confirmation-content">
      <i
        className="pi pi-exclamation-triangle mr-3"
        style={{ fontSize: "2rem" }}
      />
      
        <span>
          Tem certeza que deseja deletar os itens selecionado?
        </span>
      
    </div>
  </Dialog>
    </>
  );
}
