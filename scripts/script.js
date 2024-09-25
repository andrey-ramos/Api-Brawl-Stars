


// evento submit
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // pega o valor do input
    const playerTag = String(document.querySelector('#player-tag').value);

    // retira a hashtag caso o usuário tenha colocado
    if (playerTag.charAt(0) === '#') {
        playerTag = playerTag.slice(1);
    };

    // chama a api com a playertag como parametro
    const respostaDaApi = callApi(playerTag.toUpperCase());

    alert(respostaDaApi);
});