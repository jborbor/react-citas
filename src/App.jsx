import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoPacientes from "./Components/ListadoPacientes";
import { useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
  );
}

export default App;
