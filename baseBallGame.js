const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answerNumber = (answerLength) => {
  let answer = [];
  for (let i = 0; i < answerLength; i++) {
    let randNum = ~~(Math.random() * 10);
    if (answer.includes(randNum)) i--;
    else answer.push(randNum);
  }
  console.log(`answer: ${answer}`);
  return answer.join("");
};

const replyCheck = (input, answer, answerLength) => {
  let s = 0;
  let b = 0;
  for (let i = 0; i < answerLength; i++) {
    if (input[i] === answer[i]) s++;
    else if (answer.includes(input[i])) b++;
  }
  return { s, b };
};

const baseBallGame = (answerLength, answer, turn) => {
  rl.question(`${turn}번째 시도: `, (input) => {
    let { s, b } = replyCheck(input, answer, answerLength);
    if (s === answerLength) {
      console.log(`${turn}번만에 맞히셨습니다.`);
      console.log("게임을 종료합니다.");
      rl.close();
    } else {
      console.log(`${b}B${s}S`);
      turn++;
      baseBallGame(answerLength, answer, turn);
    }
  });
};

function baseBallGameStart() {
  rl.question(`맞출 숫자의 개수: `, (input) => {
    const answer = answerNumber(Number(input));
    console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");
    let turn = 1; //몇번째인지 나타내주는 변수
    baseBallGame(Number(input), answer, turn);
  });
}
baseBallGameStart();
