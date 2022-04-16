import React from "react";

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        nombre: <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        propietario: <span className="font-normal normal-case">Juan</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">jborbor@gmail.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha alta:{" "}
        <span className="font-normal normal-case">10 Diciembre de 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi
          maxime ea in recusandae vel rem voluptates modi natus animi magnam
          aperiam omnis obcaecati, eos nam veritatis maiores, odio
          reprehenderit.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
