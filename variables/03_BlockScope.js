/**
 *  블록 레벨 스코프(Block-level scope)
 * 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등) 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
 * 즉, 코드 블록 내부에서 선언한 변수는 지역 변수이다.
 *
 * 함수 레벨 스코프(Function-level scope)
 * 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다.
 * 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
 */

const canStatus = true;
if (canStatus) {
  var name = 'boot';
}
test();
// 전역에서 지역변수에서 선언된 변수를 참조가 불가능 (블록스코프)
console.log(name); // ReferenceError: name is not defined

// if (canStatus) {
//   var sayHello = '안녕하세요';
// }
// console.log(sayHello); // undefined error가 발생해야하는데  함수스코프이기 때문에 안녕하세요가 로그에 찍힌다.

// /**
//  * var 변수는 BlockScope가 아닌 함수스코프
//  */
// function say() {
//   var sayBye = '안녕히가세요';
// }
// console.log(sayBye);
