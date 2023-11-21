import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useRef, useState } from "react";
import "../../primereact-theme/theme.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { Header } from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { BodyContainer } from "../../GlobalStyled";
import { deleteEmprestimosService, getEmprestimosService } from "../../services/emprestimoService";
import { Navigate, useNavigate } from "react-router-dom";

export function Emprestimo() {
  const [emprestimos, setEmprestimos] = useState([{}]);
  const [selectedEmprestimos, setSelectedEmprestimos] = useState(null);
  const [deleteEmprestimosDialog, setDeleteEmprestimosDialog] = useState(false);
  const dt = useRef(null);
  const toast = useRef(null);
  const navigate = useNavigate();

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

  async function getEmprestimos() {
    try {
      const res = await getEmprestimosService();
      setEmprestimos(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getEmprestimos();
  }, []);

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteEmprestimosDialog(true);
  };

  const hideDeleteEmprestimosDialog = () => {
    setDeleteEmprestimosDialog(false);
  };

  const deleteEmprestimos = () => {
    try {
      selectedEmprestimos.forEach(async (emprestimo) => {
        await deleteEmprestimosService(emprestimo._id);
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: `${emprestimo.test1} Apagado`,
          life: 3000,
        });
      });
    } catch (err) {
      console.log(err.message);
    }
    setSelectedEmprestimos(null);
    getEmprestimos();
    hideDeleteEmprestimosDialog();
  };

const novoEmprestimo = ()=>{
    navigate("/emprestimo/novo");
}

  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="Não"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteEmprestimosDialog}
      />
      <Button
        label="Sim"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteEmprestimos}
      />
    </React.Fragment>
  );

  const leftToolbar = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          onClick={novoEmprestimo}
        />
        <Button
          label="Deletar"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedEmprestimos || !selectedEmprestimos.length}
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
      <div className=" flex justify-content-end">
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
    <Header />
      <NavBar />
      <BodyContainer>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4 m-y-2"
          start={leftToolbar}
          end={rightToolbar}
        ></Toolbar>
        <DataTable
          ref={dt}
          value={emprestimos}
          dataKey="_id"
          size="large"
          tableStyle={{ minWidth: "50rem" }}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords} Emprestimos"
          selectionMode="multiple"
          selection={selectedEmprestimos}
          onSelectionChange={(e) => setSelectedEmprestimos(e.value)}
          header={renderHeader}
          filters={filters}
          className="m-y-2"
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column field="test1" header="Nome"></Column>
          <Column field="fe" header="Edição"></Column>
        </DataTable>
      </div>

      <Dialog
        visible={deleteEmprestimosDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirmar"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteEmprestimosDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />

          <span>Tem certeza que deseja deletar os itens selecionado?</span>
        </div>
      </Dialog>
      </BodyContainer>
      <Footer />
    </>
  );
}
