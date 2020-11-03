// 계산기 만들기
function cla()  {
    // function cla() {     or   const cla = () => { 바꿔야함
  let twoNumberA = prompt ("a수를 입력");
  
  let twoNumberB = prompt ("b수를 입력");
  
  let strToNumA = Number(twoNumberA);
  let strToNumB = Number(twoNumberB); // 오타 twoNumberB 로 변경
  
  let plus = strToNumA + strToNumB;
  let minus = strToNumA - strToNumB;
  let multiplication = strToNumA * strToNumB;
  let division = strToNumA / strToNumB;
  // 계산한 값을 리턴하지 말고 표시만 하면 되니까 두 수로 계산하고 바로 콘솔로그하면 될것 같다.
  
  console.log(plus, minus, multiplication, division); // 하나의 값만 리턴할 수 있어서 이렇게 작성 불가
  };
   
  cal();]


// BMI 만들기 
  // 변수에 할당된 값을 변경하지 않는다면 변수 선언할때 let이 아니라 const를 쓰도록 하시오.

let kgPrompt = prompt("몸무게를 입력하세요");
let heightPrompt = prompt("키를 입력하시오");



let KG = Number(kgPrompt);
let Height = Number(heightPrompt); // bmi 측정은 cm 기준이 아니라 m기준이므로 입력받을때 사용자가 잘 입력하도록 조건을 적던지, 개발자가 계산해서 사용해야함




let BMI = KG / Math.pow(height,2);


console.log(BMI); // 이 아이는 감싸주는 엄마(함수)가 없이 미아인데..? 혼자 덩그러니 리턴만 있네.



//화씨를 섭씨로
let F = prompt("화씨를 입력하세요")
let C = F - 32 / 1.8; // 실제 사칙연산과 비슷하게 계산하므로 (F - 32) / 1.8 변경해야함


console.log(C);// 이 아이는 감싸주는 엄마(함수)가 없이 미아인데..? 혼자 덩그러니 리턴만 있네.
//이것도 리턴보다는 화면에 프린트 되도록 하는게 나아 보임



//문자열의 길이구하기
let strInput = prompt("문자열을 입력하시오")

let strLength = strInput.lenght;
    
    console.log(strLength);// 이 아이는 감싸주는 엄마(함수)가 없이 미아인데..? 혼자 덩그러니 리턴만 있네.
//이것도 리턴보다는 화면에 프린트 되도록 하는게 나아 보임


// 대문자 소문자 분석기 
let str = prompt ("대문자, 소문자 분석기 문자를 입력하시오")

if (str === str.toUpperCase()) {
  alert("uppper");
}
else if (str === str.toLowerCase()) {
  alert("lower");
}
else if {str === str.toLowerCase() && str === str.toLowerCase()) {
  alert("it's noraml");
 }


 //while 문을 사용해서 1에서 100까지의 합을 구해 봅시다.
 
 let i = 0;
 let resultNum = 0;
 while (i < 101) {
resultNum = resultNum + i;
 console.log(resultNum);
 i++
 }




 // 1에서 100까지 짝수를 더하라.
 let num = 0;
        for (i = 0; i < 101; i++) {
            if ((i/i) === 0) {
         num += i; 
         console.log(num);
     }
    }
 


