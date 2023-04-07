let playerSelect;

let comSelect = parseInt(Math.random() *49 + 1);
// 1~50의 랜덤숫자

let count = 0; // 시도한 횟수

let max = 51;
let min = 0;

let subText = ""; // 컴퓨터가 알려줄 문구
let maxCount = 10; // 게임횟수 이걸로

// 반복 되어야 하니까
alert(comSelect);

while(playerSelect !== comSelect && count < maxCount){

    playerSelect = prompt(`${subText}\n 숫자를 입력하세요 \n 최소 : ${min} | 최대 : ${max} | 남은 횟수 : ${maxCount - count}`);

    if(isNaN(playerSelect))
    {
        subText = "숫자 입력 하셈~";
        continue;
    }

    if(min >=playerSelect || max <= playerSelect){
        subText = `너 입력값 확인해~ 최소 : ${min} | 최대 : ${max}`
        continue;
    }
    
    if(playerSelect > comSelect){
        // max 최대값을 다시 겹치지 않게 입력 해준다.
        max = playerSelect;
        subText = "커!";
    }else if(playerSelect < comSelect){
        // min 최소값을 다시 겹치지 않게 입력 해준다.
        min = playerSelect;
        subText = "작아!";
    }else{
        count++;
        console.log(`${count}번 시도해서 너 맞췄어 축하해~`);
        alert(`${count}번 시도해서 너 맞췄어 축하해~`);
        // 게임 끝났음
        break;
    }
    // 게임 횟수 증가해야함
    count++;
    if(count >= maxCount){
        // 너 실패함 게임 오버
        console.log("게임 오버 메롱~");
    }
    
}






