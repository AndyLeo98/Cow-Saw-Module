const userInfo = require("./information");
console.log(
  `Hi, my name is ${userInfo.name} and I'm studying at the ${userInfo.campus} in Lisbon.`
);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooooodule",
    e: "oO",
    T: "U",
  })
);
