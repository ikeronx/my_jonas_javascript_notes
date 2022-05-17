const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderPokemons = (data, className = '') => {
        const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
        const pokemonType = data.types[0].type.name;
        const html = `
    <article class="country ${className}">
    <img class="country__img" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
            data.id
    }.svg" />
            <div class="country__data">
            <h3 class="country__name">${pokemonName}</h3>
            <h4 class="country__region">Type: ${pokemonType}</h4>
            <p class="country__row"><span>𐄷</span>Height: ${+data.height}</p>
            <p class="country__row"><span>🗣️</span>Weight: ${+data.weight}</p>
            <p class="country__row"><span>💰</span>Oder: ${+data.order}</p>
            </div>
    </article>
    `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
};

const getPokemonData = (pokemon) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`.toLowerCase().replace(/ +/g, ''))
                .then((response) => response.json())
                .then((data) => {
                        console.log(data);
                        renderPokemons(data);
                });
};
getPokemonData('pikachu');
getPokemonData('Bulb Asaur ');
