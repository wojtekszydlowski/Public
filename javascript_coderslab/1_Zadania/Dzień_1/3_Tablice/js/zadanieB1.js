/**
 Stwórz tablicę z listą swoich ulubionych owoców. Następnie:

 Wypisz pierwszy owoc w konsoli.
 Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
 W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).

 */


var fruit = ["Jablko", "Banan", "Czeresnie", "Winogrona"];
var tableSize = fruit.length;

console.log ("Pierwszy owoc w tablicy to: " + fruit[0]);
console.log ("Ostatni owoc w tablicy to: " + fruit[tableSize]);

for (var i=0; i<tableSize;i++) {
    console.log ("Owoc [" + i + "] to " + fruit[i]);
}