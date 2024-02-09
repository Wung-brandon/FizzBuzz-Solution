const number = document.getElementById("numbers");

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0)
    {
        var numberElement = document.createElement('p');
        numberElement.textContent = "FizzBuzz";
        number.appendChild(numberElement);
        // document.write(i + " ")
        // console.log("FizzBuzz");
    }
    else if (i % 3 == 0){
        var numberElement = document.createElement('p');
        numberElement.textContent = "Fizz";
        number.appendChild(numberElement);
        // document.write(i + " ")
        // console.log("Fizz");
    }
    else if(i % 5 == 0){
        var numberElement = document.createElement('p');
        numberElement.textContent = "Buzz";
        number.appendChild(numberElement);
        // document.write(i + " ")
        // console.log("Buzz");
    }
    else{
        var numberElement = document.createElement('p');
        numberElement.textContent = i;
        number.appendChild(numberElement);
        // document.write(i + " ")
        // console.log(i);
    }
    
}



fizzBuzz()