document.querySelector("#clear").addEventListener("click", e => {
    let campos = document.querySelectorAll(".campo");
    campos.forEach(campo => {
        campo.value = "";
    });
});