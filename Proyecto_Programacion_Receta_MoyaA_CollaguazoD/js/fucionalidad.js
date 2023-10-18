document.addEventListener("DOMContentLoaded", function () {
    const recetaForm = document.querySelector("form");
    const recetasContainer = document.querySelector(".recipes-container");

    // Escuchar el envío del formulario
    recetaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.querySelector("#nombre").value;
        const ingredientes = document.querySelector("#ingredientes").value;
        const preparacion = document.querySelector("#preparacion").value;
        const imagen = document.querySelector("#imagen").files[0];

        // Crear un objeto de receta
        const receta = {
            nombre,
            ingredientes,
            preparacion,
            imagen: URL.createObjectURL(imagen),
        };

        // Obtener las recetas existentes del Local Storage
        let recetas = JSON.parse(localStorage.getItem("recetas")) || [];

        // Agregar la nueva receta
        recetas.push(receta);

        // Guardar las recetas actualizadas en el Local Storage
        localStorage.setItem("recetas", JSON.stringify(recetas));

        const recetaCard = document.createElement("div");
        recetaCard.classList.add("recipe");
        recetaCard.innerHTML = `
      <img src="${receta.imagen}" alt="${nombre}">
        <h1>${nombre}</h1>
      `;

        recetasContainer.appendChild(recetaCard);

        // Restablecer el formulario
        recetaForm.reset();
    });

    // Mostrar las recetas almacenadas en el Local Storage
    const recetas = JSON.parse(localStorage.getItem("recetas")) || [];

    recetas.forEach(function (receta) {
        const recetaCard = document.createElement("div");
        recetaCard.classList.add("recipe");
        recetaCard.innerHTML = `
      <img src="${receta.imagen}" alt="${nombre}">
      <h1>${nombre}</h1>
      `;

        recetasContainer.appendChild(recetaCard);
    });
});
