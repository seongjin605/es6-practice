console.log(helloWorld);
var helloWorld = 'HELLO WORLD';

/**
 * undefined가 떨어지는 이유는 호이스팅 때문에 발생한다.
 * 자바스크립트는 본래 순차적으로 실행이 될 것 같지만,
 *
 * Hoisting: 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것
 * var 변수는 함수선언문과 변수에서 호이스팅이 일어난다.
 *
 * <code>
 *      var helloWorld ;
 *      console.log(helloWorld);
 *      helloWorld = 'HELLO WORLD';
 * </code>
 */

// let & const 는 호이스팅에 영향을 받지 않는다.
// console.log(blabla);
// let blabla = 'blabla';

printYourName1();
printYourName2();

// 함수 표현식
var printYourName1 = function() {
    console.log('마틴파울러');
};

// 함수 선언문
function printYourName2() {
    console.log('폰노이만');
}
