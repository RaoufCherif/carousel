

function controle() {
    var saisie = document.getElementById("total").value;
    alert("Vous avez saisi : " + saisie);
}




var arr = [];



let num;
let taille = prompt("merci d'entrer la taille du array!");


while (arr.length < taille) {

    num = window.prompt("merci d'entrer le true or false");
    arr.push(num);
}

function recupererLesElement() {
    var element = document.getElementById("number").value;
    element.display.style

}

function calculer() {
    let conteur = 0;

    arr.forEach(element => {
        let lower = element.toLowerCase();
        if (lower === "true") {
            conteur++;
        } else if (arr.length === 0) {
            conteur = 0;
        }
    });

    console.log(conteur);

    return conteur;
}


function ConterLesTrue() {
    let html = document.getElementById("myP").innerHTML;
    document.getElementById("demo").innerHTML = "je suis là";
}






