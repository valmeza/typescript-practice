// object
const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Valeria",
  age: 25,
  hobbies: ["sports", "cooking"],
};

console.log(person.name);

let favoriteActivities: string[]; // strict
favoriteActivities = ["some activity", "another activity"];

let anythingYouWantArray: any[]; // flexible
anythingYouWantArray = [1, true, "free", 4];

for (let hobby of person.hobbies) {
  console.log(hobby);
}
