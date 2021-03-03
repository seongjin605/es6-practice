/**
 * @destructuring
 * 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
 */

// 서버 응답에서 만약 response에서 notification가 없다는 최악의 상황을 가정해보자.
const response = {
  //   notifications: {
  //     follow: true,
  //     alerts: true,
  //     unfollow: false
  //   },
  user: {
    lastName: 'park'
  }
};

// 팔로우가 true 일 때, 이메일을 보낸다고 할 때,
// 1. json depth가 길어지면 복잡해서 가독성이 떨어짐.
// 2. follow object의 follow가 없으면 undefined 참조 에러가 발생한다.
if (response.notifications.follow) {
  console.log('sending email...');
} else {
  console.log('not follow or server problem');
}

// 일반적인 follow 유무 체크
const follow =
  response.notifications === undefined ? false : response.notifications.follow;
if (follow) {
  console.log('sending email...');
} else {
  console.log('not follow or server problem');
}

// 디스트럭처링을 통한 follow 개선
const {
  notifications: { follow = false }
} = response;

if (follow) {
  console.log('sending email...');
} else {
  console.log('not follow or server problem');
}

// 위 방식을 개선한 problem 작성하기.
// Destructuring 방식으로 notifications나 내부에 있는 follow가 없는걸 대처.

/**
 *  @see 선언없는할당: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
// let followOfNotifications;
// let userOfNotifications;

// ({
//     notifications: { follow: followOfNotifications = false } = {},
//     user: { follow: userOfNotifications = false } = {}
// } = response);

// if (followOfNotifications) {
//     console.log(`notifications의 follow 상태는: ${followOfNotifications}`);
// } else {
//     console.log(`notifications의 follow 상태는: ${followOfNotifications}`);
// }

// if (userOfNotifications) {
//     console.log(`user의 follow 상태는: ${userOfNotifications}`);
// } else {
//     console.log(`user의 follow 상태는: ${userOfNotifications}`);
// }
