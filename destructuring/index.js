/**
 * @destructuring
 * 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
 */

// 서버에서 만약 response에서 notification가 없다는 최악의 상황을 가정해보자.
const response = {
    // notifications: {
    //     follow: true,
    //     alerts: true,
    //     unfollow: false
    // },
    user: {
        lastName: 'park'
    }
};

// 팔로우가 true 일 때, 이메일을 보낸다고 할 때,
// 1. 너무 길고 가독성이 떨어짐.
// 2. follow 값이나 notifications가 없으면 undefined 참조 에러가 발생한다.
// if (response.notifications.follow) {
//     console.log('sending email...');
// } else {
//     console.log('not follow or server problem');
// }

const { notifications: { follow = false } = {} } = response;

if (follow) {
    console.log('sending email...');
} else {
    console.log('not follow or server problem');
}
// 위 방식을 개선한 problem 작성하기.
// Destructuring 방식으로 notifications나 내부에 있는 follow가 없는걸 대처.
