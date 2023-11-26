import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useRef, useState } from "react";
import {
  deleteLivroService,
  getLivrosService,
} from "../../services/livrosService";
import "../../primereact-theme/theme.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import {
  deleteFuncionariosService,
  getFuncionariosService,
} from "../../services/funcionarioService";
import { useLocation, useNavigate } from "react-router-dom";

export function Tabelas() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabela, setTabela] = useState(1);

  //Livros
  const [livros, setLivros] = useState([{}]);
  const [selectedLivros, setSelectedLivros] = useState(null);
  const [deleteLivrosDialog, setDeleteLivrosDialog] = useState(false);

  //Funcionario
  const [funcionarios, setFuncionarios] = useState([{}]);
  const [selectedFuncionarios, setSelectedFuncionarios] = useState(null);
  const [deleteFuncionariosDialog, setDeleteFuncionariosDialog] =
    useState(false);

  const dt = useRef(null);
  const toast = useRef(null);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  useEffect(() => {
    getLivros();
    getFuncionarios();
  }, [location.key]);

  async function getLivros() {
    try {
      const res = await getLivrosService();
      setLivros(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getFuncionarios() {
    try {
      const res = await getFuncionariosService();
      setFuncionarios(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const confirmDeleteLivrosSelected = () => {
    setDeleteLivrosDialog(true);
  };

  const confirmDeleteFuncionariosSelected = () => {
    setDeleteFuncionariosDialog(true);
  };

  const hideDeleteLivrosDialog = () => {
    setDeleteLivrosDialog(false);
  };

  const hideDeleteFuncionariosDialog = () => {
    setDeleteFuncionariosDialog(false);
  };

  const deleteLivros = () => {
    try {
      selectedLivros.forEach(async (livro) => {
        await deleteLivroService(livro._id);
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: `${livro.nome} Apagado`,
          life: 3000,
        });
      });
      setSelectedLivros(null);
      hideDeleteLivrosDialog();
      navigate(location.pathname);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteFuncionarios = () => {
    try {
      selectedFuncionarios.forEach(async (funcionario) => {
        await deleteFuncionariosService(funcionario._id);
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: `${funcionario.nome} Apagado`,
          life: 3000,
        });
      });
      setSelectedFuncionarios(null);
      hideDeleteFuncionariosDialog();
      navigate(location.pathname);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteLivrosDialogFooter = (
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
        onClick={deleteLivros}
      />
    </React.Fragment>
  );

  const deleteFuncionariosDialogFooter = (
    <React.Fragment>
      <Button
        label="Não"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteFuncionariosDialog}
      />
      <Button
        label="Sim"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteFuncionarios}
      />
    </React.Fragment>
  );

  const livrosTablesToolbar = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Livros"
          icon="pi "
          severity="success"
          onClick={tabelaLivro}
        />
        <Button
          label="Funcionarios"
          icon="pi "
          severity="secondary"
          onClick={tabelaFuncionario}
        />
        <Button
          label="Usuarios"
          icon="pi "
          severity="secondary"
          onClick={tabelaUsuario}
        />
      </div>
    );
  };

  const funcionariosTablesToolbar = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Livros"
          icon="pi "
          severity="secondary"
          onClick={tabelaLivro}
        />
        <Button
          label="Funcionarios"
          icon="pi "
          severity="success"
          onClick={tabelaFuncionario}
        />
        <Button
          label="Usuarios"
          icon="pi "
          severity="secondary"
          onClick={tabelaUsuario}
        />
      </div>
    );
  };

  const livrosLeftToolbar = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Atualizar"
          icon="pi pi-plus"
          severity="secondary"
          onClick={confirmDeleteLivrosSelected}
          disabled={
            !selectedLivros ||
            !selectedLivros.length ||
            selectedLivros.length > 1
          }
        />
        <Button
          label="Deletar"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteLivrosSelected}
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

  const funcionariosLeftToolbar = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Atualizar"
          icon="pi pi-plus"
          severity="secondary"
          onClick={confirmDeleteFuncionariosSelected}
          disabled={
            !selectedFuncionarios ||
            !selectedFuncionarios.length ||
            selectedFuncionarios.length > 1
          }
        />
        <Button
          label="Deletar"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteFuncionariosSelected}
          disabled={!selectedFuncionarios || !selectedFuncionarios.length}
        />
      </div>
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

  const tabelaLivro = () => {
    setTabela(1);
    navigate(location.pathname);
  };

  const tabelaFuncionario = () => {
    setTabela(2);
    navigate(location.pathname);
  };
  const tabelaUsuario = () => {
    setTabela(3);
    navigate(location.pathname);
  };

  switch (tabela) {
    case 1:
      return (
        <>
          <Toast ref={toast} />
          <div className="card">
            <Toolbar
              className="mb-4 m-y-2"
              start={livrosTablesToolbar}
            ></Toolbar>
            <Toolbar
              className="mb-4 m-y-2"
              start={livrosLeftToolbar}
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
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords} Livros"
              selectionMode="multiple"
              selection={selectedLivros}
              onSelectionChange={(e) => setSelectedLivros(e.value)}
              header={renderHeader}
              filters={filters}
              className="m-y-2"
            >
              <Column
                selectionMode="multiple"
                headerStyle={{ width: "3rem" }}
              ></Column>
              <Column field="nome" header="Nome"></Column>
              <Column field="edicao" header="Edição"></Column>
              <Column field="autor" header="Autor"></Column>
              <Column field="ano" header="Ano"></Column>
            </DataTable>
          </div>

          <Dialog
            visible={deleteLivrosDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Confirmar"
            modal
            footer={deleteLivrosDialogFooter}
            onHide={hideDeleteLivrosDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />

              <span>Tem certeza que deseja deletar os itens selecionado?</span>
            </div>
          </Dialog>
        </>
      );
    case 2:
      return (
        <>
          <Toast ref={toast} />
          <div className="card">
            <Toolbar
              className="mb-4 m-y-2"
              start={funcionariosTablesToolbar}
            ></Toolbar>
            <Toolbar
              className="mb-4 m-y-2"
              start={funcionariosLeftToolbar}
              end={rightToolbar}
            ></Toolbar>
            <DataTable
              ref={dt}
              value={funcionarios}
              dataKey="_id"
              size="large"
              tableStyle={{ minWidth: "50rem" }}
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords} Funcionarios"
              selectionMode="multiple"
              selection={selectedFuncionarios}
              onSelectionChange={(e) => setSelectedFuncionarios(e.value)}
              header={renderHeader}
              filters={filters}
              className="m-y-2"
            >
              <Column
                selectionMode="multiple"
                headerStyle={{ width: "3rem" }}
              ></Column>
              <Column field="nome" header="Nome"></Column>
              <Column field="CPF" header="CPF"></Column>
            </DataTable>
          </div>

          <Dialog
            visible={deleteFuncionariosDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Confirmar"
            modal
            footer={deleteFuncionariosDialogFooter}
            onHide={hideDeleteFuncionariosDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />

              <span>Tem certeza que deseja deletar os itens selecionado?</span>
            </div>
          </Dialog>
        </>
      );
    case 3:
      return (
        <>
          <Toast ref={toast} />
          <div className="card">
            <Toolbar
              className="mb-4 m-y-2"
              start={livrosTablesToolbar}
            ></Toolbar>
            <Toolbar
              className="mb-4 m-y-2"
              start={livrosLeftToolbar}
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
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords} Livros"
              selectionMode="multiple"
              selection={selectedLivros}
              onSelectionChange={(e) => setSelectedLivros(e.value)}
              header={renderHeader}
              filters={filters}
              className="m-y-2"
            >
              <Column
                selectionMode="multiple"
                headerStyle={{ width: "3rem" }}
              ></Column>
              <Column field="nome" header="Nome"></Column>
              <Column field="edicao" header="Edição"></Column>
              <Column field="autor" header="Autor"></Column>
              <Column field="ano" header="Ano"></Column>
            </DataTable>
          </div>

          <Dialog
            visible={deleteLivrosDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Confirmar"
            modal
            footer={deleteLivrosDialogFooter}
            onHide={hideDeleteLivrosDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />

              <span>Tem certeza que deseja deletar os itens selecionado?</span>
            </div>
          </Dialog>
        </>
      );
    default:
      setTabela(1);
      break;
  }
}
