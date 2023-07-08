document.getElementById("btnBuscar").addEventListener("click", function() {
    var url = "https://api.mercadolibre.com/sites/MLA/search?q=laptops";

    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la petición: " + response.status);
            }
        })
        .then(function(data) {
            mostrarLaptops(data.results);
        })
        .catch(function(error) {
            console.log(error);
        });
});

function mostrarLaptops(laptops) {
    var listaLaptops = document.getElementById("listaLaptops");
    listaLaptops.innerHTML = "";

    laptops.forEach(function(laptop) {
        var li = document.createElement("li");
        li.textContent = laptop.title;
        listaLaptops.appendChild(li);
    });
}



document.getElementById("btnBuscar1").addEventListener("click", function() {
    var url = "https://pokeapi.co/api/v2/pokemon?limit=100";

    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la petición: " + response.status);
            }
        })
        .then(function(data) {
            mostrarNombres(data.results);
        })
        .catch(function(error) {
            console.log(error);
        });
});

function mostrarNombres(pokemonList) {
    var listaPokemon = document.getElementById("pokemonList");
    listaPokemon.innerHTML = "";

    pokemonList.forEach(function(pokemon) {
        var li = document.createElement("li");
        li.textContent = pokemon.name;
        listaPokemon.appendChild(li);
    });
}
