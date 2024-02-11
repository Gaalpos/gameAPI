# T 4.2 Promises and Async/Await

Create a simple web interface in which you implement calls to an API of your choice and consume its data to display it on the screen. The data returned must be both images and text for each case.

## How it works

Im using https://rawg.io/apidocs to get videogames info.

The user inputs the name of a game. At submit, a random number between 0 and 10 gets generated. If the number is lower than 5, async/await gets used. If its higher or equals to 5 we uses promises. Then it gets displayed a photo of the game, its release date and the Metacritic score.

https://gaalpos.github.io/gameAPI/

If you try to input an empty string, you will get a warning. If the game is not found, you are going to get an error message telling you that.

Enjoy ;)    