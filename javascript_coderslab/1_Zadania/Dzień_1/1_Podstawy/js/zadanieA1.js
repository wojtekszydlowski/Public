/*
 Zajrzyj do pliku zadanieA1.js. Znajdziesz tam kod funkcji, która losuje liczbę z przedziału 1–100. Dopisz kod, który wyświetli następujące informacje w konsoli:

 Czy liczba jest parzysta czy nieparzysta.
 Wszystkie dzielniki liczby, np. dla 10 wyświetli 10, 5, 2, 1 (liczby mają wyświetlić się w jednej linii).
 Wyświetli wynik potęgowania liczby, wykładnikiem potęgi ma być reszta z dzielenia tej liczby przez 5.

 **Przykład dla polecenia 3.**:
 Wylosowana liczba: 8
 8 % 5 = 3
 8^3 = 512

 */

function mathInfo() {
    //var randomNumber = Math.floor(Math.random() * 100); //oryginalny zapis
    var randomNumber = 1 + Math.floor(Math.random() * 99); //losuje liczbę z przedziału 1-100
    // poniżej napisz rozwiązanie zadania
    if (randomNumber % 2 == 0) {
        console.log('Liczba ' + randomNumber + ' jest parzysta');
    } else {
        console.log('Liczba ' + randomNumber + ' jest nieparzysta');
    }

    var divs = "";
    //console.log('Liczba ' + randomNumber + ' jest ' + (randomNumber % 2 == 0 ? 'parzysta' : 'nieparzysta'));
    for (var i = 1; i <= randomNumber; i++) {
        if (randomNumber % i == 0) {
            divs += i + ',';//divs = divs+','+i
        }
    }
    console.log('dzielniki to: ' + divs);

    var mod5 = randomNumber % 5;
    console.log('Potęga to ' + Math.pow(randomNumber, mod5));
}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
