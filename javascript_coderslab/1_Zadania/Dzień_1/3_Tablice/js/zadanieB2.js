/**
 Napisz funkcję printTable(array), która przyjmuje tylko jeden parametr – tablicę. Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.
 */

function printTable(array){
    for (var i=0;i<array.length;i++) {
        console.log (array[i]);
    }
}

var array = [3,2,4,6,2,1,2,3,7,8];
printTable(array);