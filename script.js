/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function encriptar(texto)
{
    var txt=texto.replace(/e/igm,"enter");
    var txt=txt.replace(/i/igm,"imes");
    var txt=txt.replace(/a/igm,"ai");
    var txt=txt.replace(/o/igm,"ober");
    var txt=txt.replace(/u/igm,"ufat");
    return txt;
}

function desencriptar(texto)
{
    var txt=texto.replace(/enter/igm,"e");
    var txt=txt.replace(/imes/igm,"i");
    var txt=txt.replace(/ai/igm,"a");
    var txt=txt.replace(/ober/igm,"o");
    var txt=txt.replace(/ufat/igm,"u");
    return txt;
}

function mostrarEncriptacion()
{
    var texto=document.getElementById("inputTexto").value.toString();
    var textoEncriptado=encriptar(texto);
    document.getElementById("img1").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("texto2").innerHTML= textoEncriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}

function mostrarDesencriptacion(){
    var texto=document.getElementById("inputTexto").value.toString();
    var textoDesencriptado=desencriptar(texto);
    document.getElementById("img1").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("texto2").innerHTML= textoDesencriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}

function copiar()
{
    const resultado= document.getElementById("texto2");
    const texto = resultado.innerText;
    navigator.clipboard.writeText(texto)
}
