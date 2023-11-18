import { Outlet } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

function App() {
  const value = {
    appendTo: "self",
  };
  return (
    <PrimeReactProvider value={value}>
      <Outlet />
    </PrimeReactProvider>
  );
}

export default App;
