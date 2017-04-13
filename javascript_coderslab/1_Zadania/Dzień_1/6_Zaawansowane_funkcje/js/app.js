/**
 Zadanie 1:  Napisz funkcję boilEgg, która jako argument przyjmie czas w sekundach, a jej wywołanie spowoduje, że po zadanym czasie na konsoli wyświetli się komunikat "jajko ugotowane". Dodatkowo co 5 sekund, podczas gotowania w konsoli wyświetl napis "jajko się gotuje". Przetestuj swoją funkcję dla 30 sekund (czas gotowania).
 */

//Mój przykład

// var boilEgg  = setTimeout(function () {
//     console.log('Jako ugotowane');
//     clearInterval(boilingEgg);
// }, 30000); // 30s
//
// var boilingEgg = setInterval(function() {
//         console.log('Jajko się gotuje');
//
//     }, 5000);



// -----------------------

//To samo robione na zajęciach

function boilEgg (givenTime) {
    var time = givenTime * 1000;
    var boliledEgg = setTimeout(function(){
        console.log("Jajko ugotowane");
        clearInterval(boilingEgg);

    },time);

    var boilingEgg = setInterval(function(){
        console.log("Jajko się gotuje");
    },5000);
}

boilEgg(30);