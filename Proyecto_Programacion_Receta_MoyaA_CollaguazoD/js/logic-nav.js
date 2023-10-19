document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".research-left-container input");
    const searchResults = document.querySelector(".recipes-container");
  
    // Define las recetas existentes en tu página
    const recetasHTML = Array.from(document.querySelectorAll(".recipe")).map((recipeElement) => {
      const nombre = recipeElement.querySelector("h1").textContent;
      const tipo = recipeElement.querySelector("p").textContent;
      const imagen = recipeElement.querySelector("img").getAttribute("src");
      return { nombre, tipo, imagen };
    });
  
    // Obtén las recetas existentes del Local Storage
    const recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
  
    // Combina las recetas del Local Storage y las de la página HTML en un solo arreglo
    const todasLasRecetas = [...recetasHTML, ...recetasLocalStorage];
  
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
  
      // Filtra las recetas que coinciden con la búsqueda
      const matchingRecipes = todasLasRecetas.filter((receta) =>
        receta.nombre.toLowerCase().includes(query)
      );
  
      // Muestra las recetas coincidentes en el HTML
      displayResults(matchingRecipes);
    });
  
    function displayResults(results) {
      searchResults.innerHTML = ""; // Limpia los resultados anteriores
      if (results.length === 0) {
        searchResults.innerHTML = "<p>No se encontraron recetas.</p>";
      } else {
        results.forEach((receta) => {
          const recipeHTML = `
            <div class="recipe">
              <img src="${receta.imagen}" alt="${receta.nombre}"/>
              <h1>${receta.nombre}</h1>
              <p>${receta.tipo}</p>
            </div>
          `;
          searchResults.insertAdjacentHTML("beforeend", recipeHTML);
        });
      }
    }
  
    const recetaForm = document.querySelector("form");
  
    // Manejar el envío del formulario para agregar recetas
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
      let recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
  
      // Agregar la nueva receta
      recetasLocalStorage.push(receta);
  
      // Guardar las recetas actualizadas en el Local Storage
      localStorage.setItem("recetas", JSON.stringify(recetasLocalStorage));
  
      // También, agrega la nueva receta a la lista de recetas HTML
      todasLasRecetas.push(receta);
  
      // Llama a la función de visualización para actualizar los resultados
      displayResults(todasLasRecetas);
      
      // Restablecer el formulario
      recetaForm.reset();
    });
  
    // Al cargar la página, muestra las recetas combinadas de la página y el Local Storage
    displayResults(todasLasRecetas);
  });
  