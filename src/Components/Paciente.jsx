import React from "react";
import alertify from "alertifyjs";
alertify.set('notifier', 'position', 'top-right');

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    alertify.confirm('Eliminar Paciente', 'Desea eliminar este Paciente?',
      function () { alertify.error('Registro eliminado..'); eliminarPaciente(id); },
      function () { });
  }

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

      <div className="flex justify-between mt-5 md:flex-col sm:flex-row lg:flex-row">
        <button
          type="button"
          className="mb-2 py-2 px-10 bg-indigo-600 hover:bg-indigo-700 
          text-white font-bold uppercase rounded-lg active:bg-indigo-800"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="mb-2 py-2 px-10 bg-red-600 hover:bg-red-700 
          text-white font-bold uppercase rounded-lg active:bg-red-800"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
