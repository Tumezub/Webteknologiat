function toGrid() {
    //const content = document.getElementById("image-container");
    //content.className = "grid-container";
    $('#image-container').removeClass('list-container');
    $('#image-container').addClass('grid-container');

}
function toList() {
    //const content = document.getElementById("image-container");
    //content.className = "list-container";
    $('#image-container').removeClass('grid-container');
    $('#image-container').addClass('list-container');
}