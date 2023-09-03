oldNumbers = [1, 2, 3];
newNumbers = oldNumbers.map(x => x + 1);
console.log(newNumbers);


names = ['Alice', 'Bob', 'Cthulhu'];
greetings = names.map(x => 'Hello ' + x + '!');
console.log(greetings);


myNumbers = [4, 7, 2];
sum = myNumbers.reduce((sum, x) => sum + x, 0);
console.log('The sum is: ' + sum);

myNumbers2 = [4, 7, 2, 1000, 8, 21, -3];
max = myNumbers2.reduce((max, x) => Math.max(max, x), 0);
console.log('The maximum value is: ' + max);
