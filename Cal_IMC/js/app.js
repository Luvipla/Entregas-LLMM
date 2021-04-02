//variables para recoger datos del formulario 
//(aqui solo se declaran, se definen dentro de la función para que refresquen su valor cada vez que se haga clic al botón)

var nombre;
var edad;
var peso;
var altura;
var imc;
var resultado;

//Definición de función de cálculo:
function calculo() {
    nombre= document.getElementById("nombre");
    edad= document.getElementById("edad");
    peso= document.getElementById("peso").value;
    altura= document.getElementById("altura").value;

    //Calculo IMC y lo devuelvo al input resultado:
    imc=(peso/(altura*altura)).toFixed(2); //limito la cifra decimal a solo 2 dígitos.
    resultado=document.getElementById("resultado");     
    resultado.value= "Hola "+nombre.value+", tu edad es de "+edad.value+" años y tu IMC es: "+imc+" kg/m2"; 
    console.log("Hola "+nombre.value+", tu edad es de "+edad.value+" años y tu IMC es: "+imc+" kg/m2");
    return false;
}
