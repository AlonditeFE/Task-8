// Question 1
function reverseThisString(string){
 

return string.split("").reverse().join("");


}
document.getElementById("#1").innerHTML = reverseThisString('hello');


// Question 2
function swapCase(string) {
    var swapped = "";
    for(var i = 0; i<string.length; i++) {
        if(string[i] === string[i].toLowerCase()) {
            swapped += string[i].toUpperCase();
        }
        else {
            swapped += string[i].toLowerCase();
        }
    }
    return swapped;
}
document.getElementById("#2").innerHTML = swapCase('God Shattering Star');


// Question 3
var numbers = [23, 32, 41, 50, 59];
var newArray = numbers.map(toCelcius)

function toCelcius(array){
    return (array - 32) * 5 / 9;
}
document.getElementById("#3").innerHTML = newArray;



// Question 4
var boolNums = [65, 45, 75, 100];
var boolArray = boolNums.map(passOrFail)

function passOrFail(array){
    if (array >= 75) {
        return true;
    }
    else {
        return false;
    }
}
document.getElementById("#4").innerHTML = boolArray;




// Question 5
const cardinalNumbers = [2,3,4,5,6];
const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
cardinalNumbers.forEach(toGerman)

function toGerman(array, index){
    document.getElementById("#5").innerHTML += "'" + array + " is " + germanNumbers[index] + " ' ,     ";
}



// Question 6
/*function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    function checkPrimeNumbers(n) {
        if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
      }
      document.getElementById("#6").innerHTML = numbers.filter(checkPrimeNumbers);
}
*/

const primeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function returnPrimeNumbers(arr){
    return "The prime numbers are: " + arr.filter((number) => {
 
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}

document.getElementById("#6").innerHTML = returnPrimeNumbers(primeArray);


// Question 7
    for(var i = 1; i<101; i++){
        if(i % 3 == 0 && i % 5 != 0) {
            console.log('CSC225 RULES')
        }
        else if(i % 5 == 0 && i % 3 != 0) {
            console.log('I LOVE JAVASCRIPT')
        }
        else if(i % 5 == 0 && i % 3 == 0) {
            console.log('CSC225 RULES I LOVE JAVASCRIPT')
        }
        else {
            console.log(i);
        }


    }
