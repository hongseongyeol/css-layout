const header = document.querySelector(".header");

header.addEventListener("wheel", (event) => {
  // event.deltaY 값이 양수이면 오른쪽, 음수이면 왼쪽으로 스크롤합니다.
  if (event.deltaY !== 0) {
    event.preventDefault(); // 기본 세로 스크롤 방지
    header.scrollLeft += event.deltaY; // 가로 방향으로 스크롤 이동
  }
});
