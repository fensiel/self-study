// set은 배열에 중복되지 않는 값을 저장할수있다.
// 중복되지 않는 유일한 값들
// 배열은 요소에 순서에 의미가 있는데 set은 X
// 배열은 인덱스로 접근을 하는데 set은 접근이 안된다.

const s = new Set();
// 요소를 추가하는 방법

// add 메서드 사용에서
s.add("one");
s.add("one");
// 중복값은 허용하지 않는다.
s.add("two");
console.log(s);

const arr = [1,2,3,4,5];

const ss = new Set(arr);
console.log(ss);  //set(5) {1,2,3,4,5}
console.log(ss.has(2));

// forEach 이터러블 반복자.
ss.forEach(function(i){
    console.log(i);
})

// setIterator 객체로 변환
// 이터러블에 이터레이터를 반환 시켜준다.

//** 이터러블과 이터레이터의 차이 */
// 이터러블은 반복 가능한 객체
// symbol.iterator for of 루프에서 사용가능
// ----

// 이터레이터는 이터러블에서 반환된 값을 순차적으로 접근할수 있는 방법을 제공하는 객체
// 이터레이터는 메소드를 가지며 이 메소드는 value와 done 프로퍼티를 가진 객체반환
// 이터레이터는 이터러블을 순회할 때 사용

//*이터레이터 = 자바스크립트에서 객체를 반복할수 있는 방법을 제공하는 인터페이스
// 이터레이터는 next value와 완료 done 프로퍼티를 가진 객체를 반환한다.
// value은 현재 항목의 값이고 done은 더이상 항목이 없으면 true를 반환한다.

const temp = ss.entries();
console.log(temp);
console.log(temp.next().value);
console.log(temp.next().value);
console.log(temp.next().value);



//set 객체는 es6에서 새로 추가된 데이터 구조중 하나로 중복되지 않는 값들의 모음
//set 객체는 내부적으로 항목을 추가한 순서를 유지하며 반복 가능한 객체(iterable)
//set 객체에서 항목 entires()메소드를 호출하면 set 객체에 있는 모든 항목을 나타내는
// set iterator 객체를 반환한다.
// set iterator 객체는 next 메소드를 사용하여 항목의 집합을 반복할수있는 iterator 객체

// 즉 const temp = ss.entires 메소드를  호출하여 set iterator 객체를 반환한다.
// 이 set iterator 객체는 next() 메소드를 사용하여 set 객체 ss의 항목을 순서대로 검색

// 이터러블은 symbol.iterator next() 메소드를 가지고 있어야 한다.
// 이 다음 next() 메서드를 사용하여 이터러블 객체의 항목들을 하나씩 가져올수 있다.
// 따라서 set 객체는 iterable 객체로 entires 메소드를 호출하면 iterator 객체를 반환