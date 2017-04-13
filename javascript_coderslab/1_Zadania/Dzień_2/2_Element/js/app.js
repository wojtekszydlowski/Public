/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

//Zadanie 1: W pliku js dopisz kod, który zamieni miejscami klasę i id dla elementu znajdującego się w zmiennej homeElement

    console.log (homeElement); //sprawdzamy co jest obecnie
    //var homeElement = document.getElementById("home");
    var idValue = homeElement.id;
    homeElement.id = homeElement.className;
    homeElement.className = idValue;
    console.log (homeElement);

//Zadanie 2: Przeanalizuj kod HTML i JavaScript tego zadania. Wypisz w konsoli wszystkie wcześniej przygotowane zmienne i ich typy. W przypadku tablic przeiteruj (używając np. pętli for), wypisując wartość i typ dla każdego elementu, który znajduje się w tablicy.

    console.log("homeElement: ",typeof(homeElement));
    console.log(homeElement); // 1

    console.log("childElements: ", typeof(childElements));
    console.log(childElements); // tablica 3 elem
    for (var i = 0; i < childElements.length; i++) {
        console.log(typeof(childElements[i]),childElements[i]);
    }
    console.log("banner: ",typeof(banner));
    console.log(banner);

    console.log("blocks: ",typeof(blocks));
    console.log(blocks);
    for (var i = 0; i < blocks.length; i++) {
        console.log(typeof(blocks[i]),blocks[i]);
    }

    console.log("links: ",typeof(links));
    console.log(links); // tablica
    for (var i = 0; i < links.length; i++) {
        console.log(typeof(links[i]),links[i]);
    }

    //to co sam pisałem na zajęciach:

    // console.log("homeElement: ", typeof(homeElement));
    // console.log(homeElement);//1
    //
    // console.log("childElements: ", typeof(childElements));
    // console.log(childElements); //tablica 3 elementowa
    //
    // for (var i=0; i<childElements.length;i++){
    //     console.log(typeof(childElements[i], childElements[i]));
    // }
    //
    // console.log("banner: ", typeof (banner));
    // console.log(banner);
    //
    // console.log("blocks: ", typeof (blocks));
    // console.log(blocks);
    //
    // console.log("links: ", typeof (links));
    // console.log(links);


// Zadanie 3: Wypisz w konsoli wartości innerHTML i outerHTML dla elementów zmiennej blocks. Napisz w komentarzu, czym się od siebie różnią. Nastaw wartość innerHTML na "Nowa wartość diva o klasie blocks". Przeanalizuj, jak zmienił się kod HTML strony.
    console.log("-----------Zadanie 3---------");

    console.log(blocks);

    for (var i = 0; i < blocks.length; i++) {
        //console.log(blocks[i]);
        console.log("innerHTML:");
        console.log(blocks[i].innerHTML); //
        console.log("outerHTML:");
        console.log(blocks[i].outerHTML);

        blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";

    }


    //Zadanie 4: Wypisz w konsoli id elementu kryjącego się w zmiennej homeElement.
    console.log("-----------Zadanie 4---------");
    console.log (homeElement.id);

    //Zadanie 5: Wypisz w konsoli tagi wszystkich elementów, które znajdują się w zmiennej childElements (pamiętaj o tym, że jest to tablica).

    console.log("-----------Zadanie 5---------");
    for (var i = 0; i < childElements.length; i++) {
        console.log(childElements[i].tagName);
    }

    //Zadanie 6: Wypisz w konsoli wartość atrybutu dataset dla każdego elementu znajdującego się w zmiennej links (pamiętaj o tym, że jest to tablica).
    console.log("-----------Zadanie 6---------");
    for (var i = 0; i < links.length; i++) {
        console.log(links[i].dataset);
    }

    //Zadanie 7: Wypisz w konsoli wartość atrybutów classList i className dla zmiennej banner. Wypisz w konsoli, jakiego typu (i ewentualnie jakiej klasy) są te wartości.
    console.log("-----------Zadanie 7---------");

    console.log("className");
    console.log(banner.className);
    console.log("className - typy i klasy");
    console.log(typeof(banner.className));

    console.log("classList");
    console.log(banner.classList);
    console.log("classList - typy i klasy");
    console.log(typeof(banner.classList));



});
