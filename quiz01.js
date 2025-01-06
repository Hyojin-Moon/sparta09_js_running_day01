let uninitialized;
console.log(uninitialized); // 결과값 < 빈칸 >
//undefined => 선언만 하고 값을 할당하지 않았습니다.


const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
console.log(apple);


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); 
// 배열의 idx는 0부터시작하기 때문에 lotto[3] 은 배열의 4번째인 19 입니다.



let mySchedule = "";
console.log(mySchedule || false); // < 빈칸 >
// OR 연산자는 앞에 있는 값이 false면 뒤로넘어가고 뒤의값인 false를 반환합니다.
console.log(!!mySchedule); // < 빈칸 >
// 결과값을 boolean 값으로 변환됩니다. 빈문자열은 false 이므로 false입니다.