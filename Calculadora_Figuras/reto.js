function CalcularAltura(lado1, lado2, base){
     if (lado1 === lado2 & lado1 != base){
            console.log("El triangulo es isósceles");
            const altura = Math.sqrt((lado1 * lado1) - ((base * base)/4));
            console.log(`La altura del triangulo es ${altura}`);
     }   
     else {
            console.log("El triangulo no es isósceles");
    }
     
}