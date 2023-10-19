const urlParams = new URLSearchParams(window.location.search)

const recipes = localStorage.getItem('recetas') ? JSON.parse(localStorage.getItem('recetas')) : []
console.log("recetas", recipes);
const recipe = recipes.find(recipe => recipe.identificador === parseInt(urlParams.get('id')))

if (recipes.length === 0 || !recipe) {
    alert('No existe la receta indicada');
    // window.location.href = 'index.html'
}

const title = document.querySelector('#title')
const descripcion = document.querySelector('#descripcion')
const pasos = document.querySelector('#pasos')
const imagen = document.querySelector('#imagen')

imagen.src = recipe.imagen || 'https://picsum.photos/200/100'
title.innerHTML = recipe.nombre
descripcion.innerHTML = recipe.ingredientes.split('\n').map(paso => `<li>${paso}</li>`).join('')
pasos.innerHTML = recipe.preparacion.split('\n').map(paso => `<li>${paso}</li>`).join('')