
Salarios = new Array;

function LlenarArray(){
 let nombre = document.getElementById("InputNombre");
 let salario = document.getElementById("InputSalario");
 let Name = nombre.value;
 let salary = salario.value;
 
 Salarios.push({
        name: Name,
        salary: salary,
    });

    const result = document.querySelector(".mostrarPersona");
    result.innerHTML = `Se agrego la persona: ${Name}, con salario: ${salary}`;

document.getElementById("InputNombre").value = "";
document.getElementById("InputSalario").value = "";

};   

function esPar (numero){
    return (numero % 2 === 0);
};

function CalculaMediana1(){
    
    const salariosCol = Salarios.map(
        function(persona){
            return persona.salary;
        }
    );

    const salariosColOrden = salariosCol.sort(
        function(salaryA, salaryB){
            return salaryA - salaryB
        }
    );   
         
    const Cantdatos = parseInt(salariosColOrden.length/2);
    let mediana;    

    if (esPar(salariosColOrden.length)){
        mediana = (parseInt(salariosColOrden[Cantdatos])+parseInt(salariosColOrden[Cantdatos-1]));
        mediana = mediana/2;
    }
    else{   
        mediana = (salariosColOrden[Cantdatos]);       
    }    

    const result = document.querySelector(".valores");
    valores = salariosColOrden;
    result.innerHTML = `De la lista de valores: ${valores}`;

    return mediana;
};

function RespuestaMediana1(){
    const result = document.querySelector(".mediana_respuesta1");
    const mediana = CalculaMediana1();
    result.innerHTML = `La mediana es : ${mediana}`;
}