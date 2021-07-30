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

//Calcular moda con el array lleno
function CalculaModa(){
    lista2 = [];
    datosUsuario3();

    lista2Count = {};

    lista2.map(
        function(elemento){
            if (lista2Count[elemento]){
                lista2Count[elemento] += 1;
            }
            else{   
                lista2Count[elemento] = 1;
            }    
        }
    ); 

    const Lista2Array = Object.entries(lista2Count).sort(
        function (elemento1, elemento2){
            elemento1[1] - elemento2[1];
        }
    );

    const moda = Lista2Array[Lista2Array.length -1];
    return Lista2Array;
}

function RespuestaModa(){
   const result = document.querySelector(".moda_respuesta");
   const moda = CalculaModa();
   result.innerHTML = `La moda es : ${moda[0]}`;
}