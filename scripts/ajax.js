let searchCount = 0;

function getData() {
    ++searchCount;
    let data = '<div class="accordion-item">' +
        '<h2 class="accordion-header" id="flush-heading' + searchCount + '>' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"' +
        'data-bs-target="#flush-collapse' + searchCount + '" aria-expanded="false" aria-controls="flush-collapse' + searchCount + '">' +
        'Joke #' + searchCount +
        '</button>' +
        '</h2>' +
        '<div id="flush-collapse' + searchCount + '" class="accordion-collapse collapse" aria-labelledby="flush-heading' + searchCount + '"' +
        'data-bs-parent="#accordionFlushExample">' +
        '<div class="accordion-body">'
        +
        '</div>' +
        '</div>' +
        '</div>';
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 
            return response.json(); //huom. tässä response tulee JSON-muodossa
        })
        .then(function (result) {

            // show data in DIV
            console.log(result.value);
            //document.getElementById("result").innerText += result.value + "\n";
            document.getElementById("animation").style.display = "none";
            document.getElementById("counter").innerText = searchCount;
            document.getElementById("accordionFlushExample").innerHTML += data;
            document.getElementById("flush-collapse" + searchCount).getElementsByClassName("accordion-body")[0].innerText = result.value;
            //document.getElementById("account-data").innerHTML += "<br>" + "<i>" + result.company + "</i>";

        })

        .catch(function (error) {
            //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
            console.log(error);
        });
    document.getElementById("animation").style.display = "block";

}