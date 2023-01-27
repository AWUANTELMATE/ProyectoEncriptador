var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".persona");
var h2 = document.querySelector(".texto");
var parrafo = document.querySelector(".parrafo");
var resultado = document.querySelector(".textoResultado");


const copyBtn = document.querySelector('.btn-copiar');


copyBtn.addEventListener('click', function() {
   
    const text = document.querySelector('.textoResultado').innerText;
   
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard!');
    }, function(err) {
        console.error('Failed to copy text: ', err);
    });
});


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar() {
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto() {
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    h2.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}


function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}