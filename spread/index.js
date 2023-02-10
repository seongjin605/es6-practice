// 문제1) 두 오브젝트를 하나의 오브젝트로 병합하기.(expected output를 정확히 출력)
const jeju = {
  name: '감귤',
  count: 400
};

const info = {
  location: '제주',
  langtitude: 32.1234123,
  longtitude: 127.29874187
};
// jeju info object를 활용한 spread 연산자 구현

const lastName = { test: { lastName: 'james' } };

const user = {
  companyName: 'google',
  job: 'programmer',
  ...lastName.test
};

// user.lastName = lastName;

console.log(user);
