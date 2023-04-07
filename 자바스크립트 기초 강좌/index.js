// name="mike";
// age=30;

// console.log(age);

// 이렇게 선언하면 위험함
// 다른 개발자가 name을 입력하면 내꺼는 사라짐
// 그래서 let을 사용함

// const는 절대로 바뀌지 않는 상수
// 변할수 있는 값은 let으로 선언

// 변수는 문자와 숫자, $와 _만 사용

// const name = "mike"; //문자형 string
// const age = 30;

// const name1 = "mike"
// const name2 = 'mike'
// const name3 = `mike`

// const message = "I'm a boy";
// const message2 = 'I\'m a boy';

// const message3 = `My name is ${name}`;
// console.log(message3)

// const message4 = `나는 ${(30+1)}살 입니다.`;
// console.log(message4);

// null과 undefined


// type of 연산자
// null != 객체 

// alert 알려줌
// 메시지를 보여줌 
// prompt 입력 받음
// 메시지를 보여주고 입력할수 있음
// confirm 확인 받음
// 사용자에게 확인을 받기위한 용도

// const fname = prompt("이름을 입력하세요")
// alert("환영합니다, " +fname + "님")

// const gname = prompt("예약일을 입력해주세요","2020-10");
// console.log(gname);

// const isAdult = confirm("당신은 성인 입니까?");👍👍👍
// console.log(isAdult)

// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) /2;

// console.log(result);
//prompt입력 -> 문자형이라서 prompt90+pormpt80 = 9080;👍
//"9080"/2 = 4540 왜 이럴까 9080도 분명 문자형인데 왜/2는 제대로 동작할까
//숫자형이 아니더라도 나누기 같은 표현식은 숫자형으로 자동 변환된다.

//명시적 형변환 string 
// string은 괄호안의 타입을 문자형으로 바꿔준다.

//number()
// 숫자형으로 변환 숫자가 아닌 문자입력시 NaN이 뜸

//BOolean 불린형으로 변환
// 0,",null,undefined,NaN -> 모두 false가 됨"

// console.log(
//     String(3),
//     String(true),
//     string(false),
//     string(null),
//     string(undefined)
// )

//boolean 

// 나머지%
// let num = 10;
// 첫번째 방법num = num+5;
// 두번째 방법num += 5; 변수에 5를 증가시켜서 다시 변수에 넣어주는👍



// 증가 연산자, 감소 연산자

// let num =10;
// // let result = num++; +를 뒤에 적으면 증가시키기 전의 값을 result 해놓음
// let result = ++num; // 증가시킨 값을 result 시켜놓음 👍
// console.log(result);

// 비교 연산자
// a=3 a에 3을 넣어줌 a==3 a가 3이랑 같다.
// console.log(10>5);
// console.log(10 ==5);
// console.log(10 !=5);

// // 동등 연산자
// const a =1;
// const b =1;

// console.log(a ===b) //일치 연산자


// if(age>19){
//     console.log("환영합니다.")
// }

// if(age<=19){
//     console.log("안녕히가세요");
// }
// 이 방법말고 else문을 사용하면 더 간편하다.👍👍👍

// else절은 if문의 코드가 false일때 작동된다.


// const age =30;

// if(age>19){
//     console.log("환영합니다");
// }else if(age ===19)
//     {console.log(`수능 잘치세요`);
// }else{
//     console.log("안녕히 가세요");}

    

// console.log(`---------------------------------`)

// 논리 연산자
// ||or
// && 그리고
// != 아니다

//or
// 이름이 tom이거나 성인이면 통과

// const name="mike";
// const age =10;

// if(name === `tom` || age > 19){
//     console.log(`통과`);
// }
// else{
//     console.log(`돌아가`);
// }


// const age = prompt('나이가 ..?');   👍👍👍
// const isAge = age > 19;

// if(!isAge){
//     console.log(`돌아가..`);
// }

// 우선순위
// 남자이고, 이름이 mike이거나 성인이면 통과


// const gender = `f`;    👍👍👍
// const name = `jane`;
// const isAdult = true;

// // if(gender === `M` && name ==="mike" || isAdult){
//     // 남자이고, 이름이 mike이거나 성인이면 통과로 하고 싶으면
//  if(gender === `M` && (name ==="mike" || isAdult)){
//     console.log(`통과`);
// }else{
//     console.log(`돌아가`);
// }

// for(let i=0; i<11; i++){
//     console.log(i);
// }
// // 초기값 조건 멈춤

// let i =0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// while true 무한반복
// while(true){
//     let answer = confirm("계속 쉴까요?");
//     if(!answer){
//         break;
//     }
// }

// for(let i=0; i<10; i++){
//     if(i%2){
//         continue;
//     }
//     console.log(i)
// }

// 명확한 횟수가 정해져있으면 for문을 그렇지않으면 while문을 사용한다고 함 while은 잘 사용안한다 함

// 모든 switch문은 if else로 작성 가능하다.

// switch(평가){
//     case A:
//         A일때 코드  
//     case B:
//         B일때 코드
// }

// if(평가 == A){
//     A일때 코드
// }else if(평가==B){
//     B일때 코드
// }




// let fruit = prompt("무슨 과일을 사고 싶나요?");👍👍👍👍👍👍

// switch(fruit){
//     case `사과` :
//         console.log(`100원 입니다`);
//         break;
//     case `바나나` :
//         console.log(`200원 입니다`);
//         break;
//     case `키위` :
//         console.log(`300원 입니다`);
//         break;
//     case `멜론` :
//     case `수박` :
//         console.log(`500원 입니다`);
//         break;
//     default :
//     console.log(`그런 과일은 없습니다`);
// }

// fruit가 바나나일대 이 이후 코드를 다 실행하기 때문에 break를 써준다.




// 함수 function 👍👍👍
// console, alert, confirm

// function sayHello(name){    
//     console.log(`Hello, ${name}`);
// }
// // 함수 함수명 매개변수

// sayHello(`Mike`);

// // 매개변수가 없는 함수를 만들어 보자(에러가 있는)
// function showError(){
//     alert(`에러가 발생했습니다. 새로고침 해주세요`);
// }

// showError();

// function sayHello(name){
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// }

// sayHello(`Mike`);
// sayHello(`Tom`);
// sayHello(`Jane`);😂


// function sayHello(name){''  
// let msg = `Hello `;
//     if(name){
//         msg += name;
//         // 이 메시지에 name을 더해서 다시 메시지에 넣어주고 있다.
//         // hello랑 mike라는 메시지가 더해서 hello mike가 출력이됨
//     }
//     console.log(msg);
// }

// sayHello();
// sayHello(`Mike`);


// 전역 변수와 지역 변수

// let msg = "welcome";
// console.log(msg)

// function sayHello(name){
//     let msg = "Hello"
//     console.log(msg + ' ' + name);
// }

// sayHello('Mike');
// console.log(msg)



// let name = "jane";

// function sayHello(name){
//     console.log(name)
// }

// sayHello();
// sayHello('jane');


// function sayHello(name){
//     let newName= name || `friend`;
//     let msg = `Hello, ${newName}`
//     console.log(msg)    
// }
// sayHello();
// sayHello(`Jane`);
// 매개변수가 없으면 undefined가 들어가기 때문에 
// name에 false가 나오고
// or는 마지막 true를 반환하기 때문에 friend를 반환하게 됩니다.






// function sayHello(name = 'friend'){
//     let msg = `Hello, ${name}`
//     console.log(msg)
// }

// sayHello();
// sayHello(`Jane`);



// return으로 값 반환

// function add(num1, num2){
//     return num1 + num2;
// }

// const result = add(2,3);
// console.log(result)


// 함수 선언문 vs 함수 표현식
// 1. 어디서든 호출 가능(이 코드는 호출하는 부분이 위에 있는데 어떻게 작동할까?)
// -->자바스크립트 내부 알고리즘 때문이다.
// 자바스크립트는 실행 전 초기화단계에서 코드의 모든 선언문을 찾아서 생성해둔다.(사용가능 범위가 더 커짐)
// 이를 호이스팅이라고 한다.


// sayHello();
// function sayHello(){
//     console.log(`Hello`);
// }

//2.
// let sayHello = function(){      // 생성후에
//     console.log(`Hello`);       // 사용가능
// }
// sayHello();


//👍👍👍👍👍👍
// 함수 표현식
// showError();
// let showError = function(){
//     console.log(`error`);
// }

// 함수 선언문
// showError();
// function showError(){
//     console.log("error");
// }




// 화살표 함수(익숙해 질때까지 연습 ES6이후 굉장히 활발하게 사용되고 있음)👍👍👍👍👍👍
// function을 지우고 ()뒤에 화살표를 해주면 된다.
// let showError = ()=>{
//     console.log("error");
// }

// const add = function (num1,num2){
//     const result = num1 + num2;
//     return result;
// };

// const add = (num1, num2) => num1 + num2;







//object-접근,추가,삭제👍👍👍👍👍👍
// const superman = {
//     name:'clark',
//     age:33,
// }

// // 접근 
// superman.name 
// superman['age']

// // 추가
// superman.gender='male';
// superman.['hairColor']='black';

//삭제
// delete superman.haircolor;




//👍👍👍👍👍👍
// const superman={
//     name :'clark',
//     age : 30,
// }

// superman.hairColor= 'black';
// superman['hobby'] = 'football;'
// console.log(superman);

// -----

// 객체
// function makeObject(name,age){
//     return {
//         name: name,
//         age: age,
//         hobby : 'football'
//     }
// }

// const Mike = makeObject('Mike',30);
// console.log(Mike);

// console.log('age' in Mike)
// console.log("birthday" in Mike);

// // 객체 in

// 나이를 확인하고 성인인지 아닌지 구분해주는 함수가 있다고 해보자
// function isAdult(user){
//     if(!('age' in user) || user.age <20){
//         return false;
//     }
//         return true;
    
// }

// const Mike = {
//     name : 'Mike',
//     age : 30
// }

// const Jane ={
//     name :"Jane"
// };

// console.log(isAdult(Mike))

// 객체 for ... in

// const Mike={
//     name : "Mike",
//     age:30
// };

// for(x in Mike){
//     console.log(Mike[x])
// }



//객체
// method/this

// const superman={
//     name:'clark',
//     age:33,
//     fly(){
//         console.log('날아갑니다')
//     }
//     }


// superman.fly();

// this예제
// 잘못된 식
// let boy = {
//     name : "mike",
//     showName: function (){
//         console.log(boy.name)
//     }
// };

// let man = boy;
// boy = null;

// man.showName();

// 잘된 식      😂😂hard
// let boy = {
//     name : "mike",
//     showName: function (){
//         console.log(this.name)// th
//     }
// };

// let man = boy;
// boy = null;

// man.showName();

//------------

// 배열의 특징
// 배열은 문자뿐만 아니라 숫자 객체 함수 등도 포함가능하다.
// length는 배열의 길이
// push는 배열 끝에 추가
// pop은 배열 긑 요소 제거
// 반복문 : for

// let days=['월','화'];

// for(let index=0; index<days.length; index++){
//     console.log(days[index])
// }

let days = ["mon","tue","wed"];
days.push("thu")
days.unshift("sun")
console.log(days);

for(let index=0;index<days,length; i++){
    console.log(days[index]);
}