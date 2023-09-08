// const pantallaSup = document.querySelector("#pantallaSup")
const pantallaSub = document.querySelector("#pantallaSub");

pantallaSub.addEventListener("keydown", (e) => { e.preventDefault(); console.log("Buen intento") })
pantallaSub.addEventListener("keyup", (e) => { e.preventDefault(); console.log("Buen intento") })

const datos = [];
datos.push(0);
pantallaSub.value = mostrarDatos();
let customDatos = [];
let resultado = 0;

function sendValue(e) {
    // console.log(e.textContent)
    let tecla = e.id == "backspace" ? e.id : e.textContent;

    switch (tecla) {
        case "C":
            datos.length = 0;
            datos.push(0);
            resultado = 0;
            pantallaSub.value = 0;
            break;

        case "backspace":
            // console.log("backspace")
            
            if(datos.length==1 || datos.length==0){
                resultado=0
                datos[0]=0
            }else{
                datos.splice(datos.length - 1, datos.length)
            }
            pantallaSub.value = mostrarDatos();
            break;

        case "+":
            if (resultado != 0) {
                datos.push(parseFloat(resultado));
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }
            pantallaSub.value = mostrarDatos();;

            break;

        case "-":
            if (resultado != 0) {
                datos.push(parseFloat(resultado));
                resultado = 0;
            }
            // if (typeof datos[datos.length - 1] != "string") {
            datos.push(tecla);
            // }
            pantallaSub.value = mostrarDatos();

            break;

        case "*":
            if (resultado != 0) {
                datos.push(parseFloat(resultado));
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }
            pantallaSub.value = mostrarDatos();

            break;

        case "/":
            if (resultado != 0) {
                datos.push(parseFloat(resultado));
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }
            pantallaSub.value = mostrarDatos();

            break;

        case ".":
            if (resultado != 0) {
                datos.push(parseFloat(resultado));
                resultado = 0;
            }
            if (typeof datos[datos.length - 1] != "string") {
                datos.push(tecla);
            }

            pantallaSub.value = mostrarDatos();

            break;

        case "=":
            if (datos.length != 0) {
                customDatos = datos;
                for (let h = 0; h < datos.length; h++) {
                    for (let i = 0; i < datos.length; i++) {
                        if (customDatos[i] == "/") {
                            console.log("division");
                            customDatos.splice(i - 1, i + 2, customDatos[i - 1] / customDatos[i + 1]);

                        } else {
                            if (customDatos[i] == "*") {
                                console.log("multiplicacion");
                                customDatos.splice(i - 1, i + 2, customDatos[i - 1] * customDatos[i + 1]);
                            } else {
                                if (customDatos[i] == "+") {
                                    console.log("suma");
                                    customDatos.splice(i - 1, i + 2, customDatos[i - 1] + customDatos[i + 1]);
                                }

                            }
                        }
                    }
                }

                console.log(customDatos)
                customDatos.map((dato) => {
                    console.log(typeof dato)
                    resultado += dato
                })

                // resultado = customDatos[0];
                pantallaSub.value = resultado;
                datos.length = 0;
            }
            break;
        default:

            if (datos[datos.length - 1] == "-") {
                datos.splice(datos.length - 1, datos.length, parseFloat("-" + tecla))

            } else {

                if (datos[datos.length - 1] == ".") {
                    datos.splice(datos.length - 2, datos.length, parseFloat(String(datos[datos.length - 2]) + "." + tecla))
                    // pantallaSub.value = mostrarDatos();
                } else {
                    if (typeof datos[datos.length - 1] == "number") {
                        datos.splice(datos.length - 1, datos.length, parseFloat(String(datos[datos.length - 1]) + tecla))
                        // pantallaSub.value = mostrarDatos();

                    } else {
                        resultado = 0
                        datos.push(parseFloat(tecla));
                        // pantallaSub.value = mostrarDatos();
                    }
                }
            } pantallaSub.value = mostrarDatos();

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