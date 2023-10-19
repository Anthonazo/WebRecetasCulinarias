let todasLasRecetas;
let searchResults;
let recetasLocalStorage;
let recetasHTML;

let recetasDefault = [
  {
    identificador: 1,
    imagen: "/imagenes/img-recipes/seco-pollo.jpg",
    nombre: "Seco de Pollo",
    tipo: "plato principal",
    ingredientes:
      "Arroz \n5 piezas de pollo variadas \n2 Cucharaditas Comino Molido \n2 cucharaditas de Achiote en polvo\n3 cucharadas de Aceite vegetal\n2 Unidades de Pimiento Rojo, picado en cubos\n1 Cebolla perla mediana, picada en cubos\n2 Tomates, pelados y cortados en rodajas\n5 dientes de Ajo machacados\n2 Cubos Caldo De Gallina Maggi\n1 Cucharada Cilantro, picado\n2 Tazas de Cerveza Rubia",
    preparacion:
      "Sazona las piezas de pollo con el comino, el achiote y sal y pimienta. Coloca en la licuadora, la cerveza, jugo de naranjilla, cebolla, ajo, tomate, pimiento, aji, cilantro, perejil y orégano, de estos últimos 3 reserva un poco para la presentación final. Reserva\nEn una olla amplia coloca el aceite y caliéntalo, una vez caliente coloca las piezas de pollo a dorar una vez dorado agrega la salsa de la licuadora y lleva a hervir. Una vez hirviendo, agrega los cubos de Caldo de Gallina MAGGI®, baja el fuego y cocina lentamente durante 45 minutos.\nLa salsa de estar espesa y la carne de pollo muy tierna. Agrega el sobrante de cilantro, perejil y orégano y sirve acompañando de arroz amarillo, maduros fritos y aguacate.",
  },
  {
    identificador: 2,
    imagen: "/imagenes/img-recipes/pollo-chan.jpeg",
    nombre: "Pollo con Champiñones",
    tipo: "Plato principal",
    ingredientes: 
    "2 pechugas de pollo.\n2 tazas de champiñones rebanados.\n1 ½ cebolla perla picada en cubitos.\n1 taza de Crema de Leche LA LECHERA®.\n3 cucharaditas de mantequilla.\nSal y pimienta al gusto.",
    preparacion:
      "1. Corta cada pechuga en la mitad y obtén 4 filetes. Sazona los filetes con sal y pimienta al gusto. Cocínalos en la sartén hasta que estén dorados y cocidos por dentro.\nSalteado\n2. Coloca la mantequilla en la sartén y saltea la cebolla hasta que se cristalice. También agrega ¾ de la taza de champiñones.\nCocina\n3. Añade el pollo y déjalo por unos minutos.\n4. Incorpora la Crema de Leche LA LECHERA® y el ¼ de taza de champiñones que guardaste. ¡Ya está listo para disfrutar!",
  },
  {
    identificador: 3,
    imagen: "/imagenes/img-recipes/casuela-pollo.jpg",
    nombre: "Cazuela de Pollo",
    tipo: "Plato secundario",
    ingredientes: "5 Tutos de pollo sin su piel\n2 Cucharadas de aceite\n1 Diente de ajo cortado finamente\n1/2 Cebolla cortada en cuadritos\n2 Litros de agua caliente\n2 Zanahorias cortadas en bastones pequeños\nOrégano a gusto\nPimienta a gusto\nComino a gusto\n5 Trozos de choclo medianos\n5 Papas medianas peladas\n5 Trozos medianos de zapallo camote\n1 Tableta de caldo de gallina MAGGI®\n1/3 Taza de arroz\n2 Tazas de porotos verdes\nSal a gusto\nPerejil cortado finamente para decorar",
    preparacion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis dui laoreet odio maximus rutrum. Morbi non tempor tellus. Curabitur convallis lobortis pretium. Phasellus in arcu nec tortor aliquam ornare sed vitae tortor. Morbi quis porta nulla, ac convallis lacus. Donec suscipit purus urna, imperdiet congue sem dictum laoreet. Integer nec auctor lacus, ut efficitur metus. Integer suscipit purus a quam iaculis, et lacinia quam vehicula.",
  },
  {
    identificador: 4,
    imagen: "/imagenes/img-recipes/solomillo-cerdo.jpg",
    nombre: "Solomillo de Cerdo",
    tipo: "Plato principal",
    ingredientes: "YErbas",
    preparacion:
    "1. En una cacerola mediana a partir de agua fría con un poco de sal cocina las papas con los zapallos durante aproximadamente 15 a 20 minutos hasta cocerlos completamente, que al introducir un cuchillo verifiques su cocción. Una vez listos reserva.\n2. Aparte, calienta una cacerola con las dos cucharadas de aceite y agrega el pollo para dorarlo por todos sus lados removiendo de vez en cuando cuidadosamente para que no se pegue. Agrega el ajo con la cebolla cortados finamente, vierte toda el agua caliente y condimenta con el caldo de gallina MAGGI®, orégano, comino, pimienta y un toque de sal.\n3. Agrega el choclo y las zanahorias, cocina tapado a fuego medio durante 20 minutos aproximados con el objetivo de avanzar la cocción de los ingredientes. Luego, agrega el arroz y los porotos verdes, cocina durante 15 minutos más hasta cocer el arroz y terminar la cocción del pollo y todo lo demás. Agrega las papas y los zapallos para que con el calor del caldo se impregnen sus sabores. Sirve de inmediato."  
},
    {
    identificador: 5,
    imagen: "/imagenes/img-recipes/carne-papas.jpeg",
    nombre: "Carne al horno con papas",
    tipo: "Plato principal",
    ingredientes: 
    "Carne de ternera, 500 g\nPapas, 2 u medianas\nPapa roja, 2 u medianas\nSal, 2 cucharaditas\nCebolla mediana, 1\nPimienta, 1/2 cucharadita\nAjo, 2 dientes,\nCebolla en polvo, 1 cucharadita\nPimentón dulce, 1 cucharada\nOrégano, 1 cucharada\nAceite de oliva, 3 cucharadas",
    preparacion:
    "1. Pincelar una asadera con el resto del aceite de oliva colocar las papas y por encima, la carne adobada.\n2. En un bol poner la carne, salpimentarla, ponerle los condimentos (orégano, pimentón, hoja de laurel) y una cucharada de aceite de oliva. Embadurnar bien toda la carne en los condimentos. Dejar descansar.\n3. Lavar bien las papas, pelarlas (si se prefieren con la piel se puede dejar) y cortarlas en cuatro o seis (en cubos grandes).\n4. Llevar a horno precalentado a máximo (200 o 230 °C) por diez minutos. Bajar el fuego y continuar la cocción por 40 minutos más - a la mitad de la cocción dar vuelta las papas y la carne y agregar agua o caldo si es necesario- hasta que la carne esté cocida y las papas bien tiernas y doradas."  },
  {
    identificador: 6,
    imagen: "/imagenes/img-recipes/albondigas-fideo.jpeg",
    nombre: "Espagueti con albóndigas de carne",
    tipo: "Plato principal",
    ingredientes: 
    "8 Onzas Carne de Res Molida\n8 Onzas Carne De Cerdo Molida\n1 Cucharada grande Sazón Completo Maggi®\n3 Unidades Ajo Majados\n1/2 Taza Cebolla Blanca Rallada\n3 Cucharadas grandes Cilantrico Picadito\n2 Cucharadas grandes Aceite De Canola\n1/2 Taza Ají cubanela Cortado en dados\n1 Cucharada grande Aceitunas\n1 Cucharada grande Alcaparras Enlatadas\n2 bolsas Caldo en Polvo Gallinita con Tomate MAGGI®\n2 Cucharadas grandes Perejil Picadito\n2 Tazas Agua Caliente\n1/4 Taza Vino Blanco\n1 Libra Espagueti Hervidos con sal y escurrida\n1/2 Taza Queso Parmesano Rallado",
    preparacion:
    "1. Sazona la carne con el Sazón Completo MAGGI®, la mitad del ajo, la cebolla y el cilantrito. Mezcla bien, forma las albóndigas y fríelas en el aceite caliente. Resérvalas.\n2. Sofríe por 3 minutos, el ajo y la cebolla restante, añade el ají, las aceitunas, el Caldo en Polvo Gallinita con Tomate MAGGI®, el perejil y el vino.\n3. Vierte el agua, mezcla, agrega las albóndigas y los espaguetis, cocina por 3 minutos más, mezcla bien, retira del fuego, sirve con el queso por encima."  
},
];

document.addEventListener("DOMContentLoaded", function () {
  if (!parseInt(localStorage.getItem("seCargoRecetas"))) {
    localStorage.setItem("seCargoRecetas", 1);
    let recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
    recetasLocalStorage.push(...recetasDefault);
    localStorage.setItem("recetas", JSON.stringify(recetasLocalStorage));
  }

  const searchInput = document.querySelector(".research-left-container input");
  searchResults = document.querySelector(".recipes-container");

  // Define las recetas existentes en tu página
  recetasHTML = Array.from(document.querySelectorAll(".recipe")).map(
    (recipeElement) => {
      const nombre = recipeElement.querySelector("h1").textContent;
      const tipo = recipeElement.querySelector("p").textContent;
      const imagen = recipeElement.querySelector("img").getAttribute("src");
      return { nombre, tipo, imagen };
    }
  );

  // Obtén las recetas existentes del Local Storage
  recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];

  // Combina las recetas del Local Storage y las de la página HTML en un solo arreglo
  todasLasRecetas = [...recetasHTML, ...recetasLocalStorage];

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    // Filtra las recetas que coinciden con la búsqueda
    const matchingRecipes = todasLasRecetas.filter((receta) =>
      receta.nombre.toLowerCase().includes(query)
    );

    // Muestra las recetas coincidentes en el HTML
    displayResults(matchingRecipes);
  });

  // Manejar el envío del formulario para agregar recetas

  // Al cargar la página, muestra las recetas combinadas de la página y el Local Storage
  displayResults(todasLasRecetas);
});

function getImagen() {
  const inputImagen = document.querySelector("#imagen");
  const file = inputImagen.files[0];

  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const base64Image = event.target.result;

        // Guarda la imagen en el Local Storage
        resolve(base64Image);
      };

      reader.readAsDataURL(file);
    } else {
      resolve(null);
    }
  });
}

function displayResults(results) {
  searchResults.innerHTML = ""; // Limpia los resultados anteriores
  if (results.length === 0) {
    searchResults.innerHTML = "<p>No se encontraron recetas.</p>";
  } else {
    results.forEach((receta) => {
      const recipeHTML = `
          <div class="recipe">
          <a href="/html/seco-pollo-recipe.html?id=${receta.identificador}">
          <img src="${receta.imagen}" alt="${receta.nombre}"/>
              <h1>${receta.nombre}</h1>
              <p>${receta.tipo}</p>
            </a>
          </div>
        `;
      searchResults.insertAdjacentHTML("beforeend", recipeHTML);
    });
  }
}

async function enviarReceta() {
  const recetaForm = document.querySelector("form");
  // Obtener los valores del formulario
  const nombre = document.querySelector("#nombre").value;
  const ingredientes = document.querySelector("#ingredientes").value;
  const preparacion = document.querySelector("#preparacion").value;
  const imagen = document.querySelector("#imagen").files[0];
  // const identificador = todasLasRecetas.length + 1;

  // Crear un objeto de receta

  const receta = {
    nombre,
    ingredientes,
    preparacion,
    imagen: await getImagen(),
  };

  // Obtener las recetas existentes del Local Storage
  let recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];

  const max = recetasLocalStorage
    .map((val) => val.identificador)
    .reduce(function (a, b) {
      return Math.max(a, b);
    }, -Infinity);
  receta.identificador = max && max > 0 ? max + 1 : 0;
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
}
