var programmingLanguages=['JavaScript','Java','Python'];

console.log(programmingLanguages);
console.log(programmingLanguages[1]);

programmingLanguages.push('php')
console.log(programmingLanguages);

programmingLanguages.pop()
console.log(programmingLanguages);

programmingLanguages.unshift('c#')
console.log(programmingLanguages);

programmingLanguages.shift()
console.log(programmingLanguages);

programmingLanguages.splice(0,2,'Ruby')
console.log(programmingLanguages);

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));


var students=["Liza", "Rudina"];
var[s1,s2]=students;
console.log(s1);
console.log(s2);

var places=["Vienna", "Venice", "NewYork", "Barcelona"];
var[firstPlace, , secondPlace]=places;

console.log(secondPlace);

var numbers=[1,2,3,4,5,6,7,8];
var[first, second, ...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());
