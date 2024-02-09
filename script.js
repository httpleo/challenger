function codifica(texto) {
    var caracteres = texto.split("");
    caracteres.forEach(function(item, i) {
        if(item == "a") {
            caracteres[i] = "ai";
        } else if(item == "e") {
            caracteres[i] = "enter";
        } else if(item == "i") {
            caracteres[i] = "imes";
        } else if(item == "o") {
            caracteres[i] = "ober";
        } else if(item == "u") {
            caracteres[i] = "ufat";
        }
    });
    return caracteres.join("");
}
function decodifica(texto) {
    var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    for(var i = 0; i < codigo.length; i++) {
        var regex = new RegExp(codigo[i][1], "g");
        texto = texto.replace(regex, codigo[i][0]);
    }
    return texto;
}

function escreveCodificado() {
    var resultado = document.querySelector(".resultado");
    resultado.textContent = codifica(inputTexto.value);
}

function escreveDecodificado() {
    var resultado = document.querySelector(".resultado");
    resultado.textContent = decodifica(inputTexto.value);
}

var inputTexto = document.querySelector(".input-texto");
var resultado = document.querySelector(".resultado");
var btnCodificar = document.querySelector(".btn-codificar");
var btnDecodificar = document.querySelector(".btn-decodificar");
var mensagensErro = document.querySelector(".mensagens-erro");

btnCodificar.addEventListener("click", function() {
    escreveCodificado();
});

btnDecodificar.addEventListener("click", function() {
    escreveDecodificado();
});
    
 
