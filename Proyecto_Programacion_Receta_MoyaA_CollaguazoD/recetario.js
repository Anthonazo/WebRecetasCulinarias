const recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : [];

const drawRecipe = (recipe) => {
    const foodContainer = document.querySelector('#food-container');

    const recipeHTML = `
        <a href="./ver-receta.html?id=${recipe.id}" class="food-item">
            <img src="${recipe.imagen || 'https://picsum.photos/200/100'}">

            <h3>${recipe.nombre}</h3>
            <p>${recipe.descripcion}</p>
        </a>
    `;

    foodContainer.innerHTML += recipeHTML;
}

const drawRecipes = (recipes) => {
    const foodContainer = document.querySelector('#food-container');
    foodContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipes.push({
            id: 1,
            imagen: '',
            nombre: 'Receta 1',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            pasos: ''
        })

        localStorage.setItem('recipes', JSON.stringify(recipes))
    }

    recipes.forEach(recipe => {
        drawRecipe(recipe)
    })
}

const getFormValue = (form) => {
    const elements = form.elements
    const obj = {}

    for (let i = 0 ; i < elements.length ; i++) {
        let item = elements.item(i)

        if (item.name.length > 0)
            obj[item.name] = item.value
    }

    return obj
}

const fileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
})


const enviarReceta = async () => {
    const form = document.querySelector('#formRecipes')
    const recipe = getFormValue(form)

    recipe.imagen = await fileToBase64(document.querySelector('#imagen').files[0])
    recipe.id = recipes.length + 1

    form.reset()
    recipes.push(recipe)

    localStorage.setItem('recipes', JSON.stringify(recipes))

    drawRecipes(recipes)
}

drawRecipes(recipes)

document.querySelector('#inpSearch').addEventListener('input', (evt) => {
    drawRecipes(recipes.filter(r => r.nombre.toLowerCase().includes(evt.target.value.toLowerCase())))
})
