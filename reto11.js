// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
function shouldBuyFidelity(times) {
  const entradaNormal = 12 * times;
  let tarjeta = 250;
  let ultimoPrecio = (12 * 0.75);
  let i = 0;

  while (i < times) {
    tarjeta = tarjeta + (ultimoPrecio)
    ultimoPrecio = ultimoPrecio * 0.75;
    i++;
  }

  return tarjeta < entradaNormal ? true : false;
}

console.log(shouldBuyFidelity(26))