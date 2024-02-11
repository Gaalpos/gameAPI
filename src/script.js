const apiKey = 'c3f64c69e17f4941988e1cb67acc9ddb';

async function asyncMethod() {
    // console.log('async method');
    const gameName = document.getElementById('gameName').value.trim();

    if (gameName === '') {
        alert('Please enter a game name');
        return;
    }

    try {
        const searchUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(gameName)}`;
        const response = await fetch(searchUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const coverArtUrl = data.results[0].background_image;
            const released = data.results[0].released;
            const rating = data.results[0].metacritic;
            const name = data.results[0].name;

            document.getElementById('coverArt').innerHTML = `<img src="${coverArtUrl}" alt="Game Cover Art" width=20% class='imagen'>`;
            document.getElementById('name').innerHTML = `<p>Full name: ${name}</p>`;
            document.getElementById('released').innerHTML = `<p>Release date: ${released}</p>`;
            document.getElementById('rating').innerHTML = `<p>Metacritic score: ${rating} / 100</p>`;
            document.getElementById('method').innerHTML = `<p> Method: async/await</p>`;
        } else {
            alert('Game not found');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching game data');
    }
}

function promiseMethod() {
    //console.log('promise method');
    const gameName = document.getElementById('gameName').value.trim();

    if (gameName === '') {
        alert('Please enter a game name');
        return;
    }
    const searchUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(gameName)}`;
    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.results && data.results.length > 0) {
                const coverArtUrl = data.results[0].background_image;
                const released = data.results[0].released;
                const rating = data.results[0].metacritic;
                const name = data.results[0].name;
                document.getElementById('coverArt').innerHTML = `<img src="${coverArtUrl}" alt="Game Cover Art" width=20% class='imagen'>`;
                document.getElementById('name').innerHTML = `<p>Full name: ${name}</p>`;
                document.getElementById('released').innerHTML = `<p>Release date: ${released}</p>`;
                document.getElementById('rating').innerHTML = `<p>Metacritic score: ${rating} / 100</p>`;
                document.getElementById('method').innerHTML = `<p> Method: promise</p>`;
            } else {
                alert('Game not found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching game data');
        });
}
function chooseMethod() {
    const randomNum = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    //console.log(randomNum)
    if (randomNum < 5) {
        asyncMethod();
    } else {
        promiseMethod();
    }
}

document.getElementById('gameForm').addEventListener('submit', function (event) {
    event.preventDefault();
    chooseMethod();
});
