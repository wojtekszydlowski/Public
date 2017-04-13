/**
 Zadanie 1: Za pomocą prototypu dodaj metodę upperLower do wbudowanego w JavaScript obiektu String. Metoda zamieni podany ciąg znaków tak, że każdy znak nieparzysty w wyrazie będzie zamieniony na mała literę, a parzysty – na duża. Jeśli w ciągu występuje spacja, pomiń ją. Po rozwiązaniu zadania pomyśl, czy można funkcję zapisać w inny, łatwiejszy sposób.

 -> input
 var funnyText = "Smiesznie".upperLower();

 output ->
 sMiEsZnIe

 -> input

 var funnyTextWithSpace = "Javascript jest super".upperLower();

 output ->
 jAvAsCrIpT jEsT sUpEr
 */


String.prototype.upperLower = function(){
    //console.log(this);
    var newText ="";
    for(var i =0;i<this.length;i++){
        if(i%2==0){
            newText += this[i].toUpperCase();
        }else {
            newText += this[i].toLowerCase();
        }
    }
    return newText;
}






var funnyText = "Smiesznie".upperLower();
console.log(funnyText);
var funnyTextWithSpace = "Javascript jest super".upperLower();
console.log(funnyTextWithSpace);

console.log("-----------------------------");


/**
 Zadanie 2:
 Stwórz obiekt samochód, utwórz dla niego odpowiednie atrybuty i metody.
 Atrybuty:

 markę,
 kolor,
 liczbę przejechanych kilometrów (na początku 0).

 Metody:

 printCarinfo() – metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
 drive(km) – która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.

 */

var car = {
    brand: "Audi",
    color: "Red",
    kmDriven: 0,
    printCarinfo: function() {
        console.log("Marka samochodu: " + this.brand);
        console.log("Kolor samochodu: " + this.color);
        console.log("Przejechane kilometry: " + this.kmDriven);
    },
    drive: function (km) {
        this.kmDriven += km;
    }

}

console.log (car.printCarinfo());
car.drive(10);
console.log (car.printCarinfo());

console.log("-----------------------------");

/**
 Zadanie 3:
 Do obiektu samochód z zadania 2. dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj ten nowy atrybut poza ciałem obiektu. Dodaj też następujące metody:

 metodę dodającą wpis do tej tablicy,
 metodę wyświetlającą wszystkie przeglądy samochodu.

 Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.
 */

var car = {
    brand: "Audi",
    color: "Red",
    kmDriven: 0,
    inspection=[],
    printCarinfo: function() {
        console.log("Marka samochodu: " + this.brand);
        console.log("Kolor samochodu: " + this.color);
        console.log("Przejechane kilometry: " + this.kmDriven);
    },
    drive: function (km) {
        this.kmDriven += km;
    },
    addInspection: function(inspectionName) {
        this.inspection.push(inspectionName);
    },
    showInspection: function () {
        for (var i=0;i<this.inspection.length;i++){
            inspectionNumber = i +1;
            console.log("Inspekcja nr " + inspectionNumber +": " + this.inspection[i]);
        }
    }

}

//car.inspection=[];
car.addInspection("Przegląd auta 10.10.2016");
car.addInspection("Przegląd auta 10.12.2016");
car.addInspection("Przegląd auta 10.05.2017");
car.showInspection();

console.log("-----------------------------");

/**
 Zadanie 5:
 Stwórz konstruktor dla obiektów Rectangle, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury. Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:

 getArea() – metoda ma zwracać pole powierzchni,
 getPerimiter() – metoda ma zwracać obwód.

 Stwórz kilka obiektów i zobacz, czy metody działają tak jak powinny.
 */

var Rectangle = function (length, width) {
    this.length = length;
    this.width = width;
}


Rectangle.prototype.getArea = function (){
    var area = 0;
    area = this.length * this.width;
    console.log("Area is: " + area);
}

Rectangle.prototype.getPerimiter = function (){
    var perimiter = 0;
    perimiter = 2 * this.width + 2 * this.length;
    console.log("Perimiter is: " + perimiter);
}
var figure1 = new Rectangle (10,7);
figure1.getArea();
figure1.getPerimiter();

console.log("-----------------------------");

/**
 Zadanie 6:
 Stwórz konstruktor dla obiektów Calculator. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji. Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:

 add(num1, num2) – metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added num1 to num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
 multiply(num1, num2) – metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied num1 with num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
 subtract(num1, num2) – metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted num1 from num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
 divide(num1, num2) – metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided num1 by num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
 printOperations() – metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
 clearoperations() – metoda ma wyczyścić wszystkie operacje z pamięci.

 */

var Calculator = function (){
    this.operationHistory = [];
}

Calculator.prototype.add = function (num1, num2) {
    var addResult = 0;
    addResult = num1 + num2;
    this.operationHistory.push("added " + num1 + " to " + num2 + " got " + addResult);
}

Calculator.prototype.multiply = function (num1, num2) {
    var multiplyResult = 0;
    multiplyResult = num1 * num2;
    this.operationHistory.push("multiplied " + num1 + " with " + num2 + " got " + multiplyResult);
}

Calculator.prototype.subtract = function (num1, num2) {
    var subtractResult = 0;
    subtractResult = num1 - num2;
    this.operationHistory.push("subtracted " + num1 + " from " + num2 + " got " + subtractResult);
}

Calculator.prototype.divide = function (num1, num2) {
    var divideResult = 0;
    divideResult = num1 / num2;
    this.operationHistory.push("divided " + num1 + " by " + num2 + " got " + divideResult);
}

Calculator.prototype.printOperations = function () {
    for (var i = 0; i < this.operationHistory.length; i++) {
        console.log(this.operationHistory[i]);
    }
}
Calculator.prototype.clearoperations = function () {
    this.operationHistory = [];

}

var calc = new Calculator();
calc.add(5,11);
calc.multiply(3,9);
calc.subtract(3,5);
calc.divide(3,6);
calc.printOperations();
calc.clearoperations();
calc.printOperations();