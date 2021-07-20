let lista1 = new Array();

//capturar el numero de datos
function numeroDatos2(){
    let valor = document.getElementById("InputDatos2");
    let numero = parseInt(valor.value);
    return numero;
}

//Insertar la cantidad de inputs indicados
function addInput2 () {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("addInputs2");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    //colocar los imput
    let valorNumeroDatos =  numeroDatos2();

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {      
        var inputs = `<input id="${i}" type="number" placeholder = "Dato # ${i}"></input>`;
        let input = document.getElementById("addInputs2");
        input.insertAdjacentHTML('beforeend', inputs);
    }     
}

//capturas los datos e ingresarlos en el array
function datosUsuario2 () {
    let valorNumeroDatos =  numeroDatos2 ();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = document.getElementById(id);
        let valueDato = parseInt(dato.value);
        lista1.push(valueDato);
        lista1 = lista1.sort((a, b) => a - b);
    }
}

//Calcular promedio con el array lleno
function CalculaMediana(){
    lista1 = [];
    datosUsuario2();

    let Cantdatos = parseInt(lista1.length/2);
    let mediana;

    if (Cantdatos % 2 === 0){
        mediana = ((lista1[Cantdatos]+lista1[Cantdatos-1])/2)
    }
    else{   
        mediana = (lista1[Cantdatos]);        
    }    
    return mediana;    
}

function RespuestaMediana(){
   const result = document.querySelector(".mediana_respuesta");
   const mediana = CalculaMediana();
   result.innerHTML = `La mediana es : ${mediana}`;
}