let shoppingList = ['Milk', 'Bread', 'Apples'];
console.log(shoppingList.length);

console.log(shoppingList[1]);
shoppingList[shoppingList.indexOf('Bread')] = 'Bananas';
console.log(shoppingList[1]);

let age = 100;

if (!(age <= 14 && age >= 90)) {
  console.log('Age is not between 14 and 90 (inclusive)');
}

const arr2 = ['ciao', 1, [], {}, false];
console.log(typeof arr2);

arr2.length;

arr2[4] = true;
console.log(arr2);
