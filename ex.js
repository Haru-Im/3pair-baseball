const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("당신의 이름은 무엇인가요? ", (answer) => {
  console.log(`안녕하세요, ${answer}님!`);
  rl.close();
});
