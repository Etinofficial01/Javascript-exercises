/*
let words = ['hello', 'world', 'search', 'good', 'search'];

let index = -1;

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'search') {
        index = i;
        break; // Exit the loop once we find the first occurrence
    }

}

console.log(index);

let words2 = ['not', 'found'];
index = -1; // Reset index for the new array
for (let i = 0; i < words2.length; i++) {
    if(words2[i] === 'search') {
        index = i;
    }
}

console.log(index); // This will still log -1 since 'search' is not in words2
*/


/*
function removeEgg(foods) {
    const result = [];

    for(let i = 0; i < foods.length; i++) {
        if(foods[i] === 'egg'){
            continue;
        }

        result.push(foods[i]);
    }

    return result;
}

console.log(removeEgg(['egg', 'bacon', 'egg', 'sausage'])); // ['bacon', 'sausage']
console.log(removeEgg(['ham', 'bacon']));
*/

function removeEgg(foods) {
    const result = [];
    let eggsRemoved = 0;

    for(let i = 0; i < foods.length; i++) {
        if(foods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue; // Skip the first two occurrences of 'egg'
        }

        result.push(foods[i]); // Add all other foods to the result
    }

    return result; // Return the modified array 
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


/*
function removeEggReverse(foods) {

    const reversedFood = foods.reverse();
    const result = [];
    let eggsRemovedReverse = 0;

    for(let i = 0; i < reversedFood.length; i++) {
        if(reversedFood[i] === 'egg' && eggsRemovedReverse < 2){
            eggsRemovedReverse++;
            continue;
        }

        result.push(reversedFood[i]); // Add all other foods to the result
    }

    return result; // Return the modified array in original order

}

console.log(removeEggReverse(['egg', 'apple', 'egg', 'egg', 'ham']));
*/


function removeEggReverse(foods) {

    const foodsCopy = foods.slice(); // Create a copy of the original array
    const reversedFood = foodsCopy.reverse();
    const result = [];
    let eggsRemovedReverse = 0;

    for(let i = 0; i < reversedFood.length; i++) {
        if(reversedFood[i] === 'egg' && eggsRemovedReverse < 2){
            eggsRemovedReverse++;
            continue;
        }

        result.push(reversedFood[i]); // Add all other foods to the result
    }

    return result; // Return the modified array in original order

}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(foods);
console.log(removeEggReverse(['egg', 'apple', 'egg', 'egg', 'ham']));

for(let i = 0; i <= 20; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');   
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

