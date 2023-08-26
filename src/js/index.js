const pantalla = document.querySelector("#pantalla");

pantalla.value = "0";
let datos = [];
let uiDatos = "";

function sendValue(e) {

    let tecla = e.textContent;

    switch (tecla) {
        case "C":
            pantalla.value = "0";
            uiDatos = "";
            datos.length=0;
            break;

        case "+":
            datos.push(tecla);
            pantalla.value = mostrarDatos();

            break;

        case "-":
            datos.push(tecla);
            pantalla.value = mostrarDatos();

            break;

        case "*":
            datos.push(tecla);
            pantalla.value = mostrarDatos();

            break;

        case "/":
            datos.push(tecla);
            pantalla.value = mostrarDatos();

            break;

        case ".":
            datos.push(tecla);
            pantalla.value = mostrarDatos();

            break;

        case "=":
            // let encontrado = false;
            for (let i = 0; i < datos.length; i++) {
                //* Validar si existe una division primero ya que en matematica existe una jerarquia de operaciones y 
                if (datos[i] = "/") {
                    let delante = 0;
                    let atras = 0;
                    //*Hacer un recorrido hacia delante con la intencion de saber SI EXISTE algo y de ser asi saber la cantidad de digitos que tiene el siguiente numero
                    for (let j = datos.search("/"); typeof datos[j + 1] != "string" && datos[j + 1] != "."; j++) {

                    }

                    //*Hacer un recorrido hacia atras con la intencion de saber SI EXISTE algo y de ser asi saber la cantidad de digitos que tiene el siguiente numero

                }
                // switch (pantalla.value[i]) {
                //     case "+":
                //         console.log("suma")
                //         break

                //     case "-":
                //         console.log("resta")
                //         break

                //     case "*":
                //         console.log("multiplicacion")
                //         break

                //     case "/":
                //         console.log("division")
                //         break
                //     default:
                //         break;
                // }
            }
            pantalla.value = 0;
            datos = "";
            break;
        default:
            
            if (datos[datos.length - 1] == ".") {
                datos.splice(datos.length - 2,datos.length,parseFloat(String(datos[datos.length - 2]) +"."+ tecla))
                // pantalla.value = mostrarDatos();
            } else {
                if (typeof datos[datos.length - 1] == "number") {
                    datos.splice(datos.length - 1, datos.length, parseFloat(String(datos[datos.length - 1]) + tecla))
                    // pantalla.value = mostrarDatos();

                } else {
                    datos.push(parseFloat(tecla));
                    // pantalla.value = mostrarDatos();
                }
            }pantalla.value = mostrarDatos();
            break;
    }


}

function mostrarDatos() {
    uiDatos="";
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