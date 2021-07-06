
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

/// Funciones Cuadrado
function CalcularPerimetroCuadrado(){
   const result = document.querySelector(".Cuadrado_respuesta");
   const input = document.getElementById("InputCuadrado");
   const value = input.value;
   const perimetro = PerimetroCuadrado(value);
   result.innerHTML = `El perimetro del cuadrado es de : ${perimetro} cm`;
}

function CalcularAreaCuadrado(){
    const result = document.querySelector(".Cuadrado_respuesta");
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = AreaCuadrado(value);
    result.innerHTML = `El area del cuadrado es de : ${area} cm²`;
    }

/// Funciones Triangulo
function CalcularPerimetroTriangulo(){
    const result = document.querySelector(".Triangulo_respuesta");
    const InputLado1 = document.getElementById("InputLado1");
    const InputLado2 = document.getElementById("InputLado2");
    const InputBase = document.getElementById("Base");
    const lado1 = parseInt(InputLado1.value);
    const lado2 = parseInt(InputLado2.value);
    const base = parseInt(InputBase.value);
    const perimetro = PerimetroTriangulo(lado1, lado2, base);
    result.innerHTML = `El perimetro del triangulo es de : ${perimetro} cm`;    
}

function CalcularAreaTriangulo(){
    const result = document.querySelector(".Triangulo_respuesta");
    const InputAltura = document.getElementById("Inputaltura");
    const InputBase = document.getElementById("Base");
    const altura = InputAltura.value;
    const base = InputBase.value;
    const area = AreaTriangulo(altura, base);
    result.innerHTML = `El area del triangulo es de : ${area} cm²`;    
}

/// Funciones Circulo
function CalcularPerimetroCirculo(){
    const result = document.querySelector(".Circulo_respuesta");
    const Inputradio = document.getElementById("Inputradio");
    const radio = Inputradio.value;
    const perimetro = PerimetroCirculo(radio);
    result.innerHTML = `El perimetro del triangulo es de : ${perimetro} cm`;    
}

function CalcularAreaCirculo(){
    const result = document.querySelector(".Circulo_respuesta");
    const Inputradio = document.getElementById("Inputradio");
    const radio = Inputradio.value;
    const perimetro = AreaCirculo(radio);
    result.innerHTML = `El area del triangulo es de : ${perimetro} cm²`;    
}

function CalcularDiametroCirculo(){
    const result = document.querySelector(".Circulo_respuesta");
    const Inputradio = document.getElementById("Inputradio");
    const radio = Inputradio.value;
    const perimetro = DiametroCirculo(radio);
    result.innerHTML = `El diametro del circulo es de : ${perimetro} cm`;    
}