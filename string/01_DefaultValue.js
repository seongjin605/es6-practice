/**
 * 콘솔에서 sayHello의 name 값을 빈값으로 넘겼을때, undefined를 방지하려면
 * default value를 어떤식으로 설정할 수 있는지?
 * @param {*} name
 */
function sayHello(name) {
  // if로 name값이 없을 때, undefined 체크하는 방식이 아님.
  // return name === undefined ? 'Hello google' : 'Hello Meta';
  return 'Hello' + (name || 'Google');
}

// sayHello() 호출함수에 파라미터를 넣지않고 위 함수를 다양한 방법으로 조작하여 처리.
console.log(sayHello('Test'));
