// const person = {
//   name: "Patrick",
//   age: 32,
//   isMarreid: false,
// };
// const person2 = { ...person, name: "Kiana" };
// console.log(person2);

// const names = ["first", "second", "thrid"];
// const names2 = [...names, "joel"];
// console.log(names2);

let names = ["first", "second", "third", "first", "first"];

// map
// filter
// reduce

names.map((name) => {
  return name + "1";
});

const filterName = names.filter((name) => {
  return name !== "first";
});

console.log(filterName);
