// script.js
let active_event = 0;
let messages_pool = [
    "Estas bobita mi amor, ese valor no es correcto", 
    "Te quiero Sam, pero tas mal", 
    "Me woa ofender porque pusiste algo malo",
    "Cóooooomoooo, de verdad pusiste eso, potente",
    "La de contestar bien te la sabes?"
]


// Función para ocultar la página de inicio y mostrar el escape room al hacer clic en "Iniciar"
function iniciarEscapeRoom() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("escapeRoom").style.display = "block";
    active_event = 1;
}

function verificarFase1() {
    var password = document.getElementById("passwordInput").value.toLowerCase();
    
    // Reemplaza 'contraseña1' con la contraseña real para la fase 1
    if (password === 'hermosa') {
        document.getElementById("fase1").style.display = "none";
        document.getElementById("fase2").style.display = "block";
        active_event = 2;
    } else {
        displayError();
    }
}

function verificarFase2() {
    var selectedDate = document.getElementById("passwordInput2").value;
    
    // Reemplaza 'contraseña2' con la contraseña real para la fase 2
    if (selectedDate === '2023-09-12') {
        document.getElementById("fase2").style.display = "none";
        document.getElementById("fase3").style.display = "block";
        active_event = 3;
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

function verificarFase3() {
    var password = document.getElementById("passwordInput3").value.toLowerCase();
    
    // Reemplaza 'contraseña3' con la contraseña real para la fase 3
    if (password === 'tulipanes') {
        document.getElementById("fase3").style.display = "none";
        document.getElementById("final").style.display = "block";
        active_event = 4;
        mostrarMensajeFinal();
    } else {
        displayError();
    }
}

function mostrarMensajeFinal() {
    // Puedes personalizar el mensaje final aquí
    document.getElementById("mensajeFinal").innerHTML = "¡TE QUIEROOOOR! Mi niña hermosa.";
}


function displayError() {
    var randomIndex = Math.floor(Math.random() * messages_pool.length);
    // Show the error message
    document.getElementById("errorMensaje").innerHTML = messages_pool[randomIndex];
    document.getElementById("errorMensaje").style.display = "block";
}

function verificarEnter(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior of the Enter key
        switch (active_event) {
            case 1:
                verificarFase1();
                break;
            case 2:
                verificarFase2();
                break;
            case 3:
                verificarFase3();
                break;
            default:
                break;
        }
    }
}