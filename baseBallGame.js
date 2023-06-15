const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answerLength = 3;

function generateRandomNumber() {
  let answer = '';
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  while(answer.length < 3){
      let randomNum = Math.floor(Math.random() * num.length);
      answer += num.splice(randomNum, 1)
  }
  console.log(answer);  
  return answer;
}

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
    process.stdout.write(`${attempts}번째 시도: `);
  }
});
