const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateRandomNumber = () => {
  let result = [];
  while (result.length < 3) {
    let num = Math.floor(Math.random() * 10);
    if (result.indexOf(num) < 0) {
      result.push(num);
    }
  }
  return result.join("");
};

const checkAnswer = (input, answer) => {
  let S = 0;
  let B = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] === answer[i]) {
      S++;
    } else if (answer.includes(input[i])) {
      B++;
    }
  }
  return { S, B };
};

let answer = generateRandomNumber();
console.log(answer);
let attempts = 0;

console.log("💻 컴퓨터가 숫자를 생성함. 답맞춰봐");

process.stdout.write("내 대답 : ");

rl.on("line", (input) => {
  attempts++;
  let { S, B } = checkAnswer(input, answer);
  if (S === 3) {
    console.log(`🎉 ${attempts}번 만에 맞췄구나.. 게임을 종료하지..`);
    rl.close();
  } else {
    console.log(`⚾️ ${S}S ${B}B`);
    process.stdout.write("내 대답 : ");
  }
});
