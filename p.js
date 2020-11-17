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


    let n = Number(prompt("2이상 정수를 입력하시오")) {
        for(i = 2; i < n; i++) {
            if ( n % i === 0) {
                document.write(n + "은 소수가 아닙니다.")
                else if (n % i !== 0) {
                    document.write(n + "은 소수입니다.")
                }

            }
        }
    }
    // 함수를 통한 구구단 구현

    function calculate (x) {
        let result = [];
        for(let i = 1; i <= 9; i++) {
            result[i] = x * i;
        }
        return result;
    }


    function printNum  (x, arr) {                                                  // why they have two arguments?   
        document.write("<h1>" + n + "단<h1>");
        for(let j = 1; j <=9; j++) {
            document.write(x + "*" + j + "=" + arr[j] + "<br>");
        }
    }


    function main() {
        for (let n = 2; n <= 9; n++) {
           let  ret = calculate(n);
           printNum(n, ret);
        }
    }
    main();

    // 구구단 최종( 객체를 이용해서 구구단 구현)



    gugudan = {};
    gugudan.result = [];
    gugudan.current = -1;

    gugudan.calculate = function(n) {                                                
        this.current = n;
        for(let i = 0; i < 9; i++) {
            this.result[i] = n * (i -1); // 배열에 넣어주는 메소드 찾기

        }
    }
    

    gugudan.print = function() {
        for (let i = 0; i < 9; i++) {
            document.write(this.current + "*" + i + "=" + this.result + "<br>");

        }
    }

        function main() {
            for ( let n = 0; n < 9; n++) {
                gugudan.calculate(n);
                gugudan.print();  
                  
            }
        }

        main();

    // 사칙연산



function claculate() {
    let userNum = prompt("계산 숫자을 입력하시오");
    let n = userNum. // userNum 의 값을 받아와서 앞의 숫자는 n 으로 할당, 뒤는 i로 할당시켜준다. 

    //만약 + 가 있다면
    let plus = n + i;
    let minus = n - i;
    let multi = n * i;
    let div = n / i;
} 

function printValue (인자) {

    document.write(인자)
}



main () {

calculate();
printValue(); 

}



main();



// 계산기 최종 
<h1> 문자열 계산기 구현하기</h1>



<div id="output"> 결과가 여기에 나옵니다.</div>

<script>
    







function calc() {
    let str = document.getElementById('input').value;
    input.init(str);
    let result = input.getValue();
    while ()
}




    </script>








//1-1만 사이 소수 찾기

let savingNum = 0;
for(i : 0; i < 10000; i++) {
    let N = i - 1 ;
if( i % N = 0) {
savingNum = i;
}

}
 
//구구단 
    let n = Number(prompt("몇단의 구구단?"));

    document.write('2단' + "<br>");

    document.write(n + " * 1 = " + n * 1 + "<br>");
    document.write(n + " * 2 = " + n * 2 + "<br>");
    document.write(n + " * 3 = " + n * 3 + "<br>");
    document.write(n + " * 4 = " + n * 4 + "<br>");
    document.write(n + " * 5 = " + n * 5 + "<br>");
    document.write(n + " * 6 = " + n * 6 + "<br>");
    document.write(n + " * 7 = " + n * 7 + "<br>");
    document.write(n + " * 8 = " + n * 8 + "<br>");
    document.write(n + " * 9 = " + n * 9 + "<br>");



    //구구단 

    let numOfGugudan = propmt("구구단 단수를 입력하시오."));
    let n = Number(numOfGugudan);

    if (n < 2 || n > 9) {
        console.log("2이상 9이하 숫자를 입력하세요")
    } else {
        for(i = 1; i < 10 ; i++) {
            let valuNum = n * i;
            document.write(n + "*" i + "=" + valuNum + "<br>");

            //구구단 진화버전

        <input type="text" id ="num">
    <button onclick="display()">확인</button>
    <script>
        function display() {
            let strN = document.getElementById("num").value;
        // let numOfGugudan = prompt("단수를 입력하시오.");
        let n = Number(strN);

    if (n < 2 || n > 9) {
        console.log("2이상 9이하 숫자를 입력하세요");
    } else {
        for(i = 1; i < 10 ; i++) {
            let valuNum = n * i;
            document.write(n + "*" + i + "=" + valuNum + "<br>");
    } 
}

// </br>1-1만 사이에 소수들 리턴하기

    let savingNum = 





