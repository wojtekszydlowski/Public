/**
 Napisz funkcję distFromAvarage, która ma przyjmować jako argument tablicę z liczbami. Zwracana przez funkcję tablica ma przedstawiać w kazdej komórce różnicę między liczbą z danej komórki a średnią wartością tablicy. Dla uproszczenia możesz użyć funkcji z poprzedniego zadania. Np.

 distFromAvarage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
 distFromAvarage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
 distFromAvarage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)

 */

function add (givenArray){
    var sum =0 ;
    for (i=0;i<givenArray.length;i++){
        sum += givenArray [i];
    }
    //console.log (sum);
    return sum;
}

function distFromAvarage (givenArray){
    var resultArray = [];
    var sum = add(givenArray);
    var avg = sum / givenArray.length;

    //console.log(sum,avg);

    for (i = 0; i<givenArray.length; i++){
        //Pierwszy sposób
        //resultArray[i] = Math.abs(avg - givenArray[i]); //abs - wartość bezwzględna
        //Drugi sposób - push dodaje na koniec tablicy, nie musimy wiedzieć jak duża jest tablica
        resultArray.push(Math.abs(avg - givenArray[i]));
    }


    console.log (resultArray);
    return resultArray;
}


distFromAvarage([1,2,3,4,5,6,7]); // => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAvarage([1,1,1,1]); // => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAvarage([2,8,3,7]); //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)