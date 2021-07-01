
//Codigo de Cuadrado

function PerimetroCuadrado(lado){
    return lado * 4;
}

function AreaCuadrado(lado){
    return lado * lado;
}


function PerimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function AreaTriangulo(altura, base){
    return (altura * base) / 2;
}

//Codigo de circulo


const PI = Math.PI;

function DiametroCirculo (radio){
    return radio * 2; 
}

function PerimetroCirculo (radio){
    const diametro =  DiametroCirculo(radio)
    return diametro * PI; 
}

function AreaCirculo (radio){
    return (radio * radio) * PI
}


function CalcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;
   const perimetro = PerimetroCuadrado(value);
   alert(perimetro);
}


function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = AreaCuadrado(value);
    alert(area);  
}