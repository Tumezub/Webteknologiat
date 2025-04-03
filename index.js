window.onload = function () {
    console.log("Tää tulee konsolii ku käynnistää sivun");
}

function showOnMap() {
    let address = document.getElementById("addressInput").value;
    let city = document.getElementById("cityInput").value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
}