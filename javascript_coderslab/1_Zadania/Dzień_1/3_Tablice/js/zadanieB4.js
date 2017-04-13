/**
 Napisz funkcję getMissingElement, która ma przyjmować tylko jeden argument – tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać null.

 getMissingElement([1,2,3,4,5,6,7]) => null
 getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
 getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1

 */

function getMissingElement(array){
    var getElement = array[0];

    for (var i=1; i<array.length;i++){
        var checkElement = getElement + 1;

        //console.log (checkElement, array[i]);
        if (checkElement !== array[i]) {
            //return i;
            return checkElement;
        } else {
            getElement = array[i];
        }

    }

    return null;
}
console.log (getMissingElement([1,2,3,4,5,6,7]));
console.log (getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log (getMissingElement([-4,-3,-2,0,1,2,3,4]));