function fun(){
    console.log("fun 함수 실행됨")
}
fun();

let temp = "나는 전역변수야";

function con(){
    let temp = "나는 지역변수야";
    console.log(temp);
}
con();
function con2(){
    let temp2 = "나 접근됨?"
    console.log(temp2);
}
con2(); // 함수 실행 ()를 붙여야지 함수 실행식

// 호이스팅:변수가 선언 되기도 전에 호출했을때

// 올바른 경우

function temp2(){
    let x = 5;
    console.log(x);
    //지역 변수 선언
   

}
temp2();

// 호이스팅의 경우
// function temp3(){
//     console.log(x);
//     let x =5;
// }
// temp3();


// 함수 사용 더해보자
// 함수에는 매개변수 // 매개변수
function fun2(v){
    // 전달받은 매개변수를 사용
    console.log(v);
}


// 전달받은 매개변수에 따라서 작업을 다르게 하고싶을떄
function fun3(num){
    console.log(`전달받은 매개변수는 : ${num}`)
}

let a =1;
let b = 2;
fun3(a);
fun3(b);
fun3(3);

// cup 컵이라는 함수를 만들고 컵은 물이라든지 음료수를 따를수있는 기능
// cup 컵이라는 함수를 만들고 매개변수로 drink 음료수를 따라줘보자.

function cup(drink){
    console.log(`컵에 ${drink}를 따랐음 ㅎㅎ`);
    console.log(`${drink}를 이컵에 따라서 마시니까 기분이 좋아.`);

}

let c = "오렌지 주스"
cup("포도주스");

// 매개변수는 여러개 전달도 가능하다.
function vending(money, unit){
    console.log(unit + "짜리" + money / unit + "개");
}

vending(1000,500);
vending(1000,100);


let e = vending;
console.log(e);
// e라는 변수에 vending함수라는 값이 들어있기 때문에 함수 실행식처럼 사용이 가능하다.

// e(1000,100);
// let f = vending();
// console.log(f);

function ab(){
    return "나는 반환값이야 "
    console.log("안보인다.")
}

let g = ab();
console.log(g);



// 함수 조금 심화

function sum(num1, num2){
    return num1+num2;
}

console.log(sum(1,2));

function gg(num){
    for (let i =1; i<10; i++){
        console.log(`${num}단 ${num} x ${i} = ${num * 1}`)
    }
}

gg(3);

function type(value){

    switch (value) {
        case 1:
            return "분노조절 잘해"
        
        case 2:
        return "과묵하지만 상냥해"
       
        case 3:
        return "조용하지만 술마시면 각오해"
    }
}

console.log(type(3));





