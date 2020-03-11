const userInfoList = [
    {
        name: 'Uncle Bobby',
        point: 500
    },
    {
        name: 'Suzie Q',
        point: 1500
    },
    {
        name: 'Jimmy Gosling',
        point: 150
    },
    {
        name: 'Gracie Hopper',
        point: 700
    },
    {
        name: 'Linus Benedict Torvalds',
        point: 1800
    },
    {
        name: 'Martin Fowler',
        point: 2000
    }
];

// 1번
let totalOutput = 0;
for (let i = 0; i < userInfoList.length; i++) {
    totalOutput += userInfoList[i].point;
}

console.log(totalOutput); // point를 모두 더한 값
console.log('=================================================');

// 1. for문을 순회하는 방식의 프로그래밍을 함수형으로 전환해서 Point의 총합을 출력한다.
const sumOfPoint = userInfoList
    .map(programmer => programmer.point)
    .reduce((acc, point) => acc + point);
console.log(sumOfPoint);
console.log('=================================================');

// 2. Jimmy Gosling의 이름을 가진 함수형으로 작성하여 오브젝트를 출력하기
const searchedName = userInfoList.find(
    programmer => programmer.name === 'Jimmy Gosling'
);
console.log(searchedName);
console.log('=================================================');

// 3. point가 1800이상인 오브젝트들을 함수형으로 필터링하여 출력하기.
const specificObj = userInfoList.filter(programmer => programmer.point >= 1800);
console.log(specificObj);
console.log('=================================================');

// 4. point가 2000인 오브젝트의 인덱스를 구하라.
const index = userInfoList.findIndex(programmer => programmer.point === 1800);
console.log(index);
