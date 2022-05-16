import React from "react";

const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha alta: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 
          text-white font-bold uppercase rounded-lg active:bg-indigo-800"
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 
          text-white font-bold uppercase rounded-lg active:bg-red-800"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
