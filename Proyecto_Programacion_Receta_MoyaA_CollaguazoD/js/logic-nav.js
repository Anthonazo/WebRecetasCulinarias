document.addEventListener("DOMContentLoaded", function () {
    // Tu arreglo de recetas (debes llenarlo con tus datos reales)
    const recetas = [
      {
        nombre: "Seco de Pollo",
        tipo: "Plato principal",
        // Agrega más campos de recetas
      },
      {
        nombre: "Pollo con Champiñones",
        tipo: "Plato principal",
      },

      {
        nombre: "Cazuela de Pollo",
        tipo: "Plato principal",
      },

      {
        nombre: "Solomillo de Cerdo",
        tipo: "Plato principal",
      },

      {
        nombre: "Carne al horno con papas",
        tipo: "Plato principal",
      },

      {
        nombre: "Espaguetti con albondigas de carne",
        tipo: "Plato principal",
      },
      // Agrega más recetas
    ];
  
    const searchInput = document.querySelector(".research-left-container input");
    const searchResults = document.querySelector(".recipes-container");
  
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
  
      // Filtrar recetas que coincidan con la búsqueda
      const matchingRecipes = recetas.filter((receta) =>
        receta.nombre.toLowerCase().includes(query)
      );
  
      // Mostrar las recetas coincidentes en el HTML
      displayResults(matchingRecipes);
    });
  
    function displayResults(results) {
      searchResults.innerHTML = ""; // Limpiar resultados anteriores
      if (results.length === 0) {
        searchResults.innerHTML = "<p>No se encontraron recetas.</p>";
      } else {
        results.forEach((receta) => {
          const recipeHTML = `
            <div class="recipe">
              <img src="/imagenes/img-recipes/${receta.nombre.replace(/\s/g, '-')}.jpeg" alt="${receta.nombre}"/>
              <h1>${receta.nombre}</h1>
              <p>${receta.tipo}</p>
            </div>
          `;
          searchResults.insertAdjacentHTML("beforeend", recipeHTML);
        });
      }
    }
  });
  