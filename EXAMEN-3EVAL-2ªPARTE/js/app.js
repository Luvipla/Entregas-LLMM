//Definición de función de cálculo:
function calculo() {
    
    //Se recogen los valores de cada imput en sus respectivas variables:
   
    prog= document.getElementById("asig1").value;
    BD= document.getElementById("asig2").value;
    EEDD= document.getElementById("asig3").value;
    LLMM= document.getElementById("asig4").value;
    Ingles= document.getElementById("asig5").value;

    //Tal como se indicaba en la rúbrica, aplicamos la conversión a dato de tipo Float y guardamos en una nueva variable:

    prog2= parseFloat(prog);
    BD2=parseFloat(BD);
    EEDD2=parseFloat(EEDD);
    LLMM2=parseFloat(LLMM);
    Ingles2=parseFloat(Ingles);

    //Calculo media y lo devuelvo al input resultado, aquí no modifico nada:
    media=((prog2+BD2+EEDD2+LLMM2)/4).toFixed(2); //limito la cifra decimal a solo 2 dígitos.
    resultado=document.getElementById("resultado");
    resultado.value= media;
    
    //En el nuevo apartado calculo la media incluyendo a Inglés y devuelvo el resultado en el nuevo campo:
    media2=((prog2+BD2+EEDD2+LLMM2+Ingles2)/5).toFixed(2); //limito la cifra decimal a solo 2 dígitos.
    resultado2=document.getElementById("resultado2");
    resultado2.value= media2;
    
    console.log("media: " +resultado);
    return false;
}