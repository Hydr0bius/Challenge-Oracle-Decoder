
function encriptar(){
    let texto = document.getElementById("texto").value;
    let title = document.getElementById("mensaje");

    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

        if (texto.length !=0){
            title.innerHTML = textoCifrado;
            title.classList.add("ajustar");
            convertir();
        }else{
            alert("Ingrese el texto que desea encriptar");
        }

};

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let title = document.getElementById("mensaje");
    let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");

    if(texto.length !=0){
            title.innerHTML = textoCifrado;
            title.classList.add("ajustar");
            convertir();
            
    }else{
        alert("debes ingresar algun texto!")
    }
};

function convertir(){
    const contenido = document.getElementById("mensajeDos");
    const figure = document.getElementById("picture");
    let botonCopy = document.getElementById("btn-copy");
    
    figure.style.display = "none";
    contenido.style.display ="none";
    botonCopy.style.display = "block";
};

function copiar(){
    let title = document.getElementById("mensaje");

        navigator.clipboard.writeText(title.value);
        //botonCopy.style.display = "block";
};