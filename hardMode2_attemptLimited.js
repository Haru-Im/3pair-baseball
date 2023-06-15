const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answerLength = 3;
const maxAttempts = 20;

const generateRandomNumber = () => {
  let answer = [];
  for (let i = 0; i < answerLength; i++) {
    let randomNum = ~~(Math.random() * 10);
    console.log(`${i} : randomNum은 ${randomNum}`);
    if (answer.indexOf(randomNum) < 0) {
      answer.push(randomNum);
    } else i--;
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
console.log(answer);
let attempts = 1;

console.log("💻 컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

process.stdout.write(`${attempts}번째 시도: `);

rl.on("line", (input) => {
  let { S, B } = checkAnswer(input, answer);
  if (S === answerLength) {
    console.log(`🎉 ${attempts}번만에 맞히셨습니다.
게임을 종료합니다.`);
    rl.close();
  } else {
    console.log(`⚾️${S}S ${B}B`);
    attempts++;
    if (attempts > maxAttempts) {
      console.log(
        `😢 ${maxAttempts}번의 시도가 모두 끝났습니다. 게임을 종료합니다.`
      );
      rl.close();
    } else {
      process.stdout.write(`${attempts}번째 시도: `);
    }
  }
});
