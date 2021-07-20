let lista2 = new Array();

//capturar el numero de datos
function numeroDatos3(){
    let valor = document.getElementById("InputDatos3");
    let numero = parseInt(valor.value);
    return numero;
}

//Insertar la cantidad de inputs indicados
function addInput3() {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("addInputs3");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    //colocar los imput
    let valorNumeroDatos = numeroDatos3();

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {      
        var inputs = `<input id="moda${i}" type="number" placeholder = "Dato # ${i}"></input>`;
        let input = document.getElementById("addInputs3");
        input.insertAdjacentHTML('beforeend', inputs);
    }     
}

//capturas los datos e ingresarlos en el array
function datosUsuario3() {
    let valorNumeroDatos = numeroDatos3();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = "moda"+i;
        let dato = document.getElementById(id);
        let valueDato = parseInt(dato.value);
        lista2.push(valueDato);
        lista2 = lista2.sort((a, b) => a - b);
    }
}

//Calcular promedio con el array lleno
function CalculaModa(){
    lista2 = [];
    datosUsuario3();

    let Cantdatos = parseInt(lista2.length/2);
    let mediana;

    if (Cantdatos % 2 === 0){
        mediana = (lista2[Cantdatos]);
    }
    else{   
        mediana = ((lista2[Cantdatos]+lista2[Cantdatos-1])/2)
    }    
    return mediana;    
}

function RespuestaModa(){
   const result = document.querySelector(".moda_respuesta");
   const moda = CalculaModa();
   result.innerHTML = `La moda es : ${moda}`;
}