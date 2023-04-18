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

const person1 = {
    firstName: "Peter",
    lastName: "Parker",
    age: 67,
    hometown: "Provo",
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

console.log(person["favMovies"]["year"])
console.log(person.favFood[1].name)
console.log(person.favFood[1].topping[0])

// let{hometown, firstName} = person
let{hometown: person1Hometown, firstName: person1FirstName} = person1

console.log(person1Hometown)

person.favColor = "red"

delete person.age
// delete person.favFood[0]
person.favFood.splice(0,1)
console.log(person)

// Classes ===================//

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting(){
        console.log(`Hello, my name is ${this.name}, and I am a ${this.breed}. I am ${this.age} years old.`)
    }
}

let dog1 = new Dog ("Lassie", "collie", 5)
let dog2 = new Dog ("John", "lab", 8)
let dog3 = new Dog ("Kypto", "alien", 300)

// console.log(dog1)
// console.log(dog2)

// dog1.greeting()
// dog2.greeting()
// dog3.greeting()

// for(let key in dog2){
//     console.log(dog2[key])
// }

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)

        this.trainingLevel = trainingLevel
    }

    levelUp(num){
        this.trainingLevel += num
        // or this.trainingLevel = this.trainingLevel + num
    }
}

let puppy1= new Puppy("Jane", "husky", 3, 20)

puppy1.levelUp(5)

console.log(puppy1)