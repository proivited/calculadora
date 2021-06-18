function main(){
    let formulario = document.forms["formulario"];
    let peso = parseInt(formulario["peso"].value); //nos trae el formulario como elementos en orden de su pos
    let estatura = parseInt(formulario["estatura"].value);
    let numero = parseInt(formulario["numero"].value);

    console.log(`peso = ${peso} tipo de dato ${typeof(peso)}`);
    console.log(`estatura = ${estatura} tipo de dato ${typeof(estatura)}`);
    console.log(`numero = ${numero} tipo de dato ${numero}`);


    masa(peso, estatura);
    serie(numero);
}

function masa(kilo , estatura){
    let resultado;
    resultado = kilo/(estatura * estatura) ;
    console.log(resultado.toFixed(2)); //para redondear en dos decimales
}

function serie( n ){
    let resultado;
    resultado = (n * (n+1))/2;
    console.log(resultado);
}