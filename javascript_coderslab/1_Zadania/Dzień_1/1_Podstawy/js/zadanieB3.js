//Komentarze do kodu umieśc bezpośrednio pod linią w której znaleziono błąd

var i = 1;
while (i < 100) {
    console.log('Aktualna wartość zmiennej i to: ' + i);
    i = i * 2;
}

var year = 2016;
if (year % 4 == 0) {
    console.log('Rok przestępny');
} else {
    console.log('Rok nieprzestępny');
}


console.log('Błędy poprawione, więc ten tekst będę widzieć w konsoli po uruchomieniu skryptu' + ' HURRRA!!!');
