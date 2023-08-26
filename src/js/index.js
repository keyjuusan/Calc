const pantalla = document.querySelector("#pantalla");

pantalla.addEventListener("keydown", (e) => { e.preventDefault(); console.log("Buen intento") })
pantalla.addEventListener("keyup", (e) => { e.preventDefault(); console.log("Buen intento") })

const datos = [];
datos.push(0);
pantalla.value = mostrarDatos();
let customDatos = [];
let resultado="";

function sendValue(e) {
    // console.log(e.textContent)
    let tecla = e.id == "backspace" ? e.id : e.textContent;

    switch (tecla) {
        case "C":
            datos.length = 0;
            datos.push(0);
            pantalla.value = mostrarDatos();
            break;

        case "backspace":
            // console.log("backspace")
            datos.splice(datos.length - 1, datos.length)
            pantalla.value = mostrarDatos();
            break;

        case "+":
            if (resultado != 0) {
                datos.push(resultado);
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }
            pantalla.value = mostrarDatos();

            break;

        case "-":
            if (resultado != 0) {
                datos.push(resultado);
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }
            pantalla.value = mostrarDatos();

            break;

        case "*":
            if (resultado != 0) {
                datos.push(resultado);
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }
            pantalla.value = mostrarDatos();

            break;

        case "/":
            if (resultado != 0) {
                datos.push(resultado);
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }
            pantalla.value = mostrarDatos();

            break;

        case ".":
            if (resultado != 0) {
                datos.push(resultado);
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }

            pantalla.value = mostrarDatos();

            break;

        case "=":
            customDatos = datos;
            for (let h = 0; h < datos.length; h++) {
                for (let i = 0; i < datos.length; i++) {

                    if (datos[i] == "/") {
                        console.log("division");
                        if (datos[i - 2]=="-") {
                            customDatos.splice(i - 2, i + 2, -datos[i - 1] / datos[i + 1]);
                        }else{
                            customDatos.splice(i - 1, i + 2, datos[i - 1] / datos[i + 1]);
                        }
                    } else {
                        if (datos[i] == "*") {
                            console.log("multiplicacion");
                            if (datos[i - 2]=="-") {
                                customDatos.splice(i - 2, i + 2, -datos[i - 1] * datos[i + 1]);
                            }else{
                                customDatos.splice(i - 1, i + 2, datos[i - 1] * datos[i + 1]);
                            }
                        } else {
                            switch (datos[i]) {
                                case "+":
                                    console.log("suma");
                                    customDatos.splice(i - 1, i + 2, datos[i - 1] + datos[i + 1]);
                                    break;

                                case "-":
                                    console.log("resta");
                                    customDatos.splice(i - 1, i + 2, datos[i - 1] - datos[i + 1]);
                                    break;

                                default:
                                    break;
                            }
                        }
                    }
                }
            }

            resultado = customDatos[0];
            pantalla.value = customDatos[0];
            datos.length = 0;
            break;
        default:

            if (datos[datos.length - 1] == ".") {
                datos.splice(datos.length - 2, datos.length, parseFloat(String(datos[datos.length - 2]) + "." + tecla))
                // pantalla.value = mostrarDatos();
            } else {
                if (typeof datos[datos.length - 1] == "number") {
                    datos.splice(datos.length - 1, datos.length, parseFloat(String(datos[datos.length - 1]) + tecla))
                    // pantalla.value = mostrarDatos();

                } else {
                    datos.push(parseFloat(tecla));
                    // pantalla.value = mostrarDatos();
                }
            } pantalla.value = mostrarDatos();
            break;
    }


}

function mostrarDatos() {
    let uiDatos = "";
    // *Acumulando los datos actuales de la variable array "datos" en la variable string "uiDatos" 
    datos.map((dato) => {
        if (typeof dato == "string") {
            uiDatos += dato;
        } else {
            uiDatos += String(dato);
        }
    });
    return uiDatos;
}