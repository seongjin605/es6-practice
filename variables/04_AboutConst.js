/**
 * const가 과연 readonly 일까?
 */

const hello = 'hellxwo';
// hello = 'say hello'; // TypeError: Assignment to constant variable.

const object = Object.freeze({
  id: 1,
  name: '자바스크립트',
  version: 'ES6'
});
console.log(object);

object.currentDate = new Date();
object.id = 2;

console.log(object);
