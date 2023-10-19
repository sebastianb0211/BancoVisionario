// aqui creamos una funcion para empezar el banco y mostrarlo con sus funcionalidades con sus botones

function empezar() {
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
  }, 200);
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


    derecho.style.display = "none";
    Izquierdo.style.display = "none";
    diseño.style.display = "none";
    inicioSesion.style.display = "flex";
    contenedorTotal.style.display = "none";
    encabezado.style.display = "none";
    cartaSalirSesion.style.display = "none";
  });
});
