function range(start, end) 
{
    let rangeArray = [];
    for (let index = start; index <= end ; index++) 
    {
        rangeArray.push(index);
    }
    return rangeArray;
}

function sum(arrayOfNumbers) 
{
    console.log("Array: " + arrayOfNumbers);
    console.log("Length: " + arrayOfNumbers.length);

    let sumOfNumbers = 0;
    for (let index = 0; index <= arrayOfNumbers.length -1 ; index++) 
    {
        sumOfNumbers += arrayOfNumbers[index];
    }
    return "Sum of the array: " + sumOfNumbers;
}

console.log(sum(range(5, 10)));