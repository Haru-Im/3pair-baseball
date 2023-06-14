const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answerLength = 3;
const timeLimit = 60000;

const generateRandomNumber = () => {
  let answer = [];
  for (let i = 0; i < answerLength; i++) {
    answer.push(~~(Math.random() * 10));
  }
  return answer.join("");
};

const checkAnswer = (input, answer) => {
  let S = 0;
  let B = 0;
  for (let i = 0; i < answerLength; i++) {
    if (input[i] === answer[i]) S++;
    else if (answer.includes(input[i])) B++;
  }
  return { S, B };
};

let answer = generateRandomNumber();
let attempts = 1;

console.log("💻 컴퓨터가 숫자를 생성하였습니다. 1분 내에 답을 맞춰보세요!");

process.stdout.write(`${attempts}번째 시도: `);

const timer = setTimeout(() => {
  console.log("\n🕑 시간이 초과되었습니다. 게임을 종료합니다.");
  rl.close();
}, timeLimit);

rl.on("line", (input) => {
  let { S, B } = checkAnswer(input, answer);
  if (S === answerLength) {
    console.log(`🎉 ${attempts}번만에 맞히셨습니다.
게임을 종료합니다.`);
    clearTimeout(timer);
    rl.close();
  } else {
    console.log(`⚾️${S}S ${B}B`);
    attempts++;
    process.stdout.write(`${attempts}번째 시도: `);
  }
});
