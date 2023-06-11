var txtEntrada = document.querySelector('#textAreaEntrada');
var txtSalida = document.querySelector('#textAreaSalida');

var btnEncriptar=document.querySelector('#btnEncriptar');
var btnDesencriptar=document.querySelector('#btnDesencriptar');

var btnCopiar=document.querySelector('#btnCopiar');

var divError=document.querySelector('#divError');

var imgPersonaje=document.querySelector('#imgPersonaje');
var textMsj=document.querySelector('#textMsj');
var textInfo=document.querySelector('#textInfo');


function validar(){
    var texto=txtEntrada.value;
    var regex = /^[a-z ]+$/;
    if(regex.test(texto)){
        encriptar();
        divError.style.color = "#495057";
    }else{
        divError.style.color = "red";
    }
  } 

  function ocultar(){
    imgPersonaje.style.display = "none";
    btnCopiar.style.display="block";
    textMsj.style.display="none";
    textInfo.style.display="none";
  }
  function mostrar(){
    if (screen.width > 770) 
        imgPersonaje.style.display = "block";
    else 
    imgPersonaje.style.display = "none";

    btnCopiar.style.display="none";
    textMsj.style.display="block";
    textInfo.style.display="block";
  }

function encriptar() {
    var texto=txtEntrada.value;
    var txtEncriptado= texto.replace(/e/g,"enter")
                        .replace(/i/g,"imes")
                        .replace(/a/g,"ai")
                        .replace(/o/g,"ober")
                        .replace(/u/g,"ufat");
    ocultar();                   
    txtSalida.value=txtEncriptado;
}

function desencriptar(){
    var texto=txtEntrada.value;
    var txtDesencriptado = texto.replace(/enter/g,"e")
                    .replace(/imes/g,"i")
                    .replace(/ai/g,"a")
                    .replace(/ober/g,"o")
                    .replace(/ufat/g,"u");
    ocultar(); 
    txtSalida.value=txtDesencriptado;
}

function copiar(){
    navigator.clipboard.writeText(txtSalida.value);
    txtEntrada.value="";
    txtEntrada.focus();
    txtSalida.value=""
    mostrar();
}

btnEncriptar.onclick=validar;
btnDesencriptar.onclick=desencriptar;
btnCopiar.onclick=copiar;