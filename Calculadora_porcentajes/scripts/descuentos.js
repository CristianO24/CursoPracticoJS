function CalcularPorcentaje(precio,porcentaje){
    let pfinal = precio - (precio * (porcentaje/100));
    return pfinal;
}

function CalcularResultado(){
    const result = document.querySelector(".respuesta");
    const Inputprecio = document.getElementById("Inputprecio");
    const Inputdescuento = document.getElementById("Inputdescuento");
    const valuep = Inputprecio.value;
    const valued = Inputdescuento.value;
    const valorf = CalcularPorcentaje(valuep,valued);
    result.innerHTML = `El valor final a pagar es : ${valorf} $`;
}

function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }