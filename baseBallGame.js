const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answerLength = 3; //3개
const answerNumber = () => {
  let answer = [];
  for (let i = 0; i < answerLength; i++) {
    answer.push(~~(Math.random() * 10));
  }
  return answer.join("");
};

const replyCheck = (input, answer) => {
  let s = 0;
  let b = 0;
  for (let i = 0; i < answerLength; i++) {
    if (input[i] === answer[i]) s++;
    else if (answer.includes(input[i])) b++;
  }
  return { s, b };
};

let answer = answerNumber(); //최종 답
// console.log(`answer: ${answer}`);
let turn = 1; //몇번째인지 나타내주는 변수

console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

process.stdout.write(`${turn}번째 시도: `);
rl.on("line", (input) => {
  let { s, b } = replyCheck(input, answer);
  if (s === answerLength) {
    console.log(`${turn}번만에 맞히셨습니다.`);
    console.log("게임을 종료합니다");
    rl.close();
  } else {
    console.log(`${b}B${s}S`);
    turn++;
    process.stdout.write(`${turn}번째 시도: `);
  }
}); //첫번째 방법 rl.on으로 반복하기

function baseBallGame() {
  rl.question(`${turn}번째 시도: `, (input) => {
    let { s, b } = replyCheck(input, answer);
    if (s === answerLength) {
      console.log(`${turn}번만에 맞히셨습니다.`);
      console.log("게임을 종료합니다");
      rl.close();
    } else {
      console.log(`${b}B${s}S`);
      turn++;
      baseBallGame();
    }
  });
} //두번째 방법 재귀사용
baseBallGame();
