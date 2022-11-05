const valorTicket = 200;
const regex = /^[a-zA-Z]*$/;


let descEstudiante = 80;
let descTrainee = 50;
let descJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantTickets = document.getElementById("cantTickets");
let categoria = document.getElementById("categoriaSelect");


function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

function reset_totalPagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}

function totalPagar() {
    
    quitarClaseError();
    if ( (nombre.value === "") || (!(regex.test(nombre.value))) ) {
        alert("Por favor ingrese su nombre (solo letras).");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    
    if ( (apellido.value === "") || (!(regex.test(apellido.value))) ) {
        alert("Por favor ingrese su apellido (solo letras).");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor ingrese su e-mail.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor ingrese un e-mail válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    if ( (cantTickets.value == 0) || (isNaN(cantTickets.value)) ) {
        alert("Por favor ingrese cantidad de tickets válida (mínimo 1).");
        cantTickets.classList.add("is-invalid");
        cantTickets.focus();
        return;
    }

    let totalPagar = (cantTickets.value) * valorTicket;

    if (categoria.value == "") {
        alert("Por favor seleccione una categoria.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
    else switch (categoria.value) {
            case "0": {
                totalPagar = totalPagar;
                break;
            }

            case "1": {
                totalPagar = totalPagar - (descEstudiante / 100 * totalPagar);
                break;
            }

            case "2": {
                totalPagar = totalPagar - (descTrainee / 100 * totalPagar);
                break;
            }

            case "3": {
                totalPagar = totalPagar - (descJunior / 100 * totalPagar);
                break;
            }
        }
    

    totalPago.innerHTML = totalPagar;
    
}

btnBorrar.addEventListener('click',reset_totalPagar);
btnResumen.addEventListener('click',totalPagar);