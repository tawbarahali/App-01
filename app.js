// #region Exercice 01
function newMax(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
// #endregion

// #region Exercice 02
function newLog(){
    console.log("Bonjour");
}
// #endregion Exercice 02

// #region Exercice 03

// Saisie de variables
var n1 = prompt("Saisiez un entier : ");
var n2 = prompt("Saisiez un autre entier :");
// Fonction newSomme
function newSomme(a,b){
    return (Number(a) + Number(b));
}

// #endregion Exercice 03

// #region Exercice 04
const mainDiv = document.querySelector(".main-div");

function into(){
    mainDiv.innerHTML = "INTO";
}
function out(){
    mainDiv.innerHTML = "OUT";
}
function bgColor(){
    mainDiv.style.background = "red";
}
// #endregion Exercice 04

// #region Execution

// Execution Exercice 01
console.log(newMax(n1,n2));

// Execution Exercice 02
newLog();

// Execution Exercice 03
console.log("Somme de " + n1 + "+" + n2 + " : " + newSomme(n1, n2))

// #endregion Execution