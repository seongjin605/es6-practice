const aaa = 'aaa';
const bbb = 'bbb';
// 문자열은 매번 더하면 가독성이 떨어짐
console.log('안녕하세요' + aaa + bbb);

// ES6에서 backtick 선언을 통한  template literal 방식으로  사용할 수 있다(띄어쓰기 개행등 반영이 가능)

console.log(`${aaa} ${bbb}`);
