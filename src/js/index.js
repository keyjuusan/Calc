// if(navigator.serviceWorker){
//     navigator.serviceWorker.register("./sw.js")
// }

const pantallaSub = document.querySelector("#pantallaSub");

const datos = [];
let iniciado = false;

const expRegSimbolos = /^[+\-*/c=]$/i;
const expRegNumeros = /^[0-9.]*$/;

// POR DEFEFECTO:
const iniciarCalculadora = (valor = "0") => {
  datos.length = 0;
  datos.push(valor);
  pantallaSub.value = valor;
  iniciado = false;
};
iniciarCalculadora();

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tecla = e.target.id;
    start(tecla,e)
  });
});

window.addEventListener("keydown", (e) => {
  const tecla = e.key;
  start(tecla,e)
});

btns.forEach((btn) => {
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });
});

const start = (tecla,e)=>{
  if (validacion(tecla)) {
    if(expRegSimbolos.test(tecla) && expRegSimbolos.test(datos[datos.length-1])){
      e.preventDefault()
    }else{
      guardarDato(tecla);
      logicaCalculadora(tecla);
    }
  }
}

const validacion = (tecla) => {
  // INICIO DE LA VALIDACION DE CARACTERES

  if (!expRegSimbolos.test(tecla) && !expRegNumeros.test(tecla)) {
    if (tecla !== "Backspace" && tecla !== "Enter") {
      return false;
    }
  }

  return true;
  // FIN DE LA VALIDACION DE CARACTERES
};

const logicaCalculadora = (tecla) => {
  switch (tecla.toLowerCase()) {
    case "c":
      iniciarCalculadora();
      break;

    case "=":
      // procesoAritmetico();
      iniciarCalculadora(mostrarResultado());
      break;

    case "enter":
      // procesoAritmetico();
      iniciarCalculadora(mostrarResultado());
      break;

    case "backspace":
      if (datos.length === 1) {
        iniciarCalculadora();
      } else {
        pantallaSub.value = "";
        datos.length--;
        datos.map((dato) => {
          pantallaSub.value += dato;
        });
      }
      break;

    default:
      break;
  }
};

const mostrarResultado = () => {
  let resultado = "";

  datos.map(() => {
    if (datos.length > 1) {
      datos.map((dat, j) => {
        if (datos[j + 1] !== undefined) {
          if (
            expRegNumeros.test(datos[j]) &&
            expRegNumeros.test(datos[j + 1])
          ) {
            datos.splice(j, 2, datos[j] + datos[j + 1]);
          }

          if(datos.includes("-")){
            const resta = datos.indexOf("-")

            if(datos[resta+1]){
              datos.splice(resta,2,datos[resta]+datos[resta+1])
            }
          }

          if(datos.includes("+")){
            const suma = datos.indexOf("+")

            if(datos[suma+1]){
              datos.splice(suma,2,datos[suma+1])
            }
          }
        }
      });
    }
  });

  datos.map((dato, i) => {
    if (datos.length > 1) {
      datos.map((dat, j) => {
        if (datos[j + 1] !== undefined) {
          if (datos.includes("/")) {
            const divi = datos.indexOf("/");
            if(datos[divi+1]==="+"){datos.splice(divi+1,1,"1")}
            datos.splice(divi - 1, 3, Number(datos[divi - 1]) / Number(datos[divi + 1]));
          } else if (datos.includes("*")) {
            const multi = datos.indexOf("*");
            if(datos[multi+1]==="+"){datos.splice(multi+1,1,"1")}
            datos.splice(multi - 1, 3, Number(datos[multi - 1]) * Number(datos[multi + 1]));
          } else {
            datos.splice(j, 3, Number(datos[j]) + Number(datos[j + 1]));
          }
        }
      });
    }
  });

  
  resultado = datos[0];
  return resultado;
};

const guardarDato = (tecla) => {
  const expRegGuardable = /^[0-9+-/*.]$/;

  if (expRegGuardable.test(tecla)) {
    if (!iniciado) {
      datos[0] = tecla;
      iniciado = true;
    } else {
      datos.push(tecla);
    }

    pantallaSub.value = "";
    datos.map((dato) => {
      pantallaSub.value += dato;
    });
  }
};

const procesoAritmetico = () => {
  datos.map((dato, i) => {
    if (datos.length >= 2) {
      datos.splice(i, 2, datos[i] + datos[i + 1]);
      
    }
  });
};

pantallaSub.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log("Buen intento");
});
pantallaSub.addEventListener("keyup", (e) => {
  e.preventDefault();
  console.log("Buen intento");
});
