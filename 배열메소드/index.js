const foods = ["apple","orange"];

// foods 배열에서 banana가 있는지 확인
if(foods.indexOf("banana") === -1){
    // 없으면 추가해라
    foods.push("banana");
}

console.log(foods);

const arr2 = [1,2,3];
arr2[arr2.length + 1] =3;
// 배열의 끝에 추가하지 않고 더 이후의 인덱스에 값을 추가하면 
// 중간 값들은 비어있다.
// 
console.log(arr2);

const arr3 =[1,2,3,4,5];
arr3.pop();
console.log(arr3);

arr3.shift();
console.log(arr3);

const arr1 = [1,2];
const arr5 = [3,4];
const arr4 = arr1.concat(arr2);
console.log(arr4);
// 배열 이어붙일때 concat을 사용


// 원본 배열의 중간 값을 제거 추가 하는 경우
// splice
const arr6 = [1,2,3,4];
const result2 = arr6. splice(1,2,20,30);
console.log(arr6);
console.log(result2);

const arr7 = ['a','b','c','d'];
const result3 = arr7.splice(1,2);
console.log(arr7);
console.log(result3);

// 배열에서 특정 요소 제거 함수

const arr8 = [1,20,3,1,50,6];
function remove(arr,item){
    const index = arr.indexOf(item);

    if(index !== -1 )arr.splice(index,1);

    return arr;
}
console.log(remove(arr8,20));

// 매개변수로 전달받은 범위의 아이템을 복사해서 배열을 반환해주는 함수
// slice 원본 배열을 변환 X
// const arr3 =[1,2,3,4,5];
const arr9 = [1,2,3];
console.log(arr3);
console.log(arr3.slice(0,1)); // 1을 반환 하지만 이 반환값을 다른 변수에 저장하지 않음 arr3 배열은 그대로
console.log(arr3.slice(0,2)); //1,2를 반환 arr3 배열은 그대로

// slice() 메소드의 두 번째 인자는 마지막 인덱스를 의미하지 않고
// 추출할 요소의 개수를 나타낸다. 요소란 : 배열의 각 원소 [1,2,3,4,5] 5개의 원소

// join 메소드 원본 배열의 모든 요소를 문자열로 변환
const arr10 = [1,2,3,4];
const result4 = arr10.join();
console.log(result4);

// reverse() 배열을 뒤집어 주는 메소드
// 배열 뒤집기
console.log(arr10.reverse())

const arr11 = [1,2,3,4,5];
// fill 메소드 es6 인자로 전달받은 값을 배열의 처음부터 끝까지 채워준다.
// 배열의 갯수를 유지하되 값을 초기화 해야할때 사용.
arr11.fill(0);
console.log(arr11);

// es10
// [1,2,3,4,5,[4,4]] = [1,2,3,4,5,4,4]
// flat() 메소드가 배열의 뎁스를 맞춰준다. 1차 배열로
const arr12 = [1,[2,3,4],[3,4]].flat(); // 한 뎁스씩 올려서 맞춰준다.
console.log(arr12);

const arr13 = [1,[2,[3]],[2,[5]]].flat(1);
console.log(arr13);

// 대괄호를 없애는 것은 평탄화 작업의 부가적인 효과일 뿐이며,
// 핵심적인 목적은 중첩된 배열을 1차원 배열로 만들어주는 것입니다.

const arr14 = [[[[[[1]]]]]].flat(Infinity);
console.log(arr14);

// 대괄호 안에 대괄호를 쓰는 것은 배열 안에 배열을 포함하는 다차원 배열을 만들기 위함
// 예를 들어 [[1,2],[3,4]]는 2차원 배열이고 
// 이 배열의 각 요소는 또 다른 1차원 배열 [1,2]와 [3,4]이다. => 배열 자체가 요소




