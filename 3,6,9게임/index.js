const max = 100;
let i =1 ;
let num369 = 0;
// 369의 갯수에 따라 박수를 몇번칠지를 num369라는 변수로 만들어줌

for(i=1; i<=max; i++){
    //박수를 칠지 숫자를 외칠지 프린트해줄 html상의 코드
 
    let temp = i;
    if((temp%10===3)||(temp%10===6)||(temp%10===9)){
        num369++; // 뒷자리가 3,6,9인 경우
    }
    else if((temp/10===3)||(temp/10===6)||(temp/10===9)){
        num369++;   // 앞자리가 3,6,9인 경우
    }
    console.log(temp);
    console.log("박수 횟수" + num369);
}