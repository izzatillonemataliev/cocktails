// script.js faylida
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector('.search-form');
    const input = document.getElementById('input');
    const cocktailsCenter = document.getElementById('cocktails-center');
    const loader = document.querySelector('.loader');
    
    searchForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const searchTerm = input.value;
        loader.classList.remove('hidden');
        cocktailsCenter.innerHTML = '';

        await searchCocktail(searchTerm);
    });
    async function searchCocktail(searchTerm) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);

    
             
            const data = await response.json();

            displayCocktails(data.drinks);
        } catch (error) {
            console.error('Error fetching cocktails:', error);
        } finally {
            loader.classList.add('hidden'); 
        }
    }
    function displayCocktails(cocktails) {
        cocktails.forEach(cocktail => {
            const cocktailElement = document.createElement('div');
            cocktailElement.classList.add('cocktail'); 
            cocktailElement.innerHTML = `
                <h3>${cocktail.strDrink}</h3> <!-- Name o'rniga strDrink -->
                <p>${cocktail.strInstructions}</p> <!-- Description o'rniga strInstructions -->
               <img src="${cocktail.strDrinkThumb}/preview" alt="${cocktail.strDrink}" />

                
                
            `;
            cocktailsCenter.appendChild(cocktailElement);
        });
    }
});

