//꼭 필요한 매개변수만 넘거야 하는 이유 : 재사용성(스테이트가 바뀌더라도 함수를 변경 없이 유지할 수 있다.)
//다른 필요없는 부분에 의존도를 낮춘다.

export function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
