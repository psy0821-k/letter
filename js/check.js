let 편지작성한_사람 = [
  "사민재",
  "신솔비",
  "박성윤",
  "송하늬",
  "장예지",
  "김효경",
  "문유정",
  "이주연",
  "윤유영",
  "정인우",
  "김근영",
  "김한결",
  "이정론",
];

let count = 편지작성한_사람.length;

if (count < 18) {
  console.log(18 - 편지작성한_사람.length + "명 남음");
} else {
  console.log("작성 끝");
}

let result = 편지작성한_사람.sort();
console.log(result);
