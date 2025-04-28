setInterval(
    function test() {
        let total = 0;
        let regPizza = 6;
        let famPizza = 12;
        let ingredient = 2;

        if (document.getElementById("pizzat").value == 1) {
            total += parseInt(regPizza);
        }
        else if (document.getElementById("pizzat").value == 2) {
            total += parseInt(famPizza);
        }
        else {
            total += 0;
        }

        if (document.getElementById("ananas").checked == true) {
            total += parseInt(ingredient);
        }
        else {
            total += 0;
        }

        if (document.getElementById("ham").checked == true) {
            total += parseInt(ingredient);
        }
        else {
            total += 0;
        }

        if (document.getElementById("pepperoni").checked == true) {
            total += parseInt(ingredient);
        }
        else {
            total += 0;
        }

        if (document.getElementById("cheese").checked == true) {
            total += parseInt(ingredient);
        }
        else {
            total += 0;
        }

        if (document.getElementById("tuna").checked == true) {
            total += parseInt(ingredient);
        }
        else {
            total += 0;
        }

        console.log(total);
        document.getElementById("price").value = parseInt(total) + " €";
    }
    , 1);


function order() {
    document.getElementById("pizzat").value = "0";
    document.getElementById("ananas").checked = false;
    document.getElementById("ham").checked = false;
    document.getElementById("pepperoni").checked = false;
    document.getElementById("cheese").checked = false;
    document.getElementById("tuna").checked = false;
    document.getElementById("price").value = "0";
    console.log("Order complete. Values resetted");
}


function info() {
    if (document.getElementById("data").hidden == true) {
        document.getElementById("data").hidden = false;
    }
    else {
        document.getElementById("data").hidden = true;
    }
}

