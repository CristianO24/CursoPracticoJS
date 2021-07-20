function CalcularPorcentaje(precio,porcentaje){
    let pfinal = precio - (precio * (porcentaje/100));
    return pfinal;
}

const adescuento = [
  {
    nombre: "holiday",
    descuento: 15,
  },
  {
    nombre: "halloween",
    descuento: 20,
  },{
    nombre: "4july",
    descuento: 30,
  }
];


function Calcularcupon(cupon){

  const isCouponValueValid = function (adescuento) {
    return adescuento.nombre === cupon;
  };

const userCoupon = adescuento.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + cupon + " no es válido");
    const descuento = 0;
    return descuento;

  }else {
    const descuento = userCoupon.descuento;
    return descuento;
  }
}


function CalcularResultado(){
  
  //Traer los valores desde HTML
  const Inputprecio = document.getElementById("Inputprecio");
  const Inputdescuento = document.getElementById("Inputdescuento");
  const Inputcupon = document.getElementById("Inputcupon");
  const valuep = parseInt(Inputprecio.value);
  let valued = parseInt(Inputdescuento.value);
  const valuec = Inputcupon.value;

  //Ejecuta la funciones para saber si aplica un cupon y calcula el descuento
  const valorc = Calcularcupon(valuec);   
  valued = valued + valorc;
  const valorf = CalcularPorcentaje(valuep,valued);
  
  //Respuestas 
  const result = document.querySelector(".respuesta");
  const descupon = document.querySelector(".descupon")
  result.innerHTML = `El valor final a pagar es : ${valorf} $`;
  descupon.innerHTML = `El porcentaje de descuento del cupon es de ${valorc}%`;
  

}