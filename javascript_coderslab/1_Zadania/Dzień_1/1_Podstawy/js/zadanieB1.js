/**
 Stwórz tyle zmiennych, ile różnych znasz typów. Każdą odpowiednio nazwij i wstaw do nich odpowiednie dane. Następnie dodaj do siebie różne zmienne i zobacz, jakiego typu jest wynik. Napisz w komentarzu przy każdej zmiennej jej typ. Wypisz każdą zmienną w konsoli. Zwróć uwagę, jak zmieniają się typy danych w zależności od tego, jakie typy ze sobą dodajemy. Jest to tzw. niejawna konwersja danych (silnik JavaScript bez naszego udziału zmienia typ danych).

typy danych:
 string
 number
 JSON (Object)
 Array
 Bool

 */

var napis = "Ala";
var numer = 1;
var tablica = [3,5,6];
var tablica2 = ["kot", "pies"];
var logiczna = true;

//Wypisze Ala1 - po prostu połączy ze sobą dwie zmienne i utworzy string
console.log (napis + numer);
console.log (typeof(numer + numer));

//Wypisze 13,5,6
console.log (numer + tablica);
console.log (typeof(numer + tablica));

//Wypisze 3,5,6kot,pies
console.log (tablica + tablica2);
console.log (typeof(tablica + tablica2));

//Wypisze 3,5,6true
console.log (tablica + logiczna);
console.log (typeof(tablica + logiczna));