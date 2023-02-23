import React from "react";

export default function Ternarios() {
  let dia = 4;
  let horaApertura;
  let horaActual = 20;
  let mensaje;

  horaApertura = [0, 6].includes(dia) ? 11 : 9;
  console.log(`hoy abrimos a las ${horaApertura}`);

  mensaje = horaActual >= horaApertura ? "abierto" : "cerrado";

  const esMayor = (a, b) => (a > b ? a : b);
  console.log(esMayor(8, 5));
  const TieneMembresia = (miembro) => (miembro ? "2 dolares" : "10 dolares");
  console.log(TieneMembresia(false));

  const nota = 98;
  const grado =
    nota > 95
      ? "A+"
      : nota > 90
      ? "A"
      : nota > 85
      ? "B+"
      : nota > 80
      ? "B"
      : "F";

  console.log({ nota, grado });

  const carros = ['toyota', 'kia', 'mitsu', 'lambo'];
  let i=0;
  while(i<carros.length){
    console.log(carros[i]);
    i++;
  }

  return (
    <div>
      <h2>hoy abrimos a las: {horaApertura}</h2>
      <p>asi que esta {mensaje}</p>
    </div>
  );
}
