function mostrarResultado() {
    var seleccion = document.getElementById("opciones").value;

    // Personaliza el contenido de la ventana emergente según tus necesidades
    var mensaje = "Este dia Toca: " + seleccion;

    // Ventana emergente mejorada
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = "<div class='modal-content'>" + mensaje + "</div>";

    // Agrega la ventana emergente al cuerpo del documento
    document.body.appendChild(modal);

    // Cierra la ventana emergente después de unos segundos
    setTimeout(function() {
        document.body.removeChild(modal);
    }, 5000); // 5000 milisegundos (5 segundos)
}

