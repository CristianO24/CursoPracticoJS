let lista = new Array();

//capturar el numero de datos
function numeroDatos(){
    let valor = document.getElementById("InputDatos");
    let numero = parseInt(valor.value);
    return numero;
}

//Insertar la cantidad de inputs indicados
function addInput () {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("addInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    //colocar los imput
    let valorNumeroDatos =  numeroDatos();

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {      
        var inputs = `<input id="${i}" type="number" placeholder = "Dato # ${i}"></input>`;
        let input = document.getElementById("addInputs");
        input.insertAdjacentHTML('beforeend', inputs);
    }     
}

//capturas los datos e ingresarlos en el array
function datosUsuario () {
    let valorNumeroDatos =  numeroDatos ();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = document.getElementById(id);
        let valueDato = parseInt(dato.value);
        lista.push(valueDato);
    }
}

//Calcular promedio con el array lleno
function CalculaPromedio(){
    lista = [];
    datosUsuario();
    let total = 0;

    for (let i = 0; i < lista.length; i++){
        total = total + lista[i];
    }
    
    const promedio = (total/lista.length);    
    return promedio;
}

function RespuestaPromedio(){
   const result = document.querySelector(".promedio_respuesta");
   const promedio = CalculaPromedio();
   result.innerHTML = `El promedio es : ${promedio}`;
}