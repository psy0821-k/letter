import { funModel } from "./funModel.js";

const action = {
  act1: new funModel(
    "./asset/act2.png",
    "안녕하세요! 선생님 좋은아침 입니다. 오늘 5번째 주차로 벌써 마지막 수업이네요"
  ),
  act2: new funModel(
    "./asset/act1.png",
    "그런 의미에서 저희 16기 가 선생님께 롤링페이퍼를 선물로 준비했습니다. 쑥스럽지만 재밌게 봐 주세요!"
  ),
};

// 요소 선택
const actionSection = document.querySelector(".action");
const letterSection = document.querySelector(".letter-container");
const displayImg = document.getElementById("display-image");
const displayText = document.getElementById("display-text");
const nextBtn = document.getElementById("next-btn");

let step = 1;

// 초기 세팅 함수
function init() {
  displayImg.src = action.act1.imgUrl;
  displayText.innerText = action.act1.text;
}

// 버튼 클릭 이벤트
nextBtn.addEventListener("click", () => {
  if (step === 1) {
    // act1 -> act2로 변경
    displayImg.src = action.act2.imgUrl;
    displayText.innerText = action.act2.text;
    step = 2;
  } else if (step === 2) {
    // act2 -> 편지 영역(grid)으로 변경
    actionSection.style.display = "none";
    letterSection.style.display = "grid";
    step = 3;
  }
});

// 시작
init();
