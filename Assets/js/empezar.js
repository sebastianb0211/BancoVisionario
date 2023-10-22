let usuario = {};
let usuarios = [];
let contadorUsuarios = 0;

function validarFormulario(e) {
  const nombre = /^[a-zA-ZÀ-ÿ\s']{1,40}$/;
  const correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const Contraseña = /^(?=.*[A-Z]).{8,}$/;
  const saldo = /^(10000|[1-9]\d{5,})$/;
  const retirar = /^(?:[1-9]\d{4,}|[1-9]\d*,\d+|1000)$/;

  switch (e.target.name) {
    case "email":
      if (correo.test(e.target.value)) {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("errorEmail").textContent = "";
      } else {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("errorEmail").textContent =
          "el correo ingresado no es valido";
      }
      break;
    case "Contraseña":
      if (Contraseña.test(e.target.value)) {
        document.getElementById("contraseña").style.borderColor = "green";
        document.getElementById("errorContraseña").textContent = "";
      } else {
        document.getElementById("contraseña").style.borderColor = "red";
        document.getElementById("errorContraseña").textContent =
          "la contraseña no cumple con los requisitos ";
      }
      break;
    case "nombre":
      if (nombre.test(e.target.value)) {
        document.getElementById("nombreRegistro").style.borderColor = "green";
        document.getElementById("nombreR").textContent = "";
        return true;
      } else {
        document.getElementById("nombreRegistro").style.borderColor = "red";
        document.getElementById("nombreR").textContent =
          "el nombre ingresado no es valido";
        return false;
      }
      break;
    case "emailR":
      if (correo.test(e.target.value)) {
        document.getElementById("emailRegistro").style.borderColor = "green";
        document.getElementById("emailR").textContent = "";
        return true;
      } else {
        document.getElementById("emailRegistro").style.borderColor = "red";
        document.getElementById("emailR").textContent =
          "el correo ingresado no es valido";
        return false;
      }
      break;
    case "ContraseñaR":
      if (Contraseña.test(e.target.value)) {
        document.getElementById("contraseñaRegistro").style.borderColor =
          "green";
        document.getElementById("contraseñaR").textContent = "";
        return true;
      } else {
        document.getElementById("contraseñaRegistro").style.borderColor = "red";
        document.getElementById("contraseñaR").textContent =
          "la contraseña debe tener al menos una mayúscula y 8 caracteres";
        return false;
      }
      break;
    case "saldo":
      if (saldo.test(e.target.value)) {
        document.getElementById("saldoRegistro").style.borderColor = "green";
        document.getElementById("saldoR").textContent = "";
        return true;
      } else {
        document.getElementById("saldoRegistro").style.borderColor = "red";
        document.getElementById("saldoR").textContent =
          "El saldo mínimo de ingreso es de 100,000 pesos, ingrese un valor correcto";
        return false;
      }
      break;
    case "retirar":
      if (retirar.test(e.target.value)) {
        document.getElementById("retirarPanel").style.borderBlockColor =
          "green";
        document.getElementById("retirarMalo").textContent = "";
        document.getElementById("retirarPanel").style.background = "white";
      } else {
        document.getElementById("retirarPanel").style.background = "red";
        document.getElementById("retirarMalo").textContent =
          "por favor ingrese un valor superior a 10.000 mil";
        document.getElementById("retirarMalo").style.marginTop = "5px";
      }
      break;
    case "enviar":
      if (retirar.test(e.target.value)) {
        document.getElementById("enviar").style.borderBlockColor = "green";
        document.getElementById("enviarMalo").textContent = "";
        document.getElementById("enviar").style.background = "white";
      } else {
        document.getElementById("enviar").style.background = "red";
        document.getElementById("enviarMalo").textContent =
          "por favor ingrese un valor superior a 10.000 mil";
        document.getElementById("enviar").style.marginTop = "5px";
      }
      break;
    case "consignacion":
      if (retirar.test(e.target.value)) {
        document.getElementById("consignacion").style.borderBlockColor =
          "green";
        document.getElementById("maloConsignacion").textContent = "";
        document.getElementById("consignacion").style.background = "white";
      } else {
        document.getElementById("consignacion").style.background = "red";
        document.getElementById("maloConsignacion").textContent =
          "por favor ingrese un valor superior a 10.000 mil";
        document.getElementById("consignacion").style.marginTop = "5px";
      }
      break;
  }
}

function validarTodosCampos() {
  const nombreValido = validarFormulario({
    target: {
      name: "nombre",
      value: document.getElementById("nombreRegistro").value,
    },
  });
  const emailValido = validarFormulario({
    target: {
      name: "emailR",
      value: document.getElementById("emailRegistro").value,
    },
  });
  const contraseñaValida = validarFormulario({
    target: {
      name: "ContraseñaR",
      value: document.getElementById("contraseñaRegistro").value,
    },
  });
  const saldoValido = validarFormulario({
    target: {
      name: "saldo",
      value: document.getElementById("saldoRegistro").value,
    },
  });

  if (nombreValido && emailValido && contraseñaValida && saldoValido) {
    usuario = {
      nombre: document.getElementById("nombreRegistro").value,
      email: document.getElementById("emailRegistro").value,
      contraseña: document.getElementById("contraseñaRegistro").value,
      saldo: parseFloat(document.getElementById("saldoRegistro").value),
    };

    usuarios.push(usuario);
    console.log("Usuario guardado:", usuario);
    console.log(usuarios);

    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  }
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keydown", validarFormulario);
});

document
  .getElementById("botonGuardar")
  .addEventListener("click", validarTodosCampos);

let intentos = 0;
let intentosPosibles = 3;

function empezar() {
  const emailInicioSesion = document.getElementById("email").value;
  const contraseñaInicioSesion = document.getElementById("contraseña").value;

  if (usuarios.length === 0) {
    alert("No existe ningún registro de usuario en el sistema");
  } else if (intentos >= 3) {
    alert(
      "Has superado el límite de intentos. El formulario de acceso Esta bloqueado perdon."
    );
    document.getElementById("formulario-inicio-sesion").reset();
    document
      .querySelectorAll("input")
      .forEach((input) => (input.disabled = true));
    document.querySelector("button[type='button']").disabled = true;
  } else {
    let usuarioEncontrado = false;
    let usuario = "";
    for (let i = 0; i < usuarios.length; i++) {
       usuario = usuarios[i];

      if (
        usuario.email === emailInicioSesion &&
        usuario.contraseña === contraseñaInicioSesion
      ) {
        usuarioEncontrado = true;
        document.getElementById("nombreSaldo").textContent = usuario.nombre;
        document.getElementById("salarioSaldo").textContent = usuario.saldo;
        document.getElementById("nombreRetirar").textContent = usuario.nombre;
        document.getElementById("nombrePerfil").textContent = usuario.nombre;
        break;
      }
    }

    if (usuarioEncontrado) {
      let inicioSesion = document.getElementById("inicio-sesion1");
      let encabezado = document.getElementById("encabezado");
      let carga = document.getElementById("carga");
      let contenedorTotal = document.getElementById("contenedor-total1");
      let derecho = document.getElementById("contenedor-derechoUno");
      let Izquierdo = document.getElementById("contenedor-izquierdoUno");
      let diseño = document.getElementById("diseño");

      inicioSesion.style.display = "none";
      carga.style.display = "flex";
      contenedorTotal.style.display = "flex";
      derecho.style.display = "none";
      Izquierdo.style.display = "none";
      diseño.style.display = "none";

      setTimeout(function () {
        encabezado.style.display = "flex";
        carga.style.display = "none";
        contenedorTotal.style.display = "flex";
        derecho.style.display = "flex";
        derecho.style.flexDirection = "column";
        Izquierdo.style.display = "flex";
        Izquierdo.style.flexDirection = "column";
        diseño.style.display = "flex";
      }, 4000);
    } else {
      intentos++;
      intentosPosibles--;
      alert(
        "Credenciales incorrectas. Intento #" +
          intentos +
          " solo te quedan " +
          intentosPosibles +
          " intentos posibles"
      );
      document.getElementById("formulario-inicio-sesion").reset();
    }
  }
}

// Aqui validamos todos los botones mostrando el contenido que queremos con un evento click

let consultarSaldo = document.getElementById("consultarSaldo");
let panelConsultarSaldo = document.getElementById("consultarSaldoPanel");
let retirarDinero = document.getElementById("retirarDinero");
let panelRetirarDinero = document.getElementById("retirarDineroPanel");
let enviarDinero = document.getElementById("enviarDinero");
let enviarDineroPanel = document.getElementById("enviarDineroPanel");
let consignación = document.getElementById("consignación");
let consignaciónPanel = document.getElementById("consignacionPanel");
let cargaPanel = document.getElementById("cargaPanel");
let nombreCarga = document.getElementById("nombreCarga");
let cancelarBotonSaldo = document.getElementById("cancelarBotonSaldo");
let cancelarBotonRetirar = document.getElementById("cancelarBotonRetirar");
let cancelarBotonEnviar = document.getElementById("cancelarBotonEnviar");
let cancelarBotonConsignacion = document.getElementById(
  "cancelarBotonConsignacion"
);

consultarSaldo.addEventListener("click", function () {
  cargaPanel.style.display = "flex";
  nombreCarga.textContent = "consultando..";
  panelConsultarSaldo.style.display = "none";
  panelRetirarDinero.style.display = "none";
  enviarDineroPanel.style.display = "none";
  consignaciónPanel.style.display = "none";

  console.log(usuario);

  setTimeout(function () {
    panelConsultarSaldo.style.display = "flex";
    cargaPanel.style.display = "none";
  }, 2000);

  cancelarBotonSaldo.addEventListener("click", function () {
    panelConsultarSaldo.style.display = "none";
  });
});

retirarDinero.addEventListener("click", function () {
  cargaPanel.style.display = "flex";
  nombreCarga.textContent = "cargando..";
  panelRetirarDinero.style.display = "none";
  panelConsultarSaldo.style.display = "none";
  enviarDineroPanel.style.display = "none";
  consignaciónPanel.style.display = "none";

  setTimeout(function () {
    panelRetirarDinero.style.display = "flex";
    cargaPanel.style.display = "none";
  }, 2000);

  cancelarBotonRetirar.addEventListener("click", function () {
    panelRetirarDinero.style.display = "none";
  });
});

enviarDinero.addEventListener("click", function () {
  cargaPanel.style.display = "flex";
  nombreCarga.textContent = "cargando..";
  panelRetirarDinero.style.display = "none";
  panelConsultarSaldo.style.display = "none";
  enviarDineroPanel.style.display = "none";
  consignaciónPanel.style.display = "none";

  setTimeout(function () {
    enviarDineroPanel.style.display = "flex";
    cargaPanel.style.display = "none";
  }, 2000);

  cancelarBotonEnviar.addEventListener("click", function () {
    enviarDineroPanel.style.display = "none";
  });
});

consignación.addEventListener("click", function () {
  cargaPanel.style.display = "flex";
  nombreCarga.textContent = "cargando..";
  panelRetirarDinero.style.display = "none";
  panelConsultarSaldo.style.display = "none";
  enviarDineroPanel.style.display = "none";
  consignaciónPanel.style.display = "none";
  setTimeout(function () {
    consignaciónPanel.style.display = "flex";
    cargaPanel.style.display = "none";
  }, 2000);

  cancelarBotonConsignacion.addEventListener("click", function () {
    consignaciónPanel.style.display = "none";
  });
});

let sesion = document.getElementById("Sesion");
let cartaSalirSesion = document.getElementById("cartaSalirSesion");
let cancelarSesion = document.getElementById("cancelarSesion");
let salirSesion = document.getElementById("salirSesion");

sesion.addEventListener("click", function () {
  cartaSalirSesion.style.display = "flex";
  cartaSalirSesion.style.flexDirection = "column";

  cancelarSesion.addEventListener("click", function () {
    cartaSalirSesion.style.display = "none";
  });

  salirSesion.addEventListener("click", function () {
    let inicioSesion = document.getElementById("inicio-sesion1");
    let derecho = document.getElementById("contenedor-derechoUno");
    let Izquierdo = document.getElementById("contenedor-izquierdoUno");
    let diseño = document.getElementById("diseño");
    let contenedorTotal = document.getElementById("contenedor-total1");
    let encabezado = document.getElementById("encabezado");
    document.getElementById("nombreSaldo").textContent = "";
    document.getElementById("salarioSaldo").textContent = "";
    document.getElementById("nombreRetirar").textContent = "";
    document.getElementById("nombrePerfil").textContent = "";

    derecho.style.display = "none";
    Izquierdo.style.display = "none";
    diseño.style.display = "none";
    inicioSesion.style.display = "flex";
    contenedorTotal.style.display = "none";
    encabezado.style.display = "none";
    cartaSalirSesion.style.display = "none";
  });
});

///

function realizarTransferencia() {
  // Obtener los valores de entrada
  let cuentaDestino = document.getElementById("enviarUsuario").value; // Cuenta de destino
  let monto = parseFloat(document.getElementById("enviar").value); // Monto a enviar

  let cuentaDestinoExistente = null;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre === cuentaDestino) {
      cuentaDestinoExistente = usuarios[i];
      break;
    }
  }

  // Asumiendo que `usuario` se refiere al usuario actual que inicia la transferencia
  if (cuentaDestinoExistente === null) {
    alert("La cuenta de destino no existe en el sistema.");
  } else if (monto <= 0) {
    alert("El monto debe ser mayor que cero");
  } else if (cuentaDestinoExistente === usuario) {
    alert("No puedes transferir dinero a tu propia cuenta.");
  } else if (monto > usuario.saldo) {
    // Verificar el saldo del usuario que inicia la transferencia
    alert("Saldo insuficiente para realizar esta transacción.");
  } else {
    // Actualizar los saldos de las cuentas
    cuentaDestinoExistente.saldo += monto;
    usuario.saldo -= monto;

    // Mostrar un mensaje de éxito en el elemento con id "transferenciaExitosa"
    alert("Transferencia Exitosa");
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  }
}


// Agregar un evento click al botón "Enviar"
document.getElementById("enviarDineroBoton").addEventListener("click", realizarTransferencia);

// Agregar un evento click al botón "Retirar"
document.getElementById("retirarDineroBoton").addEventListener("click", function () {
    // Obtener el monto a retirar del input
    const montoARetirar = parseFloat(document.getElementById("retirarPanel").value);

    // Encontrar el usuario actual
    const usuarioActual = usuarios.find((u) => u.nombre === usuario.nombre);

    if (montoARetirar <= 0) {
      alert("El monto a retirar debe ser mayor que cero.");
    } else if (montoARetirar > usuarioActual.saldo) {
      alert("Saldo insuficiente para realizar este retiro.");
    } else {
      // Restar el monto del saldo del usuario
      usuarioActual.saldo -= montoARetirar;

      // Actualizar el saldo en la interfaz (por ejemplo, cambiar el texto en algún elemento HTML)
      document.getElementById("salarioSaldo").textContent = usuarioActual.saldo;

      // Mostrar un mensaje de éxito
      alert("Retiro exitoso: " + montoARetirar + " pesos.");

      // Limpiar el campo de entrada
      document.getElementById("retirarPanel").value = "";
    }
  });
function consignarDinero() {
  // Obtener el monto a consignar desde el input
  const montoConsignacion = parseFloat(
    document.getElementById("consignacion").value
  );

  // Encontrar el usuario que va a recibir la consignación
  const usuarioDestino = usuarios.find((u) => u.nombre === usuario.nombre);

  if (montoConsignacion <= 0) {
    alert("El monto a consignar debe ser mayor que cero");
  } else {
    usuarioDestino.saldo += montoConsignacion; // Sumar el monto a la cuenta del usuario destino
    console.log(usuarios);

    // Mostrar un mensaje de éxito en el elemento con id "consignacionExitosa"
    alert("consignacion exitosa: " + montoConsignacion + " pesos.");
    document.getElementById("salarioSaldo").textContent = usuario.saldo;
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  }
}

// Agregar un evento click al botón "Consignar"
document.getElementById("botonConsignar").addEventListener("click", consignarDinero);
