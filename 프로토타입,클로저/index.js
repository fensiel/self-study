//자바스크립트 프로토타입:

// JavaScript는 프로토타입 기반 언어입니다. 
// 이것은 객체 지향 프로그래밍에서 클래스가 아닌 객체를 기반으로 한다는 것을 의미합니다.
//  자바스크립트에서 객체는 다른 객체를 상속하는데 사용되는 프로토타입 객체를 가집니다.
//   즉, 객체는 다른 객체를 기반으로 만들어지며, 
//   이러한 상속 관계를 사용하여 코드를 재사용할 수 있습니다.

// 프로토타입은 모든 객체가 가지고 있는 특수한 속성으로, 이전 객체에서 상속됩니다. 
// 객체를 만들 때 프로토타입을 지정할 수 있으며, 
// 이를 통해 해당 객체가 상속할 속성과 메서드를 정의할 수 있습니다.


// Person 생성자 함수를 정의
function Person(name,age){
    this.name = name;
    this.age = age;
}

// this는 자바스크립트에서 현재 실행 중인 함수의 객체를 가리키는 키워드입니다.

// 위의 코드에서 Person 함수는 생성자 함수로 사용되고 있습니다. 
// 생성자 함수는 new 연산자와 함께 사용하여 객체를 생성할 때 사용됩니다. 
// 이때 생성된 객체는 생성자 함수의 this 키워드를 통해 속성에 접근할 수 있습니다.

// 즉, this.name과 this.age는 Person 생성자 함수로부터 
// 생성된 객체의 name과 age 속성을 의미합니다. 
// 생성자 함수 내에서 this를 사용하면 해당 함수를 사용하여 
// 생성된 객체 내부에서 속성에 접근할 수 있습니다.
//person 생성자 함수의 프로토타입에 sayHello 메서드를 정의
Person.prototype.sayHello = function(){
    console.log("Hello, my name is" + this.name + ".")
}

// Student 생성자 함수를 정의 Person을 상속
function Student(name,age,grade) {
    Person.call(this,name,age); // student 객체 자신을 가리킨다.
    this.grade = grade;
    // 이를통해 student 객체도 person 객체의 프로퍼티인
    // name과 age를 상속받을수 있다.
    //this 뒤에 점을 붙인것은 student 객체의 프로퍼티인 grade를 설정하기 위함
    //student객체는 name,age,grade 세 가지 프로퍼티를 가지게 됨
}

// student 생성자 함수의 프로토타입에 study 메서드를 정의
Student.prototype.study = function(){
    console.log(this.name + " is studying in grade" + " 10")
}

//person 프로토타입에 introduce 메서드를 정의합니다.
Person.prototype.introduce = function(){
    console.log("My name is" + this.name+ "and i am 25 years old"+".")
}

// person과 student 객체를 생성합니다.
let person = new Person("Alice",25);
let student = new Student("Bob");

person.sayHello(); // 출력: "Hello, my name is Alice."
student.study(); // 출력: "Bob is studying in grade 10."
person.introduce(); // 출력: "My name is Alice and I am 25 years old."




// -----------
// 자바스크립트 클로저
// 클로저(Closure)는 함수와 그 함수가 선언됐을 때의 
// 렉시컬 환경(Lexical Environment)과의 조합입니다.
//  이 말은, 함수가 선언될 당시의 환경에서 가져온 변수들을 계속해서 기억하고 있어,
//  함수가 호출될 때에도 그 변수들을 사용할 수 있게 해주는 것을 의미합니다.


 function outerFunction() {
    const outerVariable = "I am outside!";
    function innerFunction() {
      console.log(outerVariable);
    }
    return innerFunction;
    //return innerFunction; 구문은 innerFunction 함수 자체를 
    // outerFunction 함수 외부로 반환(return)하도록 합니다. 
    // 이는 innerFunction 함수가 클로저(closure)를 형성하여 
    // outerVariable 변수에 대한 접근 권한을 가지고 있기 때문입니다.
  }
  
  const innerFunc = outerFunction();
  innerFunc(); // "I am outside!" 출력

  // 위 코드에서 outerFunction 함수는 innerfunction 함수를 반환한다.
  // 이때 innerfunction은 outerfunction의 렉시컬 환경과의 조합을 통해 클로저가 되어
  // outerVariable변수를 사용할수 있게 된다.

  //-------------
  // 즉시 실행 함수 작성법

  (function() {
    var message = "Hello, world!";
    console.log(message);
  })();

  (function() {
    var message = "Hello, IIFE!";
    console.log(message);
  })();
  
  var message = "Hello, global!";
  console.log(message);

//위 코드에서는 함수를 정의하고 즉시 실행하며, 
//  함수 내부에서 message 변수를 선언하고 출력합니다. 
//  이 함수는 실행 후에 message 변수가 사라지므로 
//  전역 네임스페이스를 오염시키지 않습니다.
//또한, 함수 내부에서 선언된 변수는 외부에서 접근할 수 없기 때문에,
// 다음과 같이 변수 이름이 중복될 때 충돌을 방지하기 위해 
// 즉시 실행 함수를 사용하는 경우도 있습니다.

//--------

// 이터러블
// 이터러블(Iterable)은 반복 가능한 객체를 의미합니다. 
// 이터러블은 ES6부터 도입된 개념으로, 반복 가능한 객체를 만들기 위한 규칙을 정의합니다. 
// 이터러블을 사용하면 배열이나 문자열처럼 for...of문이나 Spread 연산자를 사용하여
//  간편하게 순회할 수 있습니다.

// 다음은 이터러블을 사용하여 반복 가능한 객체를 만들고 순회하는 예제입니다.

const myIterable = {
    [Symbol.iterator]: function* () {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  
  for (const value of myIterable) {
    console.log(value);
  }
  
  // 출력:
  // 1
  // 2
  // 3

  //위 코드에서 myIterable 객체는 이터러블 객체로, [Symbol.iterator] 메서드를 구현하고 있습니다.
//    이 메서드는 제너레이터 함수로 구현되어 있으며, yield 키워드를 사용하여 순회할 값들을 반환합니다.

// 그리고 for...of 문을 사용하여 myIterable 객체를 순회하면, [Symbol.iterator] 메서드가 반환하는 이터레이터(iterator) 객체가 사용됩니다. 
// 이터레이터 객체는 next 메서드를 가지고 있으며, next 메서드를 호출할 때마다 다음 값을 반환합니다. for...of 문은 next 메서드가 반환하는 값을 반복하면서 순회합니다.

// 따라서 위 예제에서는 for...of 문이 myIterable 객체를 순회하면서 1, 2, 3을 차례대로 출력합니다.

