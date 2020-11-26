// object
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Valeria",
  age: 25,
  hobbies: ["sports", "cooking"],
  role: [1, "admin"],
};

console.log(person.name);

let favoriteActivities: string[]; // strict
favoriteActivities = ["some activity", "another activity"];

let anythingYouWantArray: any[]; // flexible
anythingYouWantArray = [1, true, "free", 4];

for (let hobby of person.hobbies) {
  console.log(hobby);
}

enum Hungry {
  YES,
  NO,
}

const animal = {
  type: "dog",
  color: "brown",
  hungry: Hungry.YES,
};

if (animal.hungry == Hungry.YES) {
    console.log("Feed it!");
}
