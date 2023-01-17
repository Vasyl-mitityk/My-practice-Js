//Деструкторизація обєктів

const userProfile = {
  name: "Vasyl",
  commentsQty: 23,
  HasSignedAgreement: false,
};

// const { name, commentsQty } = userProfile;
// const { HasSignedAgreement } = userProfile;

// console.log(name);
// console.log(commentsQty);

// деструкторізація обєктів

// const fruits = ["Apple", "Banana"];

// const [fruitOne, fruitTwo] = fruits;

// console.log(fruitTwo);

// Десрукторізація у функціях

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};

console.log(userInfo(userProfile));
