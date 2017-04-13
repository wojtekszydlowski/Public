/**
 * Zajrzyj do pliku zadanie02.js i przetestuj działanie obu funkcji. Dlaczego funkcja o nazwie jeden nie ma dostępu do zmiennej o nazwie zmienna2? Aby potwierdzić zrozumienie tematu spróbuj napisać komentarz przy każdej z linii kodu.
 *
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Twój komentarz ...
function jeden() {

    //Twój komentarz ...
    var zmienna1 = 1;

    //Twój komentarz ...
    function dwa() {

        //Twój komentarz ...
        console.log(zmienna1);

        //Twój komentarz ...
        var zmienna2 = 3;
    }

    //Twój komentarz ...
    dwa();

    //Twój komentarz ...
    console.log(zmienna2)
}

//Twój komentarz ...
jeden();