const person = {
  firstName: "Peter",
  lastName: "Parker",
  age: 67,
  hometown: "Lehi",
  hobbies: ["fishing", "running", "camping"],
  favMovies: {
    name: "Spiderman",
    rating: 5,
    year: "2000",
  },
  favFood: [
    {
      name: "pizza",
      size: "large",
      topping: ["pepperoni", "pineapple"],
    },
    {
      name: "noodles",
      size: "large",
      topping: ["cheese", "sausage"],
    },
  ],
}

console.log(person.lastName)
console.log(person['lastName'])
console.log(person.hobbies)
console.log(person.hobbies[2])
console.log(person["hobbies"][2])