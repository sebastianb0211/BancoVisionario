let usuario = null;
let usuarios = [];
let contadorUsuarios = 0;
let historial = [];

function validarFormulario(e) {
  const nombre = /^[a-zA-ZÀ-ÿ\s']{1,40}$/;
  const correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const Contraseña = /^(?=.*[A-Z]).{8,}$/;
  const saldo = /^(100000|[1-9]\d{5,})$/;
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
    alert("Registro exitoso :)");
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
        var fechaActual = new Date();

        let mensajeHistorial =
          "el usuario " +
          usuario.nombre +
          " ingreso " +
          fechaActual.toLocaleString() +
          " correctamente";
        historial.push(mensajeHistorial);
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
  let cuentaDestino = document.getElementById("enviarUsuario").value;
  let monto = parseFloat(document.getElementById("enviar").value);
  let usuarioActualTr = usuarios.find(
    (user) => user.email === document.getElementById("email").value
  );
  let cuentaDestinoExistente = usuarios.find(
    (user) => user.email === cuentaDestino
  );

  if (!cuentaDestinoExistente) {
    alert("La cuenta de destino no existe en el sistema.");
  } else if (monto <= 0) {
    alert("El monto debe ser mayor que cero.");
  } else if (cuentaDestinoExistente === usuarioActualTr) {
    alert("No puedes transferir dinero a tu propia cuenta.");
  } else if (monto < 10000) {
    alert("El monto a retirar debe ser mayor o igual 10000");
  } else if (monto > usuarioActualTr.saldo) {
    alert("Saldo insuficiente para realizar esta transacción.");
  } else if (usuarioActualTr.saldo - monto < 10000) {
    alert("No puedes dejar menos de 10,000 en tu cuenta.");
  } else {
    cuentaDestinoExistente.saldo += monto;
    usuarioActualTr.saldo -= monto;
    document.getElementById("salarioSaldo").textContent = usuarioActualTr.saldo;
    let fechaActual = new Date();

    let mensajeHistorial =
      "el usuario " +
      usuarioActualTr.nombre +
      " realizo una transferencia a " +
      cuentaDestinoExistente.nombre +
      " de " +
      monto +
      " correctamente " +
      fechaActual.toLocaleString();
    historial.push(mensajeHistorial);

    alert("Transferencia Exitosa");
    parseFloat((document.getElementById("enviar").value = 0));
  }
}
document
  .getElementById("enviarDineroBoton")
  .addEventListener("click", realizarTransferencia);
document
  .getElementById("retirarDineroBoton")
  .addEventListener("click", function () {
    const montoARetirar = parseFloat(
      document.getElementById("retirarPanel").value
    );
    const usuarioActual = usuarios.find(
      (user) => user.email === document.getElementById("email").value
    );

    if (montoARetirar <= 0) {
      alert("El monto a retirar debe ser mayor que cero.");
    } else if (montoARetirar > usuarioActual.saldo) {
      alert("Saldo insuficiente para realizar este retiro.");
    } else if (montoARetirar < 10000) {
      alert("El monto a retirar debe ser mayor o igual 10000");
    } else if (usuarioActual.saldo - montoARetirar < 10000) {
      alert("No puedes dejar menos de 10,000 en tu cuenta.");
    } else {
      usuarioActual.saldo -= montoARetirar;
      // Actualizar el saldo en el DOM
      document.getElementById("salarioSaldo").textContent = usuarioActual.saldo;
      let fechaActual = new Date();
      let mensajeRetirar =
        "el usuario " +
        usuarioActual.nombre +
        " retiro " +
        montoARetirar +
        " correctamente " +
        fechaActual.toLocaleString();
      historial.push(mensajeRetirar);
      alert("Retiro exitoso: " + montoARetirar + " pesos.");
      document.getElementById("retirarPanel").value = "";
    }
  });

// Función para consignar dinero
document
  .getElementById("botonConsignar")
  .addEventListener("click", consignarDinero);

function consignarDinero() {
  let montoConsignacion = parseFloat(
    document.getElementById("consignacion").value
  );
  let usuarioDestino = usuarios.find(
    (user) => user.email === document.getElementById("email").value
  );

  if (montoConsignacion <= 0) {
    alert("El monto a consignar debe ser mayor que cero");
  } else if (montoConsignacion < 10000) {
    alert("El monto a retirar debe ser mayor o igual 10000");
  } else {
    usuarioDestino.saldo += montoConsignacion;
    // Actualizar el saldo en el DOM
    document.getElementById("salarioSaldo").textContent = usuarioDestino.saldo;
    let fechaActual = new Date();
    let mensajeConsignar = "el usuario " + usuarioDestino.nombre +" consigno " +montoConsignacion +" correctamente " +
      fechaActual.toLocaleString();
    historial.push(mensajeConsignar);
    alert("Consignación exitosa: " + montoConsignacion + " pesos.");
    document.getElementById("consignacion").value = "";
  }
}

function mostrarHistorial() {
  let historialCarta = document.getElementById("historialCarta");
  let cancelarHistorial = document.getElementById("cancelarHistorial");
  let borrarHistorialBoton = document.getElementById("borrarHistorial");

  historialCarta.style.display = "flex";
  historialCarta.style.flexDirection = "column";

  let contenidoHistorial = document.getElementById("contenidoHistorial");

  contenidoHistorial.innerHTML = "";

  for (let i = 0; i < historial.length; i++) {
    let label = document.createElement("label");
    label.textContent = historial[i];
    contenidoHistorial.appendChild(label);
  }
  cancelarHistorial.addEventListener("click", function () {
    historialCarta.style.display = "none";
  });

  borrarHistorialBoton.addEventListener("click", function () {
    historial = [];
    let contenidoHistorial = document.getElementById("contenidoHistorial");
    contenidoHistorial.innerHTML = "";
    historialCarta.style.display = "none";
  });
}

document.getElementById("mostrarHistorialBoton").addEventListener("click", mostrarHistorial);
