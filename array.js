const data = [ 
{ 
name: "John", 
birthday: "1-1-1995", 
favoriteFoods: { 
meats: ["hamburgers", "sausages"], 
fish: ["salmon", "pike"], 
}, 
}, 
{ 
name: "Mark", 
birthday: "10-5-1980", 
favoriteFoods: { 
meats: ["hamburgers", "steak", "lamb"], 
fish: ["tuna", "salmon", "barracuda"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["cow", "chicken"], 
fish: ["pike"], 
},
}, 
{ 
name: "Thomas", 
birthday: "1-10-1990", 
favoriteFoods: { 
meats: ["bird", "rooster"], 
fish: ["salmon"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["hamburgers", "lamb"], 
fish: ["bass", "tuna"], 
}, 
}, 
]; 

function getNames(arr) {
  return arr.map(function (person) {
    return person.name;
  });
}
console.log(getNames(data));

function bornBefore1990(arr) {
  return arr.filter(function (person) {
    const year = Number(person.birthday.split('-')[2]);
    return year < 1990;
  });
}
console.log(bornBefore1990(data));


function countFoods(arr) {
  const counts = {};
  arr.forEach(function (person) {
    const allFoods = person.favoriteFoods.meats.concat(person.favoriteFoods.fish);
    allFoods.forEach(function (food) {
      counts[food] = (counts[food] || 0) + 1;
    });
  });
  return counts;
}

console.log(countFoods(data));


