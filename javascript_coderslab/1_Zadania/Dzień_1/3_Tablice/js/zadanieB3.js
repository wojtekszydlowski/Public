/**
 Napisz funkcję factors, która ma przyjmować tylko jeden argument – liczbę, która musi być większa od 0. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa 0, to funkcja ma zwracać pustą tablicę.

 factors(2) => [2, 1]
 factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
 factors(-4) => []

 */

function factors (givenVar) {
    var resultArray = [];
    if (givenVar > 0) {
        for (var i = givenVar; i>0; i--){
            if ((givenVar % i) == 0) {
                resultArray.push(i);
            }
        }
    }
    console.log (resultArray);
    return resultArray;
}

factors (54);
factors (2);
factors (-4);