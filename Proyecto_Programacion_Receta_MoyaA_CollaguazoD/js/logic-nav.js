const urlParams = new URLSearchParams(window.location.search)

const recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : []
const recipe = recipes.find(recipe => recipe.id === parseInt(urlParams.get('id')))

if (recipes.length === 0 || !recipe) {
    alert('No existe la receta indicada');
    window.location.href = 'index.html'
}

const title = document.querySelector('#title')
const descripcion = document.querySelector('#descripcion')
const pasos = document.querySelector('#pasos')
const imagen = document.querySelector('#imagen')

imagen.src = recipe.imagen || 'https://picsum.photos/200/100'
title.innerHTML = recipe.nombre
descripcion.innerHTML = recipe.descripcion
pasos.innerHTML = recipe.pasos.split('\n').map(paso => `<li>${paso}</li>`).join('')