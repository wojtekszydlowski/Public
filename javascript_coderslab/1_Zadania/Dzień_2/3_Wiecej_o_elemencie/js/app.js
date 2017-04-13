/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*

Zadanie 1: Zmodyfikuj listę w następujący sposób:

Dodaj atrybut data-direction nastawiony na wartość up każdemu elementowi li, który nie ma tego atrybutu.
-Nastaw kolor tła co drugiego elementu listy na zielony.
-Nastaw piątemu elementowi listy klasę big.
-Nastaw co trzeciemu elementowi podkreślenie.
     */


    var liElements = document.querySelectorAll(".ex1 ul li:not([data-direction])");
    console.log(liElements);
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].setAttribute("data-direction","up");
    }
    var listElems = document.querySelectorAll(".ex1 ul li");
    for (var i = 0; i < listElems.length; i++) {
        if (i%2!==0) {
            listElems[i].style.backgroundColor = "green";
        }
        if(i%5==0){
            listElems[i].classList.add("big");
        }
        if (i%3==0) {
            listElems[i].style.textDecoration = "line-through";
        }
    }


//Zadanie 2: W zadaniu (plik index.html) znajduje się prosty formularz z polem wyboru select. Ustaw każdemu elementowi option wartość opisu z atrybutu value. Dodaj każdemu elementowi atrybut data-year, użyj dataset, ale wynikowa wartość ma być o 20 większa niż w atrybucie value, czyli np. 2020 -> 2040.

    var options = document.querySelectorAll("option");
    //lub
    var options = document.querySelectorAll(".ex2 option");//bardziej dokładne
    for (i=0;i<options.length;i++){
        var yearValue = options[i].getAttribute("value");
        options[i].innerHTML = yearValue;
        options[i].dataset.year = parseInt(yearValue) + 20;
    }
});
