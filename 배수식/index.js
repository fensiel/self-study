// 코드 작성하기전에 
// 노트랑 팬사오고

// 루틴을 그려보자
let num = 2;
for(let i=1; i<10; i++){
    console.log(`${num}*${i}=${num*i}`)
}

// 이건 매개 변수 시간에 함수식을 활용하여 만든것
function gg(num){
    for (let i =1; i<10; i++){
        console.log(`${num}단 ${num}x ${i} = ${num * 1}`)
    }
}

gg(3);