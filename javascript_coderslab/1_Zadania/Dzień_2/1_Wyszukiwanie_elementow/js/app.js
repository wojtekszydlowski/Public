//DOCZYTAĆ:
// https://www.w3schools.com/cssref/css_selectors.asp

/**
 *
 *
 *
Zadanie 1:

 Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag article o klasie first.
 W kolejnym etapie:

 wypisz w konsoli, ile elementów h1 znajduje się w tym tagu.
 wyszukaj w nim wszystkie elementy o klasie oferts, przeiteruj je i wypisz je w konsoli,
 wyszukaj w nim wszystkie elementy div, przeiteruj je i wypisz je w konsoli.

 Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Używaj funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile jest znalezionych przez Ciebie elementów.
 */




document.addEventListener("DOMContentLoaded", function(){ //funkcja zostanie wykonana dopiero wtedy, gdy cały dokument zostanie załadowany

    var articleFirst = document.querySelector("article.first"); // szukamy artykułu w klasie first
    //Ważne:  # - przez oznacz id, . przez oznacza klasę, bez niczego przed - tag html
    console.log(articleFirst);
    var h1Elements = articleFirst.querySelectorAll("h1");
    console.log(h1Elements); //pusta tablica - nie znalazł żadnego h1
    var h2Elements = articleFirst.querySelectorAll("h2");
    console.log(h2Elements); //pokaże tablicę z elementami h2
    console.log(h2Elements.length); //pokaże ile elementów H2 znaleziono

    var ofertsElement = articleFirst.querySelectorAll(".oferts"); //szukamy po klasie
    var ofertsElement = articleFirst.getElementsByClassName("oferts"); //drugi sposób
    console.log(ofertsElement);

    console.log("Wszystkie elementy o klasie oferts:")
    for (var i=0; i<ofertsElement.length;i++) {
        console.log(ofertsElement[i]);
    }

    console.log("Wszystkie elementy div:")
    var divElement = articleFirst.getElementsByTagName("div");
    for (var i=0; i<divElement.length;i++) {
        console.log(divElement[i]);
    }
    console.log("Znaleziono elementów: " + divElement.length);


/**
 Zadanie 2: Wyszukaj na stronie i zapisz do zmiennej element o id exercise2, który znajduje się w menu. Skorzystaj z selektora CSS. Nie odwołuj się bezpośredniego do klasy lub id jakiegokolwiek elementu. Użyj selektorów potomków, dzieci, n-tych dzieci itp.
 */

console.log("-------------------------");
console.log("Zadanie 2:");

var exercise2 = document.querySelector("nav ul li:nth-child(5) a");
//var exercise2 = document.querySelector("#exercise2"); - to byłby inny sposób - odwołanie się bezpośrednio do id
// w [] szuka się atrybutów
console.log(exercise2);


/**
Zadanie 3: Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:

 Element o id home (na dwa sposoby).
 Pierwszy element li nieposiadający atrybutu data-direction.
 Pierwszy element o klasie block.

 Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. Używaj funkcji wyszukujących tylko jeden element.
*/

console.log("-------------------------");
console.log("Zadanie 3:");

//Element o id home (na dwa sposoby).
var idHome = document.getElementById("home");
console.log(idHome);
var idHome = document.querySelector("header");
//lub
var idHome = document.querySelector("#home");
console.log(idHome);

//Pierwszy element li nieposiadający atrybutu data-direction.
//var liElement = document.querySelector("nav ul li:nth-child(3)");
var liElement = document.querySelector("nav ul li:not([data-direction])");
//lub
var liElement = document.querySelector("li:not([data-direction])");
console.log(liElement);

//Pierwszy element o klasie block.
var blockClass = document.querySelector(".block");
console.log(blockClass);


//Przykłady:
    console.log("-------------------------");
    console.log("Przykłady:");

    var liElement = document.querySelector("li:not([data-direction])");
    console.log(liElement.innerHTML);
    console.log(liElement.classList);//nie zwróci nam klasy, bo dopiero znacznik <a> ma klasę



});  // Koniec document.addEventListener("DOMContentLoaded", function()