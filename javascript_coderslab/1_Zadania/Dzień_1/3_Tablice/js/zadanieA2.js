/**
 Napisz dwie funkcje add(array) i multiply(array). Obie mają przyjmować tylko jeden argument – tablicę. Następnie funkcja add ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli for), a funkcja multiply ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli for).
 */

function add (givenArray){
    var sum =0 ;
    for (i=0;i<givenArray.length;i++){
        sum += givenArray [i];
    }
    console.log (sum);
    return sum;
}

function multiply (givenArray){
    var multiplyValue =1 ;
    for (i=0;i<givenArray.length;i++){
        multiplyValue *= givenArray [i];
    }
    console.log (multiplyValue);
    return multiplyValue;

}

array = [1,2,3,4,5,6,7,8,9,10];
add (array);
multiply (array);