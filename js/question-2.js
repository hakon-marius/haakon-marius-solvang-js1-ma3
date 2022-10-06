const apiKey = "c76de390b629492ebbfe9f1e1253e770";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;


const myApiContainer = document.querySelector(".apicontainer");

async function getGameInformation() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const facts = data.results;

        myApiContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {


            if (i === 8) {
                break;
            }
            myApiContainer.innerHTML += `<div class="apicontainer"><div class="cards"><p>${facts[i].name}</p> 
        <p>Rating: ${facts[i].rating}</p> <p>Number of tags: ${facts[i].tags.length}</p></div></div>`;
        }
    }

    catch (error) {
        console.log("error occurred", error);

        myApiContainer.innerHTML = `<div class="error">OBS! Error occurred!</div>`;
    }
}
getGameInformation()




window.addEventListener("load", function () {
    const loading = document.querySelector(".loading");

    loading.classList.add("hide-loader");

    loading.addEventListener("transitioned", function () {
        document.body.removeChild("loading");
    })
});

