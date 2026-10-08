// COMP 3123 Lab Test 1
// Zelda Pelletier

// Q1: ES6 Features
const lowerCaseWords = (mixedArray) =>
{
    return new Promise((resolve, reject) =>
    {
        if (!Array.isArray(mixedArray))
        {
            reject("Input must be an array");
            return;
        }
        const onlyStrings = mixedArray.filter((item) => typeof item === "string");
        const lowerCased = onlyStrings.map((word) => word.toLowerCase());

        resolve(lowerCased);
    });
};
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));