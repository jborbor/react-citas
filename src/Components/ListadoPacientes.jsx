import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);
  console.log(pacientes.length);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => {
            return <Paciente key={paciente.id} paciente={paciente} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza{" "}
            <span className="text-indigo-600 font-bold">
              agregando Pacientes
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
