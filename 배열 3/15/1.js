// 자바스크립트의 배열안의 배열은 객체배열이다.

let a = [[1,2,3],[4,5,6],[7,8,9]];
let b = [1,2,3,4,5,6,7];

b.push(8);
b.push(9);

for (let i =0; i<b.length; i++){
    console.log(b[i]);
}


const obj = {
    a : "나는 객체야",
    // 익명함수 : 이름이 없는 함수
    push : function (num){
        console.log("나는 obj 객체 안에 push라는 키값에 있는 함수야");
        console.log(num + "를 매개변수로 받았어 ㅎㅎ");
    }
}

console.log(obj.a);
obj.push(2);


let d = [1,2,3,4,5];

let return2 = d.indexOf(1);
console.log(return2);
// 인덱스는 0부터 시작한다.

let arr = ["사과","딸기","포도"];

let return3 = arr.indexOf("딸기");
console.log(return3);

// 배열 메소드 find
// 검색할때 사용할 함수
// 함수 반환값이 true나오는 함수를 넣어주고

// find라는 함수는 매개변수로 함수를 전달받는다.
let return4 = arr.find(function(i){
    console.log("item"+i);
    return i === "딸기";
});

//true가 나온 첫번째 값을 반환한다.
console.log(return4);

// 배열 메소드 findIndex
let return5 = arr.findIndex(function(item){
    return item === "딸기";
})

console.log(return5);

let arr2= ['이사과','김딸기','이포도']
// 배열 메소드 filter

// 문자열 가나다.
let str = "가나다";
console.log(str[0]);
// 문자열도 인덱스로 한자한자 접근이 가능하다.

let return6 = arr2.filter(function(item){
    return item[0] === "이";
})

console.log(return6);

//배열 메소드 map
let return7 = arr2.map(function(item){
    console.log(item);
    return item[0] ==="이";
})
//return item;
// 반환값들을 배열의 형태로 반환해준다.
console.log(return7);

arr2.forEach(function(item){
    console.log(item);
});

// 배열의 메소드 join
// 배열을 문자열로 변경시켜준다.
console.log(arr2.join(","));

let str3 = arr2.join(",");

// 문자열을 배열로 변경
console.log(str3.split(','))