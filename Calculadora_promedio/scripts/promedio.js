function CalculaPromedio(lista){
    lista = new Array();
    let total = 0;

    for (let i = 0; i < lista.length; i++){
        total = total + lista[i];
    }
    
    const promedio = (total/lista.length)

    console.log(total);
    console.log(promedio);
}

/*function MostrarPromedio(){
    const result = document.querySelector(".promedio_respuesta"); 
    const lista = document.getElementById("InputPromedio");
    const valorLista = [].map.call(lista,function(){

    }
    const resultado = CalculaPromedio(valorLista);
    result.innerHTML = `El promedio es ${resultado}`;    

}*/

function numeroDatos(){
    let valor = document.getElementById("InputDatos");
    let numero = parseInt(valor.value);
    return numero;
}


function addInput () {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("addInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    //quitar respuesta
    /*const resultado = document.getElementById("promedio_respuesta");
    resultado.innerHTML = " ";*/

    //colocar los imput
    let valorNumeroDatos =  numeroDatos();

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = 
        `<input id="${i}" type="number" placeholder = "Dato # ${i}"></input>`;
        let input = document.getElementById("addInputs");
        input.insertAdjacentHTML('beforeend', direccion);
    }
    
}
